"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const professionalExperiences = experiences.filter(
    (exp) => exp.type === "professional" || exp.type === "internship"
  );

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Expérience Professionnelle</span>
          </h2>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Un aperçu de mon parcours. Pour plus de détails, consultez mon{" "}
            <a
              href="https://drive.google.com/uc?export=download&id=1X3xTR6LjGTbHd1PpngUsspGHaehx2u0I"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-semibold underline"
            >
              CV
            </a>
            .
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {professionalExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-white to-primary-50 rounded-2xl p-6 border border-dark-100 hover:border-primary-300 transition-all duration-300 hover:shadow-xl"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/30 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-100 rounded-xl group-hover:bg-primary-200 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary-600" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-dark-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">{exp.company}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-dark-600">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-600">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-dark-100">
                  <p className="text-xs text-dark-500 line-clamp-2">
                    {exp.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

