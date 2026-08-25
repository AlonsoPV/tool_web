import { motion } from "framer-motion";
import { NAVY, GREEN, PURPLE } from "@/lib/landing-theme";

const floatingCards = [
  { label: "Producto foco: Tomografía", x: "-4%", y: "8%", delay: 0.4, color: GREEN },
  { label: "KPI: Recompra activa", x: "68%", y: "6%", delay: 0.55, color: PURPLE },
  { label: "Riesgo: Inventario estancado", x: "62%", y: "72%", delay: 0.7, color: "#EF4444" },
];

export default function DashboardMockup() {
  return (
    <div className="dashboard-mockup-wrap">
      <motion.div
        className="dashboard-mockup"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        <div className="dm-topbar">
          <div className="dm-dots">
            <span /><span /><span />
          </div>
          <span className="dm-title">SCRUMBAN</span>
        </div>

        <div className="dm-body">
          <aside className="dm-sidebar">
            {["OKRs", "KPIs", "Iniciativas"].map((item, i) => (
              <div key={item} className={`dm-nav ${i === 0 ? "active" : ""}`}>
                {item}
              </div>
            ))}
          </aside>

          <main className="dm-main">
            <div className="dm-metrics">
              <div className="dm-metric">
                <span className="dm-metric-label">Avance OKR</span>
                <span className="dm-metric-value">68%</span>
              </div>
              <div className="dm-metric">
                <span className="dm-metric-label">Pipeline</span>
                <span className="dm-metric-value">$2.4M</span>
              </div>
              <div className="dm-metric">
                <span className="dm-metric-label">Iniciativas</span>
                <span className="dm-metric-value">14</span>
              </div>
            </div>

            <div className="dm-panel">
              <div className="dm-panel-head">
                <p className="dm-panel-title">Objetivo comercial Q2</p>
                <span className="dm-panel-meta">Sistema comercial 2026</span>
              </div>
              <div className="dm-progress">
                <div className="dm-progress-fill" style={{ width: "68%" }} />
              </div>
              <div className="dm-krs">
                <div className="dm-kr">Tomografía +18%</div>
                <div className="dm-kr">Recompra +22%</div>
              </div>
            </div>

            <div className="dm-panel dm-panel-risk">
              <p className="dm-panel-title">Seguimiento</p>
              <div className="dm-row">
                <span>Inventario estancado</span>
                <span className="dm-status blocked">Riesgo</span>
              </div>
              <div className="dm-row">
                <span>Capacitación producto foco</span>
                <span className="dm-status">En curso</span>
              </div>
            </div>
          </main>
        </div>
      </motion.div>

      {floatingCards.map((card) => (
        <motion.div
          key={card.label}
          className="dm-float"
          style={{ left: card.x, top: card.y, borderColor: `${card.color}22` }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + card.delay, duration: 0.5, ease: "easeOut" }}
        >
          <motion.span
            className="dm-float-inner"
            animate={{ y: [0, -3, 0] }}
            transition={{ delay: 1.2 + card.delay, duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="dm-float-dot" style={{ background: card.color }} />
            {card.label}
          </motion.span>
        </motion.div>
      ))}

      <style>{`
        .dashboard-mockup-wrap {
          position: relative;
          width: 100%;
          max-width: 520px;
          min-height: 340px;
        }
        .dashboard-mockup {
          position: relative;
          z-index: 2;
          background: #fff;
          border-radius: 16px;
          border: 1px solid #EBEEF2;
          box-shadow: 0 20px 50px rgba(10,29,61,0.08);
          overflow: hidden;
        }
        .dm-topbar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: ${NAVY};
          color: #fff;
        }
        .dm-dots { display: flex; gap: 5px; }
        .dm-dots span {
          width: 7px; height: 7px; border-radius: 50%;
          background: rgba(255,255,255,0.2);
        }
        .dm-title {
          font-family: Manrope, sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          opacity: 0.75;
        }
        .dm-body {
          display: flex;
          min-height: 260px;
        }
        .dm-sidebar {
          width: 72px;
          background: #FAFBFC;
          border-right: 1px solid #F0F2F5;
          padding: 16px 10px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .dm-nav {
          font-family: Manrope, sans-serif;
          font-size: 9px;
          font-weight: 600;
          color: ${NAVY}45;
          padding: 8px 6px;
          border-radius: 8px;
          text-align: center;
        }
        .dm-nav.active {
          background: ${GREEN}10;
          color: ${GREEN};
        }
        .dm-main {
          flex: 1;
          padding: 18px;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .dm-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .dm-metric {
          background: #FAFBFC;
          border-radius: 10px;
          padding: 12px;
        }
        .dm-metric-label {
          display: block;
          font-size: 9px;
          font-weight: 600;
          color: ${NAVY}45;
          font-family: Manrope, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .dm-metric-value {
          display: block;
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 18px;
          color: ${NAVY};
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .dm-panel {
          background: #fff;
          border: 1px solid #F0F2F5;
          border-radius: 12px;
          padding: 14px 16px;
        }
        .dm-panel-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 12px;
        }
        .dm-panel-title {
          font-family: Manrope, sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: ${NAVY};
          margin: 0;
        }
        .dm-panel-meta {
          font-family: Inter, sans-serif;
          font-size: 9px;
          color: ${NAVY}40;
          white-space: nowrap;
        }
        .dm-progress {
          height: 5px;
          background: #F0F2F5;
          border-radius: 100px;
          margin-bottom: 12px;
          overflow: hidden;
        }
        .dm-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, ${GREEN}, ${PURPLE});
          border-radius: 100px;
        }
        .dm-krs {
          display: flex;
          gap: 8px;
        }
        .dm-kr {
          flex: 1;
          font-size: 10px;
          font-family: Inter, sans-serif;
          color: ${NAVY}60;
          padding: 8px 10px;
          background: #FAFBFC;
          border-radius: 8px;
        }
        .dm-panel-risk .dm-panel-title {
          margin-bottom: 10px;
        }
        .dm-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          font-size: 10px;
          font-family: Inter, sans-serif;
          color: ${NAVY}70;
          padding: 8px 0;
          border-bottom: 1px solid #F5F6F8;
        }
        .dm-row:last-child { border-bottom: none; padding-bottom: 0; }
        .dm-row:first-of-type { padding-top: 0; }
        .dm-status {
          font-size: 9px;
          font-weight: 600;
          font-family: Manrope, sans-serif;
          color: ${GREEN};
          white-space: nowrap;
        }
        .dm-status.blocked { color: #DC2626; }
        .dm-float {
          position: absolute;
          z-index: 1;
          opacity: 0.88;
        }
        .dm-float-inner {
          display: flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(6px);
          border: 1px solid;
          border-radius: 100px;
          padding: 6px 12px;
          font-family: Manrope, sans-serif;
          font-size: 10px;
          font-weight: 600;
          color: ${NAVY}90;
          box-shadow: 0 4px 16px rgba(10,29,61,0.06);
          white-space: nowrap;
        }
        .dm-float-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .dashboard-mockup-wrap { min-height: 280px; max-width: 100%; }
          .dm-float { display: none; }
          .dm-sidebar { display: none; }
        }
      `}</style>
    </div>
  );
}
