const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

const marketplaceSteps = [
  {
    number: "01",
    title: "Verified access",
    text: "A future account will be available only after the business and required license information have been reviewed.",
  },
  {
    number: "02",
    title: "Timed opportunities",
    text: "The planned format is a private auction-style board for bulk wholesale flower and trim opportunities.",
  },
  {
    number: "03",
    title: "Business first",
    text: "This is not live purchasing today. The experience will launch only after the right credentialing and operating process are in place.",
  },
];

export default function MarketplacePage() {
  return (
    <main className="launch-page marketplace-page">
      <header className="page-header">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <nav aria-label="Primary navigation">
          <a href="/inventory">Inventory</a>
          <a href="/services">Services</a>
          <a href="/strains">Cultivars</a>
        </nav>
      </header>
      <section className="launch-hero">
        <p className="overline">Planned wholesale exchange</p>
        <h1>A private market for the right buyers.</h1>
        <p>
          Tiger Gardens is planning an account-based wholesale exchange for
          qualified cannabis businesses. The goal: a focused place to explore
          bulk flower and trim through timed opportunities.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Register interest <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="catalog-section marketplace-board">
        <div className="catalog-heading">
          <span>How it will work</span>
          <p>Credentialed access, clear lots, and a deliberately private room.</p>
        </div>
        <div className="catalog-grid">
          {marketplaceSteps.map((step) => (
            <article className="catalog-card" key={step.number}>
              <span>{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.text}</p>
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
