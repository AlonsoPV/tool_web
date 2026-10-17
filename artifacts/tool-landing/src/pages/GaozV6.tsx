import { useState, type KeyboardEvent } from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { DEMO_URL } from '@/lib/landing-theme';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';

const contact = `${DEMO_URL}?text=${encodeURIComponent('Hola, quiero conversar sobre la propuesta de 21 semanas para GAOZ y definir el arranque.')}`;

const loops = [
  { problem: 'Seguimiento desigual', action: 'Calificar y acompañar cada oportunidad', benefit: 'Más ventas' },
  { problem: 'Inventario detenido', action: 'Priorizar lo comercializable y darle salida', benefit: 'Capital disponible' },
  { problem: 'Cartera por cobrar', action: 'Conciliar y cobrar con una siguiente acción', benefit: 'Más liquidez' },
  { problem: 'Dependencia del dueño', action: 'Replicar solo lo que sí se puede transferir', benefit: 'Más autonomía' },
  { problem: 'Poca visibilidad', action: 'Decidir con etapa, acción y fecha', benefit: 'Decisiones con datos' },
];

const challenges = [
  { title: 'Falta de estructura comercial', copy: 'GAOZ necesita funciones, procesos, autoridad, objetivos y seguimiento suficientemente definidos para coordinar al equipo y sostener resultados.' },
  { title: 'Dependencia del dueño', copy: 'Parte de las relaciones y el conocimiento comercial están concentrados en una persona. Buscaremos replicar las prácticas que sí pueden transferirse, sin asumir que una relación personal puede delegarse automáticamente.' },
  { title: 'Ventas poco predecibles', copy: 'El equipo necesita estándares y un sistema de gobierno que asegure seguimiento, decisiones y cumplimiento.' },
  { title: 'Capital inmovilizado', copy: 'Inventario detenido y cuentas vencidas limitan la liquidez que GAOZ podría utilizar en el negocio.' },
  { title: 'Decisiones con visibilidad limitada', copy: 'Convertiremos el CRM en una fuente confiable para detectar desviaciones, anticipar problemas y actuar.' },
];

const fronts = [
  {
    kicker: 'Ahora',
    title: 'Activación comercial',
    items: [
      'Colocar inventario detenido.',
      'Vender productos que GAOZ ya tiene validados.',
      'Recuperar cuentas por cobrar.',
      'Reactivar y desarrollar clientes actuales.',
    ],
  },
  {
    kicker: 'En paralelo',
    title: 'Sistema que se puede repetir',
    items: [
      'Establecer procesos y políticas comerciales.',
      'Fortalecer estructura, gobierno y capacidades del equipo.',
      'Aprovechar CRM, indicadores y objetivos.',
      'Consolidar hábitos de ejecución y autonomía.',
    ],
  },
];

const priorities = [
  { title: 'Inventario detenido', copy: 'Validar equipos comercializables, disponibilidad, margen y clientes compatibles. Dar seguimiento hasta venta, entrega y cobro, distinguiendo cada hito.' },
  { title: 'Productos validados', copy: 'Concentrar esfuerzos en soluciones que GAOZ ya domina, con propuesta de valor, cotización y seguimiento estándar.' },
  { title: 'Cobranza', copy: 'Conciliar saldos por cliente y razón social y segmentar por antigüedad, monto y recuperabilidad. Los porcentajes de ingresos sin pago completo del diagnóstico V10 no equivalen a saldo vencido. Administración validará facturas, abonos, vencimientos y evidencias. Las cuentas morosas se mantienen en gestión de cobro aunque se excluyan del análisis de venta activa.' },
  { title: 'Mercado', copy: 'Ajustar segmentos, productos, canales y territorios según respuesta comercial, rentabilidad y capacidad real de entrega.' },
];

