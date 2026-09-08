import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { ADVISOR_URL, DEMO_URL } from "@/lib/landing-theme";

export default function FinalCTA() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="contacto" className="tool-final-cta">
      <div className="tool-final-grid" aria-hidden="true" />
      <motion.div
        className="tool-final-inner"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="tool-final-copy">
          <span className="tool-eyebrow tool-eyebrow-dark">Siguiente paso</span>
          <h2>Una estrategia clara merece una operación capaz de ejecutarla.</h2>
          <p>Agenda un diagnóstico para identificar qué decisión, proceso o capacidad está frenando el avance de tu empresa.</p>
          <div className="tool-final-actions">
            <a className="tool-btn tool-btn-primary" href={DEMO_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-demo-main">
              Agendar diagnóstico <ArrowRight size={17} />
            </a>
            <a className="tool-btn tool-btn-dark" href={ADVISOR_URL} target="_blank" rel="noopener noreferrer" data-testid="cta-advisor">
              <MessageCircle size={17} /> Enviar WhatsApp
            </a>
          </div>
          <small>Sin compromiso. Primero entendemos el contexto.</small>
        </div>
      </motion.div>
    </section>
  );
}
