import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DashboardMockup from "@/components/landing/DashboardMockup";
import { DEMO_URL, GREEN, NAVY, PURPLE, scrollTo } from "@/lib/landing-theme";

const chips = ["Foco comercial", "KPIs accionables", "Seguimiento real"];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="hero" ref={ref} className="hero-v2">
      <div className="hero-v2-orb hero-v2-orb-green" />
      <div className="hero-v2-orb hero-v2-orb-purple" />
      <div className="hero-v2-grid-bg" aria-hidden="true" />

      <motion.div style={{ y, opacity }} className="hero-v2-inner">
        <div className="hero-v2-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="hero-v2-eyebrow">Para empresas que ya venden</div>

            <h1 className="hero-v2-title">
              <span className="hero-title-main">Deja de operar por intuición.</span>
              <span className="hero-title-accent">
                Convierte tu estrategia comercial en un sistema de ejecución.
              </span>
            </h1>

            <p className="hero-v2-sub">
              Definimos dónde competir, cómo ganar y cómo medir avance con OKRs, KPIs, responsables y seguimiento operativo.
            </p>

            <p className="hero-v2-tagline">Estrategia clara. Ejecución visible. Cultura medible.</p>

            <div className="hero-v2-ctas">
              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 28px rgba(16,185,129,0.38)" }}
                whileTap={{ scale: 0.98 }}
                data-testid="hero-primary-cta"
                className="hero-v2-cta-primary"
              >
                Solicitar diagnóstico
                <ArrowRight size={17} strokeWidth={2.5} />
              </motion.a>
              <motion.button
                whileHover={{ background: `${NAVY}05` }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("#transformacion")}
                data-testid="hero-secondary-cta"
                className="hero-v2-cta-secondary"
              >
                Ver cómo funciona
              </motion.button>
            </div>

            <div className="hero-v2-chips" aria-label="Beneficios clave">
              {chips.map((chip, i) => (
                <motion.span
                  key={chip}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 + i * 0.07, duration: 0.4 }}
                  className="hero-v2-chip"
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="hero-visual-wrap"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .hero-v2 {
          min-height: 100vh;
          min-height: 100dvh;
          background: #fff;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .hero-v2-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-v2-orb-green {
          top: -140px; right: -80px;
          width: 480px; height: 480px;
          background: radial-gradient(circle, ${GREEN}05 0%, transparent 70%);
        }
        .hero-v2-orb-purple {
          bottom: 8%; left: -140px;
          width: 360px; height: 360px;
          background: radial-gradient(circle, ${PURPLE}04 0%, transparent 70%);
        }
        .hero-v2-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(10,29,61,0.012) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,29,61,0.012) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse 70% 60% at 72% 45%, black 10%, transparent 72%);
          pointer-events: none;
        }
        .hero-v2-inner {
          flex: 1;
          display: flex;
          align-items: center;
          padding-top: 88px;
          width: 100%;
        }
        .hero-v2-grid {
          max-width: 1160px;
          margin: 0 auto;
          padding: 56px 32px 80px;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 500px) minmax(0, 1fr);
          gap: clamp(48px, 6vw, 72px);
          align-items: center;
        }
        .hero-copy {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
        }
        .hero-v2-eyebrow {
          width: fit-content;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${NAVY}55;
        }
        .hero-v2-title {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0;
        }
        .hero-title-main {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.85rem, 3.6vw, 2.75rem);
          line-height: 1.1;
          color: ${NAVY};
          letter-spacing: -0.03em;
        }
        .hero-title-accent {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 2.4vw, 1.65rem);
          line-height: 1.25;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, ${GREEN}, ${PURPLE});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-v2-sub {
          font-family: Inter, sans-serif;
          font-size: clamp(0.95rem, 1.3vw, 1.05rem);
          line-height: 1.65;
          color: ${NAVY}65;
          margin: 0;
          max-width: 460px;
        }
        .hero-v2-tagline {
          font-family: Inter, sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: ${NAVY}40;
          margin: -4px 0 0;
          letter-spacing: 0.01em;
        }
        .hero-v2-ctas {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          padding-top: 4px;
        }
        .hero-v2-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${GREEN};
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 14px 28px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(16,185,129,0.28);
        }
        .hero-v2-cta-secondary {
          background: transparent;
          color: ${NAVY}70;
          border: none;
          border-radius: 100px;
          padding: 14px 20px;
          font-family: Manrope, sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: ${NAVY}20;
        }
        .hero-v2-cta-secondary:hover {
          color: ${NAVY};
          text-decoration-color: ${NAVY}40;
        }
        .hero-v2-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 4px;
        }
        .hero-v2-chip {
          font-family: Inter, sans-serif;
          font-weight: 500;
          font-size: 11px;
          letter-spacing: 0.02em;
          color: ${NAVY}45;
          background: transparent;
          border: 1px solid ${NAVY}10;
          border-radius: 100px;
          padding: 5px 12px;
        }
        .hero-visual-wrap {
          position: relative;
          min-width: 0;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 1024px) {
          .hero-v2-grid {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 40px 24px 64px;
          }
          .hero-visual-wrap {
            order: -1;
            justify-content: center;
          }
          .hero-v2-sub { max-width: none; }
        }
        @media (max-width: 560px) {
          .hero-v2-inner { padding-top: 72px; }
          .hero-v2-ctas { flex-direction: column; align-items: stretch; }
          .hero-v2-cta-primary { justify-content: center; }
          .hero-v2-cta-secondary {
            text-align: center;
            text-decoration: none;
            border: 1px solid ${NAVY}12;
            padding: 12px 20px;
          }
        }
      `}</style>
    </section>
  );
}
