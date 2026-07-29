const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

const currentCultivars = [
  {
    number: "01",
    title: "Trinity Blizzard",
    text: "Current Tiger Gardens selection. Release details are shared as availability is confirmed.",
  },
  {
    number: "02",
    title: "London Truffle",
    text: "Current Tiger Gardens selection. Release details are shared as availability is confirmed.",
  },
  {
    number: "03",
    title: "Tree Flip",
    text: "Current Tiger Gardens selection. Release details are shared as availability is confirmed.",
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
        <p className="overline">Cultivar library / current selection</p>
        <h1>What&apos;s in the garden now.</h1>
        <p>
          These are the current Tiger Gardens cultivars. This list stays tight:
          only what is actively in the garden belongs here.
        </p>
        <a className="button-link" href={socialHref} target="_blank" rel="noreferrer">
          Follow for updates <span aria-hidden="true">{"\u2197"}</span>
        </a>
      </section>
      <section className="catalog-section" id="updates">
        <div className="catalog-heading">
          <span>Live field guide</span>
          <p>Three current cultivars. No old menu, no filler.</p>
        </div>
        <div className="catalog-grid">
          {currentCultivars.map((note) => (
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
