import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Download, Eye, X } from "lucide-react";
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

// Program section images
import progPermaImg from "@/assets/agroforestry-team.jpg";
import progBioImg from "@/assets/women-tilling.jpg";
import progWaterImg from "@/assets/water-pond.jpg";
import progAgroforestryImg from "@/assets/tree-planting-field.jpg";
import progMushroomImg from "@/assets/mushroom-farmer.jpg";
import progHandsImg from "@/assets/field-training-2.jpg";

// Prospectus / chapter images (each unique — no repeats)
import chAnimalImg from "@/assets/donkey-team.jpg";
import chEnvImg from "@/assets/water-pond.jpg";
import chAgroEcoImg from "@/assets/community-circle.jpg";
import chPermaImg from "@/assets/agroforestry-team.jpg";
import chFoodProcImg from "@/assets/passion-fruit.jpg";
import chBioImg from "@/assets/soil-preparation.jpg";
import chHortiImg from "@/assets/passion-farming.jpg";
import chEngineeringImg from "@/assets/agri-engineering.jpg";
import chCommunityImg from "@/assets/community-kids.jpg";
import chSoapImg from "@/assets/soap-making-women.jpg";
import chFoodBevImg from "@/assets/hospitality-baking.jpg";
import chTailoringImg from "@/assets/tailoring.jpg";
import chICTImg from "@/assets/campus.jpg";
import chBuildingImg from "@/assets/workers.jpg";
import chCarpentryImg from "@/assets/training-banda.jpg";
import chCookingImg from "@/assets/chefs-group.jpg";
import chBakingImg from "@/assets/baking-cakes.jpg";
import chAccommodationImg from "@/assets/hospitality-bread.jpg";
import chCosmetologyImg from "@/assets/soap-women.jpg";
import chElectricalImg from "@/assets/field-training-2.jpg";
import chFashionImg from "@/assets/chefs-pastries.jpg";
import chSustAgImg from "@/assets/women-tilling.jpg";
import chWeldingImg from "@/assets/digging-water-pan.jpg";
import chPlumbingImg from "@/assets/drip-irrigation.jpg";

const PROSPECTUS_PDF = "/prospectus/OTEPIC_Agricultural_Modular_Courses_Prospectus.pdf";

