import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import farmerHarvestImg from "@/assets/farmer-harvest.jpg";
import treePlantingImg from "@/assets/tree-planting.jpg";
import bananaHarvestImg from "@/assets/banana-harvest.jpg";
import passionFarmingImg from "@/assets/passion-farming.jpg";
import passionFruitImg from "@/assets/passion-fruit.jpg";
import mushroomFarmerImg from "@/assets/mushroom-farmer.jpg";
import mushroomCloseupImg from "@/assets/mushroom-closeup.jpg";
import fieldTrainingImg from "@/assets/field-training.jpg";
import fieldTraining2Img from "@/assets/field-training-2.jpg";
import outdoorClassImg from "@/assets/outdoor-class.jpg";
import soilPrepImg from "@/assets/soil-preparation.jpg";
import mushroomBucketImg from "@/assets/mushroom-bucket.jpg";
import kidsHarvestImg from "@/assets/kids-harvest.jpg";
import kidsPlayingImg from "@/assets/kids-playing.jpg";
import campusImg from "@/assets/campus.jpg";
import trainingFieldImg from "@/assets/training-field.jpg";
import communityGardenImg from "@/assets/community-garden.jpg";
import communityKidsImg from "@/assets/community-kids.jpg";

const gallery = [
  { src: kidsHarvestImg, label: "Kids with Fresh Harvest", span: "md:col-span-2 md:row-span-2", isNew: true },
  { src: mushroomBucketImg, label: "Mushroom Bucket Growing", span: "", isNew: true },
  { src: kidsPlayingImg, label: "Kids at Play", span: "", isNew: true },
  { src: soilPrepImg, label: "Soil Preparation", span: "md:col-span-2", isNew: true },
  { src: fieldTrainingImg, label: "Community Field Training", span: "" },
  { src: passionFruitImg, label: "Passion Fruit Harvest", span: "" },
  { src: farmerHarvestImg, label: "Proud Farmer", span: "md:col-span-2 md:row-span-2" },
  { src: bananaHarvestImg, label: "Banana Harvest", span: "" },
  { src: mushroomCloseupImg, label: "Oyster Mushrooms", span: "" },
  { src: treePlantingImg, label: "Tree Planting", span: "md:col-span-2" },
  { src: passionFarmingImg, label: "Agroforestry in Action", span: "" },
  { src: mushroomFarmerImg, label: "Mushroom Production", span: "" },
  { src: campusImg, label: "Jume College Campus", span: "md:col-span-2" },
  { src: outdoorClassImg, label: "Outdoor Learning Session", span: "" },
  { src: trainingFieldImg, label: "Training in the Field", span: "" },
  { src: communityGardenImg, label: "Community Garden", span: "" },
  { src: communityKidsImg, label: "Students & Community", span: "" },
  { src: fieldTraining2Img, label: "Hands-On Training", span: "md:col-span-2" },
];

const videos = [
  { src: "/videos/video-1.mp4", label: "Campus Tour" },
  { src: "/videos/video-2.mp4", label: "Field Training" },
  { src: "/videos/video-3.mp4", label: "Community Garden" },
  { src: "/videos/video-4.mp4", label: "Water Harvesting" },
  { src: "/videos/video-5.mp4", label: "Tree Planting" },
  { src: "/videos/video-6.mp4", label: "Farm Activities" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<{ src: string; label: string } | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImg} alt="Gallery" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient-animated" />
        </div>
        <div className="container-narrow relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.15em] uppercase text-background/60 font-semibold mb-3">Media</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Gallery & Videos</h1>
            <p className="font-body text-background/80 text-lg">A visual journey through our campus, training, and community impact.</p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8 text-center">
            Photo Gallery
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={img.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
              >
                <div
                  className={`w-full ${img.span.includes("row-span-2") ? "h-full min-h-[300px] md:min-h-[420px]" : "aspect-square"}`}
                  onClick={() => setSelected(img)}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                {img.isNew && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-[10px] sm:text-xs font-bold font-body uppercase tracking-wider shadow-lg">
                    New
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 right-3 text-background font-body text-xs sm:text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                  {img.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Explore more buttons */}
          <div className="mt-12 grid sm:grid-cols-3 gap-4">
            {[
              { to: "/projects", label: "Our Projects", note: "See what we're building in the field" },
              { to: "/tabasamu", label: "Tabasamu Home", note: "Stories from the children's home" },
              { to: "/services", label: "Our Services", note: "Training, consultancy & more" },
            ].map((b) => (
              <a
                key={b.to}
                href={b.to}
                className="group block p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <p className="font-display font-bold text-foreground text-base mb-1 group-hover:text-primary transition-colors">
                  {b.label} →
                </p>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">{b.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8 text-center">
            Videos from the Field
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((vid, i) => (
              <motion.div
                key={vid.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-2xl overflow-hidden bg-card border border-border"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <video
                  controls
                  preload="metadata"
                  className="w-full aspect-video object-cover"
                  playsInline
                >
                  <source src={vid.src} type="video/mp4" />
                </video>
                <div className="p-4">
                  <p className="font-body font-semibold text-foreground text-sm">{vid.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelected(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selected.src}
              alt={selected.label}
              className="max-w-full max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 text-white font-body text-lg font-semibold drop-shadow-lg"
            >
              {selected.label}
            </motion.p>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-bold transition-colors"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
