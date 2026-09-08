import { ArrowRight, BarChart3, Compass, MonitorCog, RefreshCw, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import PageMeta from "@/components/PageMeta";
import SectionShell from "@/components/landing/SectionShell";
import SuccessStories from "@/components/landing/SuccessStories";
import { DEMO_URL } from "@/lib/landing-theme";
import "@/styles/tool-redesign.css";
import "@/styles/what-we-do.css";

const pillars = [
  { className: "wwd-module-strategy", icon: Compass, number: "01", title: "Estrategia", copy: "Elegimos qué importa y traducimos esa dirección en prioridades, objetivos e indicadores.", outputs: ["Pilares", "North Star", "OKRs"] },
  { className: "wwd-module-operations", icon: RefreshCw, number: "02", title: "Cambio", copy: "Rediseñamos procesos, roles y coordinación para que la empresa opere de otra manera.", outputs: ["Procesos", "Roles", "Gobernanza"] },
  { className: "wwd-module-adoption", icon: Users, number: "03", title: "Cultura y adopción", copy: "Activamos liderazgo, aprendizaje y participación para convertir el cambio en hábito.", outputs: ["Liderazgo", "Hábitos", "Ludificación"] },
  { className: "wwd-module-tech", icon: MonitorCog, number: "04", title: "Tecnología", copy: "Conectamos automatización, datos e IA para escalar lo que ya funciona.", outputs: ["Automatización", "Datos", "IA"] },
];

const process = [
  { number: "01", title: "Diagnóstico", copy: "Entendemos el contexto, las restricciones y la prioridad real." },
  { number: "02", title: "Diseño", copy: "Definimos el cambio y las capacidades que requiere." },
  { number: "03", title: "Implementación", copy: "Construimos con el equipo y activamos procesos, gobernanza y tecnología." },
  { number: "04", title: "Adopción", copy: "Reforzamos liderazgo, hábitos y participación; usamos ludificación cuando aporta valor." },
  { number: "05", title: "Medición y mejora", copy: "Observamos resultados, aprendemos y ajustamos." },
];

export default function WhatWeDo() {
  return (
    <div className="tool-site wwd-page">
      <PageMeta title="Qué hacemos | TOOL" description="Conectamos estrategia empresarial, cambio, cultura, adopción y tecnología para construir organizaciones capaces de crecer con claridad." />
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <section className="wwd-hero">
          <div className="wwd-hero-glow" aria-hidden="true" />
          <div className="wwd-hero-inner">
            <span className="tool-eyebrow">Qué transformamos</span>
            <h1>Diseñamos la empresa capaz de <span>ejecutar su estrategia.</span></h1>
            <p>Conectamos estrategia, cambio, cultura y tecnología para construir una operación que pueda crecer sin perder claridad.</p>
            <div className="tool-actions">
              <a className="tool-btn tool-btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Agendar diagnóstico <ArrowRight size={17} /></a>
              <a className="tool-hero-text-link" href="#proceso">Ver cómo intervenimos <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="wwd-hero-system" aria-label="Estrategia, cambio, cultura y tecnología">
            {pillars.map(({ icon: Icon, title }, index) => (
              <div key={title}><span><Icon size={17} /> 0{index + 1}</span><strong>{title}</strong></div>
            ))}
          </div>
        </section>

        <SectionShell id="capacidades" className="wwd-capabilities-section">
          <div className="wwd-section-intro">
            <div><span className="tool-eyebrow">Cuatro capacidades</span><h2>Cuatro capacidades. Un mismo sistema.</h2></div>
            <p>Cada una resuelve una parte distinta del reto. Juntas permiten que el cambio llegue a la operación y permanezca.</p>
          </div>
          <div className="wwd-modules">
            {pillars.map(({ className, icon: Icon, number, title, copy, outputs }) => (
              <article id={title === "Estrategia" ? "estrategia" : title === "Cambio" ? "cambio" : title === "Cultura y adopción" ? "cultura" : "tecnologia"} className={`wwd-module ${className}`} key={title}>
                <div className="wwd-module-top"><span><Icon size={19} /></span><small>{number}</small></div>
                <h3>{title}</h3><p>{copy}</p>
                <div>{outputs.map((output) => <span key={output}>{output}</span>)}</div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="proceso" className="wwd-process-section">
          <div className="wwd-section-intro">
            <div><span className="tool-eyebrow">Cómo intervenimos</span><h2>Del diagnóstico a la mejora continua.</h2></div>
            <p>Una sola secuencia para diseñar, activar y sostener el cambio con el equipo.</p>
          </div>
          <div className="wwd-process">
            {process.map(({ number, title, copy }, index) => (
              <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>{index < process.length - 1 && <ArrowRight size={17} />}</article>
            ))}
          </div>
          <div className="wwd-method-note">
            <BarChart3 size={19} />
            <p><strong>Implementar no es terminar.</strong> El cambio tiene que adoptarse. Adaptamos principios de EOS y otros marcos a la realidad y madurez de cada empresa.</p>
          </div>
        </SectionShell>

        <SuccessStories />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
