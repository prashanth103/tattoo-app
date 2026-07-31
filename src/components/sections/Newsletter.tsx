import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/common/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-border rounded-xl px-8 py-16 md:px-20 md:py-24 flex flex-col items-center text-center gap-8"
        >
          <span className="eyebrow">Stay in the loop</span>
          <h2 className="section-title max-w-2xl">
            New artists, new work, no noise.
          </h2>
          <p className="subtitle mx-auto">
            One considered email a month — new studio partners, artist
            spotlights, and the occasional open booking window.
          </p>

          {submitted ? (
            <p className="font-body text-sm text-text-primary pt-2">
              You're on the list — thank you.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-border rounded-button px-5 py-4 text-sm font-body text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <Button type="submit" variant="primary">Subscribe</Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
