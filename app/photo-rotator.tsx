"use client";

import { useEffect, useState } from "react";

type PhotoRotatorProps = {
  photos: string[];
  alt: string;
  interval?: number;
  offset?: number;
};

export default function PhotoRotator({
  photos,
  alt,
  interval = 5600,
  offset = 0,
}: PhotoRotatorProps) {
  const [active, setActive] = useState(offset % photos.length);

  useEffect(() => {
    if (photos.length < 2) return;
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % photos.length),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [interval, photos.length]);

  return (
    <span className="photo-rotator" aria-label={alt}>
      {photos.map((photo, index) => (
        <img
          aria-hidden={index !== active}
          className={index === active ? "is-active" : ""}
          decoding="async"
          key={photo}
          loading={index === offset ? "eager" : "lazy"}
          src={photo}
          alt={index === active ? alt : ""}
        />
      ))}
    </span>
  );
}
