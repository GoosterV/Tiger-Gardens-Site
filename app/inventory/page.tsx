const inventory = ["Trinity Blizzard", "London Truffle", "Tree Flip"];
const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function InventoryPage() {
  return (
    <main className="tg-subpage">
      <header className="tg-nav">
        <a className="tg-brand" href="/"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/strains">Cultivars</a></nav>
        <a className="nav-cta" href="/strains">Current cultivars <span aria-hidden="true">↗</span></a>
      </header>
      <section className="subpage-hero inventory-hero">
        <p className="tg-eyebrow"><span aria-hidden="true" /> Live inventory</p>
        <h1>The field,<br />right now.</h1>
        <p>This board reflects the active Tiger Gardens selection. Availability changes with the season—ask us for current details.</p>
      </section>
      <section className="subpage-board inventory-board">
        <div className="board-heading"><span>Current garden</span><p>03 active cultivars</p></div>
        <div className="record-list">
          {inventory.map((cultivar, index) => <div key={cultivar}><span>{String(index + 1).padStart(2, "0")}</span><strong>{cultivar}</strong><em>In the garden</em></div>)}
        </div>
        <a className="primary-button" href={socialHref} target="_blank" rel="noreferrer">Ask about availability <span aria-hidden="true">↗</span></a>
      </section>
      <footer className="tg-footer"><a className="tg-brand" href="/"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
