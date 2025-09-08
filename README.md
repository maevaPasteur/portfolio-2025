# Portfolio 2025

Portfolio personnel développé avec **Nuxt 3**, **TypeScript**, **Tailwind CSS** et **Vue 3**.

## 🚀 Stack Technique

- **Framework** : Nuxt 3
- **Langage** : TypeScript
- **Styling** : Tailwind CSS + SCSS
- **Animations** : GSAP
- **Internationalisation** : @nuxtjs/i18n (Français/Anglais)
- **SEO** : Nuxt SEO, Schema.org, Sitemap
- **State Management** : Pinia
- **Qualité Code** : ESLint, Prettier, Husky, Commitlint

## 🛠️ Installation

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build

# Génération statique
npm run generate

# Preview de la build
npm run preview
```

## 📋 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run generate` - Génération statique pour déploiement
- `npm run preview` - Preview de la build locale
- `npm run lint` - Vérification ESLint
- `npm run lint:fix` - Correction automatique ESLint

## 🔄 CI/CD et Déploiement

### GitHub Actions Workflows

#### 1. **CI Pipeline** (`.github/workflows/ci.yml`)

**Déclenché sur** : Toutes les Pull Requests et Push sur toutes les branches

**Actions effectuées** :

- ✅ Installation des dépendances Node.js
- ✅ Vérification ESLint (qualité code)
- ✅ Test du build Nuxt
- ✅ Upload des artefacts de build

#### 2. **Déploiement** (`.github/workflows/deploy.yml`)

**Déclenché sur** : Push sur la branche `main` uniquement

**Actions effectuées** :

- ✅ Vérification ESLint
- ✅ Génération du site statique
- ✅ Déploiement automatique sur GitHub Pages

### Configuration GitHub Pages

Le site est automatiquement déployé sur GitHub Pages à l'adresse :
`https://<username>.github.io/portfolio-2025/`

### Hooks Git Locaux

- **Pre-commit** : ESLint + Prettier automatique sur les fichiers modifiés
- **Commit-msg** : Validation du format des messages de commit

## 📝 Convention de Commits

Ce projet utilise [Conventional Commits](https://www.conventionalcommits.org/).

### Format requis :

```
<type>(<scope>): <description>
```

### Types autorisés :

- `feat` - nouvelle fonctionnalité
- `fix` - correction de bug
- `docs` - documentation
- `style` - formatage code
- `refactor` - refactoring
- `perf` - amélioration performance
- `test` - tests
- `build` - système de build
- `ci` - intégration continue
- `chore` - maintenance

### Exemples valides :

```bash
feat(home): add hero animation
fix(contact): resolve form validation
docs(readme): update deployment guide
style(components): format with prettier
```

## 🌐 Internationalisation

Le site est disponible en **Français** (défaut) et **Anglais**.

- **URL par défaut** : `/` (français)
- **URL anglaise** : `/en/`

Les fichiers de traduction se trouvent dans `/i18n/locales/`.

## 🏗️ Architecture du Projet

```
├── assets/           # Assets (CSS, images)
├── components/       # Composants Vue réutilisables
├── composables/      # Composables Vue
├── directives/       # Directives Vue personnalisées
├── i18n/locales/     # Fichiers de traduction
├── layouts/          # Layouts Nuxt
├── pages/            # Pages/routes Nuxt
├── plugins/          # Plugins Nuxt
├── public/           # Assets statiques
├── server/           # API routes Nuxt
├── stores/           # Stores Pinia
└── types/            # Types TypeScript
```

## 🚦 Workflow de Développement

1. **Créer une branche** depuis `main`
2. **Développer** la fonctionnalité
3. **Commit** avec la convention (ex: `feat(home): add contact form`)
4. **Push** et créer une **Pull Request**
5. **CI automatique** : Tests ESLint + Build
6. **Merge** vers `main` après validation
7. **Déploiement automatique** sur GitHub Pages

## 🔧 Configuration ESLint

Règles personnalisées dans `eslint.config.js` :

- Standards Vue 3 + TypeScript
- Formatage automatique
- Règles strictes pour la qualité code
- `v-html` autorisé pour le contenu i18n

## 📱 Progressive Web App

Le site fonctionne comme une PWA avec :

- Service Worker automatique
- Cache des assets
- Mode hors ligne basique
- Optimisations Core Web Vitals

## 🎨 Design System

- **Composants atomiques** réutilisables
- **Tokens design** Tailwind
- **Animations GSAP** performantes
- **Responsive** mobile-first
- **Accessibilité** WCAG AA
