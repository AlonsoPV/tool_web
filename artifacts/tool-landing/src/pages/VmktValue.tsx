import { useRef } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import GaozValueDiagram from '@/components/GaozValueDiagram';
import { vmktDiagramLead, vmktDiagramTitle, vmktOutcomes, vmktStages } from '@/data/vmkt';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';
import '@/styles/gaoz-value.css';

const excluded = [
  'Horario de atención fuera de lo estipulado',
  'Atención presencial, por definir',
  'Visitas foráneas',
  'Trabajo manual en el CRM',
];

const terms = [
  { label: 'Moneda e impuesto', copy: 'Pesos mexicanos. Honorarios de $40,000.00 mensuales; el IVA se factura aparte.' },
  { label: 'Forma de pago', copy: 'Pago mensual a mes vencido, al cierre de cada mes de servicio. Sin anticipo ni división del pago en parcialidades.' },
  { label: 'Alcance', copy: 'Comercial y Marketing, en coordinación con Administración y áreas técnicas para vender, entregar y cobrar. Incluye ofertas de mantenimiento, renovación y referidos con Servicio.' },
  { label: 'Fuera de este acuerdo', copy: 'La operación interna integral de Servicio, una reestructura societaria o el desarrollo completo de una unidad veterinaria.' },
  { label: 'Resultados', copy: 'Ventas y recuperación se miden contra la línea base. No hay garantía de resultados.' },
  { label: 'Continuidad', copy: 'El trabajo usa clientes, campañas, oportunidades e inventario de GAOZ. El acompañamiento posterior se acuerda por separado.' },
];

export default function VmktValue() {
  const economics = useRef<HTMLDialogElement>(null);
  const excludedFold = useRef<HTMLDetailsElement>(null);

  return (
    <div className="gz gz-proposal gz-v6 gz-value-page">
      <PageMeta
        title="V-MKT · Ruta de ejecución"
        description="Tres fases en 21 semanas: diagnosticar y activar campañas, diseñar el flujo Marketing → Ventas e implementar hasta la autonomía."
      />
      <a className="gz-skip" href="#gaoz-valor">Saltar al diagrama</a>
      <header className="gz-nav">
        <a href="/v-mkt" className="gz-brand" aria-label="Volver a la propuesta V-MKT">TOOL<span>V-MKT</span></a>
        <a href="/v-mkt" className="gz-nav-cta"><ArrowLeft size={16} /> Propuesta</a>
      </header>
      <main id="gaoz-valor">
        <GaozValueDiagram
          title={vmktDiagramTitle}
          lead={vmktDiagramLead}
          stages={vmktStages}
          outcomes={vmktOutcomes}
        />
      </main>
      <footer className="gz-footer">
        <a className="gz-brand" href="/v-mkt">TOOL<span>V-MKT</span></a>
        <span>Propuesta V-MKT para GAOZ · 21 semanas</span>
        <div className="gz-value-actions">
          <a href="/v-mkt/equipo" className="gz-econ-open">Equipo</a>
          <button
            type="button"
            className="gz-econ-open"
            onClick={() => {
              window.setTimeout(() => {
                if (excludedFold.current) excludedFold.current.open = false;
                economics.current?.showModal();
              }, 0);
            }}
          >
            <span className="gz-back-full">Detalle económico</span>
            <span className="gz-back-short">Inversión</span>
          </button>
          <a href="/v-mkt" className="gz-back-link">
            <ArrowLeft size={16} />
            <span className="gz-back-full">Volver a la propuesta</span>
            <span className="gz-back-short">Propuesta</span>
          </a>
        </div>
      </footer>
      <dialog
        ref={economics}
        className="gz-econ"
        aria-labelledby="gz-econ-title"
        onClick={(event) => {
          if (event.target === economics.current) economics.current?.close();
        }}
      >
        <div className="gz-econ-head">
          <div>
            <p>Propuesta V-MKT para GAOZ</p>
            <h2 id="gz-econ-title">Inversión y condiciones</h2>
          </div>
          <button type="button" onClick={() => economics.current?.close()} aria-label="Cerrar detalle económico">
            <X size={18} />
          </button>
        </div>
        <div className="gz-econ-hero">
          <p className="gz-econ-amount">$40,000.00 <span>+ IVA</span></p>
        </div>
        <table>
          <caption>Pago mensual a mes vencido</caption>
          <thead>
            <tr>
              <th scope="col">Periodicidad</th>
              <th scope="col">Vencimiento</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Mensual</th>
              <td>Al cierre de cada mes de servicio</td>
              <td>$40,000.00 + IVA</td>
            </tr>
          </tbody>
        </table>
        <section className="gz-econ-terms" aria-labelledby="gz-econ-terms-title">
          <h3 id="gz-econ-terms-title">Condiciones comerciales</h3>
          <dl>
            {terms.map((term) => (
              <div key={term.label}>
                <dt>{term.label}</dt>
                <dd>{term.copy}</dd>
              </div>
            ))}
          </dl>
        </section>
        <details ref={excludedFold} className="gz-econ-out">
          <summary>Qué no incluye el alcance</summary>
          <ul>
            {excluded.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </details>
      </dialog>
    </div>
  );
}
