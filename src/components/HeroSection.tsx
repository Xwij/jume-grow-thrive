import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import campusImg from "@/assets/campus.jpg";
import waterPondImg from "@/assets/water-pond.jpg";
import treePruningImg from "@/assets/tree-pruning.jpg";
import bananaGroveImg from "@/assets/banana-grove.jpg";
import seedlingsNurseryImg from "@/assets/seedlings-nursery.jpg";
import treePlantingFieldImg from "@/assets/tree-planting-field.jpg";
import womenTillingImg from "@/assets/women-tilling.jpg";

const slides = [
  { image: campusImg, caption: "Welcome to Jume College — a living campus for regenerative learning in Trans Nzoia, Kenya." },
  { image: waterPondImg, caption: "Water harvesting and 3Rs systems bringing life back to the land." },
  { image: treePruningImg, caption: "Hands-on training in agroforestry and sustainable tree care." },
  { image: bananaGroveImg, caption: "Food forests producing year-round nutrition for our community." },
  { image: seedlingsNurseryImg, caption: "Our tree nursery raising thousands of seedlings every season." },
  { image: treePlantingFieldImg, caption: "Restoring landscapes one tree at a time." },
  { image: womenTillingImg, caption: "Empowering women farmers with biointensive techniques." },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative pt-16">
      <div className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden bg-foreground">
        <AnimatePresence mode="sync">
          <motion.img
            key={index}
            src={slides[index].image}
            alt={slides[index].caption}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 hover:bg-background text-foreground flex items-center justify-center shadow-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 hover:bg-background text-foreground flex items-center justify-center shadow-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom caption strip (KNP style) */}
        <div className="absolute left-0 right-0 bottom-6 sm:bottom-10 flex justify-center px-4">
          <div className="w-full max-w-5xl bg-foreground/70 backdrop-blur-sm rounded-md px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
            <p className="font-body text-background text-sm sm:text-base lg:text-lg leading-snug">
              {slides[index].caption}
            </p>
            <a
              href="/about"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap shadow"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
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

      {/* Title band below the slider */}
      <div className="bg-background border-b border-border">
        <div className="container-narrow section-padding text-center py-10 sm:py-14">
          <p className="text-xs sm:text-sm font-body tracking-[0.25em] uppercase text-muted-foreground mb-3">
            OTEPIC Kenya
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-4">
            Welcome to <span className="italic text-primary">Jume College</span>
          </h1>
          <p className="text-base sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto mb-8">
            Growing Knowledge, Nature, and Community
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
            <a href="/impact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow">
              See Our Live Impact →
            </a>
            <a href="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow">
              Explore Projects
            </a>
            <a href="/newsletters" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-border text-foreground font-body font-semibold text-sm hover:bg-muted transition-colors">
              Report Newsletter
            </a>
            <a href="/projects#prospectus" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-red-600 text-white font-body font-semibold text-sm hover:bg-red-700 transition-colors shadow">
              The Jume College – OTEPIC Kenya Training Prospectus →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
