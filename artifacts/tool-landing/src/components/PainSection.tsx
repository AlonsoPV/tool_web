import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";

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
    <section id="problema" className="pain-section" style={{ background: "#F1F3F6" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="pain-header"
          style={{ textAlign: "center" }}
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
            fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)",
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
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            lineHeight: 1.75,
            color: `${NAVY}80`,
            maxWidth: 600,
            margin: "0 auto",
          }}>
            Hemos visto la misma historia docenas de veces. Empieza con energía. Termina con desgaste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="pain-story"
        >
          <div className="pain-story-tabs">
            {story.map((s, i) => (
              <button
                key={i}
                onClick={() => setActivePhase(i)}
                data-testid={`story-phase-${i}`}
                className="pain-story-tab"
                style={{
                  background: activePhase === i ? "#fff" : "#F9FAFB",
                  borderRight: i < story.length - 1 ? "1px solid #E5E7EB" : "none",
                }}
              >
                <span
                  className="pain-story-phase"
                  style={{ color: activePhase === i ? s.tagColor : `${NAVY}40` }}
                >
                  {s.phase}
                </span>
                <span
                  className="pain-story-title"
                  style={{ color: activePhase === i ? NAVY : `${NAVY}60` }}
                >
                  {s.title}
                </span>
                {activePhase === i && (
                  <motion.div
                    layoutId="activeTab"
                    className="pain-story-indicator"
                    style={{ background: s.tagColor }}
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
              className="pain-story-body"
            >
              <div className="story-inner">
                <div
                  className="pain-story-icon"
                  style={{
                    background: `${story[activePhase].tagColor}12`,
                    border: `2px solid ${story[activePhase].tagColor}25`,
                  }}
                >
                  {story[activePhase].icon}
                </div>
                <div style={{ minWidth: 0 }}>
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
                    fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
                    lineHeight: 1.75,
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="pain-symptoms"
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
            className="pain-grid"
          >
            {pains.map((p, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(10,29,61,0.12)", borderColor: `${GREEN}40` }}
                data-testid={`pain-card-${i}`}
                className="pain-card"
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

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="pain-cta"
          style={{
            background: `linear-gradient(135deg, ${NAVY}, #1a3563)`,
          }}
        >
          <div className="pain-cta-copy">
            <p style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.05rem, 3.2vw, 1.35rem)",
              color: "#fff",
              lineHeight: 1.45,
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
            className="pain-cta-btn"
            style={{
              background: GREEN,
              color: "#fff",
              border: "none",
              boxShadow: "0 6px 20px rgba(16,185,129,0.35)",
            }}
          >
            Agenda tu diagnóstico
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .pain-section {
          padding: 96px 24px;
        }
        .pain-header {
          margin-bottom: 64px;
        }
        .pain-story {
          margin-bottom: 64px;
        }
        .pain-story-tabs {
          display: flex;
          margin-bottom: 0;
          border-radius: 20px 20px 0 0;
          overflow: hidden;
          border: 1px solid #E5E7EB;
          border-bottom: none;
        }
        .pain-story-tab {
          flex: 1;
          border: none;
          padding: 18px 16px;
          cursor: pointer;
          transition: all 0.2s;
          position: relative;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .pain-story-phase {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .pain-story-title {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          line-height: 1.3;
          text-align: center;
        }
        .pain-story-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
        }
        .pain-story-body {
          background: #fff;
          border-radius: 0 0 20px 20px;
          border: 1px solid #E5E7EB;
          border-top: none;
          padding: 36px 40px;
        }
        .story-inner {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 24px;
          align-items: flex-start;
        }
        .pain-story-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          flex-shrink: 0;
        }
        .pain-symptoms {
          margin-bottom: 48px;
        }
        .pain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 190px), 1fr));
          gap: 12px;
        }
        .pain-card {
          background: #fff;
          border-radius: 18px;
          padding: 24px 20px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 2px 8px rgba(10,29,61,0.03);
          transition: all 0.2s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
        }
        .pain-cta {
          border-radius: 24px;
          padding: 40px 48px;
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .pain-cta-copy {
          flex: 1;
          min-width: 0;
        }
        .pain-cta-btn {
          border-radius: 100px;
          padding: 14px 28px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
        }

        @media (max-width: 900px) {
          .pain-story-body {
            padding: 28px 24px;
          }
          .pain-cta {
            padding: 28px 28px;
            gap: 24px;
          }
        }

        @media (max-width: 768px) {
          .pain-section {
            padding: 72px 20px;
          }
          .pain-header {
            margin-bottom: 40px;
          }
          .pain-story {
            margin-bottom: 40px;
          }
          .pain-story-tab {
            padding: 14px 8px;
          }
          .pain-story-title {
            display: none;
          }
          .pain-story-body {
            padding: 22px 18px;
            border-radius: 0 0 16px 16px;
          }
          .pain-story-tabs {
            border-radius: 16px 16px 0 0;
          }
          .story-inner {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .pain-story-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            font-size: 24px;
          }
          .pain-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .pain-card {
            flex-direction: row;
            align-items: center;
            padding: 16px 18px;
            border-radius: 14px;
            gap: 14px;
          }
          .pain-cta {
            flex-direction: column;
            align-items: stretch;
            padding: 24px 20px;
            border-radius: 20px;
            gap: 20px;
            text-align: left;
          }
          .pain-cta-btn {
            width: 100%;
            white-space: normal;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .pain-section {
            padding: 56px 16px;
          }
          .pain-header {
            margin-bottom: 28px;
          }
          .pain-story-phase {
            font-size: 10px;
          }
          .pain-story-body {
            padding: 18px 14px;
          }
          .pain-cta {
            padding: 20px 16px;
          }
        }
      `}</style>
    </section>
  );
}
