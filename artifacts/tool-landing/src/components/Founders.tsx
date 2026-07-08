import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const founders = [
  {
    name: "Abraham Castillo Harris",
    role: "Co-fundador · Estrategia Comercial y Procesos",
    bio: "Especialista en diseñar y escalar sistemas comerciales para empresas en crecimiento. Ha liderado transformaciones en equipos de ventas, implementación de CRMs y construcción de playbooks de go-to-market para empresas de 10 a 200+ personas.",
    highlights: ["Estrategia GTM", "Diseño comercial", "Implementación de CRM", "Equipos de ventas"],
    linkedin: "https://www.linkedin.com/in/abraham-harris-7b91951b1/",
    whatsapp: "https://wa.me/5255514520477",
    accent: GREEN,
    avatar: "AH",
  },
  {
    name: "Alonso Pérez Vázquez",
    role: "Co-fundador · Operaciones y Ejecución",
    bio: "Experto en operaciones, mejora de procesos y ejecución organizacional. Ha implementado sistemas de gestión basados en EOS, Lean y Scaling Up en empresas de consumo, tecnología y servicios profesionales.",
    highlights: ["EOS / Scaling Up", "Lean Operations", "OKRs & KPIs", "Gestión del cambio"],
    linkedin: "https://www.linkedin.com/in/alonsoperezvazquez/",
    whatsapp: "https://wa.me/5255119811499",
    accent: PURPLE,
    avatar: "AP",
  },
];

export default function Founders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fundadores" style={{ background: "#F7F9FC", padding: "96px 24px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <span style={{
            display: "inline-block",
            background: `${GREEN}12`,
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
            Quiénes somos
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
            color: NAVY,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 600,
            margin: "0 auto 16px",
          }}>
            Dos operadores que han estado donde tú estás.
          </h2>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 540,
            margin: "0 auto",
          }}>
            No somos consultores de diapositivas. Hemos implementado estos sistemas desde adentro, con equipos reales, en empresas como la tuya.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }} className="founders-grid">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: `0 32px 64px rgba(10,29,61,0.12)` }}
              data-testid={`founder-card-${i}`}
              style={{
                background: "#fff",
                borderRadius: 28,
                overflow: "hidden",
                border: "1.5px solid #E8ECF0",
                boxShadow: "0 4px 16px rgba(10,29,61,0.05)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Top accent bar */}
              <div style={{
                height: 5,
                background: `linear-gradient(90deg, ${f.accent}, ${f.accent}60)`,
              }} />

              <div style={{ padding: "36px 32px" }}>
                {/* Avatar + name */}
                <div style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 24 }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{
                      width: 68,
                      height: 68,
                      borderRadius: "50%",
                      background: `linear-gradient(135deg, ${f.accent}20, ${f.accent}40)`,
                      border: `2.5px solid ${f.accent}35`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 800,
                      fontSize: 22,
                      color: f.accent,
                      flexShrink: 0,
                    }}
                  >
                    {f.avatar}
                  </motion.div>
                  <div>
                    <h3 style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 800,
                      fontSize: 16,
                      color: NAVY,
                      margin: "0 0 4px",
                      lineHeight: 1.25,
                    }}>
                      {f.name}
                    </h3>
                    <p style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      color: f.accent,
                      margin: 0,
                      fontWeight: 600,
                      lineHeight: 1.4,
                    }}>
                      {f.role}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: `${NAVY}75`,
                  marginBottom: 24,
                }}>
                  {f.bio}
                </p>

                {/* Highlights */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                  {f.highlights.map((h) => (
                    <span key={h} style={{
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 11,
                      color: f.accent,
                      background: `${f.accent}10`,
                      border: `1px solid ${f.accent}20`,
                      borderRadius: 100,
                      padding: "5px 12px",
                      letterSpacing: "0.04em",
                    }}>
                      {h}
                    </span>
                  ))}
                </div>

                {/* CTA links */}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <motion.a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    data-testid={`founder-linkedin-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: NAVY,
                      color: "#fff",
                      borderRadius: 100,
                      padding: "10px 18px",
                      textDecoration: "none",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href={f.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    data-testid={`founder-whatsapp-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      background: `${f.accent}15`,
                      color: f.accent,
                      border: `1.5px solid ${f.accent}30`,
                      borderRadius: 100,
                      padding: "10px 18px",
                      textDecoration: "none",
                      fontFamily: "Manrope, sans-serif",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* "Why trust us" strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          style={{
            marginTop: 48,
            background: `linear-gradient(135deg, ${NAVY}, #1a3563)`,
            borderRadius: 24,
            padding: "32px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            textAlign: "center",
          }}
          className="trust-strip"
        >
          {[
            { stat: "Boutique", label: "Trabajo directo con los fundadores. Sin juniors." },
            { stat: "Implementación", label: "No reportes. Acompañamos hasta que funciona." },
            { stat: "Sin plantillas", label: "Todo diseñado para tu empresa, no para la general." },
          ].map((t, i) => (
            <div key={i}>
              <p style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: 15,
                color: i === 0 ? GREEN : i === 1 ? PURPLE : "#F59E0B",
                margin: "0 0 6px",
              }}>
                {t.stat}
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "rgba(255,255,255,0.6)",
                margin: 0,
                lineHeight: 1.5,
              }}>
                {t.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founders-grid { grid-template-columns: 1fr !important; }
          .trust-strip { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
