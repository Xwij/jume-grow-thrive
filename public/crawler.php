<?php

/**
 * JUME COLLEGE SITEMAP CRAWLER
 * https://jumecollege.education/
 */

set_time_limit(0);
ini_set('memory_limit', '512M');

$START_URL = 'https://jumecollege.education/';
$DOMAIN = 'jumecollege.education';

$MAX_PAGES = 5000;
$REQUEST_TIMEOUT = 15;

$visited = [];
$queue = [];
$pages = [];
$errors = [];

$queue[] = $START_URL;


/* =========================================================
   URL NORMALIZATION
========================================================= */

function normalizeUrl($url)
{
    $url = trim($url);

    if ($url === '') {
        return null;
    }

    // Remove fragments
    $url = preg_replace('/#.*$/', '', $url);

    // Remove trailing whitespace
    $url = trim($url);

    if (!filter_var($url, FILTER_VALIDATE_URL)) {
        return null;
    }

    $parts = parse_url($url);

    if (!$parts || !isset($parts['host'])) {
        return null;
    }

    $scheme = strtolower($parts['scheme'] ?? 'https');
    $host   = strtolower($parts['host']);

    $port = '';

    if (isset($parts['port'])) {
        $port = ':' . $parts['port'];
    }

    $path = $parts['path'] ?? '/';

    if ($path === '') {
        $path = '/';
    }

    // Normalize duplicate slashes
    $path = preg_replace('#/+#', '/', $path);

    // Keep query parameters
    $query = isset($parts['query'])
        ? '?' . $parts['query']
        : '';

    return $scheme . '://' . $host . $port . $path . $query;
}


/* =========================================================
   DOMAIN CHECK
========================================================= */

function isInternalUrl($url, $domain)
{
    $host = parse_url($url, PHP_URL_HOST);

    if (!$host) {
        return false;
    }

    $host = strtolower($host);

    return (
        $host === $domain ||
        $host === 'www.' . $domain
    );
}


/* =========================================================
   HTTP REQUEST
========================================================= */

function fetchPage($url, $timeout = 15)
{
    $ch = curl_init();

    curl_setopt_array($ch, [

        CURLOPT_URL => $url,

        CURLOPT_RETURNTRANSFER => true,

        CURLOPT_FOLLOWLOCATION => true,

        CURLOPT_MAXREDIRS => 5,

        CURLOPT_CONNECTTIMEOUT => 10,

        CURLOPT_TIMEOUT => $timeout,

        CURLOPT_SSL_VERIFYPEER => true,

        CURLOPT_SSL_VERIFYHOST => 2,

        CURLOPT_USERAGENT =>
            'JumeCollege-SitemapCrawler/1.0 (+https://jumecollege.education/)',

        CURLOPT_HTTPHEADER => [
            'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        ]

    ]);

    $body = curl_exec($ch);

    $error = curl_error($ch);

    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);

    $finalUrl = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);

    curl_close($ch);

    return [

        'body' => $body,

        'error' => $error,

        'http_code' => $httpCode,

        'content_type' => $contentType,

        'final_url' => $finalUrl

    ];
}


/* =========================================================
   ABSOLUTE URL CONVERTER
========================================================= */

function makeAbsoluteUrl($link, $baseUrl)
{
    $link = trim($link);

    if ($link === '') {
        return null;
    }

    // Ignore unwanted links
    if (
        preg_match(
            '/^(javascript:|mailto:|tel:|sms:|data:|whatsapp:)/i',
            $link
        )
    ) {
        return null;
    }

    // Already absolute
    if (preg_match('/^https?:\/\//i', $link)) {
        return normalizeUrl($link);
    }

    $base = parse_url($baseUrl);

    if (!$base || !isset($base['host'])) {
        return null;
    }

    $scheme = $base['scheme'] ?? 'https';

    $host = $base['host'];

    $port = isset($base['port'])
        ? ':' . $base['port']
        : '';

    // Protocol-relative URL
    if (strpos($link, '//') === 0) {
        return normalizeUrl(
            $scheme . ':' . $link
        );
    }

    // Root-relative
    if (strpos($link, '/') === 0) {
        return normalizeUrl(
            $scheme .
            '://' .
            $host .
            $port .
            $link
        );
    }

    // Relative URL
    $basePath = $base['path'] ?? '/';

    $directory = dirname($basePath);

    if ($directory === '\\' || $directory === '.') {
        $directory = '/';
    }

    $fullPath =
        rtrim($directory, '/') .
        '/' .
        $link;

    // Resolve ../ and ./
    $segments = [];

    foreach (explode('/', $fullPath) as $segment) {

        if ($segment === '' || $segment === '.') {
            continue;
        }

        if ($segment === '..') {

            array_pop($segments);

        } else {

            $segments[] = $segment;

        }
    }

    $resolvedPath =
        '/' .
        implode('/', $segments);

    return normalizeUrl(
        $scheme .
        '://' .
        $host .
        $port .
        $resolvedPath
    );
}


