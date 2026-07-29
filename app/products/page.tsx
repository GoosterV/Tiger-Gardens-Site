const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function ProductsPage() {
  return (
    <main className="launch-page">
      <header className="page-header">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/strains">Strains</a>
          <a href="#updates">Updates</a>
        </nav>
      </header>
      <section className="launch-hero">
        <p className="overline">Product releases</p>
        <h1>Something good is taking shape.</h1>
        <p>
          Tiger Gardens products are in development. This page will be the
          first place to find release details when they are ready to share.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Follow for updates <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="launch-note" id="updates">
        <span>Coming soon</span>
        <p>New releases will be announced through Tiger Gardens social channels.</p>
      </section>
      <footer className="footer">
        <a className="wordmark" href="/">Tiger Gardens</a>
        <p>Trinity County, California {"\u00b7"} Est. 2018</p>
        <p>{"\u00a9"} {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
