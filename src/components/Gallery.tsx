import { motion, useReducedMotion } from 'framer-motion'
import type { GalleryItem } from '../data/events'
import { Ornament } from './Ornament'
import { Reveal } from './Reveal'

type GalleryProps = {
  items: GalleryItem[]
}

export function Gallery({ items }: GalleryProps) {
  const reduceMotion = useReducedMotion()

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20" id="gallery">
      <Reveal>
        <div className="mb-8 flex flex-col gap-3 border-b border-silver/50 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 font-label text-[11px] uppercase tracking-[0.32em] text-ash">
              Наша история
            </p>
            <h2 className="font-display text-4xl tracking-[-0.02em] text-ink sm:text-5xl">
              Галерея
            </h2>
          </div>
          <Ornament className="justify-start sm:justify-end" />
        </div>
      </Reveal>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
        {items.map((item, index) => (
          <Reveal key={`${item.src}-${index}`} delay={index * 0.04} y={16}>
            <motion.figure
              className="group relative aspect-[3/4] overflow-hidden"
              whileHover={reduceMotion ? undefined : { scale: 0.985 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover object-center grayscale transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-50" />
              <figcaption className="pointer-events-none absolute inset-x-3 bottom-3 font-label text-[10px] uppercase tracking-[0.18em] text-mist/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {item.alt}
              </figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
