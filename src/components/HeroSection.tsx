import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import campusImg from "@/assets/campus.jpg";
import waterPondImg from "@/assets/water-pond.jpg";
import treePruningImg from "@/assets/tree-pruning.jpg";
import bananaGroveImg from "@/assets/banana-grove.jpg";
import seedlingsNurseryImg from "@/assets/seedlings-nursery.jpg";
import treePlantingFieldImg from "@/assets/tree-planting-field.jpg";
import womenTillingImg from "@/assets/women-tilling.jpg";

const heroImages = [
  campusImg,
  waterPondImg,
  treePruningImg,
  bananaGroveImg,
  seedlingsNurseryImg,
  treePlantingFieldImg,
  womenTillingImg,
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroImages.length);
    }, 3100);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={heroImages[index]}
            alt="Jume College"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ opacity: { duration: 3.1, ease: "easeInOut" }, scale: { duration: 7, ease: "easeOut" } }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/70 via-primary/40 to-foreground/70" />
      </div>

      <div className="absolute inset-0 opacity-15 pointer-events-none">
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

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-secondary" : "w-1.5 bg-background/40 hover:bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
