import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { courses, SITE_URL } from "../data/courses";

export default defineTool({
  name: "list_courses",
  title: "List courses",
  description: "List the training courses offered by JUME College - OTEPIC Kenya, with a summary and prospectus PDF link for each.",
  inputSchema: {
    search: z.string().trim().min(1).optional().describe("Optional keyword to filter courses by title or summary."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ search }) => {
    const q = search?.toLowerCase();
    const matches = q ? courses.filter((c) => `${c.title} ${c.summary}`.toLowerCase().includes(q)) : courses;
    const rows = matches.map((c) => ({
      title: c.title,
      slug: c.slug,
      summary: c.summary,
      prospectusUrl: `${SITE_URL}${c.prospectusPath}`,
    }));
    const text = rows.length
      ? rows.map((r) => `${r.title}\n${r.summary}\nProspectus: ${r.prospectusUrl}`).join("\n\n")
      : `No courses matched "${search}".`;
    return { content: [{ type: "text", text }], structuredContent: { count: rows.length, courses: rows } };
  },
});
