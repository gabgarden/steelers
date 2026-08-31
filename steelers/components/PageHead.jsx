export default function PageHead({ index, eyebrow, children }) {
  return (
    <header className="page-head">
      <p className="kicker">
        {index} / {eyebrow}
      </p>
      <h1>{children}</h1>
    </header>
  )
}
