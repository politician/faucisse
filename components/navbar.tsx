"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "py-2 backdrop-blur-md bg-background/90" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-primary font-bold text-4xl transition-all duration-300 hover:scale-110 text-shadow"
          style={{
            textShadow: "2px 2px 0px rgba(255,107,107,0.3)",
            transform: isScrolled ? "scale(0.9)" : "scale(1)",
          }}
          aria-label="Accueil Faucisse"
        >
          faucisse
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8" aria-label="Navigation principale">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/manifeste">Manifeste</NavLink>
          <NavLink href="/recettes">Recettes</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary p-2 rounded-full hover:bg-primary/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Ouvrir le menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-background/95 backdrop-blur-md py-6 px-4"
          aria-label="Navigation mobile"
        >
          <nav className="flex flex-col space-y-6">
            <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Accueil
            </MobileNavLink>
            <MobileNavLink href="/manifeste" onClick={() => setIsMobileMenuOpen(false)}>
              Manifeste
            </MobileNavLink>
            <MobileNavLink href="/recettes" onClick={() => setIsMobileMenuOpen(false)}>
              Recettes
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-foreground font-medium text-lg hover:text-primary transition-all duration-300 hover:scale-110 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:rounded-full after:bg-primary after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-foreground font-medium text-2xl hover:text-primary transition-all py-2 flex justify-center"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
