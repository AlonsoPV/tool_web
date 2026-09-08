import { BarChart3, Blocks, Search, Sparkles } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const steps = [
  { icon: Search, title: "Entender", copy: "Comprendemos el sistema actual, sus restricciones y prioridades." },
  { icon: Blocks, title: "Diseñar", copy: "Definimos el cambio, los procesos y capacidades necesarias." },
  { icon: Sparkles, title: "Activar", copy: "Implementamos junto al equipo, combinando personas, procesos y tecnología." },
  { icon: BarChart3, title: "Medir", copy: "Observamos resultados, aprendemos y ajustamos." },
];

export default function MethodSection() {
  return (
    <SectionShell id="como-trabajamos" className="method-section method-bridge-section">
      <div className="method-bridge-intro">
        <div>
          <span className="tool-eyebrow">Cómo trabajamos</span>
          <h2>La estrategia cobra valor cuando cambia{" "}<span className="tool-heading-rest">la forma de operar.</span></h2>
        </div>
        <div>
          <p>Avanzamos con una secuencia simple y visible, siempre junto al equipo.</p>
        </div>
      </div>

      <div className="method-bridge-flow" aria-label="Entender, diseñar, activar y medir">
        {steps.map(({ icon: Icon, title, copy }, index) => (
          <article key={title}>
            <div><span>0{index + 1}</span><Icon size={19} /></div>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
