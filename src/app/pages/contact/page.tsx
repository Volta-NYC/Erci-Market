"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

const content = {
  en: {
    title: "Come through Fulton Street.",
    subtitle: "Open every day for groceries, breakfast, fresh drinks, and Latin market staples.",
    call: "Call now",
    directions: "Get directions",
    cards: [
      ["Address", "3289 Fulton St, Brooklyn, NY 11208"],
      ["Phone", "(718) 873-5127"],
      ["Hours", "Open every day, 6:30 AM - 11:00 PM"],
    ],
  },
  es: {
    title: "Ven a Fulton Street.",
    subtitle: "Abierto todos los dias para abarrotes, desayuno, bebidas frescas y productos latinos.",
    call: "Llamar ahora",
    directions: "Como llegar",
    cards: [
      ["Direccion", "3289 Fulton St, Brooklyn, NY 11208"],
      ["Telefono", "(718) 873-5127"],
      ["Horario", "Abierto todos los dias, 6:30 AM - 11:00 PM"],
    ],
  },
}

const socials = [
  ["Instagram", "https://www.instagram.com/ercimarketcorp"],
  ["TikTok", "https://www.tiktok.com/@ercimarketcorp"],
  ["Facebook", "https://www.facebook.com/ercimarketcorp"],
]

export default function ContactPage() {
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="space-y-12 py-12">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div className="scroll-reveal-left">
          <h1 className="text-5xl font-black leading-tight text-emerald-950 sm:text-6xl">{t.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">{t.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="tel:+17188735127" className="inline-flex h-12 items-center justify-center rounded-lg bg-red-600 px-6 text-sm font-black text-white transition hover:bg-red-700">
              {t.call}
            </Link>
            <Link href="https://maps.google.com/?q=3289+Fulton+St+Brooklyn+NY+11208" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg bg-yellow-300 px-6 text-sm font-black text-emerald-950 transition hover:bg-yellow-200">
              {t.directions}
            </Link>
          </div>
        </div>

        <div className="reveal-stagger grid gap-4 sm:grid-cols-3">
          {t.cards.map(([label, value]) => (
            <div key={label} className="rounded-lg border border-emerald-900/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(4,47,46,0.12)]">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-red-600">{label}</p>
              <p className="mt-3 text-sm font-bold leading-6 text-emerald-950">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.34fr]">
        <div className="scroll-image-wipe overflow-hidden rounded-lg border border-emerald-900/10">
          <iframe
            title="Map to ERCI Market Corp"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.493340677516!2d-73.8764388!3d40.6833709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25dfd7c0e608d%3A0x317cbb70dab50b57!2sERCI%20MARKET%20CORP!5e1!3m2!1sen!2sus!4v1779333373240!5m2!1sen!2sus"
            width="100%"
            height="460"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <aside className="scroll-reveal-right rounded-lg bg-emerald-950 p-7 text-white">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-yellow-300">Social</p>
          <div className="mt-6 flex flex-col gap-3">
            {socials.map(([label, href], index) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" className="scroll-reveal rounded-lg border border-white/12 px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:bg-white/10" style={{ animationDelay: `${index * 70}ms` }}>
                {label}
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  )
}
