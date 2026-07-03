"use client"

import { useLang } from "@/lib/context/LanguageContext"

const menu = {
  en: {
    title: "Menu and market favorites.",
    subtitle: "Breakfast sandwiches, fresh fruit drinks, Latin products, and daily grocery essentials. Availability may vary by day.",
    categories: [
      ["Breakfast", "Served 7:00 AM - 2:00 PM", ["Bacon, Egg & Cheese Sandwich", "Ham & Cheese Sandwich", "Egg & Cheese Sandwich", "BLT Sandwich"]],
      ["Fresh Juices", "Made fresh daily with real fruit", ["Potenciador Cerebral", "Verde Citrico", "Pepino Limon", "Zing de Jengibre"]],
      ["Smoothies & Drinks", "Cold, fresh, and ready to go", ["Fresh Fruit Smoothies", "Batidos", "Coffee", "Beer & Beverages"]],
      ["Latin Products", "Peruvian and Ecuadorian specialties", ["Peruvian Pantry Staples", "Ecuadorian Specialty Products", "Fresh Produce", "Snacks & Candy"]],
    ],
  },
  es: {
    title: "Menu y favoritos del mercado.",
    subtitle: "Sandwiches de desayuno, bebidas de fruta natural, productos latinos y abarrotes diarios. La disponibilidad puede variar.",
    categories: [
      ["Desayuno", "De 7:00 AM a 2:00 PM", ["Sandwich de Tocino, Huevo y Queso", "Sandwich de Jamon y Queso", "Sandwich de Huevo y Queso", "Sandwich BLT"]],
      ["Jugos Frescos", "Preparados diariamente con fruta natural", ["Potenciador Cerebral", "Verde Citrico", "Pepino Limon", "Zing de Jengibre"]],
      ["Batidos y Bebidas", "Frias, frescas y listas", ["Batidos de Fruta Natural", "Batidos", "Cafe", "Cervezas y Bebidas"]],
      ["Productos Latinos", "Especialidades peruanas y ecuatorianas", ["Productos Basicos Peruanos", "Productos Especiales Ecuatorianos", "Frutas y Verduras Frescas", "Snacks y Dulces"]],
    ],
  },
}

export default function MenuPage() {
  const { lang } = useLang()
  const t = menu[lang]

  return (
    <div className="space-y-12 py-12">
      <section className="max-w-4xl">
        <h1 className="text-5xl font-black leading-tight text-emerald-950 sm:text-6xl">{t.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600">{t.subtitle}</p>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {t.categories.map(([title, note, items], index) => (
          <article key={title as string} className={`${index === 0 ? "bg-emerald-950 text-white" : "bg-white text-emerald-950"} rounded-lg border border-emerald-900/10 p-7 shadow-sm`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-black">{title}</h2>
                <p className={`mt-2 text-sm font-semibold ${index === 0 ? "text-emerald-50/70" : "text-zinc-500"}`}>{note}</p>
              </div>
              <span className={`${index === 0 ? "bg-yellow-300 text-emerald-950" : "bg-red-600 text-white"} flex h-11 w-11 items-center justify-center rounded-lg text-sm font-black`}>
                {index + 1}
              </span>
            </div>
            <ul className="mt-8 space-y-3">
              {(items as string[]).map((item) => (
                <li key={item} className={`flex items-center justify-between gap-4 border-t pt-3 text-sm font-bold ${index === 0 ? "border-white/14" : "border-emerald-900/10"}`}>
                  <span>{item}</span>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-300" />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  )
}
