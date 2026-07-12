import DroneCursor from "./components/DroneCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import MarqueeSection from "./components/MarqueeSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import WhySection from "./components/WhySection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030810] text-white overflow-x-hidden">
      <DroneCursor />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ProblemSection />
      <ServicesSection />
      <PortfolioSection />
      <WhySection />
      <CtaSection />
      <Footer />
    </div>
  );
}
