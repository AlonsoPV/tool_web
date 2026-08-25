import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/ChatGPT_Image_8_jul_2026,_02_23_41_p.m._1783542231097.png";

const NAVY = "#0A1D3D";
const GREEN = "#10B981";

import { DEMO_URL, scrollTo } from "@/lib/landing-theme";

const navLinks = [
  { label: "Problema", href: "#problema" },
  { label: "Transformación", href: "#transformacion" },
  { label: "Playing to Win", href: "#playing-to-win" },
  { label: "OKRs", href: "#okrs" },
  { label: "Sistema", href: "#sistema" },
  { label: "Impacto", href: "#impacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="site-nav"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid #E5E7EB" : "1px solid transparent",
        }}
      >
        <div className="site-nav-inner">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="site-nav-logo"
            aria-label="TOOL — inicio"
          >
            <img src={logoImg} alt="TOOL" />
          </button>

          <div className="site-nav-desktop">
            <div className="site-nav-links">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="site-nav-link"
                  data-testid={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <motion.a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              data-testid="nav-cta-button"
              className="site-nav-cta"
            >
              Solicitar diagnóstico
            </motion.a>
          </div>

          <button
            className="site-nav-burger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: NAVY }}
            data-testid="nav-mobile-menu-toggle"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
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
              className="site-nav-mobile"
            >
              <div className="site-nav-mobile-inner">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => { scrollTo(link.href); setMenuOpen(false); }}
                    className="site-nav-mobile-link"
                  >
                    {link.label}
                  </button>
                ))}
                <motion.a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMenuOpen(false)}
                  data-testid="nav-cta-button-mobile"
                  className="site-nav-cta site-nav-cta-mobile"
                >
                  Solicitar diagnóstico
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <style>{`
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
        }
        .site-nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          gap: 24px;
        }
        .site-nav-logo {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }
        .site-nav-logo img {
          height: 36px;
          width: auto;
          display: block;
        }
        .site-nav-desktop {
          display: none;
          align-items: center;
          gap: 28px;
          min-width: 0;
        }
        .site-nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          min-width: 0;
        }
        .site-nav-link {
          background: none;
          border: none;
          cursor: pointer;
          color: ${NAVY};
          font-size: 13px;
          font-weight: 600;
          font-family: Manrope, sans-serif;
          opacity: 0.72;
          transition: opacity 0.2s, color 0.2s, background 0.2s;
          padding: 8px 10px;
          border-radius: 8px;
          white-space: nowrap;
          line-height: 1.2;
        }
        .site-nav-link:hover {
          opacity: 1;
          background: ${NAVY}08;
        }
        .site-nav-cta {
          background: ${GREEN};
          color: #fff;
          border: none;
          border-radius: 100px;
          padding: 10px 18px;
          font-family: Manrope, sans-serif;
          font-weight: 700;
          font-size: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(16,185,129,0.3);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .site-nav-burger {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          margin-right: -6px;
        }
        .site-nav-mobile {
          overflow: hidden;
          background: #fff;
          border-top: 1px solid #E5E7EB;
        }
        .site-nav-mobile-inner {
          padding: 12px 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .site-nav-mobile-link {
          background: none;
          border: none;
          cursor: pointer;
          color: ${NAVY};
          font-size: 15px;
          font-weight: 600;
          font-family: Manrope, sans-serif;
          text-align: left;
          padding: 12px 0;
        }
        .site-nav-cta-mobile {
          margin-top: 12px;
          width: 100%;
          padding: 12px 22px;
          font-size: 14px;
        }

        @media (min-width: 1024px) {
          .site-nav-desktop {
            display: flex;
          }
          .site-nav-burger {
            display: none;
          }
        }

        @media (min-width: 1200px) {
          .site-nav-desktop {
            gap: 36px;
          }
          .site-nav-links {
            gap: 2px;
          }
          .site-nav-link {
            font-size: 14px;
            padding: 8px 12px;
          }
          .site-nav-cta {
            padding: 10px 22px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .site-nav-inner {
            padding: 0 16px;
            height: 60px;
          }
          .site-nav-logo img {
            height: 32px;
          }
          .site-nav-mobile-inner {
            padding: 8px 16px 16px;
          }
        }
      `}</style>
    </>
  );
}
