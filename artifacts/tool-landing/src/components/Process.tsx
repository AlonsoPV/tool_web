import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const steps = [
  {
    number: "01",
    label: "Diagnóstico",
    icon: "🔍",
    color: GREEN,
    duration: "Semana 1-2",
    tagline: "Entendemos tu empresa antes de proponer cualquier cosa.",
    body: "Hacemos entrevistas con los equipos clave, revisamos los procesos actuales, identificamos los cuellos de botella y mapemos dónde se pierde tiempo, energía y dinero.",
    deliverables: [
      "Mapa de procesos actuales",
      "Diagnóstico de prioridades",
      "Identificación de quick wins",
      "Plan de trabajo propuesto",
    ],
    outcome: "Sabes exactamente dónde está el problema — y tienes un roadmap para resolverlo.",
  },
  {
    number: "02",
    label: "Diseño del sistema",
    icon: "🏗",
    color: PURPLE,
    duration: "Semana 3-4",
    tagline: "Diseñamos el sistema operativo de tu empresa.",
    body: "Construimos los procesos, KPIs, tableros y estructura de cadencia adaptados a tu equipo — no plantillas genéricas. Cada pieza tiene un responsable y una métrica.",
    deliverables: [
      "Procesos documentados por área",
      "KPIs y tablero operativo",
      "Agenda de cadencias de gestión",
      "Roles y responsabilidades claros",
    ],
    outcome: "Tu empresa tiene un sistema de gestión diseñado a medida, listo para ser implementado.",
  },
  {
    number: "03",
    label: "Implementación",
    icon: "🚀",
    color: "#F59E0B",
    duration: "Semanas 5-12",
    tagline: "No te dejamos solo. Estamos en la trinchera contigo.",
    body: "Acompañamos la adopción del sistema en tiempo real: capacitamos al equipo, facilitamos las primeras sesiones de cadencia y ajustamos lo que sea necesario hasta que el sistema opere de forma autónoma.",
    deliverables: [
      "Sesiones de implementación semanales",
      "Capacitación al equipo operativo",
      "Ajustes y mejoras en vivo",
      "Handoff documentado al equipo",
    ],
    outcome: "El sistema ya no depende de TOOL. Tu equipo lo opera solo, con los hábitos instalados.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section id="proceso" className="process-section" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="process-header"
          style={{ textAlign: "center" }}
        >
          <span style={{
            display: "inline-block",
            background: `${GREEN}12`,
            color: GREEN,
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "Manrope, sans-serif",
          }}>
            Proceso
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)",
            color: NAVY,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 620,
            margin: "0 auto 16px",
          }}>
            De la primera llamada al sistema funcionando en 90 días.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 540,
            margin: "0 auto",
          }}>
            Un proceso claro, sin sorpresas. Sabes en todo momento en qué etapa estás y qué sigue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
        >
          <div className="process-tabs-wrap">
            <div className="process-tabs">
              <div className="process-tabs-line" aria-hidden="true" />
              <motion.div
                className="process-tabs-progress"
                animate={{ width: `${(active / 2) * 68}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  background: `linear-gradient(90deg, ${GREEN}, ${PURPLE})`,
                }}
              />

              {steps.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  data-testid={`process-step-${i}`}
                  className="process-tab"
                >
                  <motion.div
                    className="process-tab-dot"
                    animate={{
                      background: active >= i ? s.color : "#E5E7EB",
                      scale: active === i ? 1.1 : 1,
                      boxShadow: active === i ? `0 4px 16px ${s.color}40` : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      border: `3px solid ${active >= i ? s.color : "#E5E7EB"}`,
                    }}
                  >
                    {active > i ? (
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : s.icon}
                  </motion.div>
                  <div style={{ textAlign: "center" }}>
                    <p className="process-tab-num" style={{ color: active >= i ? s.color : `${NAVY}40` }}>
                      {s.number}
                    </p>
                    <p className="process-tab-label" style={{ color: active === i ? NAVY : `${NAVY}55` }}>
                      {s.label}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="process-panel"
              style={{
                background: "#F7F9FC",
                border: `2px solid ${steps[active].color}20`,
              }}
            >
              <div className="process-content">
                <div className="process-content-main">
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{
                      display: "inline-block",
                      background: `${steps[active].color}15`,
                      color: steps[active].color,
                      borderRadius: 100,
                      padding: "4px 12px",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "Manrope, sans-serif",
                    }}>
                      {steps[active].duration}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.05rem, 3.2vw, 1.35rem)",
                    color: NAVY,
                    marginBottom: 14,
                    lineHeight: 1.3,
                  }}>
                    {steps[active].tagline}
                  </h3>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "clamp(14px, 2.8vw, 15px)",
                    lineHeight: 1.7,
                    color: `${NAVY}75`,
                    marginBottom: 20,
                  }}>
                    {steps[active].body}
                  </p>
                  <div style={{
                    background: `${steps[active].color}10`,
                    borderLeft: `3px solid ${steps[active].color}`,
                    borderRadius: "0 12px 12px 0",
                    padding: "14px 16px",
                  }}>
                    <p style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: NAVY,
                      lineHeight: 1.5,
                      margin: 0,
                    }}>
                      {steps[active].outcome}
                    </p>
                  </div>
                </div>

                <div className="process-content-side">
                  <p style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: `${NAVY}50`,
                    marginBottom: 16,
                  }}>
                    Entregables
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {steps[active].deliverables.map((d, i) => (
                      <motion.div
                        key={d}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="process-deliverable"
                      >
                        <div style={{
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          background: `${steps[active].color}15`,
                          border: `1.5px solid ${steps[active].color}30`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          fontFamily: "Manrope, sans-serif",
                          fontWeight: 800,
                          fontSize: 11,
                          color: steps[active].color,
                        }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <span style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 14,
                          fontWeight: 600,
                          color: NAVY,
                          lineHeight: 1.4,
                        }}>
                          {d}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="process-nav">
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  className="process-nav-btn"
                  style={{
                    background: "none",
                    border: "1px solid #E5E7EB",
                    color: active === 0 ? `${NAVY}30` : NAVY,
                    cursor: active === 0 ? "default" : "pointer",
                  }}
                >
                  ← Anterior
                </button>
                <div style={{ display: "flex", gap: 6 }}>
                  {steps.map((_, i) => (
                    <div key={i} style={{
                      width: i === active ? 20 : 6,
                      height: 6,
                      borderRadius: 100,
                      background: i === active ? steps[active].color : "#E5E7EB",
                      transition: "all 0.3s",
                    }} />
                  ))}
                </div>
                <button
                  onClick={() => setActive(Math.min(steps.length - 1, active + 1))}
                  disabled={active === steps.length - 1}
                  className="process-nav-btn"
                  style={{
                    background: active < steps.length - 1 ? steps[active].color : "#E5E7EB",
                    border: "none",
                    color: "#fff",
                    cursor: active === steps.length - 1 ? "default" : "pointer",
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .process-section {
          padding: 96px 24px;
        }
        .process-header {
          margin-bottom: 56px;
        }
        .process-tabs-wrap {
          position: relative;
          margin-bottom: 28px;
        }
        .process-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          position: relative;
        }
        .process-tabs-line {
          position: absolute;
          top: 24px;
          left: 16%;
          right: 16%;
          height: 2px;
          background: #E5E7EB;
          z-index: 0;
        }
        .process-tabs-progress {
          position: absolute;
          top: 24px;
          left: 16%;
          height: 2px;
          z-index: 1;
        }
        .process-tab {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          position: relative;
          z-index: 2;
          padding: 0 4px;
          min-width: 0;
        }
        .process-tab-dot {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #fff;
        }
        .process-tab-num {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          margin: 0 0 2px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          transition: color 0.3s;
        }
        .process-tab-label {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 12px;
          margin: 0;
          line-height: 1.25;
          transition: color 0.3s;
        }
        .process-panel {
          border-radius: 28px;
          overflow: hidden;
        }
        .process-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .process-content-main {
          padding: 40px;
          border-right: 1px solid #E5E7EB;
          min-width: 0;
        }
        .process-content-side {
          padding: 40px;
          min-width: 0;
        }
        .process-deliverable {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          border-radius: 14px;
          padding: 14px 16px;
          border: 1px solid #E8ECF0;
          box-shadow: 0 2px 8px rgba(10,29,61,0.04);
        }
        .process-nav {
          border-top: 1px solid #E5E7EB;
          padding: 16px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          gap: 12px;
        }
        .process-nav-btn {
          border-radius: 100px;
          padding: 8px 18px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .process-content-main,
          .process-content-side {
            padding: 28px 24px;
          }
          .process-nav {
            padding: 14px 24px;
          }
        }

        @media (max-width: 768px) {
          .process-section {
            padding: 72px 20px;
          }
          .process-header {
            margin-bottom: 40px;
          }
          .process-tabs-line,
          .process-tabs-progress {
            display: none;
          }
          .process-tab-dot {
            width: 42px;
            height: 42px;
            font-size: 18px;
          }
          .process-tab-label {
            font-size: 11px;
          }
          .process-content {
            grid-template-columns: 1fr;
          }
          .process-content-main {
            border-right: none;
            border-bottom: 1px solid #E5E7EB;
            padding: 24px 20px;
          }
          .process-content-side {
            padding: 24px 20px;
          }
          .process-panel {
            border-radius: 20px;
          }
          .process-nav {
            padding: 14px 16px;
          }
          .process-nav-btn {
            padding: 8px 14px;
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .process-section {
            padding: 56px 16px;
          }
          .process-header {
            margin-bottom: 28px;
          }
          .process-tabs {
            gap: 4px;
          }
          .process-tab-dot {
            width: 38px;
            height: 38px;
            font-size: 16px;
            border-width: 2px;
          }
          .process-content-main,
          .process-content-side {
            padding: 20px 16px;
          }
          .process-deliverable {
            padding: 12px 14px;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
}
