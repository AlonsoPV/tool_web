import { useRef } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import GaozValueDiagram from '@/components/GaozValueDiagram';
import '@/styles/gaoz.css';
import '@/styles/gaoz-tool-theme.css';
import '@/styles/gaoz-proposal.css';
import '@/styles/gaoz-value.css';

const payments = [
  { when: 'Arranque', whenNote: 'Al iniciar', share: '50%', amount: '$20,000.00 + IVA' },
  { when: 'Cierre', whenNote: 'Al terminar', share: '50%', amount: '$20,000.00 + IVA' },
];

const excluded = [
  'Horario de atención fuera de lo estipulado',
  'Atención presencial, por definir',
  'Visitas foráneas',
  'Trabajo manual en el CRM',
];

const terms = [
  { label: 'Moneda e impuesto', copy: 'Pesos mexicanos. El IVA se factura aparte sobre $40,000.00.' },
  { label: 'Forma de pago', copy: '50% al arranque y 50% al cierre de las 21 semanas.' },
  { label: 'Alcance', copy: 'Comercial y Marketing, en coordinación con Administración y áreas técnicas para vender, entregar y cobrar. Incluye ofertas de mantenimiento, renovación y referidos con Servicio.' },
  { label: 'Fuera de este acuerdo', copy: 'La operación interna integral de Servicio, una reestructura societaria o el desarrollo completo de una unidad veterinaria.' },
  { label: 'Resultados', copy: 'Ventas y recuperación se miden contra la línea base. No hay garantía de resultados.' },
  { label: 'Continuidad', copy: 'El trabajo usa clientes, oportunidades e inventario de GAOZ. El acompañamiento posterior se acuerda por separado.' },
];

export default function GaozV6Value() {
  const economics = useRef<HTMLDialogElement>(null);
  const excludedFold = useRef<HTMLDetailsElement>(null);

  return (
    <div className="gz gz-proposal gz-v6 gz-value-page">
      <PageMeta
        title="TOOL · Ruta de ejecución GAOZ V6"
        description="Tres fases en 21 semanas: diagnosticar y activar, diseñar y validar, implementar y consolidar."
      />
      <a className="gz-skip" href="#gaoz-valor">Saltar al diagrama</a>
      <header className="gz-nav">
        <a href="/gaoz-v6" className="gz-brand" aria-label="Volver a la propuesta GAOZ V6">TOOL<span>GAOZ V6</span></a>
        <a href="/gaoz-v6" className="gz-nav-cta"><ArrowLeft size={16} /> Propuesta</a>
      </header>
      <main id="gaoz-valor">
        <GaozValueDiagram />
      </main>
      <footer className="gz-footer">
        <a className="gz-brand" href="/gaoz-v6">TOOL<span>GAOZ V6</span></a>
        <span>Propuesta PA V6 · 21 semanas</span>
        <div className="gz-value-actions">
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
            Detalle económico
          </button>
          <a href="/gaoz-v6" className="gz-back-link"><ArrowLeft size={16} /> Volver a la propuesta</a>
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
            <p>Propuesta V6 · 21 semanas</p>
            <h2 id="gz-econ-title">Inversión y condiciones</h2>
          </div>
          <button type="button" onClick={() => economics.current?.close()} aria-label="Cerrar detalle económico">
            <X size={18} />
          </button>
        </div>
        <div className="gz-econ-hero">
          <p className="gz-econ-amount">$40,000.00 <span>+ IVA</span></p>
          <p className="gz-econ-note">MXN · Comercial y Marketing</p>
        </div>
        <table>
          <caption>Esquema de pago</caption>
          <thead>
            <tr>
              <th scope="col">Momento</th>
              <th scope="col">Parte</th>
              <th scope="col">Importe</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((row) => (
              <tr key={row.when}>
                <th scope="row">{row.when}<small>{row.whenNote}</small></th>
                <td>{row.share}</td>
                <td>{row.amount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" colSpan={2}>Inversión total</th>
              <td>$40,000.00 + IVA</td>
            </tr>
          </tfoot>
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
