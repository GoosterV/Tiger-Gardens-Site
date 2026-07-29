const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

const services = [
  {
    number: "01",
    title: "Packaging services",
    text: "Talk with Tiger Gardens about packaging needs for a release and how a project should show up on shelf.",
  },
  {
    number: "02",
    title: "Transportation inquiries",
    text: "For qualified cannabis-business inquiries, start a conversation about transportation needs and timing.",
  },
  {
    number: "03",
    title: "Wholesale conversations",
    text: "Ask about current garden availability, future opportunities, and the planned wholesale exchange.",
  },
];

export default function ServicesPage() {
  return (
    <main className="launch-page services-page">
      <header className="page-header">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <nav aria-label="Primary navigation">
          <a href="/inventory">Inventory</a>
          <a href="/strains">Cultivars</a>
          <a href="/marketplace">Wholesale</a>
        </nav>
      </header>
      <section className="launch-hero">
        <p className="overline">Business services / start a conversation</p>
        <h1>Good work needs a clear next step.</h1>
        <p>
          Tiger Gardens is open to packaging, transportation, and wholesale
          conversations with qualified cannabis businesses. Tell us what you
          need and where your project is headed.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Inquire on Instagram <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="catalog-section services-board">
        <div className="catalog-heading">
          <span>What we can discuss</span>
          <p>Specific projects, clear scope, and the right fit.</p>
        </div>
        <div className="catalog-grid">
          {services.map((service) => (
            <article className="catalog-card" key={service.number}>
              <span>{service.number}</span>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <footer className="footer">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <p>Trinity County, California {"\u00b7"} Est. 2018 {"\u00b7"} 21+</p>
        <p>{"\u00a9"} {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
