"use client"

import { useLang } from "@/lib/context/LanguageContext"

export default function MenuPage() {
  const { lang } = useLang()

  const text = {
    en: {
      title: "Our Menu",
      breakfastTitle: "Breakfast",
      breakfastHours: "Served 7:00 AM – 2:00 PM",
      breakfastItems: [
        "Bacon, Egg & Cheese Sandwich",
        "Ham & Cheese Sandwich",
        "Egg & Cheese Sandwich",
        "BLT Sandwich",
      ],
      juicesTitle: "Fresh Juices",
      juicesDesc: "Made fresh daily with real fruit",
      juicesItems: [
        { name: "Potenciador Cerebral", desc: "Brain-boosting blend" },
        { name: "Verde Cítrico", desc: "Green citrus blend" },
        { name: "Pepino Limón", desc: "Cucumber lemon" },
        { name: "Zing de Jengibre", desc: "Ginger zing" },
      ],
      smoothiesTitle: "Smoothies & Drinks",
      smoothiesItems: [
        "Fresh Fruit Smoothies",
        "Batidos",
        "Coffee",
        "Beer & Beverages",
      ],
      produceTitle: "Latin Products",
      produceDesc: "Authentic Peruvian & Ecuadorian specialty products",
      produceItems: [
        "Peruvian Pantry Staples",
        "Ecuadorian Specialty Products",
        "Fresh Produce",
        "Snacks & Candy",
      ],
      note: "Menu items may vary. Ask our staff for today's availability.",
    },
    es: {
      title: "Nuestro Menú",
      breakfastTitle: "Desayuno",
      breakfastHours: "De 7:00 AM a 2:00 PM",
      breakfastItems: [
        "Sándwich de Tocino, Huevo y Queso",
        "Sándwich de Jamón y Queso",
        "Sándwich de Huevo y Queso",
        "Sándwich BLT",
      ],
      juicesTitle: "Jugos Frescos",
      juicesDesc: "Preparados diariamente con fruta natural",
      juicesItems: [
        { name: "Potenciador Cerebral", desc: "Mezcla energizante" },
        { name: "Verde Cítrico", desc: "Mezcla verde cítrica" },
        { name: "Pepino Limón", desc: "Pepino con limón" },
        { name: "Zing de Jengibre", desc: "Toque de jengibre" },
      ],
      smoothiesTitle: "Batidos y Bebidas",
      smoothiesItems: [
        "Batidos de Fruta Natural",
        "Batidos",
        "Café",
        "Cervezas y Bebidas",
      ],
      produceTitle: "Productos Latinos",
      produceDesc: "Productos especiales peruanos y ecuatorianos auténticos",
      produceItems: [
        "Productos Básicos Peruanos",
        "Productos Especiales Ecuatorianos",
        "Frutas y Verduras Frescas",
        "Snacks y Dulces",
      ],
      note: "Los productos pueden variar. Pregunta a nuestro personal sobre la disponibilidad del día.",
    },
  }

  const t = text[lang]

  return (
    <div className="space-y-10">

      {/* Header */}
      <h1 className="text-4xl font-bold">{t.title}</h1>

      {/* Breakfast */}
      <div className="bg-neutral-900 text-white rounded-2xl p-8 space-y-4">
        <div>
          <h2 className="text-2xl font-bold text-orange-500">{t.breakfastTitle}</h2>
          <p className="text-neutral-400 text-sm">{t.breakfastHours}</p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {t.breakfastItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-neutral-300">
              <span className="text-orange-500">✦</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Fresh Juices */}
      <div className="border border-neutral-200 rounded-2xl p-8 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{t.juicesTitle}</h2>
          <p className="text-neutral-500 text-sm">{t.juicesDesc}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {t.juicesItems.map((juice) => (
            <div key={juice.name} className="bg-orange-50 rounded-xl p-4 space-y-1 text-center">
              <p className="font-bold text-sm">{juice.name}</p>
              <p className="text-neutral-500 text-xs">{juice.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Smoothies & Drinks */}
      <div className="border border-neutral-200 rounded-2xl p-8 space-y-4">
        <h2 className="text-2xl font-bold">{t.smoothiesTitle}</h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {t.smoothiesItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-neutral-600">
              <span className="text-orange-500">✦</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Latin Products */}
      <div className="bg-orange-500 text-black rounded-2xl p-8 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{t.produceTitle}</h2>
          <p className="text-sm">{t.produceDesc}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {t.produceItems.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span>✦</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Note */}
      <p className="text-center text-neutral-400 text-sm italic">{t.note}</p>

    </div>
  )
}