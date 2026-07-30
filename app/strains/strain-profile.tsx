import type { StrainProfile } from "./strain-data";

export default function StrainProfilePage({ strain }: { strain: StrainProfile }) {
  return (
    <main className="tg-static strain-detail">
      <header className="tg-topbar">
        <a className="tg-wordmark" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/strains">Cultivars</a><a href="/inventory">Inventory</a></nav>
        <a className="tg-inventory-link" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
      </header>

      <section className={`tg-static-hero strain-detail-hero ${strain.tone}`}>
        <p>{strain.eyebrow}</p>
        <h1>{strain.name}</h1>
        <div>{strain.description}</div>
      </section>

      <section className="strain-profile-body">
        <div className="strain-profile-heading">
          <p>{strain.number} / Current cultivar</p>
          <h2>THE<br /><span>PROFILE.</span></h2>
        </div>

        <div className="strain-fact-grid" aria-label={`${strain.name} cultivar details`}>
          <article><span>Lineage</span><strong>{strain.lineage}</strong></article>
          <article><span>Breeder / selection</span><strong>{strain.breeder}</strong></article>
          <article><span>Flower window</span><strong>{strain.flower}</strong></article>
          <article><span>Nursery reference range</span><strong>{strain.referencePotency}</strong></article>
        </div>

        <div className="strain-notes">
          <article>
            <span>Plant character</span>
            <h3>{strain.structure}</h3>
            <p>{strain.fieldNote}</p>
          </article>
          <article>
            <span>Aromatic direction</span>
            <h3>{strain.aroma}</h3>
            <p>Our cultivar pages describe the genetics and heritage of each selection. Actual harvest appearance, aroma and lab results can vary by run.</p>
          </article>
        </div>

        <aside className="strain-reference">
          <p>Genetic reference adapted for Tiger Gardens from the source nursery that supplied these cultivars. Potency ranges are reference information only, not batch-specific Tiger Gardens lab results.</p>
          <a href={strain.sourceUrl} target="_blank" rel="noreferrer">Read the nursery reference <span aria-hidden="true">↗</span></a>
        </aside>
      </section>

      <section className="strain-detail-next">
        <p>Current garden / 2026</p>
        <h2>SEE WHAT&apos;S<br /><span>IN THE FIELD.</span></h2>
        <a href="/inventory">Open live inventory <span aria-hidden="true">↗</span></a>
      </section>

      <footer className="tg-footer"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
