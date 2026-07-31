export default function PartnersPage() {
  return (
    <main className="tg-static coming-soon-page">
      <header className="tg-topbar">
        <a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/where-to-buy">Find us</a><a href="/packaged-products">Products</a><a href="/merch">Merch</a></nav>
        <a className="tg-inventory-link" href="mailto:TrinityClan@proton.me">Contact us <span aria-hidden="true">↗</span></a>
      </header>
      <section className="tg-static-hero partners-hero">
        <p>Licensed wholesale partners / Coming soon</p>
        <h1>STAY CLOSE<br /><span>TO HARVEST.</span></h1>
        <div>A private portal for licensed distributors and retailers to follow upcoming harvests, product releases, and verified availability.</div>
      </section>
      <section className="coming-soon-panel partner-preview">
        <p>Partner applications</p>
        <strong>OPENING SOON.</strong>
        <span>Every business account will be reviewed manually before wholesale information becomes available.</span>
        <div className="partner-requirements">
          <article><b>01</b><h2>Business profile</h2><p>Legal name, DBA, business type, address, and primary contact.</p></article>
          <article><b>02</b><h2>License details</h2><p>License number, jurisdiction, type, and expiration date.</p></article>
          <article><b>03</b><h2>Private access</h2><p>Approved partners will sign in by secure email link.</p></article>
          <article><b>04</b><h2>Stay informed</h2><p>Harvest and product updates will appear in the portal and arrive by email.</p></article>
        </div>
        <a className="partner-contact-link" href="mailto:TrinityClan@proton.me?subject=Tiger%20Gardens%20wholesale%20partner%20updates">Join the partner launch list <span aria-hidden="true">↗</span></a>
      </section>
    </main>
  );
}
