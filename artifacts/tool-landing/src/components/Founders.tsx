import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";
import abrahamPhoto from "@assets/AbrahamCastillo_1784129559789.png";
import alonsoPhoto from "@assets/AlonsoPerez_1784129559791.png";

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
    photo: abrahamPhoto,
  },
  {
    name: "Alonso Pérez Vázquez",
    role: "Co-fundador · Operaciones y Ejecución",
    bio: "Experto en operaciones, mejora de procesos y ejecución organizacional. Ha implementado sistemas de gestión basados en EOS, Lean y Scaling Up en empresas de consumo, tecnología y servicios profesionales.",
    highlights: ["EOS / Scaling Up", "Lean Operations", "OKRs & KPIs", "Gestión del cambio"],
    linkedin: "https://www.linkedin.com/in/alonsoperezvazquez/",
    whatsapp: "https://wa.me/5255119811499",
    accent: PURPLE,
    photo: alonsoPhoto,
  },
];

export default function Founders() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="fundadores" className="founders-section" style={{ background: "#F7F9FC" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="founders-header"
          style={{ textAlign: "center" }}
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
            fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)",
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
            fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
            lineHeight: 1.75,
            color: `${NAVY}70`,
            maxWidth: 540,
            margin: "0 auto",
          }}>
            No somos consultores de diapositivas. Hemos implementado estos sistemas desde adentro, con equipos reales, en empresas como la tuya.
          </p>
        </motion.div>

        <div className="founders-grid">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: `0 32px 64px rgba(10,29,61,0.12)` }}
              data-testid={`founder-card-${i}`}
              className="founder-card"
            >
              <div
                className="founder-card-accent"
                style={{ background: `linear-gradient(90deg, ${f.accent}, ${f.accent}60)` }}
              />

              <div className="founder-card-body">
                <div className="founder-identity">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="founder-avatar"
                    style={{ border: `2.5px solid ${f.accent}35` }}
                  >
                    <img
                      src={f.photo}
                      alt={f.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
                    />
                  </motion.div>
                  <div style={{ minWidth: 0 }}>
                    <h3 className="founder-name">{f.name}</h3>
                    <p className="founder-role" style={{ color: f.accent }}>{f.role}</p>
                  </div>
                </div>

                <p className="founder-bio">{f.bio}</p>

                <div className="founder-tags">
                  {f.highlights.map((h) => (
                    <span
                      key={h}
                      className="founder-tag"
                      style={{
                        color: f.accent,
                        background: `${f.accent}10`,
                        border: `1px solid ${f.accent}20`,
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="founder-actions">
                  <motion.a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    data-testid={`founder-linkedin-${i}`}
                    className="founder-action founder-action-primary"
                    style={{ background: NAVY }}
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href={f.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    data-testid={`founder-whatsapp-${i}`}
                    className="founder-action founder-action-secondary"
                    style={{
                      background: `${f.accent}15`,
                      color: f.accent,
                      border: `1.5px solid ${f.accent}30`,
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="trust-strip"
          style={{
            background: `linear-gradient(135deg, ${NAVY}, #1a3563)`,
          }}
        >
          {[
            { stat: "Boutique", label: "Trabajo directo con los fundadores. Sin juniors.", color: GREEN },
            { stat: "Implementación", label: "No reportes. Acompañamos hasta que funciona.", color: PURPLE },
            { stat: "Sin plantillas", label: "Todo diseñado para tu empresa, no para la general.", color: "#F59E0B" },
          ].map((t, i) => (
            <div key={i} className="trust-item">
              <p className="trust-stat" style={{ color: t.color }}>{t.stat}</p>
              <p className="trust-label">{t.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .founders-section {
          padding: 96px 24px;
        }
        .founders-header {
          margin-bottom: 64px;
        }
        .founders-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: stretch;
        }
        .founder-card {
          background: #fff;
          border-radius: 28px;
          overflow: hidden;
          border: 1.5px solid #E8ECF0;
          box-shadow: 0 4px 16px rgba(10,29,61,0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .founder-card-accent {
          height: 5px;
          flex-shrink: 0;
        }
        .founder-card-body {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }
        .founder-identity {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }
        .founder-avatar {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          flex-shrink: 0;
          overflow: hidden;
        }
        .founder-name {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 16px;
          color: ${NAVY};
          margin: 0 0 4px;
          line-height: 1.25;
        }
        .founder-role {
          font-family: Inter, sans-serif;
          font-size: 12px;
          margin: 0;
          font-weight: 600;
          line-height: 1.4;
        }
        .founder-bio {
          font-family: Inter, sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: ${NAVY}75;
          margin: 0 0 20px;
        }
        .founder-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .founder-tag {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          border-radius: 100px;
          padding: 5px 12px;
          letter-spacing: 0.04em;
        }
        .founder-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
        }
        .founder-action {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 100px;
          padding: 10px 18px;
          text-decoration: none;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          box-sizing: border-box;
          flex: 1;
          min-width: 0;
        }
        .founder-action-primary {
          color: #fff;
          border: 1.5px solid transparent;
        }
        .founder-action-secondary {
          /* color/border via inline accent */
        }
        .trust-strip {
          margin-top: 48px;
          border-radius: 24px;
          padding: 32px 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          text-align: center;
        }
        .trust-stat {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 15px;
          margin: 0 0 6px;
        }
        .trust-label {
          font-family: Inter, sans-serif;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          margin: 0;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .founder-card-body {
            padding: 28px 24px;
          }
          .trust-strip {
            padding: 28px 24px;
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .founders-section {
            padding: 72px 20px;
          }
          .founders-header {
            margin-bottom: 40px;
          }
          .founders-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .founder-card {
            border-radius: 20px;
          }
          .founder-card-body {
            padding: 22px 18px;
          }
          .founder-identity {
            gap: 14px;
            margin-bottom: 16px;
          }
          .founder-avatar {
            width: 56px;
            height: 56px;
          }
          .founder-name {
            font-size: 15px;
          }
          .founder-role {
            font-size: 11px;
          }
          .founder-bio {
            font-size: 13px;
            margin-bottom: 16px;
            line-height: 1.65;
          }
          .founder-tags {
            gap: 6px;
            margin-bottom: 18px;
          }
          .founder-tag {
            font-size: 10px;
            padding: 4px 10px;
          }
          .founder-actions {
            gap: 8px;
          }
          .founder-action {
            padding: 10px 14px;
            font-size: 12px;
          }
          .trust-strip {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 24px 20px;
            border-radius: 20px;
            margin-top: 28px;
            text-align: left;
          }
          .trust-item {
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .trust-item:last-child {
            padding-bottom: 0;
            border-bottom: none;
          }
        }

        @media (max-width: 480px) {
          .founders-section {
            padding: 56px 16px;
          }
          .founders-header {
            margin-bottom: 28px;
          }
          .founder-card-body {
            padding: 18px 14px;
          }
          .founder-identity {
            align-items: flex-start;
          }
          .founder-avatar {
            width: 48px;
            height: 48px;
          }
          .founder-actions {
            flex-direction: column;
          }
          .founder-action {
            width: 100%;
          }
          .trust-strip {
            padding: 20px 16px;
          }
        }
      `}</style>
    </section>
  );
}
