import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import avocadosImg from "@/assets/avocados.jpg";
import bananasImg from "@/assets/bananas.jpg";

const services = [
  {
    icon: "🌱",
    title: "Permaculture Consultancy",
    desc: "Expert farm and landscape design using permaculture principles. We help you create productive, self-sustaining systems tailored to your land and climate.",
    features: ["Site analysis & design", "Implementation support", "Follow-up mentoring"],
  },
  {
    icon: "📚",
    title: "Training & Workshops",
    desc: "Hands-on training programs in sustainable agriculture, water harvesting, agroforestry, and mushroom cultivation for individuals, groups, and organizations.",
    features: ["Short courses (1–5 days)", "Certificate programs", "Custom group training"],
  },
  {
    icon: "🌍",
    title: "Community Development",
    desc: "We partner with communities to design and implement projects that improve food security, water access, and livelihoods through ecological approaches.",
    features: ["Needs assessment", "Project planning", "Capacity building"],
  },
  {
    icon: "🤝",
    title: "Volunteer & Internship Programs",
    desc: "International and local volunteers can join our campus to learn, contribute, and experience regenerative agriculture first-hand.",
    features: ["Work-stay programs", "Research placements", "Cultural exchange"],
  },
  {
    icon: "🌳",
    title: "Tree Nursery & Seedlings",
    desc: "We produce and distribute quality tree seedlings for agroforestry, reforestation, and food forest establishment.",
    features: ["Indigenous species", "Fruit tree varieties", "Bulk orders available"],
  },
  {
    icon: "🍄",
    title: "Mushroom Production Support",
    desc: "From substrate preparation to marketing, we help entrepreneurs and groups set up profitable mushroom enterprises.",
    features: ["Spawn supply", "Technical training", "Enterprise mentoring"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-padding overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="container-narrow relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-background/60 font-semibold mb-3">What We Do</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Our Services</h1>
            <p className="font-body text-background/80 text-lg">Comprehensive solutions for sustainable agriculture, community development, and environmental restoration.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA with images */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={avocadosImg} alt="Avocado harvest" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
              <img src={bananasImg} alt="Banana plantation" className="rounded-2xl w-full h-48 object-cover" loading="lazy" />
            </div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Whether you're a farmer looking for training, an organization seeking partnership, or a volunteer ready to make a difference — we'd love to hear from you.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity">
                Contact Us →
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
