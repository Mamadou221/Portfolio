"use client";

import { motion } from "framer-motion";
import { Code2, Server, Target, Zap, Brain, TrendingUp, Quote } from "lucide-react";

// Mots-clés à mettre en valeur avec animation
const highlightedKeywords = [
  "Full-Stack",
  "JavaScript",
  "solutions utiles",
  "expérience terrain",
  "autonomie",
  "orienté solution",
  "vision globale",
  "production",
];

// Composant pour animer les mots-clés
function HighlightedText({ text }: { text: string }) {
  const words = text.split(" ");
  
  return (
    <>
      {words.map((word, index) => {
        const isKeyword = highlightedKeywords.some(
          (keyword) => word.toLowerCase().includes(keyword.toLowerCase())
        );
        
        if (isKeyword) {
          return (
            <motion.span
              key={index}
              className="inline-block font-semibold text-primary-600 relative"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3 + index * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                color: "var(--primary-700)",
              }}
            >
              {word}
              <motion.span
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5 + index * 0.05,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />
            </motion.span>
          );
        }
        
        return <span key={index}>{word} </span>;
      })}
    </>
  );
}

// Points de différenciation renforcés
const differentiators = [
  {
    icon: Server,
    label: "Expérience terrain IT",
    description: "4+ ans de gestion de systèmes critiques en production",
    stat: "Systèmes critiques",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Target,
    label: "Orienté solution",
    description: "Résolution de problèmes réels, pas de code pour le code",
    stat: "Vision produit",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Brain,
    label: "Vision globale",
    description: "Compréhension technique + business pour des solutions adaptées",
    stat: "Tech + Business",
    color: "from-purple-500 to-purple-600",
  },
];

// Philosophie / Approche
const philosophy = {
  quote: "Le code n'est qu'un moyen. L'objectif, c'est de résoudre un problème réel.",
  points: [
    {
      icon: TrendingUp,
      text: "Je privilégie la simplicité et la maintenabilité sur la complexité technique",
    },
    {
      icon: Code2,
      text: "Chaque ligne de code doit avoir un impact mesurable sur le produit final",
    },
    {
      icon: Zap,
      text: "L'autonomie et la prise de décision sont essentielles pour livrer rapidement",
    },
  ],
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-white via-dark-50/50 to-white relative overflow-hidden">
      {/* Background decoration subtil */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* En-tête avec quote signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">À propos de moi</span>
          </h2>
          
          {/* Quote signature - Élément mémorable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl">
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 absolute -top-2 -left-2 sm:-top-4 sm:-left-4 text-primary-300 opacity-50" />
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic leading-relaxed relative z-10">
                {philosophy.quote}
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-primary-100 text-sm">
                <div className="w-8 h-0.5 bg-primary-300" />
                <span className="font-semibold">Mon approche</span>
                <div className="w-8 h-0.5 bg-primary-300" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Texte principal - Renforcé avec plus de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-16"
        >
            <div className="bg-white rounded-2xl shadow-lg border border-dark-100 p-6 sm:p-8 md:p-12 relative overflow-hidden">
              {/* Accent décoratif renforcé */}
              <div className="absolute top-0 left-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-primary-500 via-primary-600 to-primary-500" />
              
              <div className="pl-4 sm:pl-6 md:pl-8">
              <motion.p
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-dark-800 leading-relaxed mb-4 sm:mb-6 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <HighlightedText text="Développeur Full-Stack JavaScript, je conçois des applications web pensées pour résoudre de vrais besoins métier." />
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-dark-700 leading-relaxed mb-4 sm:mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Mon parcours en <span className="font-semibold text-dark-900">informatique</span> et en{" "}
                <span className="font-semibold text-dark-900">gestion de systèmes</span> m&apos;a appris la{" "}
                <span className="font-semibold text-primary-600">rigueur</span>, l&apos;{" "}
                <span className="font-semibold text-primary-600">autonomie</span> et l&apos;impact du code en{" "}
                <span className="font-semibold text-primary-600">production</span>.
              </motion.p>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-dark-700 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                Cette <span className="font-semibold text-dark-900">expérience terrain</span> combinée à une formation moderne en développement me permet d&apos;aborder chaque projet avec une{" "}
                <span className="font-semibold text-primary-600">vision globale</span> : je comprends les enjeux techniques et business, ce qui me permet de proposer des{" "}
                <span className="font-semibold text-primary-600">solutions adaptées et fiables</span>.
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Points de différenciation renforcés avec stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 border-2 border-dark-100 hover:border-primary-300 hover:shadow-lg transition-all group relative overflow-hidden"
            >
              {/* Gradient accent au hover */}
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}
              />
              
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className={`p-4 bg-gradient-to-br ${item.color} rounded-xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                {/* Stat badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.color} text-white text-xs font-bold mb-3`}>
                  {item.stat}
                </div>
                
                <h3 className="text-lg font-bold text-dark-900 mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-dark-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophie de développement - Nouveau */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-2xl p-6 sm:p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Pattern subtil */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 flex-shrink-0" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Philosophie de développement
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {philosophy.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="p-2 bg-primary-600/20 rounded-lg mt-0.5 flex-shrink-0">
                      <point.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400" />
                    </div>
                    <p className="text-sm sm:text-base md:text-lg text-dark-200 leading-relaxed flex-1">
                      {point.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Digital Himma - Renforcée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-4 sm:p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            {/* Pattern subtil */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                  Digital Himma
                </h3>
                <span className="ml-auto px-2 sm:px-3 py-1 bg-white/20 rounded-full text-xs font-bold">
                  Leadership
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base opacity-95 leading-relaxed mb-2 sm:mb-3">
                Co-fondateur d&apos;une initiative pour la création de solutions numériques (développement d&apos;applications, conseil IT) pour les secteurs de la santé et du commerce.
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                <strong>Projet clé :</strong> Max Santé - Application de santé pour la gestion des données médicales, services pharmaceutiques et don de sang.
              </p>
              <p className="text-xs mt-2 sm:mt-3 opacity-85 italic">
                Compétences développées : Leadership, stratégie de développement, coordination d&apos;équipe.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
