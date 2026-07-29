const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tigergardens/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/114339021591501" },
  { label: "X", href: "https://www.x.com/TigerGardens" },
];

const cultivars = ["Trinity Blizzard", "London Truffle", "Tree Flip"];

export default function Home() {
  return (
    <main className="farm-home" id="top">
      <header className="farm-nav">
        <a className="farm-brand" href="#top" aria-label="Tiger Gardens home">
          <img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" />
          <span>Tiger Gardens</span>
        </a>
        <a className="farm-nav-mark" href="#garden" aria-label="Explore the garden">TG</a>
        <div className="farm-nav-actions">
          <a className="inventory-button" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
          <a className="round-nav-button" href="#garden" aria-label="Explore the garden"><span aria-hidden="true">↘</span></a>
        </div>
      </header>

      <section className="flora-hero">
        <div className="hero-scribble scribble-one" aria-hidden="true" />
        <div className="hero-scribble scribble-two" aria-hidden="true" />
        <p className="hero-corner hero-corner-left">Trinity County<br />California</p>
        <p className="hero-corner hero-corner-right">Sun-grown<br />since 2018</p>
        <div className="flora-title">
          <p className="micro-label">A working garden in the mountains</p>
          <h1>GROW<br /><em>WILD.</em></h1>
        </div>
        <figure className="hero-field-image">
          <img src="/garden-09.webp" alt="Green and purple plants growing in a central Tiger Gardens row" />
          <figcaption>Trinity County / Field view</figcaption>
        </figure>
        <figure className="hero-orbit orbit-one">
          <img src="/garden-03.webp" alt="Tiger Gardens rows beneath a Trinity County ridgeline" />
        </figure>
        <figure className="hero-orbit orbit-two">
          <img src="/garden-10.webp" alt="Green and purple garden blocks at Tiger Gardens" />
        </figure>
        <div className="hero-stamp">TG<span>est.<br />2018</span></div>
        <a className="season-card" href="/inventory">
          <span>In the garden now</span>
          <strong>03</strong>
          <em>current cultivars</em>
          <b aria-hidden="true">↗</b>
        </a>
        <p className="hero-note">Small-batch cannabis, shaped by natural sunlight, well water, and the attention it takes to do each season right.</p>
      </section>

      <section className="farm-manifesto" id="story">
        <p className="section-kicker">01 / The farm</p>
        <h2>Made by a place<br />that doesn&apos;t fake it.</h2>
        <div className="manifesto-copy">
          <p>Tiger Gardens began in Trinity County in 2018. We grow close to the land, work with the season, and keep the focus on fresh, dependable cannabis.</p>
          <a className="underlined-link" href="#garden">Meet the garden <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="cultivar-run" id="garden">
        <div className="cultivar-heading">
          <p className="section-kicker">02 / Current selection</p>
          <h2>What&apos;s growing<br />right now.</h2>
          <a className="inventory-button dark-button" href="/inventory">See live inventory <span aria-hidden="true">↗</span></a>
        </div>
        <div className="cultivar-track">
          {cultivars.map((cultivar, index) => (
            <a className={`cultivar-tile cultivar-${index + 1}`} href="/strains" key={cultivar}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{cultivar}</strong>
              <b aria-hidden="true">↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="farm-film" aria-label="Aerial view of Tiger Gardens">
        <video autoPlay muted loop playsInline preload="metadata" poster="/garden-09.webp">
          <source src="/garden-aerial.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="farm-principles">
        <div className="principle-intro">
          <p className="section-kicker">03 / How we work</p>
          <h2>Mountain grown.<br />People made.</h2>
        </div>
        <div className="principle-stack">
          <article><span>01</span><h3>Outside on purpose</h3><p>The garden follows the pace of natural sunlight and the reality of the season.</p></article>
          <article><span>02</span><h3>Close to the work</h3><p>From planting through harvest, we keep each decision connected to the field.</p></article>
          <article><span>03</span><h3>Fresh, clear, dependable</h3><p>We build flower and pre-roll releases to show up clean, recognizable, and ready.</p></article>
        </div>
      </section>

      <section className="farm-cta">
        <div className="cta-lines" aria-hidden="true" />
        <p className="micro-label">Stay close to the field</p>
        <h2>Catch the<br /><em>next harvest.</em></h2>
        <a className="dark-cta-button" href="/inventory">View current cultivars <span aria-hidden="true">↗</span></a>
      </section>

      <section className="farm-socials">
        <p className="section-kicker">Garden updates</p>
        <div className="social-list">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer"><span>{link.label}</span><span aria-hidden="true">↗</span></a>
          ))}
        </div>
      </section>

      <footer className="farm-footer">
        <a className="farm-brand" href="#top"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /><span>Tiger Gardens</span></a>
        <p>Trinity County, California · 21+</p>
        <p>© {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
