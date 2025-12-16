# Portfolio - Mamadou Ndiaye

Portfolio professionnel moderne et responsive pour développeur Full-Stack JavaScript.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du projet

```
Portfolio/
├── app/
│   ├── layout.tsx          # Layout principal avec metadata SEO
│   ├── page.tsx             # Page d'accueil
│   └── globals.css          # Styles globaux
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Navigation principale
│   │   └── Footer.tsx       # Footer avec liens sociaux
│   └── sections/
│       ├── Hero.tsx         # Section hero avec CTA
│       ├── About.tsx        # À propos et valeurs
│       ├── Projects.tsx     # Projets avec filtres
│       ├── Experience.tsx   # Expérience professionnelle
│       ├── Skills.tsx        # Compétences par catégories
│       └── Contact.tsx       # Formulaire de contact
├── data/
│   ├── projects.ts          # Données des projets
│   ├── experience.ts        # Données d'expérience
│   └── skills.ts            # Données des compétences
└── public/                  # Assets statiques
```

## 🎨 Personnalisation

### Modifier les projets

Éditez le fichier `data/projects.ts` pour ajouter, modifier ou supprimer des projets.

### Modifier l'expérience

Éditez le fichier `data/experience.ts` pour mettre à jour vos expériences professionnelles.

### Modifier les compétences

Éditez le fichier `data/skills.ts` pour ajuster vos compétences et niveaux.

### Couleurs

Les couleurs peuvent être modifiées dans `tailwind.config.ts` dans la section `theme.extend.colors`.

## 🔧 Configuration

### SEO

Les métadonnées SEO sont configurées dans `app/layout.tsx`. Personnalisez-les selon vos besoins.

### Formulaire de contact

Le formulaire de contact dans `components/sections/Contact.tsx` nécessite une intégration avec un service backend (ex: Formspree, EmailJS, ou votre propre API).

## 📱 Responsive Design

Le portfolio est entièrement responsive et optimisé pour :
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## ♿ Accessibilité

- Navigation au clavier
- Attributs ARIA appropriés
- Contraste de couleurs conforme WCAG
- Structure sémantique HTML

## 🚀 Déploiement

### Vercel (Recommandé)

1. Push votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Vercel détectera automatiquement Next.js et configurera le déploiement

### Autres plateformes

Le projet peut être déployé sur n'importe quelle plateforme supportant Next.js :
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📝 License

Ce projet est privé et destiné à un usage personnel.

## 👤 Auteur

**Mamadou Ndiaye**
- Email: itech.ndiaye@gmail.com
- LinkedIn: [linkedin.com/in/mamadou-ndiaye-3122171b6](https://linkedin.com/in/mamadou-ndiaye-3122171b6)
- GitHub: [github.com/Mamadou221](https://github.com/Mamadou221)


