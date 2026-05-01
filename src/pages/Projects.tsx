import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tabasamuJoy from "@/assets/tabasamu-joy.jpg";
import avocadosImg from "@/assets/avocados.jpg";
import bananasImg from "@/assets/bananas.jpg";
import permacultureImg from "@/assets/agroforestry-team.jpg";
import trainingImg from "@/assets/outdoor-class.jpg";
import communityImg from "@/assets/community-meeting.jpg";
import volunteerImg from "@/assets/field-training.jpg";
import nurseryImg from "@/assets/seedlings-nursery.jpg";
import mushroomImg from "@/assets/mushroom-closeup.jpg";
import waterImg from "@/assets/water-pond.jpg";
import solarImg from "@/assets/banana-harvest.jpg";

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

const services = [
  {
    icon: "🌱",
    image: permacultureImg,
    title: "Permaculture Consultancy",
    desc: "Expert farm and landscape design using permaculture principles. We help you create productive, self-sustaining systems tailored to your land and climate.",
    features: ["Site analysis & design", "Implementation support", "Follow-up mentoring"],
    details:
      "Our permaculture consultancy service provides a comprehensive, regenerative approach to land management. We begin with a thorough site analysis — evaluating soil health, water flow, sun exposure, existing vegetation, microclimates, and the social context of the land. From there, we develop a detailed design plan rooted in permaculture zones and sectors, integrating food forests, swales, keyline design, companion planting, and natural pest management. We walk with you through implementation, offering hands-on guidance, sourcing of indigenous and adapted species, and periodic reviews to ensure your system matures into a thriving, low-maintenance ecosystem. Whether you have a small homestead, a school compound, or a large community farm, our designs are tailored to maximise yield while regenerating the landscape and building long-term resilience to drought and climate change.",
  },
  {
    icon: "📚",
    image: trainingImg,
    title: "Training & Workshops",
    desc: "Hands-on training programs in sustainable agriculture, water harvesting, agroforestry, and mushroom cultivation for individuals, groups, and organizations.",
    features: ["Short courses (1–5 days)", "Certificate programs", "Custom group training"],
    details:
      "Jume College offers immersive, practical training that goes far beyond the classroom. Our workshops cover sustainable agriculture, biointensive food production, rainwater harvesting (tanks, swales and retention ponds), agroforestry systems, organic composting, vermiculture, mushroom cultivation, solar drying of indigenous vegetables, seed saving and value addition. Courses range from one-day introductions to multi-week certificate programs. We also design custom training packages for NGOs, farmer cooperatives, schools, faith-based groups and government agencies. Every training session includes field demonstrations on our working campus, take-home reference materials, and post-training mentorship so participants can implement what they have learned. Our graduates leave equipped with skills they can immediately apply on their own farms, in their schools, and across their communities.",
  },
  {
    icon: "🌍",
    image: communityImg,
    title: "Community Development",
    desc: "We partner with communities to design and implement projects that improve food security, water access, and livelihoods through ecological approaches.",
    features: ["Needs assessment", "Project planning", "Capacity building"],
    details:
      "Our community development approach is participatory, holistic and rooted in the lived realities of the people we serve. We start by listening — conducting needs assessments, mapping local resources, challenges and aspirations, and honouring traditional knowledge. Together with community members we co-design projects that address food security, clean water access, income generation, environmental restoration, and peace-building. Past initiatives include community food forests, school gardens, women's farming cooperatives, rainwater harvesting systems, youth enterprise programs, and conflict-transformation through shared agricultural work. We emphasise capacity building and local ownership so that communities can sustain, replicate and scale their initiatives long after we step back. Our goal is lasting, community-owned transformation.",
  },
  {
    icon: "🤝",
    image: volunteerImg,
    title: "Volunteer & Internship Programs",
    desc: "International and local volunteers can join our campus to learn, contribute, and experience regenerative agriculture first-hand.",
    features: ["Work-stay programs", "Research placements", "Cultural exchange"],
    details:
      "Our volunteer and internship programs welcome people from across Kenya and around the world to live, work and learn at Jume College. Participants engage in daily farm activities — planting, harvesting, composting, mushroom production, tree-nursery work, water-system maintenance and community outreach — while gaining a deep understanding of permaculture and sustainable living. Programs range from two weeks to six months. We also host research placements for university students studying agriculture, ecology, public health and development. Volunteers enjoy cultural exchange, shared community meals, language learning, and the chance to make a tangible, hands-on impact. Accommodation and meals are provided on campus. It is an experience that transforms perspectives and builds lifelong friendships and partnerships.",
  },
  {
    icon: "🌳",
    image: nurseryImg,
    title: "Tree Nursery & Seedlings",
    desc: "We produce and distribute quality tree seedlings for agroforestry, reforestation, and food forest establishment.",
    features: ["Indigenous species", "Fruit tree varieties", "Bulk orders available"],
    details:
      "Our on-campus tree nursery produces tens of thousands of seedlings annually, including indigenous trees (Markhamia, Croton, Prunus africana, Warburgia), fruit trees (avocado, mango, passion fruit, guava, citrus, pawpaw), nitrogen-fixing species (Calliandra, Sesbania, Leucaena, Grevillea), medicinal plants and timber species. We supply seedlings to individual farmers, schools, faith communities, county governments and reforestation programs. Each seedling comes with planting and aftercare guidance to maximise survival rates. Bulk orders are available at discounted rates for large-scale tree-planting and watershed-restoration projects. The nursery also serves as a living training ground where students and volunteers learn propagation, grafting, hardening-off and nursery management — skills they carry into their own enterprises and home gardens.",
  },
  {
    icon: "🍄",
    image: mushroomImg,
    title: "Mushroom Production Support",
    desc: "From substrate preparation to marketing, we help entrepreneurs and groups set up profitable mushroom enterprises.",
    features: ["Spawn supply", "Technical training", "Enterprise mentoring"],
    details:
      "Mushroom farming is one of the most accessible and profitable agri-enterprises for youth, women and smallholders, and we provide end-to-end support to get you started. Our services include spawn (seed) production and supply, substrate preparation training using locally available materials such as sugarcane bagasse, sawdust and cereal straw, sterilisation and inoculation techniques, incubation and fruiting room setup, harvesting, post-harvest handling, value addition (drying, packaging) and market linkage. We offer both group training and one-to-one mentoring, helping entrepreneurs develop business plans, set up low-cost growing units, and connect with reliable buyers. Our oyster mushroom production unit on campus serves as a live demonstration, and trainees get hands-on practice from day one.",
  },
  {
    icon: "💧",
    image: waterImg,
    title: "Water Harvesting & 3Rs Systems",
    desc: "Designing and installing rainwater harvesting, greywater reuse and 'Reduce, Reuse, Recycle' systems for homes, schools and farms.",
    features: ["Rainwater tanks & ponds", "Greywater reuse", "Borehole planning"],
    details:
      "Water is life — and in our drylands, every drop counts. We design and install rainwater harvesting systems (gutters, tanks, underground reservoirs and retention ponds), greywater-reuse systems for kitchens and bathing areas, and integrated landscape features such as swales and check-dams that slow, sink and spread water across the land. We support schools, children's homes (such as Tabasamu), farmer groups and households to plan boreholes, sand-dams and solar-pumped systems. Our work follows OTEPIC's 3Rs philosophy — Reduce, Reuse, Recycle — turning waste water and runoff into productive resources. Training and ongoing maintenance support are included with every installation.",
  },
  {
    icon: "☀️",
    image: solarImg,
    title: "Solar Drying & Value Addition",
    desc: "Solar dryers and processing units that turn surplus harvests into shelf-stable, high-value products.",
    features: ["Indigenous vegetable drying", "Seed preservation", "Packaging & branding"],
    details:
      "Post-harvest losses rob farmers of income and communities of nutrition. Our solar drying program equips farmer groups with simple, affordable solar dryers that preserve indigenous vegetables (managu, terere, sagaa), fruits, herbs, mushrooms and seeds without the use of fossil fuels. We train participants in hygienic processing, packaging, branding and basic food-business management so that surplus harvests become a year-round source of income and household nutrition. The program is closely linked with our enterprise and market-access work, helping growers move from farm gate to consumer shelf with confidence.",
  },
];

const Projects = () => {
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Our Projects</h1>
            <p className="font-body text-background/80 text-lg">Training programs and services for sustainable agriculture, community development, and environmental restoration.</p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
      <section id="programs" className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Training Programs</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">What We Teach</h2>
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
                className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--card-shadow)" }}
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

      {/* Services */}
      <section id="services" className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Our Services</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">How We Serve</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for individuals, communities, and organizations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 group flex flex-col"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-3xl drop-shadow-lg">{service.icon}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
                  <ul className="space-y-2 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-body text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setOpenService(i)}
                    className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 text-primary font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Read more →
                  </button>
                </div>
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
            className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setOpenService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card/95 backdrop-blur-md rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden border border-border relative flex flex-col"
              style={{ boxShadow: "0 25px 60px -12px rgba(0,0,0,0.45)" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <img src={services[openService].image} alt={services[openService].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute top-4 left-4 text-5xl drop-shadow-lg">{services[openService].icon}</span>
                <button
                  onClick={() => setOpenService(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-background flex items-center justify-center text-lg font-bold transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-8 overflow-y-auto">
                <h2 className="text-2xl font-display font-bold text-foreground mb-3">{services[openService].title}</h2>
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

export default Projects;
