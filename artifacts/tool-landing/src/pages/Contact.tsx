import { FormEvent, useState } from "react";
import { ArrowRight, Check, Linkedin, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ADVISOR_URL, DEMO_URL } from "@/lib/landing-theme";
import "@/styles/tool-redesign.css";
import "@/styles/inner-pages.css";

const diagnostic = ["Entendemos el contexto y la prioridad.", "Identificamos la fricción principal.", "Aclaramos qué conviene resolver primero.", "Definimos un siguiente paso viable." ];

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", challenge: "" });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hola, soy ${form.name} de ${form.company}. Quiero conversar con TOOL.\n\nReto principal: ${form.challenge}\nCorreo: ${form.email}`;
    window.open(`${DEMO_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="tool-site inner-page contact-page">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <section className="contact-hero">
          <div className="inner-hero-pattern" aria-hidden="true" />
          <div className="contact-hero-copy">
            <span className="tool-eyebrow">Contacto</span>
            <h1>Cuéntanos qué está frenando <span>la ejecución.</span></h1>
            <p>No necesitas llegar con el problema resuelto. La primera conversación sirve para ordenar el contexto y encontrar el punto correcto de entrada.</p>
            <div className="contact-direct">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={17} /> WhatsApp directo</a>
              <span>Conversación inicial · sin compromiso</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={submit}>
            <div className="contact-form-head"><span>Agenda una conversación</span><small>Respondemos personalmente</small></div>
            <label>Nombre<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Tu nombre" /></label>
            <div className="contact-form-row">
              <label>Empresa<input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Tu empresa" /></label>
              <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="tu@empresa.com" /></label>
            </div>
            <label>¿Cuál es el reto principal?<textarea required value={form.challenge} onChange={(e) => setForm({ ...form, challenge: e.target.value })} placeholder="Describe brevemente qué quieres ordenar, mejorar o implementar." rows={4} /></label>
            <button className="tool-btn tool-btn-primary" type="submit">Enviar por WhatsApp <ArrowRight size={17} /></button>
            <small className="contact-form-note">Tus datos solo se utilizan para responder a esta conversación.</small>
          </form>
        </section>

        <section className="contact-diagnostic">
          <div className="contact-diagnostic-inner">
            <div><span className="tool-eyebrow">Qué pasa en el diagnóstico</span><h2>Claridad antes que propuesta.</h2><p>La primera conversación no es una presentación comercial. Es una lectura inicial del reto y de las decisiones que lo rodean.</p></div>
            <div className="contact-diagnostic-list">{diagnostic.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p><Check size={15} /></div>)}</div>
          </div>
        </section>

        <section className="contact-people">
          <div className="tool-section-heading"><span className="tool-eyebrow">Contacto directo</span><h2>Habla con quienes estarán en el proyecto.</h2></div>
          <div className="contact-people-grid">
            <article><div><span>AC</span><div><h3>Abraham Castillo Harris</h3><p>Estrategia y desarrollo comercial</p></div></div><div><a href={DEMO_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://www.linkedin.com/in/abraham-harris-7b91951b1/" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a></div></article>
            <article><div><span>AP</span><div><h3>Alonso Pérez Vázquez</h3><p>Procesos, tecnología e implementación</p></div></div><div><a href={ADVISOR_URL} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href="https://www.linkedin.com/in/alonsoperezvazquez/" target="_blank" rel="noopener noreferrer"><Linkedin size={15} /> LinkedIn</a></div></article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
