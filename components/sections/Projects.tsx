"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { useState } from "react";

const categoryColors = {
  fullstack: "from-purple-500 to-pink-500",
  frontend: "from-blue-500 to-cyan-500",
  backend: "from-green-500 to-emerald-500",
  api: "from-orange-500 to-red-500",
};

const categoryLabels = {
  fullstack: "Full-Stack",
  frontend: "Frontend",
  backend: "Backend",
  api: "API",
};

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    Project["category"] | "all"
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-dark-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Mes projets</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-2xl mx-auto">
            Une sélection de projets qui démontrent mes compétences techniques
            et mon approche orientée solution
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {(["all", "fullstack", "frontend", "backend", "api"] as const).map(
            (category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white text-dark-700 hover:bg-dark-100"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  scale: selectedCategory === category ? 1.05 : 1,
                }}
              >
                {category === "all" ? "Tous" : categoryLabels[category]}
              </motion.button>
            )
          )}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-dark-100"
            >
              {/* Project Header */}
              <div
                className={`h-2 bg-gradient-to-r ${categoryColors[project.category]}`}
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-5 h-5 text-primary-600" />
                      <span className="text-xs font-semibold text-primary-600 uppercase">
                        {categoryLabels[project.category]}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-dark-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-dark-600 mb-4">{project.description}</p>
                  </div>
                </div>

                {/* Problem Context */}
                <div className="bg-dark-50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-dark-700 font-medium mb-1">
                    Contexte du problème :
                  </p>
                  <p className="text-sm text-dark-600">{project.problem}</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-dark-900 mb-2">
                    Fonctionnalités clés :
                  </p>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-sm text-dark-600 flex items-start gap-2"
                      >
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stack */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-dark-900 mb-2">
                    Stack technique :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Learnings & Business Value */}
                <div className="space-y-3 mb-6">
                  <div>
                    <p className="text-sm font-semibold text-dark-900 mb-1">
                      Ce que j&apos;ai appris :
                    </p>
                    <p className="text-sm text-dark-600">{project.learnings}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-dark-900 mb-1">
                      Valeur métier :
                    </p>
                    <p className="text-sm text-dark-600">
                      {project.businessValue}
                    </p>
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-dark-900 text-white rounded-lg hover:bg-dark-800 transition-colors text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    Code source
                  </motion.a>
                </div>
              </div>
            </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-dark-600 text-lg">
                Aucun projet trouvé dans cette catégorie.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}