const programs = [
  {
    title: "Permaculture Design Training",
    image: progPermaImg,
    desc: "Introduces participants to permaculture principles and regenerative land design. Learn to design farms and landscapes that work with nature.",
    topics: ["Permaculture principles and ethics", "Garden and farm design", "Soil regeneration and composting", "Food forests and integrated farming systems"],
    details:
      "Our Permaculture Design Training walks participants through the full cycle of regenerative land design — from observing natural patterns to creating productive, low-input systems. You will learn the 12 permaculture principles, zone & sector planning, water-flow design, food-forest layering, soil-building techniques, and integrated animal systems. Field sessions take place across our living campus where every demonstration site has been designed using these same principles, giving you a practical reference you can adapt to your own land.",
  },
  {
    title: "Biointensive Agriculture",
    image: progBioImg,
    desc: "Highly productive organic farming methods that increase yields while improving soil health. Ideal for small farmers with limited land.",
    topics: ["Deep soil preparation", "Intensive planting techniques", "Compost production", "Sustainable food production in small spaces"],
    details:
      "Biointensive Agriculture is one of the most productive small-scale food systems in the world — and we teach it from the ground up. Participants learn double-digging, hexagonal close-spacing, calorie-and-compost crop ratios, seed saving and on-farm fertility cycles. The result: farmers can grow more food on less land, while continuously rebuilding soil. This module is ideal for households, school gardens, and farmer cooperatives working with limited acreage.",
  },
  {
    title: "Water Harvesting & Retention",
    image: progWaterImg,
    desc: "Practical techniques to capture, store, and manage rainwater in the landscape. Helping communities become resilient to drought and climate change.",
    topics: ["Rainwater harvesting systems", "Swales and contour design", "Small ponds and water retention", "Restoring the natural water cycle"],
    details:
      "Water is life. This program equips trainees with the practical skills to harvest every drop that falls on their land — through roof catchment, contour swales, retention ponds, sand-dams, check-dams, and greywater reuse. We also cover soil-moisture management, mulching strategies and drought-tolerant cropping. By the end, participants are able to plan and install simple, affordable water systems for homes, farms, schools and entire communities.",
  },
  {
    title: "Agroforestry & Tree Nursery",
    image: progAgroforestryImg,
    desc: "Learn how trees can transform farms and landscapes, providing food, shade, biomass, fuel, and long-term environmental benefits.",
    topics: ["Establishing tree nurseries", "Integrating trees into farming", "Soil conservation and biodiversity", "Climate change resilience"],
    details:
      "Trees are the backbone of resilient landscapes. Our Agroforestry & Tree Nursery program teaches species selection, propagation, grafting, hardening-off and nursery management, alongside on-farm integration techniques such as alley cropping, hedgerows, windbreaks and food forests. Participants graduate with the skills to start their own nurseries, supply seedlings to their communities, and re-green degraded land.",
  },
  {
    title: "Mushroom Cultivation",
    image: progMushroomImg,
    desc: "Practical organic mushroom production for nutrition and income generation, supporting youth and community enterprises.",
    topics: ["Substrate preparation", "Spawn management", "Mushroom house setup", "Harvesting and marketing"],
    details:
      "Mushroom cultivation is a high-value, low-land enterprise perfect for youth and women's groups. We cover the entire production chain — substrate preparation from local materials, sterilisation, spawn handling, incubation, fruiting-room conditions, harvesting, drying and packaging. Participants leave with a working understanding of how to set up a profitable mushroom unit and how to plug into local markets.",
  },
  {
    title: "Hands-On Learning",
    image: progHandsImg,
    desc: "Learning is practical at Jume College. Students develop skills they can apply immediately in their communities.",
    topics: ["Demonstration gardens", "Farm activities", "Water conservation projects", "Ecological restoration projects"],
    details:
      "Every program at Jume College is grounded in real, hands-on practice. Students spend the majority of their time in demonstration gardens, the tree nursery, the mushroom unit, and on community restoration projects. This learning-by-doing approach ensures graduates leave not just with theoretical knowledge, but with the muscle memory, confidence and proven track record to deliver results in their own communities.",
  },
];

