import { ArrowRight, Eye, Handshake, Layers3, MoveUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Founders from "@/components/Founders";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionShell from "@/components/landing/SectionShell";
import { DEMO_URL } from "@/lib/landing-theme";
import "@/styles/tool-redesign.css";
import "@/styles/inner-pages.css";

const principles = [
  { icon: Eye, title: "Claridad antes que complejidad", copy: "Si el equipo no puede entender el sistema, difícilmente podrá sostenerlo." },
  { icon: Layers3, title: "El sistema completo", copy: "Estrategia, procesos, tecnología y personas deben diseñarse como partes conectadas." },
  { icon: Handshake, title: "Construir con el equipo", copy: "La adopción empieza cuando las personas participan y entienden el porqué del cambio." },
  { icon: MoveUpRight, title: "Avance que puede verse", copy: "Cada intervención debe traducirse en decisiones, responsables y progreso observable." },
];

export default function About() {
  return (
    <div className="tool-site inner-page about-page">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <section className="inner-hero about-hero">
          <div className="inner-hero-pattern" aria-hidden="true" />
          <div className="inner-hero-content">
            <span className="tool-eyebrow">Quiénes somos</span>
            <h1>TOOL empieza con una pregunta: <span>¿por qué crecer tiene que sentirse como perder el control?</span></h1>
            <p>Somos un equipo que conecta estrategia y ejecución para ayudar a empresas en crecimiento a operar con más claridad, autonomía y capacidad de decidir.</p>
          </div>
        </section>

        <SectionShell id="origen" className="about-origin">
          <div className="about-origin-grid">
            <div>
              <span className="tool-eyebrow">Por qué empezamos</span>
              <h2>Vimos el mismo patrón repetirse.</h2>
            </div>
            <div className="about-origin-copy">
              <p className="about-origin-lead">Empresas con clientes, talento y ambición que crecieron más rápido que su manera de trabajar.</p>
              <p>Lo que antes se resolvía con cercanía, memoria y esfuerzo individual comenzó a depender de urgencias, mensajes dispersos y decisiones concentradas en pocas personas.</p>
              <p>TOOL nace para cerrar esa distancia: la que existe entre lo que una empresa quiere lograr y lo que su operación permite ejecutar hoy.</p>
            </div>
          </div>
        </SectionShell>

        <section className="about-purpose">
          <div className="about-purpose-inner">
            <span className="tool-eyebrow tool-eyebrow-dark">Lo que buscamos</span>
            <h2>Que la estrategia deje de vivir en una presentación y empiece a cambiar el trabajo cotidiano.</h2>
            <div className="about-purpose-line">
              <span>Elegir con claridad</span><i /><span>Operar con sistema</span><i /><span>Mejorar con evidencia</span>
            </div>
          </div>
        </section>

        <SectionShell id="principios" className="about-principles">
          <div className="tool-section-heading">
            <span className="tool-eyebrow">Cómo pensamos</span>
            <h2>Cuatro principios guían cada proyecto.</h2>
            <p>No buscamos instalar más burocracia. Diseñamos la estructura mínima necesaria para que el equipo avance mejor.</p>
          </div>
          <div className="about-principles-grid">
            {principles.map(({ icon: Icon, title, copy }, index) => (
              <article key={title}><div><span>0{index + 1}</span><Icon size={19} /></div><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </SectionShell>

        <Founders />

        <section className="about-close">
          <div><span className="tool-eyebrow">La relación que queremos construir</span><h2>Un equipo cercano para decisiones que importan.</h2></div>
          <div><p>Nos involucramos desde la conversación estratégica hasta la adopción operativa. El objetivo no es que dependas de TOOL, sino que tu empresa desarrolle una forma de trabajar que pueda sostener.</p><a className="tool-btn tool-btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Conversemos <ArrowRight size={17} /></a></div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
