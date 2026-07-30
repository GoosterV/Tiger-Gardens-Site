import { strains } from "../strains/strain-data";

const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function InventoryPage() {
  return (
    <main className="tg-static">
      <header className="tg-topbar"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><nav aria-label="Primary navigation"><a href="/">Home</a><a href="/strains">Cultivars</a></nav><a className="tg-inventory-link" href="/strains">Cultivar guide <span aria-hidden="true">↗</span></a></header>
      <section className="tg-static-hero inventory-static"><p>Live inventory / 2026</p><h1>IN THE FIELD.<br /><span>RIGHT NOW.</span></h1><div>This board reflects the active Tiger Gardens selection. Availability changes with the season—ask for the latest details.</div></section>
      <section className="tg-inventory-board"><div className="inventory-head"><span>Current garden</span><span>04 cultivars</span></div>{strains.map((cultivar) => <article key={cultivar.id}><span>{cultivar.number}</span><h2>{cultivar.name}</h2><p>In the garden</p></article>)}<a className="static-action" href={socialHref} target="_blank" rel="noreferrer">Ask about availability <span aria-hidden="true">↗</span></a></section>
      <footer className="tg-footer"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
