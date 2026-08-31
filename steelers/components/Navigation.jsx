'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { band, navItems } from '@/lib/content'

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const close = ({ key }) => key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', close)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', close)
    }
  }, [open])

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Sign Steelers — início">
        Sign<span>Steelers</span>
      </Link>

      <nav className="desktop-nav" aria-label="Navegação principal">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? 'page' : undefined}
          >
            {item.index} {item.label}
          </Link>
        ))}
      </nav>

      <a
        className="listen-link"
        href={band.spotify}
        target="_blank"
        rel="noreferrer"
      >
        Ouvir ↗
      </a>

      <button
        type="button"
        className="menu-button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Fechar' : 'Menu'}
      </button>

      {open && (
        <nav id="mobile-menu" className="mobile-nav" aria-label="Menu móvel">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              <small>{item.index}</small>
              {item.label}
            </Link>
          ))}
          <a href={band.spotify} target="_blank" rel="noreferrer">
            <small>05</small>
            Spotify ↗
          </a>
        </nav>
      )}
    </header>
  )
}