// Prospectus chapters grouped into the 4 official categories
type Chapter = { title: string; image: string; pdf: string; summary: string };
const chapters: Chapter[] = [
  {
    title: "Animal Production",
    image: chAnimalImg,
    pdf: "/prospectus/ANIMAL_PRODUCTION.pdf",
    summary:
      "Importance of livestock in food security, animal nutrition & feeding, breeding & genetics, livestock management, animal health, dairy/poultry/beef/pig production, plus agribusiness & technology. Practical sessions cover handling, vaccination, feed formulation and farm business management.",
  },
  {
    title: "Agro-ecology & Agro-biodiversity",
    image: chAgroEcoImg,
    pdf: "/prospectus/AGRO.pdf",
    summary:
      "Ecological principles, soil management, natural pest control, agroforestry & apiculture, food sovereignty and family nutrition, plus market and value-addition. Builds an integrated, holistic understanding of food systems for long-term agro-ecological transformation.",
  },
  {
    title: "Agricultural Engineering",
    image: chEngineeringImg,
    pdf: "/prospectus/AGRICULTURAL_ENGINEERING.pdf",
    summary:
      "Applied engineering for agriculture — farm machinery, irrigation systems, post-harvest technology, soil & water engineering, and precision agriculture. Combines workshop practice with farm-based projects.",
  },
  {
    title: "Building Technology",
    image: chBuildingImg,
    pdf: "/prospectus/BUILDING_TECHNOLOGY.pdf",
    summary:
      "Masonry, technical drawing, structural mechanics, site management and sustainable building practice. Certificate and Diploma pathways with industrial attachment.",
  },
  {
    title: "Carpentry & Joinery",
    image: chCarpentryImg,
    pdf: "/prospectus/CARPENTRY_AND_JOINERY.pdf",
    summary:
      "Hands-on training in woodwork, joinery, furniture making and finishing. Equips graduates with employable skills and the foundation to start their own workshops.",
  },
  {
    title: "Community Development",
    image: chCommunityImg,
    pdf: "/prospectus/COMMUNITY_DEVELOPMENT.pdf",
    summary:
      "Skills to plan, implement and evaluate community initiatives — needs assessment, project management, resource mobilisation and leadership. Prepares practitioners for roles in NGOs, government agencies and community-based organisations.",
  },
  {
    title: "Computer & Information Technology",
    image: chICTImg,
    pdf: "/prospectus/COMPUTER_AND_INFORMATION_TECHNOLOGY.pdf",
    summary:
      "Computer fundamentals, networking, cyber security, ICT technician skills and AI basics — equipping students for the modern digital workplace.",
  },
  {
    title: "Cooking Skills",
    image: chCookingImg,
    pdf: "/prospectus/COOKING_SKILLS.pdf",
    summary:
      "Culinary arts, food preparation, nutrition, kitchen management, and food safety & hygiene. Practical kitchen training for hotels, restaurants, and self-employment.",
  },
  {
    title: "Baking Technology",
    image: chBakingImg,
    pdf: "/prospectus/BAKING_TECHNOLOGY.pdf",
    summary:
      "Bakery and pastry production, dough science, bread, cakes and confectionery, plus bakery business management. Hands-on training preparing graduates for community bakeries and self-employment.",
  },
  {
    title: "Accommodation Operations",
    image: chAccommodationImg,
    pdf: "/prospectus/ACCOMMODATION_OPERATIONS.pdf",
    summary:
      "Front office, housekeeping, guest services, hospitality standards and accommodation management — pathways to careers in hotels, lodges and the wider tourism sector.",
  },
  {
    title: "Soap Making (Short Course)",
    image: chSoapImg,
    pdf: "/prospectus/OTEPIC_Agricultural_Modular_Courses_Prospectus.pdf",
    summary:
      "Saponification science, safe lye handling, cold-press and hot-press techniques, liquid soap, shower gel, washing soap and gardener soap. A practical income-generating skill for women's groups, youth and small enterprises.",
  },
  {
    title: "Tailoring & Garment Making",
    image: chTailoringImg,
    pdf: "/prospectus/OTEPIC_Agricultural_Modular_Courses_Prospectus.pdf",
    summary:
      "Modular vocational training (Grades III, II and I) — from basic stitching to advanced garment construction, pattern cutting, costing and small-business management.",
  },
  {
    title: "Permaculture Course",
    image: chPermaImg,
    pdf: "/prospectus/PERMACULTURE_COURSE.pdf",
    summary:
      "A standardised 72-hour curriculum focused on ecological design, sustainability, and regenerative practice. Delivered over two weeks, weekend series, or online.",
  },
  {
    title: "Grow Bio-Intensive Course",
    image: chBioImg,
    pdf: "/prospectus/GROW_BIO_INTENSIVE_COURSE.pdf",
    summary: "Deep-bed soil preparation, intensive planting, composting and calorie-and-compost crop ratios — produce more food on less land while building soil.",
  },
  {
    title: "Horticulture",
    image: chHortiImg,
    pdf: "/prospectus/HORTICULTURE.pdf",
    summary: "Vegetable, fruit and ornamental crop production, nursery management, greenhouse operations, IPM and post-harvest handling.",
  },
  {
    title: "Cosmetology",
    image: chCosmetologyImg,
    pdf: "/prospectus/COSMETOLOGY.pdf",
    summary: "Beauty therapy, hairdressing, skincare and salon management — practical training for self-employment and salon careers.",
  },
  {
    title: "Electrical Installation",
    image: chElectricalImg,
    pdf: "/prospectus/ELECTRICAL_INSTALLATION.pdf",
    summary: "Domestic and industrial electrical wiring, circuits, safety standards and installation practice — pathway to certified electrician work.",
  },
  {
    title: "Environmental Science",
    image: chEnvImg,
    pdf: "/prospectus/ENVIRONMENTAL_SCIENCE.pdf",
    summary: "Ecology, climate change, conservation, environmental impact assessment and natural resource management for sustainability practitioners.",
  },
  {
    title: "Fashion Designer",
    image: chFashionImg,
    pdf: "/prospectus/FASHION_DESIGNER.pdf",
    summary: "Design, pattern making, garment construction, textiles and fashion business — build a career or launch your own clothing line.",
  },
  {
    title: "Food & Beverage Operations",
    image: chFoodBevImg,
    pdf: "/prospectus/FOOD_AND_BEVERAGE_OPERATIONS.pdf",
    summary: "Restaurant service, bar operations, menu knowledge and customer service standards for the hospitality industry.",
  },
  {
    title: "Food Processing Technology",
    image: chFoodProcImg,
    pdf: "/prospectus/FOOD_PROCESSING_TECHNOLOGY.pdf",
    summary: "Food preservation, value addition, packaging, food safety and small-scale processing enterprise — turning harvests into shelf-stable products.",
  },
  {
    title: "Sustainable Agriculture Course",
    image: chSustAgImg,
    pdf: "/prospectus/SUSTAINABLE_AGRICULTURE_COURSE.pdf",
    summary: "Soil health, organic production, water conservation, integrated pest management and farm-based enterprise — equipping farmers with practical, climate-smart and regenerative agriculture skills for long-term food security.",
  },
  {
    title: "Welding & Fabrication",
    image: chWeldingImg,
    pdf: "/prospectus/WELDING_AND_FABRICATION.pdf",
    summary: "Arc and gas welding, sheet-metal work, structural fabrication, workshop safety and project costing — practical skills for employment in construction, agriculture and self-run metal workshops.",
  },
  {
    title: "Plumbing",
    image: chPlumbingImg,
    pdf: "/prospectus/PLUMBING.pdf",
    summary: "Domestic and commercial plumbing systems, pipefitting, drainage, water supply, sanitation installation and maintenance — preparing graduates for certified plumbing work and small-business setups.",
  },
];

