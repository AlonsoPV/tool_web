import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, MessageCircle, Calendar } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";
const PURPLE = "#7C4DFF";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contacto" style={{ background: NAVY, padding: "96px 24px", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute",
        top: -120,
        right: -80,
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: `${GREEN}08`,
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: -100,
        left: -60,
        width: 320,
        height: 320,
        borderRadius: "50%",
        background: `${PURPLE}08`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            display: "inline-block",
            background: `${GREEN}20`,
            color: GREEN,
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 28,
            fontFamily: "Manrope, sans-serif",
          }}>
            Da el primer paso
          </span>

          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3rem)",
            color: "#fff",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            marginBottom: 20,
          }}>
            Tu empresa no necesita más juntas. Necesita mejores decisiones.
          </h2>

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 48,
            maxWidth: 560,
            margin: "0 auto 48px",
          }}>
            Agenda una sesión de diagnóstico para identificar dónde se está perdiendo foco, eficiencia y crecimiento dentro de tu operación.
          </p>

          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(16,185,129,0.5)" }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
            data-testid="final-cta-button"
            style={{
              background: GREEN,
              color: "#fff",
              border: "none",
              borderRadius: 100,
              padding: "16px 40px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              cursor: "pointer",
              boxShadow: "0 6px 24px rgba(16,185,129,0.35)",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 48,
            }}
          >
            <Calendar size={18} />
            Agendar diagnóstico
          </motion.button>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 40 }}>
            <p style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 600,
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}>
              Contacta directamente con el equipo
            </p>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <motion.a
                href="https://wa.me/5255514520477"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid="cta-whatsapp-abraham"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(16,185,129,0.15)",
                  color: GREEN,
                  borderRadius: 100,
                  padding: "10px 20px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  border: `1px solid ${GREEN}30`,
                }}
              >
                <MessageCircle size={15} />
                WhatsApp Abraham
              </motion.a>

              <motion.a
                href="https://wa.me/5255119811499"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid="cta-whatsapp-alonso"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(16,185,129,0.15)",
                  color: GREEN,
                  borderRadius: 100,
                  padding: "10px 20px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  border: `1px solid ${GREEN}30`,
                }}
              >
                <MessageCircle size={15} />
                WhatsApp Alonso
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/abraham-harris-7b91951b1/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid="cta-linkedin-abraham"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                  borderRadius: 100,
                  padding: "10px 20px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Linkedin size={15} />
                LinkedIn Abraham
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/alonsoperezvazquez/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-testid="cta-linkedin-alonso"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.8)",
                  borderRadius: 100,
                  padding: "10px 20px",
                  fontFamily: "Manrope, sans-serif",
                  fontWeight: 700,
                  fontSize: 13,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Linkedin size={15} />
                LinkedIn Alonso
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
