import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DashboardMockup from "@/components/landing/DashboardMockup";
import { DEMO_URL, scrollTo } from "@/lib/landing-theme";

export default function Hero() {
  const reduceMotion = useReducedMotion();

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
          <h1>Elegir es estrategia.<span className="tool-heading-rest">Ejecutar es sistema.</span></h1>
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
