import { motion } from "framer-motion";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, LIGHT_BG, NAVY, PURPLE, sectionDescStyle, sectionLabelStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

const flow = [
  { label: "Decisión estratégica", desc: "Priorizar líneas de mayor margen.", color: PURPLE },
  { label: "Objetivo", desc: "Profesionalizar gestión comercial 2026.", color: NAVY },
  { label: "Key Results", desc: "Clasificar 100% de oportunidades.", color: GREEN },
  { label: "Iniciativas", desc: "Capacitación, pipeline, tablero.", color: "#F59E0B" },
  { label: "Responsable", desc: "Dirección Comercial + vendedores.", color: NAVY },
  { label: "KPI", desc: "Recompra, venta perdida, avance por producto.", color: GREEN },
  { label: "Revisión semanal", desc: "Cadencia con datos accionables.", color: PURPLE },
];

const example = {
  decision: "Priorizar líneas de mayor margen y menor competencia.",
  objective: "Profesionalizar la gestión comercial 2026.",
  krs: [
    "Clasificar 100% de oportunidades por segmento y línea.",
    "Implementar CRM con uso semanal por vendedor.",
    "Medir recompra, venta perdida y avance por producto.",
  ],
  initiatives: ["Capacitación por producto foco", "Pipeline comercial", "Tablero de seguimiento", "Reuniones comerciales semanales"],
};

export default function StrategyToOKRs() {
  return (
    <SectionShell id="okrs" style={{ background: LIGHT_BG }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ ...sectionLabelStyle, background: `${GREEN}12`, color: GREEN }}>Traducción operativa</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 640 }}>
          Los OKRs no reemplazan la estrategia. La vuelven ejecutable.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 620 }}>
          Primero se decide qué transformar. Después los OKRs convierten esa decisión en objetivos trimestrales, resultados medibles e iniciativas concretas.
        </p>
      </div>

      <motion.div
        className="flow-track"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {flow.map((step, i) => (
          <motion.div
            key={step.label}
            className="flow-step"
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { delay: i * 0.08 } } }}
          >
            {i > 0 && <div className="flow-connector" aria-hidden="true" />}
            <div className="flow-card" style={{ borderColor: `${step.color}25` }}>
              <span className="flow-dot" style={{ background: step.color }} />
              <h3 className="flow-label">{step.label}</h3>
              <p className="flow-desc">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="okr-example"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <p className="okr-example-label">Ejemplo concreto</p>
        <div className="okr-example-grid">
          <div className="okr-block">
            <span className="okr-block-tag">Decisión</span>
            <p>{example.decision}</p>
          </div>
          <div className="okr-block">
            <span className="okr-block-tag">Objetivo</span>
            <p>{example.objective}</p>
          </div>
          <div className="okr-block okr-block-wide">
            <span className="okr-block-tag">Key Results</span>
            <ul>
              {example.krs.map((kr) => (
                <li key={kr}>{kr}</li>
              ))}
            </ul>
          </div>
          <div className="okr-block okr-block-wide">
            <span className="okr-block-tag">Iniciativas</span>
            <div className="okr-tags">
              {example.initiatives.map((init) => (
                <span key={init} className="okr-tag">{init}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <p className="flow-quote">
        Lo que no se clasifica, no se puede mejorar. Lo que no se mide semanalmente, se vuelve intuición.
      </p>

      <style>{`
        .flow-track {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
          max-width: 100%;
          margin: 0 auto 40px;
          overflow-x: auto;
          padding-bottom: 8px;
        }
        .flow-step {
          position: relative;
          flex: 0 0 auto;
          min-width: 120px;
          max-width: 140px;
          display: flex;
          align-items: center;
        }
        .flow-connector {
          position: absolute;
          left: -8px;
          top: 50%;
          width: 16px;
          height: 2px;
          background: linear-gradient(90deg, ${GREEN}, ${PURPLE});
          transform: translateY(-50%);
        }
        .flow-card {
          background: #fff;
          border: 2px solid;
          border-radius: 14px;
          padding: 16px 12px;
          text-align: center;
          width: 100%;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .flow-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(10,29,61,0.08);
        }
        .flow-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: block;
          margin: 0 auto 10px;
        }
        .flow-label {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 11px;
          color: ${NAVY};
          margin: 0 0 6px;
          line-height: 1.25;
        }
        .flow-desc {
          font-family: Inter, sans-serif;
          font-size: 10px;
          color: ${NAVY}70;
          margin: 0;
          line-height: 1.4;
        }
        .okr-example {
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 20px;
          padding: 28px 24px;
          max-width: 900px;
          margin: 0 auto 32px;
        }
        .okr-example-label {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${GREEN};
          margin: 0 0 20px;
        }
        .okr-example-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .okr-block {
          background: #F7F9FC;
          border-radius: 12px;
          padding: 16px;
        }
        .okr-block-wide { grid-column: 1 / -1; }
        .okr-block-tag {
          display: block;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${NAVY}50;
          margin-bottom: 8px;
        }
        .okr-block p {
          font-family: Inter, sans-serif;
          font-size: 14px;
          color: ${NAVY}85;
          margin: 0;
          line-height: 1.5;
        }
        .okr-block ul {
          margin: 0;
          padding-left: 18px;
          font-family: Inter, sans-serif;
          font-size: 13px;
          color: ${NAVY}85;
          line-height: 1.6;
        }
        .okr-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .okr-tag {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          background: ${GREEN}12;
          color: ${GREEN};
          padding: 6px 12px;
          border-radius: 100px;
        }
        .flow-quote {
          text-align: center;
          margin: 0 auto;
          max-width: 560px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: ${NAVY}75;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .flow-track { flex-direction: column; align-items: stretch; gap: 10px; }
          .flow-step { max-width: none; }
          .flow-connector { display: none; }
          .okr-example-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </SectionShell>
  );
}
