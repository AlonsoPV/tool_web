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
    para: "Para saber exactamente qué está frenando tu crecimiento",
    desc: "Mapeamos tu operación completa, identificamos causas raíz y priorizamos las palancas de mayor impacto. Terminas con un plan de acción claro, no con un reporte de 80 páginas.",
    color: GREEN,
  },
  {
    icon: RefreshCw,
    title: "Reingeniería de procesos",
    para: "Para que tu equipo deje de reinventar la rueda cada vez",
    desc: "Diseñamos procesos con responsables únicos, tiempos definidos e indicadores reales. El equipo sabe exactamente qué hacer, cuándo y cómo escalar cuando algo se rompe.",
    color: PURPLE,
  },
  {
    icon: LayoutDashboard,
    title: "Modelo de gestión operativa",
    para: "Para tomar decisiones con información, no con intuición",
    desc: "Instalamos la cadencia de reuniones, los tableros y los rituales de seguimiento que convierten la operación caótica en un sistema predecible que el equipo adopta de verdad.",
    color: GREEN,
  },
  {
    icon: Database,
    title: "CRM y tableros de seguimiento",
    para: "Para que tus herramientas trabajen para ti, no al revés",
    desc: "Ordenamos el stack actual, configuramos el CRM y construimos tableros que reflejen la realidad del negocio. Una fuente única de verdad que toda el área consulta.",
    color: PURPLE,
  },
  {
    icon: HeartHandshake,
    title: "Customer Success y retención",
    para: "Para dejar de perder clientes que nadie estaba viendo",
    desc: "Diseñamos el proceso completo de postventa: onboarding, seguimiento, alertas tempranas y renovación. Tus clientes crecen contigo en lugar de irse sin avisar.",
    color: GREEN,
  },
  {
    icon: Rocket,
    title: "Acompañamiento de implementación",
    para: "Para que el plan no muera en la presentación",
    desc: "Estamos en la ejecución desde el día uno. Capacitamos al equipo, facilitamos las primeras sesiones y ajustamos en vivo hasta que el sistema opera solo, sin que nosotros tengamos que estar.",
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
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 560,
            margin: "0 auto 16px",
          }}>
            Seis palancas concretas para ordenar tu operación.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 520,
            margin: "0 auto",
          }}>
            Cada servicio tiene un resultado específico. No paquetes genéricos — trabajo real con impacto medible.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 20,
          }}
        >
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                whileHover={{ y: -5, boxShadow: `0 24px 52px rgba(10,29,61,0.12)`, borderColor: `${s.color}35` }}
                data-testid={`service-card-${i}`}
                style={{
                  background: "#FAFAFA",
                  borderRadius: 24,
                  padding: "32px 28px",
                  border: "1.5px solid #E8ECF0",
                  boxShadow: "0 2px 8px rgba(10,29,61,0.04)",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Top accent */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: s.color,
                    transformOrigin: "left",
                  }}
                />

                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: `${s.color}12`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  border: `1px solid ${s.color}20`,
                }}>
                  <Icon size={22} color={s.color} strokeWidth={2} />
                </div>

                <h3 style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: 16,
                  color: NAVY,
                  marginBottom: 6,
                  lineHeight: 1.3,
                }}>
                  {s.title}
                </h3>

                {/* Para qué — the assertive outcome line */}
                <p style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  color: s.color,
                  marginBottom: 14,
                  lineHeight: 1.4,
                }}>
                  {s.para}
                </p>

                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: `${NAVY}75`,
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
