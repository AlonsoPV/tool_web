import { useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { BadgeCheck, PenLine, Search, type LucideIcon } from 'lucide-react';

type Stage = {
  id: string;
  index: string;
  weeks: string;
  title: string;
  full: string;
  purpose: string;
  highlights: string[];
  activities: { title: string; copy: string }[];
  deliverable: string;
  gate: string;
  icon: LucideIcon;
  color: string;
  lit: string;
};

const stages: Stage[] = [
  {
    id: 'etapa-1',
    index: '01',
    weeks: 'Semanas 1–4',
    title: 'Diagnosticar y activar',
    full: 'Diagnosticar y activar',
    purpose: 'Identificar dónde se pierde valor y comenzar a recuperarlo.',
    highlights: [
      'Entender cómo se vende',
      'Mapear el ciclo completo',
      'Evaluar capacidades y cultura',
      'Analizar datos y mercado',
    ],
    activities: [
      { title: 'Entender cómo se vende', copy: 'Revisar casos ganados y perdidos, observar al equipo y detectar las prácticas del mejor vendedor que sí pueden estandarizarse. Distinguir la relación personal del dueño del método comercial.' },
      { title: 'Mapear el ciclo completo', copy: 'Revisar prospección, calificación, cotización, cierre, entrega, cobranza, postventa y recompra. Detectar fricciones, traspasos entre áreas y razones sociales.' },
      { title: 'Evaluar capacidades y cultura', copy: 'Analizar habilidades, hábitos, disciplina de seguimiento, estructura y capacidad de venta y entrega instalada.' },
      { title: 'Analizar datos y mercado', copy: 'Revisar caídas del funnel, ticket, margen, productos, cartera, inventario, segmentos y territorios. Distinguir equipos nuevos y reacondicionados. Registrar faltantes antes de inferir causas.' },
    ],
    deliverable: 'Diagnóstico ejecutivo, mapa de procesos y brechas, prioridades comerciales.',
    gate: 'Prioridades y metas calibradas al cierre de semana 4. Oportunidades comerciales y de cobranza con seguimiento verificable.',
    icon: Search,
    color: '#0e2748',
    lit: '#16345c',
  },
  {
    id: 'etapa-2',
    index: '02',
    weeks: 'Semanas 5–8',
    title: 'Diseñar y validar',
    full: 'Diseñar y validar',
    purpose: 'Convertir las mejores prácticas en un método comercial sencillo, medible y replicable.',
    highlights: [
      'Modelo comercial y gobierno',
      'Proceso y políticas',
      'Enfoque comercial',
      'Herramientas mínimas útiles',
    ],
    activities: [
      { title: 'Modelo comercial y gobierno', copy: 'Definir funciones, autoridad, reglas de escalamiento y participación del dueño en cartera clave. Separar autonomía operativa de dependencia económica de sus ventas. Definir meta de ventas y KPIs.' },
      { title: 'Proceso y políticas', copy: 'Estandarizar etapas y criterios de avance, cotización, precios, descuentos, crédito, cobranza, garantías, entrega y recompra. Contemplar razones sociales y traspasos entre áreas.' },
      { title: 'Enfoque comercial', copy: 'Priorizar segmentos, productos, territorios y canales por margen, demanda y capacidad. Distinguir propuesta de valor y condiciones de equipos nuevos frente a reacondicionados.' },
      { title: 'Herramientas mínimas útiles', copy: 'Preparar CRM con etapas y campos obligatorios, cotizador, fichas, one-pagers, presentaciones, playbook, tablero de KPIs y OKRs, y reuniones orientadas a decisiones.' },
    ],
    deliverable: 'Playbook comercial, kit de herramientas comerciales, políticas y procedimientos de venta.',
    gate: 'Proceso aprobado y demostrado como utilizable por el equipo en casos reales.',
    icon: PenLine,
    color: '#14556e',
    lit: '#1a6a86',
  },
  {
    id: 'etapa-3',
    index: '03',
    weeks: 'Semanas 9–21',
    title: 'Implementar y consolidar',
    full: 'Implementar y consolidar',
    purpose: 'Convertir el modelo en ejecución constante y autonomía.',
    highlights: [
      'Activar resultados',
      'Sales Readiness',
      'Funciones y decisión',
      'Reuniones institucionalizadas',
      'Pipeline en CRM',
      'Piloto con casos reales',
      'Corrección con datos',
      'Estrategia 2027',
    ],
    activities: [
      { title: 'Activar resultados', copy: 'Construir listas accionables de inventario, productos validados y cartera vencida. Priorizar cada caso por potencial, factibilidad, siguiente acción y fecha.' },
      { title: 'Sales Readiness', copy: 'Desarrollar habilidades de diagnóstico consultivo, negociación, manejo de objeciones, cierre y seguimiento, según las brechas observadas.' },
      { title: 'Funciones y decisión', copy: 'Implementar funciones y niveles de decisión, con acompañamiento práctico sobre casos reales.' },
      { title: 'Reuniones institucionalizadas', copy: 'Revisar ventas, conversión, márgenes, cobranza, inventario y compromisos con una cadencia fija.' },
      { title: 'Pipeline en CRM', copy: 'Operar todo el pipeline en CRM: cada oportunidad con etapa, siguiente acción y fecha. Sin seguimiento, no hay visibilidad.' },
      { title: 'Piloto con casos reales', copy: 'Probar el proceso en oportunidades y gestiones de cobranza. Corregir fricciones antes del despliegue.' },
      { title: 'Corrección con datos', copy: 'Corregir desviaciones con datos y verificar que las acciones se ejecuten y produzcan resultados.' },
      { title: 'Estrategia 2027', copy: 'Diseñar la estrategia comercial para 2027.' },
    ],
    deliverable: 'Academia Comercial de GAOZ, plan estratégico 2027 y mapa de trazabilidad de factores de éxito.',
    gate: 'Cuatro ciclos semanales consecutivos conducidos por GAOZ, con información actualizada, decisiones registradas y compromisos verificados.',
    icon: BadgeCheck,
    color: '#0b7358',
    lit: '#0d8a68',
  },
];

const CX = 560;
const CY = 286;
const R = 188;
const STROKE = 116;
const START = 138;
const SWEEP = 264;
const GAP = 6.5;
const INNER = R - STROKE / 2;
const OUTER = R + STROKE / 2;
const RING_VB = '248 0 624 560';

type Outcome = {
  id: string;
  index: string;
  title: string;
  short: string;
  purpose: string;
  indicators: string[];
};

const outcomeCriterion = 'Se miden contra línea base, sin garantías de resultados.';

const outcomes: Outcome[] = [
  {
    id: 'ventas',
    index: '01',
    title: 'Más ventas',
    short: 'Ventas',
    purpose: 'Que las oportunidades de GAOZ se conviertan en ventas del equipo.',
    indicators: ['Ventas del equipo', 'Pipeline', 'Conversión por etapa', 'Ciclo comercial', 'Oportunidades perdidas'],
  },
  {
    id: 'rentabilidad',
    index: '02',
    title: 'Más rentabilidad',
    short: 'Rentabilidad',
    purpose: 'Que el ticket, el margen y la mezcla sostengan el resultado.',
    indicators: ['Ticket promedio y mediana', 'Margen', 'Mezcla por producto y tipo de equipo'],
  },
  {
    id: 'liquidez',
    index: '03',
    title: 'Más liquidez',
    short: 'Liquidez',
    purpose: 'Que el efectivo vuelva al negocio y baje el capital detenido.',
    indicators: ['Efectivo recuperado sobre cartera vencida conciliada', 'Nuevos atrasos', 'Reducción de inventario detenido'],
  },
  {
    id: 'disciplina',
    index: '04',
    title: 'Más disciplina',
    short: 'Disciplina',
    purpose: 'Que el seguimiento termine en una acción verificable.',
    indicators: ['Oportunidades con siguiente paso', 'Seguimiento oportuno', 'Cumplimiento verificable de compromisos'],
  },
  {
    id: 'autonomia',
    index: '05',
    title: 'Más autonomía',
    short: 'Autonomía',
    purpose: 'Que vender y decidir no dependa de la intervención cotidiana del dueño.',
    indicators: ['Ventas sin intervención del dueño', 'Decisiones autónomas', 'Proporción de ventas vinculadas a su cartera'],
  },
];

const segmentSweep = (SWEEP - GAP * (stages.length - 1)) / stages.length;

function point(deg: number, radius: number) {
  const rad = (deg * Math.PI) / 180;
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)] as const;
}

