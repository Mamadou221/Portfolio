"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Sparkles, CheckCircle2, TrendingUp, Briefcase } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

// Stack technique (micro-valeur)
const techStack = ["React", "Next.js", "Node.js", "TypeScript"];

// Proof points pour recruteurs (éléments de crédibilité)
const proofPoints = [
  { icon: Briefcase, text: "4+ ans IT terrain", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: TrendingUp, text: "Stack moderne", color: "text-green-600", bg: "bg-green-50" },
  { icon: CheckCircle2, text: "Disponible", color: "text-primary-600", bg: "bg-primary-50" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Variantes d'animation pour le texte (réutilisées depuis lib/animations.ts)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-primary-50/40 to-white pt-20"
    >
      {/* Animated background elements - Renforcés */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blobs animés */}
        <motion.div
          className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary-200 rounded-full blur-3xl opacity-25"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.2, 1],
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-80 h-80 sm:w-[500px] sm:h-[500px] bg-primary-300 rounded-full blur-3xl opacity-25"
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
            scale: [1, 1.3, 1],
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        
        {/* Particules subtiles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Mobile: Nom (order-1) */}
            <motion.h1
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight text-center lg:text-left order-1 lg:order-none lg:hidden"
            >
              <span className="text-dark-900 block">Mamadou</span>
              <span className="gradient-text block">Ndiaye</span>
            </motion.h1>

            {/* Mobile: Photo (order-2) - Visible uniquement sur mobile */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="flex justify-center relative order-2 lg:hidden"
            >
              <div className="relative">
                {/* Glow effect renforcé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full blur-3xl opacity-40"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating animation container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -25, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    opacity: { duration: 1, delay: 0.3 },
                    scale: { duration: 1, delay: 0.3, ease: "easeOut" },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative z-10"
                >
                  {/* Photo frame with gradient border */}
                  <div className="relative p-2.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full shadow-2xl">
                    {/* Inner white circle with photo */}
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-white p-1.5 shadow-inner">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        {/* Subtle inner shadow for depth */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/5 to-transparent z-10 pointer-events-none" />
                        
                        {/* Profile photo */}
                        <Image
                          src="https://media.licdn.com/dms/image/v2/D4E03AQHHS8Ht1JT-hA/profile-displayphoto-shrink_800_800/B4EZR6y0sqHgAg-/0/1737226932101?e=1769040000&v=beta&t=F2Sp91G9NYUO78audNONO4EJlmbbUikkqguoGIhgzOM"
                          alt="Photo de Mamadou Ndiaye, développeur full-stack JavaScript"
                          fill
                          className="object-cover object-center rounded-full"
                          sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mobile: Titre (order-3) */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6 order-3 lg:order-none w-full lg:hidden"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-800 text-center">
                Développeur Full-Stack JavaScript
              </h2>
              <span className="px-3 py-1 bg-primary-600 text-white text-xs sm:text-sm font-bold rounded-full">
                VERIFIED
              </span>
            </motion.div>

            {/* Mobile: Contenu restant (order-4) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center w-full order-4 lg:hidden"
            >
              {/* Sous-titre impactant */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-dark-700 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed font-medium"
              >
                Applications web modernes, fiables et orientées{" "}
                <span className="font-bold text-primary-600 relative">
                  solutions réelles
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                </span>
                .
              </motion.p>

              {/* Proof points */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-3 mb-6 sm:mb-8"
              >
                {proofPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 ${point.bg} rounded-full border border-current/20`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <point.icon className={`w-4 h-4 ${point.color}`} />
                    <span className={`text-xs sm:text-sm font-semibold ${point.color}`}>
                      {point.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stack technique */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <span className="text-sm sm:text-base text-dark-500 font-medium">
                  Stack :
                </span>
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-primary-200 rounded-full text-sm sm:text-base font-semibold text-primary-700 shadow-sm hover:shadow-md transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all text-base sm:text-lg overflow-hidden touch-manipulation z-50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Voir mes projets
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  onClick={scrollToContact}
                  className="group relative px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl overflow-hidden touch-manipulation z-50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary-600 text-white text-xs font-bold rounded-full shadow-lg pointer-events-none z-20">
                    RECRUTEMENT
                  </span>
                  <span className="relative z-10">Me contacter</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Left: Text Content (Desktop) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left hidden lg:block"
            >
              {/* Nom avec animation stagger */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight"
              >
                <span className="text-dark-900 block">Mamadou</span>
                <span className="gradient-text block">Ndiaye</span>
              </motion.h1>

              {/* Sous-titre impactant - Renforcé */}
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-dark-700 mb-4 sm:mb-6 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
              >
                Applications web modernes, fiables et orientées{" "}
                <span className="font-bold text-primary-600 relative">
                  solutions réelles
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-primary-400 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  />
                </span>
                .
              </motion.p>

              {/* Proof points - Nouveaux pour crédibilité recruteur */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-8"
              >
                {proofPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`flex items-center gap-2 px-3 py-1.5 ${point.bg} rounded-full border border-current/20`}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <point.icon className={`w-4 h-4 ${point.color}`} />
                    <span className={`text-xs sm:text-sm font-semibold ${point.color}`}>
                      {point.text}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Micro-valeur : Stack technique */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12"
              >
                <span className="text-sm sm:text-base text-dark-500 font-medium">
                  Stack :
                </span>
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 1.1 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className="px-4 py-2 bg-white/90 backdrop-blur-sm border border-primary-200 rounded-full text-sm sm:text-base font-semibold text-primary-700 shadow-sm hover:shadow-md transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* CTA Buttons - Ultra-renforcés pour recruteurs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  onClick={scrollToProjects}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all text-base sm:text-lg overflow-hidden touch-manipulation z-50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    Voir mes projets
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  onClick={scrollToContact}
                  className="group relative px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-all text-base sm:text-lg shadow-lg hover:shadow-xl overflow-hidden touch-manipulation z-50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ WebkitTapHighlightColor: "transparent" }}
                >
                  {/* Badge "Recrutement" */}
                  <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-primary-600 text-white text-xs font-bold rounded-full shadow-lg pointer-events-none z-20">
                    RECRUTEMENT
                  </span>
                  
                  <span className="relative z-10">Me contacter</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Photo - Desktop uniquement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
              className="hidden lg:flex lg:justify-end relative"
            >
              <div className="relative">
                {/* Glow effect renforcé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full blur-3xl opacity-40"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating animation container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -25, 0],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    opacity: { duration: 1, delay: 0.3 },
                    scale: { duration: 1, delay: 0.3, ease: "easeOut" },
                    y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="relative z-10"
                >
                  {/* Photo frame with gradient border */}
                  <div className="relative p-2.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full shadow-2xl">
                    {/* Inner white circle with photo */}
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-white p-1.5 shadow-inner">
                      <div className="w-full h-full rounded-full overflow-hidden relative">
                        {/* Subtle inner shadow for depth */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/5 to-transparent z-10 pointer-events-none" />
                        
                        {/* Profile photo */}
                        <Image
                          src="https://media.licdn.com/dms/image/v2/D4E03AQHHS8Ht1JT-hA/profile-displayphoto-shrink_800_800/B4EZR6y0sqHgAg-/0/1737226932101?e=1769040000&v=beta&t=F2Sp91G9NYUO78audNONO4EJlmbbUikkqguoGIhgzOM"
                          alt="Photo de Mamadou Ndiaye, développeur full-stack JavaScript"
                          fill
                          className="object-cover object-center rounded-full"
                          sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                          priority
                          unoptimized
                        />
                        
                        {/* Subtle halo effect */}
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/30 z-10 pointer-events-none" />
                      </div>
                    </div>

                    {/* Decorative elements - Renforcés */}
                    <motion.div
                      className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-20 sm:h-20 bg-primary-300 rounded-full opacity-70 shadow-xl"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 0.9, 0.7],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-primary-400 rounded-full opacity-70 shadow-xl"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 1, 0.7],
                        rotate: [0, -180, -360],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                    
                    {/* Sparkles décoratifs */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        style={{
                          top: `${20 + i * 30}%`,
                          left: i % 2 === 0 ? "-10%" : "110%",
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.7,
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-primary-500" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - Amélioré */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.button
            onClick={scrollToProjects}
            aria-label="Scroll to projects"
            className="flex flex-col items-center gap-1 sm:gap-2 text-dark-400 hover:text-primary-600 transition-colors group touch-manipulation relative z-20"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <span className="text-xs sm:text-sm font-medium">Découvrir</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:text-primary-600" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
