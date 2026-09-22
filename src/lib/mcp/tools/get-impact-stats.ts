import { defineTool } from "@lovable.dev/mcp-js";
import { SITE_URL } from "../data/courses";

const stats = [
  { label: "Farmers Reached", value: "30,000+" },
  { label: "Adoption Rate", value: "52%" },
  { label: "Synthetic Input Reduction", value: "60%" },
  { label: "Income Increase", value: "30%" },
  { label: "People Provided with Clean Drinking Water", value: "3,000+" },
];

const supportGoes = [
  "Installing water tanks for the demonstration farms",
  "Planting trees for fruits and shades",
  "Training farmers on solar dryers",
  "Setting up mushroom production units for production and training",
  "Buying farm tools and equipment",
  "Buying seeds",
  "Supporting Tabasamu Orphanage",
  "Paying salaries",
  "Making training materials",
  "Covering administrative costs",
  "Supporting life coping skills training",
];

export default defineTool({
  name: "get_impact_stats",
  title: "Get impact stats",
  description: "Get the college's headline impact numbers and where donations are used.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: `Impact\n${stats.map((s) => `- ${s.label}: ${s.value}`).join("\n")}\n\nWhere your support goes\n${supportGoes
          .map((s) => `- ${s}`)
          .join("\n")}\n\nDetails: ${SITE_URL}/impact`,
      },
    ],
    structuredContent: { stats, supportGoes, impactPageUrl: `${SITE_URL}/impact` },
  }),
});
