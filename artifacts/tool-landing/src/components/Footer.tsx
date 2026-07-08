import { motion } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";

function ToolLogoWhite() {
  return (
    <svg width="72" height="28" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="25" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="26" fill="white" letterSpacing="-1">T</text>
      <circle cx="36" cy="16" r="11" stroke="white" strokeWidth="3.5" fill="none" strokeOpacity="0.9"/>
      <circle cx="54" cy="16" r="11" stroke="white" strokeWidth="3.5" fill="none" strokeOpacity="0.9"/>
      <circle cx="45" cy="16" r="4" fill={GREEN}/>
      <text x="64" y="25" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="26" fill="white" letterSpacing="-1">L</text>
    </svg>
  );
}

const navLinks = [
  { label: "Metodología", href: "#metodologia" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Quiénes somos", href: "#fundadores" },
  { label: "Síntomas", href: "#sintomas" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  return (
    <footer style={{ background: "#060f1e", padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr", gap: 48, marginBottom: 56 }} className="footer-grid">
          <div>
            <div style={{ marginBottom: 20 }}>
              <ToolLogoWhite />
            </div>
            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 14,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 280,
              marginBottom: 28,
            }}>
              Estrategia, procesos y ejecución para empresas en crecimiento.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <motion.a
                href="https://wa.me/5255514520477"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                data-testid="footer-whatsapp-abraham"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background: `${GREEN}15`,
                  color: GREEN,
                  borderRadius: 100,
                  padding: "8px 16px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  textDecoration: "none",
                  border: `1px solid ${GREEN}25`,
                }}
              >
                <MessageCircle size={13} />
                Abraham
              </motion.a>
              <motion.a
                href="https://wa.me/5255119811499"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                data-testid="footer-whatsapp-alonso"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  background: `${GREEN}15`,
                  color: GREEN,
                  borderRadius: 100,
                  padding: "8px 16px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  textDecoration: "none",
                  border: `1px solid ${GREEN}25`,
                }}
              >
                <MessageCircle size={13} />
                Alonso
              </motion.a>
            </div>
          </div>

          <div>
            <p style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 20,
            }}>
              Navegación
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "rgba(255,255,255,0.55)",
                      fontFamily: "Inter, sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      padding: 0,
                      transition: "color 0.2s",
                      textAlign: "left",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              marginBottom: 20,
            }}>
              LinkedIn
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <motion.a
                href="https://www.linkedin.com/in/abraham-harris-7b91951b1/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                data-testid="footer-linkedin-abraham"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                <Linkedin size={15} />
                Abraham Castillo Harris
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/alonsoperezvazquez/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                data-testid="footer-linkedin-alonso"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
              >
                <Linkedin size={15} />
                Alonso Pérez Vázquez
              </motion.a>
            </div>

            <div style={{ marginTop: 32 }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
                data-testid="footer-cta"
                style={{
                  background: GREEN,
                  color: "#fff",
                  border: "none",
                  borderRadius: 100,
                  padding: "12px 24px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(16,185,129,0.3)",
                  width: "100%",
                }}
              >
                Agendar diagnóstico
              </motion.button>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.3)",
            margin: 0,
          }}>
            © 2025 TOOL. Todos los derechos reservados.
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            color: "rgba(255,255,255,0.25)",
            margin: 0,
          }}>
            Estrategia · Procesos · Ejecución
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </footer>
  );
}
