import { useMemo, useState } from "react";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import SearchBar from "@/components/common/SearchBar";
import ArtistCard from "@/components/cards/ArtistCard";
import { artists } from "@/data/dummyData";

const specialities = ["All", ...Array.from(new Set(artists.map((a) => a.speciality)))];

export default function Artists() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return artists.filter((a) => {
      const matchesQuery =
        a.name.toLowerCase().includes(query.toLowerCase()) ||
        a.location.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === "All" || a.speciality === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <MainLayout>
      <PageTransition>
        <section className="section-padding pt-36 pb-16">
          <div className="container-width">
            <span className="eyebrow mb-6 inline-block">Our Network</span>
            <h1 className="page-title max-w-3xl">Every artist, hand-vetted.</h1>
            <p className="subtitle mt-6">
              Filter by speciality or search by name and city to find someone
              whose work matches what you're picturing.
            </p>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-border">
              <SearchBar value={query} onChange={setQuery} placeholder="Search by name or city" className="max-w-sm w-full" />
              <div className="flex flex-wrap gap-2">
                {specialities.map((s) => (
                  <button
                    key={s}
                    onClick={() => setFilter(s)}
                    className={`px-4 py-2 text-xs tracking-[0.08em] uppercase font-body rounded-full border transition-colors duration-300 ${
                      filter === s
                        ? "bg-primary text-background border-primary"
                        : "bg-transparent text-text-secondary border-border hover:border-primary"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="text-text-muted font-body text-sm py-20 text-center">
                No artists match your search — try another name or filter.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-12">
                {filtered.map((artist, i) => (
                  <ArtistCard key={artist.id} artist={artist} index={i} />
                ))}
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
