import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { DateMark } from './DateMark'
import { MagneticButton } from './MagneticButton'
import { Ornament } from './Ornament'
import { SplitTitle } from './SplitTitle'

type HeroProps = {
  names: string
  dateLabel: string
  dateShort: string
  subtitle: string
  image: string
  imageAlt: string
  onRsvp: () => void
}

export function Hero({
  names,
  dateLabel,
  dateShort,
  subtitle,
  image,
  imageAlt,
  onRsvp,
}: HeroProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const yImg = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1, 1.04])
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '32%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.1])
  const lineScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.35])
  const dateX = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-charcoal"
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center origin-center"
        style={reduceMotion ? undefined : { y: yImg, scale: scaleImg }}
      >
        <motion.img
          src={image}
          alt={imageAlt}
          className="h-full max-h-[100svh] w-full object-contain object-center grayscale sm:max-h-none sm:h-[96%] sm:w-auto sm:max-w-[min(100vw,860px)]"
          loading="eager"
          decoding="async"
          initial={reduceMotion ? false : { scale: 1.22, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-ink/25" />
      </motion.div>

      <DateMark
        date={dateShort}
        className="pointer-events-none absolute top-[14%] right-4 text-[clamp(2.25rem,8vw,4.5rem)] text-white/35 sm:right-10"
        style={reduceMotion ? undefined : { y: yText, x: dateX }}
      />

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20"
        style={reduceMotion ? undefined : { opacity, y: yText }}
      >
        <motion.p
          className="mb-5 font-label text-[11px] uppercase tracking-[0.34em] text-pearl/75 sm:text-xs"
          initial={reduceMotion ? false : { opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.34em' }}
          transition={{ duration: 1.1, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>

        <SplitTitle
          text={names}
          delay={0.22}
          className="font-display text-[clamp(2.85rem,11vw,5.75rem)] leading-[0.92] font-medium tracking-[-0.02em] text-mist"
        />

        <motion.div style={reduceMotion ? undefined : { scaleX: lineScale }}>
          <Ornament className="my-7 origin-left justify-start opacity-80 [&_span]:bg-pearl/45" />
        </motion.div>

        <motion.p
          className="font-display text-2xl tracking-wide text-pearl italic sm:text-3xl"
          initial={reduceMotion ? false : { opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, delay: 0.85 }}
        >
          {dateLabel}
        </motion.p>

        <MagneticButton
          onClick={onRsvp}
          className="mt-10 border border-mist/55 px-8 py-3.5 font-label text-xs uppercase tracking-[0.24em] text-mist transition-colors hover:bg-mist hover:text-ink"
        >
          Подтвердить присутствие
        </MagneticButton>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        aria-hidden
      >
        <span className="font-label text-[9px] uppercase tracking-[0.32em] text-pearl/70">
          Scroll
        </span>
        <motion.span
          className="h-9 w-px origin-top bg-pearl/45"
          animate={
            reduceMotion ? undefined : { scaleY: [0.35, 1, 0.35], opacity: [0.4, 1, 0.4] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
