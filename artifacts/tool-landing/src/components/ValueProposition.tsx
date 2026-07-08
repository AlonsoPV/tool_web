import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const props = [
  {
    icon: "🗺",
    title: "Estrategia que se convierte en acción",
    body: "No planeamos para el archivo. Cada sesión termina con compromisos claros, responsables asignados y fechas definidas.",
    accent: GREEN,
  },
  {
    icon: "⚙️",
    title: "Procesos que el equipo realmente adopta",
    body: "Documentamos, entrenamos y acompañamos. Un proceso que vive solo en PDF no cuenta.",
    accent: PURPLE,
  },
  {
    icon: "📐",
    title: "KPIs que miden lo que importa",
    body: "Definimos los indicadores correctos por área — sin métricas de vanidad ni tableros que nadie consulta.",
    accent: "#F59E0B",
  },
  {
    icon: "🔁",
    title: "Cadencia que genera hábito",
    body: "Instalamos ritmos de gestión: juntas con agenda, revisiones semanales, reportes que se leen.",
    accent: "#EF4444",
  },
  {
    icon: "👁",
    title: "Visibilidad en tiempo real",
    body: "Tableros operativos conectados a tus herramientas actuales para tomar decisiones con información, no con intuición.",
    accent: GREEN,
  },
  {
    icon: "🤝",
    title: "Accountability sin micromanagement",
    body: "El sistema hace el seguimiento, no el dueño. Tu equipo rinde cuentas porque el proceso lo exige.",
    accent: PURPLE,
  },
];

export default function ValueProposition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="propuesta" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
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
            Lo que construimos contigo
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
            color: NAVY,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 640,
            margin: "0 auto 20px",
          }}>
            No estrategia en papel. Un sistema que opera solo.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 560,
            margin: "0 auto",
          }}>
            Entregamos las piezas que hacen que la empresa funcione con claridad, sin depender de heroísmos individuales.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {props.map((p, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{
                y: -6,
                boxShadow: `0 24px 48px rgba(10,29,61,0.10)`,
                borderColor: `${p.accent}40`,
              }}
              data-testid={`value-card-${i}`}
              style={{
                background: "#FAFAFA",
                borderRadius: 24,
                padding: "32px 28px",
                border: "1.5px solid #E8ECF0",
                boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                transition: "all 0.25s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: p.accent,
                  transformOrigin: "left",
                }}
              />

              <div style={{
                width: 52,
                height: 52,
                borderRadius: 16,
                background: `${p.accent}12`,
                border: `1px solid ${p.accent}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 20,
              }}>
                {p.icon}
              </div>

              <h3 style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                color: NAVY,
                marginBottom: 10,
                lineHeight: 1.35,
              }}>
                {p.title}
              </h3>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
                color: `${NAVY}70`,
                margin: 0,
              }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            marginTop: 56,
            textAlign: "center",
            padding: "36px",
            background: `linear-gradient(135deg, ${GREEN}08, ${PURPLE}08)`,
            borderRadius: 24,
            border: `1px solid ${GREEN}18`,
          }}
        >
          <p style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: NAVY,
            lineHeight: 1.6,
            margin: "0 0 8px",
          }}>
            "La meta no es que el equipo trabaje más.<br />Es que trabaje en lo correcto, y lo sepa."
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: `${NAVY}50`,
            margin: 0,
          }}>
            — Principio TOOL
          </p>
        </motion.div>
      </div>
    </section>
  );
}
