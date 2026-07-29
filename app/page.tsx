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
            <a href="#cultivation">Cultivation</a>
            <a href="#connect">Connect</a>
          </nav>
        </header>

        <div className="hero-center">
          <img
            className="hero-emblem"
            src="/tiger-gardens-mark.webp"
            alt="Tiger Gardens, Trinity County, established 2018"
          />
          <p className="hero-location">Trinity County, California</p>
          <a className="hero-link" href="#story">
            Enter the garden <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div className="hero-note">
          <span>Licensed California cultivator</span>
          <span>Rooted here since 2018</span>
        </div>
      </section>

      <section className="story section-wrap" id="story">
        <div className="section-index">01 / The story</div>
        <div className="story-copy">
          <p className="overline">A garden with a point of view</p>
          <h1>Made by this place.</h1>
          <p className="lead">
            Tiger Gardens is a licensed cannabis cultivation company rooted in
            Trinity County. The mountains, the weather, and the work of tending
            the land are not a backdrop to what we do—they shape it.
          </p>
          <p>
            We grow with patience, strong genetics, and respect for the natural
            rhythm of the garden. Every season asks something different of us;
            every plant receives the attention it deserves.
          </p>
        </div>
      </section>

      <section className="field-feature" aria-label="Tiger Gardens cultivation field">
        <div className="field-frame">
          <img src="/cultivation-field.webp" alt="A Tiger Gardens cultivation field in Trinity County" />
        </div>
        <div className="field-caption">
          <p className="overline">Trinity County, California</p>
          <p>
            High standards begin with the conditions we create—careful beds,
            thoughtful irrigation, and a team that knows the garden from the
            ground up.
          </p>
        </div>
      </section>

      <section className="cultivation section-wrap" id="cultivation">
        <div className="section-index">02 / Cultivation</div>
        <div className="cultivation-main">
          <p className="overline">The work, season after season</p>
          <h2>Grown with care. Defined by place.</h2>
          <div className="cultivation-grid">
            <article>
              <span>01</span>
              <h3>Thoughtful cultivation</h3>
              <p>
                We bring an attentive, hands-on approach to every stage, from
                planting through harvest.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Quality flower</h3>
              <p>
                Our focus is exceptional cannabis, grown with patience,
                consistency, and intention.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Responsible roots</h3>
              <p>
                We believe cultivation carries a responsibility to the land and
                the community around it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="photo-quote">
        <div className="photo-quote-shade" aria-hidden="true" />
        <div className="photo-quote-content">
          <p className="overline">The Tiger Gardens way</p>
          <blockquote>
            “Grow something you can stand behind.”
          </blockquote>
        </div>
      </section>

      <section className="connect section-wrap" id="connect">
        <div>
          <div className="section-index">03 / Connect</div>
          <h2>Stay close to the garden.</h2>
        </div>
        <div className="connect-copy">
          <p>
            Follow along for company updates, cultivation news, and the changing
            seasons at Tiger Gardens.
          </p>
          <div className="social-links" aria-label="Tiger Gardens social media">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <span>{link.label}</span>
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
          <p className="connect-location">Lewiston, California</p>
        </div>
      </section>

      <footer className="footer">
        <a className="wordmark" href="#top">Tiger Gardens</a>
        <p>Trinity County, California · Est. 2018</p>
        <p>© {new Date().getFullYear()} Tiger Gardens</p>
      </footer>
    </main>
  );
}