function shift(deg: number, dist: number) {
  const rad = (deg * Math.PI) / 180;
  return `translate(${(Math.cos(rad) * dist).toFixed(2)} ${(Math.sin(rad) * dist).toFixed(2)})`;
}

function arcPath(startDeg: number, endDeg: number, radius: number) {
  const [x1, y1] = point(startDeg, radius);
  const [x2, y2] = point(endDeg, radius);
  const span = (endDeg - startDeg + 360) % 360;
  const large = span > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
}

function sectorPath(startDeg: number, endDeg: number) {
  const [ox1, oy1] = point(startDeg, OUTER);
  const [ox2, oy2] = point(endDeg, OUTER);
  const [ix2, iy2] = point(endDeg, INNER);
  const [ix1, iy1] = point(startDeg, INNER);
  const span = (endDeg - startDeg + 360) % 360;
  const large = span > 180 ? 1 : 0;
  return `M ${ox1} ${oy1} A ${OUTER} ${OUTER} 0 ${large} 1 ${ox2} ${oy2} L ${ix2} ${iy2} A ${INNER} ${INNER} 0 ${large} 0 ${ix1} ${iy1} Z`;
}

function headPath(deg: number) {
  const rad = (deg * Math.PI) / 180;
  const tx = -Math.sin(rad);
  const ty = Math.cos(rad);
  const [ex, ey] = point(deg, R);
  const [ox, oy] = point(deg, OUTER);
  const [ix, iy] = point(deg, INNER);
  return `M ${ox} ${oy} L ${ex + tx * 118} ${ey + ty * 118} L ${ix} ${iy} Z`;
}

