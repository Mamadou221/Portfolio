"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/experience";
import type { Experience } from "@/data/experience";
import { companyLogos, experienceKeywords } from "@/data/companyLogos";
import Image from "next/image";
import { useState } from "react";

// Composant ExperienceCard réutilisable
function ExperienceCard({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const logo = companyLogos[exp.company] || null;
  const keywords = experienceKeywords[exp.id] || ["Responsabilité", "Autonomie", "Fiabilité"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 rounded-2xl opacity-0 blur-xl transition-opacity duration-500"
        animate={{
          opacity: isHovered ? 0.4 : 0,
        }}
      />

      {/* Main card */}
      <motion.div
        className="relative bg-white rounded-2xl border-2 border-dark-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Header with logo */}
        <div className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 p-4 sm:p-6 border-b border-dark-100">
          {/* Company logo */}
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            {logo && !imageError ? (
              <motion.div
                className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Glow around logo on hover */}
                <motion.div
                  className="absolute inset-0 bg-primary-200 rounded-xl blur-xl opacity-0"
                  animate={{
                    opacity: isHovered ? 0.6 : 0,
                  }}
                />
                <div className="relative w-full h-full bg-white rounded-xl p-2 sm:p-3 shadow-md border border-dark-100 flex items-center justify-center">
                  <Image
                    src={logo.url}
                    alt={logo.alt}
                    fill
                    className="object-contain p-1.5 sm:p-2"
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">
                  {logo?.fallback || exp.company.charAt(0)}
                </span>
              </motion.div>
            )}
          </div>

          {/* Job title */}
          <motion.h3
            className="text-lg sm:text-xl md:text-2xl font-bold text-dark-900 text-center mb-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            {exp.title}
          </motion.h3>

          {/* Company name */}
          <motion.p
            className="text-primary-600 font-semibold text-center text-xs sm:text-sm md:text-base mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            {exp.company}
          </motion.p>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          {/* Location & Period */}
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-sm text-dark-600"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
              <span className="break-words">{exp.location}</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-xs sm:text-sm text-dark-600"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + index * 0.1 }}
            >
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary-500 flex-shrink-0" />
              <span className="font-medium">{exp.period}</span>
            </motion.div>
          </div>

          {/* Keywords - Visual badges */}
          <div className="mb-4 sm:mb-6">
            <motion.div
              className="flex flex-wrap gap-1.5 sm:gap-2 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              {keywords.map((keyword, keyIndex) => (
                <motion.span
                  key={keyword}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + index * 0.1 + keyIndex * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-primary-50 to-primary-100 text-primary-700 rounded-full text-xs font-semibold border border-primary-200 shadow-sm"
                >
                  {keyword}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Key achievement - One line only */}
          <motion.div
            className="mt-auto pt-3 sm:pt-4 border-t border-dark-100"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <div className="flex items-start gap-1.5 sm:gap-2">
              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary-600 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-dark-600 leading-relaxed line-clamp-2">
                {exp.impact.split(".")[0]}.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const professionalExperiences = experiences.filter(
    (exp) => exp.type === "professional" || exp.type === "internship"
  );

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary-200 rounded-full blur-3xl opacity-20"
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
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-20"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Expérience Professionnelle</span>
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Un parcours marqué par la{" "}
            <span className="font-semibold text-primary-600">responsabilité</span> et l&apos;
            <span className="font-semibold text-primary-600">autonomie</span>
          </motion.p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {professionalExperiences.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* CTA to CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 sm:mt-12"
        >
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1X3xTR6LjGTbHd1PpngUsspGHaehx2u0I"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Voir le CV complet</span>
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
