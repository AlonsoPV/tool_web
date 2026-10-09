import { ArrowRight, ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { DEMO_URL } from '@/lib/landing-theme';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';

const contact = `${DEMO_URL}?text=${encodeURIComponent('Hola, quiero conversar sobre la propuesta de 21 semanas para GAOZ y definir el arranque.')}`;

const challenges = [
  { title: 'Falta de estructura comercial', copy: 'No existe una estructura suficientemente definida de funciones, procesos, autoridad, objetivos y seguimiento que permita coordinar al equipo y sostener resultados.' },
  { title: 'Dependencia del dueño', copy: 'Las relaciones y el conocimiento comercial se concentran en una persona. Hay que distinguir qué prácticas son replicables y cuáles dependen de relaciones personales.' },
  { title: 'Ventas poco predecibles', copy: 'Faltan estándares y mecanismos de gobierno que aseguren seguimiento, decisiones y cumplimiento.' },
  { title: 'Capital inmovilizado', copy: 'Inventario detenido y cuentas vencidas restringen la liquidez.' },
  { title: 'Decisiones con visibilidad limitada', copy: 'Se necesita convertir el CRM en una fuente confiable para anticipar problemas y accionar.' },
];

const fronts = [
  {
    label: 'Resultados de corto plazo',
    items: [
      'Colocación de inventario detenido.',
      'Venta de productos ya validados.',
      'Recuperación de cuentas por cobrar.',
      'Reactivación y desarrollo de clientes actuales.',
    ],
  },
  {
    label: 'Transformación estructural',
    items: [
      'Procesos y políticas comerciales.',
      'Estructura, gobierno y capacidades del equipo.',
      'CRM, indicadores y objetivos.',
      'Hábitos de ejecución y autonomía.',
    ],
  },
];

const stages = [
  {
    id: 'etapa-1',
    n: '01',
    weeks: 'Semanas 1–4',
    title: 'Diagnosticar y activar',
    purpose: 'Identificar dónde se pierde valor y comenzar a recuperarlo.',
    steps: [
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Mapear el ciclo completo', copy: 'Prospección, calificación, cotización, cierre, entrega, cobranza, postventa y recompra. Detectar fricciones, traspasos entre áreas y razones sociales.' },
      { title: 'Evaluar capacidades y cultura', copy: 'Habilidades, hábitos, disciplina de seguimiento, estructura y capacidad de venta y entrega instalada.' },
      { title: 'Analizar datos y mercado', copy: 'Caídas del funnel, ticket, margen, productos, cartera, inventario, segmentos y territorios. Distinguir equipos nuevos y reacondicionados. Registrar faltantes antes de inferir causas.' },
    ],
    deliverables: 'Diagnóstico ejecutivo, mapa de procesos y brechas, línea base de KPIs, prioridades de mercado y tres listas de ejecución activas.',
    gate: 'Prioridades y metas calibradas al cierre de semana 4. Oportunidades comerciales y de cobranza con seguimiento verificable.',
  },
  {
    id: 'etapa-2',
    n: '02',
    weeks: 'Semanas 5–8',
    title: 'Diseñar y validar',
    purpose: 'Convertir las mejores prácticas en un método comercial sencillo, medible y replicable.',
    steps: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definición de meta de ventas y KPIs.' },
      { title: 'Activar resultados · semanas 1–2', copy: 'Construir listas accionables de inventario, productos validados y cartera vencida. Priorizar cada caso por potencial, factibilidad, siguiente acción y fecha.' },
      { title: 'Proceso y políticas', copy: 'Estandarizar etapas y criterios de avance, cotización, precios, descuentos, crédito, cobranza, garantías, entrega y recompra. Contemplar razones sociales y traspasos entre áreas.' },
      { title: 'Enfoque comercial', copy: 'Priorizar segmentos, productos, territorios y canales por margen, demanda y capacidad. Distinguir propuesta de valor y condiciones de equipos nuevos frente a reacondicionados.' },
      { title: 'Herramientas mínimas útiles', copy: 'CRM con etapas y campos obligatorios, cotizador, fichas, one-pagers, presentaciones, playbook, tablero de KPIs y OKRs, y reuniones orientadas a decisiones.' },
    ],
    deliverables: 'Modelo objetivo, procesos y políticas, kit comercial, diseño de CRM y tablero, plan de capacidades y piloto validado.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales.',
  },
  {
    id: 'etapa-3',
    n: '03',
    weeks: 'Semanas 9–21',
    title: 'Implementar y consolidar',
    purpose: 'Convertir el modelo en ejecución constante y autonomía.',
    steps: [
      { title: 'Sales Readiness', copy: 'Desarrollar habilidades de diagnóstico consultivo, negociación, manejo de objeciones, cierre y seguimiento, según las brechas observadas.' },
      { title: 'Funciones y decisión', copy: 'Implementar funciones y niveles de decisión, con acompañamiento práctico sobre casos reales.' },
      { title: 'Reuniones institucionalizadas', copy: 'Revisar ventas, conversión, márgenes, cobranza, inventario y compromisos con una cadencia fija.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad.' },
      { title: 'Piloto con casos reales', copy: 'Probar el proceso en oportunidades y gestiones de cobranza. Corregir fricciones antes del despliegue.' },
      { title: 'Corrección con datos', copy: 'Corregir desviaciones con datos y verificar que las acciones se ejecuten y produzcan resultados.' },
      { title: 'Estrategia 2027', copy: 'Diseño de la estrategia comercial para 2027.' },
    ],
    deliverables: 'Operación comercial funcionando, tablero activo, reuniones institucionalizadas, desempeño comparado con línea base y plan de continuidad de 90 días.',
    gate: 'Cuatro ciclos semanales consecutivos de seguimiento conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
  },
];

