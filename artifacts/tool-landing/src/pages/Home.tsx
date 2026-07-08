import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PainSection from "@/components/PainSection";
import ValueProposition from "@/components/ValueProposition";
import Methodology from "@/components/Methodology";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhoIsFor from "@/components/WhoIsFor";
import Symptoms from "@/components/Symptoms";
import Founders from "@/components/Founders";
import UseCases from "@/components/UseCases";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: "Manrope, Inter, sans-serif" }}>
      <Navbar />
      <main>
        <Hero />
        <PainSection />
        <ValueProposition />
        <Methodology />
        <Services />
        <Process />
        <WhoIsFor />
        <Symptoms />
        <Founders />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
