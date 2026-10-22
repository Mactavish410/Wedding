import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'

type QuoteBandProps = {
  quote: string
  dateShort: string
}

export function QuoteBand({ quote, dateShort }: QuoteBandProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.25, 1, 1, 0.4])

  const marks = Array.from({ length: 8 }, (_, i) => i)

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-silver/40 bg-mist px-5 py-16 sm:px-8 sm:py-20"
    >
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between gap-2 px-2 sm:px-4"
        style={reduceMotion ? undefined : { x }}
        aria-hidden
      >
        {marks.map((i) => (
          <span
            key={i}
            className="font-date shrink-0 text-[clamp(1.5rem,4.5vw,3rem)] font-normal tracking-[0.14em] text-ink/15 tabular-nums"
          >
            {dateShort}
          </span>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        style={reduceMotion ? undefined : { opacity }}
      >
        <blockquote className="font-display text-[clamp(1.55rem,4.2vw,2.65rem)] leading-snug font-medium tracking-[-0.01em] italic text-ink">
          «{quote}»
        </blockquote>
      </motion.div>
    </section>
  )
}
