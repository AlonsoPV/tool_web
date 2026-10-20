import { ArrowRight, ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { DEMO_URL } from '@/lib/landing-theme';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';

const contact = `${DEMO_URL}?text=${encodeURIComponent('Hola, quiero conversar sobre el plan de 16 semanas para GAOZ y definir el arranque.')}`;

const challenges = [
  { title: 'Falta de estructura comercial', copy: 'No existe una estructura suficientemente definida de funciones, procesos, autoridad, objetivos y seguimiento que permita coordinar al equipo y sostener resultados.' },
  { title: 'Dependencia del dueño', copy: 'Las relaciones y el conocimiento comercial se concentran en una persona. Hay que distinguir qué prácticas son replicables y cuáles dependen de relaciones personales.' },
  { title: 'Ventas poco predecibles', copy: 'Faltan estándares y mecanismos de gobierno que aseguren seguimiento, decisiones y cumplimiento. Hay que evaluar capacidades, liderazgo y adopción con evidencia y criterios objetivos.' },
  { title: 'Capital inmovilizado', copy: 'Inventario detenido y cuentas vencidas restringen la liquidez.' },
  { title: 'Decisiones con visibilidad limitada', copy: 'Se necesita convertir el CRM en una fuente confiable. Marketing y Ventas deben compartir criterios de calificación, transferencia de leads y retroalimentación.' },
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
      'Procesos y políticas comerciales adaptables.',
      'Evaluación de liderazgo, capacidades y cocreación del modelo.',
      'CRM, indicadores y flujo Marketing → Ventas.',
      'Sales Readiness, Academia Scrumban y autonomía.',
    ],
  },
];

const stages = [
  {
    id: 'etapa-1',
    n: '01',
    weeks: 'Semanas 1–2',
    title: 'Diagnóstico acelerado y activación',
    purpose: 'Identificar dónde se pierde valor y comenzar a recuperarlo desde la primera semana.',
    steps: [
      { title: 'Marketing y seguimiento', copy: 'Revisar campañas, calidad de prospectos y atribución antes de ajustar presupuesto. Medir leads únicos, oportunidades y ventas. Confirmar la distribución de cuentas y territorios.' },
      { title: 'Activar mailing e inventario', copy: 'Usar el inventario actualizado y dar seguimiento al mailing del 5 de octubre. Convertir respuestas en cotizaciones, ventas y cobros, con siguiente acción y fecha. Conciliar la cartera por cliente y razón social.' },
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Evaluar liderazgo, capacidades y cultura', copy: 'Aplicar una matriz objetiva de competencias a gerencia y equipo comercial. Investigar caídas de ventas con datos comparables y valorar disposición individual al cambio, sin usar la edad como criterio.' },
    ],
    deliverables: 'Diagnóstico ejecutivo, mapa de procesos y brechas, línea base de KPIs, prioridades de mercado y tres listas de ejecución activas.',
    gate: 'Diagnóstico y evaluación preliminar de capacidades al cierre de semana 2. Oportunidades comerciales y de cobranza con seguimiento verificable. Las metas se calibran en semanas 3–4.',
  },
  {
    id: 'etapa-2',
    n: '02',
    weeks: 'Semanas 3–8',
    title: 'Cocrear, diseñar y validar',
    purpose: 'Cocrear con el equipo un método comercial sencillo, medible y adaptable. Probarlo con casos reales antes de institucionalizarlo.',
    steps: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definición de meta de ventas y KPIs.' },
      { title: 'Proceso adaptable y políticas', copy: 'Cocrear etapas y criterios mínimos de avance, cotización, precios, descuentos, crédito, cobranza, garantías, entrega y recompra. Diseñar rutas de excepción para clientes, proveedores y productos distintos.' },
      { title: 'Flujo Marketing → Ventas', copy: 'Formalizar criterios de lead calificado, traspaso, tiempos de respuesta y retroalimentación de cotizaciones y cierres. Convertir el seguimiento de campañas en un método repetible.' },
      { title: 'Herramientas y Academia Scrumban', copy: 'CRM con etapas y campos obligatorios, kit comercial y tablero de KPIs. Habilitar Academia Scrumban con materiales técnicos y comerciales por rol, y medir aplicación en casos reales.' },
    ],
    deliverables: 'Modelo cocreado, procesos adaptables, flujo Marketing–Ventas, kit comercial, CRM, Academia Scrumban inicial, plan de capacidades y piloto validado.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales.',
  },
  {
    id: 'etapa-3',
    n: '03',
    weeks: 'Semanas 9–16',
    title: 'Implementar y consolidar',
    purpose: 'Dos meses intensivos de implementación, acompañamiento y transferencia de autonomía. La activación de ventas y cobranza no se detiene.',
    steps: [
      { title: 'Sales Readiness aplicado', copy: 'Practicar diagnóstico de necesidades, negociación, manejo de objeciones, cierre y seguimiento según las brechas individuales. Validar aprendizaje con desempeño observable.' },
      { title: 'Funciones y decisión', copy: 'Implementar funciones, liderazgo y escalamiento sobre casos reales. Dirección decide desarrollo, reasignación o ajustes si persisten brechas tras el acompañamiento.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad ni atribución de campaña.' },
      { title: 'Piloto de campañas e inventario', copy: 'Aplicar el proceso a oportunidades de campañas e inventario, equipos nuevos y reacondicionados, y cuentas por cobrar conciliadas. Corregir bloqueos antes de ampliar su uso.' },
      { title: 'Estrategia 2027', copy: 'Definir prioridades de mercado, productos y canales con base en los resultados del proyecto.' },
    ],
    deliverables: 'Operación comercial funcionando, tablero activo, Academia en uso, conexión Marketing–Ventas operativa, desempeño comparado con línea base y plan de continuidad de 90 días.',
    gate: 'Cuatro ciclos semanales consecutivos de seguimiento conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
  },
];

