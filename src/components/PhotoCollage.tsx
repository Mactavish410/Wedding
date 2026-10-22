import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Reveal } from './Reveal'

type PhotoCollageProps = {
  images: [string, string, string]
  eyebrow: string
  title: string
  body: string
}

export function PhotoCollage({
  images,
  eyebrow,
  title,
  body,
}: PhotoCollageProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const yA = useTransform(scrollYProgress, [0, 1], ['6%', '-8%'])
  const yB = useTransform(scrollYProgress, [0, 1], ['-4%', '10%'])
  const yC = useTransform(scrollYProgress, [0, 1], ['8%', '-6%'])

  return (
    <section ref={ref} className="bg-pearl/50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-lg">
          <motion.figure
            className="absolute top-[4%] left-[2%] z-10 w-[58%] overflow-hidden border border-silver/60 shadow-lg"
            style={reduceMotion ? undefined : { y: yA }}
          >
            <img
              src={images[0]}
              alt=""
              className="aspect-[3/4] w-full object-cover grayscale"
              loading="lazy"
            />
          </motion.figure>
          <motion.figure
            className="absolute top-[18%] right-[0%] z-20 w-[48%] overflow-hidden border border-silver/60 shadow-xl"
            style={reduceMotion ? undefined : { y: yB }}
          >
            <img
              src={images[1]}
              alt=""
              className="aspect-[3/4] w-full object-cover grayscale"
              loading="lazy"
            />
          </motion.figure>
          <motion.figure
            className="absolute bottom-[2%] left-[22%] z-30 w-[52%] overflow-hidden border border-silver/60 shadow-lg"
            style={reduceMotion ? undefined : { y: yC }}
          >
            <img
              src={images[2]}
              alt=""
              className="aspect-[4/3] w-full object-cover grayscale"
              loading="lazy"
            />
          </motion.figure>
          <div
            className="pointer-events-none absolute inset-[8%] border border-dashed border-ash/25"
            aria-hidden
          />
        </div>

        <Reveal>
          <p className="mb-3 font-label text-[11px] uppercase tracking-[0.32em] text-ash">
            {eyebrow}
          </p>
          <h2 className="font-display text-4xl tracking-[-0.02em] text-ink sm:text-5xl">
            {title}
          </h2>
          <div className="my-6 h-px w-14 bg-silver" />
          <p className="max-w-md font-body text-base leading-relaxed text-slate">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
