"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { useState, useRef } from "react";
import { getTechIcon } from "@/data/techIcons";

const categoryColors = {
  fullstack: {
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    glow: "rgba(168, 85, 247, 0.4)",
    border: "border-purple-200",
  },
  frontend: {
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    glow: "rgba(59, 130, 246, 0.4)",
    border: "border-blue-200",
  },
  backend: {
    gradient: "from-green-500 via-emerald-500 to-green-600",
    glow: "rgba(34, 197, 94, 0.4)",
    border: "border-green-200",
  },
  api: {
    gradient: "from-orange-500 via-red-500 to-orange-600",
    glow: "rgba(249, 115, 22, 0.4)",
    border: "border-orange-200",
  },
};

const categoryLabels = {
  fullstack: "Full-Stack",
  frontend: "Frontend",
  backend: "Backend",
  api: "API",
};

// Composant ProjectCard réutilisable
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const colors = categoryColors[project.category];
  const shortDescription = project.description.split(".")[0] || project.description;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${colors.gradient} opacity-0 blur-xl transition-opacity duration-500`}
        animate={{
          opacity: isHovered ? 0.6 : 0,
        }}
      />

      {/* Main card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative bg-white rounded-2xl border-2 border-dark-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col"
      >
        {/* Category badge - Top */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${colors.gradient} shadow-lg`}
            whileHover={{ scale: 1.1 }}
          >
            {categoryLabels[project.category]}
          </motion.div>
        </div>

        {/* Gradient header */}
        <div
          className={`h-32 bg-gradient-to-r ${colors.gradient} relative overflow-hidden`}
        >
          {/* Animated background pattern */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />

          {/* Project title overlay */}
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {project.title}
            </motion.h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          {/* Short description / Keywords */}
          <motion.p
            className="text-xs sm:text-sm text-dark-600 mb-4 sm:mb-6 line-clamp-2 min-h-[2.5rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {shortDescription}
          </motion.p>

          {/* Tech stack - Icons only */}
          <div className="mb-4 sm:mb-6">
            <motion.div
              className="flex flex-wrap gap-1.5 sm:gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {project.stack.slice(0, 6).map((tech, techIndex) => {
                const techIcon = getTechIcon(tech);
                const Icon = techIcon.icon;
                return (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + techIndex * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`p-1.5 sm:p-2 rounded-lg ${techIcon.bgColor} ${techIcon.color} transition-all cursor-default`}
                    title={tech}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </motion.div>
                );
              })}
              {project.stack.length > 6 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="p-1.5 sm:p-2 rounded-lg bg-dark-100 text-dark-600 text-xs font-medium flex items-center justify-center"
                >
                  +{project.stack.length - 6}
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-auto flex gap-2 sm:gap-3">
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-gradient-to-r ${colors.gradient} text-white shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-dark-900 text-white hover:bg-dark-800 shadow-lg"
              whileHover={{ scale: 1.05, y: -2, x: 2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 }}
            >
              <span>Voir</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<
    Project["category"] | "all"
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white via-dark-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-200 rounded-full blur-3xl opacity-10"
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
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full blur-3xl opacity-10"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">Mes projets</span>
          </motion.h2>
          <motion.p
            className="text-lg text-dark-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Des solutions qui résolvent de vrais problèmes
          </motion.p>
        </motion.div>

        {/* Category Filter - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {(["all", "fullstack", "frontend", "backend", "api"] as const).map(
            (category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium text-xs sm:text-sm transition-all ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${categoryColors[category === "all" ? "fullstack" : category].gradient} text-white shadow-lg`
                    : "bg-white text-dark-700 hover:bg-dark-100 border border-dark-200"
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
        {filteredProjects.length > 0 ? (
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-dark-600 text-lg">
              Aucun projet dans cette catégorie.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