const priorities = [
  { title: 'Inventario detenido', copy: 'Validar equipos comercializables, disponibilidad, margen y clientes compatibles. Seguir cada caso hasta venta, entrega y cobro, diferenciando estos hitos.' },
  { title: 'Productos validados', copy: 'Focalizar ventas en soluciones que GAOZ ya domina, con propuesta de valor, cotización y seguimiento estándar.' },
  { title: 'Cobranza', copy: 'Conciliar saldos por cliente y razón social. Segmentar por antigüedad, monto y recuperabilidad. Registrar promesas de pago, bloqueos y acciones preventivas.' },
  { title: 'Mercado y campañas', copy: 'Ajustar segmentos, productos, canales y territorios. Calificar leads, traspasar a Ventas con criterio y devolver resultados de cotización y cierre.' },
];

const cadences = [
  { name: 'Semanal', role: 'Operación', use: 'Revisar pipeline, campañas, cobranza, inventario y bloqueos.', output: 'Acciones, fechas y evidencia de avance.' },
  { name: 'Quincenal', role: 'Decisiones', use: 'Resolver desviaciones y decisiones que requieren escalamiento.', output: 'Decisiones y ajustes aprobados.' },
  { name: 'Mensual', role: 'Resultados', use: 'Evaluar OKRs, rentabilidad, liquidez, atribución de campañas y prioridades.', output: 'Resultados vs. línea base y cambios de enfoque.' },
];

const indicators = [
  { result: 'Más ventas', kpis: 'Leads únicos calificados, oportunidades de campaña, ventas del equipo, conversión por etapa, ciclo comercial y oportunidades perdidas.' },
  { result: 'Más rentabilidad', kpis: 'Ticket promedio y mediana, margen y mezcla por producto y tipo de equipo.' },
  { result: 'Más liquidez', kpis: 'Efectivo recuperado sobre cartera vencida conciliada, nuevos atrasos y reducción de inventario detenido.' },
  { result: 'Más disciplina', kpis: 'Oportunidades con siguiente paso, seguimiento oportuno y cumplimiento verificable de compromisos.' },
  { result: 'Más autonomía', kpis: 'Ventas sin intervención del dueño, decisiones autónomas y proporción de ventas vinculadas a su cartera.' },
];

