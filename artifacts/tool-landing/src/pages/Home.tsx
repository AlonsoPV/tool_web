import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import MissionSection from "@/components/landing/MissionSection";
import PlayingToWin from "@/components/landing/PlayingToWin";
import MethodSection from "@/components/landing/MethodSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import SystemEcosystem from "@/components/landing/SystemEcosystem";
import WhoIsFor from "@/components/WhoIsFor";
import Founders from "@/components/Founders";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import "@/styles/tool-redesign.css";

export default function Home() {
  return (
    <div className="tool-site">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <WhoIsFor />
        <MissionSection />
        <PlayingToWin />
        <MethodSection />
        <SolutionsSection />
        <SystemEcosystem />
        <Founders />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
