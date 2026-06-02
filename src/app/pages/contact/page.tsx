"use client"

import Link from "next/link"
import { useLang } from "@/lib/context/LanguageContext"

export default function ContactPage() {
  const { lang } = useLang()

  const text = {
    en: {
      title: "Contact Us",
      address: "Address",
      phone: "Phone",
      hours: "Hours",
      hoursval: "Open every day, 6:30 AM – 11:00 PM",
      social: "Follow Us",
      directions: "Get Directions",
    },
    es: {
      title: "Contáctanos",
      address: "Dirección",
      phone: "Teléfono",
      hours: "Horario",
      hoursval: "Abierto todos los días, 6:30 AM – 11:00 PM",
      social: "Síguenos",
      directions: "Cómo Llegar",
    },
  }

  const t = text[lang]

  return (
    <div className="space-y-10">

      {/* Header */}
      <h1 className="text-4xl font-bold">{t.title}</h1>

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="bg-neutral-900 text-white rounded-2xl p-6 space-y-2">
          <p className="text-orange-500 font-bold">{t.address}</p>
          <p className="text-neutral-300">3289 Fulton St</p>
          <p className="text-neutral-300">Brooklyn, NY 11208</p>
        </div>
        <div className="bg-neutral-900 text-white rounded-2xl p-6 space-y-2">
          <p className="text-orange-500 font-bold">{t.phone}</p>
          <p className="text-neutral-300">(718) 873-5127</p>
        </div>
        <div className="bg-neutral-900 text-white rounded-2xl p-6 space-y-2">
          <p className="text-orange-500 font-bold">{t.hours}</p>
          <p className="text-neutral-300">{t.hoursval}</p>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="rounded-2xl overflow-hidden border border-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14891.493340677516!2d-73.8764388!3d40.6833709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25dfd7c0e608d%3A0x317cbb70dab50b57!2sERCI%20MARKET%20CORP!5e1!3m2!1sen!2sus!4v1779333373240!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Directions + Social */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="https://maps.google.com/?q=3289+Fulton+St+Brooklyn+NY+11208"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 bg-orange-500 text-black font-bold rounded-md hover:bg-orange-400 transition-colors text-center"
        >
          {t.directions}
        </Link>

        <div className="flex gap-4 text-sm">
          <Link href="https://www.instagram.com/ercimarketcorp" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">Instagram</Link>
          <Link href="https://www.tiktok.com/@ercimarketcorp" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">TikTok</Link>
          <Link href="https://www.facebook.com/ercimarketcorp" target="_blank" rel="noreferrer" className="text-orange-500 hover:underline">Facebook</Link>
        </div>
      </div>

    </div>
  )
}