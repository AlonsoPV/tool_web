import { ArrowRight, Compass, MonitorCog, RefreshCw, Users } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const pillars = [
  { icon: Compass, label: "Estrategia", action: "Elegir" },
  { icon: RefreshCw, label: "Cambio", action: "Rediseñar" },
  { icon: Users, label: "Cultura", action: "Adoptar" },
  { icon: MonitorCog, label: "Tecnología", action: "Escalar" },
];

export default function MissionSection() {
  return (
    <SectionShell id="propuesta" className="mission-section value-proposal-section">
      <div className="tool-section-heading tool-section-heading-left value-proposal-heading">
        <span className="tool-eyebrow">La propuesta TOOL</span>
        <h2>Una empresa no gana haciendo más.{" "}<span className="tool-heading-rest">Gana eligiendo mejor.</span></h2>
        <p>Una decisión necesita cuatro capacidades conectadas para convertirse en resultado.</p>
      </div>
      <ol className="value-system-strip" aria-label="Las cuatro capacidades del modelo TOOL">
        {pillars.map(({ icon: Icon, label, action }, index) => (
          <li key={label}>
            <span className="value-system-icon"><Icon size={18} aria-hidden="true" /></span>
            <span className="value-system-copy"><strong>{action}</strong><small>{label}</small></span>
            {index < pillars.length - 1 && <ArrowRight className="value-system-arrow" size={17} aria-hidden="true" />}
          </li>
        ))}
      </ol>
      <a className="value-system-link" href="/que-hacemos#capacidades">Conocer el modelo TOOL <ArrowRight size={15} /></a>
    </SectionShell>
  );
}
