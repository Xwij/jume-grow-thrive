import { defineTool, ToolError } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { courses, SITE_URL } from "../data/courses";

export default defineTool({
  name: "get_course",
  title: "Get course details",
  description: "Get full details and the prospectus PDF link for one course, by its title or slug.",
  inputSchema: {
    course: z.string().trim().min(1).describe("Course title or slug, e.g. 'Permaculture Course' or 'plumbing'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ course }) => {
    const q = course.toLowerCase();
    const match =
      courses.find((c) => c.slug === q || c.title.toLowerCase() === q) ??
      courses.find((c) => c.title.toLowerCase().includes(q) || c.slug.includes(q.replace(/\s+/g, "-")));
    if (!match) {
      throw new ToolError(`No course found matching "${course}". Use list_courses to see all courses.`);
    }
    const row = {
      title: match.title,
      slug: match.slug,
      summary: match.summary,
      prospectusUrl: `${SITE_URL}${match.prospectusPath}`,
      pageUrl: `${SITE_URL}/projects`,
    };
    return {
      content: [{ type: "text", text: `${row.title}\n\n${row.summary}\n\nProspectus: ${row.prospectusUrl}\nPage: ${row.pageUrl}` }],
      structuredContent: { course: row },
    };
  },
});