const outcomes = [
  { title: 'Un sistema de ventas replicable', copy: 'Del primer contacto a la recompra, con prácticas estándar, flujo Marketing → Ventas y capacidades desarrolladas.' },
  { title: 'Un mecanismo de generación de resultados', copy: 'Campañas, cartera, inventario y productos validados gestionados con acciones, no solo reportes.' },
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

export default function Plan() {
  return (
    <div className="gz gz-proposal">
      <PageMeta
        title="TOOL · Plan GAOZ | Sistema comercial en 16 semanas"
        description="Plan de cuatro meses para transformar la operación comercial de GAOZ: diagnóstico acelerado, cocreación e implementación, con marketing conectado a ventas."
      />
      <a className="gz-skip" href="#gaoz-main">Saltar al contenido</a>
      <header className="gz-nav">
        <a href="/" className="gz-brand" aria-label="Ir a la web principal de TOOL">TOOL<span>PLAN</span></a>
        <nav aria-label="Navegación de la propuesta">
          <a href="/plan/valor">Diagrama</a>
        </nav>
        <a href={contact} target="_blank" rel="noopener noreferrer" className="gz-nav-cta">Hablemos <ArrowUpRight size={16} /></a>
      </header>

      <main id="gaoz-main">
        <section className="gz-hero">
          <div className="gz-hero-copy">
            <div className="gz-eyebrow"><span className="gz-dot" /> PLAN · GAOZ · 16 SEMANAS</div>
            <h1>Vender más.<br /><span>Recuperar capital.</span></h1>
            <p className="gz-hero-lead"><strong>Construir una operación comercial que no dependa de una sola persona.</strong></p>
            <div className="gz-objective">
              <span>Objetivo</span>
              <p>Transformar la operación comercial de GAOZ en un sistema estructurado, medible y replicable, capaz de generar ventas, recuperar cartera y desarrollar autonomía.</p>
            </div>
            <div className="gz-actions">
              <a className="gz-text-link" href="#ruta">Ver la ruta de 16 semanas <ArrowRight size={16} /></a>
            </div>
            <div className="gz-hero-note">4 meses <span>/</span> Activación desde la semana 1 <span>/</span> Cocreación con el equipo</div>
          </div>
          <div className="gz-system-visual gz-horizon" aria-label="Horizonte de 16 semanas: 2 de diagnóstico, 6 de cocreación y 8 de implementación">
            <div className="gz-visual-head"><span>GAOZ / PLAN</span><span>16 SEMANAS</span></div>
            <div className="gz-visual-title">La activación<br />empieza <em>ya.</em></div>
            <ol className="gz-horizon-list">
              <li><b>01</b><div><strong>Diagnóstico acelerado</strong><span>2 semanas</span></div></li>
              <li><b>02</b><div><strong>Cocrear y validar</strong><span>6 semanas</span></div></li>
              <li><b>03</b><div><strong>Implementar y consolidar</strong><span>8 semanas</span></div></li>
            </ol>
            <div className="gz-visual-foot"><span className="gz-dot" /> MARKETING Y SEGUIMIENTO DESDE LA SEMANA 01</div>
          </div>
        </section>

        <div className="gz-proof">
          <span>SISTEMA DE GESTIÓN COMERCIAL</span>
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
            <p>Cinco condiciones que el plan ataca al mismo tiempo: estructura, dependencia, predictibilidad, liquidez y visibilidad entre Marketing y Ventas.</p>
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
            <p>1–2 semanas de diagnóstico acelerado, 3–8 de cocreación y validación, 9–16 de implementación intensiva. La ejecución comercial no se detiene.</p>
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
            <p>El CRM será la fuente central. Cada oportunidad tendrá etapa, siguiente acción y fecha. El seguimiento de campañas concluye en acción, no solo en actualización de estatus.</p>
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
          <p className="gz-kpi-note">Metas y OKRs: versión preliminar en semana 2 y calibración durante semanas 3–4. Medir campañas por leads únicos calificados, oportunidades, ventas y cobros. Separar dueño, campo e inside sales. Distinguir equipos nuevos y reacondicionados.</p>
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
          <div className="gz-eyebrow">PARA DECIRLE AL CLIENTE · 20 SEGUNDOS</div>
          <h2>Ya sabemos dónde se pierde valor.<br /><span>Hay que convertirlo.</span></h2>
          <p>Vamos a trabajar desde el inicio en convertir oportunidades, colocar inventario y recuperar cobranza, mientras dejamos un método que el equipo pueda operar. El avance se verá en ventas, efectivo recuperado y menor dependencia del dueño.</p>
          <CTA>Hablar sobre el arranque</CTA>
        </section>
      </main>
      <footer className="gz-footer">
        <a className="gz-brand" href="/">TOOL<span>PLAN</span></a>
        <span>Plan GAOZ · 16 semanas · 4 meses</span>
        <a href="#ruta">Volver a la ruta ↑</a>
      </footer>
    </div>
  );
}
