import { motion, useReducedMotion } from 'framer-motion'

type SplitTitleProps = {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'p'
}

/** Stagger each character — memorable hero typography */
export function SplitTitle({
  text,
  className = '',
  delay = 0,
  as: Tag = 'h1',
}: SplitTitleProps) {
  const reduceMotion = useReducedMotion()
  const parts = text.split(/(&)/)

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  let charIndex = 0

  return (
    <Tag className={className} aria-label={text}>
      {parts.map((part, partIdx) => {
        if (part === '&') {
          const i = charIndex++
          return (
            <motion.span
              key={`amp-${partIdx}`}
              className="font-script inline-block px-[0.06em] text-[1.15em] font-normal italic"
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                duration: 0.85,
                delay: delay + i * 0.035,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-hidden
            >
              &
            </motion.span>
          )
        }

        return part.split('').map((char, idx) => {
          const i = charIndex++
          const isSpace = char === ' '
          return (
            <motion.span
              key={`${partIdx}-${idx}`}
              className="inline-block"
              style={isSpace ? { width: '0.28em' } : undefined}
              initial={{ opacity: 0, y: '0.65em', rotateX: 40 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: delay + i * 0.032,
                ease: [0.16, 1, 0.3, 1],
              }}
              aria-hidden
            >
              {isSpace ? '\u00A0' : char}
            </motion.span>
          )
        })
      })}
    </Tag>
  )
}
