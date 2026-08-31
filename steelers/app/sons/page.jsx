import Image from 'next/image'
import PageHead from '@/components/PageHead'
import PageShell from '@/components/PageShell'
import { band, releases } from '@/lib/content'

export const metadata = {
  title: 'Sons',
  description: 'Ouça One Night e Cold Yellow Sun, lançamentos da Sign Steelers.',
  alternates: { canonical: '/sons' },
}

export default function Sons() {
  return (
    <PageShell>
      <PageHead index="02" eyebrow="Sons">
        Noxa lume per forma.
      </PageHead>

      <section className="releases" aria-label="Discografia">
        {releases.map((release, index) => (
          <article className="release" key={release.title}>
            <figure className="release-art">
              <Image
                src={release.cover}
                alt={`Capa de ${release.title}`}
                width={1000}
                height={1000}
                className="release-cover"
              />
              <figcaption>SS—00{index + 1}</figcaption>
            </figure>
            <div className="release-copy">
              <div className="release-data">
                <span>{release.type}</span>
                <span>{release.year}</span>
              </div>
              <h2>{release.title}</h2>
              <div className="release-data">
                <span>{release.plays} plays</span>
                <a href={band.spotify} target="_blank" rel="noreferrer">
                  Ouvir ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <iframe
        className="spotify-frame"
        src={band.spotifyEmbed}
        title="Sign Steelers no Spotify"
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </PageShell>
  )
}
