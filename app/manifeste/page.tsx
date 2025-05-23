import { ManifestContent } from "@/components/manifest-content"
import { PageLayout } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Manifeste",
  description:
    "Découvrez la philosophie de Faucisse : une nouvelle façon de voir la saucisse, végétale, joyeuse et décomplexée. Notre manifeste pour une alimentation éthique et savoureuse.",
}

export default function ManifestePage() {
  return (
    <PageLayout>
      <ManifestContent />
    </PageLayout>
  )
}
