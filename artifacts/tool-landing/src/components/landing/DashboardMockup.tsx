import * as Dialog from "@radix-ui/react-dialog";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronLeft, ChevronRight, Compass, Gauge, Maximize2, MonitorCog, Users, X } from "lucide-react";
import { useState } from "react";

const nodes = [
  {
    number: "01",
    label: "Estrategia",
    detail: "Definimos la estrategia: dónde jugar y cómo ganar",
    description: "Convertimos la ambición en elecciones explícitas para que la empresa concentre recursos y energía donde realmente puede ganar.",
    result: "Foco compartido para decidir qué impulsar y qué dejar fuera.",
    deliverables: ["Cascada de elecciones", "Pilares y prioridades", "North Star y objetivos"],
    icon: Compass,
  },
  {
    number: "02",
    label: "Optimización",
    detail: "Optimizamos la operación para reducir fricción",
    description: "Rediseñamos la forma de trabajar para que las decisiones fluyan, los responsables sean claros y el crecimiento no dependa de heroísmos.",
    result: "Una operación más simple, visible y capaz de escalar.",
    deliverables: ["Procesos críticos", "Roles y decisiones", "Cadencias de gestión"],
    icon: Gauge,
  },
  {
    number: "03",
    label: "Tecnología",
    detail: "Habilitamos con tecnología que tiene sentido",
    description: "Elegimos y configuramos tecnología alrededor del proceso diseñado, conectando herramientas, automatización y datos con una necesidad real.",
    result: "Tecnología útil que acelera el trabajo sin añadir complejidad.",
    deliverables: ["Herramientas adecuadas", "Automatizaciones", "KPIs y tableros"],
    icon: MonitorCog,
  },
  {
    number: "04",
    label: "Adopción",
    detail: "Acompañamos la adopción hasta que se vuelve hábito",
    description: "Trabajamos con el equipo hasta que la nueva forma de operar se entiende, se usa y puede mejorar sin depender de la consultora.",
    result: "Capacidad instalada y cambio que permanece después del proyecto.",
    deliverables: ["Capacitación aplicada", "Playbooks y acompañamiento", "Seguimiento y mejora"],
    icon: Users,
  },
];

export default function DashboardMockup() {
  const reduceMotion = useReducedMotion();
  const [activeNode, setActiveNode] = useState<(typeof nodes)[number] | null>(null);
  const activeIndex = activeNode ? nodes.findIndex((node) => node.number === activeNode.number) : -1;

  const moveToNode = (direction: -1 | 1) => {
    const nextIndex = (activeIndex + direction + nodes.length) % nodes.length;
    setActiveNode(nodes[nextIndex]);
  };

  return (
    <Dialog.Root open={activeNode !== null} onOpenChange={(open) => !open && setActiveNode(null)}>
      <div className="hero-map" aria-label="Estrategia, optimización, tecnología y adopción conectadas al valor de TOOL">
        <svg className="hero-map-lines" viewBox="0 0 520 430" aria-hidden="true">
          <path d="M137 100 L260 215 L383 100 M137 330 L260 215 L383 330" />
        </svg>
        <div className="hero-map-center">
          <span>VALOR TOOL</span><strong>Estrategia convertida en capacidad</strong><small>Decidir · operar · aprender</small>
        </div>
        {nodes.map((node, index) => {
          const { number, label, detail, icon: Icon } = node;
          return (
            <motion.button
              type="button"
              className={`hero-map-node hero-map-node-${index + 1}`}
              key={label}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ delay: .18 + index * .08, duration: .4 }}
              onClick={() => setActiveNode(node)}
              aria-label={`Ampliar ${label}`}
            >
              <div><span>{number}</span><span className="hero-map-node-icons"><Icon size={17} /><Maximize2 size={12} /></span></div>
              <strong>{label}</strong><small>{detail}</small>
            </motion.button>
          );
        })}
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="hero-stage-modal-overlay" />
        <Dialog.Content className="hero-stage-modal-content" data-stage={activeNode?.number}>
          {activeNode && (
            <>
              <div className="hero-stage-modal-head">
                <div className="hero-stage-modal-identity">
                  <span><activeNode.icon size={20} /></span>
                  <strong>{activeNode.number} / 04</strong>
                </div>
                <div className="hero-stage-modal-progress" aria-label={`Etapa ${activeNode.number} de 04`}>
                  {nodes.map((node) => <span key={node.number} className={node.number === activeNode.number ? "is-active" : ""} />)}
                </div>
              </div>

              <div className="hero-stage-modal-grid">
                <div className="hero-stage-modal-narrative">
                  <Dialog.Title>{activeNode.label}</Dialog.Title>
                  <Dialog.Description>{activeNode.description}</Dialog.Description>
                  <div className="hero-stage-modal-result">
                    <span>Resultado esperado</span>
                    <strong>{activeNode.result}</strong>
                  </div>
                </div>

                <div className="hero-stage-modal-deliverables">
                  <span>Qué construimos</span>
                  <ul>
                    {activeNode.deliverables.map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}
                  </ul>
                </div>
              </div>

              <div className="hero-stage-modal-footer">
                <a className="hero-stage-modal-link" href="/que-hacemos">Explorar el servicio <ArrowRight size={15} /></a>
                <div className="hero-stage-modal-nav">
                  <button type="button" onClick={() => moveToNode(-1)} aria-label="Ver etapa anterior"><ChevronLeft size={16} /></button>
                  <span>{activeNode.number} <small>de</small> 04</span>
                  <button type="button" onClick={() => moveToNode(1)} aria-label="Ver etapa siguiente"><ChevronRight size={16} /></button>
                </div>
              </div>
            </>
          )}
          <Dialog.Close className="hero-stage-modal-close" aria-label="Cerrar detalle"><X size={18} /></Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
