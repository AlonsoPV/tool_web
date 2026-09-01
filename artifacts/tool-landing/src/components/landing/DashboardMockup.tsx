import { motion, useReducedMotion } from "framer-motion";
import { Compass, Gauge, MonitorCog, Users } from "lucide-react";

const nodes = [
  { number: "01", label: "Estrategia", detail: "Definimos la estrategia: dónde jugar y cómo ganar", icon: Compass },
  { number: "02", label: "Optimización", detail: "Optimizamos la operación para reducir fricción", icon: Gauge },
  { number: "03", label: "Tecnología", detail: "Habilitamos con tecnología que tiene sentido", icon: MonitorCog },
  { number: "04", label: "Adopción", detail: "Acompañamos la adopción hasta que se vuelve hábito", icon: Users },
];

export default function DashboardMockup() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-map" aria-label="Estrategia, optimización, tecnología y adopción conectadas al sistema de ejecución">
      <svg className="hero-map-lines" viewBox="0 0 520 430" aria-hidden="true">
        <path d="M137 100 L260 215 L383 100 M137 330 L260 215 L383 330" />
      </svg>
      <div className="hero-map-center">
        <span>TOOL</span><strong>Sistema de ejecución</strong><small>Decisiones en movimiento</small>
      </div>
      {nodes.map(({ number, label, detail, icon: Icon }, index) => (
        <motion.div className={`hero-map-node hero-map-node-${index + 1}`} key={label} initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18 + index * .08, duration: .4 }}>
          <div><span>{number}</span><Icon size={17} /></div><strong>{label}</strong><small>{detail}</small>
        </motion.div>
      ))}
    </div>
  );
}
