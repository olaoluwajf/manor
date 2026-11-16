export default function PageHead({ eyebrow, title, children }) {
  return (
    <header className="pagehead dk">
      <p className="eyebrow">{eyebrow}</p>
      <h1><span className="line"><span>{title}</span></span></h1>
      {children && <p className="lede">{children}</p>}
    </header>
  )
}
