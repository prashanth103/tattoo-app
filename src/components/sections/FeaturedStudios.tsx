import { motion } from "framer-motion";
import { studios } from "@/data/dummyData";
import SectionTitle from "@/components/common/SectionTitle";

export default function FeaturedStudios() {
  return (
    <section className="section-padding py-24 md:py-32 bg-primary text-background">
      <div className="container-width">
        <div className="flex flex-col gap-4 mb-14">
          <span className="eyebrow text-white/40">06 — Featured Studios</span>
          <h2 className="section-title text-background">Where the work happens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-6">
          {studios.map((studio, i) => (
            <motion.div
              key={studio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-card"
            >
              <div className="aspect-[3/4] overflow-hidden bg-white/5">
                <img
                  src={studio.image}
                  alt={studio.name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <h3 className="font-display text-xl text-white">{studio.name}</h3>
                <p className="text-white/60 text-xs font-body mt-1">
                  {studio.city}, {studio.country}
                </p>
                <p className="text-white/40 text-xs font-body mt-1">
                  {studio.artistCount} resident artists
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
