"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

const copy = {
  en: {
    title: "Brooklyn's Latin market for the daily run.",
    text: "Peruvian and Ecuadorian staples, fresh juices, hot breakfast sandwiches, coffee, snacks, produce, and essentials on Fulton Street.",
    menu: "Explore the menu",
    directions: "Get directions",
    contact: "Contact",
    call: "Call (718) 873-5127",
    hours: "Open daily",
    hoursValue: "6:30 AM - 11:00 PM",
    breakfast: "Breakfast",
    breakfastValue: "7:00 AM - 2:00 PM",
    delivery: "Free delivery",
    deliveryValue: "Orders over $75",
    address: "3289 Fulton St, Brooklyn, NY 11208",
    categoriesTitle: "Everything for the quick stop, the family table, and the taste of home.",
    juiceTitle: "Fresh juices that look as good as they taste.",
    juiceText: "Ask what fruit is best today, grab a smoothie with breakfast, or cool down with a citrus-green blend after work.",
    deliveryTitle: "Neighborhood service that makes the daily run easier.",
    deliveryText: "Call the store for delivery on orders over $75, ask about free in-store coffee, or stop in any day from 6:30 AM to 11:00 PM.",
    visitTitle: "Find us on Fulton Street.",
    visitText: "Walk in for groceries, breakfast, drinks, and Latin pantry favorites.",
    ticker: ["Peruvian staples", "Ecuadorian products", "Fresh juices", "Breakfast sandwiches", "Free coffee", "Delivery over $75"],
    products: [
      ["Latin pantry", "Peruvian and Ecuadorian favorites, snacks, grains, sauces, candy, and specialty ingredients."],
      ["Juices and batidos", "Bright real-fruit blends, smoothies, coffee, and drinks ready for the commute."],
      ["Hot breakfast", "Bacon egg and cheese, ham and cheese, BLT, and simple morning sandwiches."],
      ["Daily groceries", "Produce, beverages, beer, household basics, and the convenience pieces people actually need."],
    ],
    juices: ["Potenciador Cerebral", "Verde Citrico", "Pepino Limon", "Zing de Jengibre"],
  },
  es: {
    title: "El mercado latino de Brooklyn para la compra diaria.",
    text: "Productos peruanos y ecuatorianos, jugos frescos, sandwiches calientes, cafe, snacks, frutas y basicos en Fulton Street.",
    menu: "Ver el menu",
    directions: "Como llegar",
    contact: "Contacto",
    call: "Llamar (718) 873-5127",
    hours: "Abierto diario",
    hoursValue: "6:30 AM - 11:00 PM",
    breakfast: "Desayuno",
    breakfastValue: "7:00 AM - 2:00 PM",
    delivery: "Delivery gratis",
    deliveryValue: "Ordenes sobre $75",
    address: "3289 Fulton St, Brooklyn, NY 11208",
    categoriesTitle: "Todo para la parada rapida, la mesa familiar y el sabor de casa.",
    juiceTitle: "Jugos frescos que se ven tan bien como saben.",
    juiceText: "Pregunta que fruta esta mejor hoy, pide un batido con desayuno o refrescate con una mezcla verde citrica.",
    deliveryTitle: "Servicio del vecindario que hace mas facil la compra diaria.",
    deliveryText: "Llama para delivery en ordenes mayores de $75, pregunta por cafe gratis en tienda o visita cualquier dia de 6:30 AM a 11:00 PM.",
    visitTitle: "Encuentranos en Fulton Street.",
    visitText: "Visitanos para abarrotes, desayuno, bebidas y favoritos de despensa latina.",
    ticker: ["Productos peruanos", "Productos ecuatorianos", "Jugos frescos", "Sandwiches", "Cafe gratis", "Delivery sobre $75"],
    products: [
      ["Despensa latina", "Favoritos peruanos y ecuatorianos, snacks, granos, salsas, dulces e ingredientes especiales."],
      ["Jugos y batidos", "Mezclas de fruta natural, smoothies, cafe y bebidas listas para llevar."],
      ["Desayuno caliente", "Bacon huevo y queso, jamon y queso, BLT y sandwiches para la manana."],
      ["Abarrotes diarios", "Frutas, bebidas, cervezas, basicos del hogar y conveniencia real para el vecindario."],
    ],
    juices: ["Potenciador Cerebral", "Verde Citrico", "Pepino Limon", "Zing de Jengibre"],
  },
}

const images = {
  produce: "/erci-logo.jpg",
  juice: "/juice.jpg",
  sandwich: "/sandwich.jpg",
}

