export default function CareersPage() {
  return (
    <main className="tg-static coming-soon-page">
      <header className="tg-topbar">
        <a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/where-to-buy">Find us</a><a href="/packaged-products">Products</a><a href="/merch">Merch</a></nav>
        <a className="tg-inventory-link" href="mailto:TrinityClan@proton.me">Contact us <span aria-hidden="true">↗</span></a>
      </header>
      <section className="tg-static-hero careers-hero">
        <p>Work with Tiger Gardens</p>
        <h1>GROW WITH<br /><span>THE GARDEN.</span></h1>
        <div>There are no open roles posted right now. Our careers page is growing—check back for future opportunities in Trinity County.</div>
      </section>
      <section className="coming-soon-panel">
        <p>Careers / Coming soon</p>
        <strong>NO OPENINGS YET.</strong>
        <span>Future roles and application instructions will be posted here when they become available.</span>
      </section>
    </main>
  );
}
