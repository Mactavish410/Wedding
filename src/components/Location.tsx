import type { LocationInfo } from '../data/events'
import { ParallaxImage } from './ParallaxImage'
import { Reveal, RevealItem, RevealStagger } from './Reveal'

type LocationProps = {
  location: LocationInfo
  image: string
}

export function Location({ location, image }: LocationProps) {
  const single = location.places.length === 1

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxImage
          src={image}
          alt=""
          className="absolute inset-0 h-full"
          imgClassName="object-[center_25%] grayscale brightness-75 contrast-110"
          intensity={12}
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/65 to-ink/80" />
      </div>

      <div
        className={`relative z-10 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 ${
          single ? 'text-center' : ''
        }`}
      >
        <Reveal className={single ? 'mx-auto' : ''}>
          <p className="mb-3 font-label text-[11px] uppercase tracking-[0.32em] text-silver">
            {location.label}
          </p>
          <h2 className="font-display text-4xl tracking-[-0.02em] text-mist sm:text-5xl">
            Где встретимся
          </h2>
          <div
            className={`my-6 h-px w-14 bg-silver/60 ${single ? 'mx-auto' : ''}`}
          />
          <p
            className={`font-body text-base leading-relaxed text-pearl/80 ${
              single ? 'mx-auto max-w-md' : 'max-w-xl'
            }`}
          >
            {location.intro}
          </p>
        </Reveal>

        <RevealStagger
          className={`mt-10 grid gap-4 ${
            single
              ? 'mx-auto max-w-xl'
              : 'sm:grid-cols-2'
          }`}
        >
          {location.places.map((place) => (
            <RevealItem
              key={place.title}
              className={`border border-white/20 bg-white/5 px-7 py-9 backdrop-blur-md sm:px-9 sm:py-11 ${
                single ? 'text-center' : ''
              }`}
            >
              {place.hint ? (
                <p className="font-label text-[11px] uppercase tracking-[0.28em] text-silver">
                  {place.hint}
                </p>
              ) : (
                <p className="font-label text-[11px] uppercase tracking-[0.28em] text-silver">
                  Площадка
                </p>
              )}
              <h3 className="mt-4 font-display text-3xl tracking-wide text-mist sm:text-4xl">
                {place.title}
              </h3>
              <div
                className={`my-6 h-px w-14 bg-white/25 ${single ? 'mx-auto' : ''}`}
              />
              <p className="whitespace-pre-line font-body text-base leading-relaxed text-pearl/85 sm:text-lg">
                {place.address}
              </p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  )
}
