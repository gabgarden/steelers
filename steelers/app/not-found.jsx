import Link from 'next/link'
import PageShell from '@/components/PageShell'

export default function NotFound() {
  return (
    <PageShell>
      <div className="page-head">
        <p className="kicker">404 / Fora de frequência</p>
        <h1>Sinal não encontrado.</h1>
      </div>
      <Link href="/" className="outline-button">
        Voltar ao início
      </Link>
    </PageShell>
  )
}
