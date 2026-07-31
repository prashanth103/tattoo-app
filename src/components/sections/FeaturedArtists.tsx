import { artists } from "@/data/dummyData";
import ArtistCard from "@/components/cards/ArtistCard";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";

export default function FeaturedArtists() {
  const featured = artists.filter((a) => a.featured);

  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <SectionTitle
            index="01"
            eyebrow="Featured Artists"
            title="Hands worth trusting"
            subtitle="A small, rotating selection of artists whose work we return to again and again."
          />
          <Button to="/artists" variant="ghost" className="shrink-0">
            View All Artists
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {featured.map((artist, i) => (
            <ArtistCard key={artist.id} artist={artist} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
