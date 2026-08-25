import { motion } from "framer-motion";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, PURPLE, sectionDescStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

const benefits = [
  "Más foco comercial — cada vendedor sabe qué empujar.",
  "Mejor uso del CRM — hábitos claros, no solo licencias.",
  "Recompra gestionada como estrategia, no como casualidad.",
  "Inventario estancado visible por línea de producto.",
  "Vendedores con prioridades claras por segmento y zona.",
  "KPIs conectados a decisiones semanales.",
  "Dirección comercial menos reactiva.",
  "Mejor comunicación entre ventas y operación.",
  "Menos dependencia del liderazgo diario.",
  "Cultura de ejecución medible, no solo de esfuerzo.",
];

export default function ImpactSection() {
  return (
    <SectionShell id="impacto" dark maxWidth={1100}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span className="impact-label">Estado deseado</span>
        <h2 style={{ ...sectionTitleStyle, color: "#fff", maxWidth: 680 }}>
          Una empresa que sabe dónde competir, cómo ganar y qué debe mejorar cada semana.
        </h2>
        <p style={{ ...sectionDescStyle, color: "rgba(255,255,255,0.65)", maxWidth: 560 }}>
          De operación reactiva a cultura comercial medible.
        </p>
      </div>

      <motion.div className="impact-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        {benefits.map((b, i) => (
          <motion.div
            key={b}
            className="impact-card"
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
          >
            <span className="impact-num" style={{ color: i % 2 === 0 ? GREEN : PURPLE }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            {b}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="impact-stats"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {[
          { label: "Foco comercial", value: "Definido" },
          { label: "Seguimiento", value: "Semanal" },
          { label: "Decisiones", value: "Con datos" },
        ].map((s) => (
          <div key={s.label} className="impact-stat">
            <span className="impact-stat-value">{s.value}</span>
            <span className="impact-stat-label">{s.label}</span>
          </div>
        ))}
      </motion.div>

      <style>{`
        .impact-label {
          display: inline-block;
          background: rgba(255,255,255,0.08);
          color: ${GREEN};
          border-radius: 100px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 20px;
          font-family: Manrope, sans-serif;
        }
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-bottom: 40px;
        }
        .impact-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 16px 18px;
          font-family: Manrope, sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: rgba(255,255,255,0.85);
          line-height: 1.45;
        }
        .impact-num {
          font-weight: 800;
          font-size: 12px;
          flex-shrink: 0;
        }
        .impact-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding-top: 32px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .impact-stat {
          text-align: center;
          padding: 20px;
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
        }
        .impact-stat-value {
          display: block;
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          color: #fff;
          margin-bottom: 6px;
        }
        .impact-stat-label {
          font-family: Inter, sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
        }
        @media (max-width: 768px) {
          .impact-grid { grid-template-columns: 1fr; }
          .impact-stats { grid-template-columns: 1fr; }
        }
      `}</style>
    </SectionShell>
  );
}
