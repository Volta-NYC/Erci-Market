import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 gap-8 sm:grid-cols-3">

        {/* Brand */}
        <div className="space-y-2">
          <p className="text-orange-500 font-bold text-lg">ERCI MARKET <span className="text-white">CORP</span></p>
          <p className="text-neutral-400 text-sm">Your neighborhood market in Brooklyn.</p>
          <p className="text-neutral-400 text-sm">Tu mercado del vecindario en Brooklyn.</p>
        </div>

        {/* Info */}
        <div className="space-y-2 text-sm text-neutral-400">
          <p className="text-white font-semibold">Visit Us / Visítanos</p>
          <p>3289 Fulton St, Brooklyn, NY 11208</p>
          <p>(718) 873-5127</p>
          <p>Open every day / Abierto todos los días</p>
          <p>6:30 AM – 11:00 PM</p>
        </div>

        {/* Social */}
        <div className="space-y-2 text-sm text-neutral-400">
          <p className="text-white font-semibold">Follow Us / Síguenos</p>
          <Link href="https://www.instagram.com/ercimarketcorp" target="_blank" rel="noreferrer" className="block hover:text-orange-500 transition-colors">
            Instagram: @ercimarketcorp
          </Link>
          <Link href="https://www.tiktok.com/@ercimarketcorp" target="_blank" rel="noreferrer" className="block hover:text-orange-500 transition-colors">
            TikTok: @ercimarketcorp
          </Link>
          <Link href="https://www.facebook.com/ercimarketcorp" target="_blank" rel="noreferrer" className="block hover:text-orange-500 transition-colors">
            Facebook: @ercimarketcorp
          </Link>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700 px-6 py-4 text-center text-xs text-neutral-500">
        <span>© {new Date().getFullYear()} Erci Market Corp · </span>
        <Link href="https://nyc.voltanpo.org" target="_blank" rel="noreferrer" className="hover:text-orange-500 transition-colors">
          Website made by @VoltaNYC
        </Link>
      </div>
    </footer>
  )
}