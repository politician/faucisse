# Faucisse Architecture

Ce document fournit un aperçu de l'architecture du site web Faucisse, expliquant les composants clés et comment ils interagissent.

## Technology Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
faucisse.com/
├── app/                  # Next.js App Router
│   ├── globals.css       # Styles globaux
│   ├── layout.tsx        # Composant de layout racine
│   ├── manifest.ts       # Manifeste PWA
│   ├── page.tsx          # Page d'accueil
│   ├── manifeste/        # Page manifeste
│   ├── recettes/         # Section recettes
│   └── not-found.tsx     # Page 404
├── components/           # Composants React réutilisables
├── lib/                  # Fonctions utilitaires et données
│   ├── metadata.ts       # Configuration des métadonnées SEO
│   └── recipes.ts        # Données des recettes
├── public/               # Assets statiques
│   ├── icons/            # Favicon et icônes d'app
│   └── images/           # Images utilisées dans le site
└── docs/                 # Documentation
```

## Key Components

### App Router

Le projet utilise Next.js App Router pour le routage. Chaque route est définie par un répertoire dans le dossier `app` avec un fichier `page.tsx`.

### Page Layout

Le composant `PageLayout` dans `components/page-layout.tsx` fournit un layout cohérent sur toutes les pages, incluant :
- La barre de navigation
- Le motif d'arrière-plan
- Le pied de page

### Data Management

Les données des recettes sont centralisées dans `lib/recipes.ts` pour éviter la duplication et faciliter les mises à jour.

### SEO

Les métadonnées SEO sont gérées via :
- Métadonnées de base dans `lib/metadata.ts`
- Métadonnées spécifiques à chaque page dans chaque fichier de page
- Données structurées utilisant JSON-LD pour les recettes

### Styling

Le projet utilise Tailwind CSS avec :
- Couleurs personnalisées définies dans `tailwind.config.ts`
- Styles globaux dans `app/globals.css`
- Animations personnalisées pour les éléments interactifs

## Data Flow

1. Les données statiques (recettes, métadonnées) sont définies dans le répertoire `lib`
2. Les composants importent ces données selon leurs besoins
3. Les pages composent les composants pour créer l'interface utilisateur complète
4. L'App Router gère la navigation entre les pages

## Progressive Web App

Le site implémente les fonctionnalités PWA via :
- Manifeste d'application web dans `app/manifest.ts` et `public/site.webmanifest`
- Diverses tailles d'icônes dans le répertoire `public/icons`
- Métadonnées appropriées pour les invites d'installation

## Performance Considerations

- Les images sont optimisées en utilisant le composant Image de Next.js
- Les polices sont chargées correctement avec display swap
- Le CSS critique est inliné
- Les animations utilisent l'accélération matérielle quand c'est possible
