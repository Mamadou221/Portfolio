"use client";

import { motion } from "framer-motion";
import { skillCategories, levelColors, levelLabels } from "@/data/skills";
import type { Skill } from "@/data/skills";

const levelPercentages = {
  expert: 100,
  advanced: 80,
  intermediate: 60,
  beginner: 40,
};

export default function Skills() {
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

  return (
    <section id="skills" className="section-padding bg-dark-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Une stack technique moderne et des compétences orientées produit,
            organisées par domaines d&apos;expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6 border border-dark-100"
            >
              <h3 className="text-2xl font-bold text-dark-900 mb-2">
                {category.title}
              </h3>
              <p className="text-sm text-dark-600 mb-6">
                {category.description}
              </p>

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-400 rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Stack principale & Positionnement
            </h3>
            <p className="text-base sm:text-lg mb-4 opacity-95">
              <strong>Stack principale :</strong> React, Next.js, TypeScript,
              Node.js, Express, MongoDB
            </p>
            <p className="text-sm sm:text-base opacity-90 leading-relaxed">
              Je me concentre sur ce que je maîtrise vraiment. Pas de buzzwords
              inutiles, juste des compétences éprouvées par des projets concrets
              et une expérience terrain en IT. Mon approche combine expertise
              technique et compréhension business, ce qui me permet de proposer
              des solutions adaptées et fiables.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  const percentage = levelPercentages[skill.level];
  const colorClass = levelColors[skill.level];

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-dark-900">{skill.name}</span>
          {skill.description && (
            <span className="text-xs text-dark-500 hidden sm:inline">
              ({skill.description})
            </span>
          )}
        </div>
        <span className="text-xs font-medium text-dark-600">
          {levelLabels[skill.level]}
        </span>
      </div>
      <div className="w-full bg-dark-100 rounded-full h-2 overflow-hidden">
        <motion.div
          className={`h-full ${colorClass} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

