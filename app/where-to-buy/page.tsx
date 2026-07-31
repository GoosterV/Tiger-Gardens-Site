export default function WhereToBuyPage() {
  return (
    <main className="tg-static coming-soon-page">
      <header className="tg-topbar">
        <a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/strains">Cultivars</a><a href="/inventory">Inventory</a><a href="/merch">Merch</a></nav>
        <a className="tg-inventory-link" href="mailto:TrinityClan@proton.me">Contact us <span aria-hidden="true">↗</span></a>
      </header>
      <section className="tg-static-hero locator-hero">
        <p>Retail locator / Coming soon</p>
        <h1>FIND TIGER<br /><span>NEAR YOU.</span></h1>
        <div>Tiger Gardens packaged products have not launched yet. When they do, enter your ZIP code here to find the closest verified retailer.</div>
      </section>
      <section className="coming-soon-panel">
        <p>Store search</p>
        <form>
          <label htmlFor="retail-zip">ZIP code</label>
          <div><input id="retail-zip" inputMode="numeric" maxLength={10} placeholder="Your ZIP code" disabled /><button type="submit" disabled>Coming soon</button></div>
        </form>
        <strong>NO STORES LISTED YET.</strong>
        <span>We will only publish verified shops that currently carry Tiger Gardens products.</span>
      </section>
    </main>
  );
}
