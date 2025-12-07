import type React from "react"
import { Oswald } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata = {
  title: "RiseBridge Initiative - Empowering Youth Through Skills",
  description:
    "RiseBridge empowers underprivileged youths by equipping them with digital, vocational, and entrepreneurial skills.",
  openGraph: {
    title: "RiseBridge Initiative - Empowering Youth Through Skills",
    description:
      "RiseBridge empowers underprivileged youths by equipping them with digital, vocational, and entrepreneurial skills.",
    url: "https://your-domain.com",
    siteName: "RiseBridge Initiative",
    images: [
      {
        url: "/images/logo.png", // must be in /public
        width: 1200,
        height: 630,
        alt: "RiseBridge Initiative Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RiseBridge Initiative - Empowering Youth Through Skills",
    description:
      "RiseBridge empowers underprivileged youths by equipping them with digital, vocational, and entrepreneurial skills.",
    images: ["/images/logo.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${oswald.className} antialiased`}>
        <ThemeProvider>
          <ScrollToTop />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
