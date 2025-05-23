import { Navbar } from "@/components/navbar"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { ManifestContent } from "@/components/manifest-content"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Manifeste | Faucisse - La révolution végétale",
  description:
    "Découvrez la philosophie de Faucisse : une nouvelle façon de voir la saucisse, végétale, joyeuse et décomplexée. Notre manifeste pour une alimentation éthique et savoureuse.",
  openGraph: {
    title: "Notre Manifeste | Faucisse - La révolution végétale",
    description:
      "Découvrez la philosophie de Faucisse : une nouvelle façon de voir la saucisse, végétale, joyeuse et décomplexée. Notre manifeste pour une alimentation éthique et savoureuse.",
  },
}

export default function ManifestePage() {
  return (
    <LayoutWrapper>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <ManifestContent />
        <Footer />
      </main>
    </LayoutWrapper>
  )
}
