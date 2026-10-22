import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

/** Soft desktop spotlight that follows the cursor */
export function CursorGlow() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 120, damping: 28 })
  const springY = useSpring(y, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    setEnabled(fine && !reduceMotion)

    if (!fine || reduceMotion) return

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX - 160)
      y.set(event.clientY - 160)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduceMotion, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[55] size-80 rounded-full opacity-30 mix-blend-soft-light"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle, rgba(200,198,195,0.55) 0%, transparent 70%)',
      }}
    />
  )
}
