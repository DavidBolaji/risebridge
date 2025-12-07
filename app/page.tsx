"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FounderSpotlight } from "@/components/founder-spotlight"
import { FAQSection } from "@/components/faq-section"
import Link from "next/link"
import {
  ArrowRight,
  Target,
  Users,
  Sparkles,
  Heart,
  Zap,
  BookOpen,
  GraduationCap,
  Briefcase,
  TrendingUp,
  Home,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/african-youth-students-learning-computer-skills-in.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-transparent to-accent/20" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                <div className="space-y-4">
                  <p className="text-primary font-bold tracking-widest uppercase text-sm">Welcome to RiseBridge</p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight text-balance">
                    Bridging Gaps,
                    <span className="text-primary block">Raising Futures</span>
                  </h1>
                </div>
                <p className="text-xl text-white/80 max-w-lg leading-relaxed">
                  Empowering underprivileged youths with digital, vocational, and entrepreneurial skills that create
                  pathways to employment, income, and independence.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Link
                    href="/programs"
                    className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30 inline-flex items-center gap-2 group text-lg"
                  >
                    Explore Programs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 text-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200 hidden lg:block">
                {/* Glass Card 1 - Stats */}
                <div className="absolute top-0 right-0 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                        <Users className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-white">50+</p>
                        <p className="text-sm text-white/70">Youth Target 2026</p>
                      </div>
                    </div>
                    <div className="h-px bg-white/20" />
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-linear-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                        <Target className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-4xl font-bold text-white">5</p>
                        <p className="text-sm text-white/70">Skill Pillars</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glass Card 2 - Mission */}
                <div className="mt-48 ml-0 w-80 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-8 h-8 text-primary" />
                      <h3 className="text-xl font-bold text-white">Our Mission</h3>
                    </div>
                    <p className="text-white/80 leading-relaxed text-sm">
                      To equip young people with practical skills that create pathways to employment, income, and
                      independence.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-primary/30 text-primary text-xs font-bold rounded-full border border-primary/30">
                        Digital Skills
                      </span>
                      <span className="px-3 py-1.5 bg-accent/30 text-accent text-xs font-bold rounded-full border border-accent/30">
                        Vocational
                      </span>
                      <span className="px-3 py-1.5 bg-white/20 text-white text-xs font-bold rounded-full border border-white/20">
                        Leadership
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Spotlight */}
        <FounderSpotlight />

        {/* Vision Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="space-y-4">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">What Drives Us</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-balance">Our Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A world where every young person is equipped with the skills, confidence, and opportunities they need to
                rise, thrive, and build meaningful futures.
              </p>
            </div>
            <div className="bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-xl shadow-primary/5">
              <p className="text-xl font-semibold text-primary text-balance italic">
                "Access to skills is access to hope, and hope is the foundation of progress."
              </p>
            </div>
          </div>
        </section>

        {/* What We Do - Improved Cards */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Approach</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-balance">What We Do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive 5-pillar empowerment model designed to transform lives
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Digital Skills Training",
                  desc: "Computing, online tools, creative digital skills, and modern tech exposure",
                  gradient: "from-emerald-500 to-teal-600",
                  bgGlow: "bg-emerald-500/20",
                },
                {
                  icon: Sparkles,
                  title: "Vocational Skills",
                  desc: "Community-based practical trades like tailoring, crafts, and repairs",
                  gradient: "from-teal-500 to-cyan-600",
                  bgGlow: "bg-teal-500/20",
                },
                {
                  icon: Heart,
                  title: "Soft Skills & Leadership",
                  desc: "Communication, confidence, teamwork, and professionalism",
                  gradient: "from-green-500 to-emerald-600",
                  bgGlow: "bg-green-500/20",
                },
                {
                  icon: Target,
                  title: "Entrepreneurship Training",
                  desc: "Business basics, financial literacy, and micro-business setup",
                  gradient: "from-lime-500 to-green-600",
                  bgGlow: "bg-lime-500/20",
                },
                {
                  icon: Users,
                  title: "Mentorship Support",
                  desc: "Guidance from industry experts and community mentors",
                  gradient: "from-emerald-600 to-green-700",
                  bgGlow: "bg-emerald-600/20",
                },
                {
                  icon: BookOpen,
                  title: "Employment Pathways",
                  desc: "Clear routes to jobs, internships, and business opportunities",
                  gradient: "from-green-600 to-teal-700",
                  bgGlow: "bg-green-600/20",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                >
                  {/* Background glow effect */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 ${item.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`mb-6 p-4 bg-linear-to-br ${item.gradient} rounded-2xl w-fit shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>

                    {/* Decorative line */}
                    <div className="mt-6 h-1 w-12 bg-linear-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">What We Stand For</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-balance">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at RiseBridge
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Empowerment",
                  desc: "We believe in giving young people the tools, knowledge, and confidence to take control of their futures and create lasting change.",
                  icon: Zap,
                  color: "emerald",
                },
                {
                  title: "Integrity",
                  desc: "Transparency and honesty guide every decision we make, ensuring trust with our learners, partners, and supporters.",
                  icon: Target,
                  color: "teal",
                },
                {
                  title: "Community",
                  desc: "We foster belonging and collective growth, building strong networks that support individuals long after training ends.",
                  icon: Users,
                  color: "green",
                },
                {
                  title: "Excellence",
                  desc: "We are committed to delivering high-quality programs that create real, measurable impact in the lives of young people.",
                  icon: Sparkles,
                  color: "lime",
                },
              ].map((value, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-background border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div
                    className={`absolute top-0 right-0 w-32 h-32 bg-${value.color}-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`}
                  />

                  <div className="relative z-10 flex gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">The Big Picture</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-balance">Why This Matters</h2>
            </div>
            <div className="space-y-8">
              <div className="relative overflow-hidden bg-card border-2 border-destructive/30 rounded-3xl p-8 shadow-xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-destructive to-destructive/40" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-destructive/10 rounded-full blur-3xl" />
                <div className="pl-6 relative z-10">
                  <p className="text-lg font-bold text-destructive uppercase tracking-wide mb-4">The Challenge</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Nigeria has one of the highest youth unemployment rates in Africa. Despite a population where over
                    60% are young people, millions lack access to market-relevant skills. The root causes are clear:
                    limited digital literacy, no vocational training access, lack of mentorship, and no clear pathways
                    to opportunity.
                  </p>
                </div>
              </div>

              <div className="relative overflow-hidden bg-card border-2 border-primary/30 rounded-3xl p-8 shadow-xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-primary to-accent" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="pl-6 relative z-10">
                  <p className="text-lg font-bold text-primary uppercase tracking-wide mb-4">The Solution</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    RiseBridge closes this gap with practical, accessible, and impact-driven programs. We equip
                    underprivileged youth with the skills they need to secure employment, start micro-businesses, and
                    build economic independence. This breaks poverty cycles and unlocks human potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Our Roadmap</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-balance">Our Growth Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic phases to maximize our impact across Nigeria
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2026",
                  phase: "Pilot Phase",
                  details: ["50 learners trained", "2 community hubs", "Foundational programs", "Initial partnerships"],
                  status: "Starting Soon",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  year: "2027",
                  phase: "Growth Phase",
                  details: ["300+ learners", "5 training hubs", "Digital academy launch", "Corporate partnerships"],
                  status: "Planned",
                  gradient: "from-teal-500 to-green-600",
                },
                {
                  year: "2028+",
                  phase: "Scale Phase",
                  details: ["500+ learners", "Multi-state presence", "National recognition", "Sustainable model"],
                  status: "Vision",
                  gradient: "from-green-500 to-emerald-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-background border-2 border-border rounded-3xl hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
                >
                  {/* Header with gradient */}
                  <div className={`bg-linear-to-r ${item.gradient} p-6 text-white`}>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-3">
                      {item.status}
                    </span>
                    <p className="text-4xl font-bold">{item.year}</p>
                    <h3 className="text-xl font-bold mt-1">{item.phase}</h3>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {item.details.map((detail, j) => (
                        <li key={j} className="flex items-center gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-primary font-bold text-sm uppercase tracking-widest">Make a Difference</span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-balance">Your Support Creates</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every contribution helps us transform lives and build brighter futures
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Skilled Graduates",
                  desc: "Young people equipped with market-ready digital and vocational skills, prepared to enter the workforce with confidence.",
                  stat: "50+",
                  statLabel: "Target by 2026",
                },
                {
                  icon: Briefcase,
                  title: "Employment Ready",
                  desc: "Direct pathways to jobs, internships, and apprenticeships through our network of partners and employers.",
                  stat: "80%",
                  statLabel: "Employment Goal",
                },
                {
                  icon: TrendingUp,
                  title: "Micro-Entrepreneurs",
                  desc: "Youth empowered to start their own businesses, generating income and creating opportunities for others.",
                  stat: "30%",
                  statLabel: "Business Starters",
                },
                {
                  icon: Home,
                  title: "Stronger Communities",
                  desc: "Families uplifted and communities strengthened as young people become productive, contributing members.",
                  stat: "100+",
                  statLabel: "Families Impacted",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                >
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">{item.stat}</p>
                        <p className="text-xs text-muted-foreground">{item.statLabel}</p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>

                    {/* Progress bar decoration */}
                    <div className="mt-6 h-1.5 bg-border rounded-full overflow-hidden">
                      <div className="h-full bg-linear-to-r from-primary to-accent rounded-full w-0 group-hover:w-full transition-all duration-700" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-linear-to-br from-primary via-primary to-accent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold text-white text-balance">Be Part of the Journey</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                Your support helps us train, equip, and empower young people to step into their future with confidence
                and dignity. Together, we can bridge gaps and raise futures.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/impact"
                className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl inline-flex items-center gap-2 group text-lg"
              >
                See Our Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