// Group chapters by the 4 official slide categories
const categories: { name: string; subtitle?: string; color: string; bg: string; titles: string[] }[] = [
  {
    name: "Art, Fashion & Design",
    color: "from-pink-600 to-rose-600",
    bg: "bg-pink-50",
    titles: ["Tailoring & Garment Making", "Cosmetology", "Fashion Designer"],
  },
  {
    name: "Other Courses",
    color: "from-emerald-600 to-green-700",
    bg: "bg-emerald-50",
    titles: [
      "Electrical Installation",
      "Food Processing Technology",
      "Soap Making (Short Course)",
      "Computer & Information Technology",
      "Building Technology",
      "Community Development",
    ],
  },
  {
    name: "Modular Courses",
    subtitle: "Agricultural-Based Courses",
    color: "from-blue-700 to-indigo-700",
    bg: "bg-blue-50",
    titles: [
      "Animal Production",
      "Agro-ecology & Agro-biodiversity",
      "Agricultural Engineering",
      "Grow Bio-Intensive Course",
      "Permaculture Course",
      "Environmental Science",
      "Horticulture",
      "Sustainable Agriculture Course",
    ],
  },
  {
    name: "Hospitality",
    color: "from-orange-600 to-amber-600",
    bg: "bg-orange-50",
    titles: ["Food & Beverage Operations", "Cooking Skills", "Baking Technology"],
  },
];