const priorities = [
  { title: 'Inventario detenido', copy: 'Validar equipos comercializables, disponibilidad, margen y clientes compatibles. Seguir cada caso hasta venta, entrega y cobro, diferenciando estos hitos.' },
  { title: 'Productos validados', copy: 'Focalizar ventas en soluciones que GAOZ ya domina, con propuesta de valor, cotización y seguimiento estándar.' },
  { title: 'Cobranza', copy: 'Conciliar saldos por cliente y razón social. Segmentar por antigüedad, monto y recuperabilidad. Registrar promesas de pago, bloqueos y acciones preventivas.' },
  { title: 'Mercado', copy: 'Ajustar segmentos, productos, canales y territorios conforme a respuesta comercial, rentabilidad y capacidad real de entrega.' },
];

const cadences = [
  { name: 'Semanal', role: 'Operación', use: 'Revisar pipeline, cobranza, inventario y bloqueos.', output: 'Acciones, fechas y evidencia de avance.' },
  { name: 'Quincenal', role: 'Decisiones', use: 'Resolver desviaciones y decisiones que requieren escalamiento.', output: 'Decisiones y ajustes aprobados.' },
  { name: 'Mensual', role: 'Resultados', use: 'Evaluar OKRs, rentabilidad, liquidez y prioridades.', output: 'Resultados vs. línea base y cambios de enfoque.' },
];

const indicators = [
  { result: 'Más ventas', kpis: 'Ventas del equipo, pipeline, conversión por etapa, ciclo comercial y oportunidades perdidas.' },
  { result: 'Más rentabilidad', kpis: 'Ticket promedio y mediana, margen y mezcla por producto y tipo de equipo.' },
  { result: 'Más liquidez', kpis: 'Efectivo recuperado sobre cartera vencida conciliada, nuevos atrasos y reducción de inventario detenido.' },
  { result: 'Más disciplina', kpis: 'Oportunidades con siguiente paso, seguimiento oportuno y cumplimiento verificable de compromisos.' },
  { result: 'Más autonomía', kpis: 'Ventas sin intervención del dueño, decisiones autónomas y proporción de ventas vinculadas a su cartera.' },
];

const outcomes = [
  { title: 'Un sistema de ventas replicable', copy: 'Del primer contacto a la recompra, con prácticas estándar y capacidades desarrolladas.' },
  { title: 'Un mecanismo de generación de resultados', copy: 'Cartera, inventario y productos validados gestionados con acciones, no solo reportes.' },
  { title: 'Un gobierno comercial operativo', copy: 'Decisiones, compromisos, seguimiento y aprendizaje sustentados en datos.' },
  { title: 'Una operación menos dependiente del dueño', copy: 'Autoridad clara y cuatro ciclos consecutivos de gestión autónoma.' },
  { title: 'Un plan de continuidad de 90 días', copy: 'Indicadores, hábitos, mejoras pendientes y prioridades para sostener lo implementado.' },
];