/* =========================================================
   EXTRACT LINKS
========================================================= */

function extractLinks($html, $baseUrl)
{
    $links = [];

    libxml_use_internal_errors(true);

    $dom = new DOMDocument();

    if (@$dom->loadHTML($html)) {

        $anchors = $dom->getElementsByTagName('a');

        foreach ($anchors as $anchor) {

            $href = $anchor->getAttribute('href');

            $absolute = makeAbsoluteUrl(
                $href,
                $baseUrl
            );

            if ($absolute) {
                $links[] = $absolute;
            }
        }
    }

    libxml_clear_errors();

    return array_unique($links);
}


/* =========================================================
   ROBOTS.TXT
========================================================= */

function getRobots($domain)
{
    $url = 'https://' . $domain . '/robots.txt';

    $result = fetchPage($url);

    if ($result['http_code'] === 200) {
        return $result['body'];
    }

    return '';
}


function isAllowedByRobots($url, $robots)
{
    if (!$robots) {
        return true;
    }

    $path = parse_url($url, PHP_URL_PATH);

    if (!$path) {
        $path = '/';
    }

    $lines = preg_split(
        '/\r\n|\r|\n/',
        $robots
    );

    $userAgentMatched = false;

    foreach ($lines as $line) {

        $line = trim($line);

        if (
            stripos($line, 'User-agent:') === 0
        ) {

            $agent = trim(
                substr(
                    $line,
                    strlen('User-agent:')
                )
            );

            $userAgentMatched =
                ($agent === '*' ||
                 stripos($agent, 'JumeCollege-SitemapCrawler') !== false);
        }

        if (
            $userAgentMatched &&
            stripos($line, 'Disallow:') === 0
        ) {

            $disallow = trim(
                substr(
                    $line,
                    strlen('Disallow:')
                )
            );

            if (
                $disallow !== '' &&
                strpos($path, $disallow) === 0
            ) {
                return false;
            }
        }
    }

    return true;
}


/* =========================================================
   FILE TYPE
========================================================= */

function getResourceType($url, $contentType = '')
{
    $path = strtolower(
        parse_url($url, PHP_URL_PATH) ?? ''
    );

    if (
        strpos($contentType, 'text/html') !== false
    ) {
        return 'page';
    }

    if (preg_match('/\.pdf$/', $path)) {
        return 'pdf';
    }

    if (preg_match('/\.(jpg|jpeg|png|gif|webp|svg)$/', $path)) {
        return 'image';
    }

    if (preg_match('/\.(css)$/', $path)) {
        return 'css';
    }

    if (preg_match('/\.(js)$/', $path)) {
        return 'javascript';
    }

    return 'other';
}


/* =========================================================
   START CRAWLING
========================================================= */

echo "<pre>";

echo "============================================\n";
echo " JUME COLLEGE SITEMAP CRAWLER\n";
echo "============================================\n\n";

echo "Starting URL: $START_URL\n";
echo "Domain: $DOMAIN\n\n";


$robots = getRobots($DOMAIN);

echo "robots.txt checked.\n\n";


