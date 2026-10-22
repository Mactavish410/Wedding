import { DressCode } from '../components/DressCode'
import { EditorialSpread } from '../components/EditorialSpread'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Location } from '../components/Location'
import { PhotoCollage } from '../components/PhotoCollage'
import { PhotoMarquee } from '../components/PhotoMarquee'
import { QuoteBand } from '../components/QuoteBand'
import { RsvpCta } from '../components/RsvpCta'
import { Timeline } from '../components/Timeline'
import { couple, type DayEvent } from '../data/events'

type DayPageProps = {
  event: DayEvent
}

export function DayPage({ event }: DayPageProps) {
  const openRsvp = () => {
    window.open(event.rsvpUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="grain min-h-[100svh] bg-mist">
      <Header />
      <main>
        <Hero
          names={couple.names}
          dateLabel={event.dateLabel}
          dateShort={event.dateShort}
          subtitle={event.subtitle}
          image={event.heroImage}
          imageAlt={event.heroAlt}
          onRsvp={openRsvp}
        />
        <PhotoMarquee images={event.marquee} />
        <PhotoCollage
          images={event.collage}
          eyebrow={event.invite.eyebrow}
          title={event.invite.title}
          body={event.invite.body}
        />
        <QuoteBand quote={event.quote} dateShort={event.dateShort} />
        <EditorialSpread
          image={event.accentImage}
          secondaryImage={event.accentSecondary}
          imageAlt={event.heroAlt}
          eyebrow="Наш день"
          title="Ждём вас рядом"
          body="Нам важно просто быть вместе — без лишних условностей, в тёплой компании самых близких."
        />
        <PhotoMarquee images={[...event.marquee].reverse()} reverse />
        <Timeline items={event.timeline} />
        <DressCode
          note={event.dressCodeNote}
          tagline={
            event.id === 'friends'
              ? 'Свободный стиль — и немного пара'
              : undefined
          }
          packHint={
            event.id === 'friends'
              ? 'Сменная одежда, полотенце, тапочки или сланцы — всё, что пригодится для бани. Остальное — на ваш вкус.'
              : undefined
          }
        />
        <Location location={event.location} image={event.locationImage} />
        <RsvpCta url={event.rsvpUrl} />
      </main>
      <Footer />
    </div>
  )
}
