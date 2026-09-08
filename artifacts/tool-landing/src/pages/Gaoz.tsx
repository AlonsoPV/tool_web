import { ArrowUpRight, ArrowRight, Check, MoveDown } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { DEMO_URL } from '@/lib/landing-theme';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import { stories } from '@/components/landing/SuccessStories';

const contact = `${DEMO_URL}?text=${encodeURIComponent('Hola, quiero conversar sobre TOOL Sales Lab para GAOZ y definir el arranque del programa de 5 semanas.')}`;
const weeks = [
  { n:'01', title:'Commercial X-Ray', sub:'Encontrar el foco.', sessions:[
    {label:'SESIÓN 1 · DIAGNÓSTICO', title:'¿Dónde perdemos oportunidades? ¿Dónde podemos crecer?', copy:'Leemos juntos la operación para identificar cuellos de botella, fugas, dependencias y palancas de crecimiento.', result:'Mapa ejecutivo de oportunidades y prioridades comerciales.'},
    {label:'SESIÓN 2 · SEGMENTACIÓN Y FOCO', title:'La mejor oportunidad puede estar en la cartera actual.', copy:'Segmentamos por recurrencia, potencial, ticket y línea comprada. Activamos upsell, cross-sell, resell y reactivación; ponemos a prueba el potencial de tomografía y resonancia.', result:'Mapa de cartera, Top 20 con plan de acción y 5 equipos prioritarios con estrategia de salida.'}]},
  { n:'02', title:'Arquitectura del equipo', sub:'Dar claridad para actuar.', sessions:[
    {label:'SESIONES 3 Y 4 · ESTRUCTURA COMERCIAL', title:'Quién dirige. Quién vende. Quién decide.', copy:'Definimos la función del gerente comercial, responsabilidades de vendedores, ownership de cartera, reglas de decisión e interacción con Dirección. Cada compromiso tendrá un responsable.', result:'Estructura comercial v1 y scorecards por rol.'}]},
  { n:'03', title:'Construir el método', sub:'Hacer repetible lo que funciona.', sessions:[
    {label:'SESIÓN 5 · MÉTODO COMERCIAL GAOZ', title:'Una forma común de vender.', copy:'De cada vendedor con su propio método a un proceso compartido, con criterios claros para avanzar.', flow:'Lead → Calificación → Diagnóstico → Solución → Propuesta → Negociación → Cierre', result:'Sales Process GAOZ v1.'},
    {label:'SESIÓN 6 · METAS, PIPELINE Y RITMO', title:'Una meta que se traduce en acciones.', copy:'Construimos KPIs, forecast, Top Deals, Weekly Comercial y compromisos. La gestión empieza por saber qué mover cada semana.', flow:'Venta anual → Venta mensual → Pipeline necesario → Oportunidades → Actividad comercial', result:'Commercial Scorecard + ritmo de operación.'}]},
  { n:'04', title:'Vender mejor', sub:'Llevar el sistema a la conversación.', sessions:[
    {label:'SESIÓN 7 · MINDSET & CULTURA', title:'El sistema funciona cuando cambian los comportamientos.', copy:'Trabajamos la mentalidad que sostiene los resultados: aprendizaje, accountability y ejecución consistente. Identificamos qué comportamientos necesita GAOZ y cuáles frenan al equipo.', result:'Comportamientos comerciales que sostienen el nuevo sistema.'},
    {label:'SESIÓN 8 · DEAL LAB', title:'Negocios reales. Conversaciones decisivas.', copy:'Simulaciones y clínicas sobre precio, competencia, descuento, múltiples decisores, comparación de equipos, urgencia, financiamiento y seguimiento.', result:'Playbook de objeciones + plan para oportunidades críticas.'}]},
  { n:'05', title:'Instalar y escalar', sub:'Dejar listo el siguiente ciclo.', sessions:[
    {label:'SESIÓN 9 · CRM & CONTROL ROOM', title:'Un solo lugar para la verdad comercial.', copy:'Con el proceso definido, estructuramos etapas, campos, actividades, responsables, alertas, forecast y dashboards en el diseño del CRM.', result:'CRM Blueprint + sistema de seguimiento.'},
    {label:'SESIÓN 10 · ESTRATEGIA COMERCIAL', title:'Un norte claro para los próximos 60 días.', copy:'Alineamos visión, metas y objetivos del negocio con el mercado donde competir y el cliente ideal. Revisamos qué funcionó, qué corregir y cómo avanzar.', result:'Roadmap de estrategia comercial a 60 días.'}]},
];
const pillars = [['Estrategia','Dónde jugar y enfocar recursos.'],['Estructura','Quién es responsable de qué.'],['Método','Cómo se vende.'],['Gestión','Cómo se mide y dirige.'],['Herramientas','Con qué vende el equipo.'],['Ritmo','Cómo se mejora cada semana.']];
const businessValue = [
  ['01','Enfoca las oportunidades.','Top 20 + segmentación de cartera','A quién vender, qué ofrecer y cuál es el siguiente paso.','Priorizar oportunidades por potencial y probabilidad.'],
  ['02','Activa el inventario.','Estrategia para 5 equipos prioritarios','Una estrategia de salida para cinco equipos prioritarios.','Pasar de esperar demanda a trabajar oportunidades específicas.'],
  ['03','Negocia con argumentos.','Deal Lab + playbook de objeciones','Practica objeciones y negociación con tus negocios abiertos.','Preparar la negociación y cuidar el margen.'],
  ['04','Dirige con visibilidad.','Roles + scorecard + Weekly Comercial','Responsables claros, metas y una revisión comercial semanal.','Intervenir donde hace falta y dar autonomía al equipo.'],
];
function CTA({children='Conversemos sobre el arranque'}:{children?:React.ReactNode}) { return <a className="gz-button" href={contact} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={19}/></a>; }
function ProofAndInvestment(){
  const caseStories = stories.filter((s) => ['ZAIAH', 'INBest', 'Collecta', 'DermaMX', 'Kyrie México'].includes(s.company));
  return <>
  <section className="gz-section gz-cases" id="casos">
    <div className="gz-section-head">
      <div>
        <div className="gz-eyebrow">EXPERIENCIA DE TOOL</div>
        <h2>Retos distintos.<br/><span>Intervenciones concretas.</span></h2>
      </div>
      <p>Adquisición, liderazgo, retención y expansión: experiencia aplicada a cada negocio.</p>
    </div>
    <div className="gz-evidence-grid" aria-label="Casos de intervención de TOOL">
      {caseStories.map((s, index) => {
        const Icon = s.icon;
        return (
          <article className="gz-case-card" data-tone={s.tone} key={s.company}>
            <div className="gz-case-top">
              <div className="gz-case-company">
                <span aria-hidden="true"><Icon size={16} /></span>
                <div>
                  <strong>{s.company}</strong>
                  <small>{s.industry}</small>
                </div>
              </div>
              <span className="gz-case-index">0{index + 1}</span>
            </div>
            <div className="gz-case-metric">
              <strong>{s.metric}</strong>
              <span>{s.metricLabel}</span>
            </div>
            <h3>{s.headline}</h3>
            <div className="gz-case-panels">
              <div className="gz-case-detail">
                <strong>Qué hicimos</strong>
                <p>{s.actions}</p>
              </div>
              <div className="gz-case-detail">
                <strong>Valor aportado</strong>
                <p>{s.value}</p>
              </div>
            </div>
            <footer>{s.focus}</footer>
          </article>
        );
      })}
    </div>
    <p className="gz-evidence-note">Cada proyecto tiene su propio alcance, plazo y resultados.</p>
  </section>
  <section className="gz-section gz-investment" id="inversion"><div><div className="gz-eyebrow">INVERSIÓN Y ALCANCE</div><h2>Empieza con foco.<br/><span>Quédate con un sistema.</span></h2><p>10 sesiones con tu equipo para activar oportunidades y construir una forma común de vender.</p><div className="gz-investment-outcomes"><div><strong>Desde la primera semana</strong><p>Top 20 oportunidades y estrategia de salida para 5 equipos.</p></div><div><strong>Al terminar</strong><p>Método, responsables, seguimiento y un plan para los siguientes 60 días.</p></div></div></div><div className="gz-investment-card"><span className="gz-eyebrow">TOOL SALES LAB · GAOZ</span><div className="gz-price"><strong className="gz-price-amount">$60,000</strong><p className="gz-price-terms">MXN + IVA · pago único</p></div><h3>5 semanas · 10 sesiones</h3><p>Trabajo enfocado en quick wins, con un alcance definido desde el inicio.</p><ul><li><strong>Foco:</strong> diagnóstico, cartera y Top 20.</li><li><strong>Ejecución:</strong> roles, proceso y scorecard comercial.</li><li><strong>Negociación:</strong> Deal Lab y playbook de objeciones.</li><li><strong>Continuidad:</strong> CRM Blueprint y roadmap de 60 días.</li></ul><CTA>Definamos la fecha de arranque</CTA><p className="gz-investment-note">Trabajamos con los clientes, oportunidades e inventario de GAOZ. El acompañamiento posterior se acuerda por separado.</p></div></section>
  <section className="gz-section gz-faq"><div className="gz-eyebrow">ANTES DE EMPEZAR</div><h2>Antes de empezar.</h2><div className="gz-evidence-grid"><article><h3>¿Qué necesita aportar GAOZ?</h3><p>Participación del equipo y datos de cartera, oportunidades e inventario.</p></article><article><h3>¿Qué contempla el CRM?</h3><p>El diseño de etapas, campos y seguimiento. Licencias e integraciones adicionales se precisan en la propuesta.</p></article><article><h3>¿Qué pasa al terminar?</h3><p>Te quedas con el sistema v1 y un plan de 60 días. El acompañamiento posterior se acuerda por separado.</p></article></div></section>
 </>}

