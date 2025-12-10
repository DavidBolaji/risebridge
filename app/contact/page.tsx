"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import { useState } from "react";
import toast from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        <section className="relative min-h-[60vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/contact-hero-connect-with-us.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-primary/20" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
              Have questions, partnership ideas, or want to volunteer? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-balance">We'd Love to Connect</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  desc: "Reach out to us via email",
                  contact: "enquiries@risebridgeinitiative.com",
                  href: "mailto:enquiries@risebridgeinitiative.com",
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  desc: "Chat with us on WhatsApp",
                  contact: "+234 XXX XXX XXXX",
                  href: "#",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  desc: "Based in Nigeria",
                  contact: "Multiple Learning Hubs",
                  href: "#",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  desc: "Call us to discuss opportunities",
                  contact: "+234 XXX XXX XXXX",
                  href: "tel:",
                },
              ].map((method, i) => (
                <a
                  key={i}
                  href={method.href}
                  className="group bg-card border-2 border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="p-4 bg-primary/10 group-hover:bg-primary group-hover:text-white rounded-xl w-fit mb-4 transition-all duration-300">
                    <method.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.desc}</p>
                  <p className="font-bold text-primary">{method.contact}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28 bg-card">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">Follow Us on Social</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Instagram", href: "https://www.instagram.com/risebridgeinitiative?igsh=MTJqcHNnYW9mYXp2NA%3D%3D&utm_source=qr" },
                { name: "Facebook", href: "https://facebook.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
                { name: "Twitter", href: "https://twitter.com" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 font-bold hover:-translate-y-1 hover:shadow-lg"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-balance">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                required
                name="name"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                name="email"
                className="w-full px-5 py-4 bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                name="message"
                required
                className="w-full px-5 py-4 bg-card border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors resize-none text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl text-lg"
              >
                {loading ? <div className="items-center justify-center flex"><Spinner /></div> : "Send Message"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
