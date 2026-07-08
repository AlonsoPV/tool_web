import { motion } from "framer-motion";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function AbstractSystem() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="240" cy="200" r="120" stroke={`${NAVY}15`} strokeWidth="1" fill="none"/>
      <circle cx="240" cy="200" r="80" stroke={`${NAVY}10`} strokeWidth="1" fill="none"/>

      <circle cx="240" cy="80" r="28" fill="#fff" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <circle cx="240" cy="80" r="16" fill={`${GREEN}20`} stroke={GREEN} strokeWidth="1.5"/>

      <circle cx="380" cy="200" r="28" fill="#fff" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <circle cx="380" cy="200" r="16" fill={`${PURPLE}20`} stroke={PURPLE} strokeWidth="1.5"/>

      <circle cx="240" cy="320" r="28" fill="#fff" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <circle cx="240" cy="320" r="16" fill={`${GREEN}20`} stroke={GREEN} strokeWidth="1.5"/>

      <circle cx="100" cy="200" r="28" fill="#fff" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <circle cx="100" cy="200" r="16" fill={`${PURPLE}20`} stroke={PURPLE} strokeWidth="1.5"/>

      <circle cx="320" cy="120" r="20" fill="#fff" stroke={`${NAVY}15`} strokeWidth="1.5"/>
      <circle cx="320" cy="120" r="10" fill={`${NAVY}15`} stroke={`${NAVY}30`} strokeWidth="1.5"/>

      <circle cx="160" cy="120" r="20" fill="#fff" stroke={`${NAVY}15`} strokeWidth="1.5"/>
      <circle cx="160" cy="120" r="10" fill={`${PURPLE}20`} stroke={`${PURPLE}50`} strokeWidth="1.5"/>

      <circle cx="320" cy="280" r="20" fill="#fff" stroke={`${NAVY}15`} strokeWidth="1.5"/>
      <circle cx="320" cy="280" r="10" fill={`${GREEN}20`} stroke={`${GREEN}50`} strokeWidth="1.5"/>

      <circle cx="160" cy="280" r="20" fill="#fff" stroke={`${NAVY}15`} strokeWidth="1.5"/>
      <circle cx="160" cy="280" r="10" fill={`${NAVY}15`} stroke={`${NAVY}30`} strokeWidth="1.5"/>

      <line x1="240" y1="108" x2="320" y2="120" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="240" y1="108" x2="160" y2="120" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="240" y1="292" x2="320" y2="280" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="240" y1="292" x2="160" y2="280" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="352" y1="200" x2="340" y2="120" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="352" y1="200" x2="340" y2="280" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="128" y1="200" x2="140" y2="120" stroke={`${NAVY}20`} strokeWidth="1.5"/>
      <line x1="128" y1="200" x2="140" y2="280" stroke={`${NAVY}20`} strokeWidth="1.5"/>

      <circle cx="240" cy="200" r="36" fill="#fff" stroke={`${NAVY}15`} strokeWidth="2"/>
      <circle cx="240" cy="200" r="22" fill={`${NAVY}08`} stroke={NAVY} strokeWidth="2"/>
      <circle cx="233" cy="200" r="10" fill={`${GREEN}30`} stroke={GREEN} strokeWidth="1.5"/>
      <circle cx="247" cy="200" r="10" fill={`${PURPLE}30`} stroke={PURPLE} strokeWidth="1.5"/>

      <motion.circle
        cx="240"
        cy="80"
        r="5"
        fill={GREEN}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
      />
      <motion.circle
        cx="380"
        cy="200"
        r="5"
        fill={PURPLE}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.circle
        cx="240"
        cy="320"
        r="5"
        fill={GREEN}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
      />
      <motion.circle
        cx="100"
        cy="200"
        r="5"
        fill={PURPLE}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
      />
    </motion.svg>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        paddingTop: 80,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", width: "100%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: "inline-block",
                background: `${GREEN}15`,
                color: GREEN,
                borderRadius: 100,
                padding: "6px 16px",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 24,
                fontFamily: "Manrope, sans-serif",
              }}
            >
              Consultoría Boutique · Estrategia + Ejecución
            </motion.span>

            <h1 style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              lineHeight: 1.1,
              color: NAVY,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}>
              Convertimos el esfuerzo de tu equipo en un sistema de ejecución medible.
            </h1>

            <p style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 1.5vw, 1.125rem)",
              lineHeight: 1.7,
              color: `${NAVY}b0`,
              marginBottom: 16,
            }}>
              Diseñamos e implementamos modelos comerciales y operativos para que tu empresa venda mejor, opere con mayor claridad y deje de depender del seguimiento informal.
            </p>

            <p style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.06em",
              color: `${NAVY}70`,
              marginBottom: 40,
              textTransform: "uppercase",
            }}>
              Procesos · KPIs · Cadencia · Tableros · Accountability
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(16,185,129,0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
                data-testid="hero-primary-cta"
                style={{
                  background: GREEN,
                  color: "#fff",
                  border: "none",
                  borderRadius: 100,
                  padding: "14px 28px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(16,185,129,0.3)",
                }}
              >
                Agenda una sesión de diagnóstico
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo("#metodologia")}
                data-testid="hero-secondary-cta"
                style={{
                  background: "transparent",
                  color: NAVY,
                  border: `2px solid ${NAVY}`,
                  borderRadius: 100,
                  padding: "14px 28px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Ver metodología
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            style={{ height: 400, display: "flex", alignItems: "center", justifyContent: "center" }}
            className="hero-visual"
          >
            <AbstractSystem />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-visual { height: 260px !important; }
        }
      `}</style>
    </section>
  );
}
