import { useEffect } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DEMO_URL } from "@/lib/landing-theme";
import "@/styles/tool-redesign.css";
import "@/styles/inner-pages.css";

const destinations = [
  { href: "/", number: "01", title: "Inicio", copy: "De una elección estratégica a una operación capaz de ejecutarla." },
  { href: "/que-hacemos", number: "02", title: "Qué hacemos", copy: "Las capacidades, procesos y tecnología que sostienen el rumbo." },
  { href: "/quienes-somos", number: "03", title: "Quiénes somos", copy: "La razón, los principios y las personas detrás de TOOL." },
  { href: "/contacto", number: "04", title: "Contacto", copy: "Una conversación para ordenar el contexto y el siguiente paso." },
];

export default function NotFound() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const previous = document.title;
    document.title = "Página no encontrada | TOOL";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="tool-site inner-page not-found-page">
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <Navbar />
      <main id="main-content">
        <section className="not-found" aria-labelledby="not-found-title">
          <div className="inner-hero-pattern" aria-hidden="true" />
          <motion.div
            className="not-found-inner"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="not-found-mark" aria-hidden="true">
              <Compass size={22} strokeWidth={1.5} />
            </span>
            <span className="tool-eyebrow">Error 404</span>
            <p className="not-found-code" aria-hidden="true">404</p>
            <h1 id="not-found-title">Esta ruta no está en el mapa.</h1>
            <p>La página que buscas no existe o se movió. Elige un destino claro y continúa.</p>
            <div className="not-found-actions">
              <Link className="tool-btn tool-btn-primary" href="/">
                Volver al inicio <ArrowRight size={17} />
              </Link>
              <a className="tool-btn tool-btn-secondary" href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={17} /> Hablar con TOOL
              </a>
            </div>
            <nav className="not-found-destinations" aria-label="Destinos útiles">
              {destinations.map((item) => (
                <Link className="not-found-card" href={item.href} key={item.href}>
                  <span>{item.number}</span>
                  <strong>{item.title}</strong>
                  <small>{item.copy}</small>
                </Link>
              ))}
            </nav>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
