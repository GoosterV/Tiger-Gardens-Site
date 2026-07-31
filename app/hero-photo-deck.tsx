"use client";

import { useEffect, useRef, useState } from "react";

const frames = [
  ["hero-photo hero-photo-small fourth", "Real flower photography from Tiger Gardens"],
  ["hero-photo hero-photo-small first", "Real farm photography from Tiger Gardens"],
  ["hero-photo hero-photo-small second", "A view from the Tiger Gardens photo archive"],
  ["hero-photo hero-photo-relocated", "Seasonal photography from the Tiger Gardens field"],
];

function shuffle(items: number[]) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [result[index], result[swap]] = [result[swap], result[index]];
  }
  return result;
}

export default function HeroPhotoDeck({ photos }: { photos: string[] }) {
  const [active, setActive] = useState([0, 6, 12, 18]);
  const remaining = useRef<number[]>([]);

  useEffect(() => {
    const firstDeck = shuffle(photos.map((_, index) => index));
    setActive(firstDeck.slice(0, 4));
    remaining.current = firstDeck.slice(4);
    const timer = window.setInterval(() => {
      setActive((visible) => {
        if (remaining.current.length < 4) {
          const nextDeck = shuffle(photos.map((_, index) => index));
          for (let index = 0; index < 4; index += 1) {
            if (visible.includes(nextDeck[index])) {
              const safe = nextDeck.findIndex(
                (photoIndex, candidate) => candidate >= 4 && !visible.includes(photoIndex),
              );
              if (safe !== -1) [nextDeck[index], nextDeck[safe]] = [nextDeck[safe], nextDeck[index]];
            }
          }
          remaining.current = nextDeck;
        }
        const next = remaining.current.slice(0, 4);
        remaining.current = remaining.current.slice(4);
        return next;
      });
    }, 6500);
    return () => window.clearInterval(timer);
  }, [photos]);

  return (
    <>
      {frames.map(([className, alt], frameIndex) => (
        <figure className={className} data-tiger-collider key={className}>
          <span className="photo-rotator" aria-label={alt}>
            {photos.map((photo, photoIndex) => (
              <img
                aria-hidden={photoIndex !== active[frameIndex]}
                className={photoIndex === active[frameIndex] ? "is-active" : ""}
                key={photo}
                loading={photoIndex === active[frameIndex] ? "eager" : "lazy"}
                src={photo}
                alt={photoIndex === active[frameIndex] ? alt : ""}
              />
            ))}
          </span>
          {frameIndex === 3 && <figcaption>Field notes / 2026</figcaption>}
        </figure>
      ))}
    </>
  );
}
