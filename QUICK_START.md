# 🚀 Démarrage Rapide

## Installation en 3 étapes

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

### 3. Ouvrir dans le navigateur
Ouvrez [http://localhost:3000](http://localhost:3000)

## 📝 Personnalisation Rapide

### Modifier vos informations personnelles

1. **Hero Section** : `components/sections/Hero.tsx`
   - Modifier le nom, titre, description

2. **À propos** : `components/sections/About.tsx`
   - Modifier la description personnelle
   - Ajuster les valeurs

3. **Projets** : `data/projects.ts`
   - Ajouter/modifier vos projets
   - Mettre à jour les liens GitHub

4. **Expérience** : `data/experience.ts`
   - Ajouter/modifier vos expériences
   - Mettre à jour les dates et descriptions

5. **Compétences** : `data/skills.ts`
   - Ajuster vos compétences et niveaux

6. **Contact** : `components/sections/Contact.tsx`
   - Vérifier les informations de contact
   - Configurer le formulaire (voir RECOMMENDATIONS.md)

7. **Footer** : `components/layout/Footer.tsx`
   - Vérifier les liens sociaux

8. **SEO** : `app/layout.tsx`
   - Modifier les métadonnées (title, description, keywords)

## 🎨 Personnaliser les couleurs

Éditez `tailwind.config.ts` :
```typescript
colors: {
  primary: {
    // Vos couleurs primaires
  }
}
```

## 📦 Build de production

```bash
npm run build
npm start
```

## 🌐 Déploiement

### Vercel (Recommandé - Gratuit)
1. Push sur GitHub
2. Aller sur [vercel.com](https://vercel.com)
3. Importer le projet
4. Déployer automatiquement

### Netlify
1. Push sur GitHub
2. Aller sur [netlify.com](https://netlify.com)
3. Connecter le repository
4. Build command: `npm run build`
5. Publish directory: `.next`

## ⚠️ Notes importantes

- Le formulaire de contact nécessite une configuration backend (voir RECOMMENDATIONS.md)
- Les images de projets doivent être ajoutées dans `/public/images/projects/`
- Vérifiez que tous les liens GitHub sont corrects dans `data/projects.ts`

## 🆘 Problèmes courants

### Erreur de dépendances
```bash
rm -rf node_modules package-lock.json
npm install
```

### Erreur TypeScript
```bash
npm run build
# Vérifier les erreurs dans le terminal
```

### Port déjà utilisé
```bash
# Utiliser un autre port
npm run dev -- -p 3001
```





