const inventory = ["Trinity Blizzard", "London Truffle", "Tree Flip"];
const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function InventoryPage() {
  return (
    <main className="farm-subpage">
      <header className="farm-nav">
        <a className="farm-brand" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <a className="farm-nav-mark" href="/" aria-label="Tiger Gardens home">TG</a>
        <div className="farm-nav-actions"><a className="inventory-button" href="/strains">Cultivar guide <span aria-hidden="true">↗</span></a></div>
      </header>
      <section className="subpage-banner inventory-banner">
        <p className="micro-label">Live inventory / 2026</p>
        <h1>IN THE FIELD.<br /><em>RIGHT NOW.</em></h1>
        <p>This is the active Tiger Gardens selection. Availability follows the garden, so reach out for the most current details.</p>
      </section>
      <section className="inventory-board">
        <div className="board-label"><span>Current garden</span><span>03 cultivars</span></div>
        {inventory.map((cultivar, index) => <article key={cultivar}><span>{String(index + 1).padStart(2, "0")}</span><h2>{cultivar}</h2><p>In the garden</p></article>)}
        <a className="dark-cta-button" href={socialHref} target="_blank" rel="noreferrer">Ask about availability <span aria-hidden="true">↗</span></a>
      </section>
      <footer className="farm-footer"><a className="farm-brand" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
