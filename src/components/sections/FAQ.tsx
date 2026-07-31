import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/dummyData";
import SectionTitle from "@/components/common/SectionTitle";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section className="section-padding py-24 md:py-32 bg-surface">
      <div className="container-width max-w-4xl mx-auto">
        <SectionTitle index="08 —" eyebrow="GOOD to Know" title="Frequently asked" align="center" />

        <div className="mt-14 divide-y divide-border">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-2">
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xl md:text-2xl text-text-primary">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm md:text-base text-text-secondary font-body font-light leading-relaxed pb-6 max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
