import Head from "next/head";
import { Ui } from "ui/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Lazy Swing Band - Polski Zespół Jazzowy | Taneczna Muzyka | Swing,
          Retro, Wielki Gatsby
        </title>
        <meta
          name="description"
          content="Lazy Swing Band - polski zespół jazzowy — taneczna muzyka, która łączy pokolenia i rezonuje na estradzie, w radiu oraz na międzypokoleniowych potańcówkach. Kultywujemy tradycje muzyki swingowej lat 20. i 30., tworząc niezapomniane doświadczenia muzyczne w stylu retro i Wielki Gatsby. Specjalizujemy się w muzyce przedwojennej, świątecznych standardach jazzowych, tańcu swingowym i kulturze swingowej. Profesjonalny zespół na eleganckie imprezy VIP, gale, bankiety i eventy firmowe. Wystąpiliśmy na gali Melchiory 2026 — Nagrody Dziennikarskie Polskiego Radia. Zapraszamy na Lato z Radiem 2026!"
        />
        <meta
          name="keywords"
          content="zespół na imprezę firmową, zespół na firmówkę, zespół na bankiety, zespół w starym stylu, zespół wielki gatsby, zespół do tańca swingowego, zespół swingowy, polski zespół jazzowy, zespół na potańcówki, zespół retro, zespół z muzyką przedwojenną, zespół na imprezy VIP, taniec swingowy, kultura swingowa, zespół do filmu teatru, zespół na wigilie firmowe, świąteczne hity, bożonarodzeniowe hity, jazz kraków, swing kraków, lazy swing band, muzyka swingowa, eventy firmowe, wesela jazz, eleganckie gale, lato z radiem, lato z radiem 2026, lato z radiem 2025, polskie radio, melchiory 2026, nagrody dziennikarskie, gala melchiory"
        />
        <meta name="author" content="Lazy Swing Band" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="last-modified" content="2026-06-09" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lazyswingband.com/" />
        <meta
          property="og:title"
          content="Lazy Swing Band - Polski Zespół Jazzowy | Taneczna Muzyka | Swing, Retro, Wielki Gatsby"
        />
        <meta
          property="og:description"
          content="Polski zespół jazzowy — taneczna muzyka, która łączy pokolenia i rezonuje na estradzie, w radiu oraz na międzypokoleniowych potańcówkach. Wystąpiliśmy na gali Melchiory 2026 oraz na trasie Lata z Radiem. Zapraszamy na Lato z Radiem 2026! Kultywujemy tradycje muzyki swingowej lat 20. i 30. Tworzymy niezapomniane doświadczenia muzyczne w stylu retro i Wielki Gatsby z repertuarem do tańca swingowego i kultury swingowej. Idealny zespół na imprezy VIP, eleganckie gale i bankiety."
        />
        <meta
          property="og:image"
          content="https://lazyswingband.com/logo-color.png"
        />
        <meta
          property="og:image:alt"
          content="Lazy Swing Band - Logo zespołu jazzowego z Krakowa"
        />
        <meta property="og:image:width" content="709" />
        <meta property="og:image:height" content="709" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Lazy Swing Band" />
        <meta property="music:musician" content="https://lazyswingband.com" />
        <meta property="fb:admins" content="lazyswingersband" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lazyswingband" />
        <meta name="twitter:creator" content="@lazyswingband" />
        <meta name="twitter:url" content="https://lazyswingband.com/" />
        <meta
          name="twitter:title"
          content="Lazy Swing Band - Polski Zespół Jazzowy | Taneczna Muzyka | Swing, Retro, Wielki Gatsby"
        />
        <meta
          name="twitter:description"
          content="Polski zespół jazzowy — taneczna muzyka, która łączy pokolenia i rezonuje na estradzie, w radiu oraz na międzypokoleniowych potańcówkach. Wystąpiliśmy na gali Melchiory 2026 oraz na trasie Lata z Radiem. Zapraszamy na Lato z Radiem 2026! Kultywujemy tradycje muzyki swingowej lat 20. i 30. Tworzymy niezapomniane doświadczenia muzyczne w stylu retro i Wielki Gatsby z repertuarem do tańca swingowego i kultury swingowej. Idealny zespół na imprezy VIP, eleganckie gale i bankiety."
        />
        <meta
          name="twitter:image"
          content="https://lazyswingband.com/logo-color.png"
        />
        <meta
          name="twitter:image:alt"
          content="Lazy Swing Band - Logo zespołu jazzowego z Krakowa"
        />

        {/* Music specific */}
        <meta
          name="music:album"
          content="https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P"
        />
        <meta
          name="music:song"
          content="https://music.youtube.com/playlist?list=OLAK5uy_lkk1xPxBViBc6BJV15Z1go2wJyJRYvNQI"
        />

        <link rel="canonical" href="https://lazyswingband.com/" />

        {/* Schema.org JSON-LD - MusicGroup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Lazy Swing Band",
              alternateName: "LSB",
              description:
                "Polski zespół jazzowy — taneczna muzyka, która łączy pokolenia i rezonuje na estradzie, w radiu oraz na międzypokoleniowych potańcówkach. Kultywujemy tradycje muzyki swingowej lat 20. i 30. Specjalizujemy się w tworzeniu niezapomnianych doświadczeń muzycznych w stylu retro i Wielki Gatsby, z repertuarem do tańca swingowego i kultury swingowej, muzyką przedwojenną oraz świątecznymi standardami jazzowymi. Występowaliśmy w programie Lato z Radiem i Telewizją Polską (2025). Zapraszamy na Lato z Radiem 2026! Wystąpiliśmy na gali Melchiory 2026. Idealny na imprezy VIP, eleganckie gale i bankiety.",
              url: "https://lazyswingband.com",
              logo: "https://lazyswingband.com/logo-color.png",
              image: "https://lazyswingband.com/logo-color.png",
              genre: ["Jazz", "Swing", "Big Band"],
              foundingDate: "2016",
              foundingLocation: {
                "@type": "Place",
                name: "Kraków",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kraków",
                  addressCountry: "PL",
                },
              },
              location: {
                "@type": "Place",
                name: "Kraków",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Kraków",
                  addressRegion: "Małopolskie",
                  addressCountry: "PL",
                },
              },
              sameAs: [
                "https://www.facebook.com/lazyswingersband",
                "https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P",
                "https://music.youtube.com/playlist?list=OLAK5uy_lkk1xPxBViBc6BJV15Z1go2wJyJRYvNQI",
              ],
              album: [
                {
                  "@type": "MusicAlbum",
                  name: "Lazy Swingers",
                  url: "https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P",
                },
                {
                  "@type": "MusicAlbum",
                  name: "Lazy Christmas",
                  genre: "Christmas Jazz",
                },
                {
                  "@type": "MusicAlbum",
                  name: "Polish Standards",
                  genre: "Polish Jazz",
                },
              ],
              offers: [
                {
                  "@type": "Offer",
                  category: "Zespół na imprezy firmowe",
                  description:
                    "Zespół na firmówki, imprezy integracyjne, spotkania biznesowe w stylu retro i Wielki Gatsby",
                  areaServed: { "@type": "Country", name: "Polska" },
                },
                {
                  "@type": "Offer",
                  category: "Zespół na bankiety",
                  description:
                    "Oprawę muzyczną bankietów, gal, uroczystości z muzyką swingową i jazzową",
                  areaServed: { "@type": "Country", name: "Polska" },
                },
                {
                  "@type": "Offer",
                  category: "Zespół do tańca swingowego",
                  description:
                    "Muzyka do tańca swingowego, Charleston i kultury swingowej na potańcówki i warsztaty taneczne",
                  areaServed: { "@type": "Country", name: "Polska" },
                },
                {
                  "@type": "Offer",
                  category: "Zespół na imprezy VIP",
                  description:
                    "Ekskluzywna oprawa muzyczna imprez VIP, eleganckich gal i bankietów w stylu retro",
                  areaServed: { "@type": "Country", name: "Polska" },
                },
                {
                  "@type": "Offer",
                  category: "Zespół na wigilie firmowe",
                  description:
                    "Świąteczne hity, bożonarodzeniowe koncerty, wigilie firmowe z muzyką jazzową",
                  areaServed: { "@type": "Country", name: "Polska" },
                },
                {
                  "@type": "Offer",
                  category: "Zespół do filmu i teatru",
                  description:
                    "Muzyka przedwojenna, stylizowana oprawa muzyczna do produkcji filmowych i teatralnych",
                  areaServed: { "@type": "Country", name: "Polska" },
                },
              ],
              event: [
                {
                  "@type": "Event",
                  name: "Lato z Radiem 2026",
                  description:
                    "Lazy Swing Band ponownie dołącza do trasy Lata z Radiem i Telewizją Polską w 2026 roku! Swingowe potańcówki w najpiękniejszych zakątkach Polski.",
                  url: "https://www.latozradiem.pl",
                  startDate: "2026-06-01",
                  endDate: "2026-09-30",
                  location: {
                    "@type": "Place",
                    name: "Polska",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "PL",
                    },
                  },
                  organizer: {
                    "@type": "Organization",
                    name: "Polskie Radio",
                    url: "https://polskieradio.pl",
                  },
                  performer: {
                    "@type": "MusicGroup",
                    name: "Lazy Swing Band",
                    url: "https://lazyswingband.com",
                  },
                },
                {
                  "@type": "Event",
                  name: "Melchiory 2026 - Nagrody Dziennikarskie Polskiego Radia",
                  description:
                    "Lazy Swing Band uświetnił muzycznie galę Melchiory 2026 — prestiżowe nagrody dziennikarskie Polskiego Radia. Występ swingowy podczas uroczystej gali.",
                  url: "https://melchiory.polskieradio.pl",
                  startDate: "2026-01-01",
                  location: {
                    "@type": "Place",
                    name: "Polska",
                    address: {
                      "@type": "PostalAddress",
                      addressCountry: "PL",
                    },
                  },
                  organizer: {
                    "@type": "Organization",
                    name: "Polskie Radio",
                    url: "https://polskieradio.pl",
                  },
                  performer: {
                    "@type": "MusicGroup",
                    name: "Lazy Swing Band",
                    url: "https://lazyswingband.com",
                  },
                },
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Booking",
                url: "https://lazyswingband.com#kontakt",
              },
            }),
          }}
        />

        {/* Schema.org JSON-LD - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Strona główna",
                  item: "https://lazyswingband.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Lato z Radiem 2026",
                  item: "https://lazyswingband.com/#lato-z-radiem-2026",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "O nas",
                  item: "https://lazyswingband.com/#o-nas",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Melchiory 2026",
                  item: "https://lazyswingband.com/#melchiory-2026",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Lato z Radiem 2025",
                  item: "https://lazyswingband.com/#lato-z-radiem-2025",
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  name: "Usługi",
                  item: "https://lazyswingband.com/#uslugi",
                },
                {
                  "@type": "ListItem",
                  position: 7,
                  name: "Kontakt",
                  item: "https://lazyswingband.com/#kontakt",
                },
              ],
            }),
          }}
        />
      </Head>
      <Ui />
    </>
  );
}
