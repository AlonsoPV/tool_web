import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";

function ToolLogo() {
  return (
    <svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="25" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="26" fill={NAVY} letterSpacing="-1">
        T
      </text>
      <circle cx="36" cy="16" r="11" stroke={NAVY} strokeWidth="3.5" fill="none"/>
      <circle cx="54" cy="16" r="11" stroke={NAVY} strokeWidth="3.5" fill="none"/>
      <circle cx="45" cy="16" r="4" fill={GREEN}/>
      <text x="64" y="25" fontFamily="Manrope, sans-serif" fontWeight="800" fontSize="26" fill={NAVY} letterSpacing="-1">
        L
      </text>
    </svg>
  );
}

const navLinks = [
  { label: "Metodología", href: "#metodologia" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Quiénes somos", href: "#fundadores" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <ToolLogo />
          </button>

          <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: NAVY,
                  fontSize: 14,
                  fontWeight: 600,
                  fontFamily: "Manrope, sans-serif",
                  opacity: 0.75,
                  transition: "opacity 0.2s",
                  padding: 0,
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "0.75")}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                {link.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
              data-testid="nav-cta-button"
              style={{
                background: GREEN,
                color: "#fff",
                border: "none",
                borderRadius: 100,
                padding: "10px 22px",
                fontFamily: "Manrope, sans-serif",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(16,185,129,0.3)",
              }}
            >
              Agendar diagnóstico
            </motion.button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: NAVY }}
            data-testid="nav-mobile-menu-toggle"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{ overflow: "hidden", background: "#fff", borderTop: "1px solid #E5E7EB" }}
            >
              <div style={{ padding: "16px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: NAVY,
                      fontSize: 15,
                      fontWeight: 600,
                      fontFamily: "Manrope, sans-serif",
                      textAlign: "left",
                      padding: "10px 0",
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div
        className="md:hidden"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: NAVY,
          padding: "12px 24px",
          paddingBottom: "max(12px, env(safe-area-inset-bottom))",
        }}
      >
        <button
          onClick={() => window.open("https://wa.me/5255514520477", "_blank")}
          data-testid="mobile-sticky-cta"
          style={{
            width: "100%",
            background: GREEN,
            color: "#fff",
            border: "none",
            borderRadius: 100,
            padding: "14px",
            fontFamily: "Manrope, sans-serif",
            fontWeight: 700,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          Agendar diagnóstico
        </button>
      </div>
    </>
  );
}
