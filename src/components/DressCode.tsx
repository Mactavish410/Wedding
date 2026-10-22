import { Ornament } from './Ornament'
import { Reveal } from './Reveal'

type DressCodeProps = {
  note: string
  tagline?: string
  packHint?: string
}

export function DressCode({
  note,
  tagline = 'Приходите такими, какими чувствуете себя красиво',
  packHint,
}: DressCodeProps) {
  return (
    <section className="relative overflow-hidden border-t border-silver/40 bg-charcoal px-5 py-16 text-mist sm:px-8 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 30% 0%, #c8c6c3 0%, transparent 50%), radial-gradient(ellipse at 70% 100%, #8a8884 0%, transparent 45%)',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="mb-3 font-label text-[11px] uppercase tracking-[0.34em] text-silver">
            Без правил
          </p>
          <h2 className="font-display text-4xl tracking-[-0.02em] sm:text-5xl">
            Дресс-код свободный
          </h2>
          <Ornament className="my-6 [&_span]:bg-silver/45" />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="font-display text-2xl italic text-pearl/90 sm:text-3xl">
            {tagline}
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mt-8 max-w-lg font-body text-base leading-relaxed text-pearl/80">
            {note}
          </p>
        </Reveal>

        {packHint ? (
          <Reveal delay={0.2}>
            <div className="mx-auto mt-10 max-w-md border border-white/15 bg-white/[0.04] px-6 py-7">
              <p className="font-label text-[11px] uppercase tracking-[0.28em] text-silver">
                С собой
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-pearl/85">
                {packHint}
              </p>
            </div>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
