import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useId, useState, type FormEvent } from 'react'

type RsvpModalProps = {
  open: boolean
  onClose: () => void
  dayLabel: string
}

type AttendStatus = 'yes' | 'no' | ''

export function RsvpModal({ open, onClose, dayLabel }: RsvpModalProps) {
  const titleId = useId()
  const reduceMotion = useReducedMotion()
  const [name, setName] = useState('')
  const [attend, setAttend] = useState<AttendStatus>('')
  const [wishes, setWishes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setName('')
      setAttend('')
      setWishes('')
      setSubmitted(false)
    }
  }, [open])

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/55 backdrop-blur-[3px]"
            aria-label="Закрыть"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-lg border border-silver bg-mist px-6 py-8 shadow-xl sm:px-10 sm:py-10"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 font-body text-xs uppercase tracking-[0.18em] text-ash transition-colors hover:text-ink"
            >
              Закрыть
            </button>

            <p className="font-body text-[11px] uppercase tracking-[0.24em] text-ash">
              RSVP · {dayLabel}
            </p>
            <h2
              id={titleId}
              className="mt-3 font-display text-3xl tracking-wide text-ink sm:text-4xl"
            >
              Подтверждение
            </h2>
            <div className="my-5 h-px w-12 bg-silver" />

            {submitted ? (
              <div className="py-6 text-center">
                <p className="font-display text-2xl italic text-ash sm:text-3xl">
                  Форма скоро будет активна
                </p>
                <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-relaxed text-slate">
                  Мы бережно сохраним ваш ответ, когда откроем приём подтверждений.
                  Спасибо за терпение.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-8 border border-ash/60 px-6 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-mist"
                >
                  Понятно
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block font-body text-[11px] uppercase tracking-[0.18em] text-ash">
                    Ваше имя
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-silver bg-transparent px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-silver focus:border-ash"
                    placeholder="Имя и фамилия"
                  />
                </label>

                <fieldset>
                  <legend className="mb-3 font-body text-[11px] uppercase tracking-[0.18em] text-ash">
                    Присутствие
                  </legend>
                  <div className="grid grid-cols-2 gap-3">
                    <AttendOption
                      selected={attend === 'yes'}
                      onSelect={() => setAttend('yes')}
                      label="Буду"
                    />
                    <AttendOption
                      selected={attend === 'no'}
                      onSelect={() => setAttend('no')}
                      label="Не смогу"
                    />
                  </div>
                  <input
                    tabIndex={-1}
                    className="sr-only"
                    required
                    value={attend}
                    onChange={() => undefined}
                  />
                </fieldset>

                <label className="block">
                  <span className="mb-2 block font-body text-[11px] uppercase tracking-[0.18em] text-ash">
                    Пожелания
                  </span>
                  <textarea
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    rows={3}
                    className="w-full resize-none border border-silver bg-transparent px-4 py-3 font-body text-sm text-ink outline-none transition-colors placeholder:text-silver focus:border-ash"
                    placeholder="Пара слов нам…"
                  />
                </label>

                <p className="font-display text-lg italic text-ash">
                  Форма скоро будет активна
                </p>

                <button
                  type="submit"
                  className="w-full border border-ink bg-ink px-6 py-3.5 font-body text-xs uppercase tracking-[0.22em] text-mist transition-opacity hover:opacity-90"
                >
                  Отправить
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

function AttendOption({
  selected,
  onSelect,
  label,
}: {
  selected: boolean
  onSelect: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`border px-3 py-3 font-body text-xs uppercase tracking-[0.16em] transition-colors ${
        selected
          ? 'border-ink bg-ink text-mist'
          : 'border-silver text-slate hover:border-ash'
      }`}
      aria-pressed={selected}
    >
      {label}
    </button>
  )
}
