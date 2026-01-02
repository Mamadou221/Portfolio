// Mapping des technologies vers des couleurs et icônes
import {
  Code2,
  Database,
  Globe,
  Zap,
  Shield,
  Layers,
  Box,
  Server,
  Cpu,
  GitBranch,
  Cloud,
  Wrench,
  Users,
  Target,
  MessageSquare,
  Rocket,
  FileCode,
  Terminal,
} from "lucide-react";

export interface TechIcon {
  icon: typeof Code2;
  color: string;
  bgColor: string;
}

export const techIconsMap: Record<string, TechIcon> = {
  // Frontend
  React: {
    icon: Code2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  "Next.js": {
    icon: Globe,
    color: "text-gray-900",
    bgColor: "bg-gray-50",
  },
  TypeScript: {
    icon: Code2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  JavaScript: {
    icon: Code2,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  "CSS Modules": {
    icon: Layers,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  CSS: {
    icon: Layers,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  Bootstrap: {
    icon: Box,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  "Tailwind CSS": {
    icon: Layers,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  "HTML/CSS": {
    icon: FileCode,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  HTML: {
    icon: FileCode,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  "JavaScript (ES6+)": {
    icon: Code2,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  Redux: {
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  // Backend
  "Node.js": {
    icon: Server,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  Express: {
    icon: Server,
    color: "text-gray-700",
    bgColor: "bg-gray-50",
  },
  "REST APIs": {
    icon: Server,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  "REST API": {
    icon: Server,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  MongoDB: {
    icon: Database,
    color: "text-green-700",
    bgColor: "bg-green-50",
  },
  Mongoose: {
    icon: Database,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  JWT: {
    icon: Shield,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  SQL: {
    icon: Database,
    color: "text-blue-700",
    bgColor: "bg-blue-50",
  },
  NoSQL: {
    icon: Database,
    color: "text-green-700",
    bgColor: "bg-green-50",
  },
  // Tools
  "Git & GitHub": {
    icon: GitBranch,
    color: "text-dark-900",
    bgColor: "bg-dark-50",
  },
  Git: {
    icon: GitBranch,
    color: "text-dark-900",
    bgColor: "bg-dark-50",
  },
  GitHub: {
    icon: GitBranch,
    color: "text-dark-900",
    bgColor: "bg-dark-50",
  },
  Docker: {
    icon: Box,
    color: "text-blue-700",
    bgColor: "bg-blue-50",
  },
  Cloud: {
    icon: Cloud,
    color: "text-sky-600",
    bgColor: "bg-sky-50",
  },
  "Maintenance logiciel et matériel": {
    icon: Wrench,
    color: "text-gray-700",
    bgColor: "bg-gray-50",
  },
  // Soft Skills
  "Orienté produit": {
    icon: Target,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
  Leadership: {
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  Autonomie: {
    icon: Rocket,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  Communication: {
    icon: MessageSquare,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  "Responsive Design": {
    icon: Layers,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  "Animations UI": {
    icon: Zap,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
  // Default
  default: {
    icon: Cpu,
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
};

export const getTechIcon = (tech: string): TechIcon => {
  return techIconsMap[tech] || techIconsMap.default;
};

