import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  TrendingUp,
  ListTodo,
  Users,
  Eye,
  CalendarDays,
  AlertTriangle,
  FileBarChart,
  type LucideIcon,
} from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, NAVY, PURPLE, sectionDescStyle, sectionLabelStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

type Module = {
  id: string;
  label: string;
  desc: string;
  detail: string;
  Icon: LucideIcon;
  color: string;
};

const modules: Module[] = [
  {
    id: "okrs",
    label: "OKRs",
    desc: "Traducen la estrategia en prioridades trimestrales.",
    detail: "Conecta aspiración ganadora con objetivos medibles por trimestre.",
    Icon: Target,
    color: GREEN,
  },
  {
    id: "kpis",
    label: "KPIs",
    desc: "Muestran si las decisiones generan avance real.",
    detail: "Venta por producto, recompra, pipeline y conversión en una vista.",
    Icon: TrendingUp,
    color: PURPLE,
  },
  {
    id: "iniciativas",
    label: "Iniciativas",
    desc: "Aterrizan la estrategia en trabajo concreto.",
    detail: "Cada acción con responsable, fecha límite y métrica de éxito.",
    Icon: ListTodo,
    color: "#F59E0B",
  },
  {
    id: "crm",
    label: "CRM",
    desc: "Conecta pipeline, segmentación y seguimiento.",
    detail: "Un flujo comercial donde registrar y clasificar es hábito, no tarea extra.",
    Icon: Users,
    color: NAVY,
  },
  {
    id: "seguimiento",
    label: "Seguimiento",
    desc: "Evita que los acuerdos se pierdan post-junta.",
    detail: "Trazabilidad semanal de compromisos, avances y pendientes.",
    Icon: Eye,
    color: GREEN,
  },
  {
    id: "reuniones",
    label: "Reuniones",
    desc: "Cadencias comerciales con datos, no opiniones.",
    detail: "L10, pipeline review y seguimiento de OKRs con agenda estructurada.",
    Icon: CalendarDays,
    color: PURPLE,
  },
  {
    id: "bloqueos",
    label: "Bloqueos",
    desc: "Detecta obstáculos antes de que escalen.",
    detail: "Alertas visibles cuando una iniciativa o KPI se detiene.",
    Icon: AlertTriangle,
    color: "#EF4444",
  },
  {
    id: "reportes",
    label: "Reportes",
    desc: "Convierte operación en decisiones.",
    detail: "Dashboards accionables para dirección comercial y operación.",
    Icon: FileBarChart,
    color: NAVY,
  },
];

