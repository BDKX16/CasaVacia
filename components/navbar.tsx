"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "INICIO", href: "#hero" },
  { label: "PROYECTOS", href: "#proyectos" },
  { label: "EQUIPO", href: "#equipo" },
  { label: "CONTACTO", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-serif text-lg font-semibold tracking-[0.2em] text-primary"
        >
          CASA VACIA
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Abrir menu de navegacion"
        >
          <span
            className={`block h-px w-6 bg-primary transition-all duration-300 ${
              mobileOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-primary transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-primary transition-all duration-300 ${
              mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6 bg-background/95 px-6 py-8 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-xs font-medium tracking-[0.25em] text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
