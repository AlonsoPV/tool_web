import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Code2, Database, HeartPulse, Sparkles, TrendingUp } from "lucide-react";

export const stories = [
  {
    company: "ZAIAH",
    industry: "Desarrollo inmobiliario",
    metric: "$14 MDP",
    metricLabel: "capital levantado",
    headline: "Un sistema comercial capaz de sostener el crecimiento.",
    description: "Diseñamos su sistema de adquisición y venta. En ocho meses levantaron capital y alinearon visión, prioridades y responsabilidades para crecer con mayor claridad.",
    focus: "Estrategia + sistema de adquisición",
    icon: Building2,
    tone: "blue",
  },
  {
    company: "Blue Pixel",
    industry: "Desarrollo de software",
    metric: "Sistema",
    metricLabel: "comercial",
    headline: "Más claridad, estructura y foco para vender.",
    description: "Implementamos una forma común de operar ventas y un esquema de compensación conectado con las metas de la empresa.",
    focus: "Operación comercial + incentivos",
    icon: Code2,
    tone: "purple",
  },
  {
    company: "INBest",
    industry: "Desarrollo de software",
    metric: "Sucesión",
    metricLabel: "comercial",
    headline: "La venta dejó de depender del CEO.",
    description: "Maduramos la operación comercial y desarrollamos al vendedor con mejor desempeño hasta convertirlo en Director Comercial.",
    focus: "Liderazgo + capacidad instalada",
    icon: TrendingUp,
    tone: "purple",
  },
  {
    company: "Collecta",
    industry: "Cobranza privada y tecnología",
    metric: "30% → 0%",
    metricLabel: "churn en un año",
    headline: "La experiencia del cliente se convirtió en crecimiento.",
    description: "Diseñamos customer experience y una estrategia de cross-sell y upsell que, además de eliminar el churn, incrementó 10% el valor de la cartera.",
    focus: "Experiencia + expansión de cartera",
    icon: Database,
    tone: "green",
  },
  {
    company: "DermaMX",
    industry: "Salud y cuidado de la piel",
    metric: "2 sucursales",
    metricLabel: "operación actual",
    headline: "Procesos comerciales más claros para una expansión estructurada.",
    description: "Ayudamos a mejorar sus procesos comerciales y a estructurar su expansión. Una operación alineada con su esencia: cuidar la salud y el aspecto de la piel con ciencia médica, tecnología especializada y ética profesional.",
    focus: "Procesos comerciales + expansión",
    icon: HeartPulse,
    tone: "green",
  },
  {
    company: "Kyrie México",
    industry: "Distribución de cosméticos",
    metric: "3 líneas",
    metricLabel: "portafolio actual",
    headline: "Cosmética francesa para el mercado mexicano.",
    description: "Kyrie México se especializa en distribuir líneas de cosméticos francesas en México. Actualmente maneja un portafolio de tres líneas.",
    focus: "Perfil de la empresa",
    icon: Sparkles,
    tone: "purple",
  },
];

type SuccessStoriesProps = {
  mode?: "preview" | "full";
};

export default function SuccessStories({ mode = "full" }: SuccessStoriesProps) {
  const reduceMotion = useReducedMotion();
  const visibleStories = mode === "preview"
    ? stories.filter((_, index) => [0, 3, 2].includes(index)).sort((a, b) => ["ZAIAH", "Collecta", "INBest"].indexOf(a.company) - ["ZAIAH", "Collecta", "INBest"].indexOf(b.company))
    : stories;

  return (
    <section id="casos-de-exito" className="landing-section success-stories-section">
      <div className="success-stories-inner">
        <motion.header
          className="success-stories-header"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: .5 }}
        >
          <span className="tool-eyebrow">Resultados reales</span>
          <div>
            <h2>{mode === "preview" ? "El cambio se vuelve real cuando puede verse." : "Los resultados aparecen cuando el equipo puede repetir lo que funciona."}</h2>
            <p>{mode === "preview" ? "Tres retos distintos. Una misma capacidad para convertir decisiones en resultados." : "Contextos distintos y cambios construidos con cada equipo."}</p>
          </div>
        </motion.header>

        <motion.div
          className={`success-stories-grid${mode === "preview" ? " is-preview" : ""}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }}
        >
          {visibleStories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.article
                className="success-story-card"
                data-tone={story.tone}
                key={story.company}
                variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: .45 } } }}
              >
                <div className="success-story-topline">
                  <div className="success-story-company">
                    <span><Icon size={18} /></span>
                    <div><strong>{story.company}</strong><small>{story.industry}</small></div>
                  </div>
                  <span className="success-story-index">0{index + 1}</span>
                </div>

                <div className="success-story-result">
                  <strong>{story.metric}</strong>
                  <span>{story.metricLabel}</span>
                </div>
                <h3>{story.headline}</h3>
                <p>{story.description}</p>
                <footer>{story.focus}</footer>
              </motion.article>
            );
          })}
        </motion.div>

        {mode === "preview" ? (
          <div className="success-stories-preview-link">
            <a href="/que-hacemos#casos-de-exito">Ver resultados y cómo los construimos <ArrowRight size={15} /></a>
          </div>
        ) : (
          <small className="success-stories-note">El alcance y los resultados dependen de cada proyecto. Las sucursales y líneas de producto describen la escala actual de las empresas, no resultados atribuibles a TOOL.</small>
        )}
      </div>
    </section>
  );
}
