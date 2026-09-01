import { BarChart3, Bot, RefreshCw, Route, Settings2, UserRoundCheck, Users, Workflow } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const nodes = [
  { label: "Procesos", icon: Workflow },
  { label: "Responsables", icon: UserRoundCheck },
  { label: "Tecnología", icon: Settings2 },
  { label: "KPIs", icon: BarChart3 },
  { label: "Adopción", icon: Users },
  { label: "Automatización", icon: Bot },
  { label: "Seguimiento", icon: Route },
  { label: "Mejora continua", icon: RefreshCw },
];

export default function SystemEcosystem() {
  return (
    <SectionShell id="sistema" className="ecosystem-section">
      <div className="tool-section-heading">
        <span className="tool-eyebrow tool-eyebrow-dark">Sistema TOOL</span>
        <h2>La ventaja no está en una herramienta.<span className="tool-heading-rest">Está en cómo funciona el sistema completo.</span></h2>
        <p>Estrategia, procesos, personas, tecnología y datos se refuerzan cuando comparten un mismo ritmo de gestión.</p>
      </div>
      <div className="ecosystem" aria-label="Ecosistema del sistema de ejecución">
        <div className="ecosystem-lines" aria-hidden="true" />
        <div className="ecosystem-center">
          <span>TOOL</span>
          <strong>Sistema de ejecución</strong>
          <small>Orden + adopción + seguimiento</small>
        </div>
        {nodes.map(({ label, icon: Icon }, index) => (
          <div className={`ecosystem-node node-${index + 1}`} key={label}>
            <Icon size={17} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
