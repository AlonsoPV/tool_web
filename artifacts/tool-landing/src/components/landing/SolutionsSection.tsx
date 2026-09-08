import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const entryPoints = [
  {
    problem: "Muchas prioridades, poca dirección.",
    change: "Decidir con claridad.",
    capability: "Estrategia y alineación",
    href: "/que-hacemos#estrategia",
    description: "Convertimos prioridades dispersas en una dirección compartida, objetivos claros y métricas que ayudan a decidir.",
  },
  {
    problem: "Procesos que dependen de personas.",
    change: "Construir una operación repetible.",
    capability: "Cambio operativo",
    href: "/que-hacemos#cambio",
    description: "Rediseñamos roles, procesos y formas de coordinación para reducir dependencias y aumentar consistencia.",
  },
  {
    problem: "Cambios que pierden fuerza con el tiempo.",
    change: "Convertir el cambio en hábitos.",
    capability: "Cultura y adopción",
    href: "/que-hacemos#cultura",
    description: "Diseñamos hábitos y dinámicas de participación. Incluimos ludificación cuando ayuda a hacer visible el progreso y reforzar comportamientos.",
  },
  {
    problem: "Trabajo manual y sistemas desconectados.",
    change: "Escalar lo que funciona.",
    capability: "Tecnología, datos e IA",
    href: "/que-hacemos#tecnologia",
    description: "Conectamos herramientas, automatizamos trabajo repetitivo y hacemos que la información sirva para tomar mejores decisiones.",
  },
];

export default function SolutionsSection() {
  return (
    <SectionShell id="soluciones" className="solutions-section entry-points-section">
      <div className="tool-section-heading tool-section-heading-left">
        <span className="tool-eyebrow">Puntos de entrada</span>
        <h2>¿Dónde se está frenando tu empresa?</h2>
        <p>El problema visible rara vez está aislado. Entramos por el bloqueo más importante sin perder de vista el sistema completo.</p>
      </div>

      <div className="entry-points-list">
        {entryPoints.map(({ problem, change, capability, description, href }, index) => (
            <article className="entry-point" key={problem}>
              <a className="entry-point-link" href={href} aria-label={`${problem} ${change} Conocer ${capability}`}>
                <span className="entry-point-number">0{index + 1}</span>
                <span className="entry-point-problem">{problem}</span>
                <span className="entry-point-change"><ArrowRight size={17} aria-hidden="true" /><strong>{change}</strong></span>
                <span className="entry-point-capability">{capability}</span>
                <ArrowUpRight className="entry-point-toggle" size={17} aria-hidden="true" />
              </a>
              <div className="entry-point-description">
                <p>{description}</p>
              </div>
            </article>
          ))}
      </div>
    </SectionShell>
  );
}
