import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import Button from "@/components/common/Button";

const values = [
  {
    title: "Hand-vetted, always",
    body: "Every artist on the platform is reviewed by our editorial team before their profile goes live — no self-listing, no pay-to-rank.",
  },
  {
    title: "Consultations first",
    body: "We push every booking through a real conversation before a deposit changes hands, so both sides walk in aligned.",
  },
  {
    title: "Built for longevity",
    body: "We favor artists who think in decades — placement, aging, and skin all factor into how work is presented here.",
  },
];

export default function About() {
  return (
    <MainLayout>
      <PageTransition>
        <section className="section-padding pt-36 pb-24">
          <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-6 inline-block">Our Story</span>
              <h1 className="page-title">
                A quieter way to find
                <span className="italic block text-text-secondary">your next tattoo.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="subtitle">
                Samava Tattoo Studio started as a private list shared between three
                friends chasing good artists across three continents. It's
                grown into a considered directory — still small on purpose.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width aspect-[21/9] overflow-hidden rounded-card bg-card">
            <img
              src="https://picsum.photos/seed/about-studio/1600/700?grayscale"
              alt="Inside a tattoo studio"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32">
          <div className="container-width grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <span className="font-body text-xs text-text-muted tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl">{v.title}</h3>
                <p className="text-sm text-text-secondary font-body font-light leading-relaxed">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-padding pb-24 md:pb-32 bg-primary text-background">
          <div className="container-width flex flex-col items-center text-center gap-8 py-16">
            <h2 className="section-title text-background max-w-2xl">
              Ready to find your artist?
            </h2>
            <Button to="/artists" variant="secondary" className="!border-white !text-background hover:!bg-white hover:!text-primary">
              Browse the Network
            </Button>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
