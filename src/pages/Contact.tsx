import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                    <p className="font-body text-muted-foreground text-sm">Kitale, Trans-Nzoia County, Kenya</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-sm">Email</h3>
                    <a href="mailto:info@otepic.org" className="font-body text-primary text-sm hover:underline">info@otepic.org</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h3 className="font-body font-semibold text-foreground text-sm">Website</h3>
                    <p className="font-body text-muted-foreground text-sm">www.otepic.org</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="aspect-[4/3] bg-muted rounded-xl flex items-center justify-center border border-border">
                  <span className="text-muted-foreground font-body text-sm">Map Placeholder</span>
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
