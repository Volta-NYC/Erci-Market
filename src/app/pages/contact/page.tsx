"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

const content = {
  en: {
    title: "Come through Fulton Street.",
    subtitle: "Open every day for groceries, breakfast, fresh drinks, and Latin market staples.",
    call: "Call now",
    directions: "Get directions",
    formTitle: "Send a message",
    formSubtitle: "Questions about delivery, availability, or catering-style orders? Send the store a note.",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Send message",
    success: "Thanks. Your message is ready for the ERCI Market team.",
    socialTitle: "Social",
    socialCopy: "Follow ERCI Market for fresh juice, breakfast, and market updates.",
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
    formTitle: "Enviar mensaje",
    formSubtitle: "Preguntas sobre delivery, disponibilidad u ordenes grandes? Envia una nota a la tienda.",
    name: "Nombre",
    email: "Email",
    phone: "Telefono",
    message: "Mensaje",
    submit: "Enviar mensaje",
    success: "Gracias. Tu mensaje esta listo para el equipo de ERCI Market.",
    socialTitle: "Social",
    socialCopy: "Sigue a ERCI Market para ver jugos frescos, desayunos y novedades de la tienda.",
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
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

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

      <section className="scroll-reveal grid gap-6 lg:grid-cols-[1fr_0.42fr]">
        <div className="grid gap-8 rounded-[28px] border border-emerald-900/10 bg-white p-6 shadow-[0_22px_70px_rgba(4,47,46,0.08)] lg:grid-cols-[0.46fr_1fr] lg:p-8">
          <div className="scroll-reveal-left">
            <h2 className="font-display text-4xl font-extrabold leading-tight text-emerald-950">{t.formTitle}</h2>
            <p className="mt-4 text-sm font-medium leading-6 text-zinc-600">{t.formSubtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">{t.name}</span>
              <input required name="name" className="mt-2 h-12 w-full rounded-lg border border-emerald-900/15 bg-emerald-50/40 px-4 text-sm font-semibold text-emerald-950 outline-none transition focus:border-orange-500 focus:bg-white" />
            </label>
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">{t.email}</span>
              <input required type="email" name="email" className="mt-2 h-12 w-full rounded-lg border border-emerald-900/15 bg-emerald-50/40 px-4 text-sm font-semibold text-emerald-950 outline-none transition focus:border-orange-500 focus:bg-white" />
            </label>
            <label className="block">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">{t.phone}</span>
              <input type="tel" name="phone" className="mt-2 h-12 w-full rounded-lg border border-emerald-900/15 bg-emerald-50/40 px-4 text-sm font-semibold text-emerald-950 outline-none transition focus:border-orange-500 focus:bg-white" />
            </label>
            <label className="block sm:row-span-2">
              <span className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">{t.message}</span>
              <textarea required name="message" rows={5} className="mt-2 min-h-[128px] w-full resize-none rounded-lg border border-emerald-900/15 bg-emerald-50/40 px-4 py-3 text-sm font-semibold text-emerald-950 outline-none transition focus:border-orange-500 focus:bg-white" />
            </label>
            <div className="flex flex-col justify-end gap-3">
              <button type="submit" className="shine-sweep relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-orange-500 px-6 text-sm font-black text-neutral-950 shadow-[0_16px_32px_rgba(249,115,22,0.22)] transition hover:-translate-y-0.5 hover:bg-orange-400">
                {t.submit}
              </button>
              {submitted ? <p className="text-sm font-bold text-emerald-700">{t.success}</p> : null}
            </div>
          </form>
        </div>

        <aside className="rounded-[28px] bg-emerald-950 p-7 text-white shadow-[0_22px_70px_rgba(4,47,46,0.18)]">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-yellow-300">{t.socialTitle}</p>
          <p className="mt-5 text-2xl font-black leading-tight">{t.socialCopy}</p>
          <div className="mt-7 flex flex-col gap-3">
            {socials.map(([label, href], index) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-white/12 px-4 py-3 text-sm font-black transition hover:-translate-y-0.5 hover:bg-white/10" style={{ animationDelay: `${index * 70}ms` }}>
                {label}
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="scroll-reveal relative left-1/2 w-screen -translate-x-1/2 border-y border-emerald-900/10 bg-emerald-950/5 px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white shadow-[0_24px_70px_rgba(4,47,46,0.12)]">
          <iframe
            title="Map to ERCI Market Corp"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.493340677516!2d-73.8764388!3d40.6833709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25dfd7c0e608d%3A0x317cbb70dab50b57!2sERCI%20MARKET%20CORP!5e1!3m2!1sen!2sus!4v1779333373240!5m2!1sen!2sus"
            width="100%"
            height="430"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  )
}
