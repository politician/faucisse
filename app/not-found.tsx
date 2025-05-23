import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page non trouvée | Faucisse",
  description: "La page que vous recherchez n'existe pas ou a été déplacée.",
}

export default function NotFound() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-6xl font-bold text-primary mb-6">404</h1>
          <h2 className="text-3xl font-bold text-foreground mb-8">Page non trouvée</h2>
          <p className="text-xl text-foreground/70 mb-12 max-w-lg mx-auto">
            Oups ! La page que vous recherchez semble avoir disparu, comme une faucisse dans un barbecue bien animé.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-4 text-xl font-bold transition-all duration-300 hover:scale-105"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
        <Footer />
      </main>
    </LayoutWrapper>
  )
}
