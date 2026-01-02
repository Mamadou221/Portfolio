"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { getTechIcon } from "@/data/techIcons";
import { useState, useRef } from "react";
import { CheckCircle2, Star, Zap } from "lucide-react";
import type { Skill } from "@/data/skills";

// Stack principale mise en avant (pour recruteurs GitHub/startups)
const coreStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
];

// Couleurs de catégories pour les accents visuels
const categoryColors = {
  frontend: {
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    glow: "rgba(59, 130, 246, 0.3)",
    border: "border-blue-200",
    bg: "bg-blue-50",
  },
  backend: {
    gradient: "from-green-500 via-emerald-500 to-green-600",
    glow: "rgba(34, 197, 94, 0.3)",
    border: "border-green-200",
    bg: "bg-green-50",
  },
  database: {
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    glow: "rgba(168, 85, 247, 0.3)",
    border: "border-purple-200",
    bg: "bg-purple-50",
  },
  tools: {
    gradient: "from-orange-500 via-amber-500 to-orange-600",
    glow: "rgba(249, 115, 22, 0.3)",
    border: "border-orange-200",
    bg: "bg-orange-50",
  },
  soft: {
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    glow: "rgba(236, 72, 153, 0.3)",
    border: "border-pink-200",
    bg: "bg-pink-50",
  },
};

// Badge de niveau avec couleurs distinctes
function LevelBadge({ level }: { level: Skill["level"] }) {
  const levelConfig = {
    expert: {
      label: "Expert",
      className: "bg-green-100 text-green-700 border-green-300",
      icon: Star,
    },
    advanced: {
      label: "Avancé",
      className: "bg-blue-100 text-blue-700 border-blue-300",
      icon: CheckCircle2,
    },
    intermediate: {
      label: "Intermédiaire",
      className: "bg-yellow-100 text-yellow-700 border-yellow-300",
      icon: Zap,
    },
    beginner: {
      label: "Débutant",
      className: "bg-gray-100 text-gray-700 border-gray-300",
      icon: null,
    },
  };

  const config = levelConfig[level];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${config.className}`}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {config.label}
    </span>
  );
}

// Composant SkillCard avec animations 3D
function SkillCard({
  skill,
  categoryId,
  index,
  isCoreStack = false,
}: {
  skill: Skill;
  categoryId: string;
  index: number;
  isCoreStack?: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const rotateXValue = (mouseY / height - 0.5);
    const rotateYValue = (mouseX / width - 0.5);

    x.set(rotateYValue);
    y.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const techIcon = getTechIcon(skill.name);
  const colors = categoryColors[categoryId as keyof typeof categoryColors] || categoryColors.frontend;

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.8, 0.2, 1],
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      ref={cardRef}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Glow effect dynamique */}
      <motion.div
        className="absolute inset-0 rounded-xl -z-10"
        style={{
          background: `radial-gradient(circle at var(--x) var(--y), ${colors.glow} 0%, transparent 50%)`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.6 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${
          isCoreStack ? "border-primary-400 shadow-primary-200" : colors.border
        } p-3 sm:p-4 md:p-5 cursor-pointer relative`}
        whileHover={{
          scale: 1.05,
          y: -4,
          boxShadow: isCoreStack
            ? "0 20px 25px -5px rgba(14, 165, 233, 0.2), 0 10px 10px -5px rgba(14, 165, 233, 0.1)"
            : "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
        }}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Badge "Core Stack" pour les technologies principales */}
        {isCoreStack && (
          <div className="absolute top-2 right-2 z-10">
            <span className="px-2 py-0.5 bg-primary-600 text-white text-xs font-bold rounded-full">
              CORE
            </span>
          </div>
        )}

        <div className="flex flex-col items-center text-center gap-2 sm:gap-3" style={{ transform: "translateZ(20px)" }}>
          {/* Icône avec animation */}
          <motion.div
            className={`p-2 sm:p-3 md:p-4 rounded-xl ${techIcon.bgColor} relative`}
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <techIcon.icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${techIcon.color}`} />
            {/* Pulse effect on hover */}
            {isHovered && (
              <motion.div
                className={`absolute inset-0 rounded-xl ${techIcon.bgColor}`}
                initial={{ scale: 1, opacity: 0.5 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            )}
          </motion.div>

          {/* Nom de la compétence */}
          <div className="w-full">
            <h4 className="font-bold text-dark-900 text-sm sm:text-base mb-2">
              {skill.name}
            </h4>
            {/* Badge de niveau visible */}
            <div className="flex justify-center">
              <LevelBadge level={skill.level} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Hero Banner pour Core Stack (très visible pour recruteurs)
function CoreStackBanner() {
  const coreSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .filter((skill) => coreStack.includes(skill.name));

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mb-16 sm:mb-20"
    >
      <div className="bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
        </div>

        <div className="relative z-10">
          {/* En-tête */}
          <div className="text-center mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-600/20 border border-primary-400/30 rounded-full mb-3 sm:mb-4"
            >
              <Star className="w-3 h-3 sm:w-4 sm:h-4 text-primary-400" />
              <span className="text-primary-200 font-semibold text-xs sm:text-sm">
                STACK PRINCIPALE
              </span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3">
              Technologies maîtrisées
            </h2>
            <p className="text-dark-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto">
              Stack moderne full-stack JavaScript, orientée produit et solution réelle
            </p>
          </div>

          {/* Grille Core Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
          >
            {coreStack.map((techName, index) => {
              const skill = coreSkills.find((s) => s.name === techName);
              if (!skill) return null;

              const techIcon = getTechIcon(techName);
              const Icon = techIcon.icon;

              return (
                <motion.div
                  key={techName}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className={`p-2 sm:p-3 rounded-lg ${techIcon.bgColor} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 ${techIcon.color}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-bold text-white text-xs sm:text-sm md:text-base mb-1">
                      {techName}
                    </h3>
                    <LevelBadge level={skill.level} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Composant CategorySection
function CategorySection({
  category,
  index,
}: {
  category: typeof skillCategories[0];
  index: number;
}) {
  const colors = categoryColors[category.id as keyof typeof categoryColors] || categoryColors.frontend;

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.2, 0.8, 0.2, 1],
        delay: index * 0.1,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={categoryVariants}
      className="mb-12 sm:mb-16"
    >
      {/* En-tête de catégorie */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
          <div className={`h-1 w-8 sm:w-12 bg-gradient-to-r ${colors.gradient} rounded-full`} />
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-900"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {category.title}
          </motion.h3>
        </div>
        <motion.p
          className="text-xs sm:text-sm md:text-base text-dark-600 sm:ml-[44px] md:ml-[60px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {category.description}
        </motion.p>
      </div>

      {/* Grille de compétences */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5"
      >
        {category.skills.map((skill, skillIndex) => (
          <SkillCard
            key={skillIndex}
            skill={skill}
            categoryId={category.id}
            index={skillIndex}
            isCoreStack={coreStack.includes(skill.name)}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-dark-50 to-white">
      <div className="container-custom">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Compétences</span>
          </h2>
          <p className="text-base sm:text-lg text-dark-600 max-w-2xl mx-auto">
            Stack technique moderne, orientée produit et solution réelle
          </p>
        </motion.div>

        {/* Core Stack Banner - Très visible pour recruteurs */}
        <CoreStackBanner />

        {/* Catégories de compétences */}
        <div className="space-y-8 sm:space-y-12">
          {skillCategories.map((category, index) => (
            <CategorySection
              key={category.id}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
