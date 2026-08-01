import { motion } from "framer-motion";
import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import Button from "@/components/common/Button";
import SEO from "@/components/common/SEO";

const values = [
  {
    title: "Personal Design",
    body: "Every tattoo starts with your story. We take time to understand your ideas before putting ink to skin.",
  },
  {
    title: "Precision Craftsmanship",
    body: "Every design is created with careful attention to placement, detail, balance, and longevity.",
  },
  {
    title: "A Comfortable Experience",
    body: "From consultation to aftercare, we focus on making every client feel confident and supported.",
  },
];

export default function About() {
  return (
    <MainLayout>
      <SEO
        title="About Us"
        description="Learn more about Samava Tattoo Studio and our commitment to exceptional tattoo artistry."
        url="https://www.samavatattoostudio.com/about"
      />

      <PageTransition>
        <section className="section-padding pt-36 pb-24">
          <div className="container-width grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <span className="eyebrow mb-6 inline-block">Our Story</span>
              <h1 className="page-title">
                Where every tattoo
                <span className="italic block text-text-secondary">begins with a conversation.</span>
              </h1>
            </div>
            <div className="lg:col-span-5 flex items-end">
              <p className="subtitle">
                Samava Tattoo Studio was built around one belief: every tattoo should be personal, thoughtfully designed, and made to last. We work closely with every client to transform ideas into meaningful artwork that feels uniquely theirs.
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
              Ready for your next tattoo?
            </h2>
            <Button to="/contact" variant="secondary" className="!border-white !text-background hover:!bg-white hover:!text-primary">
              Book a Consultation
            </Button>
          </div>
        </section>
      </PageTransition>
    </MainLayout>
  );
}
