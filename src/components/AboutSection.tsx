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
          <p className="text-base sm:text-lg font-body text-muted-foreground leading-relaxed mb-4">
            Jume College is a unique learning center created by the Organic Technology Extension and Promotion of Initiative Centre (OTEPIC Kenya) to train farmers, youth, and community leaders in sustainable living and practical solutions for today's environmental and social challenges.
          </p>
          <div className="space-y-4 text-left sm:text-left font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>The JUME College – OTEPIC Kenya stands at a time when humanity is experiencing profound transformation in this millennium. With the end of the Cold War, there is a growing global aspiration for peace. However, the world simultaneously faces unprecedented challenges: the depletion of natural resources, rapid population growth, and widespread environmental degradation.</p>
            <p>Humanity now faces two possible paths, shaped by the choices made in the coming years. One path leads to declining agricultural productivity caused by overpopulation, forcing many struggling rural farmers to migrate to cities, where they encounter overcrowding, poor living conditions, and urban poverty. The alternative path presents a more hopeful future, where smallholder farmers adopt environmentally responsible, market-oriented practices. This approach fosters rural prosperity and supports the development of clean, thriving urban centers grounded in holistic permaculture principles.</p>
            <p>Through its Local Outreach (Extension) Project, The JUME College – OTEPIC Kenya is actively guiding communities toward this positive path. The institution promotes the sustainable use and recycling of natural (organic) resources to maximize agricultural productivity. It is committed to working closely with communities—delivering training, assessing impact, and advancing the application of permaculture principles to achieve sustainable ecological agriculture.</p>
            <p>The JUME College – OTEPIC Kenya serves as a hub for research, training, education, extension services, and consultancy. It supports a diverse range of stakeholders engaged in aquaculture-based farming, with a strong focus on empowering women and youth within the agricultural sector.</p>
          </div>
        </motion.div>

        {/* Mission */}
        <div className="grid md:grid-cols-1 gap-6 mb-16 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-card rounded-2xl p-6 sm:p-8 border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-3">Our Mission</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              The JUME College – OTEPIC Kenya disseminates appropriate low-cost agricultural technologies through community education and participation in addressing food security based on the twelve permaculture principles. Through realistic and practical socio-economic and scientific agricultural technologies, we work to alleviate poverty, increase environmental resilience, and empower communities — improving bio-diversity and working towards sustainability. We believe everybody should be food secure and live in a better environment by looking at everything holistically using permaculture principles.
            </p>
          </motion.div>
        </div>

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
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">Our Main Objectives</h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-3 text-sm">
              The JUME College – OTEPIC Kenya was initiated to promote permaculture principles through research, training, teaching, extension and consultancy.
            </p>
            <ul className="space-y-2 font-body text-muted-foreground text-sm leading-relaxed mb-6 list-decimal pl-5">
              <li>Attain food security at the household level.</li>
              <li>Provide adequate and safe drinking water for human, livestock and irrigation purposes.</li>
              <li>Create wealth by starting, supporting and strengthening income-generating sustainable ecological agriculture activities based on permaculture principles.</li>
              <li>Improve and sustain ecological farming systems.</li>
              <li>Build the capacity of members and communities through sustainable ecological agriculture using holistic permaculture principles.</li>
              <li>Advocate for animals' rights and animal humane education.</li>
            </ul>
            <a href="/about#org-works" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
              View More →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
