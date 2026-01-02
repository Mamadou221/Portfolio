export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  features: string[];
  stack: string[];
  learnings: string;
  businessValue: string;
  githubUrl: string;
  imageUrl?: string;
  category: "fullstack" | "frontend" | "backend" | "api";
}

export const projects: Project[] = [
  {
    id: "todo-list",
    title: "Application To-Do List",
    description:
      "Application de gestion de tâches moderne avec gestion d'état avancée",
    problem:
      "Besoin d'une application de gestion de tâches performante avec synchronisation d'état complexe et interface utilisateur intuitive.",
    features: [
      "Création, modification et suppression de tâches",
      "Gestion d'état avec Redux",
      "Filtrage et recherche de tâches",
      "Interface utilisateur réactive et moderne",
      "Persistance des données",
    ],
    stack: ["React", "Redux", "TypeScript", "CSS Modules"],
    learnings:
      "Maîtrise de la gestion d'état complexe avec Redux, architecture de composants réutilisables, et optimisation des performances React.",
    businessValue:
      "Démonstration de compétences en développement frontend moderne et gestion d'état, compétences essentielles pour des applications d'entreprise.",
    githubUrl: "https://github.com/Mamadou221",
    category: "frontend",
  },
  {
    id: "rest-api",
    title: "API REST Node.js",
    description:
      "API REST complète avec authentification et sécurité des routes",
    problem:
      "Création d'une API robuste pour la gestion d'utilisateurs et de produits avec système d'authentification sécurisé et contrôle d'accès.",
    features: [
      "Authentification JWT",
      "Gestion CRUD complète (utilisateurs et produits)",
      "Sécurisation des routes avec middleware",
      "Validation des données",
      "Gestion des erreurs",
    ],
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Mongoose"],
    learnings:
      "Architecture RESTful, sécurité des APIs, gestion de l'authentification, validation et sanitization des données, bonnes pratiques de développement backend.",
    businessValue:
      "Compétences essentielles pour développer des APIs d'entreprise sécurisées et scalables, base pour toute application full-stack moderne.",
    githubUrl: "https://github.com/Mamadou221",
    category: "backend",
  },
  {
    id: "e-commerce",
    title: "Mini site e-commerce",
    description:
      "Plateforme e-commerce complète avec panier dynamique et authentification",
    problem:
      "Développement d'une solution e-commerce fonctionnelle avec gestion de produits, panier d'achat, et système d'authentification utilisateur.",
    features: [
      "Catalogue de produits dynamique",
      "Panier d'achat avec gestion en temps réel",
      "Système d'authentification utilisateur",
      "Interface de gestion des commandes",
      "Design responsive et moderne",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Bootstrap",
      "CSS",
    ],
    learnings:
      "Intégration frontend-backend complète, gestion d'état complexe pour le panier, authentification côté client et serveur, design d'interfaces e-commerce.",
    businessValue:
      "Projet démontrant la capacité à développer une application e-commerce complète, de la conception à l'implémentation, avec toutes les fonctionnalités essentielles.",
    githubUrl: "https://github.com/Mamadou221",
    category: "fullstack",
  },
  {
    id: "fullstack-app",
    title: "Application Full-Stack - Projet final",
    description:
      "Application complète combinant frontend et backend avec base de données",
    problem:
      "Création d'une application full-stack complète démontrant la maîtrise de l'ensemble de la stack technique, de l'interface utilisateur à la base de données.",
    features: [
      "Interface utilisateur responsive avec React",
      "Backend robuste avec Node.js/Express",
      "Base de données MongoDB",
      "Système d'authentification complet",
      "Gestion des données en temps réel",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "TypeScript",
      "Tailwind CSS",
    ],
    learnings:
      "Architecture full-stack complète, intégration frontend-backend, gestion de base de données, authentification et autorisation, déploiement d'applications.",
    businessValue:
      "Projet de synthèse démontrant la capacité à développer des applications complètes de A à Z, compétence recherchée pour les postes de développeur full-stack.",
    githubUrl: "https://github.com/Mamadou221",
    category: "fullstack",
  },
  {
    id: "max-sante",
    title: "Max Santé - Digital Himma",
    description:
      "Application de santé pour la gestion des données médicales et services pharmaceutiques",
    problem:
      "Développement d'une solution numérique pour améliorer la gestion des données médicales, faciliter les services pharmaceutiques et organiser le don de sang dans le secteur de la santé.",
    features: [
      "Gestion des données médicales",
      "Services pharmaceutiques",
      "Système de don de sang",
      "Interface adaptée au secteur santé",
      "Gestion des utilisateurs (patients, médecins, pharmaciens)",
    ],
    stack: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
    ],
    learnings:
      "Développement d'applications pour des secteurs spécifiques, compréhension des besoins métier, leadership et coordination d'équipe, stratégie de développement produit.",
    businessValue:
      "Projet entrepreneurial démontrant la capacité à identifier des besoins réels, développer des solutions adaptées et coordonner une équipe. Expérience précieuse pour les startups et projets innovants.",
    githubUrl: "https://github.com/Mamadou221",
    category: "fullstack",
  },
];



