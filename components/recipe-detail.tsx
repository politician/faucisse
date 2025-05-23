import Link from "next/link"
import Image from "next/image"

// Recipe data with the exact content provided
const recipes = [
  {
    id: "faucisses-curry-pommes",
    title: "Faucisses au curry et pommes rôties",
    prepTime: "15 min",
    cookTime: "30 min",
    servings: "2 à 4 personnes",
    image: "/faucisses-au-curry-et-pommes-roties.png",
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
    image: "/faucisses-aux-lentilles.png",
    ingredients: [
      "4 faucisses ",
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
    image: "/faucisses-italienne-sur-plaque.png",
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
    image: "/faucisses-merguez-maison.png",
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
    image: "/faucisses-et-legumes-rotis-moutarde.png",
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

export function RecipeDetail({ recipeId }: { recipeId: string }) {
  const recipe = recipes.find((r) => r.id === recipeId)

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Recette introuvable</h1>
        <p className="mb-8">Désolé, cette recette n&apos;existe pas ou a été déplacée.</p>
        <Link
          href="/recettes"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-white"
        >
          Retour aux recettes
        </Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen" itemScope itemType="https://schema.org/Recipe">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Fil d'Ariane" className="mb-12 text-lg text-foreground/70">
          <ol className="flex flex-wrap items-center">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Accueil
              </Link>
              <span className="mx-2">&gt;</span>
            </li>
            <li>
              <Link href="/recettes" className="hover:text-primary transition-colors">
                Recettes
              </Link>
              <span className="mx-2">&gt;</span>
            </li>
            <li>
              <span className="text-foreground" itemProp="name">
                {recipe.title}
              </span>
            </li>
          </ol>
        </nav>

        {/* Large centered image */}
        <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 shadow-lg">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={`Photo de la recette: ${recipe.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            className="object-cover"
            itemProp="image"
          />
        </div>

        {/* Recipe title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16 leading-tight" itemProp="name">
          {recipe.title}
        </h1>

        {/* Recipe info block */}
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 mb-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            <div>
              <span className="font-bold text-foreground">Temps de préparation :</span>
              <br />
              <span className="text-foreground/80" itemProp="prepTime">
                {recipe.prepTime}
              </span>
            </div>
            <div>
              <span className="font-bold text-foreground">Temps de cuisson :</span>
              <br />
              <span className="text-foreground/80" itemProp="cookTime">
                {recipe.cookTime}
              </span>
            </div>
            <div>
              <span className="font-bold text-foreground">Pour :</span>
              <br />
              <span className="text-foreground/80" itemProp="recipeYield">
                {recipe.servings}
              </span>
            </div>
          </div>
        </div>

        {/* Ingredients section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">Ingrédients</h2>
          <div className="bg-white/30 backdrop-blur-sm rounded-3xl p-8">
            <ul className="space-y-3 text-lg text-foreground/90">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start" itemProp="recipeIngredient">
                  <span className="text-primary font-bold mr-3">•</span>
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Steps section */}
        <div className="mb-16" itemProp="recipeInstructions">
          <h2 className="text-3xl font-bold text-foreground mb-8">Étapes</h2>
          <div className="space-y-6">
            {recipe.steps.map((step, index) => (
              <div key={index} className="bg-white/30 backdrop-blur-sm rounded-3xl p-6" itemProp="step">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg text-foreground/90 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef tip */}
        <div className="bg-accent/20 backdrop-blur-sm rounded-3xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">Astuce de chef.fe</h3>
          <p className="text-lg text-foreground/90 leading-relaxed italic">{recipe.tip}</p>
        </div>

        {/* Back button */}
        <div className="text-center">
          <Link
            href="/recettes"
            className="inline-block rounded-full bg-primary px-8 py-4 font-bold text-white text-lg transition-all hover:bg-primary/90 hover:shadow-lg hover:scale-105"
          >
            Retour aux recettes
          </Link>
        </div>
      </div>
    </article>
  )
}
