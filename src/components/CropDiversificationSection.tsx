import { motion } from "framer-motion";
import harvestImg from "@/assets/harvest-kids.jpg";
import avocadosImg from "@/assets/avocados.jpg";

const advantages = [
  { number: "01", title: "Risk Reduction", points: ["Weather and climate resilience — different crops respond differently to conditions", "Pest and disease management — multiple crops reduce spread and act as natural repellents"] },
  { number: "02", title: "Improved Soil Health", points: ["Soil fertility — varying nutrient needs and root structures maintain fertility", "Reduced soil erosion — diverse root depths maintain soil structure"] },
  { number: "03", title: "Increased Profitability", points: ["Multiple revenue streams reduce reliance on a single crop", "Access to new markets through variety of fresh and processed products"] },
  { number: "04", title: "Sustainable Practices", points: ["Reduced need for chemical fertilizers and pesticides", "Improved ecosystem services — biodiversity, pollinators, carbon sequestration"] },
  { number: "05", title: "Market Adaptability", points: ["Flexibility to shift focus based on consumer demand", "Opportunities for value-added products that fetch higher prices"] },
  { number: "06", title: "Food Security", points: ["Year-round production with different harvesting times", "Enhanced dietary diversity improving nutrition for families and communities"] },
];

const CropDiversificationSection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container-narrow">
        {/* Header with images */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Knowledge Center</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Crop Diversification</h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Discover the advantages of diversifying crops for resilient, profitable, and sustainable farming.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 gap-4">
            <img src={harvestImg} alt="Children with harvest" className="rounded-2xl w-full h-40 object-contain bg-muted" loading="lazy" />
            <img src={avocadosImg} alt="Avocado trees" className="rounded-2xl w-full h-40 object-contain bg-muted" loading="lazy" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, i) => (
            <motion.div
              key={adv.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-2xl p-7 border border-border hover:border-primary/30 transition-all duration-300"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <span className="text-4xl font-display font-bold text-primary/20 block mb-2">{adv.number}</span>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">{adv.title}</h3>
              <ul className="space-y-2">
                {adv.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm font-body text-muted-foreground leading-relaxed">
                    <span className="text-secondary mt-1 text-xs flex-shrink-0">▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CropDiversificationSection;
