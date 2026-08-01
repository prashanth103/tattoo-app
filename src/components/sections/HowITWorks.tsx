import { motion } from "framer-motion";
import { howItWorks } from "@/data/dummyData";
import SectionTitle from "@/components/common/SectionTitle";

export default function HowITWorks() {
  return (
    <section className="section-padding py-24 md:py-32 bg-surface">
      <div className="container-width">
        <SectionTitle
          index="04"
          eyebrow="HOW IT WORKS"
          title="From idea to ink"
        />

        <div className="mt-14 divide-y divide-border">
          {howItWorks.map((style, i) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group grid grid-cols-1 md:grid-cols-12 items-center gap-6 py-8"
            >
              <span className="md:col-span-1 font-body text-xs text-text-muted tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="md:col-span-4 font-display text-3xl md:text-4xl text-text-primary group-hover:italic transition-all duration-300">
                {style.name}
              </h3>
              <p className="md:col-span-5 text-sm text-text-secondary font-body font-light leading-relaxed">
                {style.description}
              </p>
              <div className="md:col-span-2 h-20 w-full overflow-hidden rounded-card opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                <img src={style.image} alt={style.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
