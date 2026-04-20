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
                  alt="Philip Munyasia, Director of Jume College and OTEPIC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/20" />
              </div>
              <div className="md:col-span-3 p-8 md:p-10">
                <p className="text-xs font-body tracking-[0.15em] uppercase text-secondary font-semibold mb-2">Meet the Director</p>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-3">Philip Munyasia</h2>
                <p className="text-sm font-body text-primary font-semibold mb-5">Founder & Director — Jume College · OTEPIC Kenya</p>
                <div className="space-y-4 font-body text-muted-foreground leading-relaxed text-[15px]">
                  <p>
                    Born and raised in the Kipsongo slums of Kitale, Philip grew up surrounded by hunger,
                    poverty and post-election violence. As a young boy he scavenged in dumpsites to help feed
                    his family — an experience that planted in him a fierce determination to change the story
                    for his community.
                  </p>
                  <p>
                    In 2007, in the aftermath of Kenya's worst ethnic clashes, Philip founded
                    <strong className="text-foreground"> OTEPIC (Organic Technology Extension and Promotion of Initiative Centre)</strong>
                    {" "}to bring people of different tribes together through farming, peace-building and
                    sustainable living. What began as a small youth garden has grown into a movement
                    reaching thousands of farmers, women, youth and children across Trans Nzoia County.
                  </p>
                  <p>
                    Today Philip leads <strong className="text-foreground">Jume College</strong> — OTEPIC's
                    permaculture training campus — and the <strong className="text-foreground">Tabasamu Children's
                    Home</strong>, where orphaned and vulnerable children grow up with dignity, education and
                    a thriving food garden of their own. His vision is simple and radical: that every family
                    in Kenya should have access to clean water, healthy soil, nutritious food and the skills
                    to live in harmony with the land.
                  </p>
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
                    <p className="font-body text-muted-foreground text-sm">Bidii Farm, Trans Nzoia County, Kenya</p>
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
                    title="Bidii Farm location map"
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
