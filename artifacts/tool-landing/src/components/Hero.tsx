import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardMockup from "@/components/landing/DashboardMockup";
import { DEMO_URL } from "@/lib/landing-theme";
import '@/styles/gaoz-entry.css';

const heroMessages = [
  { lead: "Elegir es estrategia.", outcome: "Ejecutar es sistema." },
  { lead: "La claridad alinea.", outcome: "La disciplina crea tracción." },
  { lead: "Menos fricción.", outcome: "Más capacidad para crecer." },
  { lead: "La tecnología habilita.", outcome: "La adopción transforma." },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [messageIndex, setMessageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const timer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % heroMessages.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [isPaused, reduceMotion]);

  const message = heroMessages[messageIndex];

  return (
    <section id="hero" className="tool-hero">
      <div className="tool-grid-bg" aria-hidden="true" />
      <div className="tool-hero-inner">
        <motion.div
          className="tool-hero-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <a className="tool-gaoz-entry" href="/gaoz/">
            <span><strong>Sales Lab · GAOZ</strong><small>5 semanas para construir el sistema comercial</small></span>
            <span className="tool-gaoz-entry-action">Ver programa <ArrowRight size={18} /></span>
          </a>
          <div className="tool-hero-message-window" aria-live="polite">
            <motion.h1
              key={message.lead}
              initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
            >
              {message.lead}{" "}<span className="tool-heading-rest">{message.outcome}</span>
            </motion.h1>
          </div>
          <div className="tool-hero-message-controls" aria-label="Declaraciones clave de TOOL">
            <div>
              {heroMessages.map((item, index) => (
                <button
                  type="button"
                  key={item.lead}
                  className={index === messageIndex ? "is-active" : ""}
                  onClick={() => setMessageIndex(index)}
                  aria-label={`Mostrar declaración ${index + 1}: ${item.lead} ${item.outcome}`}
                  aria-current={index === messageIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="tool-hero-pause"
              onClick={() => setIsPaused((current) => !current)}
              aria-label={isPaused ? "Reanudar declaraciones" : "Pausar declaraciones"}
            >
              {isPaused ? <Play size={12} /> : <Pause size={12} />}
            </button>
          </div>
          <div className="tool-actions">
            <motion.a
              className="tool-btn tool-btn-primary"
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -2 }}
              data-testid="hero-primary-cta"
            >
              Agendar diagnóstico <ArrowRight size={17} />
            </motion.a>
            <a
              className="tool-hero-text-link"
              href="/que-hacemos#proceso"
              data-testid="hero-secondary-cta"
            >
              Cómo trabajamos <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="tool-hero-visual"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
