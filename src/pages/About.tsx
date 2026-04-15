import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import campusImg from "@/assets/campus.jpg";
import meetingImg from "@/assets/community-meeting.jpg";
import trainingImg from "@/assets/training-field.jpg";
import kidsImg from "@/assets/community-kids.jpg";
import gardenImg from "@/assets/community-garden.jpg";
import workersImg from "@/assets/workers.jpg";

const timeline = [
  { year: "2008", title: "OTEPIC Founded", desc: "Organic Technology Extension and Promotion of Initiative Centre (OTEPIC) was established in Kitale, Trans-Nzoia County, Kenya." },
  { year: "2012", title: "First Training Programs", desc: "Launched permaculture and biointensive agriculture training for local farmers and youth groups." },
  { year: "2015", title: "Water Harvesting Begins", desc: "Initiated water retention landscape projects, building swales and ponds to combat drought." },
  { year: "2018", title: "Jume College Established", desc: "The Jume College campus was officially opened as a dedicated center for sustainable agriculture education." },
  { year: "2021", title: "International Partnerships", desc: "Expanded volunteer and partnership programs with international organizations and universities." },
  { year: "2024", title: "Growing Impact", desc: "Over 500 graduates trained, 20+ community gardens established, and ongoing expansion of campus facilities." },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero with campus image */}
      <section className="relative pt-28 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img src={campusImg} alt="Jume College Campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/75 via-foreground/60 to-foreground/80" />
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

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Our Mission</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-4">Empowering Communities Through Knowledge</h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Jume College was created by OTEPIC Kenya to train farmers, youth, and community leaders in sustainable living. Our vision is to inspire communities to become self-reliant, resilient, and environmentally responsible.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Here, education happens in the classroom and in the field. Through hands-on training, demonstration gardens, and community projects, students learn practical skills they can apply immediately.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={meetingImg} alt="Community meeting at Jume College" className="rounded-2xl w-full h-80 object-cover" style={{ boxShadow: "var(--card-shadow)" }} loading="lazy" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Our Journey</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">History & Milestones</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-px" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card rounded-2xl p-6 border border-border inline-block" style={{ boxShadow: "var(--card-shadow)" }}>
                      <span className="text-2xl font-display font-bold text-primary block mb-1">{item.year}</span>
                      <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background z-10" />
                  <div className="md:hidden pl-10">
                    <span className="text-xl font-display font-bold text-primary block mb-1">{item.year}</span>
                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Strip */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground">Life at Jume College</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[trainingImg, kidsImg, gardenImg, workersImg].map((img, i) => (
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
