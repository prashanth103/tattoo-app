import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import HeroBanner from "@/components/sections/HeroBanner";
import OurArtists from "@/components/sections/OurArtists";
import FeaturedWork from "@/components/sections/FeaturedWork";
import TattooStyles from "@/components/sections/TattooStyles";
import PopularStyles from "@/components/sections/PopularStyles";
import GallerySection from "@/components/sections/GallerySection";
import FeaturedStudios from "@/components/sections/FeaturedStudios";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <MainLayout>
      <PageTransition>
        <HeroBanner />
        <OurArtists />
        <FeaturedWork />
        <TattooStyles />
        <PopularStyles />
        <GallerySection />
        <FeaturedStudios />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </PageTransition>
    </MainLayout>
  );
}
