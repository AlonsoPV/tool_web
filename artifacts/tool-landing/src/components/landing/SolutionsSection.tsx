import { ArrowUpRight, Bot, Gauge, Route, ShoppingBag } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";
import { DEMO_URL } from "@/lib/landing-theme";

const solutions = [
  {
    icon: Route,
    kicker: "Para elegir qué mover primero",
    title: "Estrategia y diagnóstico",
    copy: "Alineamos dónde jugar y cómo ganar con las capacidades que la operación necesita desarrollar.",
    items: ["Playing to Win", "Brechas", "Quick wins", "Roadmap"],
    cta: "Alinear estrategia",
  },
  {
    icon: Gauge,
    kicker: "Para simplificar y operar con claridad",
    title: "Sistema operativo interno",
    copy: "Optimizamos procesos, decisiones, tableros y rutinas para convertir acuerdos en avance.",
    items: ["Procesos", "Responsables", "KPIs", "Reportes"],
    cta: "Ordenar operación",
  },
  {
    icon: ShoppingBag,
    kicker: "Para recuperar seguimiento comercial",
    title: "Sistema comercial digital",
    copy: "Conectamos captación, pipeline, WhatsApp, CRM y visibilidad en un flujo simple.",
    items: ["Landing page", "CRM simple", "Automatización", "Dashboard"],
    cta: "Ordenar ventas",
  },
  {
    icon: Bot,
    kicker: "Para adoptar tecnología de verdad",
    title: "IA y capacidades digitales",
    copy: "Llevamos herramientas, automatización e IA al trabajo diario con adopción guiada.",
    items: ["Talleres", "Playbooks", "Agentes", "Adopción"],
    cta: "Capacitar equipo",
  },
];

export default function SolutionsSection() {
  return (
    <SectionShell id="soluciones" className="solutions-section">
      <div className="tool-section-heading tool-section-heading-left">
        <span className="tool-eyebrow">Puntos de entrada</span>
        <h2>Puedes entrar por una necesidad concreta<span className="tool-heading-rest">sin perder la visión completa.</span></h2>
        <p>Cada solución resuelve una fricción inmediata y deja capacidades que fortalecen el sistema de ejecución.</p>
      </div>
      <div className="solutions-grid">
        {solutions.map(({ icon: Icon, kicker, title, copy, items, cta }, index) => (
          <article className="solution-card" key={title}>
            <div className="solution-top">
              <span className="solution-icon"><Icon size={20} /></span>
              <span className="solution-index">0{index + 1}</span>
            </div>
            <span className="solution-kicker">{kicker}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              {cta} <ArrowUpRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
