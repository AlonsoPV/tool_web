import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";

const bullets = [
  "Empresas con equipos comerciales u operativos en crecimiento.",
  "Negocios con CRM o herramientas subutilizadas.",
  "Empresas donde la operación depende demasiado de ciertas personas.",
  "Directores que necesitan visibilidad real de su operación.",
  "Equipos con muchas juntas pero poco seguimiento efectivo.",
  "Empresas que venden, pero pierden clientes por falta de estructura.",
  "Organizaciones que quieren profesionalizar su operación.",
];

export default function WhoIsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="para-quien" className="who-section" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }} ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="who-header"
          style={{ textAlign: "center" }}
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
            Para quién es
          </span>
          <h2 style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(1.5rem, 4.5vw, 2.5rem)",
            color: NAVY,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            maxWidth: 640,
            margin: "0 auto",
          }}>
            Esta consultoría es para empresas que quieren crecer sin operar en caos.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="who-grid"
        >
          {bullets.map((b, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0, transition: { duration: 0.4 } } }}
              whileHover={{ x: 4 }}
              data-testid={`who-bullet-${i}`}
              className="who-card"
              style={{
                display: "flex",
                alignItems: "flex-start",
                background: "#F1F3F6",
                border: "1px solid #E5E7EB",
                transition: "all 0.2s",
                cursor: "default",
              }}
            >
              <CheckCircle2 size={20} color={GREEN} className="who-card-icon" style={{ flexShrink: 0, marginTop: 2 }} />
              <p style={{
                fontFamily: "Manrope, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(13px, 2.8vw, 15px)",
                color: NAVY,
                margin: 0,
                lineHeight: 1.5,
              }}>
                {b}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .who-section {
          padding: 96px 24px;
        }
        .who-header {
          margin-bottom: 56px;
        }
        .who-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .who-card {
          gap: 16px;
          padding: 20px 24px;
          border-radius: 16px;
          min-width: 0;
        }
        .who-grid > :last-child:nth-child(odd) {
          grid-column: 1 / -1;
          max-width: calc(50% - 6px);
          justify-self: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .who-section {
            padding: 72px 20px;
          }
          .who-header {
            margin-bottom: 40px;
          }
          .who-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .who-grid > :last-child:nth-child(odd) {
            grid-column: auto;
            max-width: none;
          }
          .who-card {
            gap: 12px;
            padding: 16px 18px;
            border-radius: 14px;
          }
        }

        @media (max-width: 480px) {
          .who-section {
            padding: 56px 16px;
          }
          .who-header {
            margin-bottom: 28px;
          }
          .who-card {
            gap: 10px;
            padding: 14px 14px;
            border-radius: 12px;
          }
        }
      `}</style>
    </section>
  );
}
