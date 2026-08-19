import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Button from "@/components/common/Button";

export default function HeroBanner() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-background pt-32">
      {/* Signature element: a single continuous ink line that draws itself in on load,
          echoing a single-needle tattoo stroke. */}
      <motion.svg
        viewBox="0 0 1440 700"
        fill="none"
        className="absolute inset-0 w-full h-full opacity-[0.9] pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.path
          d="M -50 520 C 180 420, 260 620, 430 480 S 700 260, 860 420 S 1120 660, 1300 380 S 1500 200, 1560 340"
          stroke="#111111"
          strokeWidth="1"
          strokeOpacity="0.12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </motion.svg>

      <div className="container-width section-padding relative w-full pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="eyebrow mb-6 inline-block"
            >
              TATTOO STUDIO · MADHAPUR, HYDERABAD
            </motion.span>

            <h1 className="page-title">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="block"
              >
                Your idea,
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="block italic text-text-secondary"
              >
                made permanent.
              </motion.span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="lg:col-span-4 flex flex-col gap-6 lg:pb-3"
          >
            <p className="subtitle">
              Custom tattoos designed around your ideas, memories and references — created with
              attention to detail and made personal to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">
                BOOK A TATTOO
              </Button>
              <Button to="/gallery" variant="secondary">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="hidden md:flex items-center gap-3 mt-20 text-text-muted"
        >
          <ArrowDown size={14} strokeWidth={1.5} className="animate-bounce" />
          <span className="text-[11px] tracking-[0.24em] uppercase font-body">
            Scroll to explore
          </span>
        </motion.div>
      </div>
    </section>
  );
}
