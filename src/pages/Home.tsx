import MainLayout from "@/layouts/MainLayout";
import PageTransition from "@/components/common/PageTransition";
import HeroBanner from "@/components/sections/HeroBanner";
import OurArtists from "@/components/sections/OurArtists";
import FeaturedWork from "@/components/sections/FeaturedWork";
import TattooStyles from "@/components/sections/TattooStyles";
import HowITWorks from "@/components/sections/HowITWorks";
import GallerySection from "@/components/sections/GallerySection";
import CustomTattoos from "@/components/sections/CustomTattoos";
import ClientStories from "@/components/sections/ClientStories";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <MainLayout>
      <PageTransition>
        <HeroBanner />
        <OurArtists />
        <FeaturedWork />
        <TattooStyles />
        <HowITWorks />
        <GallerySection />
        <CustomTattoos />
        <ClientStories />
        <FAQ />
        <FinalCTA />
      </PageTransition>
    </MainLayout>
  );
}
