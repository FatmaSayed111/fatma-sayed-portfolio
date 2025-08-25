export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      <div className="container">
        <div className="mb-10">
          <h2 className="heading">{title}</h2>
          {subtitle && <p className="subheading mt-2">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
