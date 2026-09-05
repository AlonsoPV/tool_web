import { ArrowRight, BarChart3, Check, RefreshCw, Target, Users } from "lucide-react";
import { Link } from "wouter";
import SectionShell from "@/components/landing/SectionShell";

const mechanisms = [
  { icon: Target, title: "Prioridades claras", copy: "Todos saben qué mover primero." },
  { icon: Users, title: "Responsables visibles", copy: "Cada decisión tiene dueño y fecha." },
  { icon: BarChart3, title: "Evidencia frecuente", copy: "Los datos orientan el siguiente movimiento." },
  { icon: RefreshCw, title: "Ritmo de mejora", copy: "El equipo aprende y ajusta cada semana." },
];

const outcomes = [
  "La dirección deja de conectar manualmente todas las piezas.",
  "Las juntas terminan con acuerdos que sí avanzan.",
  "Los problemas aparecen antes de convertirse en urgencias.",
  "La mejora deja de depender de esfuerzos extraordinarios.",
];

export default function SystemEcosystem() {
  return (
    <SectionShell id="sistema" className="ecosystem-section results-system-section">
      <div className="results-system-heading">
        <span className="tool-eyebrow tool-eyebrow-dark">Cómo se logran los resultados</span>
        <h2>Los resultados aparecen cuando el equipo<span className="tool-heading-rest">puede repetir lo que funciona.</span></h2>
        <p>No depende de una herramienta aislada. Depende de conectar claridad, responsabilidad, evidencia y mejora en un mismo ritmo.</p>
      </div>

      <div className="results-system-grid">
        <div className="results-system-engine">
          <div className="results-system-engine-head"><span>El sistema que lo hace repetible</span><small>01 — 04</small></div>
          <div className="results-system-mechanisms">
            {mechanisms.map(({ icon: Icon, title, copy }, index) => (
              <article key={title}><span><Icon size={17} /></span><div><small>0{index + 1}</small><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>

        <div className="results-system-outcomes">
          <span>Lo que cambia en el día a día</span>
          <h3>Menos coordinación manual. Más capacidad para avanzar.</h3>
          <ul>{outcomes.map((outcome) => <li key={outcome}><Check size={15} />{outcome}</li>)}</ul>
          <Link href="/que-hacemos#capacidades">Ver las capacidades que construimos <ArrowRight size={15} /></Link>
        </div>
      </div>
    </SectionShell>
  );
}
