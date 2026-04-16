import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    details: "Our permaculture consultancy service provides a comprehensive approach to land management. We begin with a thorough site analysis — evaluating soil health, water flow, sun exposure, existing vegetation, and microclimates. From there, we develop a detailed design plan based on permaculture zones and sectors, integrating food forests, swales, keyline design, and companion planting. We walk with you through implementation, offering hands-on guidance and periodic reviews to ensure your system matures into a thriving, low-maintenance ecosystem. Whether you have a small homestead or a large community farm, our designs are tailored to maximize yield while regenerating the landscape.",
  },
  {
    icon: "📚",
    title: "Training & Workshops",
    desc: "Hands-on training programs in sustainable agriculture, water harvesting, agroforestry, and mushroom cultivation for individuals, groups, and organizations.",
    features: ["Short courses (1–5 days)", "Certificate programs", "Custom group training"],
    details: "Jume College offers immersive, practical training that goes beyond the classroom. Our workshops cover sustainable agriculture, water harvesting (rainwater tanks, swales, retention ponds), agroforestry systems, organic composting, mushroom cultivation, and seed saving. Courses range from 1-day introductions to 2-week certificate programs. We also design custom training packages for NGOs, farmer cooperatives, schools, and government agencies. All training includes field demonstrations on our working campus, take-home reference materials, and post-training support. Our graduates leave equipped with skills they can immediately apply on their own farms and in their communities.",
  },
  {
    icon: "🌍",
    title: "Community Development",
    desc: "We partner with communities to design and implement projects that improve food security, water access, and livelihoods through ecological approaches.",
    features: ["Needs assessment", "Project planning", "Capacity building"],
    details: "Our community development approach is participatory and holistic. We start by listening — conducting needs assessments and mapping local resources, challenges, and aspirations. Together with community members, we co-design projects that address food security, clean water access, income generation, and environmental restoration. Past projects include community food forests, school gardens, women's farming cooperatives, rainwater harvesting systems, and youth enterprise programs. We emphasize capacity building so communities can sustain and scale their initiatives independently. Our goal is lasting, community-owned transformation.",
  },
  {
    icon: "🤝",
    title: "Volunteer & Internship Programs",
    desc: "International and local volunteers can join our campus to learn, contribute, and experience regenerative agriculture first-hand.",
    features: ["Work-stay programs", "Research placements", "Cultural exchange"],
    details: "Our volunteer and internship programs welcome people from around the world to live and learn at Jume College. Participants engage in daily farm activities — planting, harvesting, composting, mushroom production, and tree nursery work — while gaining deep understanding of permaculture and sustainable living. Programs range from 2 weeks to 6 months. We also host research placements for university students studying agriculture, ecology, or development. Volunteers enjoy cultural exchange, community meals, and the chance to make a tangible impact. Accommodation and meals are provided on campus. It's an experience that transforms perspectives and builds lifelong connections.",
  },
  {
    icon: "🌳",
    title: "Tree Nursery & Seedlings",
    desc: "We produce and distribute quality tree seedlings for agroforestry, reforestation, and food forest establishment.",
    features: ["Indigenous species", "Fruit tree varieties", "Bulk orders available"],
    details: "Our on-campus tree nursery produces thousands of seedlings annually, including indigenous trees (Markhamia, Croton, Prunus africana), fruit trees (avocado, mango, passion fruit, guava, citrus), nitrogen-fixing species (Calliandra, Sesbania, Leucaena), and timber species. We supply seedlings to individual farmers, schools, community groups, and reforestation programs. Each seedling comes with planting and care guidance. Bulk orders are available at discounted rates for large-scale projects. Our nursery also serves as a training ground where students learn propagation techniques, grafting, and nursery management — skills they carry into their own enterprises.",
  },
  {
    icon: "🍄",
    title: "Mushroom Production Support",
    desc: "From substrate preparation to marketing, we help entrepreneurs and groups set up profitable mushroom enterprises.",
    features: ["Spawn supply", "Technical training", "Enterprise mentoring"],
    details: "Mushroom farming is one of the most accessible and profitable agri-enterprises, and we provide end-to-end support to get you started. Our services include spawn (seed) production and supply, substrate preparation training (using locally available materials like sugarcane bagasse, sawdust, and straw), inoculation techniques, incubation and fruiting room setup, harvesting and post-harvest handling, and market linkage. We offer both group training and individual mentoring, helping entrepreneurs develop business plans and connect with buyers. Our oyster mushroom production unit on campus serves as a live demonstration, and trainees get hands-on practice from day one.",
  },
];

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null);

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
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                style={{ boxShadow: "var(--card-shadow)" }}
                onClick={() => setOpenService(i)}
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="text-primary text-sm font-semibold font-body group-hover:underline">Learn more →</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Popup */}
      <AnimatePresence>
        {openService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpenService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border relative"
              style={{ boxShadow: "0 25px 60px -12px rgba(0,0,0,0.4)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenService(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl font-bold transition-colors"
              >
                ✕
              </button>
              <span className="text-5xl mb-4 block">{services[openService].icon}</span>
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">{services[openService].title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {services[openService].features.map((f) => (
                  <span key={f} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-body">{f}</span>
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-[15px]">{services[openService].details}</p>
              <div className="mt-6 pt-4 border-t border-border">
                <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
                  Get in Touch →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
