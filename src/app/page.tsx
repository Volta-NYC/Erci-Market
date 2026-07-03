"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

const copy = {
  en: {
    heroTitle: "A brighter market for Fulton Street.",
    heroText:
      "ERCI Market Corp brings Peruvian and Ecuadorian staples, fresh juices, hot breakfast sandwiches, and everyday groceries to the Brooklyn neighborhood from morning to late night.",
    menu: "Explore the menu",
    directions: "Get directions",
    contact: "Contact",
    call: "Call (718) 873-5127",
    hours: "Open daily",
    hoursValue: "6:30 AM - 11:00 PM",
    breakfast: "Breakfast",
    breakfastValue: "7:00 AM - 2:00 PM",
    address: "3289 Fulton St, Brooklyn, NY 11208",
    sectionProducts: "Shop the essentials, flavors, and quick stops people come back for.",
    products: [
      ["Latin pantry", "Peruvian and Ecuadorian favorites, snacks, staples, and specialty ingredients."],
      ["Fresh juice bar", "Real-fruit juices, smoothies, batidos, and everyday coffee made for the rush."],
      ["Breakfast counter", "Bacon, egg and cheese, ham and cheese, BLT, and hot morning sandwiches."],
      ["Daily groceries", "Produce, beverages, beer, candy, household basics, and neighborhood convenience."],
    ],
    juiceTitle: "Fresh blends with a little momentum.",
    juiceText:
      "Pick up a smoothie with breakfast, grab a green citrus juice after work, or ask what fruit is best today.",
    juices: ["Potenciador Cerebral", "Verde Citrico", "Pepino Limon", "Zing de Jengibre"],
    deliveryTitle: "Local, useful, and open when you need it.",
    deliveryText:
      "Free delivery is available on orders over $75, and customers can ask the team about free coffee in store.",
    visitTitle: "Visit ERCI Market",
    visitText: "Walk in, call ahead, or get directions to the store on Fulton Street.",
  },
  es: {
    heroTitle: "Un mercado mas fresco para Fulton Street.",
    heroText:
      "ERCI Market Corp trae productos peruanos y ecuatorianos, jugos frescos, sandwiches calientes y abarrotes diarios al vecindario de Brooklyn desde la manana hasta la noche.",
    menu: "Ver el menu",
    directions: "Como llegar",
    contact: "Contacto",
    call: "Llamar (718) 873-5127",
    hours: "Abierto diario",
    hoursValue: "6:30 AM - 11:00 PM",
    breakfast: "Desayuno",
    breakfastValue: "7:00 AM - 2:00 PM",
    address: "3289 Fulton St, Brooklyn, NY 11208",
    sectionProducts: "Compra lo esencial, los sabores y las paradas rapidas que la comunidad busca.",
    products: [
      ["Despensa latina", "Favoritos peruanos y ecuatorianos, snacks, basicos e ingredientes especiales."],
      ["Bar de jugos", "Jugos naturales, smoothies, batidos y cafe para todos los dias."],
      ["Desayuno", "Bacon, huevo y queso, jamon y queso, BLT y sandwiches calientes."],
      ["Abarrotes diarios", "Frutas, bebidas, cervezas, dulces, productos basicos y conveniencia local."],
    ],
    juiceTitle: "Mezclas frescas con energia.",
    juiceText:
      "Pide un batido con el desayuno, un jugo verde despues del trabajo o pregunta que fruta esta mejor hoy.",
    juices: ["Potenciador Cerebral", "Verde Citrico", "Pepino Limon", "Zing de Jengibre"],
    deliveryTitle: "Local, util y abierto cuando lo necesitas.",
    deliveryText:
      "Delivery gratis en ordenes mayores de $75, y los clientes pueden preguntar por cafe gratis en la tienda.",
    visitTitle: "Visita ERCI Market",
    visitText: "Entra, llama antes, o abre las direcciones hacia la tienda en Fulton Street.",
  },
}

const photo =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
const juicePhoto =
  "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=80"

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none">
      <path d="M5 12h13m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M12 3l2.2 6.8H21l-5.5 4 2.1 6.7L12 16.4 6.4 20.5l2.1-6.7L3 9.8h6.8L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

