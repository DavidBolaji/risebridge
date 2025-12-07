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
  const [showDonateModal, setShowDonateModal] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()
  const pathname = usePathname()

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
                    className={`text-sm font-semibold transition-colors duration-300 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                      isActive
                        ? "text-primary after:w-full"
                        : "text-foreground/70 hover:text-primary after:w-0 hover:after:w-full"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <button
                onClick={() => setShowDonateModal(true)}
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
                    className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all border-2 ${
                      isActive
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
                  setShowDonateModal(true)
                }}
                className="block w-full px-4 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-all"
              >
                Donate
              </button>
            </nav>
          )}
        </div>
      </header>

      {showDonateModal && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={() => setShowDonateModal(false)}
          />
          <div className="relative bg-card border-2 border-primary/30 rounded-3xl p-8 max-w-md w-full shadow-2xl shadow-primary/20 animate-in zoom-in-95 fade-in duration-300">
            <button
              onClick={() => setShowDonateModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground" />
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Support RiseBridge</h3>
              <p className="text-muted-foreground text-sm">
                Your donation empowers underprivileged youth with life-changing skills
              </p>
            </div>

            <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-primary text-lg text-center">Bank Transfer Details</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Bank Name</span>
                  <span className="font-semibold text-foreground">GTBank</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground text-sm">Account Name</span>
                  <span className="font-semibold text-foreground">RiseBridge Initiative</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground text-sm">Account Number</span>
                  <span className="font-bold text-primary text-lg tracking-wider">0123456789</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-accent/10 border border-accent/30 rounded-xl">
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-semibold text-accent">International donors:</span> Contact us at{" "}
                <a href="mailto:donate@risebridgeafrica.org" className="text-primary hover:underline">
                  donate@risebridgeafrica.org
                </a>
              </p>
            </div>

            <button
              onClick={() => setShowDonateModal(false)}
              className="w-full mt-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  )
}
