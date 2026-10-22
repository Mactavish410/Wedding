import { motion, useReducedMotion } from 'framer-motion'

type OrnamentProps = {
  className?: string
}

export function Ornament({ className = '' }: OrnamentProps) {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className={`flex items-center justify-center gap-3 text-ash ${className}`}
      aria-hidden
    >
      <motion.span
        className="h-px w-10 bg-silver sm:w-14"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 1 }}
      />
      <motion.span
        className="size-1 rounded-full bg-ash"
        initial={reduceMotion ? false : { scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
      />
      <motion.span
        className="h-px w-10 bg-silver sm:w-14"
        initial={reduceMotion ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ originX: 0 }}
      />
    </div>
  )
}
