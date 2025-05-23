import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { PageLayout } from "@/components/page-layout"
import Script from "next/script"
import { siteConfig } from "@/lib/metadata"

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <Intro />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/logo.png`,
            description: siteConfig.description,
          }),
        }}
      />
    </PageLayout>
  )
}
