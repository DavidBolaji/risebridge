"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()
  const pathname = usePathname()

  const redirect = () => {
    if (typeof window !== "undefined") {
      window.open("https://forms.gle/xuBRWJzkWCiWUaZp7", "_blank", "noopener,noreferrer")
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b-2 border-primary/20 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/images/logo.png"
                alt="RiseBridge Initiative Logo"
                width={180}
                height={180}
                className="rounded-lg transition-transform object-cover group-hover:scale-110"
              />
              <div className="hidden sm:flex flex-col">
                {/* <span className="text-xl font-bold text-primary leading-tight">RiseBridge</span> */}
                {/* <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Initiative</span> */}
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${isActive
                        ? "text-primary after:w-full"
                        : "text-foreground/70 hover:text-primary after:w-0 hover:after:w-full"
                      }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                onClick={redirect}
                className="px-5 py-2.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/30"
              >
                Donate
              </button>
            </nav>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 hover:bg-primary/10 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-primary/30"
                aria-label="Toggle theme"
              >
                {mounted ? (
                  theme === "light" ? (
                    <Moon className="w-5 h-5 text-primary" />
                  ) : (
                    <Sun className="w-5 h-5 text-accent" />
                  )
                ) : (
                  <div className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 hover:bg-primary/10 rounded-xl transition-colors border-2 border-transparent hover:border-primary/30"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-5 h-5 text-primary" /> : <Menu className="w-5 h-5 text-primary" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all border-2 ${isActive
                        ? "text-primary bg-primary/10 border-primary/30"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/10 border-transparent hover:border-primary/20"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                onClick={() => {
                  setIsOpen(false)
                  redirect()
                }}
                className="block w-full px-4 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all"
              >
                Donate
              </button>
            </nav>
          )}
        </div>
      </header>

     
    </>
  )
}
