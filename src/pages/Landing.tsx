import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Ornament } from '../components/Ornament'
import { SplitTitle } from '../components/SplitTitle'
import { couple, events } from '../data/events'

const mosaic = [
  events.family.marquee[0],
  events.family.marquee[1],
  events.friends.marquee[0],
  events.family.marquee[3],
  events.friends.marquee[1],
  events.family.marquee[5],
]

export function Landing() {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <main
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-mist"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={reduceMotion ? undefined : { y: bgY, scale: bgScale }}
        aria-hidden
      >
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-40 sm:grid-cols-6">
          {mosaic.map((src, i) => (
            <motion.img
              key={`${src}-${i}`}
              src={src}
              alt=""
              className="h-full min-h-[28vh] w-full object-cover grayscale sm:min-h-[100svh]"
              initial={reduceMotion ? false : { opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-mist/84" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-5 py-16 sm:px-8">
        <div className="text-center">
          <motion.p
            className="font-label text-[11px] uppercase tracking-[0.36em] text-ash"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Приглашение на свадьбу
          </motion.p>

          <div className="mt-6">
            <SplitTitle
              text={couple.names}
              delay={0.15}
              className="font-display text-[clamp(3rem,12vw,6.2rem)] leading-[0.92] font-medium tracking-[-0.02em] text-ink"
            />
          </div>

          <Ornament className="my-8" />

          <motion.p
            className="mx-auto max-w-md font-body text-base leading-relaxed text-slate"
            initial={reduceMotion ? false : { opacity: 0, filter: 'blur(8px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.55 }}
          >
            Откройте ссылку на ваш день — семейный вечер или праздник с друзьями.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          <DayCard
            to={events.family.path}
            label="Семейный день"
            date={events.family.dateLabel}
            hint="Для самых близких"
            image={events.family.heroImage}
            delay={0.35}
          />
          <DayCard
            to={events.friends.path}
            label="День с друзьями"
            date={events.friends.dateLabel}
            hint="Wedding Party"
            image={events.friends.heroImage}
            delay={0.5}
          />
        </div>
      </div>
    </main>
  )
}

function DayCard({
  to,
  label,
  date,
  hint,
  image,
  delay,
}: {
  to: string
  label: string
  date: string
  hint: string
  image: string
  delay: number
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 36, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformPerspective: 900 }}
    >
      <Link
        to={to}
        className="group relative block min-h-[280px] overflow-hidden border border-silver/70 sm:min-h-[340px]"
      >
        <motion.img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_22%] grayscale"
          loading="lazy"
          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
        </div>

        <div className="relative flex h-full min-h-[280px] flex-col justify-end px-6 py-7 sm:min-h-[340px] sm:px-8 sm:py-9">
          <p className="font-label text-[11px] uppercase tracking-[0.28em] text-pearl/75">
            {hint}
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-[-0.02em] text-mist transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">
            {label}
          </h2>
          <p className="mt-2 font-display text-xl text-pearl/85 italic sm:text-2xl">
            {date}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-label text-[11px] uppercase tracking-[0.22em] text-mist">
            Открыть
            <motion.span
              className="inline-block"
              animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              →
            </motion.span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
