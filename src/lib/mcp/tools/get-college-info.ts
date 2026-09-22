import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_URL } from "../data/courses";

const info = {
  name: "JUME College - OTEPIC Kenya",
  description:
    "A community based not-for-profit organization in Trans Nzoia County, Kenya, offering vocational and agricultural training, permaculture and community development programs.",
  director: "Philip Munyasia",
  location: "Upendo Farm, Trans Nzoia County, Kenya",
  phone: "+254 725 429 179",
  email: "otepic07@yahoo.com",
  website: SITE_URL,
  pages: {
    about: `${SITE_URL}/about`,
    trainingsAndProjects: `${SITE_URL}/projects`,
    gallery: `${SITE_URL}/gallery`,
    impact: `${SITE_URL}/impact`,
    reportsAndNewsletters: `${SITE_URL}/newsletters`,
    tabasamuChildrensHome: `${SITE_URL}/tabasamu`,
    donate: `${SITE_URL}/donate`,
    contact: `${SITE_URL}/contact`,
  },
};

export default defineTool({
  name: "get_college_info",
  title: "Get college info",
  description: "Get contact details, location, director and key page links for JUME College - OTEPIC Kenya.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `${info.name}\n${info.description}\n\nDirector: ${info.director}\nLocation: ${info.location}\nPhone: ${info.phone}\nEmail: ${info.email}\nWebsite: ${info.website}`,
      },
    ],
    structuredContent: { info },
  }),
});