const segments = stages.map((stage, index) => {
  const start = START + index * (segmentSweep + GAP);
  const end = start + segmentSweep;
  const mid = start + segmentSweep / 2;
  const [x, y] = point(mid, R - 4);
  const [bx, by] = point(mid, OUTER + 8);
  return { ...stage, start, end, mid, x, y, bx, by };
});

const ringEnd = START + SWEEP;

function PhaseCard({ stage }: { stage: Stage }) {
  return (
    <>
      <div className="gv-now-head">
        <span className="gv-now-index">{stage.index}</span>
        <span className="gv-now-weeks">{stage.weeks}</span>
      </div>
      <b className="gv-phase">{stage.full}</b>
      <PhaseBody stage={stage} />
    </>
  );
}
function PhaseBody({ stage }: { stage: Stage }) {
  return (
    <>
      <ul>
        {stage.highlights.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <details className="gv-now-activities">
        <summary>Ver actividades de la fase</summary>
        <ol>
          {stage.activities.map((activity) => (
            <li key={activity.title}>
              <strong>{activity.title}</strong>
              <p>{activity.copy}</p>
            </li>
          ))}
        </ol>
      </details>
      <p className="gv-now-gate"><span>Entregables</span>{stage.deliverable}</p>
      <p className="gv-now-gate"><span>Puerta de salida</span>{stage.gate}</p>
    </>
  );
}

function RouteEntry() {
  return (
    <div className="gv-entry">
      <span>Entrada</span>
      <b>Semana 1</b>
      <small>Arranque</small>
    </div>
  );
}

function ExitMark({
  on,
  id,
  onSelect,
  onPreview,
  onRelease,
  controls,
}: {
  on: boolean;
  id: string;
  onSelect: () => void;
  onPreview: (pointerType: string) => void;
  onRelease: (pointerType: string) => void;
  controls?: string;
}) {
  return (
    <button
      id={id}
      type="button"
      className={`gv-entry gv-exit-mark${on ? ' is-on' : ''}`}
      aria-pressed={on}
      aria-expanded={on}
      aria-controls={controls}
      aria-label="Salida. Resultado GAOZ. Ver qué mediremos al cerrar la ruta."
      onClick={onSelect}
      onPointerEnter={(event) => onPreview(event.pointerType)}
      onPointerLeave={(event) => onRelease(event.pointerType)}
    >
      <span>Salida</span>
      <b>
        <em className="gv-exit-short">Resultado</em>
        <em className="gv-exit-long">Resultado GAOZ</em>
      </b>
      <small>
        <em className="gv-exit-short">GAOZ</em>
        <em className="gv-exit-long">Qué mediremos al cerrar</em>
      </small>
    </button>
  );
}

function ExitBody({
  shown,
  active,
  idPrefix,
  onPreview,
  onRelease,
  onSelect,
  quiet = false,
}: {
  shown: number;
  active: number;
  idPrefix: string;
  onPreview: (index: number, pointerType: string) => void;
  onRelease: (pointerType: string) => void;
  onSelect: (index: number) => void;
  quiet?: boolean;
}) {
  const outcome = outcomes[shown];
  return (
    <>
      <div key="head" className="gv-now-head">
        <span className="gv-now-index">{outcome.index}</span>
        <span className="gv-now-weeks">Resultado</span>
      </div>
      <b key="title" className="gv-phase">{outcome.title}</b>
      <ol key="picks" className="gv-picks">
        {outcomes.map((item, index) => (
          <li key={item.id}>
            <button
              id={`${idPrefix}-${item.id}`}
              type="button"
              tabIndex={quiet ? -1 : undefined}
              className={shown === index ? 'is-on' : undefined}
              aria-pressed={active === index}
              onClick={() => onSelect(index)}
              onPointerEnter={(event) => onPreview(index, event.pointerType)}
              onPointerLeave={(event) => onRelease(event.pointerType)}
            >
              <span>{item.index}</span>
              {item.short}
            </button>
          </li>
        ))}
      </ol>
      <div key={outcome.id} className="gv-detail">
        <p className="gv-now-purpose">{outcome.purpose}</p>
        <ul>
          {outcome.indicators.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="gv-now-gate"><span>Criterio</span>{outcomeCriterion}</p>
      </div>
    </>
  );
}

export default function GaozValueDiagram() {
  const [viewOn, setViewOn] = useState<'phase' | 'exit'>('phase');
  const [viewHover, setViewHover] = useState<'phase' | 'exit' | null>(null);
  const view = viewHover ?? viewOn;
  const [phaseOn, setPhaseOn] = useState(0);
  const [phaseHover, setPhaseHover] = useState<number | null>(null);
  const phaseShown = phaseHover ?? phaseOn;
  const phase = stages[phaseShown];
  const [outOn, setOutOn] = useState(0);
  const [outHover, setOutHover] = useState<number | null>(null);
  const outShown = outHover ?? outOn;
  const exitOn = view === 'exit';
  const cardKey = exitOn ? `salida-${outcomes[outShown].id}` : phase.id;
  const panelKey = exitOn ? 'salida' : phase.id;
  const routeOrder = exitOn ? stages.length : phaseShown;
  const direction = useRef<'next' | 'prev'>('next');
  const previousOrder = useRef(routeOrder);
  if (previousOrder.current !== routeOrder) {
    direction.current = routeOrder > previousOrder.current ? 'next' : 'prev';
    previousOrder.current = routeOrder;
  }
  const cardRef = useRef<HTMLDivElement>(null);
  const cardHeight = useRef(0);
  const holdTimer = useRef<number | null>(null);
  const outcomeTimer = useRef<number | null>(null);
  type LeavePanel = {
    key: string;
    dir: 'next' | 'prev';
    exit: boolean;
    phaseIndex: number;
    outcomeIndex: number;
  };
  const [frame, setFrame] = useState<{
    key: string;
    order: number;
    exit: boolean;
    phaseIndex: number;
    outcomeIndex: number;
    leaving: LeavePanel | null;
  }>({ key: panelKey, order: routeOrder, exit: exitOn, phaseIndex: phaseShown, outcomeIndex: outShown, leaving: null });
  if (frame.key !== panelKey) {
    setFrame({
      key: panelKey,
      order: routeOrder,
      exit: exitOn,
      phaseIndex: phaseShown,
      outcomeIndex: outShown,
      leaving: {
        key: frame.key,
        dir: routeOrder > frame.order ? 'next' : 'prev',
        exit: frame.exit,
        phaseIndex: frame.phaseIndex,
        outcomeIndex: frame.outcomeIndex,
      },
    });
  } else if (frame.outcomeIndex !== outShown || frame.phaseIndex !== phaseShown || frame.order !== routeOrder) {
    setFrame({ ...frame, order: routeOrder, exit: exitOn, phaseIndex: phaseShown, outcomeIndex: outShown });
  }
  const leaving = frame.leaving;

  useLayoutEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => {
      setFrame((current) => (current.leaving ? { ...current, leaving: null } : current));
    }, 460);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const nextHeight = card.scrollHeight;
    const previousHeight = cardHeight.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !previousHeight || Math.abs(previousHeight - nextHeight) < 1) {
      card.style.height = '';
      cardHeight.current = card.offsetHeight;
      return;
    }
    card.style.height = `${previousHeight}px`;
    card.getBoundingClientRect();
    card.style.height = `${nextHeight}px`;
    const settle = (event: TransitionEvent) => {
      if (event.propertyName !== 'height' || event.target !== card) return;
      card.style.height = '';
      cardHeight.current = card.offsetHeight;
    };
    card.addEventListener('transitionend', settle);
    return () => {
      card.removeEventListener('transitionend', settle);
      if (card.style.height) cardHeight.current = card.getBoundingClientRect().height;
    };
  }, [cardKey]);

  function move(index: number, key: string) {
    const forward = key === 'ArrowRight' || key === 'ArrowDown';
    const backward = key === 'ArrowLeft' || key === 'ArrowUp';
    if (!forward && !backward) return;
    const next = forward ? (index + 1) % stages.length : (index - 1 + stages.length) % stages.length;
    setViewOn('phase');
    setViewHover(null);
    setPhaseOn(next);
    const desktop = document.getElementById(`valor-${stages[next].id}`);
    const mobile = document.getElementById(`valor-m-${stages[next].id}`);
    const target = desktop && desktop.getClientRects().length > 0 ? desktop : mobile;
    target?.focus();
  }

  function clearHold() {
    if (holdTimer.current != null) {
      window.clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
  }

  function clearOutcomeHold() {
    if (outcomeTimer.current != null) {
      window.clearTimeout(outcomeTimer.current);
      outcomeTimer.current = null;
    }
  }

  function scheduleRelease(pointerType: string) {
    if (pointerType !== 'mouse') return;
    clearHold();
    holdTimer.current = window.setTimeout(() => {
      setViewHover(null);
      setPhaseHover(null);
    }, 220);
  }

  function isDesktopView() {
    return window.matchMedia('(min-width: 960px)').matches;
  }

  function previewPhase(index: number, pointerType: string) {
    if (pointerType !== 'mouse' || !isDesktopView()) return;
    clearHold();
    setViewHover('phase');
    setPhaseHover(index);
  }

  function releasePhase(pointerType: string) {
    if (!isDesktopView()) return;
    scheduleRelease(pointerType);
  }

  function selectPhase(index: number) {
    setViewOn('phase');
    setViewHover(null);
    setPhaseOn(index);
    setPhaseHover(null);
    if (isDesktopView()) return;
    requestAnimationFrame(() => {
      document.getElementById(`valor-m-${stages[index].id}`)?.scrollIntoView({ block: 'nearest' });
    });
  }

  function previewExit(pointerType: string) {
    if (pointerType !== 'mouse' || !isDesktopView()) return;
    clearHold();
    setViewHover('exit');
  }

  function releaseExit(pointerType: string) {
    if (!isDesktopView()) return;
    scheduleRelease(pointerType);
  }

  function selectExit() {
    const next = viewOn === 'exit' ? 'phase' : 'exit';
    setViewOn(next);
    setViewHover(null);
    setPhaseHover(null);
    if (isDesktopView() || next !== 'exit') return;
    requestAnimationFrame(() => {
      document.getElementById('valor-m-exit-body')?.scrollIntoView({ block: 'nearest' });
    });
  }

  function previewOutcome(index: number, pointerType: string) {
    if (pointerType !== 'mouse' || !isDesktopView()) return;
    clearOutcomeHold();
    setOutHover(index);
  }

  function releaseOutcome(pointerType: string) {
    if (pointerType !== 'mouse' || !isDesktopView()) return;
    clearOutcomeHold();
    outcomeTimer.current = window.setTimeout(() => setOutHover(null), 180);
  }

  function selectOutcome(index: number) {
    setOutOn(index);
    setOutHover(null);
  }

  return (
    <section className="gv" aria-labelledby="gv-title">
      <div className="gv-head">
        <div className="gz-eyebrow"><span className="gz-dot" /> RUTA DE EJECUCIÓN</div>
        <h1 id="gv-title">Cómo se ejecuta la implementación en GAOZ</h1>
        <p className="gv-lead">Entra en la semana 1, recorre tres fases y sale en el resultado que GAOZ va a medir.</p>
      </div>

      <div className="gv-board">
      <div className="gv-orbit is-active">
        <RouteEntry />
        <svg className="gv-svg" viewBox={RING_VB} role="img" aria-label="Ruta de ejecución de 21 semanas. Entrada en la semana 1. Fases: diagnosticar y activar, diseñar y validar, implementar y consolidar. Salida: resultado para GAOZ.">

          <ellipse cx={CX} cy={CY + 28} rx={OUTER + 8} ry="46" fill="#0a1d3d" opacity="0.06" />

          <g>
            {segments.map((segment, index) => {
              const on = view === 'phase' && phaseShown === index;
              return (
                <g key={segment.id} className={`gv-phase-mark${on ? ' is-on' : ''}`} transform={on ? shift(segment.mid, 11) : 'translate(0 0)'}>
                  <path
                    className="gv-seg"
                    d={sectorPath(segment.start, segment.end)}
                    fill={on ? segment.lit : segment.color}
                    onClick={() => selectPhase(index)}
                  />
                  <path
                    d={arcPath(segment.start + 1.4, segment.end - 1.4, INNER + 11)}
                    fill="none"
                    stroke="#fff"
                    strokeOpacity="0.34"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    className="gv-phase-run"
                    d={arcPath(segment.start + 8, segment.end - 8, OUTER - 18)}
                    fill="none"
                    stroke="#fff"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    pathLength={100}
                    strokeDasharray="12 88"
                    opacity={on ? 1 : 0}
                    style={{ transition: 'opacity .45s ease' }}
                  />
                  <circle className="gv-badge-dot" cx={segment.bx} cy={segment.by} r={on ? 14 : 12} fill="#fff" />
                  <text className="gv-badge" x={segment.bx} y={segment.by} dy="0.35em" textAnchor="middle" fill={segment.color}>
                    {segment.index}
                  </text>
                  <foreignObject x={segment.x - 62} y={segment.y - 40} width={124} height={82}>
                    <button
                      id={`valor-${segment.id}`}
                      type="button"
                      className={`gv-node${on ? ' is-on' : ''}`}
                      aria-pressed={viewOn === 'phase' && phaseOn === index}
                      aria-label={`${segment.weeks}. ${segment.full}. ${segment.purpose}`}
                      onClick={() => selectPhase(index)}
                      onPointerEnter={(event) => previewPhase(index, event.pointerType)}
                      onPointerLeave={(event) => releasePhase(event.pointerType)}
                      onFocus={() => {
                        setViewHover('phase');
                        setPhaseHover(index);
                      }}
                      onBlur={() => {
                        setViewHover(null);
                        setPhaseHover(null);
                      }}
                      onKeyDown={(event) => {
                        if (event.key.startsWith('Arrow')) event.preventDefault();
                        move(index, event.key);
                      }}
                    >
                      <span>{segment.weeks}</span>
                      <b>{segment.title.replace(' y ', '\ny ')}</b>
                    </button>
                  </foreignObject>
                  {index === stages.length - 1 && (
                    <path className="gv-head" d={headPath(ringEnd)} fill={on ? segment.lit : segment.color} />
                  )}
                </g>
              );
            })}
          </g>

          <circle cx={CX} cy={CY} r={INNER - 16} fill="#fff" />
          <circle className="gv-spin" cx={CX} cy={CY} r={INNER - 30} fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 8" strokeLinecap="round" />
          <circle cx={CX} cy={CY} r={INNER - 16} fill="none" stroke="#d7ebe3" strokeWidth="1.5" />

          <foreignObject x={CX - 118} y={CY - 52} width={236} height={104}>
            <div className="gv-hub">
              <span>Ruta de ejecución</span>
              <strong>21 semanas</strong>
              <em>Activar, diseñar, consolidar</em>
            </div>
          </foreignObject>

        </svg>
        <ExitMark
          id="valor-salida"
          on={exitOn}
          onSelect={selectExit}
          onPreview={previewExit}
          onRelease={releaseExit}
        />
      </div>

      <div className="gv-side">
      <div className="gv-now-wrap">
        <div
          ref={cardRef}
          className="gv-now is-on"
          style={{ '--gv-phase': exitOn ? '#0b7358' : phase.color } as CSSProperties}
          onPointerEnter={() => {
            clearHold();
            clearOutcomeHold();
          }}
          onPointerLeave={(event) => {
            scheduleRelease(event.pointerType);
            releaseOutcome(event.pointerType);
          }}
        >
          {leaving && (
            <div className={`gv-swap is-leave is-leave-${leaving.dir}`} aria-hidden="true">
              {leaving.exit ? (
                <ExitBody
                  shown={leaving.outcomeIndex}
                  active={leaving.outcomeIndex}
                  idPrefix="valor-leave"
                  quiet
                  onPreview={() => undefined}
                  onRelease={() => undefined}
                  onSelect={() => undefined}
                />
              ) : (
                <PhaseCard stage={stages[leaving.phaseIndex]} />
              )}
            </div>
          )}
          <div key={panelKey} className={`gv-swap is-${direction.current}`}>
            {exitOn ? (
              <ExitBody
                shown={outShown}
                active={outOn}
                idPrefix="valor-out"
                onPreview={previewOutcome}
                onRelease={releaseOutcome}
                onSelect={selectOutcome}
              />
            ) : (
              <PhaseCard stage={phase} />
            )}
          </div>
        </div>
        <p className="gv-live" aria-live="polite">
          {exitOn
            ? `${outcomes[outOn].title}. ${outcomes[outOn].purpose}`
            : `${stages[phaseOn].weeks}. ${stages[phaseOn].full}. ${stages[phaseOn].purpose}`}
        </p>
      </div>

      <div className="gv-mobile is-active">
        <div className="gv-rail-note"><span>Entrada</span>Semana 1 · Arranque</div>
        <ol className="gv-rail">
          {stages.map((stage, index) => {
            const on = view === 'phase' && phaseShown === index;
            return (
              <li key={stage.id}>
                <button
                  id={`valor-m-${stage.id}`}
                  type="button"
                  className={on ? 'is-on' : undefined}
                  aria-pressed={viewOn === 'phase' && phaseOn === index}
                  aria-expanded={on}
                  aria-controls={`valor-m-body-${stage.id}`}
                  aria-label={`${stage.weeks}. ${stage.full}. ${stage.purpose}`}
                  style={{ '--gv-phase': stage.color } as CSSProperties}
                  onClick={() => selectPhase(index)}
                  onKeyDown={(event) => {
                    if (event.key.startsWith('Arrow')) event.preventDefault();
                    move(index, event.key);
                  }}
                >
                  <span className="gv-rail-num">{stage.index}</span>
                  <span className="gv-rail-copy">
                    <b>{stage.full}</b>
                    <small>{stage.weeks}</small>
                  </span>
                </button>
                {on && (
                  <div
                    id={`valor-m-body-${stage.id}`}
                    className="gv-now is-on gv-rail-body"
                    style={{ '--gv-phase': stage.color } as CSSProperties}
                  >
                    <PhaseBody stage={stage} />
                  </div>
                )}
              </li>
            );
          })}
        </ol>
        <div className="gv-mobile-exit">
          <button
            id="valor-salida-m"
            type="button"
            className={exitOn ? 'is-on' : undefined}
            aria-pressed={exitOn}
            aria-expanded={exitOn}
            aria-controls="valor-m-exit-body"
            aria-label="Salida. Resultado GAOZ. Ver qué mediremos al cerrar la ruta."
            style={{ '--gv-phase': '#0b7358' } as CSSProperties}
            onClick={selectExit}
          >
            <span className="gv-rail-num">Salida</span>
            <span className="gv-rail-copy">
              <b>Resultado GAOZ</b>
              <small>Qué mediremos al cerrar</small>
            </span>
          </button>
          {exitOn && (
            <div
              id="valor-m-exit-body"
              className="gv-now is-on gv-rail-body"
              style={{ '--gv-phase': '#0b7358' } as CSSProperties}
            >
              <ExitBody
                shown={outShown}
                active={outOn}
                idPrefix="valor-om"
                onPreview={previewOutcome}
                onRelease={releaseOutcome}
                onSelect={selectOutcome}
              />
            </div>
          )}
        </div>
      </div>

      </div>
      </div>
    </section>
  );
}