const stages = [
  {
    id: 'etapa-1',
    weeks: 'Semanas 1–4',
    title: 'Diagnosticar y activar',
    purpose: 'Identificar dónde se pierde valor y comenzar a recuperarlo.',
    highlights: [
      'Activar inventario, productos validados y cartera desde las semanas 1–2.',
      'Distinguir las prácticas comerciales replicables de la relación personal del dueño.',
      'Integrar datos del funnel y del mercado; registrar faltantes antes de inferir causas.',
    ],
    focus: [
      { title: 'Primer foco: marketing y seguimiento', copy: 'Revisar campañas, calidad de prospectos y atribución antes de modificar presupuesto. Medir leads únicos, oportunidades y ventas, y confirmar cómo se distribuyen cuentas y territorios.' },
      { title: 'Acción desde semanas 1–2', copy: 'Trabajar con el inventario actualizado y dar seguimiento al mailing del 5 de octubre. Cada respuesta debe avanzar hacia una cotización, venta o cobro mediante una siguiente acción y fecha. En paralelo se conciliará la cartera por cliente y razón social.' },
      { title: 'Información para decidir', copy: 'Partir del diagnóstico V10 y las respuestas complementarias. Incluir cotizaciones y oportunidades abiertas, además de las ganadas, y medir conversión y pérdidas cuando la información sea consistente.' },
    ],
    steps: [
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Mapear el ciclo completo', copy: 'Revisar prospección, calificación, cotización, cierre, entrega, cobranza, postventa y recompra. Detectar fricciones, traspasos entre áreas y razones sociales.' },
      { title: 'Evaluar capacidades y cultura', copy: 'Analizar habilidades, hábitos, disciplina de seguimiento, estructura y capacidad de venta y entrega instalada.' },
      { title: 'Analizar datos y mercado', copy: 'Revisar caídas del funnel, ticket, margen, productos, cartera, inventario, segmentos y territorios. Distinguir equipos nuevos y reacondicionados. Registrar faltantes antes de inferir causas.' },
    ],
    deliverables: 'Diagnóstico ejecutivo, mapa de procesos y brechas, línea base de KPIs, prioridades de mercado y tres listas de ejecución activas.',
    gate: 'Prioridades y metas calibradas al cierre de semana 4. Oportunidades comerciales y de cobranza con seguimiento verificable.',
  },
  {
    id: 'etapa-2',
    weeks: 'Semanas 5–8',
    title: 'Diseñar y validar',
    purpose: 'Convertir las mejores prácticas en un método comercial sencillo, medible y replicable.',
    highlights: [
      'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave.',
      'Activar listas de inventario, productos validados y cartera vencida.',
      'Validar procesos, herramientas y capacidades con un piloto en casos reales.',
    ],
    focus: [
      { title: 'Prioridades de producto', copy: 'Sostener Tomografía. Evaluar crecimiento de Ecocardiografía y reactivación de Densitometría según clasificación vigente, demanda, margen y capacidad de entrega. Para Resonancia, validar con Servicio y Corporativo los costos y la responsabilidad del helio antes de ampliar prospección. En Veterinario, ejecutar un piloto acotado: cargar, asignar y calificar los 61 leads del CVDL y decidir continuidad con evidencia.' },
      { title: 'CRM y controles realistas', copy: 'Segmentar con “Tipo de cliente”, incorporar Veterinario y unidad de negocio del producto (UEP), y operar vistas, fechas y tareas manuales. Establecer validaciones de descuentos, costos, instalación, garantía y entrega en equipos nuevos y reacondicionados. Usar registros complementarios donde el CRM no permita capturar todo.' },
    ],
    steps: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definir meta de ventas y KPIs.' },
      { title: 'Activar resultados · semanas 1–2', copy: 'Construir listas accionables de inventario, productos validados y cartera vencida. Priorizar cada caso por potencial, factibilidad, siguiente acción y fecha.' },
      { title: 'Proceso y políticas', copy: 'Estandarizar etapas y criterios de avance, cotización, precios, descuentos, crédito, cobranza, garantías, entrega y recompra. Contemplar razones sociales y traspasos entre áreas.' },
      { title: 'Enfoque comercial', copy: 'Priorizar segmentos, productos, territorios y canales por margen, demanda y capacidad. Distinguir propuesta de valor y condiciones de equipos nuevos frente a reacondicionados.' },
      { title: 'Herramientas mínimas útiles', copy: 'Preparar CRM con etapas y campos obligatorios, cotizador, fichas, one-pagers, presentaciones, playbook, tablero de KPIs y OKRs, y reuniones orientadas a decisiones.' },
    ],
    deliverables: 'Modelo objetivo, procesos y políticas, kit comercial, diseño de CRM y tablero, plan de capacidades y piloto validado.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales.',
  },
  {
    id: 'etapa-3',
    weeks: 'Semanas 9–21',
    title: 'Implementar y consolidar',
    purpose: 'Convertir el modelo en ejecución constante y autonomía.',
    highlights: [
      'Desarrollar habilidades comerciales según las brechas observadas.',
      'Operar el pipeline, las reuniones y las decisiones sobre casos reales.',
      'Corregir con datos, preparar la estrategia 2027 y transferir la continuidad.',
    ],
    focus: [],
    steps: [
      { title: 'Sales Readiness', copy: 'Desarrollar habilidades de diagnóstico consultivo, negociación, manejo de objeciones, cierre y seguimiento, según las brechas observadas.' },
      { title: 'Funciones y decisión', copy: 'Implementar funciones y niveles de decisión, con acompañamiento práctico sobre casos reales.' },
      { title: 'Reuniones institucionalizadas', copy: 'Revisar ventas, conversión, márgenes, cobranza, inventario y compromisos con una cadencia fija.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad.' },
      { title: 'Piloto con casos reales', copy: 'Probar el proceso en oportunidades y gestiones de cobranza. Corregir fricciones antes del despliegue.' },
      { title: 'Corrección con datos', copy: 'Corregir desviaciones con datos y verificar que las acciones se ejecuten y produzcan resultados.' },
      { title: 'Estrategia 2027', copy: 'Diseñar la estrategia comercial para 2027.' },
    ],
    deliverables: 'Operación comercial funcionando, tablero activo, reuniones institucionalizadas, desempeño comparado con línea base y plan de continuidad de 90 días.',
    gate: 'Cuatro ciclos semanales consecutivos de seguimiento conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
  },
];

