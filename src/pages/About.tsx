import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import campusImg from "@/assets/campus.jpg";
import meetingImg from "@/assets/community-meeting.jpg";
import soilPrepImg from "@/assets/soil-preparation.jpg";
import kidsHarvestImg from "@/assets/kids-harvest.jpg";
import kidsPlayingImg from "@/assets/kids-playing.jpg";
import mushroomBucketImg from "@/assets/mushroom-bucket.jpg";

const orgWorks = [
  "It works with people to use and adapt their existing technologies to help them deal with the rapidly changing context of their everyday lives through permaculture principles.",
  "It builds on the resources the community already has. It does not impose solutions from the outside but seeks out new uses of local materials that improve the quality of the local way of life.",
  "It develops technologies which complement local skills and easily fit into the local culture.",
  "It works closely with the community to strengthen local institutions.",
  "It works to widen the choice of technologies for people who lack the resources to explore what could be available to them.",
  "It exchanges experiences and information with other agencies, groups and key decision makers as widely as possible.",
  "It uses participatory methodologies. People must take the lead and do it themselves — otherwise development is not sustainable. This is based on the permaculture ethic of people care.",
  "It brings expertise from different programmes together to focus on the needs of the community.",
  "It aims to be sensitive to gender issues in all its projects. Although women and youth make up more than half of the population, they are still marginalized in many ways.",
  "It explores the potential for income generation in its projects — people everywhere need to earn a living, embodying the permaculture principle of obtaining a yield.",
  "It is aware of the need to protect the environment so that resources available to this generation are on hand to support the next, based on the permaculture ethic of earth care.",
  "It is aware that children are a national resource that requires education and protection, based on the permaculture ethic of fairness.",
];

const generalActivities = [
  "Research and Training in sustainable ecological agriculture technologies using holistic permaculture principles — kitchen gardens, compost, companion planting, agroforestry, soil conservation, crop rotation, cover crops/green manure, double digging/raised beds, tea-manures, semi-zero grazing, low-cost irrigation techniques, water harvesting techniques, bee keeping and natural farming. These are on-going activities; though constrained by funds, we have kept the trainings active both in the field and at the JUME College Centre.",
  "Introduced one-day, three-day, one-week and three-month craft and apprenticeship courses for farmers and college-level students with interest in farming as a career.",
  "Training in appropriate health agricultural food production technologies — HIV/AIDS prevention and care, nutrition security, etc.",
  "Encouraging value addition to agro-products.",
  "Training in farmers' collective production and marketing groups to achieve high-end market prices.",
  "Linking the community to national and external markets.",
  "Established collaboration and networking with CBOs, NGOs, County and National Governments.",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImg} alt="Jume College Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient-animated" />
        </div>
        <div className="container-narrow relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-background/60 font-semibold mb-3">Our Story</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Jume College</h1>
            <p className="font-body text-background/80 text-lg leading-relaxed">
              Where knowledge grows and communities thrive — a living laboratory for sustainable development in the heart of Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Organization Background */}
      <section className="section-padding bg-background">
        <div className="container-narrow max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Section 1</p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">Organization Background</h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              The JUME College – Organic Technology Extension and Promotion Initiative Centre (OTEPIC Kenya) was founded in Kitale, Trans-Nzoia County, to promote permaculture principles through research, training, teaching, extension and consultancy. Rooted in the three ethics of earth care, people care and fairness, the organization works hand-in-hand with farmers, youth and community leaders to build resilient livelihoods.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Over the years, JUME College has grown into a living centre of learning where local knowledge meets practical innovation — empowering communities to feed themselves, restore their land, and live in harmony with nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Section 2</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">Introduction</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Jume College was created by OTEPIC Kenya to train farmers, youth, and community leaders in sustainable living. Our vision is to inspire communities to become self-reliant, resilient, and environmentally responsible.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Education here happens in the classroom and in the field. Through hands-on training, demonstration gardens, and community projects, students learn practical skills they can apply immediately to transform their households and villages.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={meetingImg} alt="Community meeting" className="rounded-2xl w-full h-80 object-cover" style={{ boxShadow: "var(--card-shadow)" }} loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. How the organization Works */}
      <section id="org-works" className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Section 3 · Organization Works</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">How the Organization Works</h2>
          </motion.div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />
            <div className="space-y-10">
              {orgWorks.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card rounded-2xl p-6 border border-border inline-block" style={{ boxShadow: "var(--card-shadow)" }}>
                      <span className="text-xl font-display font-bold text-primary block mb-2">{String(i + 1).padStart(2, "0")}</span>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background z-10" />
                  <div className="md:hidden pl-10">
                    <span className="text-lg font-display font-bold text-primary block mb-1">{String(i + 1).padStart(2, "0")}</span>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* General Organizational Activities */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Activities</p>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-6">
              General Organizational Activities Over the Three-Year Period
            </h2>
            <ol className="space-y-4 font-body text-muted-foreground text-sm sm:text-base leading-relaxed list-decimal pl-6">
              {generalActivities.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Life at Jume College</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[soilPrepImg, kidsHarvestImg, kidsPlayingImg, mushroomBucketImg].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden"
              >
                <img src={img} alt="Life at Jume College" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