const services = [
  {
    icon: "🌱",
    image: permacultureImg,
    title: "Permaculture Consultancy",
    desc: "Through expert farm and landscape design using permaculture principles, we help you create productive, self-sustaining systems tailored to your land and climate.",
    features: ["Site analysis & design", "Implementation support", "Follow-up mentoring"],
    details:
      "Our permaculture consultancy service provides a comprehensive, regenerative approach to land management. We begin with a thorough site analysis — evaluating soil health, water flow, sun exposure, existing vegetation, microclimates, and the social context of the land. From there, we develop a detailed design plan rooted in permaculture zones and sectors, integrating food forests, swales, keyline design, companion planting, and natural pest management. We walk with you through implementation, offering hands-on guidance, sourcing of indigenous and adapted species, and periodic reviews to ensure your system matures into a thriving, low-maintenance ecosystem.",
  },
  {
    icon: "📚",
    image: trainingImg,
    title: "Training & Workshops",
    desc: "Through hands-on training programs in sustainable agriculture, water harvesting, agroforestry, and mushroom cultivation for individuals, groups, and organizations.",
    features: ["Short courses (1–5 days)", "Certificate programs", "Custom group training"],
    details:
      "Jume College offers immersive, practical training that goes far beyond the classroom. Our workshops cover sustainable agriculture, biointensive food production, rainwater harvesting, agroforestry systems, organic composting, vermiculture, mushroom cultivation, solar drying, seed saving and value addition. Courses range from one-day introductions to multi-week certificate programs. Every training includes field demonstrations, take-home materials, and post-training mentorship.",
  },
  {
    icon: "🌍",
    image: communityImg,
    title: "Community Development",
    desc: "Through partnership with communities we design and implement projects that improve food security, water access, and livelihoods through ecological approaches.",
    features: ["Needs assessment", "Project planning", "Capacity building"],
    details:
      "Our community development approach is participatory and rooted in lived realities. We listen first — mapping local resources, challenges and aspirations — then co-design projects addressing food security, clean water, income generation, environmental restoration and peace-building. We emphasise capacity building and local ownership so communities can sustain, replicate and scale their initiatives long after we step back.",
  },
  {
    icon: "🤝",
    image: volunteerImg,
    title: "Volunteer & Internship Programs",
    desc: "Through international and local volunteer placements, participants join our campus to learn, contribute, and experience regenerative agriculture first-hand.",
    features: ["Work-stay programs", "Research placements", "Cultural exchange"],
    details:
      "Our volunteer and internship programs welcome people from across Kenya and around the world to live, work and learn at Jume College. Participants engage in daily farm activities and community outreach while gaining a deep understanding of permaculture and sustainable living. Programs range from two weeks to six months. Accommodation and meals are provided on campus.",
  },
  {
    icon: "🌳",
    image: nurseryImg,
    title: "Tree Nursery & Seedlings",
    desc: "Through our on-campus nursery, we produce and distribute quality tree seedlings for agroforestry, reforestation, and food forest establishment.",
    features: ["Indigenous species", "Fruit tree varieties", "Bulk orders available"],
    details:
      "Our on-campus nursery produces tens of thousands of seedlings annually — indigenous trees, fruit trees, nitrogen-fixers, medicinal plants and timber species. We supply farmers, schools, faith communities, county governments and reforestation programs. Bulk orders available at discounted rates.",
  },
];

const SectionDivider = () => (
  <div className="container-narrow">
    <div className="flex items-center gap-4 py-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="w-2 h-2 rounded-full bg-primary/40" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  </div>
);

