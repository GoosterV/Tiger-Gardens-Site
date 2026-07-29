const cultivars = ["Trinity Blizzard", "London Truffle", "Tree Flip"];

export default function StrainsPage() {
  return (
    <main className="farm-subpage">
      <header className="farm-nav">
        <a className="farm-brand" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <a className="farm-nav-mark" href="/" aria-label="Tiger Gardens home">TG</a>
        <div className="farm-nav-actions"><a className="inventory-button" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a></div>
      </header>
      <section className="subpage-banner cultivars-banner">
        <p className="micro-label">Current cultivar library</p>
        <h1>ONLY WHAT&apos;S<br /><em>GROWING.</em></h1>
        <p>The Tiger Gardens list is intentionally small. These are the current selections in the field—not a record of everything we&apos;ve ever grown.</p>
      </section>
      <section className="subpage-cultivars">
        {cultivars.map((cultivar, index) => <a href="/inventory" key={cultivar}><span>{String(index + 1).padStart(2, "0")}</span><strong>{cultivar}</strong><em>Current garden</em><b aria-hidden="true">↗</b></a>)}
      </section>
      <footer className="farm-footer"><a className="farm-brand" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
