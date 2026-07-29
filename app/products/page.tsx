const socialHref = "https://www.instagram.com/tigergardens/?hl=en";

export default function ProductsPage() {
  return (
    <main className="tg-subpage">
      <header className="tg-nav">
        <a className="tg-brand" href="/"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/inventory">Inventory</a></nav>
        <a className="nav-cta" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
      </header>
      <section className="subpage-hero">
        <p className="tg-eyebrow"><span aria-hidden="true" /> Garden releases</p>
        <h1>Fresh by<br />design.</h1>
        <p>Tiger Gardens is building a focused product line around flower and pre-rolls—clear, dependable, and connected to the field.</p>
      </section>
      <section className="subpage-board product-board">
        <div className="board-heading"><span>Release notebook</span><p>What&apos;s taking shape</p></div>
        <div className="product-grid">
          <article><span>01</span><h2>Flower</h2><p>Garden-grown releases with clear cultivar information and availability updates.</p></article>
          <article><span>02</span><h2>Pre-rolls</h2><p>A fresh, straightforward way to meet the garden as releases become available.</p></article>
        </div>
        <a className="primary-button" href={socialHref} target="_blank" rel="noreferrer">Follow releases <span aria-hidden="true">↗</span></a>
      </section>
      <footer className="tg-footer"><a className="tg-brand" href="/"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
