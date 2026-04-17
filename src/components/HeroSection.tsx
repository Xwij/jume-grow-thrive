import { motion } from "framer-motion";
import campusImg from "@/assets/campus.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={campusImg} alt="Jume College Campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-gradient-animated" />
      </div>

      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="relative z-10 text-center section-padding container-narrow">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm sm:text-base font-body tracking-[0.2em] uppercase text-background/70 mb-6"
        >
          OTEPIC Kenya
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-background leading-tight mb-6"
        >
          Welcome to <br />
          <span className="italic text-secondary">Jume College</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl lg:text-2xl font-body font-light text-background/85 max-w-3xl mx-auto mb-10"
        >
          Growing Knowledge, Nature, and Community
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
        >
          <a href="/impact" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg">
            See Our Live Impact →
          </a>
          <a href="/tabasamu" className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity shadow-lg">
            Tabasamu Children's Home 🌱
          </a>
          <a href="#programs" className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-background/30 text-background font-body font-semibold text-base hover:bg-background/10 transition-colors">
            Explore Programs
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
