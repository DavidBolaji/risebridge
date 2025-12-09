"use client"

import Image from "next/image"
import { Users, Briefcase, Heart } from "lucide-react"

export function FounderSpotlight() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card border-y-2 border-primary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-balance">Meet the Founder</h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Behind RiseBridge is a powerful vision born from lived experience and deep conviction
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Founder Image - Left Side */}
          <div className="order-2 lg:order-1 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary/30 to-accent/20 rounded-3xl blur-2xl opacity-50" />

              {/* Image container */}
              <div className="relative bg-linear-to-br from-primary/20 to-accent/10 border-2 border-primary/30 rounded-3xl p-2 overflow-hidden">
                <div className="aspect-4/5 rounded-2xl overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Damilola Gbuyiro - Founder of RiseBridge Initiative"
                    width={500}
                    height={625}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating badge */}
              {/* <div className="absolute -bottom-4 -right-4 bg-primary text-white px-6 py-3 rounded-xl shadow-lg">
                <p className="text-sm font-bold">Founded Dec 12, 2025</p>
              </div> */}
            </div>
          </div>

          {/* Founder Info - Right Side */}
          <div className="order-1 lg:order-2 space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div>
              <h3 className="text-4xl sm:text-5xl font-bold mb-3 text-primary">Damilola Gbuyiro</h3>
              <p className="text-xl text-foreground font-bold mb-2">Founder, RiseBridge Initiative</p>
              <p className="text-lg text-muted-foreground">
                Chartered Accountant & Project Assistant Manager at KPMG London
              </p>
            </div>

            <div className="space-y-6">
              <div className="relative overflow-hidden bg-background border-2 border-primary/30 rounded-2xl p-6">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary pl-4">
                  <Heart className="w-5 h-5" />
                  The Conviction
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-4">
                  Driven by her strong commitment to social impact, Damilola has dedicated herself to the growth and
                  advancement of young adults, particularly those from underprivileged backgrounds. Her work experience,
                  discipline, and exposure in the corporate world have shaped her belief that access to skills is access
                  to hope.
                </p>
              </div>

              <div className="relative overflow-hidden bg-background border-2 border-accent/30 rounded-2xl p-6">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-accent" />
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-accent pl-4">
                  <Briefcase className="w-5 h-5" />
                  The Journey
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-4">
                  Though her efforts have long been active behind the scenes—quietly supporting individuals in
                  developing their potential—RiseBridge represents a transformation of her personal mission into a
                  structured platform for wider impact.
                </p>
              </div>

              <div className="relative overflow-hidden bg-background border-2 border-primary/30 rounded-2xl p-6">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-primary pl-4">
                  <Users className="w-5 h-5" />
                  The Mission
                </h4>
                <p className="text-muted-foreground leading-relaxed pl-4">
                  Through RiseBridge Africa, Damilola is building bridges for young people to rise, thrive, and take
                  ownership of their future. Hope is the foundation of progress.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6">
              <p className="text-primary font-bold text-xl italic text-center">
                "Talent is everywhere. Opportunity is not. RiseBridge exists to change that."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
