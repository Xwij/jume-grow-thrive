import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tabasamuJoy from "@/assets/tabasamu-joy.jpg";
import tabasamuCircle from "@/assets/tabasamu-circle.jpg";
import communityKidsImg from "@/assets/community-kids.jpg";
import communityGardenImg from "@/assets/community-garden.jpg";
import waterProjectImg from "@/assets/water-project.jpg";
import harvestKidsImg from "@/assets/harvest-kids.jpg";

const sections = [
  {
    title: "Learning Through the Garden",
    body: "Our garden remains a central part of daily life. The children are actively involved in planting, watering, and harvesting vegetables. Through this, they are gaining valuable skills while contributing to their own food supply. It's inspiring to see their connection with nature growing stronger each day.",
    image: communityGardenImg,
    color: "#22c55e",
  },
  {
    title: "Poultry Project Update",
    body: "The chicken project continues to support the home with both nutrition and small income. The children take part in caring for the chickens, learning responsibility and teamwork in the process.",
    image: harvestKidsImg,
    color: "#f59e0b",
  },
  {
    title: "Water and Sanitation Focus",
    body: "Access to clean and reliable water is still a major need. We are continuing to work toward establishing a borehole and improving sanitation facilities to ensure a healthier environment for all.",
    image: waterProjectImg,
    color: "#06b6d4",
  },
  {
    title: "Sustainability in Action",
    body: "Through OTEPIC's 3Rs approach—Reduce, Reuse, Recycle—the children are learning practical ways to care for the environment. From composting to water conservation, these lessons are shaping a more sustainable future.",
    image: tabasamuCircle,
    color: "#84cc16",
  },
  {
    title: "Preparing for the Future",
    body: "As our children grow, we are committed to supporting them beyond school. We are developing pathways that connect them to social programs, vocational training, and community initiatives. These opportunities will help them build independence, discover their talents, and transition confidently into adulthood while staying rooted in values of sustainability, cooperation, and service.",
    image: communityKidsImg,
    color: "#a855f7",
  },
  {
    title: "A Home Full of Smiles",
    body: "Despite challenges, Tabasamu remains a place of joy, resilience, and hope. The children continue to grow in confidence, supported by a caring and empowering environment.",
    image: tabasamuJoy,
    color: "#ec4899",
  },
];

const floaties = ["🌸", "🦋", "🌟", "🌈", "🍃", "☀️", "🐞", "🌻", "🎈", "⭐", "🦄", "🌺", "🍀", "💖"];
const confettiColors = ["#ec4899", "#f59e0b", "#22c55e", "#06b6d4", "#a855f7", "#fbbf24", "#f97316"];
const confettiPieces = Array.from({ length: 40 }, (_, i) => ({
  left: `${(i * 2.5) % 100}%`,
  delay: (i % 10) * 0.4,
  duration: 5 + (i % 5),
  color: confettiColors[i % confettiColors.length],
  rotate: (i * 37) % 360,
  size: 6 + (i % 4) * 2,
}));

const Tabasamu = () => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: "linear-gradient(180deg, #FFF7E6 0%, #FFFBF0 25%, #F0FDF4 60%, #ECFEFF 100%)",
    }}>
      {/* Floating background doodles */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        {floaties.map((emoji, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl sm:text-4xl opacity-40"
            style={{
              left: `${(i * 13 + 7) % 95}%`,
              top: `${(i * 23 + 11) % 90}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {emoji}
          </motion.span>
        ))}
      </div>

      <Navbar />

      {/* Hero — bright kid-friendly */}
      <section className="relative pt-28 pb-20 section-padding overflow-hidden z-10">
        <div className="absolute inset-0">
          <img src={tabasamuJoy} alt="Tabasamu Children's Home" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(236,72,153,0.75) 0%, rgba(168,85,247,0.7) 40%, rgba(34,197,94,0.75) 100%)",
          }} />
        </div>

        {/* Confetti rain */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          {confettiPieces.map((c, i) => (
            <motion.span
              key={i}
              className="absolute top-0 block rounded-sm"
              style={{
                left: c.left,
                width: c.size,
                height: c.size * 1.6,
                background: c.color,
              }}
              initial={{ y: -40, rotate: 0, opacity: 0 }}
              animate={{ y: "120vh", rotate: c.rotate + 720, opacity: [0, 1, 1, 0.8, 0] }}
              transition={{ duration: c.duration, delay: c.delay, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="container-narrow relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.2em] uppercase text-white/95 font-bold mb-3">
              OTEPIC Newsletter
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-4 drop-shadow-lg">
              Tabasamu Children's Home
            </h1>
            <p className="font-body text-white text-lg sm:text-2xl font-semibold">
              Growing Hope, One Smile at a Time
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro card */}
      <section className="section-padding relative z-10">
        <div className="container-narrow max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] p-8 sm:p-10 text-center relative"
            style={{
              background: "white",
              border: "3px dashed #f59e0b",
              boxShadow: "0 20px 50px -20px rgba(245,158,11,0.4)",
            }}
          >
            <p className="font-body text-lg text-foreground/80 leading-relaxed">
              Greetings from <span className="font-bold text-pink-600">Tabasamu Children's Home</span>. We're happy to share encouraging updates and stories from our community, where children continue to grow, learn, and thrive in a nurturing environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Sections — sticker style */}
      <section className="pb-20 relative z-10">
        <div className="container-narrow space-y-20">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <motion.div
                whileHover={{ rotate: i % 2 === 0 ? -2 : 2, scale: 1.02 }}
                className="rounded-[2rem] overflow-hidden aspect-[4/3] relative"
                style={{
                  border: `5px solid ${s.color}`,
                  boxShadow: `0 15px 40px -10px ${s.color}55`,
                  transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                }}
              >
                <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </motion.div>
              <div className="relative">
                <div
                  className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 text-white"
                  style={{ background: s.color }}
                >
                  Story {i + 1}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4 leading-tight">
                  {s.title}
                </h2>
                <p className="font-body text-foreground/75 text-base sm:text-lg leading-relaxed">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Looking Ahead — playful CTA */}
      <section className="section-padding relative z-10">
        <div className="container-narrow max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] p-10 sm:p-14 text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ec4899 100%)",
              boxShadow: "0 25px 60px -15px rgba(236,72,153,0.5)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Looking Ahead
            </h2>
            <p className="font-body text-white/95 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              We're focused on expanding food production, improving water access, and strengthening sustainable projects that support long-term independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <Link to="/donate" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-pink-600 font-body font-bold hover:scale-105 transition-transform shadow-lg">
                Donate Now →
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-body font-bold hover:bg-white/10 transition-colors">
                Sponsor a Child
              </Link>
              <Link to="/impact" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-white text-white font-body font-bold hover:bg-white/10 transition-colors">
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
