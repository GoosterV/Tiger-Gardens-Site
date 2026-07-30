"use client";

import { useEffect, useState, type PointerEvent } from "react";

const cultivars = ["Trinity Blizzard", "London Truffle", "Tree Flip"];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/tigergardens/?hl=en" },
  { label: "Facebook", href: "https://www.facebook.com/114339021591501" },
  { label: "X", href: "https://www.x.com/TigerGardens" },
];

export default function FarmExperience() {
  const [entered, setEntered] = useState(false);

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

  function moveScene(event: PointerEvent<HTMLElement>) {
    if (event.pointerType === "touch") return;
    const x = ((event.clientX / window.innerWidth) - 0.5).toFixed(3);
    const y = ((event.clientY / window.innerHeight) - 0.5).toFixed(3);
    event.currentTarget.style.setProperty("--mouse-x", x);
    event.currentTarget.style.setProperty("--mouse-y", y);
  }

  return (
    <>
      {!entered && (
        <div className="tg-intro" role="dialog" aria-label="Enter Tiger Gardens">
          <div className="intro-pulse" aria-hidden="true" />
          <img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" />
          <p>Trinity County, California</p>
          <button type="button" onClick={() => setEntered(true)}>Enter the garden <span aria-hidden="true">↘</span></button>
        </div>
      )}

      <main className={`tg-experience ${entered ? "has-entered" : ""}`} onPointerMove={moveScene}>
        <header className="tg-topbar">
          <a className="tg-wordmark" href="#top"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /></a>
          <nav aria-label="Primary navigation"><a href="#story">Story</a><a href="/strains">Cultivars</a><a href="/inventory">Inventory</a></nav>
          <a className="tg-inventory-link" href="/inventory">Live inventory <span aria-hidden="true">↗</span></a>
        </header>

        <section className="tg-hero-scene" id="top">
          <h1 className="tg-sr-only">Tiger Gardens</h1>
          <div className="scene-grid" aria-hidden="true" />
          <div className="scene-line line-one" aria-hidden="true" />
          <div className="scene-line line-two" aria-hidden="true" />
          <p className="scene-meta meta-left">Trinity County<br />California</p>
          <p className="scene-meta meta-right">Sun-grown<br />Est. 2018</p>
          <figure className="hero-logo-main" aria-label="Tiger Gardens crest">
            <img src="/tiger-gardens-mark.webp" alt="Tiger Gardens, Trinity County, established 2018" />
          </figure>
          <figure className="hero-photo hero-photo-small fourth"><img src="/garden-top-left.jpg" alt="A close-up Tiger Gardens flower photographed against a warm orange background" /></figure>
          <figure className="hero-photo hero-photo-small first"><img src="/garden-04.webp" alt="Sunlit rows at Tiger Gardens" /></figure>
          <figure className="hero-photo hero-photo-small second"><img src="/garden-08.webp" alt="Sunlight over the Tiger Gardens field" /></figure>
          <figure className="hero-photo hero-photo-relocated">
            <img src="/garden-09.webp" alt="Green plants on the left and purple plants on the right in a Tiger Gardens field row" />
            <figcaption>Field notes / 2026</figcaption>
          </figure>
          <a className="hero-status-card" href="/inventory"><span>Current garden</span><strong>03</strong><em>cultivars</em><b aria-hidden="true">↗</b></a>
          <a className="scroll-prompt" href="#story">Scroll to explore <span aria-hidden="true">↓</span></a>
        </section>

        <section className="tg-story-section" id="story">
          <div className="story-index fx-reveal">01 <span>The farm</span></div>
          <div className="story-main fx-reveal">
            <h2>THE MOUNTAINS<br />SET THE <span>PACE.</span></h2>
            <p>Tiger Gardens began in Trinity County in 2018. We work with the season, the natural sunlight, and the land under our feet to grow cannabis that feels tied to a real place.</p>
            <a className="tg-text-link" href="#garden">See what&apos;s growing <span aria-hidden="true">↘</span></a>
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

        <section className="tg-cultivar-section" id="garden">
          <div className="cultivar-top fx-reveal"><p>02 / Current selection</p><h2>IN THE FIELD<br /><span>RIGHT NOW.</span></h2><a href="/inventory">Live inventory <span aria-hidden="true">↗</span></a></div>
          <div className="cultivar-grid">
            {cultivars.map((cultivar, index) => (
              <a className={`cultivar-card card-${index + 1} fx-reveal`} href="/strains" key={cultivar}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{cultivar}</strong>
                <b aria-hidden="true">↗</b>
              </a>
            ))}
          </div>
        </section>

        <section className="tg-aerial-wrap fx-reveal" aria-label="Aerial view of Tiger Gardens">
          <video autoPlay muted loop playsInline preload="metadata" poster="/garden-09.webp"><source src="/garden-aerial.mp4" type="video/mp4" /></video>
          <div className="aerial-corner">Over the garden<br />Trinity County</div>
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
          <div>{socialLinks.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer"><span>{link.label}</span><span aria-hidden="true">↗</span></a>)}</div>
        </section>

        <footer className="tg-footer"><a className="tg-wordmark" href="#top"><img src="/tiger-gardens-mark.webp" alt="Tiger Gardens" /></a><p>Trinity County, California · 21+</p><p>© {new Date().getFullYear()} Tiger Gardens</p></footer>
      </main>
    </>
  );
}