export default function Gaoz(){return <div className="gz">
  <PageMeta title="TOOL Sales Lab · GAOZ | Sistema comercial en 5 semanas" description="Convierte 27 años de experiencia de GAOZ en un sistema comercial enfocado, medible y repetible. 5 semanas, 10 sesiones y oportunidades reales desde el inicio."/>
  <a className="gz-skip" href="#gaoz-main">Saltar al contenido</a>
  <header className="gz-nav"><a href="/" className="gz-brand" aria-label="Ir a la web principal de TOOL">TOOL<span>SALES LAB</span></a><nav aria-label="Navegación del programa"><a href="#programa">Programa</a><a href="#casos">Casos</a><a href="#inversion">Inversión</a></nav><a href={contact} target="_blank" rel="noopener noreferrer" className="gz-nav-cta">Hablemos <ArrowUpRight size={16}/></a></header>
  <main id="gaoz-main">
    <section className="gz-hero"><div className="gz-hero-copy"><div className="gz-eyebrow"><span className="gz-dot"/> TOOL SALES LAB · DISEÑADO PARA GAOZ</div><h1>En 5 semanas,<br/><span>convierte la experiencia<br/>en un sistema de ventas.</span></h1><p><strong>GAOZ ya sabe vender.</strong> Ahora toca convertir 27 años de experiencia en un método que todo el equipo pueda repetir.</p><p>Priorizamos oportunidades, activamos inventario y ponemos el seguimiento en marcha con tus negocios reales.</p><div className="gz-actions"><CTA>Construyamos el sistema</CTA><a className="gz-text-link" href="#programa">Ver el programa <MoveDown size={16}/></a></div><div className="gz-hero-note">5 semanas <span> / </span> 10 sesiones <span> / </span> Tu operación real</div></div>
    <div className="gz-system-visual" aria-label="Del conocimiento de GAOZ a un sistema comercial: foco, equipo, método, ejecución y control"><div className="gz-visual-head"><span>GAOZ / COMMERCIAL OS</span><span>VERSIÓN 1.0</span></div><div className="gz-visual-title">La experiencia<br/>se vuelve <em>sistema.</em></div><div className="gz-system-steps">{['Foco comercial','Equipo alineado','Método compartido','Mejor ejecución','Control y dirección'].map((s,i)=><div key={s}><span>0{i+1}</span><strong>{s}</strong><ArrowUpRight size={17}/></div>)}</div><div className="gz-visual-foot"><span className="gz-dot"/> ACTIVACIÓN DESDE LA SEMANA 01</div></div></section>
    <div className="gz-proof"><span>EL PUNTO DE PARTIDA ES GAOZ</span><strong>Clientes reales</strong><span>+</span><strong>Oportunidades reales</strong><span>+</span><strong>Inventario y datos reales</strong></div>
    <section className="gz-value gz-section" id="valor"><div className="gz-section-head"><div><div className="gz-eyebrow">EL VALOR PARA EL NEGOCIO</div><h2>Enfoca al equipo.<br/><span>Haz avanzar las ventas.</span></h2></div><p>Cuatro cambios concretos para tu operación.</p></div><div className="gz-value-grid">{businessValue.map(([n,title,deliverable,copy])=><article key={n}><span className="gz-value-index">{n} / CAPACIDAD COMERCIAL</span><h3>{title}</h3><p>{copy}</p><div className="gz-value-deliverable"><span>LO CONSTRUIMOS CON</span><strong>{deliverable}</strong></div></article>)}</div></section>
    <section className="gz-wins"><div className="gz-section-head"><div><div className="gz-eyebrow">EL SISTEMA EMPIEZA TRABAJANDO</div><h2>Desde la semana uno,<br/>manos a la obra.</h2></div><p>Diagnóstico, oportunidades e inventario.</p></div><div className="gz-win-grid">{[['01','Ver con claridad','Identificar los cuellos de botella y los potenciadores de crecimiento.','Diagnóstico accionable'],['02','Concentrar el esfuerzo','Priorizar las 20 oportunidades con mayor probabilidad y valor.','Top 20 + plan de acción'],['03','Mover el inventario','Definir campañas específicas para 5 equipos prioritarios.','Estrategia de salida']].map(([n,t,c,r])=><article key={n}><span className="gz-win-num">{n}<ArrowUpRight/></span><h3>{t}</h3><p>{c}</p><div><Check size={16}/>{r}</div></article>)}</div></section>
    <section className="gz-section gz-program" id="programa"><div className="gz-section-head"><div><div className="gz-eyebrow">02 / LA RUTA DE TRABAJO</div><h2>Una ruta clara.<br/><span>Un resultado cada semana.</span></h2></div><p>10 sesiones sobre la operación real de GAOZ.</p></div><div className="gz-week-nav" aria-label="Ir a una semana">{weeks.map(w=><a key={w.n} href={'#semana-'+w.n}><span>{w.n}</span>{w.title}<ArrowRight size={15}/></a>)}</div>{weeks.map(w=><article className="gz-week" id={'semana-'+w.n} key={w.n}><div className="gz-week-title"><span className="gz-week-number">{w.n}</span><div className="gz-eyebrow">SEMANA {w.n}</div><h3>{w.title}</h3><p>{w.sub}</p></div><div className="gz-sessions">{w.sessions.map(s=><section className="gz-session" key={s.label}><div className="gz-eyebrow">{s.label}</div><h4>{s.title}</h4>{'flow' in s && <div className="gz-flow">{s.flow}</div>}<div className="gz-result"><Check size={17}/><p><strong>Resultado</strong>{s.result}</p></div></section>)}</div></article>)}</section>
    <section className="gz-delivery" id="sistema"><div className="gz-delivery-intro"><div className="gz-eyebrow">03 / LO QUE SE QUEDA EN GAOZ</div><h2>Terminas con<br/>un sistema<br/><span>en marcha.</span></h2><p>Un método propio para vender, medir y mejorar cada semana.</p><div className="gz-os-label"><span className="gz-dot"/> GAOZ COMMERCIAL OPERATING SYSTEM v1</div></div><div className="gz-pillars">{pillars.map(([t,c],i)=><div key={t}><span>0{i+1}</span><div><h3>{t}</h3><p>{c}</p></div><ArrowUpRight size={21}/></div>)}</div></section>
    <ProofAndInvestment />
    <section className="gz-final" id="arranque"><div className="gz-eyebrow">EL SIGUIENTE CAPÍTULO DE GAOZ</div><h2>La experiencia ya está.<br/><span>Construyamos el siguiente paso.</span></h2><p>Alineemos prioridades, equipo y fecha de arranque.</p><CTA>Hablemos del arranque</CTA><div className="gz-final-note">Conversación directa con TOOL por WhatsApp</div></section>
  </main><footer className="gz-footer"><a className="gz-brand" href="/">TOOL<span>SALES LAB</span></a><span>Una propuesta para GAOZ · Versión cliente 01</span><a href="#programa">Volver al programa ↑</a></footer>
 </div>}