function CTA({ children }: { children: string }) {
  return (
    <a className="gz-button" href={contact} target="_blank" rel="noopener noreferrer">
      <MessageCircle size={18} />
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}

export default function Gaoz() {
  return (
    <div className="gz gz-proposal">
      <PageMeta
        title="TOOL · Propuesta GAOZ | Sistema comercial en 21 semanas"
        description="Propuesta para transformar la operación comercial de GAOZ en un sistema estructurado, medible y replicable. Horizonte de 21 semanas, con activación desde la primera."
      />
      <a className="gz-skip" href="#gaoz-main">Saltar al contenido</a>
      <header className="gz-nav">
        <a href="/" className="gz-brand" aria-label="Ir a la web principal de TOOL">TOOL<span>GAOZ</span></a>
        <nav aria-label="Navegación de la propuesta">
          <a href="#reto">Reto</a>
          <a href="#ruta">Ruta</a>
          <a href="#gobierno">Gobierno</a>
          <a href="#cierre">Cierre</a>
        </nav>
        <a href={contact} target="_blank" rel="noopener noreferrer" className="gz-nav-cta">Hablemos <ArrowUpRight size={16} /></a>
      </header>

      <main id="gaoz-main">
        <section className="gz-hero">
          <div className="gz-hero-copy">
            <div className="gz-eyebrow"><span className="gz-dot" /> PROPUESTA · GAOZ</div>
            <h1>Vender más.<br /><span>Recuperar capital.</span></h1>
            <p className="gz-hero-lead"><strong>Construir una operación comercial que no dependa de una sola persona.</strong></p>
            <div className="gz-objective">
              <span>Objetivo</span>
              <p>Transformar la operación comercial de GAOZ en un sistema estructurado, medible y replicable, capaz de generar ventas, recuperar cartera y desarrollar autonomía.</p>
            </div>
            <div className="gz-actions">
              <a className="gz-text-link" href="#ruta">Ver la ruta de 21 semanas <ArrowRight size={16} /></a>
            </div>
            <div className="gz-hero-note">21 semanas <span>/</span> Activación desde la semana 1 <span>/</span> Operación real</div>
          </div>
          <div className="gz-system-visual gz-horizon" aria-label="Horizonte de 21 semanas: 4 de diagnóstico, 4 de diseño y 13 de implementación">
            <div className="gz-visual-head"><span>GAOZ / HORIZONTE</span><span>21 SEMANAS</span></div>
            <div className="gz-visual-title">La activación<br />empieza <em>ya.</em></div>
            <ol className="gz-horizon-list">
              <li><b>01</b><div><strong>Diagnosticar y activar</strong><span>4 semanas</span></div></li>
              <li><b>02</b><div><strong>Diseñar y validar</strong><span>4 semanas</span></div></li>
              <li><b>03</b><div><strong>Implementar y consolidar</strong><span>13 semanas</span></div></li>
            </ol>
            <div className="gz-visual-foot"><span className="gz-dot" /> ACTIVACIÓN COMERCIAL DESDE LA SEMANA 01</div>
          </div>
        </section>

        <div className="gz-proof">
          <span>DOS FRENTES A LA VEZ</span>
          <strong>Resultados de corto plazo</strong>
          <span>+</span>
          <strong>Transformación estructural</strong>
        </div>

        <section className="gz-section" id="reto">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">01 / EL RETO DE NEGOCIO</div>
              <h2>Lo que hoy limita<br /><span>el crecimiento.</span></h2>
            </div>
            <p>Cinco condiciones que la propuesta ataca al mismo tiempo: estructura, dependencia, predictibilidad, liquidez y visibilidad.</p>
          </div>
          <div className="gz-challenge-grid">
            {challenges.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gz-section gz-band gz-fronts" id="frentes">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">02 / DOS FRENTES SIMULTÁNEOS</div>
              <h2>Recuperar capital<br /><span>mientras se construye el sistema.</span></h2>
            </div>
          </div>
          <div className="gz-front-grid">
            {fronts.map((front, index) => (
              <article className={index === 0 ? 'is-now' : 'is-system'} key={front.label}>
                <h3>{front.label}</h3>
                <ul>
                  {front.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="gz-section gz-route" id="ruta">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">03 / RUTA DE EJECUCIÓN</div>
              <h2>Tres etapas.<br /><span>Una puerta de salida en cada una.</span></h2>
            </div>
            <p>4 semanas de diagnóstico y activación, 4 de diseño y validación, 13 de implementación y consolidación.</p>
          </div>
          <nav className="gz-stage-nav" aria-label="Ir a una etapa">
            {stages.map((stage) => (
              <a key={stage.id} href={`#${stage.id}`}>
                <span>{stage.n}</span>
                {stage.title}
                <ArrowRight size={15} />
              </a>
            ))}
          </nav>
          {stages.map((stage) => (
            <article className="gz-stage" id={stage.id} key={stage.id}>
              <div className="gz-stage-title">
                <div className="gz-stage-kicker"><b>{stage.n}</b><span>{stage.weeks}</span></div>
                <h3>{stage.title}</h3>
                <p>{stage.purpose}</p>
              </div>
              <div className="gz-stage-body">
                <ol>
                  {stage.steps.map((step) => (
                    <li key={step.title}>
                      <strong>{step.title}</strong>
                      <p>{step.copy}</p>
                    </li>
                  ))}
                </ol>
                <div className="gz-stage-notes">
                  <div className="is-deliverable">
                    <span>Entregables</span>
                    <p>{stage.deliverables}</p>
                  </div>
                  <div className="is-gate">
                    <span>Puerta de salida</span>
                    <p>{stage.gate}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="gz-section gz-band" id="prioridades">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">04 / PRIORIDADES ACTIVAS</div>
              <h2>Cuatro frentes que no se pausan<br /><span>durante el proyecto.</span></h2>
            </div>
          </div>
          <div className="gz-priority-grid">
            {priorities.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gz-section" id="gobierno">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">05 / GOBIERNO Y MEDICIÓN</div>
              <h2>Menos reportes de actividad.<br /><span>Más decisiones verificables.</span></h2>
            </div>
            <p>El CRM será la fuente central. Cada oportunidad tendrá etapa, siguiente acción y fecha. El seguimiento concluye en acción, no solo en actualización de estatus.</p>
          </div>
          <div className="gz-table-wrap">
            <table className="gz-table">
              <thead>
                <tr>
                  <th>Cadencia</th>
                  <th>Para qué sirve</th>
                  <th>Salida obligatoria</th>
                </tr>
              </thead>
              <tbody>
                {cadences.map((row) => (
                  <tr key={row.name}>
                    <th><strong>{row.name}</strong><span>{row.role}</span></th>
                    <td>{row.use}</td>
                    <td>{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="gz-section gz-band gz-indicators" id="indicadores">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">06 / INDICADORES DE ÉXITO</div>
              <h2>Qué se mide<br /><span>contra línea base.</span></h2>
            </div>
          </div>
          <div className="gz-table-wrap">
            <table className="gz-table">
              <thead>
                <tr>
                  <th>Resultado</th>
                  <th>Indicadores principales</th>
                </tr>
              </thead>
              <tbody>
                {indicators.map((row) => (
                  <tr key={row.result}>
                    <th>{row.result}</th>
                    <td>{row.kpis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="gz-kpi-note">Metas y OKRs: versión preliminar en semana 2 y calibración al cierre de semana 4, a partir de línea base real, capacidad de entrega y prioridades comerciales. Medir por separado cartera del dueño, equipo de campo e inside sales. Distinguir equipos nuevos y reacondicionados.</p>
        </section>

        <section className="gz-delivery" id="cierre">
          <div className="gz-delivery-intro">
            <div className="gz-eyebrow">07 / QUÉ DEBE QUEDAR FUNCIONANDO</div>
            <h2>El sistema<br />en operación,<br /><span>no en un documento.</span></h2>
          </div>
          <div className="gz-pillars">
            {outcomes.map((item, index) => (
              <div key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <Check size={18} />
              </div>
            ))}
          </div>
        </section>

        <section className="gz-section gz-criterion">
          <span className="gz-eyebrow">CRITERIO EJECUTIVO</span>
          <p>El proyecto se considerará implementado cuando GAOZ opere consistentemente su sistema comercial, tome decisiones con datos y dé seguimiento sin intervención cotidiana del dueño. El incremento de ventas y la recuperación económica serán objetivos medidos contra línea base, no resultados garantizados. Reducir la dependencia económica de su cartera puede requerir un horizonte mayor.</p>
        </section>

        <section className="gz-final" id="arranque">
          <div className="gz-eyebrow">SIGUIENTE PASO</div>
          <h2>El horizonte está definido.<br /><span>Definamos el arranque.</span></h2>
          <p>Alineemos prioridades, equipo y fecha de inicio de las 21 semanas.</p>
          <CTA>Hablar sobre el arranque</CTA>
        </section>
      </main>
      <footer className="gz-footer">
        <a className="gz-brand" href="/">TOOL<span>GAOZ</span></a>
        <span>Propuesta para GAOZ · 21 semanas</span>
        <a href="#ruta">Volver a la ruta ↑</a>
      </footer>
    </div>
  );
}
