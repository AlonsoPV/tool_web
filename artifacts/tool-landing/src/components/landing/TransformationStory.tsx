import { motion } from "framer-motion";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, NAVY, sectionDescStyle, sectionLabelStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

const today = [
  "Ventas por intuición.",
  "Vendedores sin foco por segmento.",
  "Seguimiento informal.",
  "Canales sin estrategia clara.",
  "KPIs aislados.",
  "Inventario estancado poco visible.",
  "Liderazgo resolviendo operación diaria.",
];

const withSystem = [
  "Productos foco.",
  "Segmentos prioritarios.",
  "Pipeline y recompra gestionada.",
  "KPIs por producto, vendedor y canal.",
  "CRM con hábitos claros.",
  "Reuniones comerciales con datos.",
  "Dirección enfocada en estrategia.",
];

export default function TransformationStory() {
  return (
    <SectionShell id="transformacion">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ ...sectionLabelStyle, background: `${GREEN}12`, color: GREEN }}>La transformación</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 680 }}>
          De una operación que depende de personas a una empresa que opera con sistema.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 600 }}>
          El cambio cultural empieza cuando todos entienden qué se está priorizando, por qué importa y cómo se mide.
        </p>
      </div>

      <motion.div
        className="transform-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        <motion.div
          className="transform-col transform-today"
          variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
        >
          <div className="transform-header">
            <span className="transform-badge today">Hoy</span>
            <p className="transform-lead">La empresa se mueve, pero no siempre avanza.</p>
          </div>
          <ul className="transform-list">
            {today.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="transform-bridge" variants={{ hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } }}>
          <div className="transform-bridge-line" />
          <span className="transform-bridge-label">SCRUMBAN + consultoría</span>
          <div className="transform-bridge-line" />
        </motion.div>

        <motion.div
          className="transform-col transform-after"
          variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
        >
          <div className="transform-header">
            <span className="transform-badge after">Con sistema</span>
            <p className="transform-lead">Foco, datos y seguimiento semanal.</p>
          </div>
          <ul className="transform-list">
            {withSystem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      <p className="transform-close">
        La recompra es fuerte, pero necesita gestionarse como estrategia, no como casualidad.
      </p>

      <style>{`
        .transform-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 24px;
          align-items: stretch;
        }
        .transform-col {
          background: #F7F9FC;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 28px 24px;
        }
        .transform-after {
          background: #fff;
          border-color: ${GREEN}30;
          box-shadow: 0 16px 48px rgba(16,185,129,0.08);
        }
        .transform-header { margin-bottom: 20px; }
        .transform-badge {
          display: inline-block;
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 100px;
          margin-bottom: 10px;
        }
        .transform-badge.today {
          background: #FEE2E2;
          color: #DC2626;
        }
        .transform-badge.after {
          background: ${GREEN}15;
          color: ${GREEN};
        }
        .transform-lead {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: ${NAVY};
          margin: 0;
          line-height: 1.4;
        }
        .transform-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .transform-list li {
          font-family: Inter, sans-serif;
          font-size: 14px;
          color: ${NAVY}85;
          padding: 10px 14px;
          background: rgba(255,255,255,0.7);
          border-radius: 10px;
          line-height: 1.45;
        }
        .transform-after .transform-list li {
          background: ${GREEN}08;
          font-weight: 500;
        }
        .transform-bridge {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 8px;
        }
        .transform-bridge-line {
          width: 2px;
          flex: 1;
          min-height: 40px;
          background: linear-gradient(180deg, transparent, ${GREEN}, transparent);
        }
        .transform-bridge-label {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${NAVY}50;
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
        .transform-close {
          text-align: center;
          margin: 40px auto 0;
          max-width: 560px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: ${NAVY}75;
          line-height: 1.5;
          font-style: italic;
        }
        @media (max-width: 768px) {
          .transform-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .transform-bridge {
            flex-direction: row;
            padding: 8px 0;
          }
          .transform-bridge-line {
            width: auto;
            height: 2px;
            flex: 1;
            min-height: 0;
            background: linear-gradient(90deg, transparent, ${GREEN}, transparent);
          }
          .transform-bridge-label {
            writing-mode: horizontal-tb;
            transform: none;
          }
        }
      `}</style>
    </SectionShell>
  );
}
