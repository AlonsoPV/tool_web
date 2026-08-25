import { motion } from "framer-motion";
import { NAVY, GREEN, PURPLE } from "@/lib/landing-theme";

export default function TensionSection() {
  return (
    <section className="tension-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6 }}
        className="tension-inner"
      >
        <p className="tension-label">La tensión</p>
        <h2 className="tension-title">
          No puedes pedirle al equipo que ejecute mejor si antes no defines con claridad dónde jugar, cómo ganar y cómo medir avance.
        </h2>
        <p className="tension-sub">
          Todos venden de todo, pero nadie sabe qué línea conviene empujar primero. La data no sirve si no cambia la siguiente decisión comercial.
        </p>
      </motion.div>

      <style>{`
        .tension-section {
          background: linear-gradient(135deg, ${NAVY}, #1a3563);
          padding: 64px 24px;
        }
        .tension-inner {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }
        .tension-label {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${GREEN};
          margin: 0 0 20px;
        }
        .tension-title {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 3.5vw, 1.75rem);
          color: #fff;
          line-height: 1.35;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }
        .tension-sub {
          font-family: Inter, sans-serif;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }
        @media (max-width: 768px) {
          .tension-section { padding: 48px 20px; }
        }
      `}</style>
    </section>
  );
}
