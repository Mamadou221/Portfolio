"use client";

import { motion } from "framer-motion";
import { ArrowDown, Code, Zap, Target, Download } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";

const highlights = [
  { icon: Code, text: "Solutions web modernes" },
  { icon: Zap, text: "Performance optimisée" },
  { icon: Target, text: "Orienté produit" },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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

  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-primary-50 to-white pt-20"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20"
          animate={{
            x: -mousePosition.x * 0.5,
            y: -mousePosition.y * 0.5,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="text-dark-900">Bonjour, je suis </span>
              <span className="gradient-text">Mamadou Ndiaye</span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-dark-600 mb-3 sm:mb-4 font-medium px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Développeur Full-Stack JavaScript
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-dark-500 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Je construis des solutions web modernes et intuitives qui résolvent
              de vrais problèmes. Passionné par le code de qualité et l&apos;expérience
              utilisateur, je transforme les idées en produits numériques performants.
            </motion.p>

            {/* Highlights */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <highlight.icon className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-medium text-dark-700">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir mes projets
              </motion.button>
              <motion.a
                href="#contact"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all text-sm sm:text-base text-center"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Me contacter
              </motion.a>
              <motion.a
                href="https://drive.google.com/uc?export=download&id=1X3xTR6LjGTbHd1PpngUsspGHaehx2u0I"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-dark-900 text-white rounded-lg font-semibold hover:bg-dark-800 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Télécharger CV</span>
                <span className="sm:hidden">CV</span>
              </motion.a>
            </motion.div>
              </motion.div>
            </div>

            {/* Right: Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating animation container */}
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-10"
                >
                  {/* Photo frame with gradient border */}
                  <div className="relative p-2 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-full">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-white p-1">
                      <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 relative">
                        <Image
                          src="https://media.licdn.com/dms/image/v2/D4E03AQHHS8Ht1JT-hA/profile-displayphoto-shrink_800_800/B4EZR6y0sqHgAg-/0/1737226932101?e=1767225600&v=beta&t=pq30ebIWdQQxd7A3_iz7Pscy520d3kg7FS9ykmpZ1SU"
                          alt="Mamadou Ndiaye"
                          fill
                          className="object-cover"
                          sizes="(max-width: 640px) 256px, 320px"
                          unoptimized
                        />
                      </div>
                    </div>

                    {/* Decorative circles */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-16 h-16 bg-primary-300 rounded-full opacity-60"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 0.8, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary-400 rounded-full opacity-60"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.6, 0.9, 0.6],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToProjects}
            aria-label="Scroll to projects"
            className="flex flex-col items-center gap-2 text-dark-400 hover:text-primary-600 transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span className="text-sm font-medium">Découvrir</span>
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

