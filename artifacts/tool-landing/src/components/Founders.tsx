import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const founders = [
  {
    initials: "AC",
    name: "Abraham Castillo Harris",
    role: "Estrategia, desarrollo comercial y crecimiento de negocio.",
    bio: "Abraham lidera la visión estratégica, la relación con stakeholders y la conexión entre el modelo operativo y los objetivos de crecimiento.",
    linkedin: "https://www.linkedin.com/in/abraham-harris-7b91951b1/",
    whatsapp: "https://wa.me/5255514520477",
    color: NAVY,
    accent: GREEN,
  },
  {
    initials: "AP",
    name: "Alonso Pérez Vázquez",
    role: "Procesos, operación, herramientas, dashboards y ejecución.",
    bio: "Alonso lidera el diseño del sistema operativo, el mapeo de procesos, la implementación de tableros, KPIs y modelos de seguimiento.",
    linkedin: "https://www.linkedin.com/in/alonsoperezvazquez/",
    whatsapp: "https://wa.me/5255119811499",
    color: NAVY,
    accent: PURPLE,
  },
];

export default function Founders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fundadores" style={{ background: "#fff", padding: "96px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            Quiénes somos
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 580,
            margin: "0 auto",
          }}>
            Dos perfiles complementarios para ordenar estrategia y ejecución
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 24,
          }}
          className="founders-grid"
        >
          {founders.map((f, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
              whileHover={{ y: -4, boxShadow: "0 20px 48px rgba(10,29,61,0.12)" }}
              data-testid={`founder-card-${i}`}
              style={{
                background: "#fff",
                borderRadius: 28,
                padding: "36px 32px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 2px 12px rgba(10,29,61,0.05)",
                transition: "box-shadow 0.2s",
              }}
            >
              <div style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${f.accent}20, ${f.accent}40)`,
                border: `2px solid ${f.accent}30`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 24,
              }}>
                <span style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 800,
                  fontSize: 22,
                  color: f.accent,
                }}>
                  {f.initials}
                </span>
              </div>

              <h3 style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: 20,
                color: NAVY,
                marginBottom: 6,
              }}>
                {f.name}
              </h3>

              <p style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: f.accent,
                marginBottom: 16,
              }}>
                {f.role}
              </p>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14.5,
                lineHeight: 1.75,
                color: `${NAVY}80`,
                marginBottom: 28,
              }}>
                {f.bio}
              </p>

              <div style={{ display: "flex", gap: 10 }}>
                <motion.a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  data-testid={`founder-linkedin-${i}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: `${NAVY}08`,
                    color: NAVY,
                    borderRadius: 100,
                    padding: "9px 18px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: "none",
                    border: `1px solid ${NAVY}15`,
                  }}
                >
                  <Linkedin size={15} />
                  LinkedIn
                </motion.a>
                <motion.a
                  href={f.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  data-testid={`founder-whatsapp-${i}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    background: `${GREEN}15`,
                    color: GREEN,
                    borderRadius: 100,
                    padding: "9px 18px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    textDecoration: "none",
                    border: `1px solid ${GREEN}25`,
                  }}
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          style={{
            textAlign: "center",
            marginTop: 40,
            padding: "28px 32px",
            background: "#F1F3F6",
            borderRadius: 20,
            border: "1px solid #E5E7EB",
          }}
        >
          <p style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 600,
            fontSize: "1rem",
            color: NAVY,
            margin: 0,
            lineHeight: 1.7,
          }}>
            Combinamos visión estratégica y ejecución operativa para ayudar a que las empresas no solo sepan qué cambiar, sino cómo hacerlo realidad.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .founders-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
