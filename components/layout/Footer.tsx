"use client";

import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Compétences", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Mamadou221",
    ariaLabel: "Visiter mon profil GitHub",
    color: "hover:text-gray-900",
    bgColor: "hover:bg-gray-100",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mamadou-ndiaye-3122171b6/",
    ariaLabel: "Visiter mon profil LinkedIn",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:itech.ndiaye@gmail.com",
    ariaLabel: "M&apos;envoyer un email",
    color: "hover:text-primary-600",
    bgColor: "hover:bg-primary-50",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Animation du fond basée sur le scroll
  const backgroundOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - headerHeight - 20);

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Variantes d'animation pour les sections
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  return (
    <>
      <footer className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-hidden">
        {/* Bordure supérieure avec gradient animé - Touche premium */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"
        />
        
        {/* Effet de lumière subtile en haut */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-primary-400/20 blur-2xl"
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Background decoration animé */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mesh gradient subtil pour texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent_50%)]" />
          
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl opacity-10"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          
          {/* Particules subtiles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-20"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.7,
              }}
            />
          ))}
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 mb-12 sm:mb-16"
          >
            {/* Branding */}
            <motion.div variants={itemVariants} className="lg:col-span-1 relative group">
              {/* Glow effect subtil au hover */}
              <motion.div
                className="absolute -inset-4 bg-primary-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
              
              <motion.h3
                className="relative text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
                Mamadou Ndiaye
              </motion.h3>
              <p className="text-dark-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                Développeur Full-Stack JavaScript
              </p>
              <p className="text-dark-400 text-xs leading-relaxed">
                Applications web modernes, fiables et orientées solutions réelles.
              </p>
            </motion.div>

            {/* Navigation rapide */}
            <motion.div variants={itemVariants}>
              <motion.h4
                className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white relative inline-block group/title"
                whileHover={{ scale: 1.02 }}
              >
                Navigation
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="text-dark-300 hover:text-primary-400 transition-colors text-xs sm:text-sm flex items-center gap-2 group relative"
                      whileHover={{ x: 4 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                      />
                      {item.label}
                      {/* Glow effect subtil */}
                      <motion.span
                        className="absolute left-0 right-0 -bottom-0.5 h-px bg-primary-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <motion.h4
                className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white relative inline-block group/title"
                whileHover={{ scale: 1.02 }}
              >
                Contact
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <ul className="space-y-2 sm:space-y-3">
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <a
                    href="mailto:itech.ndiaye@gmail.com"
                    className="text-dark-300 hover:text-primary-400 transition-colors text-xs sm:text-sm flex items-center gap-2 sm:gap-3 group break-words"
                  >
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span className="break-all">itech.ndiaye@gmail.com</span>
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <a
                    href="https://github.com/Mamadou221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-primary-400 transition-colors text-xs sm:text-sm flex items-center gap-2 sm:gap-3 group"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="https://www.linkedin.com/in/mamadou-ndiaye-3122171b6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark-300 hover:text-primary-400 transition-colors text-xs sm:text-sm flex items-center gap-2 sm:gap-3 group"
                  >
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform flex-shrink-0" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                </motion.li>
              </ul>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div variants={itemVariants}>
              <motion.h4
                className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white relative inline-block group/title"
                whileHover={{ scale: 1.02 }}
              >
                Réseaux sociaux
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.h4>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 sm:gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 bg-dark-800/50 backdrop-blur-sm rounded-lg border border-dark-700 ${social.color} ${social.bgColor} transition-all group relative overflow-hidden`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Shine effect amélioré */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Glow effect au hover */}
                    <motion.div
                      className="absolute inset-0 bg-primary-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur-sm"
                      initial={false}
                    />
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:rotate-6 transition-transform group-hover:scale-110 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium relative z-10">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Séparateur amélioré avec glow */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />
            {/* Glow effect au centre */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-primary-500/30 blur-sm"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleX: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Signature / Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          >
            <p className="text-dark-400 text-sm">
              © {currentYear} Mamadou Ndiaye. Tous droits réservés.
            </p>
            <motion.p
              className="text-dark-500 text-xs flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Conçu et développé avec{" "}
              <motion.span
                className="text-primary-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ❤️
              </motion.span>{" "}
              par Mamadou Ndiaye
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll to Top Button - Amélioré */}
        <motion.button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all ${
            showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
          }`}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: showScrollTop ? 1 : 0,
            scale: showScrollTop ? 1 : 0,
          }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          aria-label="Retour en haut"
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
          {/* Glow effect amélioré */}
          <motion.div
            className="absolute inset-0 bg-primary-400 rounded-full blur-xl opacity-50 -z-10"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </footer>
    </>
  );
}
