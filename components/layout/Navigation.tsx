"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu, X, Download, Mail, CheckCircle2 } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const { scrollY, scrollYProgress } = useScroll();
  const navRef = useRef<HTMLElement>(null);

  // Barre de progression du scroll
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Détection du scroll pour changer l'apparence
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Détection améliorée de la section active (algorithme plus précis)
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => {
        const element = document.querySelector(item.href);
        return { href: item.href, element };
      });

      // Trouver la section la plus proche du haut de la fenêtre
      let current: string | null = null;
      const scrollPosition = window.scrollY + 150; // Offset pour le header

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

      // Si on est en haut, la section hero est active
      if (window.scrollY < 100) {
        current = "#hero";
      }

      if (current) setActiveSection(current);
    };

    // Throttle pour performance
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
    handleScroll(); // Appel initial
    
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  // Smooth scroll avec offset pour éviter que le header cache le contenu
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = navRef.current?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setIsMobileMenuOpen(false);
    
    // Attendre un peu pour que le menu mobile se ferme si nécessaire
    setTimeout(() => {
      const element = document.querySelector("#contact");
      if (element) {
        const headerHeight = navRef.current?.offsetHeight || 80;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = Math.max(0, elementPosition - headerHeight - 20);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // Fallback : scroll vers le bas de la page
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      }
    }, 100);
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
          style={{
            width: "100%",
          }}
        />
      </motion.div>

      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-transparent py-4"
        }`}
        style={{ top: isScrolled ? "4px" : "0" }}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Branding - À gauche avec glow effect */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-1.5 sm:gap-2 group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Glow effect subtil */}
              <motion.div
                className="absolute -inset-1 sm:-inset-2 bg-primary-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="flex items-center gap-1.5 sm:gap-2 relative z-10">
                <span className="text-lg sm:text-xl md:text-2xl font-bold gradient-text">
                  Mamadou Ndiaye
                </span>
                {/* Indicateur animé amélioré */}
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.div
                    className="w-2 h-2 bg-primary-500 rounded-full"
                    animate={{
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {/* Glow autour du point */}
                  <motion.div
                    className="absolute inset-0 w-2 h-2 bg-primary-400 rounded-full blur-sm"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </div>
            </motion.a>

            {/* Desktop Navigation - À droite */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex items-center gap-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <motion.a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`relative px-4 py-2 text-sm font-medium transition-all group ${
                          isActive
                            ? "text-primary-600"
                            : "text-dark-700 hover:text-primary-600"
                        }`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.3, duration: 0.4 }}
                        whileHover={{ y: -2 }}
                      >
                        {item.label}
                        {/* Soulignement animé au hover */}
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                        {/* Indicateur de section active amélioré */}
                        {isActive && (
                          <motion.span
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500 rounded-full"
                            layoutId="activeSection"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            style={{
                              boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                            }}
                          />
                        )}
                      </motion.a>
                    </li>
                  );
                })}
              </ul>

              {/* Badge de crédibilité "Disponible" */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.05 + 0.3, duration: 0.4 }}
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs font-semibold text-green-700">Disponible</span>
              </motion.div>

              {/* CTA - Me contacter (discret) */}
              <motion.button
                onClick={(e) => scrollToContact(e)}
                type="button"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 border border-primary-300 rounded-lg hover:bg-primary-50 transition-all relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.05 + 0.4, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Mail className="w-4 h-4 relative z-10" />
                <span className="hidden lg:inline relative z-10">Me contacter</span>
                <span className="lg:hidden relative z-10">Contact</span>
              </motion.button>

              {/* Bouton CV (discret) */}
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1X3xTR6LjGTbHd1PpngUsspGHaehx2u0I"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all text-sm shadow-sm hover:shadow-md relative overflow-hidden group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.05 + 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Shine effect au hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Download className="w-4 h-4 relative z-10" />
                <span className="hidden xl:inline relative z-10">Télécharger CV</span>
                <span className="xl:hidden relative z-10">CV</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 text-dark-700 rounded-lg hover:bg-dark-100 transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
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

        {/* Mobile Menu - Amélioré */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-dark-200 shadow-lg overflow-hidden"
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
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;
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
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                          isActive
                            ? "bg-primary-50 text-primary-600 border-l-4 border-primary-600 shadow-sm"
                            : "text-dark-700 hover:text-primary-600 hover:bg-primary-50"
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              
                {/* Badge Disponible Mobile */}
                <motion.li
                  variants={{
                    open: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, delay: navItems.length * 0.05 },
                    },
                    closed: {
                      opacity: 0,
                      x: -20,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="px-4 py-2"
                >
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full w-fit">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-xs font-semibold text-green-700">Disponible pour recrutement</span>
                  </div>
                </motion.li>
              
                {/* CTA Mobile */}
                <motion.li
                  variants={{
                    open: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.3, delay: (navItems.length + 1) * 0.05 },
                    },
                    closed: {
                      opacity: 0,
                      x: -20,
                      transition: { duration: 0.2 },
                    },
                  }}
                  className="pt-2 border-t border-dark-200"
                >
                  <div className="flex flex-col gap-2 px-4">
                    <motion.button
                      onClick={(e) => scrollToContact(e)}
                      type="button"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-all relative overflow-hidden group"
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <Mail className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Me contacter</span>
                    </motion.button>
                    <motion.a
                      href="https://drive.google.com/uc?export=download&id=1X3xTR6LjGTbHd1PpngUsspGHaehx2u0I"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-all relative overflow-hidden group"
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-50/40 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <Download className="w-4 h-4 relative z-10" />
                      <span className="relative z-10">Télécharger CV</span>
                    </motion.a>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
