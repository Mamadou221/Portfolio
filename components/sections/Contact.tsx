"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Github, Send, CheckCircle2, ArrowRight, Clock, Zap, Briefcase } from "lucide-react";
import { useState } from "react";

const directContactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mamadou-ndiaye-3122171b6/",
    text: "Me contacter sur LinkedIn",
    description: "Canal préféré des recruteurs tech",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    hoverBg: "hover:bg-blue-100",
    borderColor: "border-blue-300",
    priority: true, // Mise en avant pour recruteurs
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:itech.ndiaye@gmail.com",
    text: "itech.ndiaye@gmail.com",
    description: "Réponse sous 24h",
    color: "text-primary-600",
    bgColor: "bg-primary-50",
    hoverBg: "hover:bg-primary-100",
    borderColor: "border-primary-300",
    priority: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Mamadou221",
    text: "Voir mes projets",
    description: "Portfolio de code",
    color: "text-dark-900",
    bgColor: "bg-dark-50",
    hoverBg: "hover:bg-dark-100",
    borderColor: "border-dark-200",
    priority: false,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 1000);
  };

  // Séparer les liens prioritaires et secondaires
  const priorityLinks = directContactLinks.filter(link => link.priority);
  const secondaryLinks = directContactLinks.filter(link => !link.priority);

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* En-tête optimisé pour recruteurs et freelances */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Recrutement & Missions Freelance</span>
          </h2>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto mb-4">
            Disponible immédiatement pour des opportunités tech et projets freelance
          </p>
          
          {/* Badge de disponibilité */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-2"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-green-700">Disponible maintenant</span>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-dark-500 flex items-center justify-center gap-2"
          >
            <Clock className="w-4 h-4" />
            Réponse sous 24h
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Colonne gauche - Message optimisé */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-8">
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-dark-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Pourquoi me contacter ?
              </motion.h3>
              
              {/* Points de valeur pour recruteurs et freelances */}
              <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="p-1.5 sm:p-2 bg-primary-100 rounded-lg mt-0.5 flex-shrink-0">
                    <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-900 mb-1">Stack moderne & recherchée</p>
                    <p className="text-xs sm:text-sm text-dark-600">
                      React, Next.js, TypeScript, Node.js, MongoDB - Stack alignée avec les besoins du marché
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="p-1.5 sm:p-2 bg-green-100 rounded-lg mt-0.5 flex-shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-base text-dark-900 mb-1">Réactivité & Autonomie</p>
                    <p className="text-xs sm:text-sm text-dark-600">
                      Expérience terrain IT + formation dev. Orienté solution et livraison rapide
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Boutons de contact direct - LinkedIn et Email en priorité */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-xs sm:text-sm font-semibold text-dark-700 mb-3 sm:mb-4">
                Contactez-moi directement :
              </p>
              
              {/* Liens prioritaires (LinkedIn, Email) */}
              {priorityLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-2 ${link.borderColor} ${link.bgColor} ${link.hoverBg} transition-all group relative overflow-hidden`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Badge "Recommandé" pour LinkedIn */}
                  {link.label === "LinkedIn" && (
                    <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 px-1.5 sm:px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full">
                      RECOMMANDÉ
                    </div>
                  )}
                  
                  <div className={`p-2 sm:p-3 rounded-lg bg-white ${link.color} shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0`}>
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-dark-600">{link.label}</p>
                    <p className="text-dark-900 font-semibold text-xs sm:text-sm break-words">{link.text}</p>
                    {link.description && (
                      <p className="text-xs text-dark-500 mt-0.5 sm:mt-1">{link.description}</p>
                    )}
                  </div>
                  <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 text-dark-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0`} />
                </motion.a>
              ))}

              {/* Liens secondaires (GitHub) */}
              {secondaryLinks.length > 0 && (
                <div className="pt-1 sm:pt-2">
                  {secondaryLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg border ${link.borderColor} ${link.bgColor} ${link.hoverBg} transition-all group`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.01, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <link.icon className={`w-4 h-4 ${link.color} flex-shrink-0`} />
                      <span className="text-xs sm:text-sm font-medium text-dark-700">{link.text}</span>
                    </motion.a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Colonne droite - Formulaire optimisé */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-dark-100 p-4 sm:p-6 md:p-8 relative">
              {/* Badge "Rapide" sur le formulaire */}
              <div className="absolute -top-2 sm:-top-3 right-4 sm:right-6 px-2 sm:px-3 py-0.5 sm:py-1 bg-primary-600 text-white text-xs font-bold rounded-full shadow-lg">
                Formulaire rapide
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4"
                    >
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold text-dark-900 mb-2">
                      Message envoyé !
                    </h3>
                    <p className="text-sm sm:text-base text-dark-600 mb-2">
                      Je vous répondrai dans les plus brefs délais.
                    </p>
                    <p className="text-xs sm:text-sm text-primary-600 font-medium">
                      Réponse sous 24h garantie
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs sm:text-sm font-semibold text-dark-900 mb-1.5 sm:mb-2"
                      >
                        Nom / Entreprise
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all bg-white text-sm sm:text-base"
                        placeholder="Votre nom ou entreprise"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs sm:text-sm font-semibold text-dark-900 mb-1.5 sm:mb-2"
                      >
                        Email professionnel
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all bg-white text-sm sm:text-base"
                        placeholder="votre.email@entreprise.com"
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-semibold text-dark-900 mb-1.5 sm:mb-2"
                      >
                        Parlez-moi de votre projet
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-dark-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none bg-white text-sm sm:text-base"
                        placeholder="Poste à pourvoir, mission freelance, collaboration..."
                        whileFocus={{ scale: 1.01 }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, y: -2 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Envoi en cours...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          <span>Envoyer ma demande</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-center text-dark-500">
                      <Clock className="w-3 h-3 inline mr-1" />
                      Réponse garantie sous 24h
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
