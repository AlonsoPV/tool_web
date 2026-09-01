import { ArrowRight, Check, X } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const before = [
  "Seguimiento por WhatsApp",
  "Procesos en la cabeza del equipo",
  "Herramientas subutilizadas",
  "Juntas sin acuerdos",
  "Datos aislados",
];

const after = [
  "Seguimiento trazable",
  "Flujos claros y compartidos",
  "Herramientas adoptadas",
  "Responsables y fechas",
  "KPIs accionables",
];

export default function ChangeSection() {
  return (
    <SectionShell id="cambio" className="change-section">
      <div className="tool-section-heading tool-section-heading-left">
        <span className="tool-eyebrow">El cambio</span>
        <h2>De operar por urgencia a operar con claridad.</h2>
        <p>No imponemos un sistema. Partimos de la realidad de tu equipo y construimos una forma de trabajo que pueda adoptarse.</p>
      </div>
      <p className="change-close">El cambio cultural empieza cuando el equipo entiende <strong>cómo trabajar mejor</strong>, no solo qué herramienta usar.</p>
      <div className="change-comparison">
        <article className="change-card change-before">
          <span className="change-label">Hoy</span>
          <h3>La operación depende de memoria y urgencia.</h3>
          <ul>
            {before.map((item) => <li key={item}><X size={15} />{item}</li>)}
          </ul>
        </article>
        <span className="change-arrow" aria-hidden="true"><ArrowRight size={21} /></span>
        <article className="change-card change-after">
          <span className="change-label">Con TOOL</span>
          <h3>El equipo opera con claridad y seguimiento.</h3>
          <ul>
            {after.map((item) => <li key={item}><Check size={15} />{item}</li>)}
          </ul>
        </article>
      </div>
    </SectionShell>
  );
}
