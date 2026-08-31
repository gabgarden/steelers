import PageHead from '@/components/PageHead'
import PageShell from '@/components/PageShell'
import TextureArt from '@/components/TextureArt'
import { band } from '@/lib/content'

export const metadata = {
  title: 'Ao vivo',
  description: 'Novidades e apresentações da Sign Steelers.',
  alternates: { canonical: '/shows' },
}

export default function Shows() {
  return (
    <PageShell>
      <PageHead index="03" eyebrow="Ao vivo">
        Sona fora per nocta.
      </PageHead>

      <section className="shows-panel">
        <div className="shows-copy">
          <p className="kicker">Vetra noma / alis</p>
          <h2>Arca no sinal.</h2>
          <p className="large-copy">
            Luma feris triva, cora silta per nova e prisma lento.
          </p>
          <a
            href={band.instagram}
            target="_blank"
            rel="noreferrer"
            className="outline-button"
          >
            @signsteelers ↗
          </a>
        </div>
        <TextureArt motif="grid" label="Sona transmission / noma" />
      </section>
    </PageShell>
  )
}
