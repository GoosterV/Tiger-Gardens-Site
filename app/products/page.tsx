const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function ProductsPage() {
  return (
    <main className="tg-static">
      <header className="tg-topbar"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><nav aria-label="Primary navigation"><a href="/">Home</a><a href="/inventory">Inventory</a><a href="/merch">Merch</a></nav><a className="tg-inventory-link" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a></header>
      <section className="tg-static-hero products-static"><p>Garden releases</p><h1>FRESH BY<br /><span>DESIGN.</span></h1><div>A focused release program for garden-grown flower and pre-rolls: recognizable, dependable, and rooted in the field.</div></section>
      <section className="tg-product-board"><article><span>01</span><h2>Flower</h2><p>Garden-grown releases with current cultivar information and clear availability notes.</p></article><article><span>02</span><h2>Pre-rolls</h2><p>A fresh, straightforward way to meet the garden when releases are ready.</p></article><a className="static-action" href={socialHref} target="_blank" rel="noreferrer">Follow releases <span aria-hidden="true">↗</span></a></section>
      <footer className="tg-footer"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
