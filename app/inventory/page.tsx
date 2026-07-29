const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

const currentInventory = [
  "Trinity Blizzard",
  "London Truffle",
  "Tree Flip",
];

export default function InventoryPage() {
  return (
    <main className="launch-page inventory-page">
      <header className="page-header">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <nav aria-label="Primary navigation">
          <a href="/strains">Cultivars</a>
          <a href="/services">Services</a>
          <a href="/marketplace">Wholesale</a>
        </nav>
      </header>
      <section className="launch-hero">
        <p className="overline">Live inventory / current garden</p>
        <h1>Only what&apos;s growing now.</h1>
        <p>
          This board reflects the current Tiger Gardens selection. Availability
          changes with the garden, so use it as a clear starting point for a
          business inquiry.
        </p>
      </section>
      <section className="inventory-board">
        <div className="catalog-heading">
          <span>Current cultivars</span>
          <p>Updated for the garden, not a history book.</p>
        </div>
        <ol className="inventory-list">
          {currentInventory.map((cultivar, index) => (
            <li key={cultivar}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{cultivar}</strong>
              <em>Current selection</em>
            </li>
          ))}
        </ol>
        <a className="button-link light-button" href={socialHref} target="_blank" rel="noreferrer">
          Ask about availability <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <footer className="footer">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <p>Trinity County, California {"\u00b7"} Est. 2018 {"\u00b7"} 21+</p>
        <p>{"\u00a9"} {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
