"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Mamadou221",
    ariaLabel: "Visiter mon profil GitHub",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mamadou-ndiaye-3122171b6/",
    ariaLabel: "Visiter mon profil LinkedIn",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:itech.ndiaye@gmail.com",
    ariaLabel: "M'envoyer un email",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  return (
    <>
      <footer className="bg-white border-t border-dark-100/50">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-0">
            {/* Copyright */}
            <p className="text-xs text-dark-400">
              © {currentYear} Mamadou Ndiaye
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={social.ariaLabel}
                  className="text-dark-400 hover:text-dark-600 transition-colors touch-manipulation relative z-10 p-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all touch-manipulation ${
          showScrollTop ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-0 pointer-events-none"
        }`}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
        aria-label="Retour en haut"
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </>
  );
}
