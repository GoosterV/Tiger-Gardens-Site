const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function ProductsPage() {
  return (
    <main className="farm-subpage">
      <header className="farm-nav">
        <a className="farm-brand" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <a className="farm-nav-mark" href="/" aria-label="Tiger Gardens home">TG</a>
        <div className="farm-nav-actions"><a className="inventory-button" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a></div>
      </header>
      <section className="subpage-banner product-banner">
        <p className="micro-label">Garden releases</p>
        <h1>FRESH BY<br /><em>DESIGN.</em></h1>
        <p>A focused line of flower and pre-rolls built around the garden: recognizable, reliable, and ready when the season says so.</p>
      </section>
      <section className="product-board">
        <article><span>01</span><h2>Flower</h2><p>Garden-grown releases with current cultivar information and clear availability notes.</p></article>
        <article><span>02</span><h2>Pre-rolls</h2><p>A simple, fresh way to meet the garden as new releases become available.</p></article>
        <a className="dark-cta-button" href={socialHref} target="_blank" rel="noreferrer">Follow releases <span aria-hidden="true">↗</span></a>
      </section>
      <footer className="farm-footer"><a className="farm-brand" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
