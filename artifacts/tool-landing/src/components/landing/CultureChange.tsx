import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  CheckCircle2,
  Zap,
  BarChart3,
  Target,
  type LucideIcon,
} from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, LIGHT_BG, NAVY, PURPLE, sectionDescStyle, sectionLabelStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

type Pillar = {
  title: string;
  desc: string;
  tag: string;
  Icon: LucideIcon;
  color: string;
  wide?: boolean;
};

const pillars: Pillar[] = [
  {
    title: "Comunicación",
    tag: "Prioridades visibles",
    desc: "El equipo sabe qué línea empujar, qué segmento atender y por qué importa esta semana — sin depender del chat.",
    Icon: MessageSquare,
    color: GREEN,
    wide: true,
  },
  {
    title: "Accountability",
    tag: "Dueño + fecha + métrica",
    desc: "Cada iniciativa tiene responsable. Lo acordado en junta no se pierde después.",
    Icon: CheckCircle2,
    color: PURPLE,
  },
  {
    title: "Proactividad",
    tag: "Foco comercial",
    desc: "Los vendedores accionan con prioridades, no solo reaccionan a clientes cautivos.",
    Icon: Zap,
    color: "#F59E0B",
  },
  {
    title: "Datos",
    tag: "Evidencia operativa",
    desc: "La intuición se complementa con KPIs. El CRM funciona cuando cambia el hábito comercial.",
    Icon: BarChart3,
    color: NAVY,
  },
  {
    title: "Liderazgo",
    tag: "Habilitar, no perseguir",
    desc: "La dirección deja de absorber operación y empieza a decidir con datos semanales.",
    Icon: Target,
    color: GREEN,
  },
];

export default function CultureChange() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionShell id="cultura" style={{ background: LIGHT_BG }} className="culture-section">
      <div className="culture-mesh" aria-hidden="true" />

      <div style={{ textAlign: "center", marginBottom: 48, position: "relative" }}>
        <span style={{ ...sectionLabelStyle, background: `${NAVY}10`, color: NAVY }}>Cambio cultural</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 640 }}>
          La estrategia solo funciona si cambia la forma de operar.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 620 }}>
          No se trata solo de implementar un CRM. Se trata de construir hábitos comerciales: registrar, clasificar, dar seguimiento, reportar, aprender y decidir con datos.
        </p>
      </div>

      <motion.div
        className="culture-bento"
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
      >
        {pillars.map((p, i) => {
          const Icon = p.Icon;
          const active = hovered === i;
          return (
            <motion.article
              key={p.title}
              className={`culture-card ${p.wide ? "culture-card-wide" : ""}`}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderColor: active ? `${p.color}45` : `${p.color}18`,
                boxShadow: active ? `0 20px 48px ${p.color}18` : undefined,
              }}
            >
              <div className="culture-card-glow" style={{ background: `linear-gradient(135deg, ${p.color}12, transparent)` }} />
              <div className="culture-card-top">
                <div className="culture-icon-wrap" style={{ background: `${p.color}12`, borderColor: `${p.color}25` }}>
                  <Icon size={20} color={p.color} strokeWidth={2.2} />
                </div>
                <span className="culture-index" style={{ color: `${p.color}90` }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <span className="culture-tag" style={{ background: `${p.color}10`, color: p.color }}>
                {p.tag}
              </span>
              <h3 className="culture-title">{p.title}</h3>
              <p className="culture-desc">{p.desc}</p>
              <div className="culture-card-bar" style={{ background: active ? p.color : `${p.color}30` }} />
            </motion.article>
          );
        })}
      </motion.div>

      <style>{`
        .culture-section { position: relative; overflow: hidden; }
        .culture-mesh {
          position: absolute;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, ${GREEN}06 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${PURPLE}05 0%, transparent 50%),
            linear-gradient(rgba(10,29,61,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(10,29,61,0.03) 1px, transparent 1px);
          background-size: auto, auto, 32px 32px, 32px 32px;
          pointer-events: none;
        }
        .culture-bento {
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .culture-card {
          position: relative;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(8px);
          border: 1px solid;
          border-radius: 20px;
          padding: 22px 20px 18px;
          overflow: hidden;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
          cursor: default;
        }
        .culture-card:hover { transform: translateY(-4px); }
        .culture-card-wide { grid-column: span 2; }
        .culture-card-glow {
          position: absolute;
          inset: 0;
          opacity: 0.6;
          pointer-events: none;
        }
        .culture-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
          position: relative;
        }
        .culture-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .culture-index {
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }
        .culture-tag {
          display: inline-block;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 100px;
          margin-bottom: 10px;
          position: relative;
        }
        .culture-title {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 16px;
          color: ${NAVY};
          margin: 0 0 8px;
          position: relative;
        }
        .culture-desc {
          font-family: Inter, sans-serif;
          font-size: 13px;
          color: ${NAVY}72;
          margin: 0;
          line-height: 1.55;
          position: relative;
        }
        .culture-card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          transition: background 0.25s;
        }
        @media (max-width: 900px) {
          .culture-bento { grid-template-columns: 1fr 1fr; }
          .culture-card-wide { grid-column: span 2; }
        }
        @media (max-width: 560px) {
          .culture-bento { grid-template-columns: 1fr; }
          .culture-card-wide { grid-column: span 1; }
        }
      `}</style>
    </SectionShell>
  );
}