export default function PlatformModules() {
  const [active, setActive] = useState(modules[0].id);
  const activeModule = modules.find((m) => m.id === active) ?? modules[0];
  const ActiveIcon = activeModule.Icon;

  return (
    <SectionShell id="modulos" className="mod-section">
      <div className="mod-mesh" aria-hidden="true" />

      <div style={{ textAlign: "center", marginBottom: 40, position: "relative" }}>
        <span style={{ ...sectionLabelStyle, background: `${PURPLE}12`, color: PURPLE }}>El tablero como sistema</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 640 }}>
          Todo lo que necesitas para sostener la ejecución.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 540 }}>
          Una sola vista para conectar estrategia, OKRs, KPIs, iniciativas, responsables y seguimiento.
        </p>
      </div>

      {/* Hub nav — pills interactivos */}
      <div className="mod-hub-nav" role="tablist" aria-label="Módulos del tablero">
        {modules.map((m) => {
          const Icon = m.Icon;
          const isActive = active === m.id;
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`module-panel-${m.id}`}
              data-testid={`module-tab-${m.id}`}
              className={`mod-hub-pill ${isActive ? "active" : ""}`}
              onClick={() => setActive(m.id)}
              style={{
                borderColor: isActive ? m.color : "#E5E7EB",
                background: isActive ? `${m.color}10` : "#fff",
                color: isActive ? m.color : `${NAVY}70`,
              }}
            >
              <Icon size={14} strokeWidth={2.2} />
              {m.label}
            </button>
          );
        })}
      </div>

      {/* Panel destacado del módulo activo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          id={`module-panel-${active}`}
          role="tabpanel"
          className="mod-featured"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ borderColor: `${activeModule.color}30` }}
        >
          <div className="mod-featured-icon" style={{ background: `${activeModule.color}12`, borderColor: `${activeModule.color}25` }}>
            <ActiveIcon size={28} color={activeModule.color} strokeWidth={2} />
          </div>
          <div className="mod-featured-body">
            <div className="mod-featured-meta">
              <span className="mod-featured-badge" style={{ background: `${activeModule.color}15`, color: activeModule.color }}>
                Módulo activo
              </span>
              <span className="mod-featured-id">scrumban / {activeModule.id}</span>
            </div>
            <h3 className="mod-featured-title">{activeModule.label}</h3>
            <p className="mod-featured-desc">{activeModule.detail}</p>
          </div>
          <div className="mod-featured-status">
            <span className="mod-status-dot" style={{ background: GREEN }} />
            Conectado al sistema
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Grid de módulos */}
      <motion.div
        className="mod-grid"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        {modules.map((m) => {
          const Icon = m.Icon;
          const isActive = active === m.id;
          return (
            <motion.button
              key={m.id}
              type="button"
              className={`mod-card ${isActive ? "mod-card-active" : ""}`}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              onClick={() => setActive(m.id)}
              data-testid={`module-${m.id}`}
              aria-pressed={isActive}
              style={{
                borderColor: isActive ? `${m.color}40` : "#E8ECF0",
                boxShadow: isActive ? `0 12px 32px ${m.color}15` : undefined,
              }}
            >
              <div className="mod-card-head">
                <div className="mod-card-icon" style={{ background: `${m.color}10`, color: m.color }}>
                  <Icon size={18} strokeWidth={2.2} />
                </div>
                {isActive && (
                  <span className="mod-card-live" style={{ background: `${GREEN}15`, color: GREEN }}>
                    Activo
                  </span>
                )}
              </div>
              <h3>{m.label}</h3>
              <p>{m.desc}</p>
              <div className="mod-card-line" style={{ background: isActive ? m.color : "transparent" }} />
            </motion.button>
          );
        })}
      </motion.div>

      <style>{`
        .mod-section { position: relative; overflow: hidden; }
        .mod-mesh {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 50% 0%, ${PURPLE}06 0%, transparent 70%),
            linear-gradient(rgba(10,29,61,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,29,61,0.025) 1px, transparent 1px);
          background-size: auto, 28px 28px, 28px 28px;
          pointer-events: none;
        }
        .mod-hub-nav {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 24px;
        }
        .mod-hub-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          border-radius: 100px;
          border: 1.5px solid;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          background: #fff;
        }
        .mod-hub-pill:hover { transform: translateY(-2px); }
        .mod-hub-pill.active { box-shadow: 0 6px 20px rgba(10,29,61,0.08); }
        .mod-featured {
          position: relative;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 20px;
          align-items: center;
          background: linear-gradient(135deg, #fff 0%, #F7F9FC 100%);
          border: 2px solid;
          border-radius: 20px;
          padding: 24px 28px;
          margin-bottom: 20px;
          box-shadow: 0 16px 48px rgba(10,29,61,0.06);
        }
        .mod-featured-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mod-featured-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .mod-featured-badge {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
        }
        .mod-featured-id {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          color: ${NAVY}45;
        }
        .mod-featured-title {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.1rem, 2.5vw, 1.35rem);
          color: ${NAVY};
          margin: 0 0 6px;
        }
        .mod-featured-desc {
          font-family: Inter, sans-serif;
          font-size: 14px;
          color: ${NAVY}75;
          margin: 0;
          line-height: 1.55;
        }
        .mod-featured-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          color: ${NAVY}55;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .mod-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          animation: mod-pulse 2s ease-in-out infinite;
        }
        @keyframes mod-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        .mod-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }
        .mod-card {
          position: relative;
          background: #fff;
          border: 1.5px solid;
          border-radius: 16px;
          padding: 18px 16px 14px;
          text-align: left;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          overflow: hidden;
        }
        .mod-card:hover { transform: translateY(-3px); }
        .mod-card-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .mod-card-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mod-card-live {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 9px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 100px;
        }
        .mod-card h3 {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 14px;
          color: ${NAVY};
          margin: 0 0 6px;
        }
        .mod-card p {
          font-family: Inter, sans-serif;
          font-size: 12px;
          color: ${NAVY}68;
          margin: 0;
          line-height: 1.45;
        }
        .mod-card-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transition: background 0.2s;
        }
        @media (max-width: 900px) {
          .mod-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .mod-featured {
            grid-template-columns: auto 1fr;
          }
          .mod-featured-status {
            grid-column: 1 / -1;
            justify-content: flex-start;
          }
        }
        @media (max-width: 560px) {
          .mod-grid { grid-template-columns: 1fr; }
          .mod-featured {
            grid-template-columns: 1fr;
            padding: 20px;
          }
          .mod-hub-nav { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 4px; }
          .mod-hub-pill { flex-shrink: 0; }
        }
      `}</style>
    </SectionShell>
  );
}
