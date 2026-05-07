import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import kidsHarvestImg from "@/assets/kids-harvest.jpg";
import soilPrepImg from "@/assets/soil-preparation.jpg";
import mushroomBucketImg from "@/assets/mushroom-bucket.jpg";

import fieldTrainingImg from "@/assets/field-training.jpg";
import passionFruitImg from "@/assets/passion-fruit.jpg";

const preview = [
  { src: fieldTrainingImg, label: "Community Field Training", span: "md:col-span-2 md:row-span-2" },
  { src: mushroomBucketImg, label: "Mushroom Growing", span: "" },
  { src: passionFruitImg, label: "Passion Fruit", span: "" },
  { src: kidsHarvestImg, label: "Kids with Fresh Harvest", span: "md:col-span-2" },
  { src: soilPrepImg, label: "Soil Preparation", span: "" },
];

const GallerySection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Gallery</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Life at JUME College - OTEPIC Kenya
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            A glimpse into our campus, training sessions, and the vibrant community behind our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {preview.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
            >
              <div className={`w-full ${img.span.includes("row-span-2") ? "h-full min-h-[300px] md:min-h-[420px]" : "aspect-square"}`}>
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-contain bg-muted transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 right-3 text-background font-body text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover:opacity-90 transition-opacity"
          >
            View Full Gallery & Videos →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
