import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, RefreshCw, LayoutDashboard, Database, HeartHandshake, Rocket } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const services = [
  {
    icon: Search,
    title: "Diagnóstico comercial-operativo",
    desc: "Identificamos dolores, causas raíz, cuellos de botella y oportunidades de mejora en tu operación.",
    color: GREEN,
  },
  {
    icon: RefreshCw,
    title: "Reingeniería de procesos",
    desc: "Diseñamos procesos claros con responsables, SLAs, indicadores y reglas de escalamiento.",
    color: PURPLE,
  },
  {
    icon: LayoutDashboard,
    title: "Modelo de gestión operativa",
    desc: "Creamos la cadencia de reuniones, seguimiento y toma de decisiones que tu equipo necesita.",
    color: GREEN,
  },
  {
    icon: Database,
    title: "CRM y tableros de seguimiento",
    desc: "Ordenamos el uso de herramientas para que se conviertan en la fuente única de verdad.",
    color: PURPLE,
  },
  {
    icon: HeartHandshake,
    title: "Customer Success y retención",
    desc: "Diseñamos procesos de onboarding, seguimiento, renovación y gestión de clientes en riesgo.",
    color: GREEN,
  },
  {
    icon: Rocket,
    title: "Acompañamiento de implementación",
    desc: "Acompañamos al equipo para que el plan no se quede en presentación.",
    color: PURPLE,
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicios" style={{ background: "#fff", padding: "96px 24px" }}>
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
            Servicios
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 520,
            margin: "0 auto",
          }}>
            Qué podemos construir contigo
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(10,29,61,0.12)" }}
                data-testid={`service-card-${i}`}
                style={{
                  background: "#fff",
                  borderRadius: 24,
                  padding: "32px 28px",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                  transition: "box-shadow 0.2s",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${s.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                  border: `1px solid ${s.color}20`,
                }}>
                  <Icon size={22} color={s.color} strokeWidth={2} />
                </div>
                <h3 style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: 17,
                  color: NAVY,
                  marginBottom: 10,
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: `${NAVY}80`,
                  margin: 0,
                }}>
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
