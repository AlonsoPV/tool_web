import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import MissionSection from "@/components/landing/MissionSection";
import SolutionsSection from "@/components/landing/SolutionsSection";
import SuccessStories from "@/components/landing/SuccessStories";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import PageMeta from "@/components/PageMeta";
import "@/styles/tool-redesign.css";

export default function Home() {
  return (
    <div className="tool-site">
      <PageMeta title="TOOL | Estrategia, cambio, cultura y tecnología" description="Convertimos estrategia en una forma de trabajar que el equipo puede sostener, alineando cambio, cultura, procesos y tecnología." />
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProblemSection />
        <MissionSection />
        <SolutionsSection />
        <SuccessStories mode="preview" />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
