import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { ParallaxImage } from './ParallaxImage'
import { Reveal } from './Reveal'

type EditorialSpreadProps = {
  image: string
  secondaryImage: string
  imageAlt: string
  eyebrow: string
  title: string
  body: string
}

export function EditorialSpread({
  image,
  secondaryImage,
  imageAlt,
  eyebrow,
  title,
  body,
}: EditorialSpreadProps) {
  const ref = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const textY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%'])
  const floatY = useTransform(scrollYProgress, [0, 1], ['10%', '-12%'])

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <Reveal>
          <div className="relative">
            <div className="editorial-frame relative aspect-[4/5] overflow-hidden">
              <ParallaxImage
                src={image}
                alt={imageAlt}
                className="absolute inset-0 h-full"
                imgClassName="grayscale"
                intensity={10}
              />
            </div>
            <motion.div
              className="absolute -right-3 -bottom-6 w-[42%] overflow-hidden border-4 border-mist shadow-2xl sm:-right-6 sm:-bottom-8"
              style={reduceMotion ? undefined : { y: floatY }}
            >
              <img
                src={secondaryImage}
                alt=""
                className="aspect-[3/4] w-full object-cover grayscale"
                loading="lazy"
              />
            </motion.div>
          </div>
        </Reveal>

        <motion.div
          className="lg:pl-6 lg:pt-8"
          style={reduceMotion ? undefined : { y: textY }}
        >
          <Reveal delay={0.08}>
            <p className="mb-3 font-body text-[11px] uppercase tracking-[0.28em] text-ash">
              {eyebrow}
            </p>
            <h2 className="font-display text-4xl tracking-wide text-ink sm:text-5xl">
              {title}
            </h2>
            <div className="my-6 h-px w-14 bg-silver" />
            <p className="max-w-md font-body text-base leading-relaxed text-slate">
              {body}
            </p>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}
