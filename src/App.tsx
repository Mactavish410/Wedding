import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CursorGlow } from './components/CursorGlow'
import { FamilyDay } from './pages/FamilyDay'
import { FriendsDay } from './pages/FriendsDay'
import { Landing } from './pages/Landing'

function AnimatedRoutes() {
  const location = useLocation()
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={reduceMotion ? false : { opacity: 0, y: 16, filter: 'blur(6px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -12, filter: 'blur(4px)' }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/family" element={<FamilyDay />} />
          <Route path="/friends" element={<FriendsDay />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <HashRouter>
      <CursorGlow />
      <AnimatedRoutes />
    </HashRouter>
  )
}