const cadences = [
  { name: 'Semanal', role: 'Operación', use: 'Destrabar pipeline, cobranza, inventario y pendientes.', output: 'Acciones, fechas y evidencia de avance.' },
  { name: 'Quincenal', role: 'Decisiones', use: 'Resolver desviaciones y temas que necesitan escalamiento.', output: 'Decisiones y ajustes aprobados.' },
  { name: 'Mensual', role: 'Resultados', use: 'Evaluar OKRs, rentabilidad, liquidez y prioridades.', output: 'Resultados versus línea base y cambios de enfoque.' },
];

const measures = [
  { name: 'Ventas', why: 'Si se convierten más oportunidades.', kpis: 'Ventas del equipo, pipeline, conversión por etapa, ciclo comercial y oportunidades perdidas.' },
  { name: 'Rentabilidad', why: 'Si el volumen trae margen.', kpis: 'Ticket promedio y mediana, margen y mezcla por producto y tipo de equipo.' },
  { name: 'Liquidez', why: 'Si vuelve el efectivo y se mueve el inventario.', kpis: 'Efectivo recuperado sobre cartera vencida conciliada, nuevos atrasos y reducción de inventario detenido.' },
  { name: 'Disciplina', why: 'Si cada oportunidad tiene seguimiento.', kpis: 'Oportunidades con siguiente paso, seguimiento oportuno y cumplimiento verificable de compromisos.' },
  { name: 'Autonomía', why: 'Si se decide y se vende sin el dueño.', kpis: 'Ventas sin intervención del dueño, decisiones autónomas y proporción de ventas vinculadas a su cartera.' },
];

const readings = [
  { title: 'Comparaciones útiles', copy: 'Diferenciaremos dueño, campo, inside sales, consumibles y Servicio. Compararemos periodos equivalentes, ticket promedio, mediana y dispersión por UEP y nuevo o reacondicionado. Los aproximadamente $18.4 M anuales históricos del equipo de campo son una referencia, no una meta. En campañas mediremos leads únicos calificados, oportunidades, ventas y cobros, además de hábitos de registro, puntualidad y compromisos cumplidos.' },
  { title: 'Valor económico', copy: 'Estimaremos margen incremental de ventas, costos financieros evitados, mejoras de productividad y beneficios de capital liberado. Presentaremos por separado ventas, efectivo recuperado y capital liberado para evitar contarlos como una misma ganancia.' },
  { title: 'Alcance', copy: 'Estas acciones están dentro de las 21 semanas. El proyecto se concentra en Comercial y Marketing, coordinándose con Administración y áreas técnicas para vender, entregar y cobrar. Considera ofertas de mantenimiento, renovación y referidos con Servicio. La operación interna integral de Servicio, una reestructura societaria o el desarrollo completo de una unidad veterinaria requerirían un alcance separado. Revisaremos las razones sociales para definir quién cotiza, factura, cobra y responde al cliente.' },
];

