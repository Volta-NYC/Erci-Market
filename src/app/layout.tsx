import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { LanguageProvider } from "@/lib/context/LanguageContext"

export const metadata = {
  title: "Erci Market Corp",
  description: "A Brooklyn neighborhood market for Peruvian and Ecuadorian products, fresh juices, sandwiches, groceries, and daily essentials."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-white text-emerald-950 antialiased">
        <LanguageProvider>
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
