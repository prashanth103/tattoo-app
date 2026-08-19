import { artists } from "@/data/dummyData";
import { tattooImages } from "@/data/tattooImages";
import TattooCard from "@/components/cards/TattooCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { tattooConfig } from "@/data/tattooConfig";
import type { Tattoo } from "@/types";

export default function GallerySection() {

  const pieces = tattooConfig.galleryFeatured
    .map((key) => tattooImages.find((tattoo) => tattoo.key === key))
    .filter((tattoo): tattoo is Tattoo => Boolean(tattoo));

  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionTitle
            index="05"
            eyebrow="The Gallery"
            title="A closer look at the work"
            subtitle="Explore tattoos created at Samava, from custom designs and personal ideas to reference-inspired pieces."
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
