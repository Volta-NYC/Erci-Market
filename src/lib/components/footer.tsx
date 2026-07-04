import Link from "next/link"

const links = [
  ["Instagram", "https://www.instagram.com/ercimarketcorp"],
  ["TikTok", "https://www.tiktok.com/@ercimarketcorp"],
  ["Facebook", "https://www.facebook.com/ercimarketcorp"],
]

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-900 text-white">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-[1.2fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="text-3xl font-black tracking-tight"><span className="text-orange-500">ERCI Market</span> Corp</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-300">
            Your Brooklyn stop for Peruvian and Ecuadorian products, fresh juices, breakfast sandwiches, groceries, and neighborhood essentials.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="tel:+17188735127" className="rounded-lg bg-orange-500 px-4 py-3 text-sm font-black text-neutral-950 transition hover:bg-orange-400">
              (718) 873-5127
            </Link>
            <Link href="https://maps.google.com/?q=3289+Fulton+St+Brooklyn+NY+11208" target="_blank" rel="noreferrer" className="rounded-lg border border-white/18 px-4 py-3 text-sm font-black text-white transition hover:bg-white/10">
              Get directions
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-500">Visit</p>
          <div className="mt-4 space-y-2 text-sm leading-6 text-neutral-300">
            <p>3289 Fulton St</p>
            <p>Brooklyn, NY 11208</p>
            <p>Open every day</p>
            <p>6:30 AM - 11:00 PM</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-orange-500">Follow</p>
          <div className="mt-4 flex flex-col gap-2 text-sm font-bold text-neutral-300">
            {links.map(([label, href]) => (
              <Link key={label} href={href} target="_blank" rel="noreferrer" className="transition hover:text-orange-500">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-neutral-700 px-5 py-5 text-center text-xs font-semibold text-neutral-500">
        © {new Date().getFullYear()} Erci Market Corp · Website made by @VoltaNYC
      </div>
    </footer>
  )
}
