import SectionShell from "@/components/landing/SectionShell";

const problems = [
  "Las prioridades cambian con cada urgencia.",
  "Los procesos generan retrabajo y esperas.",
  "Las herramientas existen, pero no se adoptan.",
  "Las decisiones siguen dependiendo de una persona.",
];

export default function ProblemSection() {
  return (
    <SectionShell id="que-resolvemos" className="problem-section" style={{ background: "#F7F9FC" }}>
      <div className="tool-section-heading problem-heading">
        <span className="tool-eyebrow">Cuando la estrategia no baja a la operación</span>
        <h2>Una empresa no se desordena por falta de ideas.<span className="tool-heading-rest">Se desordena cuando cada área las ejecuta distinto.</span></h2>
        <p>El equipo puede estar ocupado y aun así perder foco, velocidad y capacidad de decidir.</p>
      </div>
      <div className="problem-story-card">
        <span className="problem-story-label">La desconexión se reconoce rápido</span>
        <div className="problem-checklist">
          {problems.map((problem, index) => <div key={problem}><span>0{index + 1}</span><p>{problem}</p></div>)}
        </div>
      </div>
      <p className="problem-close">
        El reto no es hacer más. <strong>Es alinear lo que la empresa eligió con la forma en que realmente trabaja.</strong>
      </p>
    </SectionShell>
  );
}
