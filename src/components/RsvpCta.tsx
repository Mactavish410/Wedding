import { Reveal } from './Reveal'

type RsvpCtaProps = {
  url: string
}

export function RsvpCta({ url }: RsvpCtaProps) {
  return (
    <section className="border-t border-silver/40 bg-mist px-5 py-16 sm:px-8 sm:py-20">
      <Reveal>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <p className="mb-3 font-label text-[11px] uppercase tracking-[0.34em] text-ash">
            RSVP
          </p>
          <h2 className="font-display text-3xl tracking-[-0.02em] text-ink sm:text-4xl">
            Подтвердите присутствие
          </h2>
          <div className="my-6 h-px w-14 bg-silver" />
          <p className="mb-10 max-w-md font-body text-base leading-relaxed text-slate">
            Пара коротких вопросов — и мы будем знать, что ждать вас в этот день.
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex border border-ink bg-ink px-8 py-3.5 font-label text-xs uppercase tracking-[0.24em] text-mist transition-opacity hover:opacity-85"
          >
            Заполнить опрос
          </a>
        </div>
      </Reveal>
    </section>
  )
}
