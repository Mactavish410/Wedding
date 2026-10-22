export type DayId = 'family' | 'friends'

export type TimelineItem = {
  title: string
  time: string
}

export type LocationPlace = {
  title: string
  address: string
  hint?: string
}

export type LocationInfo = {
  label: string
  intro: string
  places: LocationPlace[]
}

export type GalleryItem = {
  src: string
  alt: string
  span?: 'tall' | 'wide' | 'normal' | 'feature'
}

export type DayEvent = {
  id: DayId
  path: string
  navLabel: string
  dateLabel: string
  dateShort: string
  subtitle: string
  heroImage: string
  heroAlt: string
  quote: string
  marquee: string[]
  collage: [string, string, string]
  invite: {
    eyebrow: string
    title: string
    body: string
  }
  gallery: GalleryItem[]
  timeline: TimelineItem[]
  location: LocationInfo
  locationImage: string
  dressCodeNote: string
  dressImage: string
  accentImage: string
  accentSecondary: string
  rsvpUrl: string
}

const photo = (id: number) => `${import.meta.env.BASE_URL}photos/${id}.webp`

/** Только выбранные ч/б кадры: 45, 52, 53, 55, 56, 57, 58 */
const P = {
  smile: photo(45),
  embrace: photo(52),
  full: photo(53),
  pensive: photo(55),
  close: photo(56),
  profile: photo(57),
  sofa: photo(58),
} as const

export const events: Record<DayId, DayEvent> = {
  family: {
    id: 'family',
    path: '/family',
    navLabel: 'Семья',
    dateLabel: '14 ноября 2026',
    dateShort: '14.11',
    subtitle: 'Приглашение для самых близких',
    heroImage: P.embrace,
    heroAlt: 'Евгений и Мария',
    quote: 'Самые важные моменты — в кругу тех, кто знает нас с первой улыбки',
    marquee: [P.smile, P.embrace, P.profile, P.close, P.sofa, P.pensive],
    collage: [P.embrace, P.profile, P.smile],
    invite: {
      eyebrow: 'Приглашение',
      title: 'Будем счастливы разделить этот день с вами',
      body: 'Дорогие родные, нам важно, чтобы вы были рядом в один из самых тёплых дней нашей жизни. Приходите с открытым сердцем — ваша любовь сделает вечер по-настоящему особенным.',
    },
    accentImage: P.profile,
    accentSecondary: P.close,
    gallery: [
      { src: P.embrace, alt: 'Объятие' },
      { src: P.profile, alt: 'Профиль' },
      { src: P.close, alt: 'Близость' },
      { src: P.sofa, alt: 'На диване' },
      { src: P.smile, alt: 'Улыбка' },
      { src: P.pensive, alt: 'Тишина' },
    ],
    timeline: [
      { title: 'Сбор гостей', time: '15:15' },
      { title: 'Церемония в ЗАГСе', time: '15:30' },
      { title: 'Ресторан', time: '16:30' },
    ],
    location: {
      label: 'Локация',
      intro: 'Сначала встретимся у ЗАГСа, затем продолжим праздник в ресторане.',
      places: [
        {
          title: 'ЗАГС',
          address: 'г. Оренбург, Пионерская, 9',
          hint: 'Сбор гостей · 15:15',
        },
        {
          title: 'Ресторан',
          address:
            'г. Оренбург, Мало-Луговая ул., 3/1\n6-й этаж бизнес-центра «Евразия»',
          hint: 'С 16:30',
        },
      ],
    },
    locationImage: P.pensive,
    dressImage: P.sofa,
    dressCodeNote:
      'Никаких строгих требований: наденьте то, в чём вам комфортно и радостно. Главное — ваше присутствие.',
    rsvpUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSdDrAQzJt2vYNPym7BVFSGOaZoSMs-VtjA2jf0wY5xPTr1vEA/viewform?usp=publish-editor',
  },
  friends: {
    id: 'friends',
    path: '/friends',
    navLabel: 'Друзья',
    dateLabel: '5 декабря 2026',
    dateShort: '05.12',
    subtitle: 'Wedding Party',
    heroImage: P.sofa,
    heroAlt: 'Евгений и Мария — wedding party',
    quote: 'Этот вечер — для тех, с кем хочется танцевать до рассвета',
    marquee: [P.sofa, P.close, P.pensive, P.profile, P.embrace, P.smile],
    collage: [P.close, P.pensive, P.sofa],
    invite: {
      eyebrow: 'Приглашение',
      title: 'Этот вечер — для вас',
      body: 'Друзья, без которых праздник неполный: приглашаем вас разделить с нами радость, музыку и долгий тёплый вечер. Будем ждать вас — чтобы вместе начать новую главу.',
    },
    accentImage: P.pensive,
    accentSecondary: P.close,
    gallery: [
      { src: P.close, alt: 'Почти поцелуй' },
      { src: P.pensive, alt: 'Взгляд' },
      { src: P.profile, alt: 'Профиль' },
      { src: P.embrace, alt: 'Объятие' },
      { src: P.sofa, alt: 'На диване' },
      { src: P.smile, alt: 'Улыбка' },
    ],
    timeline: [{ title: 'Сбор гостей', time: '16:00' }],
    location: {
      label: 'Локация',
      intro: 'Ждём вас на загородной площадке — в тёплой компании и без лишней суеты.',
      places: [
        {
          title: 'Загородная площадка',
          address: 'Оренбург, СНТ Горизонт-1, Кленовая ул., 848',
          hint: 'Сбор гостей · 16:00',
        },
      ],
    },
    locationImage: P.close,
    dressImage: P.sofa,
    dressCodeNote:
      'Одевайтесь как угодно — джинсы, платье или блёстки, без строгих правил. Главное, чтобы было весело. А ближе к вечеру нас ждёт баня.',
    rsvpUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfC9Lc-TcWMcEvpnyM_CChxMgEY1yKE_4wPW8dxhuurto-Naw/viewform',
  },
}

export const couple = {
  names: 'Евгений &  Мария',
  monogram: 'Е & М',
} as const
