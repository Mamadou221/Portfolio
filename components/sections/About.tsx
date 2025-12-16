"use client";

import { motion } from "framer-motion";
import { Code2, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Code2,
    title: "Code de qualité",
    description:
      "Je privilégie un code propre, maintenable et bien structuré pour garantir la pérennité des projets.",
  },
  {
    icon: Target,
    title: "Orienté solution",
    description:
      "Je me concentre sur la résolution de problèmes réels plutôt que sur la technologie pour elle-même.",
  },
  {
    icon: Users,
    title: "Expérience utilisateur",
    description:
      "L&apos;utilisateur est au centre de mes préoccupations. Je conçois des interfaces intuitives et accessibles.",
  },
  {
    icon: Lightbulb,
    title: "Innovation continue",
    description:
      "Curieux et autonome, je reste à jour avec les dernières technologies et bonnes pratiques.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">À propos de moi</span>
          </h2>
          <p className="text-lg text-dark-600 leading-relaxed mb-4">
            Développeur Full-Stack junior passionné par le développement web et
            la création de solutions utiles et intuitives. Curieux, autonome et
            orienté solution, je mets à profit mes bases solides en informatique
            pour concevoir des applications modernes avec une attention
            particulière à la qualité du code et à l&apos;expérience utilisateur.
          </p>
          <p className="text-lg text-dark-600 leading-relaxed">
            Mon parcours unique, combinant expérience IT terrain (gestion de
            systèmes, administration de sites web, maintenance) et formation en
            développement web, me permet d&apos;aborder les projets avec une vision
            globale. Je comprends les enjeux techniques et business, ce qui me
            permet de proposer des solutions adaptées et fiables.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gradient-to-br from-white to-primary-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-dark-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-lg">
                  <value.icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-dark-900">
                    {value.title}
                  </h3>
                  <p className="text-dark-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Digital Himma Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Digital Himma
            </h3>
            <p className="text-base sm:text-lg mb-4 opacity-95">
              Co-fondateur d&apos;une initiative pour la création de solutions
              numériques (développement d&apos;applications, conseil IT) pour les
              secteurs de la santé et du commerce.
            </p>
            <p className="text-sm sm:text-base opacity-90">
              <strong>Projet clé :</strong> Max Santé - Application de santé
              pour la gestion des données médicales, services pharmaceutiques et
              don de sang.
            </p>
            <p className="text-xs sm:text-sm mt-4 opacity-85">
              Compétences développées : Leadership, stratégie de développement,
              coordination d&apos;équipe.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

