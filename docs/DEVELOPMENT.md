# Guide de développement

Ce document fournit des instructions détaillées pour développer le site web Faucisse.

## Environnement de développement

### Exigences

- Node.js 18.x ou supérieur
- npm ou yarn
- Git

### Configuration

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-nom-utilisateur/faucisse.com.git
   cd faucisse.com
   ```

2. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Workflow de développement

### Stratégie de branches

- `main` : Code prêt pour la production
- `develop` : Branche d'intégration pour les fonctionnalités
- Branches de fonctionnalités : Nommées comme `feature/nom-fonctionnalite`
- Branches de correction de bugs : Nommées comme `fix/nom-bug`

### Messages de commit

Suivez la spécification [Conventional Commits](https://www.conventionalcommits.org/) :

```
feat: ajouter nouvelle recette
fix: corriger faute de frappe dans le manifeste
docs: mettre à jour README
style: formater le code
refactor: réorganiser la structure des composants
test: ajouter tests pour le composant recette
chore: mettre à jour les dépendances
```

## Ajout de nouvelles fonctionnalités

### Ajouter une nouvelle recette

1. Ajoutez l'image de la recette dans `public/images/recipes/`
2. Ajoutez les données de la recette au tableau `recipes` dans `lib/recipes.ts`
3. La recette apparaîtra automatiquement dans la liste des recettes et aura sa propre page

### Ajouter une nouvelle page

1. Créez un nouveau répertoire dans le dossier `app`
2. Ajoutez un fichier `page.tsx` avec le contenu de la page
3. Utilisez le composant `PageLayout` pour un style cohérent
4. Ajoutez des métadonnées pour le SEO

### Modifier les styles

1. Les styles globaux sont dans `app/globals.css`
2. Les styles spécifiques aux composants utilisent les classes Tailwind
3. Les couleurs et animations personnalisées peuvent être ajoutées à `tailwind.config.ts`

## Tests

### Tests manuels

Testez le site sur plusieurs appareils et navigateurs pour assurer la responsivité et la compatibilité.

### Tests d'accessibilité

Utilisez des outils comme Lighthouse et axe pour vérifier les problèmes d'accessibilité.

## Construction pour la production

```bash
npm run build
# ou
yarn build
```

Cela créera une version de production optimisée dans le répertoire `.next`.

## Déploiement

Le site est automatiquement déployé sur Vercel lorsque les modifications sont poussées vers la branche principale.

### Variables d'environnement

Aucune variable d'environnement n'est actuellement requise pour ce projet.

## Dépannage

### Problèmes courants

- **Images qui ne se chargent pas** : Vérifiez que les chemins d'images dans `lib/recipes.ts` correspondent aux chemins de fichiers réels dans `public/images/recipes/`
- **Problèmes de style** : Assurez-vous que Tailwind est correctement configuré et que les classes sont correctes
- **Erreurs de construction** : Vérifiez les erreurs TypeScript ou les dépendances manquantes
