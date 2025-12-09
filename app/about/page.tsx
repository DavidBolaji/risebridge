"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Target, Award, Users, Sparkles, ArrowRight } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Heart,
      title: "Empowerment",
      desc: "Giving youth the power to shape their futures through skills and opportunity",
      color: "from-rose-400 to-pink-500",
    },
    {
      icon: Target,
      title: "Opportunity",
      desc: "Creating pathways where none existed, bridging gaps between potential and success",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: Award,
      title: "Excellence",
      desc: "Delivering quality training and support that meets global standards",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Impact",
      desc: "Measurable, lasting change in communities through transformed lives",
      color: "from-blue-400 to-indigo-500",
    },
  ]

  const approach = [
    {
      title: "Practical",
      desc: "Hands on, real world skills training that prepares youth for actual market demands",
      icon: "🛠️",
    },
    {
      title: "Accessible",
      desc: "Open to underserved communities with no barriers to entry",
      icon: "🚪",
    },
    {
      title: "Youth Friendly",
      desc: "Modern, flexible learning methods designed for today's generation",
      icon: "🎯",
    },
    {
      title: "Impact Driven",
      desc: "Every program measured by real outcomes and life transformation",
      icon: "📈",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/about-hero-african-youth-empowerment.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-primary/20" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              About <span className="text-primary">RiseBridge</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Learn about our mission, story, and the values that drive us to empower youth across Nigeria.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              Our Purpose
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower underprivileged Youths by equipping them with practical skills, mentorship, and clear pathways
              to employment or entrepreneurship, enabling them to build meaningful and sustainable futures.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">RiseBridge Initiative was born from a simple but powerful conviction:</p>
              <div className="relative overflow-hidden bg-linear-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-3xl p-8">
                <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-primary to-accent rounded-full" />
                <p className="text-3xl font-bold text-primary pl-6 leading-relaxed">
                  Talent is everywhere. Opportunity is not.
                </p>
              </div>
              <p className="text-lg">
                Damilola Gbuyiro, the founder, saw firsthand how many brilliant young people remained stuck not from
                lack of potential, but from lack of access. This became a burden… and then a vision.
              </p>
              <p className="text-lg">
                On her birthday, she launched RiseBridge Initiative so that young people can rise with dignity, equipped
                with the skills and support they need to build meaningful futures.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                How We Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Our Approach</h2>
              <p className="text-lg text-muted-foreground">We design programs that create real, lasting impact</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {approach.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/5 to-accent/5 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                >
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full" />

                  <div className="relative p-8">
                    <div className="flex items-start gap-5">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center text-3xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-linear-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                What Drives Us
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Our Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Top gradient bar */}
                  <div className={`h-2 w-full bg-linear-to-r ${value.color}`} />

                  <div className="relative p-8">
                    {/* Icon and Title Row */}
                    <div className="flex items-center gap-5 mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-linear-to-br ${value.color} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-2xl">{value.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed">{value.desc}</p>

                    {/* Decorative element */}
                    <div className="absolute bottom-4 right-4">
                      <div
                        className={`w-20 h-20 rounded-full bg-linear-to-br ${value.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
