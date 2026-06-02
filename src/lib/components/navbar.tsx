"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

export default function Navbar() {
  const { lang, toggleLang } = useLang()

  const text = {
    en: { home: "Home", about: "About", contact: "Contact", menu: "Menu" },
    es: { home: "Inicio", about: "Nosotros", contact: "Contacto", menu: "Menú" },
  }

  return (
    <nav className="w-full bg-neutral-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/" className="text-orange-500 hover:text-orange-400">
            ERCI MARKET <span className="text-white">CORP</span>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="flex gap-6 text-sm items-center">
          <Link href="/" className="hover:text-orange-500 transition-colors">{text[lang].home}</Link>
          <Link href="/pages/about" className="hover:text-orange-500 transition-colors">{text[lang].about}</Link>
          <Link href="/pages/menu" className="hover:text-orange-500 transition-colors">{text[lang].menu}</Link>
          <Link href="/pages/contact" className="hover:text-orange-500 transition-colors">{text[lang].contact}</Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="ml-4 px-3 py-1 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-colors text-xs font-bold"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
        </div>

      </div>
    </nav>
  )
}