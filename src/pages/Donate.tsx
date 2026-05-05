import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import donateHero from "@/assets/donate-hero.jpg";

const useCases = [
  { icon: "🍲", title: "Daily Nutritious Meals", desc: "Provide balanced meals from our garden and local farmers so every child eats three healthy meals a day.", color: "#f59e0b" },
  { icon: "📚", title: "School Fees & Books", desc: "Cover tuition, uniforms, exercise books, and learning materials for the children at Tabasamu and Jume College students.", color: "#3b82f6" },
  { icon: "💧", title: "Clean Water & Sanitation", desc: "Help us complete the borehole and improve sanitation for a healthier home environment.", color: "#06b6d4" },
  { icon: "🌱", title: "Garden & Poultry Project", desc: "Seeds, tools, chicken feed, and infrastructure that make our food systems self-sustaining.", color: "#22c55e" },
  { icon: "🏥", title: "Healthcare & Wellbeing", desc: "Medical check-ups, medicine, and emergency care for the children and surrounding community.", color: "#ec4899" },
  { icon: "🎓", title: "Vocational & Future Pathways", desc: "Training, mentorship, and seed capital that prepare youth for independent, sustainable lives.", color: "#a855f7" },
];

const tiers = [
  { amount: "$25", impact: "Feeds a child for a month" },
  { amount: "$60", impact: "Books & supplies for one term" },
  { amount: "$150", impact: "Sponsors a child's school fees" },
  { amount: "$500", impact: "Funds a community garden cycle" },
];

const Donate = () => {
  const [openInfo, setOpenInfo] = useState<typeof useCases[number] | null>(null);

  const PAYPAL_EMAIL = "munyasiaphilip2@gmail.com";
  const paypalUrl = `https://www.paypal.com/signin?returnUri=${encodeURIComponent(`https://www.paypal.com/myaccount/transfer/homepage/pay?recipient=${PAYPAL_EMAIL}`)}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={donateHero} alt="Children we support" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.85) 0%, rgba(245,158,11,0.75) 60%, rgba(236,72,153,0.8) 100%)" }} />
        </div>
        <div className="container-narrow relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.2em] uppercase text-white/95 font-bold mb-3">💛 Support Our Mission</p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">Donate to OTEPIC</h1>
            <p className="font-body text-white text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Every contribution helps children at Tabasamu Children's Home and farmers across Trans Nzoia build a sustainable, hopeful future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where funds go */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Where Your Donation Goes</h2>
            <p className="font-body text-foreground/70 text-lg">100% of donations directly support our children, farmers, and community programs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((u, i) => (
              <motion.button
                key={u.title}
                onClick={() => setOpenInfo(u)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-left rounded-2xl p-7 bg-card border border-border hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4" style={{ background: `${u.color}20` }}>
                  {u.icon}
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">{u.title}</h3>
                <p className="font-body text-foreground/70 leading-relaxed mb-3">{u.desc}</p>
                <span className="text-sm font-semibold text-primary">Learn more →</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Donation tiers */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">Choose Your Impact</h2>
            <p className="font-body text-foreground/70">Suggested giving amounts — every gift makes a real difference.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t) => (
              <div key={t.amount} className="rounded-2xl p-6 bg-card border-2 border-primary/20 text-center hover:border-primary transition-colors">
                <div className="text-4xl font-display font-bold text-primary mb-2">{t.amount}</div>
                <p className="font-body text-sm text-foreground/70">{t.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to donate */}
      <section className="section-padding">
        <div className="container-narrow max-w-3xl">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-border">
            <h2 className="text-3xl font-display font-bold text-foreground mb-6 text-center">How to Donate</h2>
            <div className="space-y-5 font-body text-foreground/80">
              <div>
                <h3 className="font-bold text-foreground mb-1">💳 Donate via PayPal</h3>
                <p>
                  Give securely from anywhere in the world using a credit card or PayPal account. Send your contribution to our PayPal email:{" "}
                  <a href={`mailto:${PAYPAL_EMAIL}`} className="text-primary font-semibold underline">{PAYPAL_EMAIL}</a>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">🏦 Bank Transfer (International)</h3>
                <p>Contact us for bank details and wire instructions for larger gifts and partnerships.</p>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-1">📞 Talk to us for other donation options</h3>
                <p>Call <a href="tel:+254725429179" className="text-primary underline">+254 725 429 179</a> to discuss sponsorship, in-kind gifts, or partnerships.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a href={paypalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-[#0070ba] text-white font-body font-semibold hover:bg-[#005a96] transition-colors shadow">
                Donate with PayPal →
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center px-7 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gaussian-blur info popup */}
      <AnimatePresence>
        {openInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenInfo(null)}
            className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card/95 backdrop-blur-md rounded-2xl max-w-lg w-full p-8 border border-border relative"
              style={{ boxShadow: "0 25px 60px -12px rgba(0,0,0,0.45)" }}
            >
              <button
                onClick={() => setOpenInfo(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 hover:bg-background flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-4" style={{ background: `${openInfo.color}20` }}>
                {openInfo.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">{openInfo.title}</h3>
              <p className="font-body text-foreground/75 leading-relaxed mb-6">{openInfo.desc}</p>
              <p className="font-body text-foreground/70 leading-relaxed text-sm mb-6">
                Your donation directly funds this program at OTEPIC and Tabasamu Children's Home. Every gift, no matter the size, creates lasting change for the children, farmers and communities we serve in Trans Nzoia, Kenya.
              </p>
              <a href={paypalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0070ba] text-white font-body font-semibold text-sm hover:bg-[#005a96] transition-colors">
                Donate with PayPal →
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Donate;
