const cultivars = ["Trinity Blizzard", "London Truffle", "Tree Flip"];

export default function StrainsPage() {
  return (
    <main className="tg-subpage">
      <header className="tg-nav">
        <a className="tg-brand" href="/"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/inventory">Inventory</a></nav>
        <a className="nav-cta" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
      </header>
      <section className="subpage-hero">
        <p className="tg-eyebrow"><span aria-hidden="true" /> Current field guide</p>
        <h1>Only what&apos;s<br />in the garden.</h1>
        <p>The Tiger Gardens cultivar library stays focused on current selections. No old menu, no filler.</p>
      </section>
      <section className="subpage-board">
        <div className="board-heading"><span>Live selection</span><p>Current cultivars / 2026</p></div>
        <div className="record-list">
          {cultivars.map((cultivar, index) => <a href="/inventory" key={cultivar}><span>TG-{String(index + 1).padStart(2, "0")}</span><strong>{cultivar}</strong><em>Current selection</em><b aria-hidden="true">→</b></a>)}
        </div>
      </section>
      <footer className="tg-footer"><a className="tg-brand" href="/"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
