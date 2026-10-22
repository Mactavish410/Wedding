import { useReducedMotion } from 'framer-motion'
import { useMemo } from 'react'

type PhotoMarqueeProps = {
  images: string[]
  reverse?: boolean
}

/** Собираем ленту длиннее экрана, чтобы не было пустоты справа */
function buildStrip(images: string[], minCount = 20): string[] {
  if (images.length === 0) return []
  const strip: string[] = []
  while (strip.length < minCount) {
    strip.push(...images)
  }
  return strip
}

export function PhotoMarquee({ images, reverse = false }: PhotoMarqueeProps) {
  const reduceMotion = useReducedMotion()
  const strip = useMemo(() => buildStrip(images, 20), [images])

  // Две одинаковые группы — сдвиг на 50% = бесшовный цикл
  const groups = [strip, strip]

  return (
    <section className="mask-fade-x overflow-hidden border-y border-silver/40 bg-charcoal py-4 sm:py-5">
      <div
        className={`flex w-max ${
          reduceMotion
            ? ''
            : reverse
              ? 'animate-marquee-reverse'
              : 'animate-marquee'
        }`}
      >
        {groups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
            aria-hidden={groupIndex > 0}
          >
            {group.map((src, index) => (
              <figure
                key={`${groupIndex}-${src}-${index}`}
                className="relative h-36 w-28 shrink-0 overflow-hidden sm:h-48 sm:w-36 md:h-56 md:w-40"
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover grayscale"
                  loading="eager"
                  decoding="async"
                  draggable={false}
                />
                <div className="absolute inset-0 ring-1 ring-white/10 ring-inset" />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
