"use client";

import { useEffect, useRef, useState } from "react";

type HeroPhotoDeckProps = {
  photos: string[];
};

const frameDetails = [
  { className: "hero-photo hero-photo-small fourth", alt: "Real flower photography from Tiger Gardens" },
  { className: "hero-photo hero-photo-small first", alt: "Real farm photography from Tiger Gardens" },
  { className: "hero-photo hero-photo-small second", alt: "A view from the Tiger Gardens photo archive" },
  { className: "hero-photo hero-photo-relocated", alt: "Seasonal photography from the Tiger Gardens field" },
];

function shuffle(items: number[]) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

export default function HeroPhotoDeck({ photos }: HeroPhotoDeckProps) {
  const [activePhotos, setActivePhotos] = useState([0, 6, 12, 18]);
  const remaining = useRef<number[]>([]);

  useEffect(() => {
    if (photos.length < frameDetails.length) return;

    const startDeck = shuffle(photos.map((_, index) => index));
    setActivePhotos(startDeck.slice(0, frameDetails.length));
    remaining.current = startDeck.slice(frameDetails.length);

    const timer = window.setInterval(() => {
      setActivePhotos((currentlyVisible) => {
        if (remaining.current.length < frameDetails.length) {
          let nextDeck = shuffle(photos.map((_, index) => index));

          // A completed deck may now be reused, but do not repeat a photo
          // across the exact moment that one complete cycle rolls into the next.
          for (let index = 0; index < frameDetails.length; index += 1) {
            if (currentlyVisible.includes(nextDeck[index])) {
              const safeIndex = nextDeck.findIndex(
                (photoIndex, candidateIndex) =>
                  candidateIndex >= frameDetails.length && !currentlyVisible.includes(photoIndex),
              );
              if (safeIndex !== -1) {
                [nextDeck[index], nextDeck[safeIndex]] = [nextDeck[safeIndex], nextDeck[index]];
              }
            }
          }
          remaining.current = nextDeck;
        }

        const nextPhotos = remaining.current.slice(0, frameDetails.length);
        remaining.current = remaining.current.slice(frameDetails.length);
        return nextPhotos;
      });
    }, 6500);

    return () => window.clearInterval(timer);
  }, [photos]);

  return (
    <>
      {frameDetails.map((frame, frameIndex) => (
        <figure className={frame.className} key={frame.className}>
          <span className="photo-rotator" aria-label={frame.alt}>
            {photos.map((photo, photoIndex) => (
              <img
                aria-hidden={photoIndex !== activePhotos[frameIndex]}
                className={photoIndex === activePhotos[frameIndex] ? "is-active" : ""}
                decoding="async"
                key={photo}
                loading={photoIndex === activePhotos[frameIndex] ? "eager" : "lazy"}
                src={photo}
                alt={photoIndex === activePhotos[frameIndex] ? frame.alt : ""}
              />
            ))}
          </span>
          {frameIndex === 3 && <figcaption>Field notes / 2026</figcaption>}
        </figure>
      ))}
    </>
  );
}
