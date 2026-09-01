import { motion, useReducedMotion } from "framer-motion";
import { Atom, Gauge, Gem, Globe2, Sparkles } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const pipeline = ["Elegir", "Enfocar", "Construir", "Ejecutar"];

const choices = [
  { number: "01", icon: Sparkles, title: "Aspiración ganadora", question: "¿Qué significa ganar para tu empresa?", copy: "Definimos una ambición concreta que permita elegir prioridades y medir avance." },
  { number: "02", icon: Globe2, title: "Dónde jugar", question: "¿En qué clientes, mercados y problemas enfocarse?", copy: "Elegimos los espacios donde concentrar recursos puede producir una ventaja real." },
  { number: "03", icon: Gem, title: "Cómo ganar", question: "¿Por qué deberían elegirte?", copy: "Convertimos la propuesta de valor en decisiones comerciales y operativas claras." },
  { number: "04", icon: Atom, title: "Capacidades clave", question: "¿Qué debe saber hacer excepcionalmente bien el equipo?", copy: "Diseñamos procesos, roles, tecnología y hábitos alrededor de esas capacidades." },
  { number: "05", icon: Gauge, title: "Sistema de gestión", question: "¿Cómo sostener las decisiones en la operación diaria?", copy: "Instalamos KPIs, tableros y cadencias para aprender, ajustar y ejecutar." },
];

export default function PlayingToWin() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="playing-to-win" className="ptw-section">
      <div className="ptw-intro">
        <div>
          <span className="tool-eyebrow">Enfoque Playing to Win</span>
          <h2>Antes de optimizar la operación,<span className="tool-heading-rest">hay que decidir qué operación vale la pena construir.</span></h2>
        </div>
        <div className="ptw-intro-copy">
          <p>Playing to Win convierte la estrategia en cinco elecciones conectadas. Cada una define qué optimizar, qué capacidades desarrollar y qué tecnología tiene sentido implementar.</p>
          <ol className="ptw-pipeline">
            {pipeline.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="ptw-cascade" aria-label="Cascada de decisiones Playing to Win">
        <div className="ptw-cascade-bar">
          <span className="ptw-cascade-live"><i aria-hidden="true" /> Decision stack</span>
          <span className="ptw-cascade-meta">05 elecciones conectadas</span>
        </div>

        <div className="ptw-cascade-body">
          {choices.map(({ number, icon: Icon, title, question, copy }, index) => (
            <motion.article
              className="ptw-choice"
              key={title}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "easeOut" }}
            >
              <div className="ptw-choice-rail">
                <span className="ptw-choice-node">{number}</span>
              </div>
              <div className="ptw-choice-card">
                <span className="ptw-choice-icon"><Icon size={18} strokeWidth={1.5} /></span>
                <div className="ptw-choice-title">
                  <h3>{title}</h3>
                  <p>{question}</p>
                </div>
                <p className="ptw-choice-copy">{copy}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="ptw-outcome">
          <span>La lógica TOOL</span>
          <strong>La estrategia define las capacidades. Las capacidades dan forma a los procesos. El sistema de gestión mantiene todo en movimiento.</strong>
        </div>
      </div>
    </SectionShell>
  );
}
