import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountUp from "@/components/CountUp";

import waterProjectImg from "@/assets/water-project.jpg";
import waterAfterNewImg from "@/assets/water-sustainability-new.jpeg";
import farmerHarvestImg from "@/assets/farmer-harvest.jpg";
import mushroomFarmerImg from "@/assets/mushroom-farmer.jpg";
import treePlantingImg from "@/assets/tree-planting.jpg";
import kidsHarvestImg from "@/assets/kids-harvest.jpg";
import womenTillingImg from "@/assets/women-tilling.jpg";
import communityKidsImg from "@/assets/community-kids.jpg";
import passionFruitImg from "@/assets/passion-fruit.jpg";
import communityMeetingImg from "@/assets/community-meeting.jpg";
import passionFarmingImg from "@/assets/passion-farming.jpg";
import outdoorClassImg from "@/assets/outdoor-class.jpg";
import mushroomBucketImg from "@/assets/mushroom-bucket.jpg";
import soilPrepImg from "@/assets/soil-preparation.jpg";
import communityGardenImg from "@/assets/community-garden.jpg";
import workersImg from "@/assets/workers.jpg";
import solarImg from "@/assets/solar.jpeg";
import beeImg from "@/assets/bee.jpeg";

const stats: { label: string; end: number; suffix?: string }[] = [
  { label: "Farmers Reached", end: 30000, suffix: "+" },
  { label: "Adoption Rate", end: 52, suffix: "%" },
  { label: "Synthetic Input Reduction", end: 60, suffix: "%" },
  { label: "Income Increase", end: 30, suffix: "%" },
  { label: "Provide clean drinking water to people", end: 3000, suffix: "+" },
];

const stories = [
  {
    img: passionFruitImg,
    name: "John — Solar Dryer Innovator",
    quote: "With the solar dryer, my vegetables no longer rot. I now sell dried produce all year round and earn three times more.",
  },
  {
    img: communityKidsImg,
    name: "Amani from Tabasamu",
    quote: "I learned how to grow my own food at Jume College. Now I help my mother in our small kitchen garden.",
  },
  {
    img: womenTillingImg,
    name: "Mary — Mushroom Entrepreneur",
    quote: "Mushroom farming changed my life. I started with one bucket and now supply hotels in town.",
  },
];

const phases = [
  { phase: "Phase 1", title: "Water Systems", status: "Done", desc: "Rainwater harvesting tanks, kitchen reuse systems, and irrigation lines installed." },
  { phase: "Phase 2", title: "Training Farmers", status: "Active", desc: "Hands-on workshops on permaculture, composting, and sustainable production." },
  { phase: "Phase 3", title: "Processing & Markets", status: "Building", desc: "Solar drying, mushroom processing, and market linkages for smallholders." },
  { phase: "Phase 4", title: "Expansion", status: "Planned", desc: "New borehole, Tabasamu link, regional training hubs across Kenya." },
];

const funding = [
  { impact: "Installing water tanks for the demonstration farms" },
  { impact: "Planting trees for fruits and shades" },
  { impact: "Training farmers on solar dryers" },
  { impact: "Setting up mushroom production units for production and training" },
  { impact: "Buying farm tools and equipment" },
  { impact: "Buying seeds" },
  { impact: "Supporting Tabasamu Orphanage" },
  { impact: "Paying salaries" },
  { impact: "Making training materials" },
  { impact: "Covering administrative costs" },
  { impact: "Supporting life coping skills training" },
];

const videos = [
  { src: "/videos/video-1.mp4", label: "Inside Jume College" },
  { src: "/videos/video-3.mp4", label: "Composting Workshop" },
  { src: "/videos/video-5.mp4", label: "Tree Planting Day" },
];

const Section = ({ title, kicker, children, alt = false }: { title: string; kicker: string; children: React.ReactNode; alt?: boolean }) => (
  <section className={`section-padding ${alt ? "" : "bg-background"}`} style={alt ? { background: "var(--section-gradient)" } : undefined}>
    <div className="container-narrow">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-10">
        <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">{kicker}</p>
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">{title}</h2>
      </motion.div>
      {children}
    </div>
  </section>
);

