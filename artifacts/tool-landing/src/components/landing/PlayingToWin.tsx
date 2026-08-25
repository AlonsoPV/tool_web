import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, NAVY, PURPLE, sectionDescStyle, sectionLabelStyle, sectionTitleStyle } from "@/lib/landing-theme";

const steps = [
  {
    num: "01",
    title: "Aspiración ganadora",
    subtitle: "Qué queremos lograr.",
    examples: [
      "Construir una operación comercial más autónoma, enfocada y basada en datos.",
      "Crecer sin depender del liderazgo diario para que el sistema funcione.",
      "Usar data para accionar, no solo para reportar al final del mes.",
    ],
    color: GREEN,
  },
  {
    num: "02",
    title: "Dónde jugar",
    subtitle: "Qué clientes, productos y canales vamos a priorizar.",
    examples: [
      "Definir si el foco estará en tomografía, resonancia, recompra, hospitales, distribuidores o médicos radiólogos.",
      "Dejar de tratar todos los segmentos con el mismo esfuerzo comercial.",
      "Priorizar líneas con mayor margen y menor competencia.",
    ],
    color: PURPLE,
  },
  {
    num: "03",
    title: "Cómo ganar",
    subtitle: "Qué nos hace diferentes.",
    examples: [
      "Servicio técnico, conocimiento especializado y relación cercana.",
      "Flexibilidad y experiencia en equipos nuevos y reacondicionados.",
      "Recompra gestionada como ventaja, no como casualidad.",
    ],
    color: "#F59E0B",
  },
  {
    num: "04",
    title: "Capacidades necesarias",
    subtitle: "Qué debe desarrollar la empresa.",
    examples: [
      "CRM con hábitos claros: registrar, clasificar y dar seguimiento.",
      "Capacitación por producto y clasificación de oportunidades perdidas.",
      "KPIs comerciales y gestión de inventario estancado.",
    ],
    color: "#EF4444",
  },
  {
    num: "05",
    title: "Sistema de gestión",
    subtitle: "Cómo se sostiene la ejecución.",
    examples: [
      "OKRs trimestrales conectados a decisiones comerciales.",
      "Reuniones comerciales con datos, no solo con opiniones.",
      "Tableros, responsables, bonos y cadencias de seguimiento semanal.",
    ],
    color: GREEN,
  },
];

export default function PlayingToWin() {
  const [active, setActive] = useState(0);

  return (
    <SectionShell id="playing-to-win">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ ...sectionLabelStyle, background: `${PURPLE}12`, color: PURPLE }}>Playing to Win</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 680 }}>
          Primero decide dónde competir. Después construye cómo ganar.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 640 }}>
          Playing to Win evita que la estrategia se vuelva una lista de buenas ideas. Obliga a tomar decisiones: qué mercado priorizar, con qué productos, para qué clientes, con qué diferenciador y con qué capacidades.
        </p>
      </div>

      <div className="ptw-timeline">
        <div className="ptw-tabs">
          {steps.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              className={`ptw-tab ${active === i ? "active" : ""}`}
              style={{ borderColor: active === i ? s.color : "#E5E7EB" }}
            >
              <span className="ptw-tab-num" style={{ color: active === i ? s.color : `${NAVY}40` }}>{s.num}</span>
              <span className="ptw-tab-title">{s.title}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35 }}
            className="ptw-panel"
            style={{ borderColor: `${steps[active].color}30` }}
          >
            <div className="ptw-panel-head">
              <span className="ptw-badge" style={{ background: `${steps[active].color}15`, color: steps[active].color }}>
                {steps[active].num}
              </span>
              <div>
                <h3 className="ptw-panel-title">{steps[active].title}</h3>
                <p className="ptw-panel-sub">{steps[active].subtitle}</p>
              </div>
            </div>
            <ul className="ptw-examples">
              {steps[active].examples.map((ex, i) => (
                <motion.li
                  key={ex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  {ex}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .ptw-timeline { max-width: 900px; margin: 0 auto; }
        .ptw-tabs {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 8px;
          margin-bottom: 20px;
          scrollbar-width: none;
        }
        .ptw-tabs::-webkit-scrollbar { display: none; }
        .ptw-tab {
          flex: 1;
          min-width: 120px;
          background: #F7F9FC;
          border: 2px solid #E5E7EB;
          border-radius: 14px;
          padding: 14px 12px;
          cursor: pointer;
          transition: all 0.2s;
          text-align: center;
        }
        .ptw-tab.active { background: #fff; box-shadow: 0 8px 24px rgba(10,29,61,0.08); }
        .ptw-tab-num {
          display: block;
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.08em;
          margin-bottom: 4px;
        }
        .ptw-tab-title {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          color: ${NAVY};
          line-height: 1.25;
        }
        .ptw-panel {
          background: #fff;
          border: 2px solid;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 12px 40px rgba(10,29,61,0.06);
        }
        .ptw-panel-head {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 24px;
        }
        .ptw-badge {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 12px;
          padding: 8px 12px;
          border-radius: 10px;
          flex-shrink: 0;
        }
        .ptw-panel-title {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          color: ${NAVY};
          margin: 0 0 6px;
        }
        .ptw-panel-sub {
          font-family: Inter, sans-serif;
          font-size: 14px;
          color: ${NAVY}70;
          margin: 0;
          line-height: 1.5;
        }
        .ptw-examples {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ptw-examples li {
          font-family: Inter, sans-serif;
          font-size: 14px;
          color: ${NAVY}85;
          padding: 12px 16px;
          background: #F7F9FC;
          border-radius: 12px;
          border-left: 3px solid ${GREEN};
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .ptw-panel { padding: 22px 18px; }
          .ptw-tab { min-width: 100px; padding: 12px 8px; }
        }
      `}</style>
    </SectionShell>
  );
}
