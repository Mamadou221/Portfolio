"use client";

import { Github, Linkedin, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
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
    href: "https://linkedin.com/in/mamadou-ndiaye-3122171b6",
    ariaLabel: "Visiter mon profil LinkedIn",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:itech.ndiaye@gmail.com",
    ariaLabel: "M&apos;envoyer un email",
  },
];

const contactInfo = [
  {
    icon: Mail,
    text: "itech.ndiaye@gmail.com",
    href: "mailto:itech.ndiaye@gmail.com",
  },
  {
    icon: Phone,
    text: "+221 778452214",
    href: "tel:+221778452214",
  },
  {
    icon: MapPin,
    text: "Parcelles Assainies unité 7, Villa 184, Dakar",
    href: null,
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
    <footer className="bg-dark-900 text-white section-padding relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mamadou Ndiaye</h3>
            <p className="text-dark-300 text-sm leading-relaxed">
              Développeur Full-Stack passionné par la création de solutions web
              modernes et intuitives. Orienté produit et solution réelle.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <info.icon className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-dark-300 hover:text-primary-400 transition-colors text-sm"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-dark-300 text-sm">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="p-3 bg-dark-800 rounded-lg hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-800 pt-8 text-center">
          <p className="text-dark-400 text-sm">
            © {currentYear} Mamadou Ndiaye. Tous droits réservés.
          </p>
          <p className="text-dark-500 text-xs mt-2">
            Conçu et développé avec ❤️ par Mamadou Ndiaye
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 transition-all ${
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-0 pointer-events-none"
        }`}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
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
          <ArrowUp className="w-6 h-6" />
        </motion.div>
        {/* Glow effect */}
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
  );
}

