import type React from "react"
import { Navbar } from "@/components/navbar"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Footer } from "@/components/footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        {children}
        <Footer />
      </main>
    </LayoutWrapper>
  )
}
