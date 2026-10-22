import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-40 border-b border-silver/35 bg-mist/80 backdrop-blur-md"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-center px-5 py-3.5 sm:px-8">
        <Link
          to="/"
          className="group font-display text-xl tracking-[0.1em] text-ink sm:text-2xl"
          aria-label="На главную"
        >
          <span className="transition-opacity group-hover:opacity-70">Е</span>
          <span className="font-script mx-1.5 inline-block text-[1.15em] transition-transform duration-500 group-hover:scale-110">
            &
          </span>
          <span className="transition-opacity group-hover:opacity-70">М</span>
        </Link>
      </div>
    </motion.header>
  )
}
