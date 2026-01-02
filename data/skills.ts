export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "expert" | "advanced" | "intermediate" | "beginner";
  description?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Développement d'interfaces utilisateur modernes et réactives",
    skills: [
      {
        name: "React",
        level: "advanced",
        description: "Développement d'applications React avec hooks, context API, et gestion d'état",
      },
      {
        name: "Next.js",
        level: "advanced",
        description: "Applications full-stack avec App Router, SSR, et optimisation des performances",
      },
      {
        name: "TypeScript",
        level: "advanced",
        description: "Typage statique pour un code plus robuste et maintenable",
      },
      {
        name: "JavaScript (ES6+)",
        level: "advanced",
        description: "Maîtrise des fonctionnalités modernes de JavaScript",
      },
      {
        name: "HTML/CSS",
        level: "expert",
        description: "Structure sémantique et styles modernes avec CSS3",
      },
      {
        name: "Tailwind CSS",
        level: "advanced",
        description: "Styling utilitaire pour un développement rapide et cohérent",
      },
      {
        name: "Bootstrap",
        level: "intermediate",
        description: "Framework CSS pour des interfaces responsive",
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Développement de serveurs et APIs robustes",
    skills: [
      {
        name: "Node.js",
        level: "advanced",
        description: "Runtime JavaScript pour le développement serveur",
      },
      {
        name: "Express",
        level: "advanced",
        description: "Framework web pour Node.js, création d'APIs REST",
      },
      {
        name: "REST APIs",
        level: "advanced",
        description: "Conception et développement d'APIs RESTful",
      },
      {
        name: "Authentication & Security",
        level: "intermediate",
        description: "JWT, sécurisation des routes, validation des données",
      },
    ],
  },
  {
    id: "database",
    title: "Bases de données",
    description: "Gestion et modélisation de données",
    skills: [
      {
        name: "MongoDB",
        level: "advanced",
        description: "Base de données NoSQL, Mongoose ODM",
      },
      {
        name: "SQL",
        level: "intermediate",
        description: "Bases de données relationnelles",
      },
      {
        name: "NoSQL",
        level: "advanced",
        description: "Bases de données non-relationnelles",
      },
    ],
  },
  {
    id: "tools",
    title: "Outils & Technologies",
    description: "Outils de développement et déploiement",
    skills: [
      {
        name: "Git & GitHub",
        level: "advanced",
        description: "Contrôle de version et collaboration",
      },
      {
        name: "Docker",
        level: "intermediate",
        description: "Conteneurisation d'applications",
      },
      {
        name: "Cloud",
        level: "intermediate",
        description: "Déploiement et services cloud",
      },
      {
        name: "Maintenance logiciel et matériel",
        level: "advanced",
        description: "Expérience terrain en maintenance IT",
      },
    ],
  },
  {
    id: "soft",
    title: "Compétences transverses",
    description: "Compétences business et interpersonnelles",
    skills: [
      {
        name: "Orienté produit",
        level: "advanced",
        description: "Focus sur la résolution de problèmes réels",
      },
      {
        name: "Leadership",
        level: "intermediate",
        description: "Coordination d'équipe (Digital Himma)",
      },
      {
        name: "Autonomie",
        level: "advanced",
        description: "Gestion de projets et prise d'initiatives",
      },
      {
        name: "Communication",
        level: "advanced",
        description: "Support utilisateur et collaboration",
      },
    ],
  },
];

const levelColors = {
  expert: "bg-green-500",
  advanced: "bg-blue-500",
  intermediate: "bg-yellow-500",
  beginner: "bg-gray-400",
};

const levelLabels = {
  expert: "Expert",
  advanced: "Avancé",
  intermediate: "Intermédiaire",
  beginner: "Débutant",
};

export { levelColors, levelLabels };



