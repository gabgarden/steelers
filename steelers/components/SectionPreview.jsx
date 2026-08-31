import Link from 'next/link'
import TextureArt from './TextureArt'

export default function SectionPreview({ href, index, label, text, motif }) {
  return (
    <Link href={href} className="section-preview">
      <div className="preview-copy">
        <p className="kicker">{index} / Explorar</p>
        <h2>{label}</h2>
        <p>{text}</p>
        <span>Entrar ↗</span>
      </div>
      <TextureArt motif={motif} />
    </Link>
  )
}
