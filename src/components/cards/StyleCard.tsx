import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Style } from "@/types";

interface StyleCardProps {
  category: Style;
  index?: number;
}

export default function StyleCard({ category, index = 0 }: StyleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/gallery?category=${category.slug}`}
        className="group block relative overflow-hidden rounded-card"
      >
        <div className="aspect-[3/4] overflow-hidden bg-card">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-display text-2xl text-white">{category.name}</h3>
              <p className="text-white/70 text-xs font-body mt-1">{category.count} Designs</p>
            </div>
            <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-500">
              <ArrowUpRight size={16} strokeWidth={1.5} className="text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
