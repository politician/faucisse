import type React from "react"

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url("/images/pattern-background.png")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-[#FFFDF7]/50 -z-10" />
      {children}
    </div>
  )
}
