import { ArrowDownRight } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

export default function MissionSection() {
  return (
    <SectionShell id="mision" className="mission-section">
      <div className="mission-layout">
        <div className="mission-title">
          <span className="tool-eyebrow">Nuestra misión</span>
          <h2>La estrategia marca la dirección.<span className="tool-heading-rest">El sistema de trabajo la hace posible.</span></h2>
          <span className="mission-mark" aria-hidden="true"><ArrowDownRight size={26} /></span>
        </div>
        <div className="mission-copy">
          <p className="mission-lead">Elegir dónde jugar y cómo ganar es el inicio. Después hay que diseñar la empresa capaz de sostener esa elección.</p>
          <p>Eso implica simplificar procesos, definir responsabilidades, desarrollar capacidades y usar tecnología donde realmente reduce fricción.</p>
          <p>TOOL conecta esas piezas en un sistema de ejecución que el equipo puede entender, usar y mejorar.</p>
        </div>
      </div>
    </SectionShell>
  );
}
