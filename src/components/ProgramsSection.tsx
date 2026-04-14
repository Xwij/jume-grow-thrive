import { motion } from "framer-motion";

const programs = [
  {
    title: "Permaculture Design Training",
    desc: "Introduces participants to permaculture principles and regenerative land design. Learn to design farms and landscapes that work with nature.",
    topics: ["Permaculture principles and ethics", "Garden and farm design", "Soil regeneration and composting", "Food forests and integrated farming systems"],
    icon: "🌳",
  },
  {
    title: "Biointensive Agriculture",
    desc: "Highly productive organic farming methods that increase yields while improving soil health. Ideal for small farmers with limited land.",
    topics: ["Deep soil preparation", "Intensive planting techniques", "Compost production", "Sustainable food production in small spaces"],
    icon: "🌾",
  },
  {
    title: "Water Harvesting & Retention",
    desc: "Practical techniques to capture, store, and manage rainwater in the landscape. Helping communities become resilient to drought and climate change.",
    topics: ["Rainwater harvesting systems", "Swales and contour design", "Small ponds and water retention", "Restoring the natural water cycle"],
    icon: "💧",
  },
  {
    title: "Agroforestry & Tree Nursery",
    desc: "Learn how trees can transform farms and landscapes, providing food, shade, biomass, fuel, and long-term environmental benefits.",
    topics: ["Establishing tree nurseries", "Integrating trees into farming", "Soil conservation and biodiversity", "Climate change resilience"],
    icon: "🌲",
  },
  {
    title: "Mushroom Cultivation",
    desc: "Practical organic mushroom production for nutrition and income generation, supporting youth and community enterprises.",
    topics: ["Substrate preparation", "Spawn management", "Mushroom house setup", "Harvesting and marketing"],
    icon: "🍄",
  },
  {
    title: "Hands-On Learning",
    desc: "Learning is practical at Jume College. Students develop skills they can apply immediately in their communities.",
    topics: ["Demonstration gardens", "Farm activities", "Water conservation projects", "Ecological restoration projects"],
    icon: "🙌",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Our Training Programs
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Education happens in the classroom and in the field through hands-on training, demonstration gardens, and community projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
              style={{ boxShadow: "var(--card-shadow)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow-hover)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--card-shadow)"; }}
            >
              <span className="text-4xl mb-4 block">{program.icon}</span>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{program.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{program.desc}</p>
              <ul className="space-y-2">
                {program.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm font-body text-foreground/80">
                    <span className="text-primary mt-0.5 text-xs">●</span>
                    {topic}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
