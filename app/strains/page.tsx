const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

const catalogNotes = [
  {
    number: "01",
    title: "Cultivar notes",
    text: "Each confirmed cultivar will get its own clear field note: name, selection notes, and release status.",
  },
  {
    number: "02",
    title: "Release status",
    text: "The menu follows the garden. A listing appears here only when it is approved for public release.",
  },
  {
    number: "03",
    title: "No made-up menu",
    text: "We would rather keep this page precise than pad it with names that are not actually in the current garden.",
  },
];

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
        <p className="overline">Cultivar library / live field notes</p>
        <h1>The garden keeps its own schedule.</h1>
        <p>
          This is the home for Tiger Gardens cultivar notes. Names, growing
          details, and release status will be added as each selection is ready
          for public release.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Follow for updates <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="catalog-section" id="updates">
        <div className="catalog-heading">
          <span>Current field guide</span>
          <p>A clear record, updated with the garden.</p>
        </div>
        <div className="catalog-grid">
          {catalogNotes.map((note) => (
            <article className="catalog-card" key={note.number}>
              <span>{note.number}</span>
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
