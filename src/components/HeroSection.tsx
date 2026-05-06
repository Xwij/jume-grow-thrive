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
import home1Img from "@/assets/home1.jpg";
import home2Img from "@/assets/home2.jpg";
import home3Img from "@/assets/home3.jpg";
import fitImg from "@/assets/fit.jpeg";

const slides = [
  campusImg,
  home1Img,
  home2Img,
  home3Img,
  fitImg,
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
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 2000);
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
            src={slides[index]}
            alt=""
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

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

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
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
