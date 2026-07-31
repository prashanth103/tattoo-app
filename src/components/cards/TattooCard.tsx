import { motion } from "framer-motion";
import type { Tattoo } from "@/types";

interface TattooCardProps {
  tattoo: Tattoo;
  artistName?: string;
  index?: number;
}

const aspectClass = {
  portrait: "aspect-[4/5]",
  square: "aspect-square",
  landscape: "aspect-[5/4]",
};

export default function TattooCard({ tattoo, artistName, index = 0 }: TattooCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-card bg-card"
    >
      <div className={`${aspectClass[tattoo.aspect]} overflow-hidden`}>
        <img
          src={tattoo.image}
          alt={tattoo.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
        <p className="text-white font-display text-lg leading-tight">{tattoo.title}</p>
        <p className="text-white/70 text-xs font-body mt-1 tracking-wide uppercase">
          {tattoo.category}{artistName ? ` · ${artistName}` : ""}
        </p>
      </div>
    </motion.div>
  );
}
