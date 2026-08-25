import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, Clock, MessageCircle, Shield } from "lucide-react";
import { DEMO_URL, GREEN, NAVY, PURPLE } from "@/lib/landing-theme";

const ADVISOR_URL = "https://wa.me/5255119811499";

const bullets = [
  "Diagnóstico gratuito y sin compromiso.",
  "En 45 min identificamos fit y tu siguiente paso.",
  "Acompañamiento consultivo — sistema completo, no solo herramienta.",
];

const steps = [
  { n: "01", label: "Diagnóstico", desc: "Mapa de tu operación comercial actual" },
  { n: "02", label: "Prioridades", desc: "Dónde competir y qué medir primero" },
  { n: "03", label: "Plan", desc: "OKRs, KPIs y responsables concretos" },
];

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacto" className="final-cta-v2">
      <div className="final-cta-orb final-cta-orb-green" />
      <div className="final-cta-orb final-cta-orb-purple" />
      <div className="final-cta-grid-bg" aria-hidden="true" />

      <div className="final-cta-inner" ref={ref}>
        <motion.div
          className="final-cta-grid"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Copy + actions */}
          <div className="final-cta-copy">
            <span className="final-cta-label">Empieza hoy</span>

            <h2 className="final-cta-title">
              <span className="final-cta-title-line">Tu estrategia ya existe.</span>
              <span className="final-cta-title-accent">Ahora conviértela en sistema.</span>
            </h2>

            <p className="final-cta-sub">
              Ordena decisiones, OKRs, KPIs, responsables e iniciativas para que tu equipo comercial ejecute con claridad y seguimiento real.
            </p>

            <p className="final-cta-tagline">
              Estrategia clara · Ejecución visible · Cultura medible
            </p>

            <div className="final-cta-actions">
              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: "0 16px 48px rgba(16,185,129,0.55)" }}
                whileTap={{ scale: 0.97 }}
                data-testid="cta-demo-main"
                className="final-cta-primary"
              >
                Solicitar diagnóstico
                <ArrowRight size={18} strokeWidth={2.5} />
              </motion.a>
              <motion.a
                href={ADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, background: "rgba(255,255,255,0.14)" }}
                whileTap={{ scale: 0.97 }}
                data-testid="cta-advisor"
                className="final-cta-secondary"
              >
                <MessageCircle size={18} />
                Hablar con un asesor
              </motion.a>
            </div>

            <div className="final-cta-trust">
              <span><Clock size={14} /> 45 min</span>
              <span><Shield size={14} /> Sin compromiso</span>
            </div>
          </div>

          {/* Diagnostic card */}
          <motion.div
            className="final-cta-card"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="final-cta-card-head">
              <span className="final-cta-card-badge">Diagnóstico gratuito</span>
              <h3 className="final-cta-card-title">Qué obtienes en la sesión</h3>
            </div>

            <ul className="final-cta-list">
              {bullets.map((b, i) => (
                <motion.li
                  key={b}
                  className="final-cta-list-item"
                  initial={{ opacity: 0, x: 12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08 }}
                >
                  <span className="final-cta-check">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {b}
                </motion.li>
              ))}
            </ul>

            <div className="final-cta-steps">
              {steps.map((s) => (
                <div key={s.n} className="final-cta-step">
                  <span className="final-cta-step-n">{s.n}</span>
                  <div>
                    <span className="final-cta-step-label">{s.label}</span>
                    <span className="final-cta-step-desc">{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .final-cta-v2 {
          background: linear-gradient(155deg, ${NAVY} 0%, #0d2550 55%, #081830 100%);
          padding: clamp(64px, 8vw, 88px) 28px;
          position: relative;
          overflow: hidden;
        }
        .final-cta-orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .final-cta-orb-green {
          top: -15%;
          left: -8%;
          width: 440px;
          height: 440px;
          background: radial-gradient(circle, ${GREEN}14 0%, transparent 68%);
        }
        .final-cta-orb-purple {
          bottom: -25%;
          right: -6%;
          width: 380px;
          height: 380px;
          background: radial-gradient(circle, ${PURPLE}12 0%, transparent 68%);
        }
        .final-cta-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 80%);
          pointer-events: none;
        }
        .final-cta-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .final-cta-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 420px);
          gap: clamp(36px, 5vw, 56px);
          align-items: center;
        }
        .final-cta-copy {
          display: flex;
          flex-direction: column;
          gap: 20px;
          min-width: 0;
        }
        .final-cta-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.1);
          color: ${GREEN};
          border-radius: 100px;
          padding: 7px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-family: Manrope, sans-serif;
        }
        .final-cta-title {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0;
        }
        .final-cta-title-line {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.65rem, 3.5vw, 2.5rem);
          color: #fff;
          line-height: 1.12;
          letter-spacing: -0.025em;
        }
        .final-cta-title-accent {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.35rem, 2.8vw, 1.9rem);
          line-height: 1.18;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, ${GREEN}, ${PURPLE});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .final-cta-sub {
          font-family: Inter, sans-serif;
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          line-height: 1.7;
          color: rgba(255,255,255,0.72);
          margin: 0;
          max-width: 520px;
        }
        .final-cta-tagline {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          margin: 0;
        }
        .final-cta-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          padding-top: 4px;
        }
        .final-cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: ${GREEN};
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 14px 26px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(16,185,129,0.4);
        }
        .final-cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.08);
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          padding: 14px 22px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          backdrop-filter: blur(8px);
        }
        .final-cta-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 16px 24px;
          font-family: Inter, sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.45);
        }
        .final-cta-trust span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .final-cta-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 28px;
          backdrop-filter: blur(12px);
        }
        .final-cta-card-head {
          margin-bottom: 20px;
        }
        .final-cta-card-badge {
          display: inline-block;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${GREEN};
          background: ${GREEN}18;
          border-radius: 6px;
          padding: 4px 10px;
          margin-bottom: 10px;
        }
        .final-cta-card-title {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: #fff;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .final-cta-list {
          list-style: none;
          margin: 0 0 24px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .final-cta-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: Inter, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255,255,255,0.78);
        }
        .final-cta-check {
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: ${GREEN}22;
          color: ${GREEN};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }
        .final-cta-steps {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        .final-cta-step {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .final-cta-step-n {
          font-family: ui-monospace, monospace;
          font-size: 11px;
          font-weight: 700;
          color: ${PURPLE};
          opacity: 0.85;
          padding-top: 2px;
        }
        .final-cta-step-label {
          display: block;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: rgba(255,255,255,0.9);
        }
        .final-cta-step-desc {
          display: block;
          font-family: Inter, sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          margin-top: 2px;
        }

        @media (max-width: 900px) {
          .final-cta-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .final-cta-card { order: -1; }
          .final-cta-sub { max-width: none; }
        }
        @media (max-width: 560px) {
          .final-cta-v2 { padding: 56px 20px; }
          .final-cta-actions { flex-direction: column; }
          .final-cta-primary,
          .final-cta-secondary { width: 100%; justify-content: center; }
          .final-cta-card { padding: 22px; }
        }
      `}</style>
    </section>
  );
}
