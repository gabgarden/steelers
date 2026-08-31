import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { siteUrl } from '@/lib/site'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const description =
  'Sign Steelers — música independente, One Night e Cold Yellow Sun.'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sign Steelers',
    template: '%s — Sign Steelers',
  },
  description,
  keywords: ['Sign Steelers', 'One Night', 'Cold Yellow Sun', 'banda'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Sign Steelers',
    title: 'Sign Steelers',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Steelers',
    description,
  },
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${mono.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <div className="grain" aria-hidden="true" />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
