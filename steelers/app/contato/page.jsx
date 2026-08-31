import PageHead from '@/components/PageHead'
import PageShell from '@/components/PageShell'
import { band } from '@/lib/content'

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
    </PageShell>
  )
}
