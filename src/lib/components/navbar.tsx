"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M7.3 4.8 9 8.7l-2 1.5c1.1 2.4 3.1 4.4 5.5 5.5l1.5-2 3.9 1.7-.6 3.4c-.2 1-1.1 1.7-2.1 1.6C8.6 20 4 15.4 3.6 8.8c-.1-1 .6-1.9 1.6-2.1l2.1-.4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navbar() {
  const { lang, toggleLang } = useLang()

  const text = {
    en: { home: "Home", about: "About", contact: "Contact", menu: "Menu", call: "Call" },
    es: { home: "Inicio", about: "Nosotros", contact: "Contacto", menu: "Menu", call: "Llamar" },
  }

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/92 backdrop-blur">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="ERCI Market Corp home">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-950 text-base font-black text-white shadow-sm transition group-hover:bg-red-600">
            E
          </span>
          <span className="leading-none">
            <span className="block text-base font-black tracking-tight text-emerald-950">ERCI Market</span>
            <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.22em] text-red-600">Brooklyn, NY</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-bold text-emerald-950 md:flex">
          <Link href="/" className="transition hover:text-red-600">{text[lang].home}</Link>
          <Link href="/pages/about" className="transition hover:text-red-600">{text[lang].about}</Link>
          <Link href="/pages/menu" className="transition hover:text-red-600">{text[lang].menu}</Link>
          <Link href="/pages/contact" className="transition hover:text-red-600">{text[lang].contact}</Link>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="h-10 rounded-lg border border-emerald-900/15 px-3 text-xs font-black text-emerald-950 transition hover:border-red-600 hover:text-red-600"
            type="button"
          >
            {lang === "en" ? "ES" : "EN"}
          </button>
          <Link href="tel:+17188735127" className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-red-600 px-4 text-sm font-black text-white transition hover:bg-red-700">
            <PhoneIcon />
            <span className="hidden sm:inline">{text[lang].call}</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}
