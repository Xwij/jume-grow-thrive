import { motion } from "framer-motion";
import campusImg from "@/assets/campus.jpg";
import trainingImg from "@/assets/training-field.jpg";
import communityGardenImg from "@/assets/community-garden.jpg";
import communityKidsImg from "@/assets/community-kids.jpg";

const values = [
  { icon: "🌱", title: "Sustainable Agriculture", desc: "Grow healthy food using regenerative farming methods" },
  { icon: "🌍", title: "Soil & Environment", desc: "Restore soil fertility and protect natural ecosystems" },
  { icon: "💧", title: "Water Resources", desc: "Harvest and manage water for resilient communities" },
  { icon: "🤝", title: "Green Livelihoods", desc: "Create community enterprises and green economies" },
  { icon: "🌿", title: "Harmony with Nature", desc: "Live sustainably and in balance with the natural world" },
];

const galleryImages = [
  { src: campusImg, label: "Campus & Grounds" },
  { src: trainingImg, label: "Training in Action" },
  { src: communityGardenImg, label: "Community Garden" },
  { src: communityKidsImg, label: "Students & Community" },
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
          <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            A Better Future Begins Here
          </h2>
          <p className="text-base sm:text-lg font-body text-muted-foreground leading-relaxed">
            Jume College is a unique learning center created by the Organic Technology Extension and Promotion of Initiative Centre (OTEPIC Kenya) to train farmers, youth, and community leaders in sustainable living and practical solutions for today's environmental and social challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-5 sm:p-6 text-center border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <span className="text-3xl sm:text-4xl mb-3 block">{item.icon}</span>
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
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 right-3 text-primary-foreground font-body text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">More Than a Training Center</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Jume College is a living laboratory for sustainable development, where innovation, traditional knowledge, and community action come together.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              From farmers seeking better harvests to international volunteers eager to learn about ecological solutions, Jume College welcomes everyone who believes in building a healthier planet and stronger communities.
            </p>
            <a href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
              Learn Our Story →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
