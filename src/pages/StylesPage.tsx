import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import StyleCard from "@/components/cards/StyleCard";
import { styles, howItWorks } from "@/data/dummyData";

export default function StylesPage() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="section-padding pt-36 pb-16">
          <div className="container-width">
            <span className="eyebrow mb-6 inline-block">Styles</span>
            <h1 className="page-title max-w-3xl">Six styles. Endless possibilities.</h1>
            <p className="subtitle mt-6">
              Explore each tattoo style and browse related work from our artists.
            </p>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {styles.map((category, i) => (
              <StyleCard key={category.id} category={category} index={i} />
            ))}
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32 bg-surface pt-24">
          <div className="container-width">
            <h2 className="section-title mb-10">How it works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howItWorks.map((style) => (
                <div key={style.id} className="card-base overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={style.image} alt={style.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl">{style.name}</h3>
                    <p className="text-sm text-text-secondary font-body mt-2 font-light leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
