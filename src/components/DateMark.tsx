import { motion, type MotionStyle } from 'framer-motion'

type DateMarkProps = {
  date: string
  className?: string
  style?: MotionStyle
}

/** Фоновая дата — цельной строкой, чтобы «14.11» читалось целиком */
export function DateMark({ date, className = '', style }: DateMarkProps) {
  return (
    <motion.p
      className={`font-date leading-none font-normal tracking-[0.2em] tabular-nums select-none ${className}`}
      style={style}
      aria-hidden
    >
      {date}
    </motion.p>
  )
}
