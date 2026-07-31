import { categories } from "@/data/dummyData";
import CategoryCard from "@/components/cards/CategoryCard";
import SectionTitle from "@/components/common/SectionTitle";

export default function Categories() {
  return (
    <section className="section-padding py-24 md:py-32">
      <div className="container-width">
        <SectionTitle
          index="03"
          eyebrow="Browse by Category"
          title="Find your language of ink"
          subtitle="Six recurring visual traditions, each with its own discipline and history."
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
