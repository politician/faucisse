import Link from "next/link"
import Image from "next/image"
import { recipes } from "@/lib/recipes"

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
