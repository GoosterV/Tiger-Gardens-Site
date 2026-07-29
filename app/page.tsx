const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tigergardens/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/114339021591501" },
  { label: "X", href: "https://www.x.com/TigerGardens" },
];

const cultivars = ["Trinity Blizzard", "London Truffle", "Tree Flip"];

export default function Home() {
  return (
    <main className="tg-site" id="top">
      <header className="tg-nav">
        <a className="tg-brand" href="#top" aria-label="Tiger Gardens home">
          <span className="brand-mark" aria-hidden="true">TG</span>
          <span>Tiger Gardens</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#story">Story</a>
          <a href="/strains">Cultivars</a>
          <a href="/inventory">Inventory</a>
        </nav>
        <a className="nav-cta" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
      </header>

      <section className="tg-hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="tg-eyebrow"><span aria-hidden="true" /> Trinity County, California · Est. 2018</p>
          <h1>Grow with<br />the mountain.</h1>
          <p className="hero-lead">
            Small-batch, sun-grown cannabis shaped by the land, the light, and
            the work it takes to get every detail right.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/inventory">Explore the current garden <span aria-hidden="true">→</span></a>
            <a className="text-button" href="#story">Our story <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-bar">
            <span><i aria-hidden="true" /> Field view</span>
            <span>Garden / 2026</span>
          </div>
          <img src="/garden-09.webp" alt="Green and purple plants along a central Tiger Gardens row" />
          <div className="visual-status">
            <span>Current field</span>
            <strong>03 <em>cultivars</em></strong>
            <a href="/inventory">View inventory <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <section className="tg-signal-strip" aria-label="Tiger Gardens values">
        <span>Sun-grown</span><i aria-hidden="true">✦</i>
        <span>Trinity County</span><i aria-hidden="true">✦</i>
        <span>Small batch</span><i aria-hidden="true">✦</i>
        <span>Rooted since 2018</span>
      </section>

      <section className="tg-overview" id="story">
        <div className="section-label"><span>01</span> The garden</div>
        <div className="overview-heading">
          <p className="tg-eyebrow">Built around a real place</p>
          <h2>There&apos;s no substitute<br />for being here.</h2>
          <p>
            Tiger Gardens began in Trinity County in 2018. The work follows the
            season: natural sunlight, well water, careful selection, and close
            attention from planting through harvest.
          </p>
        </div>
        <div className="overview-cards">
          <article className="cultivar-panel">
            <div className="panel-topline"><span>Current selection</span><a href="/strains">All cultivars ↗</a></div>
            <div className="cultivar-list">
              {cultivars.map((cultivar, index) => (
                <a href="/inventory" key={cultivar}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{cultivar}</strong>
                  <b aria-hidden="true">→</b>
                </a>
              ))}
            </div>
          </article>
          <figure className="field-card">
            <img src="/garden-03.webp" alt="Tiger Gardens rows beneath a Trinity County ridgeline" loading="lazy" />
            <figcaption><span>Field note</span><span>Outdoor / living system</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="tg-film" aria-label="Tiger Gardens aerial garden film">
        <video autoPlay muted loop playsInline preload="metadata" poster="/garden-09.webp">
          <source src="/garden-aerial.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="tg-principles">
        <div className="section-label"><span>02</span> How we work</div>
        <div className="principles-main">
          <p className="tg-eyebrow">A simple operating system</p>
          <h2>Farm work.<br />Done with intention.</h2>
          <div className="principle-list">
            <article>
              <span>01</span>
              <h3>Defined by place</h3>
              <p>The outdoor garden is shaped by Trinity County&apos;s terrain, weather, and natural sunlight.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Close to the work</h3>
              <p>A practical, hands-on approach keeps every decision connected to the field.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Fresh on purpose</h3>
              <p>We focus on dependable flower and pre-rolls that show up clean, clear, and ready.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="tg-story-card">
        <div className="story-image"><img src="/garden-10.webp" alt="Green and purple garden blocks at Tiger Gardens" loading="lazy" /></div>
        <div className="story-card-copy">
          <p className="tg-eyebrow">A farm in progress</p>
          <h2>The work is visible in the rows.</h2>
          <p>From the field to every release, Tiger Gardens is built to stay recognizable, honest, and connected to the place it comes from.</p>
          <a className="primary-button" href="/inventory">See what&apos;s current <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="tg-connect">
        <div>
          <p className="tg-eyebrow">Keep up with the field</p>
          <h2>Garden updates,<br />when they matter.</h2>
        </div>
        <div className="connect-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{link.label}</span><span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer className="tg-footer">
        <a className="tg-brand" href="#top"><span className="brand-mark" aria-hidden="true">TG</span><span>Tiger Gardens</span></a>
        <p>Trinity County, California · 21+</p>
        <p>© {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
