import { ArrowRight, Compass, Gauge, MonitorCog, Users } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const steps = [
  {
    icon: Compass,
    title: "Definir la estrategia",
    copy: "Aclaramos la aspiración, dónde jugar, cómo ganar y qué capacidades harán posible la elección.",
    outputs: ["Playing to Win", "Prioridades", "Apuestas", "Foco"],
  },
  {
    icon: Gauge,
    title: "Optimizar la operación",
    copy: "Mapeamos el trabajo, eliminamos fricción y rediseñamos procesos, roles y decisiones críticas.",
    outputs: ["Procesos", "Roles", "Quick wins", "Flujo ideal"],
  },
  {
    icon: MonitorCog,
    title: "Habilitar con tecnología",
    copy: "Elegimos y configuramos herramientas, automatizaciones y tableros alrededor del proceso diseñado.",
    outputs: ["Herramientas", "Automatización", "KPIs", "Datos"],
  },
  {
    icon: Users,
    title: "Instalar la ejecución",
    copy: "Capacitamos al equipo e instalamos cadencias de seguimiento para sostener, aprender y mejorar.",
    outputs: ["Adopción", "Cadencias", "Seguimiento", "Mejora"],
  },
];

export default function MethodSection() {
  return (
    <SectionShell id="como-trabajamos" className="method-section">
      <div className="tool-section-heading">
        <span className="tool-eyebrow">De la elección a la ejecución</span>
        <h2>Una ruta continua:<span className="tool-heading-rest">estrategia, optimización, tecnología y adopción.</span></h2>
        <p>Cada etapa responde a la anterior. No automatizamos procesos que aún no deberían existir ni capacitamos sobre herramientas sin propósito.</p>
      </div>
      <div className="method-flow method-flow-four" aria-label="Estrategia, optimización, tecnología y adopción">
        {steps.map(({ icon: Icon, title, copy, outputs }, index) => (
          <div className="method-step-wrap" key={title}>
            <article className="method-card">
              <div className="method-card-head">
                <span className="method-index">0{index + 1}</span>
                <span className="method-icon"><Icon size={20} /></span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <div className="method-tags">{outputs.map((output) => <span key={output}>{output}</span>)}</div>
            </article>
            {index < steps.length - 1 && <span className="method-arrow" aria-hidden="true"><ArrowRight size={19} /></span>}
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