const evidence = [
  { value: 'Generar más oportunidades de venta', proof: 'Prospectos calificados, cotizaciones y conversión.' },
  { value: 'Aprovechar el negocio existente', proof: 'Clientes reactivados y ventas de inventario detenido.' },
  { value: 'Recuperar liquidez', proof: 'Cobranza efectivamente recuperada y reducción de cartera vencida.' },
  { value: 'Aumentar productividad comercial', proof: 'Seguimientos oportunos, ciclos de venta y cumplimiento.' },
  { value: 'Reducir dependencia del dueño', proof: 'Decisiones y ventas gestionadas autónomamente.' },
];

const installed = [
  { title: 'Oportunidades gestionadas', copy: 'Cartera, inventario y productos validados con acciones, no solo reportes.' },
  { title: 'Procesos replicables', copy: 'Un sistema desde el primer contacto hasta la recompra, con prácticas estándar.' },
  { title: 'Decisiones con datos', copy: 'Compromisos, seguimiento y aprendizaje respaldados por el CRM.' },
  { title: 'Equipo autónomo', copy: 'Autoridad clara y cuatro ciclos consecutivos de gestión sin el dueño.' },
  { title: 'Continuidad a 90 días', copy: 'Indicadores, hábitos, pendientes y prioridades para sostener lo instalado.' },
];

