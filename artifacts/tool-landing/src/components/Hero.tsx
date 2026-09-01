import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import DashboardMockup from "@/components/landing/DashboardMockup";
import { DEMO_URL, scrollTo } from "@/lib/landing-theme";

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
          <div className="tool-hero-message-window">
            <motion.h1
              key={message.lead}
              initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .42, ease: [0.22, 1, 0.36, 1] }}
            >
              {message.lead}<span className="tool-heading-rest">{message.outcome}</span>
            </motion.h1>
          </div>
          <div className="tool-hero-message-controls" aria-label="Mensajes clave de TOOL">
            <div>
              {heroMessages.map((item, index) => (
                <button
                  type="button"
                  key={item.lead}
                  className={index === messageIndex ? "is-active" : ""}
                  onClick={() => setMessageIndex(index)}
                  aria-label={`Mostrar mensaje ${index + 1}`}
                  aria-current={index === messageIndex ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="tool-hero-pause"
              onClick={() => setIsPaused((current) => !current)}
              aria-label={isPaused ? "Reanudar mensajes" : "Pausar mensajes"}
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
            <button
              className="tool-hero-text-link"
              onClick={() => scrollTo("#playing-to-win")}
              data-testid="hero-secondary-cta"
            >
              Ver cómo funciona <ArrowRight size={15} />
            </button>
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
