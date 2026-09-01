import { Linkedin, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import logoImg from "@assets/ChatGPT_Image_8_jul_2026,_02_23_41_p.m._1783542231097.png";
import { ADVISOR_URL, DEMO_URL, NAV_LINKS } from "@/lib/landing-theme";

const contacts = [
  { name: "Abraham", whatsapp: DEMO_URL, linkedin: "https://www.linkedin.com/in/abraham-harris-7b91951b1/" },
  { name: "Alonso", whatsapp: ADVISOR_URL, linkedin: "https://www.linkedin.com/in/alonsoperezvazquez/" },
];

const footerLinks = NAV_LINKS;

export default function Footer() {
  const [location, navigate] = useLocation();
  return (
    <footer className="tool-footer">
      <div className="tool-footer-inner">
        <div className="tool-footer-brand">
          <button onClick={() => location === "/" ? window.scrollTo({ top: 0, behavior: "smooth" }) : navigate("/")} aria-label="TOOL — inicio">
            <img src={logoImg} alt="TOOL" />
          </button>
          <p>Construimos sistemas de ejecución para empresas que quieren crecer con orden.</p>
        </div>
        <div>
          <span className="tool-footer-label">Navegación</span>
          <nav className="tool-footer-nav" aria-label="Navegación del pie">
            {footerLinks.map((link) => <a key={link.href} href={link.href.startsWith("/") ? link.href : `/${link.href}`}>{link.label}</a>)}
          </nav>
        </div>
        <div>
          <span className="tool-footer-label">Conversemos</span>
          <div className="tool-footer-contacts">
            {contacts.map((contact) => (
              <div key={contact.name}>
                <strong>{contact.name}</strong>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp de ${contact.name}`}><MessageCircle size={14} /></a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn de ${contact.name}`}><Linkedin size={14} /></a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tool-footer-bottom">
        <span>© 2026 TOOL. Todos los derechos reservados.</span>
        <span>Estrategia · Procesos · Tecnología · Implementación</span>
      </div>
    </footer>
  );
}
