import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useLocation } from "wouter";
import logoImg from "@assets/ChatGPT_Image_8_jul_2026,_02_23_41_p.m._1783542231097.png";
import { NAV_LINKS, scrollTo } from "@/lib/landing-theme";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenu, setMobileMenu] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();
  const [location, navigate] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setDesktopMenu(null);
    setMobileMenu(null);
  }, [location]);

  const goTo = (href: string) => {
    const [path, hash] = href.split("#");
    const targetPath = path || location;

    if (targetPath !== location) {
      navigate(href);
      if (hash) window.setTimeout(() => scrollTo(`#${hash}`), 120);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (hash) {
      scrollTo(`#${hash}`);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setOpen(false);
    setDesktopMenu(null);
    setMobileMenu(null);
  };

  const isActive = (href: string) => location === href.split("#")[0];

  return (
    <nav className={`tool-nav${scrolled ? " is-scrolled" : ""}`} aria-label="Navegación principal">
      <div className="tool-nav-inner">
        <button className="tool-nav-logo" onClick={() => goTo("/")} aria-label="TOOL — inicio">
          <img src={logoImg} alt="TOOL" />
        </button>

        <div className="tool-nav-desktop">
          <div className="tool-nav-links">
            {NAV_LINKS.map((link) => {
              const hasChildren = "children" in link;
              return (
                <div className="tool-nav-item" key={link.href} onMouseEnter={() => hasChildren && setDesktopMenu(link.href)} onMouseLeave={() => setDesktopMenu(null)}>
                  <button className={isActive(link.href) ? "is-active" : ""} onClick={() => goTo(link.href)} onFocus={() => hasChildren && setDesktopMenu(link.href)} aria-current={isActive(link.href) ? "page" : undefined} aria-expanded={hasChildren ? desktopMenu === link.href : undefined}>
                    {link.label}{hasChildren && <ChevronDown size={13} />}
                  </button>
                  {hasChildren && (
                    <AnimatePresence>
                      {desktopMenu === link.href && (
                        <motion.div className="tool-nav-dropdown" initial={reduceMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: .16 }}>
                          <div className="tool-nav-dropdown-intro"><span>{link.label}</span><p>{link.intro}</p></div>
                          {link.children.map((child, index) => <button key={child.href} onClick={() => goTo(child.href)}><span className="tool-nav-dropdown-number">0{index + 1}</span><span className="tool-nav-dropdown-copy"><strong>{child.label}</strong><small>{child.description}</small></span><span className="tool-nav-dropdown-arrow">→</span></button>)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
          <button className="tool-nav-cta" onClick={() => goTo("/contacto")} data-testid="nav-cta-button">Agendar diagnóstico</button>
        </div>

        <button className="tool-nav-toggle" onClick={() => setOpen((value) => !value)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="mobile-navigation">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-navigation" className="tool-nav-mobile" initial={reduceMotion ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
            {NAV_LINKS.map((link) => {
              const hasChildren = "children" in link;
              const expanded = mobileMenu === link.href;
              return (
                <div className="tool-nav-mobile-group" key={link.href}>
                  <div className="tool-nav-mobile-row">
                    <button className={isActive(link.href) ? "is-active" : ""} onClick={() => goTo(link.href)} aria-current={isActive(link.href) ? "page" : undefined}>{link.label}</button>
                    {hasChildren && <button className="tool-nav-mobile-expand" onClick={() => setMobileMenu(expanded ? null : link.href)} aria-label={`${expanded ? "Cerrar" : "Abrir"} opciones de ${link.label}`} aria-expanded={expanded}><ChevronDown size={16} /></button>}
                  </div>
                  {hasChildren && expanded && <div className="tool-nav-mobile-children"><p>{link.intro}</p>{link.children.map((child) => <button key={child.href} onClick={() => goTo(child.href)}><strong>{child.label}</strong><small>{child.description}</small></button>)}</div>}
                </div>
              );
            })}
            <button className="tool-nav-mobile-cta" onClick={() => goTo("/contacto")} data-testid="nav-cta-button-mobile">Agendar diagnóstico</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