export default function HomePage() {
  const { lang } = useLang()
  const t = copy[lang]

  return (
    <div className="space-y-20 pb-8">
      <section className="grid min-h-[calc(100svh-92px)] items-center gap-10 py-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-10">
        <div className="max-w-2xl">
          <h1 className="max-w-[12ch] text-5xl font-black leading-[0.94] text-emerald-950 sm:text-6xl lg:text-7xl">
            {t.heroTitle}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-600">{t.heroText}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/pages/menu" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-red-600 px-6 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(220,38,38,0.22)] transition hover:bg-red-700">
              {t.menu}
              <ArrowIcon />
            </Link>
            <Link href="/pages/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-emerald-900/20 px-6 text-sm font-extrabold text-emerald-950 transition hover:border-emerald-800 hover:bg-emerald-50">
              {t.directions}
            </Link>
          </div>
          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-lg border border-emerald-900/10 bg-emerald-900/10 sm:grid-cols-3">
            {[
              [t.hours, t.hoursValue],
              [t.breakfast, t.breakfastValue],
              ["Fulton Street", t.address],
            ].map(([label, value]) => (
              <div key={label} className="bg-white p-5">
                <p className="text-xs font-black uppercase tracking-[0.14em] text-red-600">{label}</p>
                <p className="mt-2 text-sm font-bold leading-6 text-emerald-950">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[530px] overflow-hidden rounded-lg bg-emerald-950 text-white shadow-2xl shadow-emerald-950/20">
          <img src={photo} alt="Fresh produce and groceries at a neighborhood market" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/28 to-transparent" />
          <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
            <div className="rounded-lg bg-white px-4 py-3 text-emerald-950 shadow-lg">
              <p className="text-lg font-black leading-none">ERCI</p>
              <p className="text-[10px] font-black uppercase tracking-[0.22em] text-red-600">Market Corp</p>
            </div>
            <Link href="tel:+17188735127" className="rounded-lg bg-yellow-300 px-4 py-3 text-sm font-black text-emerald-950 shadow-lg">
              {t.call}
            </Link>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="max-w-sm rounded-lg bg-white/94 p-5 text-emerald-950 shadow-2xl backdrop-blur">
              <p className="text-2xl font-black leading-tight">Peruvian, Ecuadorian, fresh, everyday.</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-zinc-600">{lang === "en" ? "A small market built around the daily rhythm of the neighborhood." : "Un mercado pequeno hecho para el ritmo diario del vecindario."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <h2 className="text-4xl font-black leading-tight text-emerald-950 sm:text-5xl">{t.sectionProducts}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {t.products.map(([title, description]) => (
            <article key={title} className="rounded-lg border border-emerald-900/10 bg-white p-6 shadow-sm">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300 text-emerald-950">
                <SparkIcon />
              </div>
              <h3 className="text-xl font-black text-emerald-950">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid overflow-hidden rounded-lg bg-emerald-950 text-white lg:grid-cols-[0.92fr_1.08fr]">
        <div className="min-h-[360px]">
          <img src={juicePhoto} alt="Fresh fruit juices served at the market" className="h-full min-h-[360px] w-full object-cover" />
        </div>
        <div className="p-7 sm:p-10 lg:p-12">
          <h2 className="max-w-xl text-4xl font-black leading-tight sm:text-5xl">{t.juiceTitle}</h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-emerald-50/78">{t.juiceText}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {t.juices.map((juice) => (
              <div key={juice} className="flex items-center justify-between rounded-lg border border-white/14 bg-white/7 px-4 py-4">
                <span className="text-sm font-extrabold">{juice}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 rounded-lg border border-red-600/18 bg-red-50 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
        <div>
          <h2 className="text-3xl font-black text-emerald-950">{t.deliveryTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">{t.deliveryText}</p>
        </div>
        <Link href="tel:+17188735127" className="inline-flex h-12 items-center justify-center rounded-lg bg-emerald-950 px-6 text-sm font-black text-white transition hover:bg-emerald-900">
          {t.call}
        </Link>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <h2 className="text-4xl font-black text-emerald-950">{t.visitTitle}</h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">{t.visitText}</p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link href="https://maps.google.com/?q=3289+Fulton+St+Brooklyn+NY+11208" target="_blank" rel="noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg bg-yellow-300 px-6 text-sm font-black text-emerald-950 transition hover:bg-yellow-200">
              {t.directions}
            </Link>
            <Link href="/pages/contact" className="inline-flex h-12 items-center justify-center rounded-lg border border-emerald-900/20 px-6 text-sm font-black text-emerald-950 transition hover:bg-emerald-50">
              {t.contact}
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg border border-emerald-900/10">
          <iframe
            title="Map to ERCI Market Corp"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.493340677516!2d-73.8764388!3d40.6833709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25dfd7c0e608d%3A0x317cbb70dab50b57!2sERCI%20MARKET%20CORP!5e1!3m2!1sen!2sus!4v1779333373240!5m2!1sen!2sus"
            width="100%"
            height="360"
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
