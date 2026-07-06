import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { LanguageProvider } from "@/lib/context/LanguageContext"
import ScrollRevealRuntime from "@/lib/components/scroll-reveal-runtime"
import { Bricolage_Grotesque, Inter } from "next/font/google"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
})

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata = {
  title: "Erci Market Corp",
  description: "A Brooklyn neighborhood market for Peruvian and Ecuadorian products, fresh juices, sandwiches, groceries, and daily essentials.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${display.variable} ${sans.variable} min-h-screen bg-white text-emerald-950 antialiased`}>
        <LanguageProvider>
          <ScrollRevealRuntime />
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
