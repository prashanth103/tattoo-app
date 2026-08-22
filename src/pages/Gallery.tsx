import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import TattooCard from "@/components/cards/TattooCard";
import { artists } from "@/data/dummyData";
import { tattooImages } from "@/data/tattooImages";
import SEO from "@/components/common/SEO";
import { styles } from "@/data/styles";

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeSlug = searchParams.get("category") ?? "all";
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(24);

  const activeCategory = styles.find((c) => c.slug === activeSlug)?.name;

  const filtered = useMemo(() => {
    return tattooImages.filter((t) => {
      const matchesCategory = !activeCategory || t.category === activeCategory;
      const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const visibleTattoos = filtered.slice(0, visibleCount);

  const setCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams);

    if (slug === "all") {
      params.delete("category");
    } else {
      params.set("category", slug);
    }

    setVisibleCount(24);
    setSearchParams(params);
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
              Browse tattoo work from every Samava artist. Explore by style or search for a specific
              piece.
            </p>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-border">
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
              <>
                <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6 pt-12">
                  {visibleTattoos.map((tattoo, i) => (
                    <div key={tattoo.id} className="break-inside-avoid">
                      <TattooCard
                        tattoo={tattoo}
                        artistName={artists.find((a) => a.id === tattoo.artistId)?.name}
                        index={i}
                      />
                    </div>
                  ))}
                </div>

                {visibleCount < filtered.length && (
                  <div className="flex justify-center pt-12">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((count) => count + 24)}
                      className="px-6 py-3 text-xs tracking-[0.08em] uppercase font-body rounded-full border border-border text-text-secondary hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
