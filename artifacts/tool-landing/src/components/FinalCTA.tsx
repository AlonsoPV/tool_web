import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, MessageCircle } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

const bullets = [
  "Tu primer diagnóstico es gratuito y sin compromiso.",
  "En 45 minutos identificamos si tenemos fit y cuál es tu siguiente paso.",
  "Si no hay fit, te decimos qué necesitas. Sin venta forzada.",
];

function FloatingOrb({ x, y, size, color, delay }: { x: string; y: string; size: number; color: string; delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${color}25 0%, transparent 70%)`,
        pointerEvents: "none",
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacto" style={{ background: `linear-gradient(160deg, ${NAVY} 0%, #0d2550 60%, #0a1d3d 100%)`, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      {/* Animated orbs */}
      <FloatingOrb x="-5%" y="10%" size={400} color={GREEN} delay={0} />
      <FloatingOrb x="75%" y="-10%" size={350} color={PURPLE} delay={2} />
      <FloatingOrb x="50%" y="70%" size={300} color={GREEN} delay={1.5} />

      {/* Grid texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 1 }} ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center" }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: `${GREEN}20`,
              border: `1px solid ${GREEN}35`,
              borderRadius: 100,
              padding: "8px 20px",
              marginBottom: 32,
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 8, height: 8, borderRadius: "50%", background: GREEN }}
            />
            <span style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: GREEN,
            }}>
              Diagnóstico gratuito disponible
            </span>
          </motion.div>

          {/* Headline */}
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: 20,
          }}>
            Tu empresa ya trabaja duro.<br />
            <span style={{
              background: `linear-gradient(135deg, ${GREEN}, #34d399)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Ahora que trabaje bien.
            </span>
          </h2>

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 36,
            maxWidth: 600,
            margin: "0 auto 36px",
          }}>
            Da el primer paso. Una sesión de diagnóstico para entender tu situación actual y ver si TOOL es el match correcto para lo que necesitas.
          </p>

          {/* Bullets */}
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 48, maxWidth: 520, margin: "0 auto 48px" }}
          >
            {bullets.map((b, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                style={{ display: "flex", alignItems: "flex-start", gap: 12, textAlign: "left" }}
              >
                <div style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: GREEN,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.8)",
                  margin: 0,
                  lineHeight: 1.6,
                }}>
                  {b}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 16px 48px rgba(16,185,129,0.55)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
              data-testid="cta-whatsapp-main"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: GREEN,
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "16px 32px",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 8px 28px rgba(16,185,129,0.4)",
              }}
            >
              <MessageCircle size={18} />
              Habla con Abraham
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, background: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://wa.me/5255119811499", "_blank")}
              data-testid="cta-whatsapp-alonso"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.08)",
                color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.2)",
                borderRadius: 100,
                padding: "16px 32px",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                transition: "background 0.2s",
              }}
            >
              <MessageCircle size={18} />
              Habla con Alonso
            </motion.button>
          </motion.div>

          {/* LinkedIn strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              color: "rgba(255,255,255,0.4)",
              alignSelf: "center",
            }}>
              También en LinkedIn:
            </span>
            <motion.a
              href="https://www.linkedin.com/in/abraham-harris-7b91951b1/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.12)" }}
              data-testid="cta-linkedin-abraham"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "8px 16px",
                textDecoration: "none",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                transition: "all 0.2s",
              }}
            >
              <Linkedin size={14} />
              Abraham
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/alonsoperezvazquez/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, background: "rgba(255,255,255,0.12)" }}
              data-testid="cta-linkedin-alonso"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 100,
                padding: "8px 16px",
                textDecoration: "none",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: 13,
                transition: "all 0.2s",
              }}
            >
              <Linkedin size={14} />
              Alonso
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
