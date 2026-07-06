"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

const text = {
  en: {
    title: "Built for daily neighborhood runs.",
    body: "Erci Market Corp is a Brooklyn grocery store focused on authentic Peruvian and Ecuadorian products, fresh drinks, hot breakfast, and the everyday basics Fulton Street needs.",
    cta: "Plan a visit",
    ownerTitle: "Owner story",
    ownerBody: "ERCI Market is shaped by a local owner with a simple promise: keep Fulton Street stocked with the flavors people miss, the breakfast they need on the move, and the friendly everyday service that turns a quick stop into a neighborhood habit. The full owner biography can be swapped in here once the team shares the exact story.",
    ownerNote: "Owner photo placeholder",
    panels: [
      ["A taste of home", "Specialty staples, snacks, produce, and pantry items for customers looking for familiar Latin American flavors."],
      ["Ready when you are", "Open every day from 6:30 AM to 11:00 PM, with breakfast served from 7:00 AM to 2:00 PM."],
      ["Useful service", "Free delivery on orders over $75 and free in-store coffee available when you ask the team."],
    ],
  },
  es: {
    title: "Hecho para las compras diarias del vecindario.",
    body: "Erci Market Corp es una tienda en Brooklyn con productos peruanos y ecuatorianos, bebidas frescas, desayuno caliente y los basicos diarios que necesita Fulton Street.",
    cta: "Planear visita",
    ownerTitle: "Historia del dueno",
    ownerBody: "ERCI Market esta guiado por un dueno local con una promesa sencilla: mantener Fulton Street surtido con los sabores que la gente extrana, el desayuno que necesita de camino, y un servicio amable que convierte una parada rapida en costumbre del vecindario. La biografia completa se puede reemplazar aqui cuando el equipo comparta la historia exacta.",
    ownerNote: "Imagen provisional del dueno",
    panels: [
      ["Sabor de casa", "Productos especiales, snacks, frutas y articulos de despensa para clientes que buscan sabores latinoamericanos."],
      ["Listos para ti", "Abierto todos los dias de 6:30 AM a 11:00 PM, con desayuno de 7:00 AM a 2:00 PM."],
      ["Servicio util", "Delivery gratis en ordenes mayores de $75 y cafe gratis en la tienda cuando preguntas al equipo."],
    ],
  },
}

export default function AboutPage() {
  const { lang } = useLang()
  const t = text[lang]

  return (
    <div className="space-y-16 py-12">
      <section className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div className="scroll-reveal-left">
          <h1 className="max-w-4xl text-5xl font-black leading-tight text-emerald-950 sm:text-6xl">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{t.body}</p>
          <Link href="/pages/contact" className="mt-8 inline-flex h-12 items-center rounded-lg bg-red-600 px-6 text-sm font-black text-white transition hover:bg-red-700">
            {t.cta}
          </Link>
        </div>
        <div className="scroll-reveal-right rounded-lg bg-yellow-300 p-8 text-emerald-950">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-red-700">ERCI Market Corp</p>
          <p className="mt-5 text-3xl font-black leading-tight">3289 Fulton St, Brooklyn, NY 11208</p>
        </div>
      </section>

      <section className="scroll-reveal grid overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white shadow-[0_22px_70px_rgba(4,47,46,0.08)] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="scroll-image-wipe relative min-h-[360px] bg-emerald-950">
          <img src="/erci-logo.jpg" alt={t.ownerNote} className="h-full min-h-[360px] w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/62 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 rounded-lg bg-yellow-300 px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-emerald-950">{t.ownerNote}</p>
        </div>
        <div className="scroll-reveal-right flex flex-col justify-center p-7 sm:p-10 lg:p-12">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-red-600">ERCI Market Corp</p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-emerald-950 sm:text-5xl">{t.ownerTitle}</h2>
          <p className="mt-6 text-base font-medium leading-8 text-zinc-600">{t.ownerBody}</p>
        </div>
      </section>

      <section className="reveal-stagger grid gap-4 md:grid-cols-3">
        {t.panels.map(([title, body]) => (
          <article key={title} className="rounded-lg border border-emerald-900/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(4,47,46,0.12)]">
            <h2 className="text-2xl font-black text-emerald-950">{title}</h2>
            <p className="mt-4 text-sm leading-6 text-zinc-600">{body}</p>
          </article>
        ))}
      </section>
    </div>
  )
}
