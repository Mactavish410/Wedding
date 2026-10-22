import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef, type CSSProperties } from 'react'

type ParallaxImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  intensity?: number
  style?: CSSProperties
}

export function ParallaxImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  intensity = 14,
  style,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${intensity}%`, `${intensity}%`],
  )

  return (
    <div ref={ref} className={`overflow-hidden ${className}`} style={style}>
      <motion.img
        src={src}
        alt={alt}
        className={`h-[120%] w-full object-cover will-change-transform ${imgClassName}`}
        style={reduceMotion ? undefined : { y }}
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
