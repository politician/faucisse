import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white/20 backdrop-blur-sm mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <Link href="/" className="text-primary font-bold text-3xl">
              faucisse
            </Link>
            <p className="mt-2 text-foreground/70 max-w-md">
              La révolution végétale des saucisses. Éthique, savoureuse et décomplexée.
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap justify-center gap-8">
              <li>
                <Link href="/" className="text-foreground hover:text-primary transition-colors" aria-label="Accueil">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/manifeste"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Notre manifeste"
                >
                  Manifeste
                </Link>
              </li>
              <li>
                <Link
                  href="/recettes"
                  className="text-foreground hover:text-primary transition-colors"
                  aria-label="Nos recettes"
                >
                  Recettes
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground/10 text-center text-sm text-foreground/60">
          <p>&copy; {currentYear} Faucisse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
