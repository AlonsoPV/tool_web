import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Cog, Heart, BarChart3, Megaphone } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const cases = [
  {
    icon: TrendingUp,
    title: "Ventas",
    desc: "Pipeline, CRM, seguimiento, conversión, cotizaciones y oportunidades atoradas.",
    color: GREEN,
  },
  {
    icon: Cog,
    title: "Operaciones",
    desc: "Procesos, responsables, incidencias, SLAs, bloqueos y capacidad operativa.",
    color: PURPLE,
  },
  {
    icon: Heart,
    title: "Customer Success",
    desc: "Onboarding, satisfacción, renovaciones, clientes en riesgo y churn.",
    color: GREEN,
  },
  {
    icon: BarChart3,
    title: "Dirección",
    desc: "Scorecards, tableros, reuniones efectivas, prioridades y toma de decisiones.",
    color: PURPLE,
  },
  {
    icon: Megaphone,
    title: "Marketing + Ventas",
    desc: "Calidad de leads, objeciones, campañas, mensajes y retroalimentación comercial.",
    color: GREEN,
  },
];

export default function UseCases() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="casos" className="cases-section" style={{ background: "#F1F3F6" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cases-header"
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
            Impacto
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 480,
            margin: "0 auto",
            padding: "0 8px",
          }}>
            Dónde generamos impacto
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="cases-grid"
        >
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -6, boxShadow: `0 20px 48px rgba(10,29,61,0.14)`, borderColor: `${c.color}30` }}
                data-testid={`usecase-card-${i}`}
                className="cases-card"
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
              >
                <div className="cases-card-icon" style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${c.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  border: `1px solid ${c.color}20`,
                }}>
                  <Icon size={22} color={c.color} strokeWidth={2} />
                </div>
                <div className="cases-card-body">
                  <h3 style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    color: NAVY,
                    marginBottom: 10,
                  }}>
                    {c.title}
                  </h3>
                  <p style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 13,
                    lineHeight: 1.65,
                    color: `${NAVY}75`,
                    margin: 0,
                  }}>
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .cases-section {
          padding: 96px 24px;
        }
        .cases-header {
          margin-bottom: 56px;
        }
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 16px;
        }
        .cases-card {
          padding: 28px 20px;
          text-align: center;
        }
        .cases-card-icon {
          margin: 0 auto 18px;
        }

        @media (max-width: 1100px) {
          .cases-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .cases-section {
            padding: 72px 20px;
          }
          .cases-header {
            margin-bottom: 40px;
          }
          .cases-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .cases-grid > :last-child {
            grid-column: 1 / -1;
            max-width: calc(50% - 8px);
            justify-self: center;
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .cases-section {
            padding: 56px 16px;
          }
          .cases-header {
            margin-bottom: 32px;
          }
          .cases-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cases-grid > :last-child {
            grid-column: auto;
            max-width: none;
          }
          .cases-card {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            padding: 20px 18px;
            text-align: left;
            border-radius: 18px;
          }
          .cases-card-icon {
            margin: 0;
          }
          .cases-card-body h3 {
            margin-bottom: 6px;
          }
        }
      `}</style>
    </section>
  );
}
