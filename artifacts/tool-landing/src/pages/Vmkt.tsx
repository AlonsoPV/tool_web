import { ArrowRight, ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { DEMO_URL } from '@/lib/landing-theme';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';

const contact = `${DEMO_URL}?text=${encodeURIComponent('Hola, quiero conversar sobre la propuesta V-MKT de 21 semanas para GAOZ y definir el arranque.')}`;

const values = [
  { title: 'Generar más oportunidades de venta', copy: 'Prospectos calificados, cotizaciones y conversión, con atribución de campaña.' },
  { title: 'Aprovechar el negocio existente', copy: 'Clientes reactivados y ventas de inventario detenido.' },
  { title: 'Recuperar liquidez', copy: 'Cobranza efectivamente recuperada y reducción de cartera vencida.' },
  { title: 'Aumentar productividad comercial', copy: 'Seguimientos oportunos, ciclos de venta y cumplimiento verificable.' },
  { title: 'Reducir dependencia del dueño', copy: 'Decisiones y ventas gestionadas autónomamente por el equipo.' },
];

const challenges = [
  { title: 'Campañas sin seguimiento suficiente', copy: 'Hay inversión en marketing, pero la calidad de prospectos, la atribución y el traspaso a Ventas no cierran el ciclo.' },
  { title: 'Dependencia del dueño', copy: 'Las relaciones y el conocimiento comercial se concentran en una persona. Hay que distinguir qué prácticas son replicables y cuáles dependen de relaciones personales.' },
  { title: 'Ventas poco predecibles', copy: 'Faltan estándares y mecanismos de gobierno que aseguren seguimiento, decisiones y cumplimiento.' },
  { title: 'Capital inmovilizado', copy: 'Inventario detenido y cuentas vencidas restringen la liquidez.' },
  { title: 'Decisiones con visibilidad limitada', copy: 'Se necesita convertir el CRM en una fuente confiable para anticipar problemas, atribuir campañas y accionar.' },
];

const fronts = [
  {
    label: 'Resultados de corto plazo',
    items: [
      'Convertir respuestas de campaña y mailing en cotizaciones.',
      'Colocación de inventario detenido.',
      'Recuperación de cuentas por cobrar.',
      'Reactivación y desarrollo de clientes actuales.',
    ],
  },
  {
    label: 'Transformación estructural',
    items: [
      'Flujo Marketing → lead calificado → Ventas.',
      'Procesos, políticas y gobierno comercial.',
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
    purpose: 'Identificar dónde se pierde valor en campañas, seguimiento y cartera, y comenzar a recuperarlo.',
    steps: [
      { title: 'Marketing y seguimiento', copy: 'Revisar campañas, calidad de prospectos y atribución antes de ajustar presupuesto. Medir leads únicos, oportunidades y ventas. Confirmar la distribución de cuentas y territorios.' },
      { title: 'Activar mailing e inventario', copy: 'Usar el inventario actualizado y dar seguimiento al mailing del 5 de octubre. Convertir respuestas en cotizaciones, ventas y cobros, con siguiente acción y fecha. Conciliar la cartera por cliente y razón social.' },
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Mapear el ciclo completo', copy: 'Prospección, calificación, cotización, cierre, entrega, cobranza, postventa y recompra. Detectar fricciones entre Marketing, Ventas, áreas y razones sociales.' },
    ],
    deliverables: 'Diagnóstico ejecutivo, mapa de procesos y brechas, línea base de KPIs, prioridades de mercado y tres listas de ejecución activas.',
    gate: 'Prioridades y metas calibradas al cierre de semana 4. Campañas, oportunidades y cobranza con seguimiento verificable.',
  },
  {
    id: 'etapa-2',
    n: '02',
    weeks: 'Semanas 5–8',
    title: 'Diseñar y validar',
    purpose: 'Convertir campañas, calificación y venta en un método sencillo, medible y replicable.',
    steps: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definición de meta de ventas y KPIs.' },
      { title: 'Método de campañas repetible', copy: 'Convertir la activación de semanas 1 y 2 en un método: ajustar listas y seguimiento de campañas con lo aprendido. Cada caso con potencial, factibilidad, responsable, siguiente acción y fecha.' },
      { title: 'Proceso y políticas', copy: 'Estandarizar etapas y criterios de avance, cotización, precios, descuentos, crédito, cobranza, garantías, entrega y recompra. Contemplar razones sociales y traspasos entre áreas.' },
      { title: 'Flujo Marketing → Ventas', copy: 'Formalizar criterios de lead calificado, traspaso, tiempos de respuesta, seguimiento y retroalimentación de cotizaciones y cierres.' },
    ],
    deliverables: 'Playbook comercial, kit de herramientas, políticas de venta y criterios de lead calificado Marketing → Ventas.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales, incluido el traspaso de Marketing.',
  },
  {
    id: 'etapa-3',
    n: '03',
    weeks: 'Semanas 9–21',
    title: 'Implementar y consolidar',
    purpose: 'Convertir el modelo en ejecución constante: campañas con seguimiento, venta y autonomía.',
    steps: [
      { title: 'Activar resultados', copy: 'Construir listas accionables de campañas, inventario, productos validados y cartera vencida. Priorizar cada caso por potencial, factibilidad, siguiente acción y fecha.' },
      { title: 'Sales Readiness', copy: 'Desarrollar habilidades de diagnóstico consultivo, negociación, manejo de objeciones, cierre y seguimiento, según las brechas observadas.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad ni atribución de campaña.' },
      { title: 'Piloto de campañas e inventario', copy: 'Aplicar el proceso a oportunidades de campañas e inventario, equipos nuevos y reacondicionados, y cuentas por cobrar conciliadas. Corregir bloqueos antes de ampliar su uso.' },
      { title: 'Estrategia 2027', copy: 'Definir prioridades de mercado, productos y canales con base en los resultados del proyecto.' },
    ],
    deliverables: 'Academia Comercial de GAOZ, plan estratégico 2027 y mapa de trazabilidad de factores de éxito, con flujo Marketing → Ventas en operación.',
    gate: 'Cuatro ciclos semanales consecutivos de seguimiento conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
  },
];

const priorities = [
  { title: 'Campañas y seguimiento', copy: 'Calificar leads, traspasar a Ventas con criterio y devolver resultados de cotización y cierre. Medir leads únicos, oportunidades, ventas y cobros.' },
  { title: 'Inventario detenido', copy: 'Validar equipos comercializables, disponibilidad, margen y clientes compatibles. Seguir cada caso hasta venta, entrega y cobro, diferenciando estos hitos.' },
  { title: 'Productos validados', copy: 'Focalizar ventas en soluciones que GAOZ ya domina, con propuesta de valor, cotización y seguimiento estándar.' },
  { title: 'Cobranza', copy: 'Conciliar saldos por cliente y razón social. Segmentar por antigüedad, monto y recuperabilidad. Registrar promesas de pago, bloqueos y acciones preventivas.' },
];

const cadences = [
  { name: 'Semanal', role: 'Operación', use: 'Revisar pipeline, campañas, cobranza, inventario y bloqueos.', output: 'Acciones, fechas y evidencia de avance.' },
  { name: 'Quincenal', role: 'Decisiones', use: 'Resolver desviaciones y decisiones que requieren escalamiento.', output: 'Decisiones y ajustes aprobados.' },
  { name: 'Mensual', role: 'Resultados', use: 'Evaluar OKRs, rentabilidad, liquidez, atribución de campañas y prioridades.', output: 'Resultados vs. línea base y cambios de enfoque.' },
];

const indicators = [
  { result: 'Más ventas', kpis: 'Leads únicos calificados, oportunidades de campaña, ventas del equipo, conversión por etapa y ciclo comercial.' },
  { result: 'Más rentabilidad', kpis: 'Ticket promedio y mediana, margen y mezcla por producto y tipo de equipo.' },
  { result: 'Más liquidez', kpis: 'Efectivo recuperado sobre cartera vencida conciliada, nuevos atrasos y reducción de inventario detenido.' },
  { result: 'Más disciplina', kpis: 'Oportunidades con siguiente paso, seguimiento oportuno y cumplimiento verificable de compromisos.' },
  { result: 'Más autonomía', kpis: 'Ventas sin intervención del dueño, decisiones autónomas y proporción de ventas vinculadas a su cartera.' },
];

const outcomes = [
  { title: 'Un flujo Marketing → Ventas', copy: 'Lead calificado, traspaso, tiempo de respuesta y retroalimentación de cotización y cierre.' },
  { title: 'Un sistema de ventas replicable', copy: 'Del primer contacto a la recompra, con prácticas estándar y capacidades desarrolladas.' },
  { title: 'Un mecanismo de generación de resultados', copy: 'Campañas, cartera, inventario y productos validados gestionados con acciones, no solo reportes.' },
  { title: 'Una operación menos dependiente del dueño', copy: 'Autoridad clara y cuatro ciclos consecutivos de gestión autónoma.' },
  { title: 'Un plan de continuidad de 90 días', copy: 'Indicadores, hábitos, mejoras pendientes y prioridades para sostener lo implementado.' },
];

const trust = [
  { title: 'Por qué confiar', copy: 'GAOZ ya tiene productos validados, clientes y campañas. El valor se pierde por seguimiento desigual, capital inmovilizado y dependencia de prácticas personales. Esta propuesta conecta esos activos con un método que se puede repetir y medir.' },
  { title: 'Cómo aportamos valor', copy: 'Conectamos marketing con oportunidades calificadas y seguimiento; priorizamos inventario y cobranza para recuperar capital; y convertimos buenas prácticas en procesos, capacidades y decisiones autónomas.' },
  { title: 'Por qué elegirnos', copy: 'Partimos del diagnóstico y del trabajo ya realizado, activamos oportunidades desde el inicio y acompañamos la implementación con casos reales. El resultado se comprueba con conversión, efectivo recuperado y cuatro ciclos de gestión conducidos por GAOZ.' },
];

const milestones = [
  { week: 'Semana 4', copy: 'Oportunidades activadas y línea base.' },
  { week: 'Semana 8', copy: 'Modelo validado.' },
  { week: 'Semana 14', copy: 'Adopción y primeros ajustes medidos.' },
  { week: 'Semana 21', copy: 'Operación autónoma y resultados documentados.' },
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

export default function Vmkt() {
  return (
    <div className="gz gz-proposal">
      <PageMeta
        title="TOOL · Propuesta V-MKT | Marketing y ventas en 21 semanas"
        description="Propuesta para conectar marketing con ventas en GAOZ: campañas con seguimiento, inventario en movimiento y un método que el equipo pueda operar. Horizonte de 21 semanas."
      />
      <a className="gz-skip" href="#gaoz-main">Saltar al contenido</a>
      <header className="gz-nav">
        <a href="/" className="gz-brand" aria-label="Ir a la web principal de TOOL">TOOL<span>V-MKT</span></a>
        <nav aria-label="Navegación de la propuesta">
          <a href="/v-mkt/valor">Diagrama</a>
        </nav>
        <a href={contact} target="_blank" rel="noopener noreferrer" className="gz-nav-cta">Hablemos <ArrowUpRight size={16} /></a>
      </header>

      <main id="gaoz-main">
        <section className="gz-hero">
          <div className="gz-hero-copy">
            <div className="gz-eyebrow"><span className="gz-dot" /> PROPUESTA · V-MKT · GAOZ</div>
            <h1>Vender más.<br /><span>Recuperar capital.</span></h1>
            <p className="gz-hero-lead"><strong>Construir una operación comercial que no dependa de una sola persona.</strong></p>
            <div className="gz-objective">
              <span>Objetivo</span>
              <p>Transformar la operación comercial de GAOZ en un sistema estructurado, medible y replicable, capaz de generar ventas desde campañas, recuperar cartera y desarrollar autonomía.</p>
            </div>
            <div className="gz-actions">
              <a className="gz-text-link" href="#ruta">Ver la ruta de 21 semanas <ArrowRight size={16} /></a>
            </div>
            <div className="gz-hero-note">21 semanas <span>/</span> Activación desde la semana 1 <span>/</span> Marketing conectado a ventas</div>
          </div>
          <div className="gz-system-visual gz-horizon" aria-label="Horizonte de 21 semanas: 4 de diagnóstico, 4 de diseño y 13 de implementación">
            <div className="gz-visual-head"><span>V-MKT / HORIZONTE</span><span>21 SEMANAS</span></div>
            <div className="gz-visual-title">La activación<br />empieza <em>ya.</em></div>
            <ol className="gz-horizon-list">
              <li><b>01</b><div><strong>Diagnosticar y activar</strong><span>4 semanas</span></div></li>
              <li><b>02</b><div><strong>Diseñar y validar</strong><span>4 semanas</span></div></li>
              <li><b>03</b><div><strong>Implementar y consolidar</strong><span>13 semanas</span></div></li>
            </ol>
            <div className="gz-visual-foot"><span className="gz-dot" /> CAMPAÑAS Y SEGUIMIENTO DESDE LA SEMANA 01</div>
          </div>
        </section>

        <div className="gz-proof">
          <span>SISTEMA DE GESTIÓN COMERCIAL</span>
          <strong>Marketing</strong>
          <span>+</span>
          <strong>Ventas</strong>
          <span>+</span>
          <strong>Cobranza</strong>
        </div>

        <section className="gz-section" id="valor">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">00 / VALOR PARA GAOZ</div>
              <h2>No descubrir problemas.<br /><span>Intervenir sobre lo ya identificado.</span></h2>
            </div>
            <p>GAOZ ya tiene productos, clientes y campañas. El trabajo es conectar marketing con oportunidades calificadas, recuperar capital y dejar un método que el equipo pueda operar.</p>
          </div>
          <div className="gz-challenge-grid">
            {values.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gz-section gz-band" id="confianza">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">POR QUÉ ESTA PROPUESTA</div>
              <h2>Partimos del diagnóstico.<br /><span>Activamos desde la semana 1.</span></h2>
            </div>
          </div>
          <div className="gz-challenge-grid">
            {trust.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="gz-section" id="reto">
          <div className="gz-section-head">
            <div>
              <div className="gz-eyebrow">01 / EL RETO DE NEGOCIO</div>
              <h2>Lo que hoy limita<br /><span>el crecimiento.</span></h2>
            </div>
            <p>Cinco condiciones que la propuesta ataca al mismo tiempo: campañas, dependencia, predictibilidad, liquidez y visibilidad.</p>
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
            <p>4 semanas de diagnóstico y activación, 4 de diseño y validación, 13 de implementación y consolidación. La ejecución comercial no se detiene.</p>
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
          <div className="gz-priority-grid" style={{ marginBottom: 28 }}>
            {milestones.map((item) => (
              <article key={item.week}>
                <h3>{item.week}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
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
          <p className="gz-kpi-note">Metas y OKRs: versión preliminar en semana 2 y calibración al cierre de semana 4. Medir campañas por leads únicos calificados, oportunidades, ventas y cobros. Separar dueño, campo e inside sales; distinguir equipos nuevos y reacondicionados.</p>
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
          <p>El proyecto se considerará implementado cuando GAOZ opere consistentemente su sistema comercial, tome decisiones con datos y dé seguimiento sin intervención cotidiana del dueño. El incremento de ventas y la recuperación económica serán objetivos medidos contra línea base, no resultados garantizados.</p>
        </section>

        <section className="gz-final" id="arranque">
          <div className="gz-eyebrow">PARA DECIRLE AL CLIENTE · 20 SEGUNDOS</div>
          <h2>Ya sabemos dónde se pierde valor.<br /><span>Hay que convertirlo.</span></h2>
          <p>Vamos a trabajar desde el inicio en convertir oportunidades, colocar inventario y recuperar cobranza, mientras dejamos un método que el equipo pueda operar. El avance se verá en ventas, efectivo recuperado y menor dependencia del dueño.</p>
          <CTA>Hablar sobre el arranque</CTA>
        </section>
      </main>
      <footer className="gz-footer">
        <a className="gz-brand" href="/">TOOL<span>V-MKT</span></a>
        <span>Propuesta V-MKT para GAOZ · 21 semanas</span>
        <a href="#ruta">Volver a la ruta ↑</a>
      </footer>
    </div>
  );
}
