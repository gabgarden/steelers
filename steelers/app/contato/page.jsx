import EditorialImage from '@/components/EditorialImage'
import PageHead from '@/components/PageHead'
import PageShell from '@/components/PageShell'
import { art, band } from '@/lib/content'

export const metadata = {
  title: 'Contato',
  description: 'Links oficiais da Sign Steelers.',
  alternates: { canonical: '/contato' },
}

export default function Contato() {
  return (
    <PageShell>
      <PageHead index="04" eyebrow="Contato">
        Vela corum per astra.
      </PageHead>

      <section className="contact-layout">
        <EditorialImage
          {...art.contact}
          sizes="(max-width: 900px) 100vw, 50vw"
          className="contact-image"
        />
        <div className="contact-links">
          <a href={band.instagram} target="_blank" rel="noreferrer">
            <small>01</small>
            <strong>Instagram</strong>
            <span>@signsteelers ↗</span>
          </a>
          <a href={band.spotify} target="_blank" rel="noreferrer">
            <small>02</small>
            <strong>Spotify</strong>
            <span>Ouvir agora ↗</span>
          </a>
        </div>
      </section>
    </PageShell>
  )
}
