"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import {
  TrendingUp,
  Globe,
  Award,
  Users,
  CheckCircle,
  Sparkles,
  Target,
  Lightbulb,
  HandHeart,
  Link2,
  PartyPopper,
} from "lucide-react"

export default function Impact() {
  const supportCreates = [
    {
      icon: Users,
      title: "Youth Equipped",
      desc: "With market relevant skills that open doors to opportunity",
      stat: "500+",
      statLabel: "By 2028",
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: TrendingUp,
      title: "Families Uplifted",
      desc: "Breaking generational poverty cycles through empowerment",
      stat: "1000+",
      statLabel: "Lives Touched",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Globe,
      title: "Communities Transformed",
      desc: "Creating ripple effects of positive change across regions",
      stat: "5+",
      statLabel: "States",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Award,
      title: "Economic Empowerment",
      desc: "Building self sufficient, income generating individuals",
      stat: "80%",
      statLabel: "Employment Rate",
      color: "from-amber-400 to-orange-500",
    },
  ]

  const impactSteps = [
    {
      num: 1,
      title: "Identify",
      desc: "Identify underserved youth in target communities through community partnerships and outreach programs",
      icon: Target,
    },
    {
      num: 2,
      title: "Train",
      desc: "Provide practical skills training tailored to individual needs and market demands",
      icon: Lightbulb,
    },
    {
      num: 3,
      title: "Mentor",
      desc: "Pair learners with industry mentors who provide guidance, support, and professional insights",
      icon: HandHeart,
    },
    {
      num: 4,
      title: "Connect",
      desc: "Link graduates to employment opportunities, internships, or micro business support",
      icon: Link2,
    },
    {
      num: 5,
      title: "Track & Celebrate",
      desc: "Monitor outcomes, measure impact, and celebrate success stories within our community",
      icon: PartyPopper,
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
              backgroundImage: `url('/african-students-celebrating-graduation-success-gr.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-primary/20" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Our <span className="text-primary">Impact</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              See how RiseBridge is transforming lives and breaking poverty cycles through skills empowerment.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto space-y-8">
            <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              The Challenge
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">The Problem We're Solving</h2>
            <div className="relative overflow-hidden bg-linear-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-3xl p-8 shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-primary to-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed pl-6">
                Youth unemployment and underemployment keep millions in cycles of poverty. RiseBridge Initiative exists
                to change this by providing practical, income driven skills that unlock opportunity and enable youth to
                break free from poverty cycles.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Model - Vertical Timeline */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                Our Process
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Our Impact Model</h2>
              <p className="text-lg text-muted-foreground">A proven pathway from potential to success</p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-primary rounded-full" />

              {/* Steps */}
              <div className="space-y-12">
                {impactSteps.map((step, i) => (
                  <div
                    key={step.num}
                    className={`relative flex items-center gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Step Number Circle - Centered on timeline */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
                      <div className="w-10 h-10 bg-linear-to-br from-primary to-accent text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/30 ring-4 ring-background">
                        {step.num}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div
                      className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                    >
                      <div className="group relative overflow-hidden bg-background border-2 border-border rounded-3xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                        {/* Decorative gradient */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <step.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                Our Vision
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Our Roadmap 2026–2028</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1: Pilot",
                  year: "2026",
                  goals: [
                    "20–50 learners",
                    "1–2 learning hubs",
                    "Basic digital & vocational training",
                    "Mentorship pilot",
                  ],
                  color: "from-emerald-400 to-green-500",
                },
                {
                  phase: "Phase 2: Expansion",
                  year: "2027",
                  goals: ["150–300 learners", "3–5 hubs", "Corporate partnerships", "Digital Academy launch"],
                  color: "from-green-500 to-teal-500",
                },
                {
                  phase: "Phase 3: Scale",
                  year: "2028+",
                  goals: ["500+ learners yearly", "Multi state coverage", "National reputation", "Sustainable model"],
                  color: "from-teal-500 to-emerald-600",
                },
              ].map((phase, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Top gradient bar */}
                  <div className={`h-2 w-full bg-linear-to-r ${phase.color}`} />

                  {/* Phase indicator circle */}
                  <div className="absolute top-6 right-6 w-20 h-20 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors" />

                  <div className="relative z-10 p-8">
                    <p
                      className={`text-5xl font-bold mb-2 bg-linear-to-r ${phase.color} bg-clip-text text-transparent`}
                    >
                      {phase.year}
                    </p>
                    <h3 className="font-bold text-xl mb-6">{phase.phase}</h3>
                    <ul className="space-y-3">
                      {phase.goals.map((goal, j) => (
                        <li key={j} className="text-muted-foreground flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          {goal}
                        </li>
                      ))}
                    </ul>
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
                Your Contribution
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Your Support Creates</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every donation ripples outward, creating waves of positive change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportCreates.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-3xl bg-card border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                >
                  {/* Gradient background effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Top gradient bar */}
                  <div className={`h-2 w-full bg-linear-to-r ${item.color}`} />

                  {/* Stat badge */}
                  <div className="absolute top-6 right-6">
                    <div
                      className={`px-4 py-2 rounded-xl bg-linear-to-r ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <p className="text-2xl font-bold">{item.stat}</p>
                      <p className="text-xs opacity-80">{item.statLabel}</p>
                    </div>
                  </div>

                  <div className="relative p-8 pt-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed pr-16">{item.desc}</p>

                    {/* Progress indicator */}
                    <div className="mt-6">
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-linear-to-r ${item.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                          style={{ width: "70%" }}
                        />
                      </div>
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
