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
    <section id="proceso" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
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
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 540,
            margin: "0 auto",
          }}>
            Un proceso claro, sin sorpresas. Sabes en todo momento en qué etapa estás y qué sigue.
          </p>
        </motion.div>

        {/* Step selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
        >
          {/* Timeline connector */}
          <div style={{ position: "relative", marginBottom: 32 }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 16,
              position: "relative",
            }} className="process-tabs">
              {/* Connecting line */}
              <div style={{
                position: "absolute",
                top: 28,
                left: "16%",
                right: "16%",
                height: 2,
                background: "#E5E7EB",
                zIndex: 0,
              }} />
              <motion.div
                style={{
                  position: "absolute",
                  top: 28,
                  left: "16%",
                  height: 2,
                  background: `linear-gradient(90deg, ${GREEN}, ${PURPLE})`,
                  zIndex: 1,
                }}
                animate={{ width: `${(active / 2) * 68}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              {steps.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => setActive(i)}
                  data-testid={`process-step-${i}`}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 10,
                    position: "relative",
                    zIndex: 2,
                    padding: "0 8px",
                  }}
                >
                  <motion.div
                    animate={{
                      background: active >= i ? s.color : "#E5E7EB",
                      scale: active === i ? 1.15 : 1,
                      boxShadow: active === i ? `0 4px 16px ${s.color}40` : "none",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      color: "#fff",
                      border: `3px solid ${active >= i ? s.color : "#E5E7EB"}`,
                    }}
                  >
                    {active > i ? (
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4 10l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : s.icon}
                  </motion.div>
                  <div style={{ textAlign: "center" }}>
                    <p style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 12,
                      color: active >= i ? s.color : `${NAVY}40`,
                      margin: "0 0 2px",
                      transition: "color 0.3s",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}>
                      {s.number}
                    </p>
                    <p style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                      color: active === i ? NAVY : `${NAVY}55`,
                      margin: 0,
                      transition: "color 0.3s",
                    }}>
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
              style={{
                background: "#F7F9FC",
                borderRadius: 28,
                overflow: "hidden",
                border: `2px solid ${steps[active].color}20`,
              }}
            >
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 0,
              }} className="process-content">
                {/* Left */}
                <div style={{ padding: "40px", borderRight: "1px solid #E5E7EB" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
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
                    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                    color: NAVY,
                    marginBottom: 16,
                    lineHeight: 1.3,
                  }}>
                    {steps[active].tagline}
                  </h3>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: `${NAVY}75`,
                    marginBottom: 24,
                  }}>
                    {steps[active].body}
                  </p>
                  <div style={{
                    background: `${steps[active].color}10`,
                    borderLeft: `3px solid ${steps[active].color}`,
                    borderRadius: "0 12px 12px 0",
                    padding: "16px 20px",
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

                {/* Right — deliverables */}
                <div style={{ padding: "40px" }}>
                  <p style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: `${NAVY}50`,
                    marginBottom: 20,
                  }}>
                    Entregables
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {steps[active].deliverables.map((d, i) => (
                      <motion.div
                        key={d}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          background: "#fff",
                          borderRadius: 14,
                          padding: "16px 18px",
                          border: "1px solid #E8ECF0",
                          boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                        }}
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

              {/* Navigation */}
              <div style={{
                borderTop: "1px solid #E5E7EB",
                padding: "20px 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff",
              }}>
                <button
                  onClick={() => setActive(Math.max(0, active - 1))}
                  disabled={active === 0}
                  style={{
                    background: "none",
                    border: "1px solid #E5E7EB",
                    borderRadius: 100,
                    padding: "8px 20px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
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
                  style={{
                    background: active < steps.length - 1 ? steps[active].color : "#E5E7EB",
                    border: "none",
                    borderRadius: 100,
                    padding: "8px 20px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
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
        @media (max-width: 768px) {
          .process-content { grid-template-columns: 1fr !important; }
          .process-content > div:first-child { border-right: none !important; border-bottom: 1px solid #E5E7EB; }
          .process-tabs > div:nth-child(2) { display: none; }
        }
      `}</style>
    </section>
  );
}
