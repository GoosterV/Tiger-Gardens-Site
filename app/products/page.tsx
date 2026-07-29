const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

const releaseNotes = [
  {
    number: "01",
    label: "In focus",
    title: "Pre-rolls",
    text: "Tiger Gardens’ immediate product focus: a fresh, straightforward way to meet the garden.",
  },
  {
    number: "02",
    label: "In development",
    title: "Flower",
    text: "Future flower releases will be shared with the same attention to freshness, care, and clear information.",
  },
];

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
        <p className="overline">Release notebook / what&apos;s next</p>
        <h1>Made to show up right.</h1>
        <p>
          Tiger Gardens is building a focused product line around fresh,
          dependable cannabis and clear, recognizable packaging. This page is
          the first place for release news.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Follow for updates <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="catalog-section releases-section" id="updates">
        <div className="catalog-heading">
          <span>Release board</span>
          <p>A small product line with a clear point of view.</p>
        </div>
        <div className="catalog-grid release-grid">
          {releaseNotes.map((note) => (
            <article className="catalog-card" key={note.number}>
              <span>{note.number} / {note.label}</span>
              <h2>{note.title}</h2>
              <p>{note.text}</p>
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
