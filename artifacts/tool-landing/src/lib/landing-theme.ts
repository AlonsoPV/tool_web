export const NAVY = "#0A1D3D";
export const GREEN = "#10B981";
export const PURPLE = "#7C4DFF";
export const AMBER = "#F59E0B";
export const LIGHT_BG = "#F7F9FC";
export const MUTED_BG = "#F1F3F6";

export const DEMO_URL = "https://wa.me/5255514520477";
export const ADVISOR_URL = "https://wa.me/5255119811499";

export const NAV_LINKS = [
  {
    label: "Inicio",
    href: "/",
    intro: "De la desconexión a una forma de trabajar que permanece.",
    children: [
      { label: "El problema", description: "Cuando la estrategia no baja a la operación.", href: "/#que-resolvemos" },
      { label: "La propuesta", description: "Cuatro capacidades que trabajan como un sistema.", href: "/#propuesta" },
      { label: "Puntos de entrada", description: "Comenzar por la necesidad más urgente.", href: "/#soluciones" },
      { label: "Evidencia", description: "Tres cambios reales construidos con cada equipo.", href: "/#casos-de-exito" },
    ],
  },
  {
    label: "Qué hacemos",
    href: "/que-hacemos",
    intro: "Qué transformamos, cómo intervenimos y qué resultados producimos.",
    children: [
      { label: "Qué transformamos", description: "Cuatro capacidades que funcionan juntas.", href: "/que-hacemos#capacidades" },
      { label: "Cómo intervenimos", description: "Del diagnóstico a la medición y mejora.", href: "/que-hacemos#proceso" },
      { label: "Resultados", description: "Evidencia y casos reales.", href: "/que-hacemos#casos-de-exito" },
    ],
  },
  {
    label: "Quiénes somos",
    href: "/quienes-somos",
    intro: "La razón, los principios y las personas detrás de TOOL.",
    children: [
      { label: "Por qué empezamos", description: "El patrón que decidimos ayudar a resolver.", href: "/quienes-somos#origen" },
      { label: "Cómo pensamos", description: "Los principios que guían cada proyecto.", href: "/quienes-somos#principios" },
      { label: "Quién construye contigo", description: "Las personas detrás de la estrategia y ejecución.", href: "/quienes-somos#equipo" },
    ],
  },
  { label: "Contacto", href: "/contacto" },
] as const;

export function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

import type { CSSProperties } from "react";

export const sectionLabelStyle: CSSProperties = {
  display: "inline-block",
  borderRadius: 100,
  padding: "6px 16px",
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  marginBottom: 20,
  fontFamily: "Manrope, sans-serif",
};

export const sectionTitleStyle: CSSProperties = {
  fontFamily: "Manrope, sans-serif",
  fontWeight: 800,
  fontSize: "clamp(1.5rem, 4.5vw, 2.6rem)",
  color: NAVY,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  margin: "0 auto 16px",
};

export const sectionDescStyle: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "clamp(0.95rem, 2.5vw, 1.05rem)",
  lineHeight: 1.75,
  color: `${NAVY}75`,
  margin: "0 auto",
};
