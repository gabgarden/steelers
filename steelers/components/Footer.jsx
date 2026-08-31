import Link from 'next/link'
import { band } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Link href="/" className="wordmark">
        Sign<span>Steelers</span>
      </Link>
      <p>Noma vera · silta corum · prisma in black &amp; white.</p>
      <div>
        <a href={band.instagram} target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
        <a href={band.spotify} target="_blank" rel="noreferrer">
          Spotify ↗
        </a>
      </div>
    </footer>
  )
}
