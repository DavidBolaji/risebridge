"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Zap, Award, Crown, CheckCircle, Copy, Check, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Donate() {
  const [copied, setCopied] = useState(false)

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("0123456789")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tiers = [
    {
      icon: Zap,
      amount: "₦5,000",
      name: "Seed Giver",
      emoji: "🌱",
      desc: "Provides materials for one learner.",
      impact: ["Training materials", "Digital resources", "Learning support"],
      color: "from-emerald-400 to-green-500",
    },
    {
      icon: Heart,
      amount: "₦20,000",
      name: "Growth Sponsor",
      emoji: "🌱",
      desc: "Funds internet for one training hub.",
      impact: ["Internet access", "Hub connectivity", "Multiple learners"],
      featured: true,
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Award,
      amount: "₦50,000",
      name: "Skill Champion",
      emoji: "🌱",
      desc: "Fully trains one young person.",
      impact: ["Complete training", "Materials & tools", "Mentorship"],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Crown,
      amount: "₦100,000+",
      name: "Bridge Partner",
      emoji: "🌱",
      desc: "Supports facilitators & community trainers.",
      impact: ["Facilitator stipends", "Program coordination", "Community impact"],
      color: "from-teal-500 to-emerald-600",
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
              backgroundImage: `url('/donate-hero-helping-hands.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-primary/20" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Support <span className="text-primary">RiseBridge</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Your contribution empowers young people with real skills and real opportunities.
            </p>
          </div>
        </section>

        {/* Bank Transfer Section */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-linear-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                Quick Donate
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Bank Transfer Details</h2>
              <p className="text-lg text-muted-foreground">Make a direct transfer to support our mission</p>
            </div>

            <div className="relative bg-linear-to-br from-primary to-accent rounded-3xl p-1 shadow-2xl shadow-primary/20">
              <div className="bg-card rounded-[22px] p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center md:text-left space-y-2">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Bank Name</p>
                    <p className="text-2xl font-bold text-foreground">GTBank</p>
                  </div>
                  <div className="text-center md:text-left space-y-2">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Account Name</p>
                    <p className="text-2xl font-bold text-foreground">RiseBridge Initiative</p>
                  </div>
                  <div className="text-center md:text-left space-y-2">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">Account Number</p>
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      <p className="text-3xl font-bold text-primary tracking-wider">0123456789</p>
                      <button
                        onClick={copyAccountNumber}
                        className="p-3 bg-primary/10 hover:bg-primary/20 rounded-xl transition-all duration-300 hover:scale-105"
                        title="Copy account number"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-primary" />
                        ) : (
                          <Copy className="w-5 h-5 text-primary" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                Choose Your Impact
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Choose Your Impact Level</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every contribution plants seeds of change. Select a tier that resonates with your heart.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                    tier.featured ? "md:scale-[1.02]" : ""
                  }`}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${tier.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <div className="absolute inset-0.5 bg-card rounded-[22px]" />

                  {/* Featured Badge */}
                  {tier.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-linear-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="relative z-10 p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-14 h-14 rounded-2xl bg-linear-to-br ${tier.color} flex items-center justify-center shadow-lg`}
                        >
                          <tier.icon className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="text-2xl">{tier.emoji}</p>
                          <h3 className="font-bold text-xl text-foreground">{tier.name}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Amount */}
                    <div className="mb-4">
                      <p className="text-4xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                        {tier.amount}
                      </p>
                      <p className="text-muted-foreground mt-1">{tier.desc}</p>
                    </div>

                    {/* Impact List */}
                    <div className="space-y-3 mb-8">
                      {tier.impact.map((impact, j) => (
                        <div key={j} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-muted-foreground">{impact}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 bg-linear-to-r ${tier.color} text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02]`}
                    >
                      Donate {tier.amount}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where Money Goes */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest bg-primary/10 px-4 py-2 rounded-full">
                Transparency
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold mt-6 mb-4 text-balance">Where Your Money Goes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Skill tools & equipment",
                "Training materials",
                "Vocational kits",
                "Internet & digital access",
                "Trainers & facilitators",
                "Learning spaces",
                "Mentorship support",
                "Community engagement",
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-4 p-5 bg-background border-2 border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-primary group-hover:text-white" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Methods */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">Donation Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:bg-primary/10" />
                <h3 className="font-bold text-2xl mb-6 text-primary">Bank Transfer</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Name:</span> RiseBridge Initiative
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Account No:</span> 0123456789
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Bank:</span> GTBank
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden bg-card border-2 border-border rounded-3xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-300 group-hover:bg-primary/10" />
                <h3 className="font-bold text-2xl mb-6 text-primary">International Transfer</h3>
                <p className="text-muted-foreground mb-6">
                  Support RiseBridge from anywhere in the world through our international payment link.
                </p>
                <button className="px-6 py-3 border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white transition-all font-bold">
                  International Link
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-linear-to-br from-primary via-primary to-accent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-balance">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/80">
              Every contribution, no matter the size, helps us empower youth and build futures.
            </p>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-md mx-auto">
              <p className="text-white/80 text-sm mb-2">Quick Transfer</p>
              <p className="text-3xl font-bold text-white tracking-wider">GTBank - 0123456789</p>
              <p className="text-white/60 text-sm mt-2">RiseBridge Initiative</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
