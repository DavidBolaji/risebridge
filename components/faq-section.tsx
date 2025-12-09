"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is RiseBridge Initiative?",
    answer:
      "RiseBridge Initiative is a youth empowerment hub dedicated to equipping underprivileged young people with practical digital, vocational, and entrepreneurial skills that create pathways to employment, income, and independence.",
  },
  {
    question: "Who can benefit from RiseBridge programs?",
    answer:
      "Our programs are designed for underprivileged youth aged 16-30 who lack access to formal education or job opportunities. We prioritize individuals from low-income communities who show dedication to learning and growth.",
  },
  {
    question: "How can I donate to RiseBridge?",
    answer:
      "Click the donate button and proceed to filling the form and we will reach out to you.",
  },
  {
    question: "What skills do you teach?",
    answer:
      "We offer Digital Skills (computing, online tools, creative digital skills), Vocational Skills (tailoring, crafts, repairs), Soft Skills & Leadership, Entrepreneurship Training, and ongoing Mentorship Support.",
  },
  {
    question: "How can I volunteer or partner with RiseBridge?",
    answer:
      "We welcome volunteers, mentors, and corporate partners. Visit our Contact page to reach out, or email us at info@risebridgeafrica.org to discuss partnership opportunities.",
  },
  {
    question: "Where are RiseBridge hubs located?",
    answer:
      "We are currently establishing our pilot hubs in Lagos, Nigeria, with plans to expand to other states. Our goal is to reach communities with the highest need for youth empowerment.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about RiseBridge Initiative
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-background border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border hover:border-primary/30"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span
                  className={`font-bold text-lg pr-4 transition-colors ${openIndex === index ? "text-primary" : "text-foreground"}`}
                >
                  {faq.question}
                </span>
                <div
                  className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index ? "bg-primary text-white rotate-180" : "bg-primary/10 text-primary"
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
