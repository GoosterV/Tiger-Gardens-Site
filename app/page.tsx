const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tigergardens/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/114339021591501" },
  { label: "X", href: "https://www.x.com/TigerGardens" },
];

export default function Home() {
  return (
    <main className="home" id="top">
      <section className="hero" aria-label="Tiger Gardens in Trinity County">
        <div className="hero-shade" aria-hidden="true" />
        <header className="hero-header">
          <a className="wordmark" href="#top" aria-label="Tiger Gardens home">
            Tiger Gardens
          </a>
          <nav aria-label="Primary navigation">
            <a href="#story">The story</a>
            <a href="#garden">The garden</a>
            <a href="#connect">Connect</a>
          </nav>
        </header>

        <div className="hero-center">
          <img
            className="hero-emblem"
            src="/tiger-gardens-logo.png"
            alt="Tiger Gardens logo: Trinity County, established 2018"
          />
          <p className="hero-location">Trinity County, California</p>
          <a className="hero-link" href="#story">
            Enter the garden <span aria-hidden="true">{"\u2193"}</span>
          </a>
        </div>

        <div className="hero-note">
          <span>Trinity County, California</span>
          <span>Rooted here since 2018</span>
        </div>
      </section>

      <section className="story section-wrap" id="story">
        <div className="section-index">01 / The story</div>
        <div className="story-copy">
          <p className="overline">A garden with a point of view</p>
          <h1>Made by this place.</h1>
          <p className="lead">
            Tiger Gardens is rooted in Trinity County, where the mountains,
            weather, and work of tending the land shape every season.
          </p>
          <p>
            We believe in patient cultivation, strong genetics, and care that
            shows up in the small details. This is a working garden, built with
            respect for the place around it.
          </p>
        </div>
      </section>

      <section className="aerial-film" aria-label="Tiger Gardens aerial garden film">
        <div className="film-frame">
          {/* A silent background loop keeps the garden film light on mobile connections. */}
          <video className="film-video" autoPlay muted loop playsInline preload="metadata">
            <source src="/garden-aerial.mp4" type="video/mp4" />
          </video>
          <div className="film-shade" aria-hidden="true" />
          <span className="film-kicker">Aerial garden film</span>
          <strong>From above.</strong>
          <p>A slow pass over the Tiger Gardens field.</p>
          <span className="film-line" aria-hidden="true" />
        </div>
        <div className="film-copy">
          <p className="overline">The garden in motion</p>
          <p>
            A slow pass over the field gives the site the same feeling as being
            on the land: open, quiet, and unmistakably Trinity County.
          </p>
        </div>
      </section>

      <section className="garden-index section-wrap" id="garden">
        <div className="section-index">02 / The garden</div>
        <div className="garden-index-main">
          <p className="overline">What is growing next</p>
          <h2>Follow the garden as it takes shape.</h2>
          <div className="garden-cards">
            <a className="garden-card" href="/strains">
              <span>01 / Strain guide</span>
              <h3>Current strains</h3>
              <p>Details and availability will be shared here as releases are announced.</p>
              <b aria-hidden="true">{"\u2192"}</b>
            </a>
            <a className="garden-card" href="/products">
              <span>02 / Product releases</span>
              <h3>Upcoming products</h3>
              <p>The next chapter of Tiger Gardens is in development. Watch this space.</p>
              <b aria-hidden="true">{"\u2192"}</b>
            </a>
          </div>
        </div>
      </section>

      <section className="cultivation section-wrap">
        <div className="section-index">03 / How we work</div>
        <div className="cultivation-main">
          <p className="overline">Season after season</p>
          <h2>Grown with care. Defined by place.</h2>
          <div className="cultivation-grid">
            <article>
              <span>01</span>
              <h3>Hands in the garden</h3>
              <p>We bring a close, attentive approach to the work from planting through harvest.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Thoughtful by nature</h3>
              <p>We make room for the seasonal rhythm of the garden and the details it asks of us.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Built to share</h3>
              <p>New strain and product information will arrive here as it is ready to be released.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="connect section-wrap" id="connect">
        <div>
          <div className="section-index">04 / Connect</div>
          <h2>Stay close to the garden.</h2>
        </div>
        <div className="connect-copy">
          <p>
            Follow along for Tiger Gardens updates, releases, and the changing
            seasons in Trinity County.
          </p>
          <div className="social-links" aria-label="Tiger Gardens social media">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <span aria-hidden="true">{"\u2197"}</span>
              </a>
            ))}
          </div>
          <p className="connect-location">Lewiston, California</p>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#top">Tiger Gardens</a>
        <p>Trinity County, California {"\u00b7"} Est. 2018</p>
        <p>{"\u00a9"} {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
