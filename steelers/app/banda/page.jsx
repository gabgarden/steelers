import PageHead from '@/components/PageHead'
import PageShell from '@/components/PageShell'
import TextureArt from '@/components/TextureArt'
import { band, members } from '@/lib/content'

export const metadata = {
  title: 'Banda',
  description: 'Formação, estética e créditos da Sign Steelers.',
  alternates: { canonical: '/banda' },
}

export default function Banda() {
  return (
    <PageShell>
      <PageHead index="01" eyebrow="Banda">
        Vetra noma per alis.
      </PageHead>

      <div className="split-layout">
        <TextureArt motif="strata" label="Noma frequency / arca" />
        <div>
          <p className="large-copy">{band.about}</p>
          <dl className="credits">
            <div>
              <dt>Produção</dt>
              <dd>{band.production}</dd>
            </div>
            <div>
              <dt>Selo</dt>
              <dd>{band.label}</dd>
            </div>
            <div>
              <dt>Lançamentos</dt>
              <dd>One Night / Cold Yellow Sun</dd>
            </div>
          </dl>
        </div>
      </div>

      <section className="members">
        <p className="kicker">Vetra / corum</p>
        <h2>Quatro prismas.</h2>
        <ol className="member-list">
          {members.map((member, index) => (
            <li key={member.name}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <strong>{member.name}</strong>
              <span>{member.role}</span>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  )
}
