import { tattoos, artists } from "@/data/dummyData";
import TattooCard from "@/components/cards/TattooCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export default function TrendingTattoos() {
  const trending = tattoos.filter((t) => t.trending).slice(0, 6);

  return (
    <section className="section-padding py-24 md:py-32 bg-surface">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionTitle
            index="02"
            eyebrow="Trending Now"
            title="What's being booked"
            subtitle="The pieces collectors are saving, sharing, and asking their artists for right now."
          />
          <Button to="/gallery" variant="ghost" className="shrink-0">
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {trending.map((tattoo, i) => (
            <TattooCard
              key={tattoo.id}
              tattoo={tattoo}
              artistName={artists.find((a) => a.id === tattoo.artistId)?.name}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
