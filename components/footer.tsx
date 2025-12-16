import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  const redirect = () => {
    if (typeof window !== "undefined") {
      window.open("https://forms.gle/xuBRWJzkWCiWUaZp7", "_blank", "noopener,noreferrer")
    }
  }
  return (
    <footer className="border-t-2 border-primary/20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="RiseBridge Initiative Logo"
                width={48}
                height={48}
                className="rounded-lg"
              />
              <div>
                <span className="font-bold text-primary text-lg">RiseBridge</span>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Initiative</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground">Bridging Gaps. Raising Futures.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm tracking-widest text-primary">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/programs", label: "Programs" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm tracking-widest text-primary">Support Us</h3>
            <nav className="flex flex-col gap-3">
              <button
                onClick={redirect}
                className="text-left text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Donate
              </button>
              {[
                { href: "/impact", label: "Impact" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold mb-4 uppercase text-sm tracking-widest text-primary">Connect</h3>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary hover:text-white rounded-xl transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary hover:text-white rounded-xl transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-primary/10 hover:bg-primary hover:text-white rounded-xl transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t-2 border-primary/20 pt-8">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 RiseBridge Initiative. All Rights Reserved. Bridging Gaps. Raising Futures.
          </p>
        </div>
      </div>
    </footer>
  )
}