const criteria = [
  'Abrir con el costo de la situación actual: conversión, efectivo y capacidad de crecimiento. Cuantificar únicamente con cifras validadas.',
  'Presentar los resultados antes que las actividades y explicar después cómo se obtendrán.',
  'Agrupar CRM, procesos, capacitación, políticas y reuniones como Sistema de Gestión Comercial, manteniendo el detalle técnico accesible.',
  'Mostrar hitos verificables: semana 4, línea base y activación; semana 8, modelo validado; semana 14, adopción y ajustes; semana 21, autonomía y resultados documentados.',
  'Destacar acompañamiento a la ejecución, corrección de desviaciones y transferencia de un sistema sostenible, no solamente diseño de procesos.',
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

export default function GaozV6() {
  const [stageId, setStageId] = useState(stages[0].id);
  const stage = stages.find((item) => item.id === stageId) ?? stages[0];

  function moveStage(index: number, event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const next = event.key === 'ArrowRight' ? (index + 1) % stages.length : (index - 1 + stages.length) % stages.length;
    setStageId(stages[next].id);
    document.getElementById(`tab-${stages[next].id}`)?.focus();
  }

  return (
    <div className="gz gz-proposal gz-v6">
      <PageMeta
        title="Diseño y Ejecución de Ecosistema Comercial - GAOZ"
        description="Propuesta de 21 semanas para diseñar y ejecutar un ecosistema comercial para GAOZ."
      />
      <a className="gz-skip" href="#gaoz-main">Saltar al contenido</a>
      <header className="gz-nav">
        <a href="/" className="gz-brand" aria-label="Ir a la web principal de TOOL">TOOL<span>GAOZ</span></a>
        <nav aria-label="Navegación de la propuesta">
          <a href="#reto">Reto</a>
          <a href="#valor">Valor</a>
          <a href="#ruta">Ruta</a>
          <a href="#medicion">Medición</a>
          <a href="#cierre">Cierre</a>
          <a href="/gaoz-v6/valor">Diagrama</a>
        </nav>
        <a href={contact} target="_blank" rel="noopener noreferrer" className="gz-nav-cta">Hablemos <ArrowUpRight size={16} /></a>
      </header>

      <main id="gaoz-main">
        <section className="gz-hero">
          <div className="gz-hero-copy">
            <div className="gz-eyebrow"><span className="gz-dot" /> PROPUESTA · 21 SEMANAS</div>
            <h1>Más ventas.<br />Mayor liquidez.<br /><span>Menos dependencia del dueño.</span></h1>
            <p className="gz-hero-lead">En 21 semanas convertimos oportunidades que hoy se pierden en ventas y cobranza, y dejamos un sistema que el equipo pueda operar.</p>
            <div className="gz-actions">
              <a className="gz-text-link" href="#reto">Explorar la propuesta <ArrowRight size={16} /></a>
              <a className="gz-text-link" href="#ruta">Ver ruta de ejecución <ArrowRight size={16} /></a>
            </div>
          </div>
          <ol className="gz-rail" aria-label="Horizonte de 21 semanas">
            <li><b>1–4</b><span>Diagnosticar y activar</span></li>
            <li><b>5–8</b><span>Diseñar y validar</span></li>
            <li><b>9–21</b><span>Implementar y consolidar</span></li>
          </ol>
        </section>

        <section className="gz-section" id="reto">
          <div className="gz-block-head">
            <div className="gz-eyebrow">EL RETO</div>
            <h2>El potencial ya existe.<br /><span>Hoy depende de esfuerzos aislados.</span></h2>
            <p>GAOZ ya tiene clientes, productos y campañas. La oportunidad está en el seguimiento, el inventario y la cobranza.</p>
          </div>
          <div className="gz-loop">
            <div className="gz-loop-head" aria-hidden="true">
              <span>Problema</span>
              <span>Intervención</span>
              <span>Beneficio</span>
            </div>
            <ol>
              {loops.map((item) => (
                <li key={item.problem}>
                  <span>{item.problem}</span>
                  <span>{item.action}</span>
                  <strong>{item.benefit}</strong>
                </li>
              ))}
            </ol>
          </div>
          <details className="gz-fold">
            <summary>Qué está limitando ese potencial</summary>
            <ol className="gz-fold-list">
              {challenges.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ol>
          </details>
        </section>

        <section className="gz-section gz-band" id="valor">
          <div className="gz-block-head">
            <div className="gz-eyebrow">CÓMO APORTAMOS VALOR</div>
            <h2>Intervenir hoy.<br /><span>Dejar capacidad para mañana.</span></h2>
            <p>Los dos frentes corren al mismo tiempo durante las 21 semanas.</p>
          </div>
          <div className="gz-pair">
            {fronts.map((front) => (
              <article key={front.title}>
                <span>{front.kicker}</span>
                <h3>{front.title}</h3>
                <ul>
                  {front.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="gz-phrase"><strong>En una frase.</strong> Convertir oportunidades que hoy pueden perderse en acciones de venta y cobranza, y dejar un sistema que GAOZ pueda operar.</p>
          <a className="gz-text-link gz-diagram-link" href="/gaoz-v6/valor">Ver la ruta de ejecución <ArrowRight size={16} /></a>
          <details className="gz-fold">
            <summary>Prioridades que corren las 21 semanas</summary>
            <ol className="gz-fold-list">
              {priorities.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ol>
          </details>
          <details className="gz-fold">
            <summary>De dónde partimos</summary>
            <p>Partimos del diagnóstico y del trabajo ya realizado: propuesta V3, diagnóstico V10 y respuestas complementarias. Activamos oportunidades desde el inicio y acompañamos la implementación sobre casos reales. Las metas se calibrarán con la línea base; el valor económico se medirá durante la ejecución.</p>
          </details>
        </section>

        <section className="gz-section" id="ruta">
          <div className="gz-block-head">
            <div className="gz-eyebrow">RUTA DE 21 SEMANAS</div>
            <h2>Tres etapas.<br /><span>Resultados desde la primera.</span></h2>
          </div>
          <div className="gz-timeline" role="tablist" aria-label="Etapas de la ruta">
            {stages.map((item, index) => (
              <button
                key={item.id}
                id={`tab-${item.id}`}
                type="button"
                role="tab"
                aria-selected={item.id === stage.id}
                aria-controls={`panel-${item.id}`}
                tabIndex={item.id === stage.id ? 0 : -1}
                onClick={() => setStageId(item.id)}
                onKeyDown={(event) => moveStage(index, event)}
              >
                <span>{item.weeks}</span>
                <strong>{item.title}</strong>
              </button>
            ))}
          </div>
          <div className="gz-stage-panel" role="tabpanel" id={`panel-${stage.id}`} aria-labelledby={`tab-${stage.id}`}>
            <p className="gz-stage-purpose">{stage.purpose}</p>
            <ol className="gz-highlights">
              {stage.highlights.map((item) => <li key={item}>{item}</li>)}
            </ol>
            <p className="gz-result-line"><span>Queda</span> {stage.deliverables}</p>
            <details className="gz-fold">
              <summary>Ver actividades, controles y criterio de cierre</summary>
              {stage.focus.length > 0 && (
                <div className="gz-fold-focus">
                  {stage.focus.map((item) => (
                    <p key={item.title}><strong>{item.title}.</strong> {item.copy}</p>
                  ))}
                </div>
              )}
              <ol className="gz-fold-list">
                {stage.steps.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p>{item.copy}</p>
                  </li>
                ))}
              </ol>
              <p className="gz-gate"><strong>Cómo sabremos que avanzamos.</strong> {stage.gate}</p>
            </details>
          </div>
        </section>

        <section className="gz-section gz-band" id="medicion">
          <div className="gz-block-head">
            <div className="gz-eyebrow">CÓMO MEDIREMOS</div>
            <h2>Contra la línea base.<br /><span>Sin cifras inventadas.</span></h2>
            <p>Metas y OKRs en la semana 2, calibrados al cierre de la semana 4.</p>
          </div>
          <ol className="gz-measures">
            {measures.map((item, index) => (
              <li key={item.name}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.why}</p>
                </div>
                <p>{item.kpis}</p>
              </li>
            ))}
          </ol>
          <ol className="gz-cadence">
            {cadences.map((row) => (
              <li key={row.name}>
                <div>
                  <strong>{row.name}</strong>
                  <span>{row.role}</span>
                </div>
                <div>
                  <p>{row.use}</p>
                  <p>{row.output}</p>
                </div>
              </li>
            ))}
          </ol>
          <details className="gz-fold">
            <summary>Cómo leer estas cifras y qué queda fuera</summary>
            <p>Separaremos cartera del dueño, equipo de campo e inside sales, así como equipos nuevos y reacondicionados.</p>
            <ol className="gz-fold-list">
              {readings.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ol>
            <ol className="gz-fold-list">
              {evidence.map((row) => (
                <li key={row.value}>
                  <strong>{row.value}</strong>
                  <p>{row.proof}</p>
                </li>
              ))}
            </ol>
          </details>
        </section>

        <section className="gz-delivery" id="cierre">
          <div className="gz-delivery-intro">
            <div className="gz-eyebrow">QUÉ QUEDA FUNCIONANDO</div>
            <h2>De la oportunidad<br /><span>a un equipo que decide.</span></h2>
          </div>
          <ol className="gz-chain">
            {installed.map((item, index) => (
              <li key={item.title}>
                <span>0{index + 1}</span>
                <strong>{item.title}</strong>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
          <p className="gz-success">GAOZ opera su sistema comercial, decide con datos y mantiene el seguimiento sin la intervención cotidiana del dueño. Ventas y recuperación se miden contra línea base, sin garantía de resultados. Reducir la dependencia económica de su cartera personal puede requerir más tiempo.</p>
        </section>

        <section className="gz-section" id="anexo">
          <details className="gz-fold">
            <summary>Cómo presentar esta propuesta</summary>
            <ol className="gz-fold-list">
              <li>
                <strong>Fortaleza</strong>
                <p>No partimos de cero. Intervenimos sobre oportunidades ya identificadas.</p>
              </li>
              <li>
                <strong>Oportunidad de mejora</strong>
                <p>Cuantificar cuánto le cuesta a GAOZ mantener la situación actual, usando cifras validadas.</p>
              </li>
              <li>
                <strong>Riesgo de percepción</strong>
                <p>Evitar que se vea como una compra de capacitación, CRM, reuniones y documentación, en vez de una intervención para mejorar ventas, flujo de efectivo y autonomía.</p>
              </li>
            </ol>
            <ol className="gz-criteria">
              {criteria.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </details>
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
        <span>Diseño y Ejecución de Ecosistema Comercial - GAOZ · 21 semanas</span>
        <a href="/gaoz-v6/valor">Ruta de ejecución</a>
        <a href="#ruta">Volver a la ruta ↑</a>
      </footer>
    </div>
  );
}
