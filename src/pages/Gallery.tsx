import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
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
import waterPondImg from "@/assets/water-pond.jpg";
import treePruningImg from "@/assets/tree-pruning.jpg";
import agroforestryTeamImg from "@/assets/agroforestry-team.jpg";
import bananaGroveImg from "@/assets/banana-grove.jpg";
import seedlingsNurseryImg from "@/assets/seedlings-nursery.jpg";
import mulchingTreeImg from "@/assets/mulching-tree.jpg";
import treePlantingFieldImg from "@/assets/tree-planting-field.jpg";
import womenTillingImg from "@/assets/women-tilling.jpg";
import diggingWaterPanImg from "@/assets/digging-water-pan.jpg";
import communityCircleImg from "@/assets/community-circle.jpg";
import trainingBandaImg from "@/assets/training-banda.jpg";
import donkeyFieldImg from "@/assets/donkey-field.jpg";
import donkeyTeamImg from "@/assets/donkey-team.jpg";
import bandaCircleImg from "@/assets/banda-circle.jpg";
import otepicCollageImg from "@/assets/otepic-amani-collage.jpg";
import agriEngineeringImg from "@/assets/agri-engineering.jpg";
import soapWomenImg from "@/assets/soap-women.jpg";
import tailoringImg from "@/assets/tailoring.jpg";

type GalleryItem = { src: string; label: string; isNew?: boolean };

const gallery: GalleryItem[] = [
  { src: otepicCollageImg, label: "JUME College - OTEPIC Kenya Amani Garden — Real Food Revolution", isNew: true },
  { src: soapWomenImg, label: "Soap Making — Women's Enterprise", isNew: true },
  { src: agriEngineeringImg, label: "Agricultural Engineering — Drip Irrigation", isNew: true },
  { src: communityCircleImg, label: "Community Circle Gathering", isNew: true },
  { src: trainingBandaImg, label: "Banda Workshop", isNew: true },
  { src: donkeyTeamImg, label: "Working Together", isNew: true },
  { src: donkeyFieldImg, label: "Field Companions", isNew: true },
  { src: bandaCircleImg, label: "Circle Discussion", isNew: true },
  { src: waterPondImg, label: "Water Harvesting Pond", isNew: true },
  { src: seedlingsNurseryImg, label: "Tree Seedlings Nursery", isNew: true },
  { src: treePruningImg, label: "Pruning Workshop", isNew: true },
  { src: bananaGroveImg, label: "Banana Grove", isNew: true },
  { src: agroforestryTeamImg, label: "Agroforestry Training", isNew: true },
  { src: womenTillingImg, label: "Women Preparing Land", isNew: true },
  { src: diggingWaterPanImg, label: "Digging Water Pan", isNew: true },
  { src: treePlantingFieldImg, label: "Planting Day", isNew: true },
  { src: mulchingTreeImg, label: "Mulching Young Trees", isNew: true },
  { src: kidsHarvestImg, label: "Kids with Fresh Harvest" },
  { src: mushroomBucketImg, label: "Mushroom Bucket Growing" },
  { src: kidsPlayingImg, label: "Kids at Play" },
  { src: soilPrepImg, label: "Soil Preparation" },
  { src: fieldTrainingImg, label: "Community Field Training" },
  { src: passionFruitImg, label: "Passion Fruit Harvest" },
  { src: farmerHarvestImg, label: "Proud Farmer" },
  { src: bananaHarvestImg, label: "Banana Harvest" },
  { src: mushroomCloseupImg, label: "Oyster Mushrooms" },
  { src: treePlantingImg, label: "Tree Planting" },
  { src: passionFarmingImg, label: "Agroforestry in Action" },
  { src: mushroomFarmerImg, label: "Mushroom Production" },
  { src: campusImg, label: "Jume College Campus" },
  { src: outdoorClassImg, label: "Outdoor Learning Session" },
  { src: trainingFieldImg, label: "Training in the Field" },
  { src: communityGardenImg, label: "Community Garden" },
  { src: communityKidsImg, label: "Students & Community" },
  { src: fieldTraining2Img, label: "Hands-On Training" },
];

const videos = [
  { src: "/videos/video-1.mp4", label: "Campus Tour" },
  { src: "/videos/video-2.mp4", label: "Field Training" },
  { src: "/videos/video-3.mp4", label: "Community Garden" },
  { src: "/videos/video-4.mp4", label: "Water Harvesting" },
  { src: "/videos/video-5.mp4", label: "Tree Planting" },
  { src: "/videos/video-6.mp4", label: "Farm Activities" },
  { src: "/videos/video-7.mp4", label: "Latest from the Field" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i + 1) % gallery.length));
  }, []);
  const prev = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, next, prev]);

  const selected = selectedIndex !== null ? gallery[selectedIndex] : null;

  return (
    <div className="min-h-screen" style={{ fontFamily: "Inter, Montserrat, system-ui, sans-serif" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImg} alt="Gallery" className="w-full h-full object-contain bg-muted" />
          <div className="absolute inset-0 hero-gradient-animated" />
        </div>
        <div className="container-narrow relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.15em] uppercase text-background/80 font-semibold mb-3">Media</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Gallery & Videos</h1>
            <p className="font-body text-background/90 text-lg">A visual journey through our campus, training, and community impact.</p>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-8 text-center">
            Photo Gallery
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {gallery.map((img, i) => (
              <motion.button
                type="button"
                key={img.label + i}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 10) * 0.04, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedIndex(i)}
                className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square bg-muted/40 ring-1 ring-border/50 hover:ring-primary/50 transition-all"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="absolute inset-0 w-full h-full object-contain p-1 transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                {img.isNew && (
                  <span className="absolute top-2 left-2 z-10 px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground text-[10px] font-bold uppercase tracking-wider shadow">
                    New
                  </span>
                )}
                {/* Always-visible darkened label bar */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent pt-6 pb-2 px-2.5">
                  <span className="block text-white text-[11px] sm:text-xs font-semibold leading-tight drop-shadow tracking-wide">
                    {img.label}
                  </span>
                </div>
              </motion.button>
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
                <video controls preload="metadata" className="w-full aspect-video object-contain bg-muted" playsInline>
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

      {/* Fullscreen Lightbox with prev/next */}
      <AnimatePresence>
        {selected && selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 26, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[95vw] max-h-[88vh] flex flex-col items-center"
            >
              <img
                src={selected.src}
                alt={selected.label}
                className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="mt-4 text-white font-semibold text-base sm:text-lg drop-shadow-lg text-center px-4" style={{ fontFamily: "Inter, Montserrat, sans-serif" }}>
                {selected.label}
                <span className="ml-3 text-white/60 text-sm font-normal">{selectedIndex + 1} / {gallery.length}</span>
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <button
              onClick={() => setSelectedIndex(null)}
              aria-label="Close"
              className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
