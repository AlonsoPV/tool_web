import SectionShell from "@/components/landing/SectionShell";

const problems = [
  "Las prioridades cambian con cada urgencia.",
  "Los procesos dependen de personas específicas.",
  "Los equipos trabajan con criterios distintos.",
  "Las herramientas no están conectadas.",
  "Las decisiones se concentran en pocas personas.",
];

export default function ProblemSection() {
  return (
    <SectionShell id="que-resolvemos" className="problem-section" style={{ background: "#F7F9FC" }}>
      <div className="tool-section-heading problem-heading">
        <span className="tool-eyebrow">Cuando la estrategia no baja a la operación</span>
        <h2>Una empresa no se desordena por falta de ideas.{" "}<span className="tool-heading-rest">Se desordena cuando cada área las ejecuta distinto.</span></h2>
        <p>El equipo puede estar ocupado y aun así avanzar en direcciones distintas.</p>
      </div>
      <div className="problem-story-card">
        <span className="problem-story-label">La desconexión se reconoce rápido</span>
        <div className="problem-checklist">
          {problems.map((problem, index) => <div key={problem}><span>0{index + 1}</span><p>{problem}</p></div>)}
        </div>
      </div>
    </SectionShell>
  );
}
