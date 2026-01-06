"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Projets", href: "#projects" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { scrollY, scrollYProgress } = useScroll();
  const navRef = useRef<HTMLElement>(null);

  // Détection du scroll pour changer l'apparence
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Détection de la section active
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const element = document.querySelector(item.href);
        return { href: item.href, element };
      });

      let current: string | null = null;
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { href, element } = sections[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          
          if (scrollPosition >= elementTop - 100) {
            current = href;
            break;
          }
        }
      }

      if (window.scrollY < 100) {
        current = "#hero";
      }

      if (current) setActiveSection(current);
    };

    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Handler unifié pour la navigation (mobile et desktop) - Garantit le fonctionnement
  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    // Empêcher le comportement par défaut et la propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    // Fermer le menu mobile immédiatement (sans délai)
    setIsMobileMenuOpen(false);
    
    // Scroll vers la section - délai minimal pour laisser React mettre à jour l'état
    requestAnimationFrame(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = navRef.current?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - headerHeight - 20);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // Fallback : si l'élément n'est pas trouvé, essayer un scroll simple
        console.warn(`Section ${href} not found, attempting direct scroll`);
        const hash = href.replace('#', '');
        const fallbackElement = document.getElementById(hash);
        if (fallbackElement) {
          fallbackElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });
  };

  // Composant de lien réutilisable (mobile et desktop)
  const NavLink = ({ item, index, isMobile = false }: { item: typeof navItems[0]; index: number; isMobile?: boolean }) => {
    const isActive = activeSection === item.href;
    
    const linkContent = (
      <>
        {item.label}
        {!isMobile && isActive && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
            layoutId="activeSection"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
      </>
    );

    if (isMobile) {
      return (
        <motion.li
          key={item.href}
          variants={{
            open: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.3 },
            },
            closed: {
              opacity: 0,
              x: -20,
              transition: { duration: 0.2 },
            },
          }}
          style={{ pointerEvents: "auto" }}
        >
          <a
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleNavClick(item.href, e);
            }}
            onTouchStart={(e) => {
              // Assurer que le touch event fonctionne
              e.stopPropagation();
            }}
            className={`block px-4 py-2.5 rounded-lg font-medium transition-colors touch-manipulation cursor-pointer ${
              isActive
                ? "bg-primary-50 text-primary-600"
                : "text-dark-700 hover:text-primary-600 hover:bg-primary-50 active:bg-primary-100"
            }`}
            style={{ 
              WebkitTapHighlightColor: "transparent",
              pointerEvents: "auto",
              position: "relative",
              zIndex: 100,
              userSelect: "none",
            }}
            role="button"
            aria-label={`Aller à la section ${item.label}`}
          >
            {linkContent}
          </a>
        </motion.li>
      );
    }

    return (
      <li key={item.href}>
        <motion.a
          href={item.href}
          onClick={(e) => handleNavClick(item.href, e)}
          className={`relative px-4 py-2 text-sm font-medium transition-colors ${
            isActive
              ? "text-primary-600"
              : "text-dark-700 hover:text-primary-600"
          }`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.2, duration: 0.3 }}
        >
          {linkContent}
        </motion.a>
      </li>
    );
  };

  return (
    <>
      {/* Barre de progression du scroll */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-100 z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500"
          style={{ width: "100%" }}
        />
      </motion.div>

      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-md py-2"
            : "bg-transparent py-2"
        }`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding */}
            <motion.a
              href="#hero"
              onClick={(e) => handleNavClick("#hero", e)}
              className="text-lg sm:text-xl font-bold gradient-text touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              Mamadou Ndiaye
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => (
                  <NavLink key={item.href} item={item} index={index} />
                ))}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-dark-700 rounded-lg hover:bg-dark-100 transition-colors relative z-[70] touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              whileTap={{ scale: 0.95 }}
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay pour fermer le menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              
              {/* Menu mobile - Garanti 100% cliquable */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden bg-white/95 backdrop-blur-lg border-t border-dark-200 shadow-lg overflow-hidden relative z-[70]"
                style={{ pointerEvents: "auto" }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.ul
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 },
                    },
                  }}
                  className="container-custom py-4 space-y-1"
                  style={{ pointerEvents: "auto" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {navItems.map((item, index) => (
                    <NavLink key={item.href} item={item} index={index} isMobile={true} />
                  ))}
                </motion.ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
