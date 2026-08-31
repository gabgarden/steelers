import TextureArt from '@/components/TextureArt'
import SectionPreview from '@/components/SectionPreview'
import { band, homeSections } from '@/lib/content'
import { siteUrl } from '@/lib/site'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: band.name,
  url: siteUrl,
  sameAs: [band.instagram, band.spotify],
  album: {
    '@type': 'MusicAlbum',
    name: 'One Night',
    datePublished: '2022',
  },
}

const marquee =
  'Noma vera · Silta corum · Vela notum · Prisma fora · '

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero">
        <TextureArt motif="waves" className="hero-art" />
        <div className="hero-bottom">
          <div className="hero-label">
            <p className="kicker">Noma vera / Silta somewhere per astra</p>
            <span className="hero-index">SS—001</span>
          </div>
          <h1>
            Sign <span>Steelers</span>
          </h1>
          <div className="hero-meta">
            <p>{band.statement}</p>
            <a
              href={band.spotify}
              target="_blank"
              rel="noreferrer"
              className="outline-button"
            >
              Ouvir agora ↗
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div>
          {marquee.repeat(4)}
          <span>✳</span>
        </div>
        <div>
          {marquee.repeat(4)}
          <span>✳</span>
        </div>
      </div>

      <section className="home-sections" aria-label="Explore o site">
        {homeSections.map((section) => (
          <SectionPreview key={section.href} {...section} />
        ))}
      </section>
    </>
  )
}
