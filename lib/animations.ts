// Variantes d'animation réutilisables pour Framer Motion
// Évite la répétition de code et assure la cohérence visuelle

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.8, 0.2, 1],
    },
  },
};

// Variantes pour les animations de texte (Hero)
export const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const textItemVariants = {
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

// Variantes d'hover communes
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const hoverLift = {
  whileHover: { scale: 1.05, y: -2 },
  whileTap: { scale: 0.95 },
};

// Transitions communes
export const smoothTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

