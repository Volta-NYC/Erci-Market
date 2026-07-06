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
  const { lang } = useLang()

  const text = {
    en: { home: "Home", about: "About", contact: "Contact", menu: "Menu", call: "Call" },
    es: { home: "Inicio", about: "Nosotros", contact: "Contacto", menu: "Menu", call: "Llamar" },
  }

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/90 shadow-[0_8px_30px_rgba(4,47,46,0.06)] backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="ERCI Market Corp home">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg bg-neutral-900 shadow-[0_14px_28px_rgba(17,24,39,0.18)] transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-orange-500">
            <img src="/favicon.png" alt="" className="h-10 w-10 rounded-md object-cover" />
          </span>
          <span className="leading-none">
            <span className="font-display block text-lg font-extrabold tracking-tight text-emerald-950">ERCI Market</span>
            <span className="mt-1 block text-[10px] font-black uppercase tracking-[0.24em] text-orange-500">Brooklyn, NY</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm font-bold text-emerald-950 md:flex">
          <Link href="/" className="relative transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all hover:text-red-600 hover:after:w-full">{text[lang].home}</Link>
          <Link href="/pages/about" className="relative transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all hover:text-red-600 hover:after:w-full">{text[lang].about}</Link>
          <Link href="/pages/menu" className="relative transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all hover:text-red-600 hover:after:w-full">{text[lang].menu}</Link>
          <Link href="/pages/contact" className="relative transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-red-600 after:transition-all hover:text-red-600 hover:after:w-full">{text[lang].contact}</Link>
        </div>

        <div className="flex items-center gap-2">
          <Link href="tel:+17188735127" className="shine-sweep relative inline-flex h-11 items-center justify-center gap-2 overflow-hidden rounded-lg bg-orange-500 px-4 text-sm font-black text-neutral-950 shadow-[0_16px_32px_rgba(249,115,22,0.26)] transition hover:-translate-y-0.5 hover:bg-orange-400">
            <PhoneIcon />
            <span className="hidden sm:inline">{text[lang].call}</span>
          </Link>
        </div>
      </nav>
      <div className="border-t border-emerald-900/8 bg-white/86 md:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-2 text-xs font-black text-emerald-950">
          <Link href="/" className="rounded-full bg-emerald-50 px-4 py-2">{text[lang].home}</Link>
          <Link href="/pages/about" className="rounded-full bg-emerald-50 px-4 py-2">{text[lang].about}</Link>
          <Link href="/pages/menu" className="rounded-full bg-emerald-50 px-4 py-2">{text[lang].menu}</Link>
          <Link href="/pages/contact" className="rounded-full bg-emerald-50 px-4 py-2">{text[lang].contact}</Link>
        </div>
      </div>
    </header>
  )
}
