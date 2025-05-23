# Guide de style

Ce document explique l'approche de style utilisée dans le site web Faucisse et fournit des directives pour maintenir un style cohérent.

## Approche de style

Le site web Faucisse utilise Tailwind CSS pour le style, avec :

- Couleurs personnalisées définies dans `tailwind.config.ts`
- Styles globaux dans `app/globals.css`
- Animations personnalisées pour les éléments interactifs
- Design responsive pour toutes les tailles d'écran

## Palette de couleurs

Les couleurs principales utilisées dans le site sont :

- Primaire (rose/rouge) : Utilisée pour les boutons, accents et éléments importants
- Secondaire (vert) : Utilisée pour les éléments secondaires et accents
- Accent (jaune) : Utilisée pour les éléments tertiaires et surlignages
- Arrière-plan (crème) : Utilisée pour l'arrière-plan de la page
- Premier plan (rouge foncé) : Utilisée pour le texte

Ces couleurs sont définies comme valeurs HSL dans le fichier `tailwind.config.ts` et peuvent être accessibles en utilisant les classes utilitaires de Tailwind.

## Typographie

Le site utilise la police Fredoka pour tout le texte, avec diverses graisses :

- 400 (Regular) : Pour le texte du corps
- 500 (Medium) : Pour les sous-titres et l'emphase
- 600 (SemiBold) : Pour le texte important et les boutons
- 700 (Bold) : Pour les titres et le texte très important

## Animations

Les animations personnalisées sont définies dans `app/globals.css` et incluent :

- `float` : Pour les éléments emoji flottants
- `bounce-slow` : Pour les éléments qui rebondissent lentement
- `wiggle` : Pour les éléments qui se balancent
- `swing` : Pour la saucisse qui se balance dans la section hero

## Composants de layout

### Layout de page

Le composant `PageLayout` dans `components/page-layout.tsx` fournit un layout cohérent sur toutes les pages, incluant :
- La barre de navigation
- Le motif d'arrière-plan
- Le pied de page

### Wrapper de layout

Le composant `LayoutWrapper` dans `components/layout-wrapper.tsx` gère le motif d'arrière-plan et la superposition.

## Design responsive

Le site est conçu pour être entièrement responsive, avec des points de rupture à :

- `md` : 768px
- `lg` : 1024px
- `xl` : 1280px
- `2xl` : 1536px

Utilisez les préfixes responsive de Tailwind pour appliquer différents styles à différentes tailles d'écran :

```jsx
<div className="text-lg md:text-xl lg:text-2xl">
  Texte responsive
</div>
```

## Style des composants

Les composants utilisent une combinaison de :

- Classes utilitaires Tailwind pour la plupart des styles
- Variables CSS pour les couleurs du thème
- Animations personnalisées pour les éléments interactifs

## Ajout de nouveaux styles

Lors de l'ajout de nouveaux styles :

1. Essayez d'utiliser d'abord les classes utilitaires Tailwind existantes
2. Si nécessaire, étendez Tailwind dans `tailwind.config.ts`
3. Pour les animations complexes, ajoutez-les à `app/globals.css`
4. Maintenez la cohérence avec le design existant

## Bonnes pratiques

- Utilisez des éléments HTML sémantiques
- Assurez un contraste de couleur suffisant pour l'accessibilité
- Testez sur plusieurs tailles d'écran
- Gardez les styles cohérents entre les composants similaires
- Utilisez la palette de couleurs existante
- Suivez l'esthétique ludique et amusante de la marque
