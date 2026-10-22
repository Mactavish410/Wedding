import type { TimelineItem } from '../data/events'
import { Ornament } from './Ornament'
import { Reveal, RevealItem, RevealStagger } from './Reveal'

type TimelineProps = {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <section className="border-y border-silver/40 bg-charcoal px-5 py-16 text-mist sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-10 flex flex-col items-center gap-4 text-center sm:mb-12">
            <div>
              <p className="mb-2 font-label text-[11px] uppercase tracking-[0.32em] text-silver">
                Программа дня
              </p>
              <h2 className="font-display text-4xl tracking-[-0.02em] sm:text-5xl">
                Таймлайн
              </h2>
            </div>
            <Ornament className="[&_span]:bg-silver/40" />
          </div>
        </Reveal>

        <RevealStagger
          className={`grid gap-3 sm:gap-4 ${
            items.length === 1
              ? 'mx-auto max-w-md'
              : 'sm:grid-cols-3'
          }`}
        >
          {items.map((item, index) => (
            <RevealItem
              key={item.title}
              className="group relative border border-white/15 bg-white/[0.04] px-6 py-8 text-center transition-colors hover:border-white/30 hover:bg-white/[0.07] sm:px-7 sm:py-10"
            >
              <p className="font-display text-5xl text-white/10 transition-colors group-hover:text-white/20">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-display text-2xl tracking-wide sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-2 font-body text-sm tracking-wide text-silver">
                {item.time}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
