import { motion } from "framer-motion";
import { CONTACT } from "@/constants/contact";
import Button from "@/components/common/Button";

export default function FinalCTA() {
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
          <span className="eyebrow">READY WHEN YOU ARE</span>
          <h2 className="section-title max-w-2xl">Thinking about your next tattoo?</h2>
          <p className="subtitle mx-auto">
            Share your idea with us and let's discuss the design, placement and details.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button to="/contact" variant="primary">
              BOOK A TATTOO
            </Button>
            <Button href={`https://wa.me/${CONTACT.whatsappNumber}`} variant="secondary">
              WHATSAPP US
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
