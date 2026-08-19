import { artists } from "@/data/dummyData";
import { tattooImages } from "@/data/tattooImages";
import TattooCard from "@/components/cards/TattooCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { tattooConfig } from "@/data/tattooConfig";
import type { Tattoo } from "@/types";

export default function FeaturedWork() {

  const trending = tattooConfig.featured
    .map((key) => tattooImages.find((tattoo) => tattoo.key === key))
    .filter((tattoo): tattoo is Tattoo => Boolean(tattoo));

  return (
    <section className="section-padding py-24 md:py-32 bg-surface">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionTitle
            index="02"
            eyebrow="FEATURED WORK"
            title="Tattoos from Samava"
            subtitle="A selection of custom and client-requested tattoos created at Samava Tattoo Studio. (Use 3 images here. Eventually these should be three of your strongest real tattoo photos.)"
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
