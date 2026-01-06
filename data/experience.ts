export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  impact: string;
  contact?: string;
  type: "professional" | "education" | "internship";
}

export const experiences: Experience[] = [
  {
    id: "tsi",
    title: "Responsable informatique / Agent maritime",
    company: "TSI",
    location: "Dakar",
    period: "05/2021 - Présent",
    type: "professional",
    achievements: [
      "Administration du site web tsisenegal.sn et des bases de données",
      "Utilisation des systèmes Orbus Logistic et Gaindé pour la gestion documentaire",
      "Gestion des infrastructures IT et maintenance des systèmes",
    ],
    impact:
      "Garantie de la continuité opérationnelle des systèmes informatiques et de la disponibilité du site web, contribuant à l'efficacité des opérations maritimes et logistiques de l'entreprise.",
    contact: "77 651 03 54 - PDG TSI",
  },
  {
    id: "cfpm",
    title: "Responsable informatique",
    company: "CFPM",
    location: "Dakar",
    period: "01/2023 - 10/2025",
    type: "professional",
    achievements: [
      "Supervision des réseaux et infrastructures IT",
      "Gestion des installations et maintenance des systèmes informatiques",
      "Support technique et résolution des problèmes",
    ],
    impact:
      "Maintien de la fiabilité et de la performance des infrastructures IT, permettant à l'organisation de fonctionner efficacement sans interruption. Démonstration de responsabilité et d'autonomie dans la gestion de systèmes critiques.",
    contact: "78 157 46 70 - DG CFPM",
  },
  {
    id: "bollore",
    title: "Stagiaire",
    company: "Bolloré Transports Logistiques",
    location: "Dakar",
    period: "08/2019 - 10/2019",
    type: "internship",
    achievements: [
      "Gestion des outils de surveillance (Centreon, GLPI)",
      "Support utilisateur et résolution de tickets",
      "Participation à la maintenance des systèmes",
    ],
    impact:
      "Première expérience dans un environnement professionnel exigeant, développement de compétences en monitoring et support IT. Compréhension des enjeux de fiabilité dans un contexte logistique international.",
  },
  {
    id: "gomycode",
    title: "Développeur Web - Full Stack",
    company: "GOMYCODE",
    location: "Dakar",
    period: "02/2025 - 07/2025",
    type: "education",
    achievements: [
      "Formation complète en développement web full-stack",
      "Maîtrise de React, Node.js, Express, MongoDB",
      "Projets pratiques et applications réelles",
      "Développement d'applications complètes de A à Z",
    ],
    impact:
      "Acquisition des compétences techniques modernes en développement web, complétant mon expérience IT terrain par une expertise en développement logiciel. Formation orientée projet avec réalisation de plusieurs applications complètes.",
  },
  {
    id: "psej",
    title: "Licence Entrepreneuriat",
    company: "PSEJ",
    location: "Dakar",
    period: "01/2025 - 11/2025",
    type: "education",
    achievements: [
      "Formation en entrepreneuriat et gestion de projet",
      "Développement de compétences business",
      "Compréhension des enjeux de création d'entreprise",
    ],
    impact:
      "Combinaison unique de compétences techniques et business, permettant d'aborder les projets avec une vision produit et une compréhension des enjeux métier. Base solide pour l'entrepreneuriat tech (Digital Himma).",
  },
  {
    id: "ipd",
    title: "Licence Informatique",
    company: "IPD",
    location: "Dakar",
    period: "10/2018 - 07/2019",
    type: "education",
    achievements: [
      "Formation fondamentale en informatique",
      "Bases solides en programmation et systèmes",
      "Compréhension des architectures informatiques",
    ],
    impact:
      "Fondations solides en informatique qui ont permis de développer une compréhension approfondie des systèmes et de l'architecture logicielle, base essentielle pour le développement web moderne.",
  },
];





