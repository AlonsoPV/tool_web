import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, MessageCircle } from "lucide-react";
import logoImg from "@assets/ChatGPT_Image_8_jul_2026,_02_23_41_p.m._1783542231097.png";
import { DEMO_URL, GREEN, PURPLE, scrollTo } from "@/lib/landing-theme";

const ADVISOR_URL = "https://wa.me/5255119811499";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Transformación", href: "#transformacion" },
  { label: "Playing to Win", href: "#playing-to-win" },
  { label: "OKRs", href: "#okrs" },
  { label: "Sistema", href: "#sistema" },
  { label: "Impacto", href: "#impacto" },
  { label: "Contacto", href: "#contacto" },
];

const founders = [
  {
    name: "Abraham Castillo Harris",
    short: "Abraham",
    whatsapp: DEMO_URL,
    linkedin: "https://www.linkedin.com/in/abraham-harris-7b91951b1/",
    testIdWa: "footer-whatsapp-abraham",
    testIdLi: "footer-linkedin-abraham",
  },
  {
    name: "Alonso Pérez Vázquez",
    short: "Alonso",
    whatsapp: ADVISOR_URL,
    linkedin: "https://www.linkedin.com/in/alonsoperezvazquez/",
    testIdWa: "footer-whatsapp-alonso",
    testIdLi: "footer-linkedin-alonso",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-accent" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <button
              type="button"
              className="footer-logo-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="TOOL — inicio"
            >
              <img src={logoImg} alt="TOOL" className="footer-logo" />
            </button>

            <p className="footer-product">SCRUMBAN</p>
            <p className="footer-tagline">
              Sistema de gestión estratégica y operativa para empresas que quieren ejecutar con foco.
            </p>

            <motion.a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="footer-cta"
              className="footer-cta"
            >
              Solicitar diagnóstico
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </motion.a>
          </div>

          {/* Navigation */}
          <div className="footer-col">
            <p className="footer-col-title">Navegación</p>
            <ul className="footer-nav">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Team */}
          <div className="footer-col">
            <p className="footer-col-title">Equipo</p>
            <div className="footer-team">
              {founders.map((f) => (
                <div key={f.short} className="footer-founder">
                  <span className="footer-founder-name">{f.name}</span>
                  <div className="footer-founder-links">
                    <motion.a
                      href={f.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      data-testid={f.testIdWa}
                      className="footer-icon-btn footer-icon-wa"
                      aria-label={`WhatsApp ${f.short}`}
                    >
                      <MessageCircle size={14} />
                      WhatsApp
                    </motion.a>
                    <motion.a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.04 }}
                      data-testid={f.testIdLi}
                      className="footer-icon-btn footer-icon-li"
                      aria-label={`LinkedIn ${f.short}`}
                    >
                      <Linkedin size={14} />
                      LinkedIn
                    </motion.a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 TOOL. Todos los derechos reservados.</p>
          <p className="footer-bottom-tag">Estrategia · Procesos · Ejecución</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #060f1e;
          padding: clamp(48px, 6vw, 64px) 28px 28px;
          position: relative;
          overflow: hidden;
        }
        .footer-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, ${GREEN}40, ${PURPLE}30, transparent);
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: clamp(28px, 4vw, 48px);
          margin-bottom: 36px;
          align-items: start;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
        }
        .footer-logo-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          width: fit-content;
        }
        .footer-logo {
          height: 36px;
          width: auto;
          display: block;
          filter: brightness(0) invert(1);
        }
        .footer-product {
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${GREEN};
          margin: 4px 0 0;
        }
        .footer-tagline {
          font-family: Inter, sans-serif;
          font-size: 14px;
          line-height: 1.65;
          color: rgba(255,255,255,0.52);
          margin: 0;
          max-width: 320px;
        }
        .footer-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          margin-top: 8px;
          background: ${GREEN};
          color: #fff;
          border-radius: 100px;
          padding: 11px 20px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(16,185,129,0.28);
        }
        .footer-col-title {
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.32);
          margin: 0 0 14px;
        }
        .footer-nav {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 6px 20px;
        }
        .footer-nav-link {
          background: none;
          border: none;
          cursor: pointer;
          color: rgba(255,255,255,0.55);
          font-family: Inter, sans-serif;
          font-size: 13px;
          font-weight: 500;
          padding: 4px 0;
          transition: color 0.2s;
          text-align: left;
        }
        .footer-nav-link:hover {
          color: #fff;
        }
        .footer-team {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-founder {
          padding: 12px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
        }
        .footer-founder-name {
          display: block;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: rgba(255,255,255,0.88);
          margin-bottom: 8px;
          line-height: 1.3;
        }
        .footer-founder-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .footer-icon-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border-radius: 100px;
          padding: 5px 10px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 11px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .footer-icon-wa {
          background: ${GREEN}12;
          color: ${GREEN};
          border: 1px solid ${GREEN}22;
        }
        .footer-icon-wa:hover {
          background: ${GREEN}20;
        }
        .footer-icon-li {
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .footer-icon-li:hover {
          color: #fff;
          background: rgba(255,255,255,0.1);
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px 16px;
        }
        .footer-bottom p {
          font-family: Inter, sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.28);
          margin: 0;
        }
        .footer-bottom-tag {
          letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
          .footer-brand {
            grid-column: 1 / -1;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            column-gap: 20px;
          }
          .footer-logo-btn { flex-shrink: 0; }
          .footer-product { width: 100%; margin-top: -4px; }
          .footer-tagline { max-width: none; flex: 1 1 240px; }
          .footer-cta { margin-top: 0; align-self: center; }
        }

        @media (max-width: 600px) {
          .site-footer { padding: 40px 20px 24px; }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-bottom: 28px;
          }
          .footer-brand {
            flex-direction: column;
            gap: 10px;
          }
          .footer-product { width: auto; margin-top: 0; }
          .footer-cta { width: 100%; justify-content: center; }
          .footer-nav { grid-template-columns: 1fr 1fr; }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </footer>
  );
}
