import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import TattooCard from "@/components/cards/TattooCard";
import { tattoos, artists, styles } from "@/data/dummyData";
import SEO from "@/components/common/SEO";

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get("category") ?? "all";
  const [query, setQuery] = useState("");

  const activeCategory = styles.find((c) => c.slug === activeSlug)?.name;

  const filtered = useMemo(() => {
    return tattoos.filter((t) => {
      const matchesCategory = !activeCategory || t.category === activeCategory;
      const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const setCategory = (slug: string) => {
    if (slug === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", slug);
    }
    setSearchParams(searchParams);
  };

  return (
    <MainLayout>
      <SEO
        title="Tattoo Gallery"
        description="Browse our portfolio of custom tattoos and artwork."
        url="https://www.samavatattoostudio.com/gallery"
      />

      <PageTransition>
        <section className="section-padding pt-36 pb-16">
          <div className="container-width">
            <span className="eyebrow mb-6 inline-block">The Gallery</span>
            <h1 className="page-title max-w-3xl">Every piece, one collection.</h1>
            <p className="subtitle mt-6">
              Browse tattoo work from every Samava artist. Explore by style or search for a specific piece.
            </p>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-border">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search tattoo designs..."
                className="max-w-sm w-full bg-transparent border-b border-border pb-3 font-body text-sm placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
              />
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setCategory("all")}
                  className={`px-4 py-2 text-xs tracking-[0.08em] uppercase font-body rounded-full border transition-colors duration-300 ${activeSlug === "all"
                    ? "bg-primary text-background border-primary"
                    : "bg-transparent text-text-secondary border-border hover:border-primary"
                    }`}
                >
                  All
                </button>
                {styles.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCategory(c.slug)}
                    className={`px-4 py-2 text-xs tracking-[0.08em] uppercase font-body rounded-full border transition-colors duration-300 ${activeSlug === c.slug
                      ? "bg-primary text-background border-primary"
                      : "bg-transparent text-text-secondary border-border hover:border-primary"
                      }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="text-text-muted font-body text-sm py-20 text-center">
                Nothing matches yet — try a different category or search term.
              </p>
            ) : (
              <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6 pt-12">
                {filtered.map((tattoo, i) => (
                  <div key={tattoo.id} className="break-inside-avoid">
                    <TattooCard
                      tattoo={tattoo}
                      artistName={artists.find((a) => a.id === tattoo.artistId)?.name}
                      index={i}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
