import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import logoImg from "@assets/ChatGPT_Image_8_jul_2026,_02_23_41_p.m._1783542231097.png";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}


function FlowDiagram() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <svg width="100%" height="100%" viewBox="0 0 460 400" fill="none" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={GREEN} stopOpacity="0.6" />
            <stop offset="100%" stopColor={PURPLE} stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* Outer orbit ring */}
        <motion.circle cx="230" cy="195" r="140"
          stroke={`${NAVY}08`} strokeWidth="1.5" fill="none" strokeDasharray="6 6"
          animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "230px 195px" }}
        />
        <motion.circle cx="230" cy="195" r="95"
          stroke={`${NAVY}06`} strokeWidth="1" fill="none" strokeDasharray="3 8"
          animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "230px 195px" }}
        />

        {/* Connection lines with animated dash */}
        {[
          [230, 55, 370, 195], [230, 55, 90, 195], [370, 195, 230, 335],
          [90, 195, 230, 335], [230, 55, 230, 195], [230, 195, 230, 335],
          [90, 195, 370, 195],
        ].map(([x1, y1, x2, y2], i) => (
          <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={i % 2 === 0 ? `${GREEN}35` : `${PURPLE}25`}
            strokeWidth="1.5"
            strokeDasharray="5 5"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Top node - DIAGNÓSTICO */}
        <motion.circle cx="230" cy="55" r="40" fill="white" stroke={GREEN} strokeWidth="2"
          style={{ filter: "drop-shadow(0 4px 16px rgba(16,185,129,0.2))" }}
          animate={{ y: [0, -5, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="230" cy="55" r="26" fill={`${GREEN}15`} />
        <circle cx="230" cy="55" r="10" fill={GREEN} filter="url(#glow)" />
        <text x="230" y="105" textAnchor="middle" fill={NAVY} fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="10" opacity="0.7">DIAGNÓSTICO</text>

        {/* Right node - SISTEMA */}
        <motion.circle cx="370" cy="195" r="36" fill="white" stroke={PURPLE} strokeWidth="2"
          style={{ filter: "drop-shadow(0 4px 16px rgba(124,77,255,0.2))" }}
          animate={{ y: [0, 5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <circle cx="370" cy="195" r="22" fill={`${PURPLE}15`} />
        <circle cx="370" cy="195" r="9" fill={PURPLE} filter="url(#glow)" />
        <text x="370" y="242" textAnchor="middle" fill={NAVY} fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="10" opacity="0.7">SISTEMA</text>

        {/* Bottom node - EJECUCIÓN */}
        <motion.circle cx="230" cy="335" r="40" fill="white" stroke={GREEN} strokeWidth="2"
          style={{ filter: "drop-shadow(0 4px 16px rgba(16,185,129,0.2))" }}
          animate={{ y: [0, 5, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <circle cx="230" cy="335" r="26" fill={`${GREEN}15`} />
        <circle cx="230" cy="335" r="10" fill={GREEN} filter="url(#glow)" />
        <text x="230" y="385" textAnchor="middle" fill={NAVY} fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="10" opacity="0.7">EJECUCIÓN</text>

        {/* Left node - ESTRATEGIA */}
        <motion.circle cx="90" cy="195" r="36" fill="white" stroke={PURPLE} strokeWidth="2"
          style={{ filter: "drop-shadow(0 4px 16px rgba(124,77,255,0.2))" }}
          animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <circle cx="90" cy="195" r="22" fill={`${PURPLE}15`} />
        <circle cx="90" cy="195" r="9" fill={PURPLE} filter="url(#glow)" />
        <text x="90" y="242" textAnchor="middle" fill={NAVY} fontFamily="Manrope, sans-serif" fontWeight="700" fontSize="10" opacity="0.7">ESTRATEGIA</text>

        {/* Center - TOOL logo concept */}
        <circle cx="230" cy="195" r="44" fill="white" stroke={`${NAVY}15`} strokeWidth="2"
          style={{ filter: "drop-shadow(0 8px 24px rgba(10,29,61,0.1))" }}
        />
        <circle cx="218" cy="195" r="16" fill="none" stroke={NAVY} strokeWidth="3" />
        <circle cx="242" cy="195" r="16" fill="none" stroke={NAVY} strokeWidth="3" />
        <circle cx="230" cy="195" r="5" fill={GREEN} filter="url(#glow)" />

        {/* Pulsing rings on center */}
        <motion.circle cx="230" cy="195" r="58"
          fill="none" stroke={GREEN} strokeWidth="1.5"
          animate={{ opacity: [0.5, 0, 0.5], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: "230px 195px" }}
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section id="hero" ref={containerRef} style={{ minHeight: "100vh", background: "#fff", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
      {/* Ambient background orbs */}
      <div style={{ position: "absolute", top: -80, right: -80, width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${GREEN}06 0%, transparent 70%)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 60, left: -100, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle, ${PURPLE}05 0%, transparent 70%)`, pointerEvents: "none" }} />

      <motion.div style={{ y, opacity, flex: 1, display: "flex", alignItems: "center", paddingTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px 40px", width: "100%" }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>

            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN }}
                />
                <span style={{
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: `${NAVY}70`,
                }}>
                  Consultoría Boutique · Estrategia + Ejecución
                </span>
              </motion.div>

              <h1 style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
                lineHeight: 1.08,
                color: NAVY,
                marginBottom: 24,
                letterSpacing: "-0.025em",
              }}>
                Convertimos el esfuerzo de tu equipo en un{" "}
                <span style={{
                  background: `linear-gradient(135deg, ${GREEN}, ${PURPLE})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>
                  sistema de ejecución medible.
                </span>
              </h1>

              <p style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                lineHeight: 1.75,
                color: `${NAVY}85`,
                marginBottom: 14,
              }}>
                Diseñamos e implementamos modelos comerciales y operativos para que tu empresa venda mejor, opere con mayor claridad y deje de depender del seguimiento informal.
              </p>

              <div style={{
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 40,
              }}>
                {["Procesos", "KPIs", "Cadencia", "Tableros", "Accountability"].map((tag) => (
                  <span key={tag} style={{
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 11,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: `${NAVY}60`,
                    background: `${NAVY}07`,
                    borderRadius: 100,
                    padding: "5px 12px",
                    border: `1px solid ${NAVY}10`,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 12px 32px rgba(16,185,129,0.45)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
                  data-testid="hero-primary-cta"
                  style={{
                    background: GREEN,
                    color: "#fff",
                    border: "none",
                    borderRadius: 100,
                    padding: "15px 30px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(16,185,129,0.35)",
                  }}
                >
                  Agenda una sesión de diagnóstico
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02, background: `${NAVY}08` }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollTo("#metodologia")}
                  data-testid="hero-secondary-cta"
                  style={{
                    background: "transparent",
                    color: NAVY,
                    border: `2px solid ${NAVY}25`,
                    borderRadius: 100,
                    padding: "15px 30px",
                    fontFamily: "Manrope, sans-serif",
                    fontWeight: 700,
                    fontSize: 15,
                    cursor: "pointer",
                    transition: "background 0.2s",
                  }}
                >
                  Ver metodología
                </motion.button>
              </div>
            </motion.div>

            {/* Right — animated diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
              style={{ height: 420 }}
              className="hero-visual"
            >
              <FlowDiagram />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-visual { height: 280px !important; }
        }
      `}</style>
    </section>
  );
}
