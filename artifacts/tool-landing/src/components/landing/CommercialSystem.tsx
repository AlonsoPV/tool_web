import { motion } from "framer-motion";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, NAVY, PURPLE, sectionDescStyle, sectionLabelStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

const modules = [
  {
    title: "Producto foco",
    desc: "No todas las líneas deben empujarse igual.",
    detail: "Identifica qué productos tienen más margen, menor competencia, mayor potencial o necesidad de capacitación.",
    items: ["Tomografía", "Resonancia", "Ultrasonido", "Rayos X", "Mastografía"],
    color: GREEN,
  },
  {
    title: "Segmentación",
    desc: "Deja de venderle a todos con el mismo enfoque.",
    detail: "Ordena clientes por perfil, necesidad, potencial y canal de adquisición.",
    items: ["Médicos radiólogos", "Hospitales", "Distribuidores", "Clientes de recompra", "Nuevos clientes"],
    color: PURPLE,
  },
  {
    title: "Gestión del equipo",
    desc: "Cada vendedor necesita foco, metas y seguimiento.",
    detail: "Define zonas, productos prioritarios, pipeline, comisiones, bonos y seguimiento semanal.",
    items: ["Zonas", "Pipeline", "Comisiones", "Bonos", "Seguimiento semanal"],
    color: "#F59E0B",
  },
  {
    title: "KPIs comerciales",
    desc: "La data debe servir para accionar.",
    detail: "Mide venta por producto, ticket promedio, oportunidades perdidas, recompra, canal e inventario estancado.",
    items: ["Venta por producto", "Ticket promedio", "Ventas perdidas", "Recompra", "Inventario estancado"],
    color: "#EF4444",
  },
];

export default function CommercialSystem() {
  return (
    <SectionShell id="sistema">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ ...sectionLabelStyle, background: `${GREEN}12`, color: GREEN }}>Sistema comercial operativo</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 680 }}>
          Del diagnóstico comercial al sistema operativo de ventas.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 620 }}>
          La empresa necesita conectar producto, cliente, canal, vendedor y seguimiento en un mismo sistema de gestión — no en conversaciones sueltas.
        </p>
      </div>

      <motion.div className="comm-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }}>
        {modules.map((m) => (
          <motion.div
            key={m.title}
            className="comm-card"
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -6, boxShadow: `0 24px 48px ${m.color}18` }}
            style={{ borderColor: `${m.color}20` }}
          >
            <div className="comm-card-head">
              <span className="comm-dot" style={{ background: m.color }} />
              <div>
                <h3 className="comm-title">{m.title}</h3>
                <p className="comm-desc">{m.desc}</p>
              </div>
            </div>
            <p className="comm-detail">{m.detail}</p>
            <div className="comm-tags">
              {m.items.map((item) => (
                <span key={item} className="comm-tag" style={{ background: `${m.color}10`, color: m.color }}>
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="comm-dashboard"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div className="comm-dash-header">
          <span>Vista comercial · ¿Qué línea empujar esta semana?</span>
          <span className="comm-dash-live">Datos accionables</span>
        </div>
        <div className="comm-dash-metrics">
          {[
            { l: "Tomografía vs resonancia", v: "Margen + competencia" },
            { l: "Recompra activa", v: "64 cuentas sin contacto" },
            { l: "Ventas perdidas", v: "Sin clasificar: 23" },
            { l: "Inventario estancado", v: "Visible por línea" },
          ].map((m) => (
            <div key={m.l} className="comm-dash-metric">
              <span>{m.l}</span>
              <strong>{m.v}</strong>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        .comm-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }
        .comm-card {
          background: #fff;
          border: 2px solid;
          border-radius: 20px;
          padding: 24px;
          transition: all 0.25s;
        }
        .comm-card-head {
          display: flex;
          gap: 14px;
          margin-bottom: 12px;
        }
        .comm-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .comm-title {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 16px;
          color: ${NAVY};
          margin: 0 0 4px;
        }
        .comm-desc {
          font-family: Inter, sans-serif;
          font-size: 13px;
          color: ${NAVY};
          font-weight: 600;
          margin: 0;
          line-height: 1.4;
        }
        .comm-detail {
          font-family: Inter, sans-serif;
          font-size: 13px;
          color: ${NAVY}70;
          margin: 0 0 14px;
          line-height: 1.55;
        }
        .comm-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .comm-tag {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 10px;
          padding: 5px 10px;
          border-radius: 100px;
        }
        .comm-dashboard {
          background: ${NAVY};
          border-radius: 20px;
          padding: 24px;
          color: #fff;
        }
        .comm-dash-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 20px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
        }
        .comm-dash-live {
          background: ${GREEN}25;
          color: ${GREEN};
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
        }
        .comm-dash-metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }
        .comm-dash-metric {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 14px;
          padding: 16px;
        }
        .comm-dash-metric span {
          display: block;
          font-size: 11px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 8px;
          font-family: Inter, sans-serif;
          line-height: 1.35;
        }
        .comm-dash-metric strong {
          font-family: Manrope, sans-serif;
          font-size: 15px;
          color: #fff;
          line-height: 1.3;
        }
        @media (max-width: 768px) {
          .comm-grid { grid-template-columns: 1fr; }
          .comm-dash-metrics { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </SectionShell>
  );
}
