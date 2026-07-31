import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CustomTattoos() {
  const whatsappMessage = encodeURIComponent("Hi Samava Tattoo Studio, I'd like to discuss a tattoo idea.");
  const whatsappLink = `https://wa.me/919398667751?text=${whatsappMessage}`;

  return (
    <section className="section-padding py-24 md:py-32 bg-primary text-background">
      <div className="container-width">
        <span className="eyebrow text-white/40 mb-8 md:mb-12 block">06 — CUSTOM TATTOOS</span>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-32 mb-16 md:mb-24">
          <div className="md:w-1/2">
            <h2 className="section-title text-background">
              Your idea.<br />
              Made personal.
            </h2>
          </div>

          <div className="md:w-1/2 flex flex-col items-start justify-end">
            <p className="text-white/70 font-body text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl">
              Have a photo, sketch, reference, memory, or simply an idea? Bring it to us. We'll work with you to shape it into a tattoo that's personal to you.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-[13px] tracking-[0.08em] uppercase text-white border-b border-transparent hover:border-white transition-all duration-300 pb-1"
            >
              DISCUSS YOUR TATTOO <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-square md:aspect-[21/9] w-full overflow-hidden rounded-card relative group"
        >
          <img
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2000&auto=format&fit=crop"
            alt="Samava Custom Tattoos"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
