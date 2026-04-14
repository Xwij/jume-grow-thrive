import { motion } from "framer-motion";

const values = [
  { icon: "🌱", title: "Sustainable Agriculture", desc: "Grow healthy food using regenerative farming methods" },
  { icon: "🌍", title: "Soil & Environment", desc: "Restore soil fertility and protect natural ecosystems" },
  { icon: "💧", title: "Water Resources", desc: "Harvest and manage water for resilient communities" },
  { icon: "🤝", title: "Green Livelihoods", desc: "Create community enterprises and green economies" },
  { icon: "🌿", title: "Harmony with Nature", desc: "Live sustainably and in balance with the natural world" },
];

const AboutSection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            A Better Future Begins Here
          </h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground leading-relaxed">
            Jume College is a unique learning center created by the Organic Technology Extension and Promotion of Initiative Centre (OTEPIC Kenya) to train farmers, youth, and community leaders in sustainable living and practical solutions for today's environmental and social challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 text-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="font-display font-semibold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border border-border">
              <span className="text-muted-foreground font-body text-sm">Image Placeholder</span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">More Than a Training Center</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Jume College is a living laboratory for sustainable development, where innovation, traditional knowledge, and community action come together.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              From farmers seeking better harvests to international volunteers eager to learn about ecological solutions, Jume College welcomes everyone who believes in building a healthier planet and stronger communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
