"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

export default function HomePage() {
  const { lang } = useLang()

  const text = {
    en: {
      hero: "Your Neighborhood Market in Brooklyn",
      sub: "Authentic Peruvian & Ecuadorian products, fresh juices, sandwiches, and more — open every day.",
      cta1: "See Our Menu",
      cta2: "Contact Us",
      feat1title: "Fresh Juices & Smoothies",
      feat1desc: "Made fresh daily with real fruit.",
      feat2title: "Breakfast",
      feat2desc: "Hot sandwiches and fresh juices served 7 AM – 2 PM.",
      feat3title: "Free Delivery",
      feat3desc: "Free delivery on orders over $75.",
      feat4title: "Free Coffee",
      feat4desc: "Ask our staff about free in-store coffee.",
      hours: "Open Every Day",
      hourstime: "6:30 AM – 11:00 PM",
    },
    es: {
      hero: "Tu Mercado del Vecindario en Brooklyn",
      sub: "Productos peruanos y ecuatorianos, jugos frescos, sándwiches y más — abierto todos los días.",
      cta1: "Ver Nuestro Menú",
      cta2: "Contáctanos",
      feat1title: "Jugos y Batidos Frescos",
      feat1desc: "Preparados diariamente con fruta natural.",
      feat2title: "Desayuno",
      feat2desc: "Sándwiches calientes y jugos frescos de 7 AM a 2 PM.",
      feat3title: "Delivery Gratis",
      feat3desc: "Delivery gratuito en compras mayores a $75.",
      feat4title: "Café Gratis",
      feat4desc: "Pregunta a nuestro personal sobre el café gratis.",
      hours: "Abierto Todos los Días",
      hourstime: "6:30 AM – 11:00 PM",
    },
  }

  const t = text[lang]

  return (
    <div className="space-y-16">

      {/* Hero */}
      <div className="bg-neutral-900 text-white rounded-2xl px-10 py-20 text-center space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          <span className="text-orange-500">ERCI MARKET</span> CORP
        </h1>
        <p className="text-xl text-neutral-300 max-w-xl mx-auto">{t.hero}</p>
        <p className="text-neutral-400 max-w-lg mx-auto">{t.sub}</p>
        <div className="flex gap-4 justify-center">
          <Link href="/pages/menu" className="px-6 py-3 bg-orange-500 text-black font-bold rounded-md hover:bg-orange-400 transition-colors">
            {t.cta1}
          </Link>
          <Link href="/pages/contact" className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-black transition-colors">
            {t.cta2}
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-2 gap-6">
        {[
          { title: t.feat1title, desc: t.feat1desc, icon: "🥤" },
          { title: t.feat2title, desc: t.feat2desc, icon: "🥪" },
          { title: t.feat3title, desc: t.feat3desc, icon: "🚚" },
          { title: t.feat4title, desc: t.feat4desc, icon: "☕" },
        ].map((f) => (
          <div key={f.title} className="border border-neutral-200 rounded-xl p-6 space-y-2">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="font-bold text-lg">{f.title}</h3>
            <p className="text-neutral-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Hours */}
      <div className="bg-orange-500 text-black rounded-2xl px-10 py-10 text-center space-y-2">
        <p className="text-2xl font-bold">{t.hours}</p>
        <p className="text-4xl font-black">{t.hourstime}</p>
        <p className="text-sm mt-2">3289 Fulton St, Brooklyn, NY 11208 · (718) 873-5127</p>
      </div>

    </div>
  )
}