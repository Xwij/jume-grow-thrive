import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from "@/components/CountUp";

const stats = [
  { end: 53000, suffix: "+", label: "Farmers Trained (25 communities)" },
  { end: 30000, suffix: "+", label: "Trees Planted" },
  { end: 3500, suffix: "+", label: "People with Clean Water" },
  { end: 2000, suffix: "+", label: "Youth & Women Empowered" },
  { end: 5, suffix: "", label: "Water Retention Landscapes" },
];

const ImpactStrip = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-body tracking-[0.2em] uppercase text-secondary font-semibold mb-3">
            Live Impact
          </p>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-3">
            Real numbers. <span className="italic text-primary">Real change.</span>
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Every figure below is a story — a farmer empowered, a tree rooted, a child fed.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-5 md:p-6 bg-card border border-border text-center hover:-translate-y-1 transition-transform"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <CountUp
                end={s.end}
                suffix={s.suffix}
                duration={2.4}
                className="block text-2xl md:text-3xl lg:text-4xl font-display font-bold text-primary mb-1"
              />
              <div className="font-body text-[11px] md:text-xs text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 font-body font-semibold text-primary hover:gap-3 transition-all"
          >
            See full impact dashboard →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStrip;
