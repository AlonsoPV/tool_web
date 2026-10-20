import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Linkedin, MessageCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { founders } from '@/components/Founders';
import { stories, StoryCard } from '@/components/landing/SuccessStories';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';
import '@/styles/gaoz-value.css';
import '@/styles/tool-redesign.css';

const people = [
  {
    ...founders[0],
    index: '01',
    front: 'Estrategia / Comercial',
    title: 'Socio responsable de la estrategia, cultura y modelo comercial',
    owns: 'Dónde se vende, a quién y con qué oferta.',
    education: 'Ingeniero Industrial. Egresado de UPIICSA.',
    experience: 'Implementación de sistemas de gestión de calidad, consultoría estratégica y comercial, gestión de proyectos, desarrollo de líneas de negocio y emprendedor.',
  },
  {
    ...founders[1],
    index: '02',
    front: 'Operación / Tecnología',
    title: 'Socio responsable de proceso y adopción',
    owns: 'Cómo se opera, se mide y se sostiene sin depender de TOOL.',
    education: 'Ingeniero en desarrollo sustentable. Egresado del ITESM CCM.',
    experience: 'Digitalización de pequeñas y medianas empresas, consultoría en implementación y diseño de procesos, y emprendedor.',
  },
];

function TeamStoriesCarousel() {
  const scroller = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);

  function slides() {
    return [...(scroller.current?.querySelectorAll<HTMLElement>('.gz-story-slide') ?? [])];
  }

  function slideOffset(slide: HTMLElement) {
    const origin = slides()[0];
    return origin ? slide.offsetLeft - origin.offsetLeft : slide.offsetLeft;
  }

  function syncSelected() {
    const node = scroller.current;
    if (!node) return;
    const left = node.scrollLeft;
    let best = 0;
    let bestDist = Number.POSITIVE_INFINITY;
    slides().forEach((slide, index) => {
      const dist = Math.abs(slideOffset(slide) - left);
      if (dist < bestDist) {
        bestDist = dist;
        best = index;
      }
    });
    setSelected(best);
  }

  function scrollTo(index: number) {
    const node = scroller.current;
    const slide = slides()[(index + stories.length) % stories.length];
    if (!node || !slide) return;
    node.scrollTo({ left: slideOffset(slide), behavior: 'smooth' });
  }

  return (
    <div className="gz-story-carousel">
      <div
        className="gz-story-viewport"
        ref={scroller}
        onScroll={syncSelected}
      >
        {stories.map((story, index) => (
          <div className="gz-story-slide" key={story.company}>
            <StoryCard story={story} index={index} />
          </div>
        ))}
      </div>
      <div className="gz-story-nav">
        <button type="button" onClick={() => scrollTo(selected - 1)} aria-label="Caso anterior">
          <ArrowLeft size={16} />
        </button>
        <div className="gz-story-dots" role="tablist" aria-label="Casos de éxito">
          {stories.map((story, index) => (
            <button
              key={story.company}
              type="button"
              role="tab"
              aria-label={`Ver caso ${story.company}`}
              aria-selected={index === selected}
              className={index === selected ? 'is-on' : undefined}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <button type="button" onClick={() => scrollTo(selected + 1)} aria-label="Caso siguiente">
          <ArrowRight size={16} />
        </button>
        <span className="gz-story-count">{String(selected + 1).padStart(2, '0')} / {String(stories.length).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

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
          <h1>El equipo que va a ejecutar. No el que entrega un PDF.</h1>
          <ul className="gz-brief-meta" aria-label="Alcance del engagement">
            <li>{horizon}</li>
            <li>Diagnóstico, diseño e implementación</li>
            <li>El mismo equipo de principio a fin</li>
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
                    <p className="gz-cv-index">{person.index}<b>{person.front}</b></p>
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
                <p className="gz-cv-edu">{person.education}</p>
                <p className="gz-cv-xp"><span>Experiencia en</span> {person.experience}</p>
              </li>
            ))}
          </ol>
        </section>
        <section className="gz-brief-cases" id="resultados" aria-labelledby="gz-team-results-title">
          <header>
            <h2 id="gz-team-results-title">Casos de éxito</h2>
            <p>Estructura comercial, autonomía del dueño, capital y cartera. No son logos: son decisiones que ya se tomaron con un equipo real.</p>
          </header>
          <TeamStoriesCarousel />
        </section>
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
