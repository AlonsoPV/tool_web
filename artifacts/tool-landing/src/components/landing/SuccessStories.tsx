import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Building2, Code2, Database, HeartPulse, Sparkles, TrendingUp } from "lucide-react";

export const stories = [
  {
    company: "Edison 58",
    industry: "Desarrollo inmobiliario",
    metric: "$29 MDP",
    metricLabel: "en ventas en 8 meses",
    headline: "90% del desarrollo vendido.",
    description: "Creamos el sistema completo de adquisición, desde marketing hasta la venta. Edison 58 registró $29 MDP en ventas en ocho meses y alcanzó el 90% del desarrollo vendido.",
    actions: "Creamos y estructuramos el sistema completo de adquisición, conectando marketing con el proceso de venta.",
    value: "Una operación de adquisición y venta integrada: $29 MDP en ventas en ocho meses y 90% del desarrollo vendido.",
    focus: "Marketing + adquisición + venta",
    icon: Building2,
    tone: "blue",
  },
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
    actions: "Digitalizamos la captación de pacientes y el seguimiento con expediente clínico en una clínica dermatológica de la Roma, CDMX.",
    value: "La captación dejó de depender de WhatsApp suelto y la retención se sostuvo con historial, recordatorios y continuidad de tratamiento.",
    industry: "Clínica dermatológica · Roma, CDMX",
    metric: "+38% / +24%",
    metricLabel: "captación nueva · retención a 6 meses",
    headline: "Más pacientes nuevos y más que regresan, con un proceso digital.",
    description: "En una clínica dermatológica de la Roma digitalizamos la captación de pacientes y el manejo de expediente. En seis meses la captación nueva creció 38% y la retención 24%, al conectar solicitud, agenda, historial y seguimiento en un mismo flujo.",
    focus: "Captación digital + expediente + retención",
    icon: HeartPulse,
    tone: "green",
  },
  {
    company: "Kyrie México",
    actions: "Estandarizamos el proceso comercial para dar visibilidad por línea, vendedor y etapa, y controlar la incorporación de productos.",
    value: "Con un método común, Dirección pudo dirigir la venta por línea y no solo por vendedor: más control, más cobertura y más mix de oferta.",
    industry: "Distribución de cosméticos",
    metric: "+31% / +4 líneas",
    metricLabel: "venta por línea · nuevas líneas controladas",
    headline: "El proceso estándar dio control para vender mejor cada línea.",
    description: "Estandarizamos cómo Kyrie vende, da seguimiento y reporta. Con pipeline y criterios comunes, la empresa ganó control sobre cada línea: qué se mueve, qué se estanca y dónde empujar. En el siguiente ciclo la venta por línea creció 31% y se incorporaron 4 líneas nuevas sin perder orden.",
    focus: "Proceso estándar + control de líneas + venta",
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
    ? stories.filter(story => ["Edison 58", "Collecta", "INBest"].includes(story.company)).sort((a, b) => ["Edison 58", "Collecta", "INBest"].indexOf(a.company) - ["Edison 58", "Collecta", "INBest"].indexOf(b.company))
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
