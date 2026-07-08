import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardList, Layers, TrendingUp } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Diagnóstico",
    desc: "Entendemos la operación actual, entrevistamos áreas clave, identificamos dolores y causas raíz.",
    deliverables: ["Mapa de hallazgos", "Insights accionables", "Causas raíz", "Prioridades iniciales"],
    color: GREEN,
  },
  {
    icon: Layers,
    number: "02",
    title: "Diseño del sistema",
    desc: "Convertimos el diagnóstico en procesos, responsables, KPIs, cadencias y un roadmap de implementación.",
    deliverables: ["Proceso actual vs ideal", "Plan 30/60/90", "KPIs", "Gantt", "Cadencia de gestión", "Quick wins"],
    color: PURPLE,
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Implementación y optimización",
    desc: "Acompañamos la adopción del modelo, revisamos avances, medimos resultados y ajustamos el sistema.",
    deliverables: ["Reuniones de seguimiento", "Dashboard operativo", "Reportes ejecutivos", "Retrospectivas", "Mejora continua"],
    color: GREEN,
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="proceso" style={{ background: "#F1F3F6", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block",
            background: `${NAVY}10`,
            color: NAVY,
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "Manrope, sans-serif",
          }}>
            Proceso de trabajo
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 560,
            margin: "0 auto",
          }}>
            De diagnóstico a sistema en tres etapas
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div
            className="process-line"
            style={{
              position: "absolute",
              top: 52,
              left: "16.66%",
              right: "16.66%",
              height: 2,
              background: `linear-gradient(to right, ${GREEN}, ${PURPLE}, ${GREEN})`,
              zIndex: 0,
            }}
          />

          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 24,
              position: "relative",
              zIndex: 1,
            }}
            className="process-grid"
          >
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
                  data-testid={`process-step-${i}`}
                >
                  <div style={{ textAlign: "center", marginBottom: 24 }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: s.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      boxShadow: `0 8px 24px ${s.color}40`,
                    }}>
                      <Icon size={26} color="#fff" strokeWidth={2} />
                    </div>
                    <span style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 800,
                      fontSize: 11,
                      letterSpacing: "0.15em",
                      color: s.color,
                      textTransform: "uppercase",
                    }}>
                      Etapa {s.number}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(10,29,61,0.12)" }}
                    style={{
                      background: "#fff",
                      borderRadius: 24,
                      padding: "28px 24px",
                      border: "1px solid #E5E7EB",
                      boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                      transition: "box-shadow 0.2s",
                    }}
                  >
                    <h3 style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 800,
                      fontSize: 19,
                      color: NAVY,
                      marginBottom: 12,
                    }}>
                      {s.title}
                    </h3>
                    <p style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: `${NAVY}80`,
                      marginBottom: 20,
                    }}>
                      {s.desc}
                    </p>
                    <div style={{
                      borderTop: "1px solid #E5E7EB",
                      paddingTop: 16,
                    }}>
                      <p style={{
                        fontFamily: "Manrope, sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: s.color,
                        marginBottom: 10,
                      }}>
                        Entregables
                      </p>
                      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {s.deliverables.map((d, j) => (
                          <li key={j} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                            <span style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: `${NAVY}70` }}>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .process-line { display: none; }
        }
      `}</style>
    </section>
  );
}
