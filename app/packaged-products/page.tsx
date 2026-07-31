export default function PackagedProductsPage() {
  return (
    <main className="tg-static coming-soon-page">
      <header className="tg-topbar">
        <a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/strains">Cultivars</a><a href="/where-to-buy">Find us</a><a href="/merch">Merch</a></nav>
        <a className="tg-inventory-link" href="mailto:TrinityClan@proton.me">Contact us <span aria-hidden="true">↗</span></a>
      </header>
      <section className="tg-static-hero packaged-hero">
        <p>Packaged product lineup / Coming soon</p>
        <h1>FROM FIELD<br /><span>TO PACKAGE.</span></h1>
        <div>The Tiger Gardens packaged lineup is still being prepared. Product formats, cultivar releases, and availability will appear here at launch.</div>
      </section>
      <section className="coming-soon-panel">
        <p>Current lineup</p>
        <strong>PACKAGING SOON.</strong>
        <span>Be on the lookout for the first Tiger Gardens packaged releases.</span>
      </section>
    </main>
  );
}
