import { motion } from "framer-motion";
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

const gallery = [
  { src: fieldTrainingImg, label: "Community Field Training", span: "md:col-span-2 md:row-span-2" },
  { src: mushroomFarmerImg, label: "Mushroom Production", span: "" },
  { src: passionFruitImg, label: "Passion Fruit Harvest", span: "" },
  { src: farmerHarvestImg, label: "Proud Farmer", span: "" },
  { src: bananaHarvestImg, label: "Banana Harvest", span: "" },
  { src: mushroomCloseupImg, label: "Oyster Mushrooms", span: "" },
  { src: treePlantingImg, label: "Tree Planting", span: "" },
  { src: passionFarmingImg, label: "Agroforestry in Action", span: "" },
  { src: outdoorClassImg, label: "Outdoor Learning Session", span: "md:col-span-2" },
  { src: fieldTraining2Img, label: "Hands-On Training", span: "" },
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
            Life at Jume College
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            A glimpse into our campus, training sessions, and the vibrant community behind our work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {gallery.map((img, i) => (
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
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
      </div>
    </section>
  );
};

export default GallerySection;
