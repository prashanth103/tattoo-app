import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/data/dummyData";
import SectionTitle from "@/components/common/SectionTitle";

export default function ClientStories() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <SectionTitle
          index="07"
          eyebrow="CLIENT STORIES"
          title="What our clients say"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-14">
          {reviews.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-base p-8 flex flex-col gap-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={13}
                    strokeWidth={1.5}
                    className={s < t.rating ? "fill-primary text-primary" : "text-border"}
                  />
                ))}
              </div>
              <p className="font-display text-xl leading-snug text-text-primary italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="text-sm text-text-primary font-body">{t.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