while (!empty($queue) && count($visited) < $MAX_PAGES) {

    $url = array_shift($queue);

    if (!$url) {
        continue;
    }

    $url = normalizeUrl($url);

    if (!$url) {
        continue;
    }

    if (isset($visited[$url])) {
        continue;
    }

    if (!isInternalUrl($url, $DOMAIN)) {
        continue;
    }

    if (!isAllowedByRobots($url, $robots)) {

        echo "ROBOTS BLOCKED: $url\n";

        continue;
    }


    $visited[$url] = true;


    echo "[" .
        count($visited) .
        "] Crawling: " .
        $url .
        "\n";


    $result = fetchPage(
        $url,
        $REQUEST_TIMEOUT
    );


    $status = $result['http_code'];

    $contentType = $result['content_type'] ?? '';

    $type = getResourceType(
        $url,
        $contentType
    );


    $pages[] = [

        'url' => $url,

        'status' => $status,

        'type' => $type,

        'content_type' => $contentType,

        'error' => $result['error']

    ];


    if ($result['error']) {

        $errors[] = [
            $url,
            $result['error']
        ];

        continue;
    }


    if (
        $status >= 400 ||
        !$result['body']
    ) {

        $errors[] = [
            $url,
            "HTTP $status"
        ];

        continue;
    }


    // Only parse HTML
    if (
        stripos(
            $contentType,
            'text/html'
        ) === false
    ) {
        continue;
    }


    $links = extractLinks(
        $result['body'],
        $url
    );


    foreach ($links as $link) {

        if (
            !isInternalUrl(
                $link,
                $DOMAIN
            )
        ) {
            continue;
        }


        if (!isset($visited[$link])) {

            $queue[] = $link;

        }
    }


    // Remove duplicate queue items
    $queue = array_values(
        array_unique($queue)
    );
}


echo "\n============================================\n";
echo " CRAWL COMPLETE\n";
echo "============================================\n";

echo "Pages discovered: " .
    count($visited) .
    "\n";

echo "Resources recorded: " .
    count($pages) .
    "\n";

echo "Errors: " .
    count($errors) .
    "\n\n";


/* =========================================================
   GENERATE SITEMAP.XML
========================================================= */

$xml = new DOMDocument(
    '1.0',
    'UTF-8'
);

$xml->formatOutput = true;

$urlset = $xml->createElement(
    'urlset'
);

$urlset->setAttribute(
    'xmlns',
    'http://www.sitemaps.org/schemas/sitemap/0.9'
);

$xml->appendChild($urlset);


foreach ($pages as $page) {

    if (
        $page['type'] !== 'page'
    ) {
        continue;
    }

    if (
        $page['status'] < 200 ||
        $page['status'] >= 400
    ) {
        continue;
    }


    $urlNode = $xml->createElement(
        'url'
    );


    $loc = $xml->createElement(
        'loc'
    );

    $loc->appendChild(
        $xml->createTextNode(
            $page['url']
        )
    );


    $lastmod = $xml->createElement(
        'lastmod'
    );

    $lastmod->appendChild(
        $xml->createTextNode(
            date('c')
        )
    );


    $urlNode->appendChild($loc);

    $urlNode->appendChild($lastmod);

    $urlset->appendChild($urlNode);
}


$xml->save(
    __DIR__ . '/sitemap.xml'
);


/* =========================================================
   CSV REPORT
========================================================= */

$csvFile = fopen(
    __DIR__ . '/crawl-report.csv',
    'w'
);


fputcsv(
    $csvFile,
    [
        'URL',
        'HTTP Status',
        'Type',
        'Content Type',
        'Error'
    ]
);


foreach ($pages as $page) {

    fputcsv(
        $csvFile,
        [
            $page['url'],
            $page['status'],
            $page['type'],
            $page['content_type'],
            $page['error']
        ]
    );
}


fclose($csvFile);


/* =========================================================
   ERROR REPORT
========================================================= */

$errorFile = fopen(
    __DIR__ . '/crawl-errors.csv',
    'w'
);


fputcsv(
    $errorFile,
    [
        'URL',
        'Error'
    ]
);


foreach ($errors as $error) {

    fputcsv(
        $errorFile,
        $error
    );
}


fclose($errorFile);


echo "Generated:\n";
echo "  sitemap.xml\n";
echo "  crawl-report.csv\n";
echo "  crawl-errors.csv\n";

echo "\n============================================\n";
echo " DONE\n";
echo "============================================\n";

echo "</pre>";
?>