const Projects = () => {
  const [openService, setOpenService] = useState<number | null>(null);
  const [openProgram, setOpenProgram] = useState<number | null>(null);
  const [openChapter, setOpenChapter] = useState<number | null>(null);
  const [showProspectus, setShowProspectus] = useState(false);

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Trainings & Projects</h1>
            <p className="font-body text-background/80 text-lg">Training programs, courses and services for sustainable agriculture, community development, and environmental restoration.</p>
          </motion.div>
        </div>
      </section>

      {/* Jume College Modular Courses (top section) */}
      <section id="prospectus" className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Jume College Modular Courses
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto mb-6">
              A modular curriculum spanning agro-ecology, environmental science, permaculture, engineering, hospitality, ICT and more — offered as 1-week, 2-week, 1-month, 3-month, 9-month or 1-year programs. Click any course below to read more, or open the library to view all recently uploaded course documents.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 text-white font-body font-semibold text-sm hover:bg-red-700 transition-colors shadow"
              >
                Contact us to Apply Now →
              </Link>
              <button
                onClick={() => setShowProspectus(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-red-600 text-red-600 font-body font-semibold text-sm hover:bg-red-50 transition-colors shadow"
              >
                <Eye className="w-4 h-4" /> View All Courses
              </button>
            </div>
          </motion.div>

          {/* Categories grouped to match the official prospectus layout */}
          <div className="space-y-12">
            {categories.map((cat, ci) => {
              const catChapters = cat.titles
                .map((t) => ({ idx: chapters.findIndex((c) => c.title === t), t }))
                .filter((x) => x.idx >= 0);
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, delay: ci * 0.06 }}
                  className={`rounded-3xl overflow-hidden border border-border ${cat.bg}`}
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className={`bg-gradient-to-r ${cat.color} px-6 py-4 text-center`}>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-wide">
                      {ci + 1}. {cat.name.toUpperCase()}
                    </h3>
                    {cat.subtitle && (
                      <p className="text-white/85 font-body text-sm mt-0.5">{cat.subtitle}</p>
                    )}
                  </div>
                  <div className="p-5 sm:p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {catChapters.map(({ idx }) => {
                      const c = chapters[idx];
                      return (
                        <button
                          key={c.title}
                          onClick={() => setOpenChapter(idx)}
                          className="text-left bg-card rounded-xl overflow-hidden border border-border/70 hover:border-red-500/50 hover:-translate-y-0.5 transition-all group flex flex-col"
                          style={{ boxShadow: "var(--card-shadow)" }}
                        >
                          <div className="relative h-32 overflow-hidden">
                            <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                            <h4 className="absolute bottom-2 left-3 right-3 text-white font-display font-bold text-sm drop-shadow-lg leading-tight">
                              {c.title}
                            </h4>
                          </div>
                          <div className="p-4 flex-1 flex flex-col">
                            <p className="font-body text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-2">{c.summary}</p>
                            <span className="mt-auto inline-flex items-center gap-1.5 text-[11px] font-body font-semibold text-red-600">
                              <BookOpen className="w-3 h-3" /> Read more →
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Services */}
      <section id="services" className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">The Experience You Gain</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">How We Train</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Beyond the classroom, Jume College offers a full suite of consultancy, training, and on-the-ground project services for individuals, farmer cooperatives, schools, faith communities, NGOs, and county governments. From regenerative farm design and water-system installation to youth volunteer programs, tree-nursery supply, mushroom enterprises and solar value-addition — we walk with you from initial idea through implementation and long-term mentoring.
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
                  <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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

      {/* Featured Project: Tabasamu (last section) */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Featured Project</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Tabasamu Children's Home</h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Tabasamu — meaning "smile" in Swahili — is the flagship project of Jume College. It is a loving home where orphaned and vulnerable children grow up with dignity, daily nutritious meals from our gardens, school sponsorship, healthcare, and a thriving food garden of their own. The children learn permaculture, care for poultry, practice the 3Rs (Reduce, Reuse, Recycle), and step into the future as confident, skilled young leaders rooted in their community.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
            <div className="relative h-64 md:h-full min-h-[280px] overflow-hidden">
              <img src={tabasamuJoy} alt="Tabasamu Children's Home" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">Growing Hope, One Smile at a Time</h3>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Tabasamu is a children's home where kids learn through the garden, care for poultry, practice the 3Rs, and grow in a loving, sustainable community.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/tabasamu" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity">
                  Visit Tabasamu →
                </Link>
                <Link to="/donate" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink-500 text-white font-body font-semibold text-sm hover:bg-pink-600 transition-colors">
                  Support the Children
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {openService !== null && (
          <PopupCard
            image={services[openService].image}
            title={services[openService].title}
            chips={services[openService].features}
            body={services[openService].details}
            onClose={() => setOpenService(null)}
            icon={services[openService].icon}
          />
        )}
        {openProgram !== null && (
          <PopupCard
            image={programs[openProgram].image}
            title={programs[openProgram].title}
            chips={programs[openProgram].topics}
            body={programs[openProgram].details}
            onClose={() => setOpenProgram(null)}
          />
        )}
        {openChapter !== null && (
          <PopupCard
            image={chapters[openChapter].image}
            title={chapters[openChapter].title}
            chips={[]}
            body={chapters[openChapter].summary}
            onClose={() => setOpenChapter(null)}
            footer={
              <div className="flex flex-wrap gap-3">
                <a
                  href={chapters[openChapter].pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-card border border-red-600 text-red-600 font-body font-semibold text-sm hover:bg-red-50 transition-colors"
                >
                  <Eye className="w-4 h-4" /> View
                </a>
                <a
                  href={chapters[openChapter].pdf}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-red-600 text-white font-body font-semibold text-sm hover:bg-red-700 transition-colors"
                >
                  <Download className="w-4 h-4" /> Download Prospectus
                </a>
              </div>
            }
          />
        )}
      </AnimatePresence>

      {/* Lively prospectus library — recent uploads */}
      <AnimatePresence>
        {showProspectus && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-foreground/70 backdrop-blur-xl flex flex-col"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex items-center gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
            >
              <BookOpen className="w-5 h-5" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Jume College</p>
                <h3 className="font-display font-bold text-base sm:text-lg truncate">Recent Prospectus Uploads</h3>
              </div>
              <button
                onClick={() => setShowProspectus(false)}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
                aria-label="Close prospectus"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-1 overflow-y-auto p-6 sm:p-10"
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-white/85 font-body mb-6 text-sm sm:text-base">
                  All prospectus documents uploaded in the last few days. Click any title to open it in a new tab.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {chapters.map((c) => (
                    <a
                      key={c.title}
                      href={c.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 bg-white/95 hover:bg-white rounded-xl p-4 transition-colors shadow"
                    >
                      <div className="w-12 h-12 rounded-lg bg-red-600/10 text-red-600 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-display font-bold text-foreground text-sm truncate">{c.title}</p>
                        <p className="text-xs text-muted-foreground">Recently uploaded · PDF</p>
                      </div>
                      <Eye className="w-4 h-4 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
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

// Reusable Gaussian-blur popup
const PopupCard = ({
  image,
  title,
  chips,
  body,
  onClose,
  icon,
  footer,
}: {
  image: string;
  title: string;
  chips: string[];
  body: string;
  onClose: () => void;
  icon?: string;
  footer?: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-xl flex items-center justify-center p-4"
    onClick={onClose}
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
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
        {icon && <span className="absolute top-4 left-4 text-5xl drop-shadow-lg">{icon}</span>}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur text-foreground hover:bg-background flex items-center justify-center text-lg font-bold transition-colors"
        >
          ✕
        </button>
      </div>
      <div className="p-8 overflow-y-auto">
        <h2 className="text-2xl font-display font-bold text-foreground mb-3">{title}</h2>
        {chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {chips.map((f) => (
              <span key={f} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold font-body">{f}</span>
            ))}
          </div>
        )}
        <p className="font-body text-muted-foreground leading-relaxed text-[15px] whitespace-pre-line">{body}</p>
        {footer && <div className="mt-6 pt-4 border-t border-border">{footer}</div>}
      </div>
    </motion.div>
  </motion.div>
);

export default Projects;
