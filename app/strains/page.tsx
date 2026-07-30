import { strains } from "./strain-data";

export default function StrainsPage() {
  return (
    <main className="tg-static">
      <header className="tg-topbar"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><nav aria-label="Primary navigation"><a href="/">Home</a><a href="/inventory">Inventory</a><a href="/merch">Merch</a></nav><a className="tg-inventory-link" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a></header>
      <section className="tg-static-hero"><p>Current cultivar library</p><h1>ONLY WHAT&apos;S<br /><span>GROWING.</span></h1><div>Four current Tiger Gardens selections, with their lineage and heritage profile in one place.</div></section>
      <section className="tg-static-grid">
        {strains.map((cultivar) => <a className={`static-cultivar card-${Number(cultivar.number)}`} href={`/strains/${cultivar.id}`} key={cultivar.id}><span>{cultivar.number}</span><strong>{cultivar.name}</strong><em>{cultivar.lineage}</em><b aria-hidden="true">↗</b></a>)}
      </section>
      <footer className="tg-footer"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
