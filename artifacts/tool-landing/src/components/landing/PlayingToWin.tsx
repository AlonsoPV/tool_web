import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass } from "lucide-react";
import { Link } from "wouter";
import SectionShell from "@/components/landing/SectionShell";

const choices = ["Aspiración", "Dónde jugar", "Cómo ganar", "Capacidades", "Gestión"];

export default function PlayingToWin() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="playing-to-win" className="ptw-section ptw-bridge-section">
      <div className="ptw-bridge-layout">
        <motion.div
          className="ptw-bridge-copy"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
        >
          <span className="tool-eyebrow">Primero, elegir</span>
          <h2>Una empresa no gana haciendo más.<span className="tool-heading-rest">Gana eligiendo mejor.</span></h2>
          <p>Playing to Win convierte la ambición en decisiones concretas: qué buscamos, dónde competimos y qué debemos hacer excepcionalmente bien.</p>
          <Link className="tool-inline-link" href="/que-hacemos#pilares-y-objetivos">Ver cómo definimos el rumbo <ArrowRight size={15} /></Link>
        </motion.div>

        <motion.div
          className="ptw-choice-preview"
          initial={reduceMotion ? false : { opacity: 0, x: 22 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: .55 }}
        >
          <div className="ptw-choice-preview-head">
            <span><Compass size={17} /></span>
            <div><small>Una cascada conectada</small><strong>05 elecciones · 01 dirección</strong></div>
          </div>
          <ol>{choices.map((choice, index) => <li key={choice}><span>0{index + 1}</span><strong>{choice}</strong></li>)}</ol>
          <p><span>Lo importante</span> Cada elección reduce ruido y define la operación que sí vale la pena construir.</p>
        </motion.div>
      </div>
    </SectionShell>
  );
}
