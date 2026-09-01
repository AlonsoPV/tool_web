import { Link } from "wouter";
import { ArrowRight, BarChart3, Bot, Check, CircleAlert, Compass, Flag, Gauge, Layers3, MonitorCog, Network, Route, Target, TrendingUp, Users, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCTA from "@/components/FinalCTA";
import SectionShell from "@/components/landing/SectionShell";
import { DEMO_URL } from "@/lib/landing-theme";
import "@/styles/tool-redesign.css";
import "@/styles/what-we-do.css";

const capabilities = [
  {
    className: "wwd-module-strategy",
    icon: Compass,
    number: "01",
    title: "Estrategia y foco",
    copy: "Convertimos ambición en elecciones: dónde jugar, cómo ganar y qué capacidades priorizar.",
    items: ["Playing to Win", "Pilares", "North Star", "OKRs"],
  },
  {
    className: "wwd-module-operations",
    icon: Gauge,
    number: "02",
    title: "Optimización operativa",
    copy: "Simplificamos el trabajo para reducir fricción, retrabajo y dependencia de personas clave.",
    items: ["Procesos", "Roles", "Decisiones", "Cadencias"],
  },
  {
    className: "wwd-module-tech",
    icon: MonitorCog,
    number: "03",
    title: "Tecnología y automatización",
    copy: "Diseñamos herramientas alrededor del proceso, no procesos alrededor de una herramienta.",
    items: ["CRM", "Automatización", "Integraciones", "IA práctica"],
  },
  {
    className: "wwd-module-data",
    icon: BarChart3,
    number: "04",
    title: "Datos para decidir",
    copy: "Hacemos visible el avance con indicadores que conducen a decisiones y acciones.",
    items: ["KPIs", "Dashboards", "Reportes", "Ritmo de revisión"],
  },
  {
    className: "wwd-module-adoption",
    icon: Users,
    number: "05",
    title: "Capacitación y adopción",
    copy: "Acompañamos al equipo hasta que la nueva forma de trabajar deja de sentirse nueva.",
    items: ["Talleres", "Playbooks", "Acompañamiento", "Mejora continua"],
  },
];

const solutions = [
  { icon: Route, title: "Estrategia y diagnóstico", copy: "Para alinear decisiones y saber qué mover primero.", detail: "Cascada de elecciones, pilares estratégicos, North Star, objetivos y roadmap 30/60/90." },
  { icon: Workflow, title: "Sistema operativo interno", copy: "Para equipos que necesitan claridad y menos fricción.", detail: "Procesos, responsables, reuniones, KPIs y tableros de seguimiento." },
  { icon: Layers3, title: "Sistema comercial digital", copy: "Para recuperar seguimiento y visibilidad comercial.", detail: "Propuesta de valor, pipeline, CRM, WhatsApp y automatizaciones." },
  { icon: Bot, title: "IA y capacidades digitales", copy: "Para llevar tecnología útil al trabajo cotidiano.", detail: "Talleres, prompts, agentes, automatizaciones y playbooks de adopción." },
];

const process = [
  { number: "01", title: "Diagnóstico", copy: "Entendemos estrategia, operación, fricciones y punto de partida." },
  { number: "02", title: "Diseño", copy: "Definimos el sistema objetivo, las prioridades y el roadmap viable." },
  { number: "03", title: "Implementación", copy: "Construimos con el equipo, probamos y ajustamos en la operación real." },
  { number: "04", title: "Optimización", copy: "Medimos adopción y resultados para sostener la mejora continua." },
];

const strategicObjectivePath = [
  {
    number: "01",
    icon: Flag,
    title: "Pilares estratégicos",
    copy: "Definen los temas que orientan decisiones y prioridades.",
    label: "Dirección",
  },
  {
    number: "02",
    icon: Target,
    title: "Estrella Polar",
    copy: "Concentra a la empresa en el valor que debe hacer crecer.",
    label: "Foco común",
  },
  {
    number: "03",
    icon: Network,
    title: "Objetivos y OKRs",
    copy: "Traduce la dirección en resultados claros para cada equipo.",
    label: "Alineación",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Sistema de medición",
    copy: "Conecta métricas, responsables y revisiones para corregir a tiempo.",
    label: "Progreso visible",
  },
];

const eosComponents = [
  { icon: Compass, title: "Visión" },
  { icon: Users, title: "Personas" },
  { icon: BarChart3, title: "Datos" },
  { icon: CircleAlert, title: "Problemas" },
  { icon: Workflow, title: "Procesos" },
  { icon: Gauge, title: "Tracción" },
];

export default function WhatWeDo() {
  return (
    <div className="tool-site wwd-page">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <section className="wwd-hero">
          <div className="wwd-hero-glow" aria-hidden="true" />
          <div className="wwd-hero-inner">
            <span className="tool-eyebrow">Qué hacemos</span>
            <h1>Diseñamos la empresa capaz de <span>ejecutar su estrategia.</span></h1>
            <p>Partimos de las elecciones estratégicas y construimos las capacidades, procesos y tecnología que permiten sostenerlas.</p>
            <div className="tool-actions">
              <a className="tool-btn tool-btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">Agendar diagnóstico <ArrowRight size={17} /></a>
              <Link className="tool-hero-text-link" href="/#playing-to-win">Conocer el enfoque <ArrowRight size={15} /></Link>
            </div>
          </div>
          <div className="wwd-hero-system" aria-label="Estrategia conectada con capacidades y ejecución">
            <div><span>01</span><strong>Elecciones</strong><small>Dónde jugar · cómo ganar</small></div>
            <i aria-hidden="true" />
            <div><span>02</span><strong>Capacidades</strong><small>Procesos · equipo · tecnología</small></div>
            <i aria-hidden="true" />
            <div><span>03</span><strong>Ejecución</strong><small>Indicadores · aprendizaje · mejora</small></div>
          </div>
        </section>

        <SectionShell id="capacidades" className="wwd-capabilities-section">
          <div className="wwd-section-intro">
            <div><span className="tool-eyebrow">Capacidades conectadas</span><h2>Conectamos lo que la estrategia necesita para avanzar.</h2></div>
            <p>Estrategia, operación, tecnología y adopción trabajando como un solo sistema.</p>
          </div>
          <div className="wwd-modules">
            {capabilities.map(({ className, icon: Icon, number, title, copy, items }) => (
              <article className={`wwd-module ${className}`} key={title}>
                <div className="wwd-module-top"><span><Icon size={19} /></span><small>{number}</small></div>
                <h3>{title}</h3><p>{copy}</p>
                <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="pilares-y-objetivos" className="wwd-objectives-section">
          <div className="wwd-objectives-intro">
            <div>
              <span className="tool-eyebrow">Dirección y objetivos</span>
              <h2>Primero, una dirección común.</h2>
            </div>
            <div>
              <p>Definimos pilares y una Estrella Polar antes de convertirlos en objetivos, OKRs y métricas.</p>
              <strong>Así, cada equipo sabe qué priorizar y cómo medir avance.</strong>
            </div>
          </div>

          <div className="wwd-objective-path">
            {strategicObjectivePath.map(({ number, icon: Icon, title, copy, label }) => (
              <article key={title}>
                <div className="wwd-objective-card-top"><span><Icon size={18} /></span><small>{number}</small></div>
                <div><span className="wwd-objective-label">{label}</span><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>

        </SectionShell>

        <section className="wwd-logic-section">
          <div className="wwd-logic-inner">
            <span className="tool-eyebrow tool-eyebrow-dark">Nuestra lógica</span>
            <h2>Elegimos. Optimizamos. Habilitamos. Acompañamos la adopción.</h2>
            <p>Un ritmo claro para convertir decisiones en una forma sostenible de operar.</p>
            <div className="wwd-logic-flow">
              {["Estrategia", "Optimización", "Tecnología", "Adopción"].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}
            </div>

            <div className="wwd-eos-intent" id="disciplina-operativa">
              <div className="wwd-eos-copy">
                <span className="wwd-eos-label">Intención EOS®</span>
                <h3>La tracción se construye con disciplina.</h3>
                <p>EOS pone el foco en seis frentes que deben funcionar juntos.</p>
                <strong>En TOOL los adaptamos a la realidad y madurez de cada empresa.</strong>
              </div>
              <div className="wwd-eos-components">
                {eosComponents.map(({ icon: Icon, title }) => (
                  <article key={title}><span><Icon size={16} /></span><h4>{title}</h4></article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <SectionShell id="soluciones" className="wwd-solutions-section">
          <div className="tool-section-heading">
            <span className="tool-eyebrow">Puntos de entrada</span>
            <h2>Proyectos concretos. Una misma visión de sistema.</h2>
            <p>Podemos comenzar por la necesidad más urgente y construir desde ahí.</p>
          </div>
          <div className="wwd-solutions-grid">
            {solutions.map(({ icon: Icon, title, copy, detail }, index) => (
              <article key={title}>
                <div><span><Icon size={19} /></span><small>0{index + 1}</small></div>
                <h3>{title}</h3><p>{copy}</p><div className="wwd-solution-detail">{detail}</div>
                <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">Explorar solución <ArrowRight size={14} /></a>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="proceso" className="wwd-process-section">
          <div className="wwd-section-intro">
            <div><span className="tool-eyebrow">Proceso consultivo</span><h2>Del diagnóstico a una operación que mejora continuamente.</h2></div>
            <p>No dejamos una recomendación en la mesa. Diseñamos, implementamos y ajustamos con el equipo.</p>
          </div>
          <div className="wwd-process">
            {process.map(({ number, title, copy }, index) => <article key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>{index < process.length - 1 && <ArrowRight size={17} />}</article>)}
          </div>
          <div className="wwd-deliverables">
            <div><span className="tool-eyebrow">Lo que queda instalado</span><h3>Claridad para decidir y estructura para ejecutar.</h3></div>
            <div>{["Elecciones estratégicas explícitas", "Procesos y responsabilidades claras", "Herramientas configuradas", "KPIs y cadencias de seguimiento", "Equipo capacitado"].map((item) => <span key={item}><Check size={14} />{item}</span>)}</div>
          </div>
        </SectionShell>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
