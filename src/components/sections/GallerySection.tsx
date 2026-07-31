import { tattoos, artists } from "@/data/dummyData";
import TattooCard from "@/components/cards/TattooCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export default function GallerySection() {
  const pieces = tattoos.slice(6, 14);

  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionTitle
            index="05"
            eyebrow="The Gallery"
            title="A closer look at the work"
            subtitle="Fresh and healed pieces from across our artist network, updated weekly."
          />
          <Button to="/gallery" variant="ghost" className="shrink-0">
            Open Full Gallery
          </Button>
        </div>

        <div className="columns-2 md:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {pieces.map((tattoo, i) => (
            <div key={tattoo.id} className="break-inside-avoid">
              <TattooCard
                tattoo={tattoo}
                artistName={artists.find((a) => a.id === tattoo.artistId)?.name}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
