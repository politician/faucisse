# Guide d'implémentation SEO

Ce document explique comment le SEO est implémenté dans le site web Faucisse et comment maintenir de bonnes pratiques SEO lors des modifications.

## Stratégie SEO

Le site web Faucisse implémente une stratégie SEO complète incluant :

1. Structure HTML sémantique
2. Métadonnées appropriées
3. Données structurées
4. Optimisation des performances
5. Responsivité mobile
6. Plan de site XML
7. Configuration robots.txt

## Implémentation des métadonnées

### Métadonnées de base

Les métadonnées de base sont définies dans `lib/metadata.ts` et incluent :

- Modèle de titre
- Description
- Mots-clés
- Données Open Graph
- Données Twitter Card
- Informations de favicon

### Métadonnées spécifiques aux pages

Chaque page peut remplacer ou étendre les métadonnées de base :

\`\`\`typescript
export const metadata: Metadata = {
  title: "Titre de la page",
  description: "Description spécifique à la page",
  // Autres métadonnées
}
\`\`\`

## Données structurées

Les données structurées sont implémentées en utilisant JSON-LD pour :

1. Informations d'organisation sur la page d'accueil
2. Données de recettes sur les pages de recettes
3. ItemList pour la page de liste des recettes

Exemple d'une page de recette :

\`\`\`typescript
<Script
  id="schema-recipe"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Recipe",
      name: recipe.title,
      // Autres données de recette
    }),
  }}
/>
\`\`\`

## Plan de site XML

Le plan de site est situé à `public/sitemap.xml` et inclut :

- Page d'accueil
- Page manifeste
- Page de liste des recettes
- Pages individuelles de recettes

Lors de l'ajout de nouvelles pages, mettez à jour le plan de site en conséquence.

## Robots.txt

Le fichier robots.txt est situé à `public/robots.txt` et permet à tous les crawlers d'accéder à toutes les pages.

## Analyse du trafic

Le site utilise Google Analytics (GA4) pour suivre et analyser le trafic des utilisateurs :

- Le code de suivi est implémenté dans `app/layout.tsx` en utilisant le composant `Script` de Next.js
- L'ID de mesure est `G-45RSBY4E1L`
- Le script est chargé avec la stratégie `afterInteractive` pour optimiser les performances

Pour accéder aux données d'analyse :
1. Connectez-vous à [Google Analytics](https://analytics.google.com/)
2. Sélectionnez la propriété "Faucisse"
3. Consultez les rapports dans le tableau de bord

### Respect de la vie privée

Assurez-vous que la politique de confidentialité du site mentionne l'utilisation de Google Analytics et explique comment les utilisateurs peuvent désactiver le suivi s'ils le souhaitent.

## Optimisation des images

Les images sont optimisées en utilisant le composant Image de Next.js avec :

- Texte `alt` approprié
- Dimensionnement responsive avec l'attribut `sizes`
- Chargement prioritaire pour les images above-the-fold

## Considérations de performance

Une bonne performance est essentielle pour le SEO. Le site implémente :

- Chargement efficace des polices
- Images optimisées
- JavaScript minimal
- CSS efficace avec Tailwind

## Liste de vérification SEO pour le nouveau contenu

Lors de l'ajout de nouveau contenu :

1. Ajouter des métadonnées appropriées
2. Utiliser du HTML sémantique
3. Inclure des données structurées le cas échéant
4. Optimiser les images
5. Mettre à jour le plan de site si vous ajoutez de nouvelles pages
6. Assurer une bonne performance
7. Tester la responsivité mobile
