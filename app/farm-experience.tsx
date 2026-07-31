"use client";

import { useEffect, useState } from "react";
import HeroPhotoDeck from "./hero-photo-deck";
import StoryVideoPlaylist from "./story-video-playlist";
import TigerRain from "./tiger-rain";
import { strains } from "./strains/strain-data";

const heroPhotos = Array.from(
  { length: 24 },
  (_, index) => `/photo-rotation/hero-${String(index + 1).padStart(2, "0")}.jpg`,
);

const socialLinks = [
  { label: "Where to buy — Coming soon", href: "/where-to-buy" },
  { label: "Packaged products — Coming soon", href: "/packaged-products" },
  { label: "Careers — Coming soon", href: "/careers" },
  { label: "Instagram", href: "https://www.instagram.com/tigergardens/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/114339021591501" },
  { label: "X", href: "https://www.x.com/TigerGardens" },
];

export default function FarmExperience() {
  const [entered, setEntered] = useState(false);
  const [raining, setRaining] = useState(false);

  useEffect(() => {
    if (entered) return;
    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;
    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";
    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    };
  }, [entered]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );
    const elements = document.querySelectorAll(".fx-reveal");
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function enterGardens() {
    if (!raining) setRaining(true);
  }

  function finishEntry() {
    setEntered(true);
    window.requestAnimationFrame(() => {
      document.querySelector("#story")?.scrollIntoView({ block: "start" });
    });
  }

  return (
    <>
      {!entered && (
        <div className={`tg-intro tg-landing ${raining ? "is-raining" : ""}`} role="dialog" aria-label="Enter Tiger Gardens">
          <section className="tg-hero-scene landing-scene">
            <div className="scene-grid" aria-hidden="true" />
            <div className="scene-line line-one" aria-hidden="true" />
            <div className="scene-line line-two" aria-hidden="true" />
            <p className="scene-meta meta-left">Trinity County<br />California</p>
            <p className="scene-meta meta-right">Sun-grown<br />Est. 2018</p>
            <figure className="hero-logo-main" data-tiger-collider>
              <img src="/tiger-gardens-logo.png" alt="Tiger Gardens, Trinity County, established 2018" />
            </figure>
            <HeroPhotoDeck photos={heroPhotos} />
            <button className="landing-enter" data-tiger-collider disabled={raining} type="button" onClick={enterGardens}>
              Enter the Gardens <span aria-hidden="true">↓</span>
            </button>
          </section>
          <TigerRain active={raining} onComplete={finishEntry} />
        </div>
      )}

      <main className={`tg-experience ${entered ? "has-entered" : ""}`}>
        <header className="tg-topbar">
          <a className="tg-wordmark" href="#story"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /></a>
          <nav aria-label="Primary navigation"><a href="#story">Story</a><a href="/strains">Cultivars</a><a href="/inventory">Inventory</a><a href="/merch">Merch</a></nav>
          <a className="tg-inventory-link" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
        </header>

        <section className="tg-story-section" id="story">
          <StoryVideoPlaylist />
          <div className="story-film-shade" aria-hidden="true" />
          <div className="story-index fx-reveal">01 <span>Current selection</span></div>
          <div className="story-main fx-reveal">
            <h2>IN THE FIELD<br /><span>RIGHT NOW.</span></h2>
            <p>Meet the four cultivars currently growing at Tiger Gardens, each shaped by the Trinity County season and selected for its own distinct character.</p>
            <a className="tg-text-link" href="/strains">View cultivar menu <span aria-hidden="true">↗</span></a>
          </div>
          <div className="story-cultivar-grid">
            {strains.map((cultivar) => (
              <a className={`cultivar-card card-${Number(cultivar.number)} fx-reveal`} href={`/strains/${cultivar.id}`} key={cultivar.id}>
                <span>{cultivar.number}</span>
                <strong>{cultivar.name}</strong>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="tg-field-atlas" aria-label="Scenes from Tiger Gardens">
          <div className="atlas-label fx-reveal"><span>Between the rows</span><p>Trinity County<br />California</p></div>
          <figure className="atlas-shot atlas-01 fx-reveal"><img src="/garden-01.webp" alt="Mature plants growing densely in the garden" /></figure>
          <figure className="atlas-shot atlas-02 fx-reveal"><img src="/garden-03.webp" alt="Tiger Gardens rows with Trinity County hills behind them" /></figure>
          <figure className="atlas-shot atlas-03 fx-reveal"><img src="/garden-06.webp" alt="Wide view of the outdoor garden under a blue sky" /></figure>
          <figure className="atlas-shot atlas-04 fx-reveal"><img src="/garden-07.webp" alt="A garden block framed by the mountain landscape" /></figure>
          <figure className="atlas-shot atlas-05 fx-reveal"><img src="/garden-02.webp" alt="A soft close view into the garden canopy" /></figure>
        </section>

        <section className="tg-mountains-film" id="garden" aria-label="Aerial view of Tiger Gardens">
          <img className="mountains-field-photo" src="/mountains-field-photo.jpg" alt="Tiger Gardens field beneath the Trinity County mountains at sunrise" />
          <div className="mountains-film-shade" aria-hidden="true" />
          <div className="mountains-film-content fx-reveal">
            <p>02 / Trinity County, California</p>
            <h2>THE MOUNTAINS<br />SET THE <span>PACE.</span></h2>
            <a href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        <section className="tg-practice-section">
          <div className="practice-title fx-reveal"><p>03 / How we work</p><h2>NO<br />SHORTCUTS.</h2></div>
          <div className="practice-list">
            <article className="fx-reveal"><span>01</span><h3>Follow the season</h3><p>The outdoor garden is shaped by the shifting light, weather, and land around it.</p></article>
            <article className="fx-reveal"><span>02</span><h3>Stay close to the field</h3><p>We take a practical, hands-on approach from planting through harvest.</p></article>
            <article className="fx-reveal"><span>03</span><h3>Release with intention</h3><p>Fresh flower and pre-rolls, clear information, and a dependable garden experience.</p></article>
          </div>
        </section>

        <section className="tg-closing-section">
          <div className="closing-orbit orbit-a" aria-hidden="true" /><div className="closing-orbit orbit-b" aria-hidden="true" />
          <div className="closing-content fx-reveal"><p>Stay close to the field</p><h2>THE NEXT<br /><span>HARVEST.</span></h2><a href="/inventory">Explore current cultivars <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="tg-social-section">
          <p>Garden updates</p>
          <div>{socialLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}><span>{link.label}</span><span aria-hidden="true">↗</span></a>)}</div>
        </section>

        <footer className="tg-footer"><a className="tg-wordmark" href="#story"><img src="/tiger-gardens-logo.png" alt="Tiger Gardens" /></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
      </main>
    </>
  );
}
