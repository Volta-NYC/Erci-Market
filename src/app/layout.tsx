import "./globals.css"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import { LanguageProvider } from "@/lib/context/LanguageContext"

export const metadata = {
  title: "Erci Market Corp",
  description: "Your neighborhood market in Brooklyn, NY. Authentic Peruvian & Ecuadorian products, fresh juices, sandwiches, and more."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}