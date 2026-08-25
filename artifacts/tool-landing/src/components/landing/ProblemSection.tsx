import { motion } from "framer-motion";
import SectionShell from "@/components/landing/SectionShell";
import { GREEN, LIGHT_BG, NAVY, sectionDescStyle, sectionLabelStyle, sectionTitleStyle, stagger } from "@/lib/landing-theme";

const problems = [
  "El mercado no está explotado ni segmentado.",
  "Las ventas perdidas no están clasificadas.",
  "La recompra existe, pero no se gestiona como estrategia.",
  "Los vendedores mantienen clientes, pero no siempre desarrollan mercado.",
  "El CRM existe o se implementa, pero falta cultura de uso.",
  "La dirección quiere usar data, pero la operación consume su tiempo.",
];

export default function ProblemSection() {
  return (
    <SectionShell id="problema" style={{ background: LIGHT_BG }} className="problem-section">
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span style={{ ...sectionLabelStyle, background: `${NAVY}10`, color: NAVY }}>Estado actual</span>
        <h2 style={{ ...sectionTitleStyle, maxWidth: 720 }}>
          El problema no es falta de esfuerzo. Es falta de foco comercial y sistema de gestión.
        </h2>
        <p style={{ ...sectionDescStyle, maxWidth: 680 }}>
          Muchas empresas tienen vendedores leales, clientes cautivos, conocimiento técnico y oportunidades reales. Pero cuando todos venden de todo, las decisiones se toman por intuición y los KPIs no guían la acción, el crecimiento depende demasiado del liderazgo diario.
        </p>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="problem-list"
      >
        {problems.map((p, i) => (
          <motion.div
            key={p}
            variants={{ hidden: { opacity: 0, x: -16 }, show: { opacity: 1, x: 0 } }}
            className="problem-item"
          >
            <span className="problem-num">{String(i + 1).padStart(2, "0")}</span>
            {p}
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        className="problem-quote"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        La empresa no necesita más presión. Necesita convertir su experiencia en sistema.
      </motion.p>

      <style>{`
        .problem-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          max-width: 900px;
          margin: 0 auto;
        }
        .problem-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #fff;
          border: 1px solid #E5E7EB;
          border-radius: 14px;
          padding: 16px 18px;
          font-family: Manrope, sans-serif;
          font-weight: 600;
          font-size: 14px;
          color: ${NAVY};
          line-height: 1.45;
        }
        .problem-num {
          font-weight: 800;
          font-size: 12px;
          color: ${GREEN};
          flex-shrink: 0;
        }
        .problem-quote {
          text-align: center;
          margin: 48px auto 0;
          max-width: 560px;
          font-family: Manrope, sans-serif;
          font-weight: 800;
          font-size: clamp(1.1rem, 2.8vw, 1.35rem);
          color: ${NAVY};
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .problem-list { grid-template-columns: 1fr; }
        }
      `}</style>
    </SectionShell>
  );
}
