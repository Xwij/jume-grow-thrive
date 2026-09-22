import { defineMcp } from "@lovable.dev/mcp-js";
import listCoursesTool from "./tools/list-courses";
import getCourseTool from "./tools/get-course";
import getCollegeInfoTool from "./tools/get-college-info";
import getImpactStatsTool from "./tools/get-impact-stats";

export default defineMcp({
  name: "jume-college-portal",
  title: "Jume College Portal",
  version: "0.1.0",
  instructions:
    "Public tools for JUME College - OTEPIC Kenya. Use `list_courses` and `get_course` for training courses and their prospectus PDFs, `get_college_info` for contact details and page links, and `get_impact_stats` for impact numbers and how donations are used.",
  tools: [listCoursesTool, getCourseTool, getCollegeInfoTool, getImpactStatsTool],
});
