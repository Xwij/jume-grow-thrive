import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import kidsHarvestImg from "@/assets/kids-harvest.jpg";
import kidsPlayingImg from "@/assets/kids-playing.jpg";
import communityKidsImg from "@/assets/community-kids.jpg";
import communityGardenImg from "@/assets/community-garden.jpg";
import waterProjectImg from "@/assets/water-project.jpg";
import harvestKidsImg from "@/assets/harvest-kids.jpg";

const sections = [
  {
    icon: "🌿",
    title: "Learning Through the Garden",
    body: "Our garden remains a central part of daily life. The children are actively involved in planting, watering, and harvesting vegetables. Through this, they are gaining valuable skills while contributing to their own food supply. It's inspiring to see their connection with nature growing stronger each day.",
    image: communityGardenImg,
  },
  {
    icon: "🐔",
    title: "Poultry Project Update",
    body: "The chicken project continues to support the home with both nutrition and small income. The children take part in caring for the chickens, learning responsibility and teamwork in the process.",
    image: harvestKidsImg,
  },
  {
    icon: "💧",
    title: "Water and Sanitation Focus",
    body: "Access to clean and reliable water is still a major need. We are continuing to work toward establishing a borehole and improving sanitation facilities to ensure a healthier environment for all.",
    image: waterProjectImg,
  },
  {
    icon: "♻️",
    title: "Sustainability in Action",
    body: "Through OTEPIC's 3Rs approach—Reduce, Reuse, Recycle—the children are learning practical ways to care for the environment. From composting to water conservation, these lessons are shaping a more sustainable future.",
    image: kidsHarvestImg,
  },
  {
    icon: "🎓",
    title: "Preparing for the Future",
    body: "As our children grow, we are committed to supporting them beyond school. We are developing pathways that connect them to social programs, vocational training, and community initiatives. These opportunities will help them build independence, discover their talents, and transition confidently into adulthood while staying rooted in values of sustainability, cooperation, and service.",
    image: communityKidsImg,
  },
  {
    icon: "🌼",
    title: "A Home Full of Smiles",
    body: "Despite challenges, Tabasamu remains a place of joy, resilience, and hope. The children continue to grow in confidence, supported by a caring and empowering environment.",
    image: kidsPlayingImg,
  },
];

const Tabasamu = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={kidsPlayingImg} alt="Tabasamu Children's Home" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient-animated" />
        </div>
        <div className="container-narrow relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.15em] uppercase text-background/70 font-semibold mb-3">OTEPIC Newsletter</p>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-display font-bold text-background mb-4">
              Tabasamu Children's Home
            </h1>
            <p className="font-body text-background/90 text-lg sm:text-xl italic">
              🌱 Growing Hope, One Step at a Time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-lg text-foreground/80 leading-relaxed"
          >
            Greetings from Tabasamu Children's Home. We are happy to share some encouraging updates and stories
            from our community, where children continue to grow, learn, and thrive in a nurturing environment.
          </motion.p>
        </div>
      </section>

      {/* Story Sections */}
      <section className="pb-20 bg-background">
        <div className="container-narrow space-y-16">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3]" style={{ boxShadow: "var(--card-shadow)" }}>
                <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
              <div>
                <span className="text-4xl mb-3 block">{s.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">{s.title}</h2>
                <p className="font-body text-muted-foreground text-base leading-relaxed">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-4xl mb-3 block">🔭</span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">Looking Ahead</h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              We are focused on expanding our food production, improving water access, and strengthening
              sustainable projects that support long-term independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity">
                Support Tabasamu →
              </Link>
              <Link to="/impact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-foreground/20 text-foreground font-body font-semibold hover:bg-foreground/5 transition-colors">
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tabasamu;
