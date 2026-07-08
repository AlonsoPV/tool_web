import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const story = [
  {
    phase: "Año 1",
    icon: "🚀",
    title: "Todo funciona a fuerza de voluntad",
    body: "El equipo trabaja duro. El dueño resuelve todo. Las ventas entran porque el producto es bueno y la relación personal jala. El caos es tolerable. Hay energía.",
    tag: "CRECIMIENTO",
    tagColor: GREEN,
  },
  {
    phase: "Año 2-3",
    icon: "⚡",
    title: "Empieza a pesar",
    body: "Ahora hay más gente, más clientes, más procesos... pero los pendientes viven en WhatsApp. Cada área trabaja a su manera. El CRM está desactualizado. Las juntas son largas y no terminan en decisiones.",
    tag: "SEÑAL DE ALERTA",
    tagColor: "#F59E0B",
  },
  {
    phase: "Año 3+",
    icon: "🔥",
    title: "El crecimiento se convierte en desgaste",
    body: "Clientes se van sin que nadie lo detectara a tiempo. El equipo trabaja más horas pero logra menos. La dirección toma decisiones con información incompleta. El negocio depende de ciertas personas — y eso asusta.",
    tag: "PUNTO CRÍTICO",
    tagColor: "#EF4444",
  },
];

const pains = [
  { icon: "📊", label: "Mucha actividad, poca trazabilidad." },
  { icon: "🗓", label: "Muchas juntas, pocas decisiones." },
  { icon: "👤", label: "Muchos pendientes, pocos responsables claros." },
  { icon: "🛠", label: "Muchas herramientas, poca adopción." },
  { icon: "💪", label: "Mucho esfuerzo, poca predictibilidad." },
];

export default function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="problema" style={{ background: "#F1F3F6", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        {/* Header */}
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
            La historia que conocemos bien
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
            color: NAVY,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 680,
            margin: "0 auto 16px",
          }}>
            El problema no es que tu equipo no trabaje. Es que trabaja sin un sistema claro.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}80`,
            maxWidth: 600,
            margin: "0 auto",
          }}>
            Hemos visto la misma historia docenas de veces. Empieza con energía. Termina con desgaste.
          </p>
        </motion.div>

        {/* Story timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          style={{ marginBottom: 64 }}
        >
          {/* Phase tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 0, borderRadius: "20px 20px 0 0", overflow: "hidden", border: "1px solid #E5E7EB", borderBottom: "none" }}>
            {story.map((s, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                data-testid={`story-phase-${i}`}
                style={{
                  flex: 1,
                  background: activePhase === i ? "#fff" : "#F9FAFB",
                  border: "none",
                  borderRight: i < story.length - 1 ? "1px solid #E5E7EB" : "none",
                  padding: "18px 20px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  position: "relative",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: activePhase === i ? s.tagColor : `${NAVY}40`,
                  }}>
                    {s.phase}
                  </span>
                  <span style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: activePhase === i ? NAVY : `${NAVY}60`,
                  }}>
                    {s.title}
                  </span>
                </div>
                {activePhase === i && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: s.tagColor,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "#fff",
                borderRadius: "0 0 20px 20px",
                border: "1px solid #E5E7EB",
                borderTop: "none",
                padding: "36px 40px",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 24, alignItems: "flex-start" }} className="story-inner">
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: `${story[activePhase].tagColor}12`,
                  border: `2px solid ${story[activePhase].tagColor}25`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  flexShrink: 0,
                }}>
                  {story[activePhase].icon}
                </div>
                <div>
                  <span style={{
                    display: "inline-block",
                    background: `${story[activePhase].tagColor}15`,
                    color: story[activePhase].tagColor,
                    borderRadius: 100,
                    padding: "4px 14px",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: 12,
                    fontFamily: "Manrope, sans-serif",
                  }}>
                    {story[activePhase].tag}
                  </span>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.8,
                    color: `${NAVY}85`,
                    margin: 0,
                  }}>
                    {story[activePhase].body}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Symptom cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ marginBottom: 48 }}
        >
          <p style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: `${NAVY}50`,
            textAlign: "center",
            marginBottom: 24,
          }}>
            ¿Te identifies con alguno de estos?
          </p>
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 12 }}
          >
            {pains.map((p, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(10,29,61,0.12)", borderColor: `${GREEN}40` }}
                data-testid={`pain-card-${i}`}
                style={{
                  background: "#fff",
                  borderRadius: 18,
                  padding: "24px 20px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(10,29,61,0.03)",
                  transition: "all 0.2s ease",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: 24 }}>{p.icon}</span>
                <p style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 14,
                  color: NAVY,
                  lineHeight: 1.5,
                  margin: 0,
                }}>
                  {p.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Resolution statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            background: `linear-gradient(135deg, ${NAVY}, #1a3563)`,
            borderRadius: 24,
            padding: "40px 48px",
            display: "flex",
            alignItems: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <p style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
              color: "#fff",
              lineHeight: 1.5,
              margin: "0 0 8px",
            }}>
              TOOL ayuda a convertir ese caos operativo en un sistema de gestión claro, medible y accionable.
            </p>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              color: "rgba(255,255,255,0.6)",
              margin: 0,
              lineHeight: 1.6,
            }}>
              No vendemos documentos. No vendemos teoría. Instalamos el sistema.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 12px 32px rgba(16,185,129,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
            style={{
              background: GREEN,
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "14px 28px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              boxShadow: "0 6px 20px rgba(16,185,129,0.35)",
            }}
          >
            Agenda tu diagnóstico
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .story-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
