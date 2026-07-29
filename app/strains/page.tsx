const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function StrainsPage() {
  return (
    <main className="launch-page">
      <header className="page-header">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="#updates">Updates</a>
        </nav>
      </header>
      <section className="launch-hero">
        <p className="overline">Strain guide</p>
        <h1>The next harvest has a story.</h1>
        <p>
          Current strain details will be posted here as releases are announced.
          Harvest timing and availability can change, so this guide will stay
          focused on what is ready now.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Follow for updates <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="launch-note" id="updates">
        <span>Growing now</span>
        <p>When the current lineup is ready to share, it will be listed here.</p>
      </section>
      <footer className="footer">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <p>Trinity County, California {"\u00b7"} Est. 2018</p>
        <p>{"\u00a9"} {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
