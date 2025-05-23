# Guide d'analyse et de suivi

Ce document explique comment l'analyse du trafic et des performances est implémentée sur le site Faucisse.

## Services d'analyse utilisés

Le site Faucisse utilise deux services d'analyse complémentaires :

### 1. Google Analytics (GA4)

**Objectif** : Analyse comportementale détaillée des utilisateurs

**Implémentation** :
- Code de suivi : `G-45RSBY4E1L`
- Intégré dans `app/layout.tsx` via le composant `Script` de Next.js
- Stratégie de chargement : `afterInteractive`

**Données collectées** :
- Pages vues et sessions
- Données démographiques des utilisateurs
- Sources de trafic
- Comportement sur le site
- Conversions et objectifs

**Accès** :
1. Connectez-vous à [Google Analytics](https://analytics.google.com/)
2. Sélectionnez la propriété "Faucisse"
3. Consultez les rapports dans le tableau de bord

### 2. Vercel Analytics

**Objectif** : Métriques de performance et d'utilisation spécifiques à Vercel

**Implémentation** :
- Package : `@vercel/analytics/react`
- Composant `<Analytics />` ajouté dans `app/layout.tsx`
- Activation automatique sur les projets Vercel

**Données collectées** :
- Core Web Vitals (LCP, FID, CLS, etc.)
- Temps de chargement des pages
- Métriques de performance en temps réel
- Données de trafic simplifiées
- Erreurs et problèmes de performance

**Accès** :
1. Connectez-vous au [tableau de bord Vercel](https://vercel.com/dashboard)
2. Sélectionnez le projet "faucisse"
3. Cliquez sur l'onglet "Analytics"

## Comparaison des services

| Fonctionnalité | Google Analytics | Vercel Analytics |
|----------------|------------------|------------------|
| **Données comportementales** | ✅ Très détaillées | ❌ Basiques |
| **Métriques de performance** | ⚠️ Limitées | ✅ Excellentes |
| **Core Web Vitals** | ⚠️ Basiques | ✅ Détaillées |
| **Temps réel** | ✅ Oui | ✅ Oui |
| **Configuration** | ⚠️ Complexe | ✅ Simple |
| **Respect de la vie privée** | ⚠️ Cookies requis | ✅ Sans cookies |
| **Coût** | ✅ Gratuit | ✅ Gratuit (limites) |

## Métriques clés à surveiller

### Performance (Vercel Analytics)
- **Largest Contentful Paint (LCP)** : < 2.5s
- **First Input Delay (FID)** : < 100ms
- **Cumulative Layout Shift (CLS)** : < 0.1
- **Time to First Byte (TTFB)** : < 600ms

### Engagement (Google Analytics)
- **Taux de rebond** : Objectif < 60%
- **Durée de session** : Objectif > 2 minutes
- **Pages par session** : Objectif > 2
- **Taux de conversion** : Suivi des objectifs définis

## Configuration des objectifs

### Google Analytics
Configurez des objectifs pour mesurer :
- Consultation des recettes
- Temps passé sur le manifeste
- Navigation entre les pages
- Clics sur les boutons d'action

### Vercel Analytics
Les métriques sont automatiquement collectées, mais vous pouvez :
- Surveiller les alertes de performance
- Analyser les tendances de trafic
- Identifier les pages lentes

## Respect de la vie privée

### Google Analytics
- Collecte des cookies et données personnelles
- Nécessite un consentement RGPD
- Politique de confidentialité requise

### Vercel Analytics
- Fonctionne sans cookies
- Respecte automatiquement le RGPD
- Données anonymisées par défaut

## Bonnes pratiques

1. **Surveillance régulière** : Vérifiez les métriques hebdomadairement
2. **Alertes** : Configurez des alertes pour les problèmes de performance
3. **Tests A/B** : Utilisez les données pour optimiser l'expérience utilisateur
4. **Corrélation** : Croisez les données des deux services pour une vue complète
5. **Action** : Utilisez les insights pour améliorer le site

## Dépannage

### Google Analytics ne fonctionne pas
- Vérifiez que l'ID de mesure est correct
- Assurez-vous que les bloqueurs de publicité ne bloquent pas le script
- Vérifiez la console pour les erreurs JavaScript

### Vercel Analytics ne s'affiche pas
- Confirmez que le projet est déployé sur Vercel
- Vérifiez que le package `@vercel/analytics` est installé
- Assurez-vous que le composant `<Analytics />` est présent

## Évolution future

Considérations pour l'amélioration du suivi :
- Ajout d'événements personnalisés pour Google Analytics
- Intégration de Google Tag Manager pour plus de flexibilité
- Mise en place d'un tableau de bord unifié
- Tests de performance automatisés
