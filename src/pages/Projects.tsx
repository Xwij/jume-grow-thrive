import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import waterProjectImg from "@/assets/water-project.jpg";
import communityGardenImg from "@/assets/community-garden.jpg";
import trainingImg from "@/assets/training-field.jpg";
import workersImg from "@/assets/workers.jpg";
import harvestImg from "@/assets/harvest-kids.jpg";
import meetingImg from "@/assets/community-meeting.jpg";

const projects = [
  {
    title: "Water Retention Landscapes",
    desc: "Building swales, ponds, and rainwater harvesting systems to restore the natural water cycle and help communities become resilient to drought and climate change.",
    image: waterProjectImg,
    status: "Ongoing",
    impact: "500+ families served",
  },
  {
    title: "Community Food Gardens",
    desc: "Establishing demonstration gardens and training local farmers in biointensive agriculture to increase food production on small plots of land.",
    image: communityGardenImg,
    status: "Active",
    impact: "20+ gardens established",
  },
  {
    title: "Permaculture Training Program",
    desc: "Comprehensive training in permaculture design, teaching participants how to create productive and self-sustaining farming systems.",
    image: trainingImg,
    status: "Ongoing",
    impact: "300+ graduates",
  },
  {
    title: "Earth Construction & Infrastructure",
    desc: "Building sustainable infrastructure using local materials and traditional building methods combined with modern eco-friendly techniques.",
    image: workersImg,
    status: "In Progress",
    impact: "Campus expansion",
  },
  {
    title: "Youth Farming Initiative",
    desc: "Empowering young people with practical agricultural skills, helping them see farming as a viable and dignified livelihood.",
    image: harvestImg,
    status: "Active",
    impact: "150+ youth trained",
  },
  {
    title: "Women's Empowerment Program",
    desc: "Training women community leaders in sustainable agriculture, enterprise development, and environmental conservation.",
    image: meetingImg,
    status: "Ongoing",
    impact: "200+ women reached",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 section-padding overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        </div>
        <div className="container-narrow relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-body tracking-[0.15em] uppercase text-background/60 font-semibold mb-3">Our Impact</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-background mb-4">Projects</h1>
            <p className="font-body text-background/80 text-lg">Transforming communities through practical, hands-on sustainable development projects across Kenya.</p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-card rounded-2xl overflow-hidden border border-border group hover:border-primary/30 transition-all duration-300"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold">{project.status}</span>
                    <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-body text-xs font-semibold">{project.impact}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
