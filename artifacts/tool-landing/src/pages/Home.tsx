import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import TensionSection from "@/components/landing/TensionSection";
import TransformationStory from "@/components/landing/TransformationStory";
import PlayingToWin from "@/components/landing/PlayingToWin";
import StrategyToOKRs from "@/components/landing/StrategyToOKRs";
import CommercialSystem from "@/components/landing/CommercialSystem";
import CultureChange from "@/components/landing/CultureChange";
import PlatformModules from "@/components/landing/PlatformModules";
import ImpactSection from "@/components/landing/ImpactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <TensionSection />
        <TransformationStory />
        <PlayingToWin />
        <StrategyToOKRs />
        <CommercialSystem />
        <CultureChange />
        <PlatformModules />
        <ImpactSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
