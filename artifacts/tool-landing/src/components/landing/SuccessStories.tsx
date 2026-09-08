import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Code2, Database, HeartPulse, Sparkles, TrendingUp } from "lucide-react";

export const stories = [
  {
    company: "ZAIAH",
    actions: "Diseñamos el sistema de adquisición y venta y alineamos prioridades y responsabilidades.",
    value: "Conectamos la estrategia de crecimiento con la ejecución comercial. La empresa levantó $14 MDP en ocho meses.",
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
    actions: "Estructuramos la operación de ventas y un esquema de compensación ligado a las metas del negocio.",
    value: "Alineamos la forma de vender y los incentivos del equipo con los objetivos de la empresa.",
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
    actions: "Maduramos la operación comercial y desarrollamos al vendedor con mejor desempeño hasta asumir la Dirección Comercial.",
    value: "Instalamos liderazgo dentro del equipo para que la venta dejara de depender del CEO.",
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
    actions: "Diseñamos la experiencia del cliente y una estrategia de venta cruzada y ampliación de servicios.",
    value: "Trabajamos el crecimiento sobre la cartera existente: churn de 30% a 0% en un año y 10% más valor de cartera.",
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
    actions: "Optimizamos la recepción de solicitudes, los tiempos de respuesta y el uso de la plataforma de atención.",
    value: "Conectamos captación y seguimiento en un mismo proceso, mejorando la atención y la retención de clientes.",
    industry: "Salud y cuidado de la piel",
    metric: "Mejor atención",
    metricLabel: "captación y retención",
    headline: "Una atención más ordenada, de la solicitud al seguimiento.",
    description: "Acompañamos a DermaMX en la optimización de su proceso de atención, desde la recepción de solicitudes hasta el seguimiento. Alineamos tiempos de respuesta y uso de la plataforma para dar continuidad a cada contacto y mejorar la captación y retención de clientes.",
    focus: "Atención al cliente + captación + retención",
    icon: HeartPulse,
    tone: "green",
  },
  {
    company: "Kyrie México",
    actions: "Mejoramos y estandarizamos el proceso comercial para gestionar la incorporación de nuevas líneas y productos.",
    value: "Dimos una base común a la venta para ampliar la oferta con una operación más ordenada.",
    industry: "Distribución de cosméticos",
    metric: "Proceso comercial",
    metricLabel: "estandarizado para crecer",
    headline: "Una forma común de vender para ampliar la oferta.",
    description: "Acompañamos a Kyrie en la mejora y estandarización de su proceso comercial. Establecimos una forma común de gestionar la venta para facilitar la incorporación de nuevas líneas y productos y dar estructura a la ampliación de su oferta.",
    focus: "Estandarización comercial + ampliación de oferta",
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
                <p><strong>Qué hicimos</strong><br/>{story.actions}</p>
                <p><strong>Valor aportado</strong><br/>{story.value}</p>
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
          <small className="success-stories-note">El alcance, los plazos y los resultados dependen de cada proyecto.</small>
        )}
      </div>
    </section>
  );
}
