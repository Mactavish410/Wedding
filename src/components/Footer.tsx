import { Link } from 'react-router-dom'
import { Ornament } from './Ornament'

export function Footer() {
  return (
    <footer className="border-t border-silver/50 bg-mist px-5 py-14 sm:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <Link
          to="/"
          className="group font-display text-2xl tracking-[0.1em] text-ink"
        >
          <span className="transition-opacity group-hover:opacity-70">Е</span>
          <span className="font-script mx-1.5 inline-block text-[1.2em] transition-transform duration-500 group-hover:rotate-6">
            &
          </span>
          <span className="transition-opacity group-hover:opacity-70">М</span>
        </Link>
        <Ornament className="my-5" />
        <p className="font-label text-sm tracking-wide text-ash">
          С любовью ждём вас · 2026
        </p>
      </div>
    </footer>
  )
}
