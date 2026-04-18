import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ImpactStrip from "@/components/ImpactStrip";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import CropDiversificationSection from "@/components/CropDiversificationSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ImpactStrip />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <GallerySection />
      <CropDiversificationSection />
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Index;
