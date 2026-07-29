const cultivars = ["Trinity Blizzard", "London Truffle", "Tree Flip"];

export default function StrainsPage() {
  return (
    <main className="tg-static">
      <header className="tg-topbar"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><nav aria-label="Primary navigation"><a href="/">Home</a><a href="/inventory">Inventory</a></nav><a className="tg-inventory-link" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a></header>
      <section className="tg-static-hero"><p>Current cultivar library</p><h1>ONLY WHAT&apos;S<br /><span>GROWING.</span></h1><div>These are the selections currently in the Tiger Gardens field. Nothing historical, nothing added for filler.</div></section>
      <section className="tg-static-grid">
        {cultivars.map((cultivar, index) => <a className={`static-cultivar card-${index + 1}`} href="/inventory" key={cultivar}><span>{String(index + 1).padStart(2, "0")}</span><strong>{cultivar}</strong><em>Current garden</em><b aria-hidden="true">↗</b></a>)}
      </section>
      <footer className="tg-footer"><a className="tg-wordmark" href="/"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
    </main>
  );
}
