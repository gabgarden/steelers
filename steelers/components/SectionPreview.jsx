import Link from 'next/link'
import EditorialImage from './EditorialImage'

export default function SectionPreview({ href, index, label, text, image }) {
  const reversed = Number(index) % 2 === 0

  return (
    <Link
      href={href}
      className={`section-preview ${reversed ? 'section-preview-reversed' : ''}`}
    >
      <div className="preview-copy">
        <p className="kicker">{index} / Explorar</p>
        <h2>{label}</h2>
        <p>{text}</p>
        <span>Entrar ↗</span>
      </div>
      <EditorialImage
        {...image}
        sizes="(max-width: 900px) 100vw, 60vw"
        className="section-preview-image"
      />
    </Link>
  )
}
