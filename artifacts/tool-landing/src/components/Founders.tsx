import { Linkedin, MessageCircle } from "lucide-react";
import { ADVISOR_URL, DEMO_URL } from "@/lib/landing-theme";
import SectionShell from "@/components/landing/SectionShell";
import abrahamPhoto from "@assets/AbrahamCastillo_1784129559789.png";
import alonsoPhoto from "@assets/AlonsoPerez (1).png";

const founders = [
  {
    name: "Abraham Castillo Harris",
    role: "Estrategia, desarrollo comercial y crecimiento de negocio.",
    photo: abrahamPhoto,
    linkedin: "https://www.linkedin.com/in/abraham-harris-7b91951b1/",
    whatsapp: DEMO_URL,
    description: "Conecta los objetivos de crecimiento con la lectura comercial del negocio, sus clientes y una propuesta de valor clara.",
  },
  {
    name: "Alonso Pérez Vázquez",
    role: "Procesos, operación, dashboards, tecnología e implementación.",
    photo: alonsoPhoto,
    linkedin: "https://www.linkedin.com/in/alonsoperezvazquez/",
    whatsapp: ADVISOR_URL,
    description: "Diseña procesos, tableros, automatizaciones y herramientas para convertir la estrategia en adopción operativa.",
  },
];

export default function Founders() {
  return (
    <SectionShell id="equipo" className="founders-section">
      <div className="founders-layout">
        <div className="tool-section-heading tool-section-heading-left">
          <span className="tool-eyebrow">Equipo</span>
          <h2>Estrategia y ejecución, trabajando juntas.</h2>
          <p>TOOL nace de combinar visión comercial, procesos, tecnología e implementación operativa.</p>
          <p className="founders-note">No somos una firma que desaparece después del diagnóstico. Construimos contigo.</p>
        </div>
        <div className="founders-grid">
          {founders.map((founder) => (
            <article className="founder-card" key={founder.name}>
              <img src={founder.photo} alt={founder.name} />
              <div>
                <h3>{founder.name}</h3>
                <p>{founder.role}</p>
                <p className="founder-description">{founder.description}</p>
                <div className="founder-links"><a href={founder.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${founder.name}`}><Linkedin size={15} /> LinkedIn</a><a href={founder.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp de ${founder.name}`}><MessageCircle size={15} /> WhatsApp</a></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
