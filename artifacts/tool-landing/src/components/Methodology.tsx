import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const frameworks = [
  {
    id: "agile",
    label: "Agile & Scrum",
    icon: "⚡",
    color: GREEN,
    tagline: "Entrega iterativa, resultados visibles cada sprint.",
    when: "Ideal cuando necesitas velocidad de implementación y quieres ver avances cada 2 semanas.",
    delivers: ["Sprints de trabajo por área", "Backlog priorizado de mejoras", "Retrospectivas de aprendizaje", "Releases predecibles"],
  },
  {
    id: "eos",
    label: "EOS",
    icon: "🧩",
    color: PURPLE,
    tagline: "Alinea a toda la organización hacia una misma dirección.",
    when: "Ideal para empresas de 10-250 personas que quieren un sistema de gestión integral con visión, traction y equipos alineados.",
    delivers: ["Visión compartida documentada", "Rocks trimestrales por área", "Scorecards semanales", "L10 Meetings estructuradas"],
  },
  {
    id: "scalingup",
    label: "Scaling Up",
    icon: "📈",
    color: "#F59E0B",
    tagline: "El sistema para escalar sin que todo dependa del dueño.",
    when: "Ideal cuando la empresa ya tiene tracción y necesita estructura para crecer sin caos.",
    delivers: ["One Page Strategic Plan", "OKRs por equipo", "Ritmo de reuniones por nivel", "Prioridades trimestrales claras"],
  },
  {
    id: "lean",
    label: "Lean",
    icon: "🎯",
    color: "#EF4444",
    tagline: "Elimina todo lo que no agrega valor al cliente.",
    when: "Ideal para operaciones con desperdicios visibles: reprocesos, cuellos de botella, exceso de inventario o esperas.",
    delivers: ["Mapeo de flujo de valor", "Eliminación de desperdicios", "Procesos estandarizados", "Mejora continua instalada"],
  },
];

export default function Methodology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section id="metodologia" style={{ background: "#F7F9FC", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{
            display: "inline-block",
            background: `${PURPLE}12`,
            color: PURPLE,
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "Manrope, sans-serif",
          }}>
            Metodología
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
            color: NAVY,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 640,
            margin: "0 auto 16px",
          }}>
            Marcos probados, adaptados a tu realidad.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            No inventamos metodologías. Tomamos lo mejor de los frameworks globales más efectivos y los adaptamos al contexto de tu empresa.
          </p>
        </motion.div>

        {/* Framework selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap", justifyContent: "center" }}>
            {frameworks.map((f, i) => (
              <motion.button
                key={f.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActive(i)}
                data-testid={`methodology-tab-${f.id}`}
                style={{
                  background: active === i ? f.color : "#fff",
                  color: active === i ? "#fff" : `${NAVY}80`,
                  border: active === i ? `2px solid ${f.color}` : "2px solid #E5E7EB",
                  borderRadius: 100,
                  padding: "10px 22px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  transition: "all 0.2s",
                  boxShadow: active === i ? `0 4px 16px ${f.color}30` : "none",
                }}
              >
                <span>{f.icon}</span>
                <span translate="no">{f.label}</span>
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              style={{
                background: "#fff",
                borderRadius: 28,
                border: `2px solid ${frameworks[active].color}25`,
                overflow: "hidden",
                boxShadow: `0 8px 40px ${frameworks[active].color}12`,
              }}
            >
              {/* Header */}
              <div style={{
                background: `linear-gradient(135deg, ${frameworks[active].color}10, ${frameworks[active].color}04)`,
                padding: "36px 40px",
                borderBottom: `1px solid ${frameworks[active].color}15`,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 18,
                    background: `${frameworks[active].color}15`,
                    border: `1.5px solid ${frameworks[active].color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                  }}>
                    {frameworks[active].icon}
                  </div>
                  <div>
                    <p style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: frameworks[active].color,
                      margin: "0 0 4px",
                    }}>
                      {frameworks[active].label}
                    </p>
                    <h3 style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                      color: NAVY,
                      margin: 0,
                      lineHeight: 1.25,
                    }}>
                      {frameworks[active].tagline}
                    </h3>
                  </div>
                </div>
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: `${NAVY}75`,
                  margin: 0,
                }}>
                  {frameworks[active].when}
                </p>
              </div>

              {/* Deliverables */}
              <div style={{ padding: "32px 40px" }}>
                <p style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: `${NAVY}50`,
                  marginBottom: 20,
                }}>
                  Qué obtienes
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
                  {frameworks[active].delivers.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: `${frameworks[active].color}07`,
                        borderRadius: 12,
                        padding: "12px 16px",
                        border: `1px solid ${frameworks[active].color}15`,
                      }}
                    >
                      <div style={{
                        width: 22,
                        height: 22,
                        borderRadius: "50%",
                        background: frameworks[active].color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
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
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