const Impact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={waterProjectImg} alt="Impact" className="w-full h-full object-contain bg-muted" />
          <div className="absolute inset-0 hero-gradient-animated" />
        </div>
        <div className="container-narrow relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm font-body tracking-[0.2em] uppercase text-background/70 mb-4">Our Impact</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background mb-5">
              From Learning <span className="italic text-secondary">to Livelihood</span><br />to Community Impact
            </h1>
            <p className="font-body text-background/85 text-lg max-w-2xl mx-auto">
              A live look at the lives changed, the land restored, and the futures being built at Jume College.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Live Impact Dashboard */}
      <Section kicker="01 — Live Dashboard" title="Impact in Real Time">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl p-6 md:p-8 bg-card border border-border text-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <CountUp end={s.end} suffix={s.suffix} className="block text-3xl md:text-5xl font-display font-bold text-primary mb-2" />
              <div className="font-body text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 2. Real Stories */}
      <Section kicker="02 — Voices" title="Real Stories from the Ground" alt>
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-card border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <img src={s.img} alt={s.name} className="w-full h-56 object-contain bg-muted" />
              <div className="p-6">
                <p className="font-body text-foreground/80 italic mb-4">"{s.quote}"</p>
                <p className="font-body font-semibold text-sm text-primary">{s.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. Learning by Doing */}
      <Section kicker="03 — Jume College Identity" title="Learning by Doing">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            src={outdoorClassImg} alt="Outdoor class" className="rounded-2xl w-full h-80 object-contain bg-muted"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
          <div className="space-y-4 font-body text-foreground/80">
            <p>Jume is a practical training hub — not just a project. Every lesson lives in the soil, the seed, and the harvest.</p>
            <ul className="space-y-2">
              <li>🌿 Demonstration garden data from JUME College - OTEPIC Kenya Reliance work</li>
              <li>📘 Step-by-step guides: composting, water harvesting, mulching</li>
              <li>🎥 Short training videos for farmers, students & volunteers</li>
            </ul>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 mt-10">
          {videos.map((v) => (
            <div key={v.label} className="rounded-2xl overflow-hidden bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
              <video controls preload="metadata" className="w-full aspect-video object-contain bg-muted" playsInline>
                <source src={v.src} type="video/mp4" />
              </video>
              <div className="p-3"><p className="font-body text-sm font-semibold text-foreground">{v.label}</p></div>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Water & Sustainability */}
      <Section kicker="04 — Signature Hub" title="Water & Sustainability Innovation" alt>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <figure className="rounded-2xl overflow-hidden bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
            <img src={waterProjectImg} alt="Before — site at start" className="w-full h-72 object-contain bg-muted" />
            <figcaption className="p-3 font-body text-sm font-semibold text-foreground text-center">Before</figcaption>
          </figure>
          <figure className="rounded-2xl overflow-hidden bg-card border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
            <img src={waterAfterNewImg} alt="After — restored garden" className="w-full h-72 object-contain bg-muted" />
            <figcaption className="p-3 font-body text-sm font-semibold text-foreground text-center">After</figcaption>
          </figure>
        </div>
        <div className="space-y-3 font-body text-foreground/80 max-w-3xl mx-auto text-center">
          <p className="text-lg">A model for dryland resilience — built from local knowledge and global ideas.</p>
          <ul className="space-y-2 inline-block text-left">
            <li>💧 Rainwater harvesting systems across campus</li>
            <li>♻️ Greywater reuse from kitchens and farms</li>
            <li>🚰 Future borehole plans (Tabasamu link)</li>
            <li>🌱 Permaculture integration in every plot</li>
          </ul>
        </div>
      </Section>

      {/* 5. Social Enterprise */}
      <Section kicker="05 — Enterprise" title="Where Impact Meets Income">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { img: mushroomBucketImg, title: "JUME College - OTEPIC Kenya Mushrooms", desc: "Oyster mushrooms grown in buckets — fresh and dried." },
            { img: solarImg, title: "Solar-Dried Produce", desc: "Indigenous vegetables, fruits, and seeds preserved by sun." },
            { img: beeImg, title: "Future Beekeeping 🍯", desc: "Honey, wax & pollination services in development." },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-card border border-border"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <img src={p.img} alt={p.title} className="w-full h-48 object-contain bg-muted" />
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{p.desc}</p>
                <Link to="/contact" className="font-body text-sm font-semibold text-primary hover:underline">Buy to support →</Link>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="font-body text-sm text-muted-foreground mt-6 text-center italic">Value chain: farm → processing → market</p>
      </Section>

      {/* 6. Funding Tracker */}
      <Section kicker="06 — Transparency" title="Where Your Support Goes" alt>
        <div className="grid sm:grid-cols-2 gap-4">
          {funding.map((f, i) => (
            <motion.div
              key={f.impact}
              initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-card border border-border p-5 flex items-center gap-5"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="font-body text-base text-foreground/80">{f.impact}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 7. Partnership */}
      <Section kicker="07 — Global Connection" title="Partnership & Collaboration">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "International Partners", desc: "Long-standing collaborations with organisations in Germany and across Europe." },
            { title: "Volunteer With Us", desc: "Spend a season learning, teaching, and building alongside our community." },
            { title: "Research Collaborations", desc: "Universities & researchers working with us on agroecology and water." },
          ].map((p) => (
            <div key={p.title} className="rounded-2xl bg-card border border-border p-6" style={{ boxShadow: "var(--card-shadow)" }}>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. Future Pathways */}
      <Section kicker="08 — Youth Pathways" title="From Training to Livelihood" alt>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            src={workersImg} alt="Youth pathways" className="rounded-2xl w-full h-80 object-contain bg-muted"
            style={{ boxShadow: "var(--card-shadow)" }}
          />
          <div className="space-y-4 font-body text-foreground/80">
            <p className="text-lg italic text-foreground">"From learning → to livelihood → to community impact"</p>
            <ul className="space-y-2">
              <li>🎓 Certified skills after training</li>
              <li>💼 Job creation pathways in agribusiness</li>
              <li>🚀 Entrepreneurship & startup mentorship</li>
              <li>🤝 Alumni network giving back to villages</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* 9. Roadmap */}
      <Section kicker="09 — Roadmap" title="Project Timeline & Vision">
        <div className="relative space-y-6">
          {phases.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 flex flex-col sm:flex-row gap-4 sm:items-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="shrink-0">
                <div className="text-xs font-body uppercase tracking-widest text-muted-foreground">{p.phase}</div>
                <div className="font-display text-xl font-bold text-foreground">{p.title}</div>
              </div>
              <div className="flex-1 font-body text-sm text-foreground/75">{p.desc}</div>
              <span className={`text-xs px-3 py-1 rounded-full font-body font-semibold ${
                p.status === "Done" ? "bg-primary/15 text-primary" :
                p.status === "Active" ? "bg-secondary/20 text-secondary" :
                "bg-muted text-muted-foreground"
              }`}>{p.status}</span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 10. Innovation Corner */}
      <Section kicker="10 — Innovation Corner" title="What Makes Us Different" alt>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "☀️", title: "Solar Drying", desc: "Preserving indigenous vegetables for year-round nutrition and income." },
            { icon: "🌍", title: "Permaculture + Enterprise", desc: "Training that turns ecological design into sustainable businesses." },
            { icon: "🕊️", title: "Peace Through Agriculture", desc: "Bringing communities together around shared land and shared harvests." },
          ].map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-card border border-border p-7 text-center"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <div className="text-5xl mb-3">{p.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity">
            Partner With Us →
          </Link>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
};

export default Impact;
