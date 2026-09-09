import { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';
import '@/styles/gaoz-diagnosis.css';

const source = 'https://app.notion.com/p/GAOZ-3c77f5fdb8aa80dca274e459e7ab5d8b';
const strengths = [['Experiencia técnica','Conocimiento del equipo médico y capacidad de capacitación.'],['Relación con clientes','La recompra y el seguimiento cercano ya son fortalezas.'],['Oferta multimarca','Equipos nuevos y reacondicionados para distintas necesidades.']];

const gaps = [
  { key: 'estrategia', title: 'Estrategia', pain: 'No hay una estrategia comercial definida.', copy: 'Sin elegir dónde jugar y cómo ganar, el equipo improvisa el esfuerzo y la venta se diluye entre productos, cuentas y urgencias.', score: 2, target: 8, tone: 'navy' },
  { key: 'sistema', title: 'Sistema comercial', pain: 'Hay actividad, pero no un sistema que dirija la venta.', copy: 'Datos, cartera y seguimiento viven en archivos y memoria; no empujan próximas acciones, fechas ni un ritmo semanal de ejecución.', score: 3, target: 8, tone: 'blue' },
  { key: 'gente', title: 'Gente', pain: 'No hay metas claras ni accountability.', copy: 'Sin objetivos por rol y sin responsables por resultado, la ejecución se diluye y nadie responde por el avance comercial.', score: 2, target: 8, tone: 'sky' },
  { key: 'northstar', title: 'North Star', pain: 'Falta una señal compartida de avance.', copy: 'Sin un indicador norte, el equipo no sabe qué progreso importa. El Sales Lab apunta a más ventas gestionadas por el equipo, sin intervención directa de los socios.', score: 2, target: 8, tone: 'peak' },
] as const;

const LEVELS = [
  { max: 3, label: 'Inicial' },
  { max: 5, label: 'Emergente' },
  { max: 7, label: 'En construcción' },
  { max: 10, label: 'Maduro' },
] as const;

const maturityDetails: Record<string, {evidence:string; ideal:string; action:string; tools:string}> = {
  estrategia: {evidence:'Tres tipos de cliente sin estrategia diferenciada; ocho líneas sin priorización clara. Tomografía y resonancia son apuestas por validar.',ideal:'Segmentos y cuentas elegidos, propuesta de valor diferenciada y prioridades respaldadas por margen, conversión y recompra.',action:'Comparar segmentos y probar diez cuentas de tomografía / RM antes de escalar.',tools:'Sitio por segmento y onepager por caso de uso: necesidad, solución, evidencia y siguiente paso.'},
  sistema: {evidence:'La recompra funciona, pero captación e inventario no tienen una operación sistemática. HubSpot está en implementación.',ideal:'Proceso de adquisición a recompra con responsable, criterios de avance, próxima acción y revisión semanal.',action:'Hacer visible el pipeline, activar el Top 20 y definir la salida de cinco equipos prioritarios.',tools:'Sitio para captar; onepager para explicar valor; comparativo para decidir; CRM para sostener el seguimiento.'},
  gente: {evidence:'La coordinación comercial no tiene autoridad completa y aproximadamente 60% de las ventas se concentra en el fundador.',ideal:'Gerencia con autoridad explícita, metas por rol y un equipo capaz de gestionar cuentas con autonomía.',action:'Acordar decisiones y responsables; transferir gradualmente cuentas, relaciones y conocimiento.',tools:'Scorecards por rol, guías de conversación y playbook de objeciones utilizados en la práctica semanal.'},
  northstar: {evidence:'El diagnóstico propone medir ventas sin intervención de socios; la línea base y la meta todavía están por definir.',ideal:'Un indicador norte con definición, responsable, línea base y revisión periódica que oriente decisiones.',action:'Definir qué cuenta como venta autónoma, revisar el histórico y acordar la meta.',tools:'Tablero de autonomía comercial: ventas sin socios, cuentas transferidas y oportunidades gestionadas de principio a fin.'},
};

function levelFor(score: number) {
  return LEVELS.find((level) => score <= level.max)?.label ?? 'Maduro';
}

function ClimbCharacter({
  x,
  y,
  pose = 'walk',
  accent = false,
  active = false,
}: {
  x: number;
  y: number;
  pose?: 'walk' | 'point' | 'climb' | 'flag' | 'cheer';
  accent?: boolean;
  active?: boolean;
}) {
  const fill = accent ? '#f15a29' : '#12263f';

  return (
    <g
      className={`gd-climber${active ? ' is-active' : ''}${accent ? ' is-accent' : ''}`}
      transform={`translate(${x} ${y})`}
      fill={fill}
      stroke="none"
    >
      {/* soft ground shadow */}
      <ellipse cx="0" cy="1.5" rx="9" ry="2.2" fill={fill} opacity="0.14" />

      {pose === 'walk' && (
        <g transform="translate(0 -1)">
          <circle cx="0" cy="-28" r="5" />
          <path d="M-3.2 -22.4 C-4.6 -20.8 -5.2 -17.6 -5.2 -14.2 L-5.4 -4.2 C-5.5 -2.2 -3.8 -.8 -1.8 -.8 H1.8 C3.8 -.8 5.5 -2.2 5.4 -4.2 L5.2 -14.2 C5.2 -17.6 4.6 -20.8 3.2 -22.4 C2.2 -23.4 .8 -24 0 -24 C-.8 -24 -2.2 -23.4 -3.2 -22.4 Z" />
          <path d="M-4.2 -16 L-11.5 -9.2 L-9.8 -7.8 L-3.2 -13.6 Z" />
          <path d="M4.2 -16.4 L11.8 -12.2 L10.4 -10.4 L3.4 -13.8 Z" />
          <path d="M-2.4 -.4 L-8.6 12.8 L-6.4 13.6 L-.4 1.4 Z" />
          <path d="M2.4 -.4 L8.2 12.2 L10.2 11.2 L4 1.2 Z" />
        </g>
      )}

      {pose === 'point' && (
        <g transform="translate(0 -1)">
          <circle cx="0" cy="-28" r="5" />
          <path d="M-3.2 -22.4 C-4.6 -20.8 -5.2 -17.6 -5.2 -14.2 L-5.4 -4.2 C-5.5 -2.2 -3.8 -.8 -1.8 -.8 H1.8 C3.8 -.8 5.5 -2.2 5.4 -4.2 L5.2 -14.2 C5.2 -17.6 4.6 -20.8 3.2 -22.4 C2.2 -23.4 .8 -24 0 -24 C-.8 -24 -2.2 -23.4 -3.2 -22.4 Z" />
          <path d="M-4 -16 L-10.8 -8.6 L-9 -7.4 L-3 -13.4 Z" />
          <path d="M3.6 -17.2 L14.8 -28.6 L16.4 -27.2 L5.4 -16.2 Z" />
          <circle cx="16.2" cy="-28.4" r="2" />
          <path d="M-2.2 -.4 L-7.6 13 L-5.4 13.8 L-.2 1.4 Z" />
          <path d="M2.2 -.4 L9 11.8 L10.8 10.8 L3.8 1.2 Z" />
        </g>
      )}

      {pose === 'climb' && (
        <g transform="translate(0 -1)">
          <circle cx="2" cy="-28.6" r="5" />
          <path d="M-1 -22.6 C-2.6 -20.8 -3.4 -17.4 -2.8 -14 L-1.4 -4 C-1.1 -2.1 .7 -.8 2.6 -1.1 C4.5 -1.4 5.9 -3.2 5.6 -5.1 L4 -14.6 C3.4 -18 2 -21 0.4 -22.6 C-.2 -23.2 -.6 -23.4 -1 -22.6 Z" />
          <path d="M-1.6 -16.2 L-12.4 -21.4 L-11.2 -23.2 L-.4 -18.2 Z" />
          <path d="M4.4 -16.8 L13.8 -24.6 L15.2 -23 L6.2 -15.6 Z" />
          <path d="M-.2 -1.2 L-11.4 7.2 L-9.8 9 L1.2 .8 Z" />
          <path d="M3.2 -1 L11.2 12.4 L13.2 11.2 L5.4 .6 Z" />
        </g>
      )}

      {pose === 'flag' && (
        <g transform="translate(0 -1)">
          <circle cx="0" cy="-28" r="5" />
          <path d="M-3.2 -22.4 C-4.6 -20.8 -5.2 -17.6 -5.2 -14.2 L-5.4 -4.2 C-5.5 -2.2 -3.8 -.8 -1.8 -.8 H1.8 C3.8 -.8 5.5 -2.2 5.4 -4.2 L5.2 -14.2 C5.2 -17.6 4.6 -20.8 3.2 -22.4 C2.2 -23.4 .8 -24 0 -24 C-.8 -24 -2.2 -23.4 -3.2 -22.4 Z" />
          <path d="M-4 -16 L-10.6 -9 L-8.9 -7.8 L-3 -13.4 Z" />
          <rect x="-1" y="-42" width="2.2" height="28" rx="1.1" />
          <path d="M1.2 -41.2 H16.5 L14.8 -36.2 L16.5 -31.2 H1.2 Z" />
          <path d="M-2.2 -.4 L-8 12.8 L-5.8 13.6 L-.2 1.4 Z" />
          <path d="M2.2 -.4 L8.4 12 L10.4 11 L3.8 1.2 Z" />
        </g>
      )}

      {pose === 'cheer' && (
        <g transform="translate(0 -1)">
          <circle cx="0" cy="-28" r="5" />
          <path d="M-3.2 -22.4 C-4.6 -20.8 -5.2 -17.6 -5.2 -14.2 L-5.4 -4.2 C-5.5 -2.2 -3.8 -.8 -1.8 -.8 H1.8 C3.8 -.8 5.5 -2.2 5.4 -4.2 L5.2 -14.2 C5.2 -17.6 4.6 -20.8 3.2 -22.4 C2.2 -23.4 .8 -24 0 -24 C-.8 -24 -2.2 -23.4 -3.2 -22.4 Z" />
          <path d="M-3.6 -17 L-13.4 -28.2 L-11.6 -29.4 L-2.2 -18.4 Z" />
          <path d="M3.6 -17 L13.4 -28.2 L11.6 -29.4 L2.2 -18.4 Z" />
          <circle cx="-13.8" cy="-29.2" r="2" />
          <circle cx="13.8" cy="-29.2" r="2" />
          <path d="M-2.4 -.4 L-7.2 13 L-5 13.8 L-.4 1.4 Z" />
          <path d="M2.4 -.4 L7.2 13 L9.4 13.8 L4 1.4 Z" />
        </g>
      )}
    </g>
  );
}

function MaturityClimb({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (key: string) => void;
}) {
  const reduceMotion = useReducedMotion();
  const average = Math.round((gaps.reduce((sum, gap) => sum + gap.score, 0) / gaps.length) * 10) / 10;
  const activeGap = gaps.find((gap) => gap.key === active) ?? gaps[0];

  // Continuous staircase geometry (matches the reference silhouette)
  const steps = [
    {
      gap: gaps[0],
      path: 'M64 318 H300 V248 H64 Z',
      num: { x: 88, y: 296 },
      figure: { x: 252, y: 248, pose: 'point' as const },
      hit: { x: 64, y: 248, w: 236, h: 70 },
    },
    {
      gap: gaps[1],
      path: 'M140 248 H340 V184 H140 Z',
      num: { x: 164, y: 228 },
      figure: { x: 300, y: 184, pose: 'climb' as const },
      hit: { x: 140, y: 184, w: 200, h: 64 },
    },
    {
      gap: gaps[2],
      path: 'M216 184 H380 V120 H216 Z',
      num: { x: 240, y: 164 },
      figure: { x: 348, y: 120, pose: 'flag' as const },
      hit: { x: 216, y: 120, w: 164, h: 64 },
    },
    {
      gap: gaps[3],
      path: 'M292 120 H420 L356 40 Z',
      num: { x: 314, y: 108 },
      figure: { x: 356, y: 40, pose: 'cheer' as const },
      hit: { x: 292, y: 40, w: 128, h: 80 },
    },
  ] as const;

  const fills = {
    navy: '#0b2248',
    blue: '#2f6fbf',
    sky: '#9ec4ea',
    peak: '#f15a29',
  } as const;

  return (
    <figure className="gd-climb" aria-label="Evaluación de madurez comercial de GAOZ">
      <figcaption>
        <span className="gd-label">EVALUACIÓN DE MADUREZ</span>
        <strong>De la improvisación al sistema</strong>
      </figcaption>

      <div className="gd-climb-board">
        <div className="gd-climb-copy" role="list">
          {[...gaps].reverse().map((gap, index) => {
            const step = String(gaps.length - index).padStart(2, '0');
            return (
              <button
                key={gap.key}
                type="button"
                role="listitem"
                className={`gd-climb-copy-item is-${gap.tone}${active === gap.key ? ' is-active' : ''}`}
                onClick={() => onSelect(gap.key)}
                onMouseEnter={() => onSelect(gap.key)}
                onFocus={() => onSelect(gap.key)}
              >
                <b>{step}</b>
                <span>
                  <strong>{gap.title}</strong>
                  <em>{gap.score}/10 · {levelFor(gap.score)}</em>
                  <small>{gap.pain}</small>
                </span>
              </button>
            );
          })}
        </div>

        <div className="gd-climb-stage">
          <svg viewBox="0 0 640 360" role="img" aria-label={`Madurez promedio ${average} de 10. Nivel actual: ${levelFor(average)}`}>
            <defs>
              <linearGradient id="gd-mtn-main" x1="18%" y1="8%" x2="88%" y2="100%">
                <stop offset="0%" stopColor="#1e4a86" />
                <stop offset="48%" stopColor="#12325f" />
                <stop offset="100%" stopColor="#0a1d3d" />
              </linearGradient>
              <linearGradient id="gd-mtn-facet" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3d6fad" />
                <stop offset="100%" stopColor="#163963" />
              </linearGradient>
              <linearGradient id="gd-mtn-back" x1="20%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eaf3fc" />
                <stop offset="55%" stopColor="#b7d2ef" />
                <stop offset="100%" stopColor="#7eabd8" />
              </linearGradient>
              <linearGradient id="gd-mtn-snow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#d7e8f8" />
              </linearGradient>
              <linearGradient id="gd-ground" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e8eef6" stopOpacity="0" />
                <stop offset="100%" stopColor="#d5e0ec" stopOpacity="0.55" />
              </linearGradient>
              <filter id="gd-step-glow" x="-30%" y="-40%" width="160%" height="180%">
                <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#0a1d3d" floodOpacity="0.18" />
              </filter>
            </defs>

            {/* Atmosphere */}
            <rect x="0" y="0" width="640" height="360" fill="url(#gd-ground)" />
            <ellipse cx="520" cy="86" rx="90" ry="34" fill="#fff" opacity="0.45" />
            <ellipse cx="580" cy="70" rx="48" ry="18" fill="#fff" opacity="0.3" />

            <motion.g
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              {/* Soft background peaks */}
              <polygon points="470,318 545,158 620,318" fill="url(#gd-mtn-back)" opacity="0.55" />
              <polygon points="530,318 595,118 640,210 640,318" fill="url(#gd-mtn-snow)" opacity="0.92" />
              <polygon points="575,318 628,155 640,205 640,318" fill="#bfd4eb" opacity="0.65" />

              {/* Main mountain — shares the stepped silhouette */}
              <path
                d="M300 318
                   V248 H340 V184 H380 V120 H420
                   L508 36 L640 318 Z"
                fill="url(#gd-mtn-main)"
              />
              <path d="M508 36 L572 170 L456 196 Z" fill="url(#gd-mtn-facet)" opacity="0.9" />
              <path d="M508 36 L456 196 L420 120 Z" fill="#081830" opacity="0.28" />
              <path d="M456 196 L572 170 L640 318 L420 318 Z" fill="#061427" opacity="0.2" />
              <path d="M508 36 L534 78 L492 90 Z" fill="#fff" opacity="0.2" />
            </motion.g>

            {/* Ground base under stairs */}
            <path d="M40 318 H420 V332 H40 Z" fill="#d5e0ec" />
            <path d="M40 318 H640" stroke="#c5d3e2" strokeWidth="1" />

            {steps.map(({ gap, path, num, hit }, index) => {
              const isActive = active === gap.key;
              return (
                <motion.g
                  key={gap.key}
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.07, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  style={{ cursor: 'pointer' }}
                  onClick={() => onSelect(gap.key)}
                  onMouseEnter={() => onSelect(gap.key)}
                >
                  <rect x={hit.x} y={hit.y} width={hit.w} height={hit.h} fill="transparent" />
                  <path
                    d={path}
                    fill={fills[gap.tone]}
                    filter={isActive ? 'url(#gd-step-glow)' : undefined}
                    className={`gd-climb-step${isActive ? ' is-active' : ''}`}
                  />
                  {/* subtle top edge highlight */}
                  {gap.tone !== 'peak' && (
                    <path
                      d={`M${hit.x} ${hit.y} H${hit.x + hit.w}`}
                      stroke="rgba(255,255,255,0.22)"
                      strokeWidth="2"
                    />
                  )}
                  <text
                    x={num.x}
                    y={num.y}
                    className={`gd-climb-num${gap.tone === 'sky' ? ' is-dark' : ''}`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </text>
                </motion.g>
              );
            })}

            {/* Target badge on mountain face */}
            <motion.g
              initial={reduceMotion ? false : { opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.48, duration: 0.4 }}
              style={{ transformOrigin: '542px 188px' }}
            >
              <circle cx="542" cy="188" r="38" fill="rgba(8,24,48,0.25)" />
              <circle cx="542" cy="188" r="32" fill="#fff" />
              <circle cx="542" cy="188" r="22" fill="none" stroke="#f15a29" strokeWidth="3.5" />
              <circle cx="542" cy="188" r="12" fill="none" stroke="#f15a29" strokeWidth="3" />
              <circle cx="542" cy="188" r="4" fill="#f15a29" />
              <g stroke="#12263f" strokeWidth="2" strokeLinecap="round">
                <path d="M522 168 L530 176" />
                <path d="M562 168 L554 176" />
                <path d="M542 152 L542 164" />
              </g>
              <text x="542" y="242" textAnchor="middle" className="gd-climb-target-label">OBJETIVO</text>
              <text x="542" y="258" textAnchor="middle" className="gd-climb-target-sub">Sales Lab</text>
            </motion.g>

            <ClimbCharacter x={48} y={318} pose="walk" />
            {steps.map(({ gap, figure }) => (
              <motion.g
                key={`fig-${gap.key}`}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{
                  opacity: active === gap.key ? 1 : 0.38,
                  y: active === gap.key ? -4 : 0,
                  scale: active === gap.key ? 1.06 : 1,
                }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${figure.x}px ${figure.y}px` }}
              >
                <ClimbCharacter
                  x={figure.x}
                  y={figure.y}
                  pose={figure.pose}
                  accent={active === gap.key && gap.tone === 'peak'}
                  active={active === gap.key}
                />
              </motion.g>
            ))}
          </svg>

          <div className="gd-climb-score">
            <span>Promedio actual</span>
            <strong>{average}<small>/10</small></strong>
            <em>{levelFor(average)}</em>
          </div>
        </div>
      </div>

      <div className="gd-climb-active" aria-live="polite">
        <span className="gd-label">{activeGap.title.toUpperCase()} · ACTUAL {activeGap.score}/10 · OBJETIVO PROPUESTO {activeGap.target}/10</span>
        <h3>{activeGap.pain}</h3>
        <p>{activeGap.copy}</p>
        <div className="gd-gap-bar" aria-hidden="true">
          <span style={{ width: `${activeGap.score * 10}%` }} />
          <i style={{ left: `${activeGap.target * 10}%` }} />
        </div>
        <div className="gd-maturity-evidence">
          <div><strong>Evidencia del diagnóstico</strong><p>{maturityDetails[activeGap.key].evidence}</p></div>
          <div><strong>Cómo se ve el ideal</strong><p>{maturityDetails[activeGap.key].ideal}</p></div>
          <div><strong>Primera acción</strong><p>{maturityDetails[activeGap.key].action}</p></div>
          <div><strong>Herramientas en la operación</strong><p>{maturityDetails[activeGap.key].tools}</p></div>
        </div>
        <small>Valoración consultiva inicial, por validar con el equipo. El objetivo 8/10 no representa un resultado garantizado del Sales Lab.</small>
      </div>
    </figure>
  );
}

export default function GaozDiagnosis() {
  const [activeGap, setActiveGap] = useState<string>(gaps[0].key);

  return (
    <div className="gd">
      <PageMeta title="Diagnóstico comercial GAOZ | TOOL" description="Síntesis del diagnóstico comercial de GAOZ: situación actual y oportunidades para construir un sistema de ventas medible." />
      <a className="gd-skip" href="#diagnostico">Saltar al diagnóstico</a>
      <header className="gd-header">
        <a className="gd-logo" href="/">TOOL</a>
        <a href="/gaoz/"><ArrowLeft size={16} /> Volver al Sales Lab</a>
      </header>
      <main id="diagnostico">
        <section className="gd-intro">
          <span className="gd-label">GAOZ / DIAGNÓSTICO COMERCIAL 2026</span>
          <h1>La experiencia está.<br /><span>Falta conectar el sistema.</span></h1>
        </section>
        <nav className="gd-route" aria-label="Ruta del diagnóstico">
          <a href="#situacion"><b>01</b> Qué vemos <ArrowRight size={16} /></a>
          <a href="#base"><b>02</b> Qué ya funciona <ArrowRight size={16} /></a>
          <a href="/gaoz/#programa"><b>03</b> Cómo empezar <ArrowRight size={16} /></a>
        </nav>

        <section className="gd-section" id="situacion">
          <div className="gd-heading">
            <span className="gd-label">01 / SITUACIÓN ACTUAL</span>
            <h2>Una operación que aún<br />depende de personas clave.</h2>
          </div>

          <div className="gd-maturity">
            <MaturityClimb active={activeGap} onSelect={setActiveGap} />
          </div>

          <div className="gd-current">
            <figure className="gd-concentration">
              <figcaption>Concentración de ventas reportada</figcaption>
              <div className="gd-big">≈60%<span>concentrado en el fundador</span></div>
              <div className="gd-stack" role="img" aria-label="Aproximadamente 60 por ciento de las ventas concentradas en el fundador; 40 por ciento restante"><span /><span /></div>
              <div className="gd-legend"><span>Fundador · ≈60%</span><span>Resto · ≈40%</span></div>
              <p>El reto es transferir relaciones, conocimiento y responsabilidad de forma gradual.</p>
              <small>Estimación del diagnóstico, no una medición auditada.</small>
            </figure>
            <div className="gd-maturity-note">
              <span className="gd-label">LECTURA DEL DIAGRAMA</span>
              <h3>Están en la base de la montaña.</h3>
              <p>Los cuatro escalones muestran Estrategia, Sistema comercial, Gente y North Star. Las valoraciones iniciales son 2, 3, 2 y 2 sobre 10. Selecciona un pilar para ver la evidencia, el ideal y las acciones necesarias para avanzar. La meta propuesta es 8/10; su plazo se valida con el equipo.</p>
            </div>
          </div>
        </section>

        <section className="gd-section" id="base">
          <div className="gd-heading">
            <span className="gd-label">LO QUE YA FUNCIONA</span>
            <h2>La base para crecer ya existe.</h2>
          </div>
          <div className="gd-strengths">
            {strengths.map(([title, copy]) => (
              <article key={title}><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
          <div className="gd-hypothesis">
            <span className="gd-label">OPORTUNIDAD COMERCIAL</span>
            <h3>Hacer del servicio una fuente de nuevas ventas.</h3>
            <p>Cada visita técnica puede detectar reemplazos, equipos complementarios, expansión o referidos. El paso pendiente es registrar esas señales y asignarles seguimiento.</p>
          </div>
        </section>

        <section className="gd-north">
          <span className="gd-label">LA SEÑAL DE AVANCE</span>
          <h2>Más ventas gestionadas por el equipo,<br />sin intervención directa de los socios.</h2>
          <p>Indicador recomendado. La línea base y la meta están por definir.</p>
          <div className="gd-cadence">
            <span>Lunes · prioridades</span>
            <ArrowRight size={18} />
            <span>Semana · ejecución</span>
            <ArrowRight size={18} />
            <span>Viernes · resultados</span>
          </div>
        </section>

        <section className="gd-next">
          <div>
            <span className="gd-label">DEL DIAGNÓSTICO A LA ACCIÓN</span>
            <h2>Esta es la base del Sales Lab.</h2>
            <p>5 semanas para construir y empezar a usar el sistema comercial de GAOZ.</p>
          </div>
          <a className="gd-button" href="/gaoz/#programa">Ver el plan de trabajo <ArrowUpRight size={18} /></a>
        </section>
      </main>
      <footer className="gd-footer">
        <span>TOOL · GAOZ</span>
        <a href={source} target="_blank" rel="noopener noreferrer">Consultar diagnóstico en Notion ↗</a>
      </footer>
    </div>
  );
}
