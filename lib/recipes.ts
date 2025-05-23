export type Recipe = {
  id: string
  title: string
  prepTime: string
  cookTime: string
  servings: string
  description: string
  image: string
  ingredients: string[]
  steps: string[]
  tip: string
}

export const recipes: Recipe[] = [
  {
    id: "faucisses-curry-pommes",
    title: "Faucisses au curry et pommes rôties",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "2 à 4 personnes",
    description:
      "Des faucisses dorées au four, accompagnées de quartiers de pommes caramélisées et d'un soupçon de curry. Oui, c'est sucré-salé, et oui, c'est incroyable.",
    image: "/images/recipes/faucisses-au-curry-et-pommes-roties.png",
    ingredients: [
      "4 faucisses",
      "2 pommes (type Golden ou Pink Lady)",
      "1 oignon rouge",
      "1 cuillère à soupe d'huile d'olive",
      "1 cuillère à café de curry en poudre",
      "Sel, poivre",
    ],
    steps: [
      "Préchauffe ton four à 200°C.",
      "Coupe les pommes en quartiers, l'oignon en lamelles.",
      "Mélange les pommes, l'oignon, les faucisses, l'huile, le curry, sel et poivre dans un plat.",
      "Enfourne 30 minutes en remuant à mi-cuisson.",
      "Sers chaud avec du riz ou du pain.",
    ],
    tip: "Remplace les pommes par des poires si tu veux faire genre t'es un.e chef.fe étoilé.e.",
  },
  {
    id: "faucisses-lentilles",
    title: "Faucisses aux lentilles",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "4 personnes",
    description: "Des lentilles fondantes et des faucisses bien dorées. C'est rustique, c'est vegan, c'est validé.",
    image: "/images/recipes/faucisses-aux-lentilles.png",
    ingredients: [
      "4 faucisses",
      "200g de lentilles vertes",
      "1 carotte",
      "1 oignon",
      "1 feuille de laurier",
      "1 bouillon cube de légumes",
      "1 cuillère à soupe d'huile",
    ],
    steps: [
      "Rince les lentilles.",
      "Fais revenir oignon et carotte dans une casserole avec l'huile.",
      "Ajoute lentilles, laurier, bouillon, eau.",
      "Laisse mijoter 25-30 min.",
      "Ajoute les faucisses en rondelles 5 min avant la fin.",
      "Ajuste sel, poivre et sers.",
    ],
    tip: "Un trait de vinaigre balsamique à la fin. Ça change tout. Même ton humeur.",
  },
  {
    id: "faucisses-italienne",
    title: "Faucisses à l'italienne sur plaque",
    prepTime: "10 min",
    cookTime: "25 min",
    servings: "2 à 3 personnes",
    description: "Des faucisses grillées avec poivrons et oignons. Goût d'Italie garanti, accent non inclus.",
    image: "/images/recipes/faucisses-italienne-sur-plaque.png",
    ingredients: [
      "3 faucisses",
      "2 poivrons (de couleurs différentes)",
      "1 oignon rouge",
      "3 petites pommes de terre",
      "2 cuillères à soupe d'huile d'olive",
      "Origan, ail en poudre, sel, poivre",
    ],
    steps: [
      "Coupe les légumes en lamelles.",
      "Ajoute les faucisses coupées, les épices et l'huile.",
      "Enfourne à 200°C pour 25 minutes.",
      "Sers avec un accent italien plus ou moins réussi.",
    ],
    tip: 'Ajoute quelques olives noires pour booster le niveau "aperitivo du futur".',
  },
  {
    id: "faucisses-merguez",
    title: "Faucisses façon merguez maison",
    prepTime: "30 min",
    cookTime: "45 min",
    servings: "environ 6 faucisses",
    description: "Des merguez végétales maison pour les barbecues qui font dire 'attends, c'est pas de la vraie ?'",
    image: "/images/recipes/faucisses-merguez-maison.png",
    ingredients: [
      "200g de pois chiches cuits",
      "100g de flocons d'avoine",
      "1 cuillère à soupe de concentré de tomate",
      "1 cuillère à café de paprika fumé",
      "1 cuillère à café de cumin",
      "1 cuillère à café de harissa",
      "1 cuillère à soupe de sauce soja",
      "Sel, poivre",
      "Un peu d'eau si besoin",
    ],
    steps: [
      "Mixe tous les ingrédients pour obtenir une pâte malléable.",
      "Forme des saucisses avec les mains.",
      "Fais cuire 25 min au four à 180°C ou à la poêle.",
      "Termine avec une cuisson grillée pour l'effet barbecue.",
      "Sers dans du pain avec salade et oignons.",
    ],
    tip: "C'est encore meilleur le lendemain. Si t'as pas tout mangé.",
  },
  {
    id: "faucisses-legumes-moutarde",
    title: "Faucisses et légumes rôtis à la moutarde",
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "3 à 4 personnes",
    description: "Un plat tout-en-un, savoureux et sans vaisselle. Le four fait tout, toi tu te la coules douce.",
    image: "/images/recipes/faucisses-et-legumes-rotis-moutarde.png",
    ingredients: [
      "4 faucisses",
      "4 pommes de terre",
      "3 carottes",
      "2 oignons",
      "2 cuillères à soupe de moutarde à l'ancienne",
      "1 cuillère à soupe d'huile d'olive",
      "Thym, sel, poivre",
    ],
    steps: [
      "Coupe tous les légumes en morceaux rustiques.",
      "Mélange avec la moutarde, l'huile, les faucisses, le thym, sel et poivre.",
      "Enfourne à 190°C pendant 35 minutes.",
      "Remue à mi-cuisson si tu veux faire genre tu maîtrises.",
    ],
    tip: "Un filet de sirop d'érable en fin de cuisson. Oui, tu as bien lu. Oui, c'est une dinguerie.",
  },
]
