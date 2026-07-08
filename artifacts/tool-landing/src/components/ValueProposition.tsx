import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitBranch, Users, Calendar, BarChart2, RefreshCw, Settings } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const values = [
  {
    icon: GitBranch,
    title: "Procesos claros",
    desc: "Mapeamos cómo opera tu empresa hoy y diseñamos el flujo ideal para reducir fricción, duplicidad y retrabajo.",
    accent: GREEN,
  },
  {
    icon: Users,
    title: "Accountability",
    desc: "Definimos responsables, prioridades, fechas compromiso y reglas de seguimiento claras.",
    accent: PURPLE,
  },
  {
    icon: Calendar,
    title: "Cadencia de gestión",
    desc: "Instalamos dailies, reuniones semanales, revisiones directivas y retrospectivas trimestrales.",
    accent: GREEN,
  },
  {
    icon: BarChart2,
    title: "KPIs y dashboards",
    desc: "Convertimos la operación en indicadores visibles para tomar mejores decisiones.",
    accent: PURPLE,
  },
  {
    icon: RefreshCw,
    title: "Mejora continua",
    desc: "Identificamos causas raíz, patrones recurrentes y acciones correctivas sostenibles.",
    accent: GREEN,
  },
  {
    icon: Settings,
    title: "Herramientas operativas",
    desc: "Integramos tableros y sistemas para que el modelo no dependa de memoria, Excel o WhatsApp.",
    accent: PURPLE,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ValueProposition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="propuesta" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <span style={{
            display: "inline-block",
            background: `${GREEN}15`,
            color: GREEN,
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "Manrope, sans-serif",
          }}>
            Propuesta de valor
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 600,
            margin: "0 auto 16px",
          }}>
            No entregamos solo diagnósticos. Instalamos sistemas de ejecución.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: `${NAVY}90`,
            maxWidth: 600,
            margin: "0 auto",
          }}>
            Nuestro trabajo combina consultoría estratégica, reingeniería de procesos y acompañamiento táctico para que cada hallazgo se convierta en una acción con dueño, fecha, métrica y seguimiento.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(10,29,61,0.12)" }}
                data-testid={`value-card-${i}`}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "32px 28px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                  transition: "box-shadow 0.2s",
                  cursor: "default",
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${v.accent}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}>
                  <Icon size={22} color={v.accent} strokeWidth={2} />
                </div>
                <h3 style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: 18,
                  color: NAVY,
                  marginBottom: 10,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: `${NAVY}80`,
                  margin: 0,
                }}>
                  {v.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
