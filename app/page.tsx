const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tigergardens/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/114339021591501" },
  { label: "X", href: "https://www.x.com/TigerGardens" },
];

const gardenPhotos = [
  { src: "/garden-03.webp", alt: "Garden beds framed by a Trinity County ridgeline" },
  { src: "/garden-07.webp", alt: "Tiger Gardens field in evening light" },
  { src: "/garden-10.webp", alt: "Green and purple garden blocks at Tiger Gardens" },
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
            <a href="/inventory">Inventory</a>
            <a href="/services">Services</a>
            <a href="#connect">Connect</a>
          </nav>
        </header>

        <div className="hero-center">
          <p className="hero-eyebrow">Sun-grown field cultivation</p>
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
          <span>Trinity County, California · 40°43′N / 122°48′W</span>
          <span>Small batch · Rooted here since 2018</span>
        </div>
      </section>

      <section className="garden-signal" aria-label="Tiger Gardens values">
        <div className="signal-track">
          <span>Trinity County</span><i aria-hidden="true">✦</i>
          <span>Sun-grown</span><i aria-hidden="true">✦</i>
          <span>Small batch</span><i aria-hidden="true">✦</i>
          <span>Est. 2018</span><i aria-hidden="true">✦</i>
          <span>Trinity County</span><i aria-hidden="true">✦</i>
          <span>Sun-grown</span>
        </div>
      </section>

      <section className="story section-wrap" id="story">
        <div className="section-index">01 / The story</div>
        <div className="story-copy">
          <p className="overline">A garden with a point of view</p>
          <h1>Made by the mountains.</h1>
          <p className="lead">
            Tiger Gardens is a small-batch cannabis cultivation company rooted
            in Trinity County, California.
          </p>
          <p>
            The garden began here in 2018, built around a simple idea: grow in
            step with the place. The mountains, changing weather, natural
            sunlight, and close attention to the work shape every season.
          </p>
          <div className="story-tags" aria-label="Tiger Gardens at a glance">
            <span>Natural sunlight</span>
            <span>Well water</span>
            <span>Trinity County</span>
          </div>
        </div>
      </section>

      <section className="aerial-film" aria-label="Tiger Gardens aerial garden film">
        <div className="film-frame">
          <video className="film-video" autoPlay muted loop playsInline preload="metadata" poster="/garden-09.webp">
            <source src="/garden-aerial.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="field-notes" id="field-notes">
        <div className="section-wrap field-notes-header">
          <div className="section-index">02 / Field notes</div>
          <div>
            <p className="overline">This season at Tiger Gardens</p>
            <h2>Green on one side. Purple on the other.</h2>
            <p>
              A closer look at the garden, the rows, and the place that holds it.
            </p>
          </div>
        </div>
        <div className="garden-gallery" aria-label="Tiger Gardens field photography">
          {gardenPhotos.map((photo, index) => (
            <figure className="garden-photo" key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
              <figcaption>
                <span>{String(index + 1).padStart(2, "0")}</span>
              <span>Tiger Gardens</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="garden-index section-wrap" id="garden">
        <div className="section-index">03 / The garden</div>
        <div className="garden-index-main">
          <p className="overline">The current board</p>
          <h2>The garden, ready to meet people.</h2>
          <div className="garden-cards">
            <a className="garden-card" href="/inventory">
              <span className="card-image card-image-strains" aria-hidden="true" />
              <span>01 / Live inventory</span>
              <h3>Three in the garden.</h3>
              <p>Trinity Blizzard, London Truffle, and Tree Flip. View the current selection.</p>
              <b aria-hidden="true">{"\u2192"}</b>
            </a>
            <a className="garden-card" href="/services">
              <span className="card-image card-image-products" aria-hidden="true" />
              <span>02 / Business services</span>
              <h3>Packaging & transport.</h3>
              <p>Start a conversation about packaging needs or transportation inquiries.</p>
              <b aria-hidden="true">{"\u2192"}</b>
            </a>
            <a className="garden-card garden-card-marketplace" href="/marketplace">
              <span className="card-image card-image-marketplace" aria-hidden="true" />
              <span>03 / Coming later</span>
              <h3>Wholesale exchange.</h3>
              <p>A credentialed, account-based marketplace for qualified business buyers.</p>
              <b aria-hidden="true">{"\u2192"}</b>
            </a>
          </div>
        </div>
      </section>

      <section className="cultivation section-wrap">
        <div className="section-index">04 / How we work</div>
        <div className="cultivation-main">
          <p className="overline">Season after season</p>
          <h2>Care is the whole system.</h2>
          <div className="cultivation-grid">
            <article>
              <span>01</span>
              <h3>Built around sunlight</h3>
              <p>The outdoor garden follows the pace of the season and the light that reaches this place.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Close to the source</h3>
              <p>Well water and a practical, careful approach keep the work connected to the land.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Made to show up right</h3>
              <p>We aim for fresh, dependable products with packaging that is clean, recognizable, and useful.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="connect section-wrap" id="connect">
        <div>
          <div className="section-index">05 / Connect</div>
          <h2>Stay close to the garden.</h2>
        </div>
        <div className="connect-copy">
          <p>
            Follow the field, the cultivars, and each release as it becomes
            ready. We share what is real, when it is ready to share.
          </p>
          <div className="social-links" aria-label="Tiger Gardens social media">
            {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <span aria-hidden="true">{"\u2197"}</span>
              </a>
            ))}
          </div>
          <a className="business-link" href="/services">Business & wholesale inquiries <span aria-hidden="true">{"\u2192"}</span></a>
          <p className="connect-location">Lewiston, California</p>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#top">Tiger Gardens</a>
        <p>Trinity County, California {"\u00b7"} Est. 2018 {"\u00b7"} 21+</p>
        <p>{"\u00a9"} {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
