import { motion } from "framer-motion";

const audiences = ["Farmers", "Youth Groups", "Community Leaders", "Students & Researchers", "International Volunteers", "Sustainable Development Organizations"];

const JoinSection = () => {
  return (
    <section id="join" className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="section-padding container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
            Together We Can Grow a<br />Sustainable Future
          </h2>
          <p className="text-lg font-body text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join us in this journey of learning, innovation, and hope. Support our programs, volunteer, or partner with us to expand opportunities for communities across Kenya and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {audiences.map((a) => (
              <span key={a} className="px-5 py-2 rounded-full border border-primary-foreground/25 text-primary-foreground/90 font-body text-sm">
                {a}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:otepic07@yahoo.com" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity">
              Get in Touch
            </a>
            <a href="#programs" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-base hover:bg-primary-foreground/10 transition-colors">
              View Programs
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinSection;
