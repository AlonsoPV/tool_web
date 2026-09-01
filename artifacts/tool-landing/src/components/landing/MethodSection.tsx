import { ArrowRight, Compass, Gauge, MonitorCog, Users } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const steps = [
  {
    icon: Compass,
    title: "Definir la estrategia",
    copy: "Definimos la estrategia: dónde jugar y cómo ganar",
    outputs: ["Playing to Win", "Prioridades", "Apuestas", "Foco"],
  },
  {
    icon: Gauge,
    title: "Optimizar la operación",
    copy: "Optimizamos la operación para reducir fricción",
    outputs: ["Procesos", "Roles", "Quick wins", "Flujo ideal"],
  },
  {
    icon: MonitorCog,
    title: "Habilitar con tecnología",
    copy: "Habilitamos con tecnología que tiene sentido",
    outputs: ["Herramientas", "Automatización", "KPIs", "Datos"],
  },
  {
    icon: Users,
    title: "Acompañar la adopción",
    copy: "Acompañamos la adopción hasta que se vuelve hábito",
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
