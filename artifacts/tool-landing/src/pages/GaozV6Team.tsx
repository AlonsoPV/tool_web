import { ArrowLeft, ArrowRight, Linkedin, MessageCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { founders } from '@/components/Founders';
import { generatedResults } from '@/data/generated-results';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';
import '@/styles/gaoz-value.css';

const people = [
  {
    ...founders[0],
    index: '01',
    front: 'Comercial',
    title: 'Socio responsable de la lectura comercial',
    owns: 'Dónde se vende, a quién y con qué oferta.',
    mandate: 'Que Dirección sepa dónde se pierde valor y qué hay que vender primero.',
    focus: [
      'Prioridades de venta, segmentos y propuesta de valor.',
      'Distinguir la relación del dueño del método que sí se puede copiar.',
      'Activar inventario, productos validados y cartera con siguiente acción.',
    ],
  },
  {
    ...founders[1],
    index: '02',
    front: 'Operativo',
    title: 'Socio responsable de proceso y adopción',
    owns: 'Cómo se opera, se mide y se sostiene sin depender de TOOL.',
    mandate: 'Que el método quede instalado en el equipo, no en una presentación.',
    focus: [
      'Proceso, políticas, CRM y tableros que el equipo sí use.',
      'Cadencia de decisión: reuniones, compromisos y evidencia.',
      'Adopción: que GAOZ pueda conducir la operación al cierre de la ruta.',
    ],
  },
];

const criteria = [
  { n: '01', label: 'Quién responde', copy: 'Uno lee el negocio y la venta. El otro instala proceso, dato y hábito. Nombres, no un equipo anónimo.' },
  { n: '02', label: 'Hasta cuándo', copy: 'Entran en la semana 1. Diagnosticar, diseñar e implementar es el mismo equipo. No entregan un PDF y desaparecen.' },
  { n: '03', label: 'Qué prueba hay', copy: 'Capital levantado, sistema comercial instalado, sucesión del dueño y cartera que deja de fugarse.' },
];

const proof = [
  { ...generatedResults[0], n: '01', headline: '$14 MDP', note: 'capital en 8 meses', why: 'Un sistema de adquisición que sí convierte en capital.' },
  { ...generatedResults[1], n: '02', headline: 'Sistema comercial', note: 'claridad, estructura y foco', why: 'Ventas con estructura, foco e incentivos alineados a la empresa.' },
  { ...generatedResults[2], n: '03', headline: 'Sucesión del CEO', note: 'a Dirección Comercial', why: 'La operación comercial deja de depender del dueño.' },
  { ...generatedResults[3], n: '04', headline: '0% churn', note: 'desde 30% en un año', why: 'La cartera existente se vuelve crecimiento, no fuga.' },
];

export default function GaozV6Team({
  basePath = '/gaoz-v6',
  brand = 'GAOZ',
  title = 'Equipo TOOL · Propuesta GAOZ',
  horizon = '21 semanas',
}: {
  basePath?: string;
  brand?: string;
  title?: string;
  horizon?: string;
} = {}) {
  const weekMark = horizon.replace(/semanas?/i, '').trim();
  return (
    <div className="gz gz-proposal gz-v6 gz-value-page gz-team-page">
      <PageMeta
        title={title}
        description={`Quién ejecuta la ruta de ${horizon}, de qué se hace cargo cada socio y qué resultados ya se produjeron en otras empresas.`}
      />
      <a className="gz-skip" href="#gaoz-equipo">Saltar al brief de equipo</a>
      <header className="gz-nav">
        <a href={basePath} className="gz-brand" aria-label={`Volver a la propuesta ${brand}`}>TOOL<span>{brand}</span></a>
        <a href={basePath} className="gz-nav-cta"><ArrowLeft size={16} /> Propuesta</a>
      </header>
      <main id="gaoz-equipo" className="gz-team-main">
        <section className="gz-brief-hero">
          <p className="gz-team-kicker">Brief para Dirección</p>
          <h1>El equipo que va a ejecutar. No el que entrega un PDF.</h1>
          <ul className="gz-brief-meta" aria-label="Alcance del engagement">
            <li>{horizon}</li>
            <li>Diagnóstico, diseño e implementación</li>
            <li>El mismo equipo de principio a fin</li>
          </ul>
          <ul className="gz-brief-criteria">
            {criteria.map((item) => (
              <li key={item.label}>
                <span>{item.n}</span>
                <strong>{item.label}</strong>
                <p>{item.copy}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="gz-brief-proof" aria-label="Resultados que ya se produjeron">
          <header>
            <p className="gz-team-kicker">Lo que Dirección suele pedir primero</p>
            <h2>Prueba, no promesa.</h2>
          </header>
          <ul>
            {proof.map((item) => (
              <li key={item.company}>
                <p>{item.company}</p>
                <strong>{item.headline}</strong>
                <span>{item.note}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="gz-brief-people" aria-labelledby="gz-brief-people-title">
          <header>
            <p className="gz-team-kicker">Quién se hace cargo</p>
            <h2 id="gz-brief-people-title">Dos responsables. Un mismo compromiso con el resultado.</h2>
          </header>
          <ol>
            {people.map((person) => (
              <li key={person.name}>
                <div className="gz-brief-id">
                  <figure>
                    <img src={person.photo} alt={person.name} />
                  </figure>
                  <div>
                    <p className="gz-cv-index">{person.index}<span> / 02</span><b>{person.front}</b></p>
                    <h3>{person.name}</h3>
                    <p className="gz-cv-title">{person.title}</p>
                    <div className="gz-team-links">
                      <a href={person.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${person.name}`}>
                        <Linkedin size={15} /> LinkedIn
                      </a>
                      <a href={person.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp de ${person.name}`}>
                        <MessageCircle size={15} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
                <p className="gz-brief-owns"><span>Se hace cargo de</span> {person.owns}</p>
                <p className="gz-brief-mandate">{person.mandate}</p>
                <ul className="gz-cv-focus">
                  {person.focus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
        <section className="gz-brief-cases" id="resultados" aria-labelledby="gz-team-results-title">
          <header>
            <p className="gz-team-kicker">Por qué eso importa aquí</p>
            <h2 id="gz-team-results-title">Casos de la misma clase de problema.</h2>
            <p>Estructura comercial, autonomía del dueño, capital y cartera. No son logos: son decisiones que ya se tomaron con un equipo real.</p>
          </header>
          <ol>
            {proof.map((item) => (
              <li key={item.company}>
                <div className="gz-case-top">
                  <p className="gz-case-industry">{item.industry}</p>
                  <span className="gz-case-index">{item.n}</span>
                </div>
                <h3>{item.company}</h3>
                <p className="gz-cv-work-metric">{item.headline}<em>{item.note}</em></p>
                <p className="gz-brief-why">{item.why}</p>
                <p className="gz-case-copy">{item.copy}</p>
              </li>
            ))}
          </ol>
        </section>
        <aside className="gz-team-together">
          <div>
            <p>El final que Dirección está comprando</p>
            <h2>El lunes después de la semana {weekMark}, la reunión comercial la conduce GAOZ.</h2>
            <p className="gz-brief-story">No hay un PDF en el escritorio. Hay prioridades de venta, un proceso que el equipo ya usa y cuatro ciclos corridos con evidencia. Abraham leyó el negocio. Alonso dejó el método. TOOL ya no tiene que estar en la sala.</p>
          </div>
          <div className="gz-brief-cta">
            <ol className="gz-brief-arc">
              <li><span>Hoy</span> La venta vive en la relación del dueño.</li>
              <li><span>{horizon}</span> Dos socios instalan lectura, proceso y hábito.</li>
              <li><span>Después</span> GAOZ decide con dato, no con memoria.</li>
            </ol>
            <a href={basePath} className="gz-brief-next">
              Seguir con la ruta
              <ArrowRight size={16} />
            </a>
          </div>
        </aside>
      </main>
      <footer className="gz-footer">
        <a className="gz-brand" href={basePath}>TOOL<span>{brand}</span></a>
        <span>Diseño y Ejecución de Ecosistema Comercial - {brand} · {horizon}</span>
        <div className="gz-value-actions">
          <a href={`${basePath}/equipo`} className="gz-econ-open is-current" aria-current="page">Equipo</a>
          <a href={`${basePath}/valor`} className="gz-econ-open">
            <span className="gz-back-full">Ruta de ejecución</span>
            <span className="gz-back-short">Diagrama</span>
          </a>
          <a href={basePath} className="gz-back-link">
            <ArrowLeft size={16} />
            <span className="gz-back-full">Volver a la propuesta</span>
            <span className="gz-back-short">Propuesta</span>
          </a>
        </div>
      </footer>
    </div>
  );
}
