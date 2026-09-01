import { Check } from "lucide-react";
import SectionShell from "@/components/landing/SectionShell";

const signals = [
  "El dueño quiere dejar de cargar toda la operación.",
  "El seguimiento comercial sigue siendo informal.",
  "Hay herramientas compradas, pero poco utilizadas.",
  "Digitalizar es urgente, pero complicarse no es opción.",
  "WhatsApp, Excel o la memoria sostienen procesos clave.",
  "La empresa necesita crecer con más orden y visibilidad.",
];

export default function WhoIsFor() {
  return (
    <SectionShell id="para-quien" className="who-section" style={{ background: "#F7F9FC" }}>
      <div className="who-layout">
        <div className="tool-section-heading tool-section-heading-left">
          <span className="tool-eyebrow">Para quién es</span>
          <h2>Para empresas que ya crecieron, pero todavía operan como si fueran pequeñas.</h2>
          <p>TOOL funciona mejor cuando ya hay clientes, equipo y operación; lo que falta es convertir experiencia en sistema.</p>
        </div>
        <div className="who-grid">
          {signals.map((signal) => (
            <div className="who-card" key={signal}>
              <span><Check size={14} strokeWidth={3} /></span>
              <p>{signal}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
