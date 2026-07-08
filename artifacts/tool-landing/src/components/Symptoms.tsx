import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const symptoms = [
  "No sabes exactamente dónde se atoran las ventas.",
  "El equipo comercial atiende demasiadas tareas postventa.",
  "Las áreas trabajan desconectadas entre sí.",
  "Los reportes llegan tarde o incompletos.",
  "El CRM no refleja la realidad del negocio.",
  "Las juntas no terminan en decisiones concretas.",
  "Hay clientes en riesgo que se detectan demasiado tarde.",
  "Los pendientes se persiguen por WhatsApp.",
  "Cada persona tiene su propia forma de trabajar.",
  "La dirección no tiene información confiable para decidir.",
];

export default function Symptoms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sintomas" style={{ background: "#F1F3F6", padding: "96px 24px" }}>
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
            Diagnóstico
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 580,
            margin: "0 auto",
          }}>
            Señales de que necesitas ordenar tu sistema operativo
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 14,
          }}
        >
          {symptoms.map((s, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(10,29,61,0.1)", borderColor: `${PURPLE}40` }}
              data-testid={`symptom-item-${i}`}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 14,
                padding: "20px 20px",
                background: "#fff",
                borderRadius: 16,
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 6px rgba(10,29,61,0.04)",
                transition: "all 0.2s ease",
                cursor: "default",
              }}
            >
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 10,
                background: `${PURPLE}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 1,
              }}>
                <AlertTriangle size={15} color={PURPLE} strokeWidth={2.5} />
              </div>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: NAVY,
                margin: 0,
                lineHeight: 1.6,
              }}>
                {s}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: "0 8px 28px rgba(16,185,129,0.4)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
            data-testid="symptoms-cta"
            style={{
              background: GREEN,
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "14px 32px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              boxShadow: "0 4px 16px rgba(16,185,129,0.3)",
            }}
          >
            Agenda una sesión de diagnóstico
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
