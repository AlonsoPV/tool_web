import { ArrowRight, Compass, Gauge, MonitorCog, Users } from "lucide-react";
import { Link } from "wouter";
import SectionShell from "@/components/landing/SectionShell";

const steps = [
  { icon: Compass, title: "Estrategia", copy: "Elegimos dónde jugar y cómo ganar." },
  { icon: Gauge, title: "Optimización", copy: "Reducimos la fricción que frena el avance." },
  { icon: MonitorCog, title: "Tecnología", copy: "Habilitamos el trabajo con herramientas útiles." },
  { icon: Users, title: "Adopción", copy: "Acompañamos al equipo hasta volverlo hábito." },
];

export default function MethodSection() {
  return (
    <SectionShell id="como-trabajamos" className="method-section method-bridge-section">
      <div className="method-bridge-intro">
        <div>
          <span className="tool-eyebrow">Después, construir</span>
          <h2>La estrategia cobra valor cuando cambia<span className="tool-heading-rest">la forma de operar.</span></h2>
        </div>
        <div>
          <p>Conectamos elecciones, procesos, tecnología y hábitos en una ruta que el equipo puede ejecutar y mejorar.</p>
          <Link className="tool-inline-link" href="/que-hacemos#proceso">Conocer el proceso consultivo <ArrowRight size={15} /></Link>
        </div>
      </div>

      <div className="method-bridge-flow" aria-label="De la estrategia a la adopción">
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
