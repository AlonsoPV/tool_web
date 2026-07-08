import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Target, TrendingUp, Leaf } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const methods = [
  {
    icon: Zap,
    label: "Agile & Scrum",
    desc: "Ciclos cortos de trabajo para priorizar mejor, revisar avances constantemente y adaptarse rápido a los cambios.",
    color: GREEN,
  },
  {
    icon: Target,
    label: "EOS",
    desc: "Accountability claro, reuniones efectivas, scorecards y claridad de responsabilidades en todos los niveles.",
    color: PURPLE,
  },
  {
    icon: TrendingUp,
    label: "Scaling Up",
    desc: "Alineación de prioridades trimestrales, métricas de liderazgo y modelos de ejecución para crecer sin caos.",
    color: GREEN,
  },
  {
    icon: Leaf,
    label: "Lean / Mejora continua",
    desc: "Eliminamos desperdicios, reducimos retrabajo, detectamos causas raíz y mejoramos procesos de forma sistemática.",
    color: PURPLE,
  },
];

export default function Methodology() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="metodologia" style={{ background: "#F1F3F6", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{
            display: "inline-block",
            background: `${PURPLE}15`,
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
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 640,
            margin: "0 auto",
          }}>
            Nuestra metodología combina estrategia, procesos y ejecución ágil.
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          <div
            className="method-connector"
            style={{
              position: "absolute",
              top: "50%",
              left: "12%",
              right: "12%",
              height: 2,
              background: `linear-gradient(to right, ${GREEN}40, ${PURPLE}40, ${GREEN}40, ${PURPLE}40)`,
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          />

          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
              position: "relative",
              zIndex: 1,
            }}
            className="method-grid"
          >
            {methods.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(10,29,61,0.12)" }}
                  data-testid={`method-card-${i}`}
                  style={{
                    background: "#fff",
                    borderRadius: 24,
                    padding: "32px 24px",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                    transition: "box-shadow 0.2s",
                    textAlign: "center",
                    cursor: "default",
                  }}
                >
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${m.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    border: `1px solid ${m.color}25`,
                  }}>
                    <Icon size={24} color={m.color} strokeWidth={2} />
                  </div>
                  <h3 style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    color: NAVY,
                    marginBottom: 12,
                  }}>
                    {m.label}
                  </h3>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13.5,
                    lineHeight: 1.7,
                    color: `${NAVY}80`,
                    margin: 0,
                  }}>
                    {m.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: 48,
            padding: "24px 32px",
            background: `linear-gradient(135deg, ${NAVY}08, ${PURPLE}08)`,
            borderRadius: 20,
            border: `1px solid ${NAVY}12`,
          }}
        >
          <p style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: NAVY,
            margin: 0,
            fontStyle: "italic",
          }}>
            "No usamos metodologías como teoría. Las adaptamos a la realidad de cada empresa para construir un sistema práctico, entendible y sostenible."
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .method-grid { grid-template-columns: 1fr 1fr !important; }
          .method-connector { display: none; }
        }
        @media (max-width: 480px) {
          .method-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
