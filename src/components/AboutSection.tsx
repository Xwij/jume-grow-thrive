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
            WHO WE ARE
          </h2>
          <div className="space-y-4 text-left font-body text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>The Jume College - OTEPIC Kenya is a community based not for profit organization working in Trans-Nzoia County. OTEPIC is dedicated to promoting permaculture holistic principles to low cost, biologically based, environmentally friendly and economically viable strategies for increasing productivity for small holder farm families in order to achieve social and economic sustenance. OTEPIC targets economically and socially disadvantaged small-scale farm families and more importantly women at the grass root level. All the capacity building work is done through The Jume College OTEPIC Kenya as an organization.</p>
            <p>OTEPIC was initiated to tackle the problems of deforestation, soil erosion, food insecurity, high pest prevalence, bio-diversity loss, water problems and health problems. Activities include low input sustainable ecological agriculture, Bee keeping, Agroforestry, Semi zero grazing, Integrated Pest Management (IPM), Soil erosion control, Kitchen gardens and Table banking.</p>
            <p>The Jume College OTEPIC Kenya also supports young people and families in overcoming challenges such as rehabilitation, stress, family issues, drug abuse, and struggles with finding purpose in life. By unlocking the potential of African youth, OTEPIC offers alternative path, helping them discover their purpose through education. Through OTEPIC, individuals learn how to create their own employment opportunities and develop projects that positively impact their lives and communities.</p>
            <p>In order for OTEPIC to reach and have a lasting impact in the community and globally, it was seen appropriate to start a training college for one day, three days, one week, three months, one year and two year craft and apprenticeship courses for farmers and college level students who have interest in farming as a career. This is how the idea of JUME College - OTEPIC Kenya was conceived. This Report highlights some of the activities that have been done and are on-going at the college.</p>
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
