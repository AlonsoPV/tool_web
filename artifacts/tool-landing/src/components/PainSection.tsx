import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";

const pains = [
  { label: "Mucha actividad, poca trazabilidad." },
  { label: "Muchas juntas, pocas decisiones." },
  { label: "Muchos pendientes, pocos responsables claros." },
  { label: "Muchas herramientas, poca adopción." },
  { label: "Mucho esfuerzo, poca predictibilidad." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problema" style={{ background: "#F1F3F6", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            El problema real
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 680,
            margin: "0 auto 24px",
          }}>
            El problema no es que tu equipo no trabaje. El problema es que trabaja sin un sistema claro.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}90`,
            maxWidth: 680,
            margin: "0 auto",
          }}>
            Muchas empresas crecen a base de esfuerzo, urgencia y talento individual. Al principio funciona. Pero conforme el negocio crece, aparecen los mismos síntomas: juntas sin seguimiento, pendientes que se pierden, clientes sin dueño claro, áreas desconectadas, CRM incompleto y decisiones tomadas con información parcial.
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}90`,
            maxWidth: 680,
            margin: "16px auto 0",
          }}>
            El resultado no es solo desorden. Es pérdida de ventas, desgaste del equipo, clientes en riesgo y una dirección que no tiene visibilidad real de lo que está pasando.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {pains.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(10,29,61,0.12)" }}
              data-testid={`pain-card-${i}`}
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "28px 24px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                transition: "box-shadow 0.2s",
                cursor: "default",
              }}
            >
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: `${GREEN}15`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 16,
              }}>
                <span style={{ fontSize: 16, color: GREEN }}>⚡</span>
              </div>
              <p style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: NAVY,
                lineHeight: 1.5,
                margin: 0,
              }}>
                {p.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: 48,
            padding: "28px 32px",
            background: "#fff",
            borderRadius: 20,
            border: `1px solid ${GREEN}30`,
            boxShadow: `0 0 0 4px ${GREEN}08`,
          }}
        >
          <p style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: NAVY,
            margin: 0,
          }}>
            TOOL ayuda a convertir ese caos operativo en un sistema de gestión claro, medible y accionable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