const productStyles = [
  "bg-yellow-50 border-yellow-300/70",
  "bg-emerald-50 border-emerald-300/70",
  "bg-orange-50 border-orange-300/70",
  "bg-neutral-50 border-neutral-300/70",
]

const productMedia = [null, images.juice, null, null]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MarkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M4 12h16M12 4v16M7 7l10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function HomePage() {
  const { lang } = useLang()
  const t = copy[lang]
  const tickerItems = [...t.ticker, ...t.ticker]

  return (
    <div className="overflow-hidden pb-10">
      <section className="relative min-h-[calc(100svh-120px)] py-10 sm:py-14 lg:py-16">
        <div className="absolute -left-8 top-10 -z-10 h-40 w-72 rotate-[-8deg] rounded-[36px] bg-yellow-300/35 blur-2xl" />
        <div className="absolute right-0 top-24 -z-10 h-44 w-80 rotate-6 rounded-[36px] bg-red-500/10 blur-2xl" />
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="animate-fade-up max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-orange-500/30 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-orange-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              ERCI Market Corp
            </div>
            <h1 className="font-display max-w-[11ch] text-5xl font-extrabold leading-[0.9] tracking-tight text-emerald-950 sm:text-7xl lg:text-7xl xl:text-8xl">
              {t.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-zinc-600 sm:text-xl">{t.text}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/pages/menu" className="shine-sweep relative inline-flex h-14 overflow-hidden rounded-lg bg-orange-500 px-7 text-sm font-black text-neutral-950 shadow-[0_22px_44px_rgba(249,115,22,0.26)] transition hover:-translate-y-1 hover:bg-orange-400">
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  {t.menu}
                  <ArrowIcon />
                </span>
              </Link>
              <Link href="/pages/contact" className="inline-flex h-14 items-center justify-center rounded-lg border border-emerald-900/20 bg-white px-7 text-sm font-black text-emerald-950 shadow-sm transition hover:-translate-y-1 hover:border-emerald-950 hover:bg-emerald-50">
                {t.directions}
              </Link>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-1 scroll-reveal-right relative min-h-[560px]">
            <div className="absolute right-10 top-6 z-10 rotate-3 rounded-2xl bg-orange-500 px-5 py-4 text-sm font-black uppercase tracking-[0.16em] text-neutral-950 shadow-2xl">
              Fulton St
            </div>
            <div className="absolute right-0 top-0 h-[72%] w-[88%] overflow-hidden rounded-[28px] bg-emerald-950 shadow-[0_30px_80px_rgba(4,47,46,0.28)]">
              <img src={images.produce} alt="ERCI Market storefront image from the current website" className="h-full w-full object-cover opacity-95 transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/72 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/94 p-5 text-emerald-950 shadow-2xl backdrop-blur">
                <p className="font-display text-3xl font-extrabold leading-tight">Peru, Ecuador, Brooklyn.</p>
                <p className="mt-2 text-sm font-bold text-zinc-600">{t.address}</p>
              </div>
            </div>
            <div className="float-soft absolute left-0 top-10 h-40 w-40 overflow-hidden rounded-2xl border-4 border-white bg-yellow-300 shadow-2xl sm:h-52 sm:w-52">
              <img src={images.juice} alt="Colorful fresh juices" className="h-full w-full object-cover" />
            </div>
            <div className="scroll-reveal-zoom absolute bottom-8 left-8 grid w-[82%] grid-cols-1 overflow-hidden rounded-2xl border border-emerald-900/10 bg-white shadow-[0_24px_70px_rgba(4,47,46,0.18)] sm:grid-cols-3">
              {[
                [t.hours, t.hoursValue],
                [t.breakfast, t.breakfastValue],
                [t.delivery, t.deliveryValue],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-emerald-900/10 p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-red-600">{label}</p>
                  <p className="mt-2 text-sm font-black leading-6 text-emerald-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-reveal -mx-5 border-y border-neutral-900/10 bg-gradient-to-r from-orange-500 via-neutral-900 to-emerald-700 py-4 text-white sm:-mx-6 lg:-mx-8">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap">
          {tickerItems.map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-8 text-sm font-black uppercase tracking-[0.2em]">
              {item}
              <span className="h-2 w-2 rounded-full bg-yellow-300" />
            </span>
          ))}
        </div>
      </section>

      <section className="scroll-reveal py-20">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <h2 className="scroll-reveal-left font-display text-4xl font-extrabold leading-[0.98] tracking-tight text-emerald-950 sm:text-6xl">{t.categoriesTitle}</h2>
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2">
            {t.products.map(([title, description], index) => (
              <article key={title} className={`colorful-border group rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(4,47,46,0.12)] ${productStyles[index]}`}>
                {productMedia[index] ? (
                  <div
                    className="mb-6 block h-44 overflow-hidden rounded-xl border border-emerald-900/10 bg-cover bg-center bg-no-repeat shadow-sm"
                    style={{ backgroundImage: `url(${productMedia[index]})` }}
                  >
                    <img src={productMedia[index]} alt={`${title} at ERCI Market`} className="block h-full w-full object-cover opacity-100 transition duration-700 group-hover:scale-105" loading="eager" />
                  </div>
                ) : null}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-950 shadow-sm transition group-hover:rotate-12 group-hover:bg-red-600 group-hover:text-white">
                    <MarkIcon />
                  </div>
                  <span className="font-display text-4xl font-extrabold text-emerald-950/10">0{index + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-extrabold text-emerald-950">{title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-reveal relative left-1/2 grid w-screen -translate-x-1/2 overflow-hidden bg-emerald-950 text-white shadow-[0_30px_90px_rgba(4,47,46,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className="relative min-h-[420px] bg-cover bg-center bg-no-repeat lg:min-h-[620px]"
          style={{ backgroundImage: `url(${images.juice})` }}
        >
          <img src={images.juice} alt="Fresh juices and fruit" className="absolute inset-0 block h-full w-full object-cover opacity-100" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/22 via-transparent to-emerald-950/18" />
        </div>
        <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16 lg:py-24 xl:px-24">
          <h2 className="scroll-reveal-left font-display max-w-xl text-4xl font-extrabold leading-tight sm:text-6xl">{t.juiceTitle}</h2>
          <p className="mt-6 max-w-lg text-base font-medium leading-7 text-emerald-50/78">{t.juiceText}</p>
          <div className="reveal-stagger mt-9 grid gap-3 sm:grid-cols-2">
            {t.juices.map((juice, index) => (
              <div key={juice} className="group flex items-center justify-between rounded-xl border border-white/14 bg-white/8 px-4 py-4 transition hover:-translate-y-0.5 hover:bg-white/14" style={{ animationDelay: `${index * 80}ms` }}>
                <span className="text-sm font-black">{juice}</span>
                <span className="h-3 w-3 rounded-full bg-yellow-300 transition group-hover:scale-150" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 py-20 lg:grid-cols-3">
        <div className="scroll-reveal-left colorful-border rounded-[28px] bg-gradient-to-br from-red-600 via-red-600 to-orange-500 p-8 text-white shadow-[0_22px_70px_rgba(220,38,38,0.22)] lg:col-span-2">
          <h2 className="font-display max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">{t.deliveryTitle}</h2>
          <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-red-50/86">{t.deliveryText}</p>
          <Link href="tel:+17188735127" className="mt-8 inline-flex h-14 items-center justify-center rounded-lg bg-white px-6 py-4 text-sm font-black text-red-700 transition hover:-translate-y-1 hover:bg-yellow-200">
            {t.call}
          </Link>
        </div>
        <div className="scroll-reveal-right overflow-hidden rounded-[28px] bg-yellow-300 shadow-[0_22px_70px_rgba(234,179,8,0.18)]">
          <img src={images.sandwich} alt="Breakfast sandwich" className="h-52 w-full object-cover" />
          <div className="p-7">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-red-700">{t.breakfast}</p>
            <p className="font-display mt-3 text-3xl font-extrabold leading-tight text-emerald-950">{t.breakfastValue}</p>
          </div>
        </div>
      </section>

      <section className="scroll-reveal grid gap-8 border-t border-emerald-900/10 pt-16 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
        <div className="scroll-reveal-left">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-emerald-950 sm:text-6xl">{t.visitTitle}</h2>
          <p className="mt-5 max-w-xl text-base font-medium leading-7 text-zinc-600">{t.visitText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="https://maps.google.com/?q=3289+Fulton+St+Brooklyn+NY+11208" target="_blank" rel="noreferrer" className="inline-flex h-14 items-center justify-center rounded-lg bg-yellow-300 px-6 py-4 text-sm font-black text-emerald-950 transition hover:-translate-y-1 hover:bg-yellow-200">
              {t.directions}
            </Link>
            <Link href="/pages/contact" className="inline-flex h-14 items-center justify-center rounded-lg border border-emerald-900/20 px-6 py-4 text-sm font-black text-emerald-950 transition hover:-translate-y-1 hover:bg-emerald-50">
              {t.contact}
            </Link>
          </div>
        </div>
        <div className="scroll-reveal-right overflow-hidden rounded-[28px] border border-emerald-900/10 bg-white shadow-[0_24px_70px_rgba(4,47,46,0.12)]">
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
      </section>
    </div>
  )
}
