import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import philipImg from "@/assets/philip-munyasia.jpg";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-16 section-padding" style={{ background: "var(--section-gradient)" }}>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-3">Get In Touch</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">Contact Us</h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to learn more about our programs, volunteer opportunities, or partnerships.
            </p>
          </motion.div>

          {/* Director's story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto mb-16"
          >
            <div className="grid md:grid-cols-5 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
              <div className="md:col-span-2 relative h-72 md:h-full min-h-[320px]">
                <img
                  src={philipImg}
                  alt="Philip Munyasia, Director of Jume College"
                  className="w-full h-full object-contain bg-muted"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <p className="text-xs font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-2">Meet the Director</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">Philip Munyasia</h2>
                <p className="text-sm font-body text-primary font-semibold mb-5">A Life Rooted in Regeneration, Learning, and Community</p>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-[15px]">
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Early Life: Growing Through Challenge</h3>
                    <p>
                      Philip Munyasia was born and raised in rural Kenya, where daily life was closely tied to the land. Growing up, he experienced firsthand the realities many communities face — unpredictable harvests, water scarcity, and limited access to resources. Despite these challenges, his childhood was shaped by strong community values, resilience, and a deep connection to nature. From an early age, Philip understood that change would require both knowledge and action — and education became his pathway.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Education and Determination</h3>
                    <p>
                      Philip pursued his primary and secondary education with determination, often overcoming financial and social barriers. His curiosity extended beyond the classroom — he wanted to understand why communities struggled with food systems and how nature could be restored rather than exploited. This mindset laid the foundation for a lifelong journey of learning.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">A Global Learning Journey</h3>
                    <p>
                      Philip's commitment opened doors to international opportunities. He received a scholarship to study in the United States, training with <strong className="text-foreground">Ecology Action</strong> in California, where he gained hands-on experience in biointensive agriculture. His journey continued: peace education at the Institute of Global Peace in <strong className="text-foreground">Portugal</strong>, permaculture training in <strong className="text-foreground">Austria</strong>, and peace journalism in <strong className="text-foreground">Switzerland</strong> — blending agriculture, ecology, peacebuilding and education into a holistic approach to development.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Always Returning Home</h3>
                    <p>
                      After every experience abroad, Philip returned home — sharing knowledge, training communities, and testing practical solutions on the ground. He believed real impact comes not from staying abroad, but from applying global knowledge to local challenges.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Establishing a Regenerative Vision</h3>
                    <p>
                      With years of learning and hands-on experience, Philip founded <strong className="text-foreground">OTEPIC</strong> (Organic Technology Extension and Promotion of Initiative Centre) — a living model of regenerative development. Through OTEPIC he introduced biointensive and regenerative farming, water conservation and harvesting, permaculture design, and community-based training programs. What began as a small initiative has grown into a center for learning, innovation and transformation.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">Empowering People, Transforming Communities</h3>
                    <p>
                      Philip's work has empowered youth, women and farmers with practical skills. Farmers have improved food production and soil health; young people have found purpose in agriculture; communities have grown more resilient to climate change; and vulnerable groups, including children's homes, have moved toward self-sufficiency.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">A Living Mission</h3>
                    <p>
                      Today Philip continues to inspire change through action. His journey — from a rural childhood to global learning and back to community transformation — reflects a deep commitment to regeneration, peace, and empowerment. His story is about the power of returning home, sharing knowledge, and growing a future where both people and nature thrive together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-sm">Location</h3>
                    <p className="font-body text-muted-foreground text-sm">Upendo Farm, Trans Nzoia County, Kenya</p>
                    <p className="font-body text-muted-foreground text-xs mt-1">Plus Code: 32C7+72M Kitale</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-sm">Phone</h3>
                    <a href="tel:+254725429179" className="font-body text-primary text-sm hover:underline">+254 725 429 179</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-sm">Email</h3>
                    <a href="mailto:otepic07@yahoo.com" className="font-body text-primary text-sm hover:underline">otepic07@yahoo.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-sm">WhatsApp</h3>
                    <a href="https://wa.me/254725429179" target="_blank" rel="noopener noreferrer" className="font-body text-primary text-sm hover:underline">Chat with us</a>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="aspect-[4/3] rounded-xl overflow-hidden border border-border" style={{ boxShadow: "var(--card-shadow)" }}>
                  <iframe
                    title="Upendo Farm location map"
                    src="https://www.google.com/maps?q=32C7%2B72M%20Bidii%20Farm%2C%20Kitale&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {submitted ? (
                <div className="bg-card rounded-xl p-10 border border-border text-center" style={{ boxShadow: "var(--card-shadow)" }}>
                  <span className="text-5xl block mb-4">✅</span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">Thank You!</h3>
                  <p className="font-body text-muted-foreground">We've received your message and will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-5" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
