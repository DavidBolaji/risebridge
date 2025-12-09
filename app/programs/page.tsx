"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Laptop, Wrench, Users, Briefcase, Heart, CheckCircle } from "lucide-react"

export default function Programs() {
  const programs = [
    {
      icon: Laptop,
      title: "Digital Skills Training",
      desc: "Basic computing, digital tools, online productivity, creative skills, and modern tech exposure.",
      items: ["Computing Basics", "Digital Tools", "Online Productivity", "Creative Digital Skills", "Tech Exposure"],
      color: "from-primary to-primary/60",
    },
    {
      icon: Wrench,
      title: "Vocational Skills Development",
      desc: "Practical community based skills like tailoring, hairmaking, crafts, repairs, and micro trades.",
      items: ["Tailoring", "Hairmaking", "Crafts", "Technical Repairs", "Micro trades"],
      color: "from-accent to-accent/60",
    },
    {
      icon: Briefcase,
      title: "Entrepreneurship Training",
      desc: "Business basics, money management, customer service, pricing, marketing, and start up guidance.",
      items: ["Business Basics", "Financial Literacy", "Customer Service", "Marketing", "Business Setup"],
      color: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Soft Skills & Leadership",
      desc: "Communication, confidence building, teamwork, professionalism, critical thinking.",
      items: ["Communication", "Confidence Building", "Teamwork", "Professionalism", "Critical Thinking"],
      color: "from-accent to-primary",
    },
    {
      icon: Heart,
      title: "Mentorship & Growth Support",
      desc: "Guidance from trained facilitators, community role models, and industry mentors.",
      items: ["One on One Mentoring", "Group Guidance", "Career Counseling", "Industry Connections", "Ongoing Support"],
      color: "from-primary to-primary/60",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/programs-hero-skills-training.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-primary/20" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Five pillars of empowerment designed to equip youth with skills for employment and entrepreneurship.
            </p>
          </div>
        </section>

        {/* Programs */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-5xl mx-auto space-y-8">
            {programs.map((program, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Gradient accent on hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col md:flex-row items-start gap-6">
                  <div className="shrink-0">
                    <div
                      className={`p-4 bg-linear-to-br ${program.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{program.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {program.items.map((item, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-primary">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-white text-balance">Ready to Get Started?</h2>
            <p className="text-xl text-white/80">
              Join our next cohort and transform your future with practical skills and mentorship.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-white/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
            >
              Join the Next Cohort
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
