import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import Button from "@/components/common/Button";
import TattooCard from "@/components/cards/TattooCard";
import { artists, tattoos } from "@/data/dummyData";

export default function ArtistDetails() {
  const { slug } = useParams();
  const artist = artists.find((a) => a.slug === slug);

  if (!artist) return <Navigate to="/404" replace />;

  const portfolio = tattoos.filter((t) => artist.portfolio.includes(t.id));
  const others = artists.filter((a) => a.id !== artist.id).slice(0, 4);

  return (
    <MainLayout>
      <PageTransition>
        <section className="relative pt-32 pb-16 section-padding">
          <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 aspect-[4/5] overflow-hidden rounded-card bg-card"
            >
              <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <BadgeCheck size={14} strokeWidth={1.5} className="text-text-primary" />
                <span className="eyebrow">{artist.studio}</span>
              </div>
              <h1 className="page-title !text-[clamp(2.5rem,5vw,4.5rem)]">{artist.name}</h1>
              <p className="subtitle max-w-2xl">{artist.bio}</p>

              <div className="flex flex-wrap gap-8 pt-2">
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">Speciality</p>
                  <p className="font-display text-lg">{artist.speciality}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">Experience</p>
                  <p className="font-display text-lg">{artist.experience}</p>
                </div>
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">Location</p>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={15} strokeWidth={1.5} />
                    <span className="font-display text-lg">{artist.location}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-text-muted font-body uppercase tracking-widest mb-1">Availability</p>
                  <p className="font-display text-lg">{artist.availability}</p>
                </div>
              </div>

              <div className="pt-4">
                <Button href="/contact" variant="primary">BOOK WITH {artist.name}</Button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width">
            <div className="flex items-center justify-between mb-10 pt-10 border-t border-border">
              <h2 className="section-title">Portfolio</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {portfolio.map((tattoo, i) => (
                <TattooCard key={tattoo.id} tattoo={tattoo} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32 bg-surface pt-24">
          <div className="container-width">
            <h2 className="section-title mb-10">More artists</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {others.map((a, i) => (
                <Link key={a.id} to={`/artists/${a.slug}`} className="group block">
                  <div className="aspect-[4/5] overflow-hidden rounded-card bg-card">
                    <img
                      src={a.avatar}
                      alt={a.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-display text-lg mt-4">{a.name}</p>
                  <p className="text-xs text-text-secondary font-body">{a.speciality}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
