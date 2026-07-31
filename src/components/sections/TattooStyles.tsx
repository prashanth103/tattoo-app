import { categories } from "@/data/dummyData";
import CategoryCard from "@/components/cards/CategoryCard";
import SectionTitle from "@/components/common/SectionTitle";

export default function TattooStyles() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <SectionTitle
          index="03"
          eyebrow="TATTOO STYLES"
          title="Find a style that speaks to you"
          subtitle="Explore different tattoo styles for inspiration, or bring us your own idea and we'll work with you to create something personal."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 mt-14">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
