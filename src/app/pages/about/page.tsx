"use client"

import { useLang } from "@/lib/context/LanguageContext"

export default function AboutPage() {
  const { lang } = useLang()

  const text = {
    en: {
      title: "About Us",
      story: "Erci Market Corp is a neighborhood grocery store located in the heart of Brooklyn, NY. We specialize in authentic Peruvian and Ecuadorian products, bringing the flavors of Latin America to the Fulton Street community.",
      mission: "Our mission is simple: to serve our neighbors with quality products, warm hospitality, and a taste of home. Whether you're looking for specialty ingredients, a fresh juice, or a hot breakfast sandwich, we've got you covered.",
      community: "We are proud to be an open-every-day store, welcoming customers from 6:30 AM to 11:00 PM. We also offer free delivery on orders over $75, and free coffee in-store for our valued customers.",
      storyTitle: "Our Story",
      missionTitle: "Our Mission",
      communityTitle: "Our Community",
    },
    es: {
      title: "Nosotros",
      story: "Erci Market Corp es una tienda de abarrotes ubicada en el corazón de Brooklyn, NY. Nos especializamos en productos peruanos y ecuatorianos auténticos, trayendo los sabores de América Latina a la comunidad de Fulton Street.",
      mission: "Nuestra misión es simple: servir a nuestros vecinos con productos de calidad, hospitalidad cálida y un sabor del hogar. Ya sea que busques ingredientes especiales, un jugo fresco o un sándwich caliente para el desayuno, aquí te atendemos.",
      community: "Nos enorgullece estar abiertos todos los días, atendiendo a nuestros clientes de 6:30 AM a 11:00 PM. También ofrecemos delivery gratuito en compras mayores a $75 y café gratis en el local para nuestros clientes.",
      storyTitle: "Nuestra Historia",
      missionTitle: "Nuestra Misión",
      communityTitle: "Nuestra Comunidad",
    },
  }

  const t = text[lang]

  return (
    <div className="space-y-10">

      {/* Header */}
      <h1 className="text-4xl font-bold">{t.title}</h1>

      {/* Story */}
      <div className="bg-neutral-900 text-white rounded-2xl p-8 space-y-3">
        <h2 className="text-xl font-bold text-orange-500">{t.storyTitle}</h2>
        <p className="text-neutral-300 leading-relaxed">{t.story}</p>
      </div>

      {/* Mission */}
      <div className="border border-neutral-200 rounded-2xl p-8 space-y-3">
        <h2 className="text-xl font-bold">{t.missionTitle}</h2>
        <p className="text-neutral-500 leading-relaxed">{t.mission}</p>
      </div>

      {/* Community */}
      <div className="bg-orange-500 text-black rounded-2xl p-8 space-y-3">
        <h2 className="text-xl font-bold">{t.communityTitle}</h2>
        <p className="leading-relaxed">{t.community}</p>
      </div>

    </div>
  )
}