import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Artist } from "@/types";

interface ArtistCardProps {
  artist: Artist;
  index?: number;
}

export default function ArtistCard({ artist, index = 0 }: ArtistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link to={`/artists/${artist.slug}`} className="group block">
        <div className="relative overflow-hidden rounded-card bg-card aspect-[4/5]">
          <img
            src={artist.avatar}
            alt={artist.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            <span className="text-white text-xs tracking-[0.14em] uppercase font-body">
              View Profile
            </span>
          </div>
        </div>
        <div className="pt-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl text-text-primary">{artist.name}</h3>
            <p className="text-sm text-text-secondary font-body mt-1">{artist.experience}</p>
            <p className="text-xs text-text-muted font-body mt-1">{artist.speciality}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
