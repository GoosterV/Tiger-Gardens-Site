const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tigergardens/?hl=en",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/114339021591501",
  },
  {
    label: "X",
    href: "https://www.x.com/TigerGardens",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-noise" aria-hidden="true" />
        <header className="site-header">
          <a className="brand" href="#top" aria-label="Tiger Gardens home">
            <span className="brand-mark" aria-hidden="true">
              TG
            </span>
            <span>
              <strong>Tiger Gardens</strong>
              <small>Trinity County, California</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#approach">Our approach</a>
            <a href="#connect">Connect</a>
            <a href="#careers">Careers</a>
          </nav>
        </header>

        <div className="hero-content page-width">
          <p className="eyebrow">California cannabis cultivation</p>
          <h1>
            Rooted in Trinity County.
            <span>Cultivated with care.</span>
          </h1>
          <p className="hero-copy">
            Tiger Gardens is a licensed cultivation company committed to
            thoughtfully grown, high-quality cannabis and the land that makes it
            possible.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#connect">
              Connect with us <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="#about">
              Our story <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-bottom page-width" aria-label="Tiger Gardens values">
          <span>Locally grown</span>
          <span>Sustainably minded</span>
          <span>Responsibly cultivated</span>
        </div>
      </section>

      <section className="intro page-width" id="about">
        <div className="section-label">
          <span>01</span>
          <p>About Tiger Gardens</p>
        </div>
        <div className="intro-copy">
          <p className="kicker">A considered way to grow.</p>
          <h2>Quality starts with the conditions we create.</h2>
          <p>
            Based in Lewiston, California, Tiger Gardens grows cannabis with a
            focus on careful cultivation, strong genetics, and the best possible
            growing conditions. Every plant receives patient attention from an
            experienced team that takes pride in doing things the right way.
          </p>
          <p>
            We believe high standards and environmental consideration belong in
            the same garden. Our work is grounded in local cultivation and a
            long-term commitment to the communities we serve.
          </p>
        </div>
      </section>

      <section className="landscape" aria-label="Tiger Gardens cultivation landscape">
        <div className="landscape-overlay" />
        <div className="landscape-copy page-width">
          <p className="eyebrow">Tiger Gardens</p>
          <h2>From this place,<br />with intention.</h2>
        </div>
      </section>

      <section className="approach page-width" id="approach">
        <div className="section-label">
          <span>02</span>
          <p>Our approach</p>
        </div>
        <div className="approach-content">
          <div>
            <p className="kicker">What guides our work</p>
            <h2>Care at every stage of cultivation.</h2>
          </div>
          <div className="principles">
            <article>
              <span>01</span>
              <h3>Thoughtful cultivation</h3>
              <p>
                We use attentive, state-of-the-art cultivation practices to help
                every plant reach its potential.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>High-quality flower</h3>
              <p>
                Our focus is a consistently high-quality cannabis experience,
                grown with patience and precision.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Responsible presence</h3>
              <p>
                We support responsible cannabis use and aim to be a positive,
                considered presence in our community.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="connect" id="connect">
        <div className="connect-inner page-width">
          <div>
            <p className="eyebrow">Connect</p>
            <h2>Stay close to the garden.</h2>
            <p>
              For company updates, cultivation news, and general inquiries,
              connect with Tiger Gardens on social.
            </p>
          </div>
          <div className="connect-details">
            <p className="location">Lewiston, California</p>
            <div className="social-links" aria-label="Tiger Gardens social media">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="careers page-width" id="careers">
        <div>
          <p className="eyebrow">Careers</p>
          <h2>Grow with us.</h2>
        </div>
        <div>
          <p>
            Interested in being part of the Tiger Gardens team? Introduce
            yourself and watch our social channels for opportunities.
          </p>
          <a
            className="text-link"
            href="https://www.instagram.com/tigergardens/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Message us on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="brand footer-brand" href="#top">
            <span className="brand-mark" aria-hidden="true">TG</span>
            <span>
              <strong>Tiger Gardens</strong>
              <small>Trinity County, California</small>
            </span>
          </a>
          <p>© {new Date().getFullYear()} Tiger Gardens. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
