import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import hero6 from "@/assets/hero-6.jpg";
import hero7 from "@/assets/hero-7.jpg";
import hero8 from "@/assets/hero-8.jpg";
import hero9 from "@/assets/hero-9.jpg";
import hero10 from "@/assets/hero-10.jpg";
import hero11 from "@/assets/hero-11.jpg";
import hero12 from "@/assets/hero-12.jpg";

const baseSlides = [hero1, hero2, hero3, hero4, hero5, hero6, hero7, hero8, hero9, hero10, hero11, hero12];

const shuffle = <T,>(arr: T[]): T[] => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const HeroSection = () => {
  const slides = useMemo(() => shuffle(baseSlides), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2000);
    return () => clearInterval(id);
  }, [slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative pt-16">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-foreground">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Blurred background fill */}
            <img
              src={slides[index]}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70"
            />
            <div className="absolute inset-0 bg-foreground/20" />
            {/* Foreground image, full visibility, no crop */}
            <motion.img
              src={slides[index]}
              alt=""
              initial={{ scale: 1.04 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="relative w-full h-full object-contain"
            />
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute z-10 left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 hover:bg-background text-foreground flex items-center justify-center shadow-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute z-10 right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 hover:bg-background text-foreground flex items-center justify-center shadow-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="absolute z-10 bottom-4 left-0 right-0 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-secondary" : "w-1.5 bg-background/60 hover:bg-background"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
