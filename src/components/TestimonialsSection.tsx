import { motion } from "framer-motion";
import voices1 from "@/assets/voices-1.jpeg";
import voices2 from "@/assets/voices-2.jpeg";
import voices3 from "@/assets/voices-3.jpeg";

const testimonials = [
  {
    quote: "Jume College changed my life. I learned how to grow food for my family and earn an income from mushroom farming. I never imagined farming could be this rewarding.",
    name: "Irine Anyango",
    role: "Mushroom Enterprise Graduate",
    avatar: voices1,
  },
  {
    quote: "The permaculture training opened my eyes to a new way of farming. My soil is healthier, my harvests are bigger, and I no longer need expensive chemicals.",
    name: "Shalom Kitur",
    role: "Permaculture Training Alumni",
    avatar: voices2,
  },
  {
    quote: "As a young person, I thought farming was for old people. Jume College showed me that agriculture is innovation, science, and opportunity all in one.",
    name: "Mercy Cherono",
    role: "Youth Farming Initiative",
    avatar: voices3,
  },
  {
    quote: "The community training sessions brought our village together. We now share knowledge, seeds, and hope for a better future for our children.",
    name: "Jacinta Njeri",
    role: "Community Leader",
    avatar: null,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Voices from Our Community
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Hear from the farmers, students, and leaders whose lives have been transformed through Jume College programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 relative"
              style={{ boxShadow: "var(--card-shadow)" }}
            >
              <span className="text-5xl text-primary/20 font-display absolute top-4 left-6">"</span>
              <p className="font-body text-foreground/90 leading-relaxed mb-6 mt-4 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-contain bg-muted border border-border" loading="lazy" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-muted border border-border flex items-center justify-center font-display font-bold text-muted-foreground text-sm" aria-label={t.name}>
                    {t.name.split(" ").map(n => n[0]).join("").slice(0,2)}
                  </div>
                )}
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                  <p className="font-body text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
