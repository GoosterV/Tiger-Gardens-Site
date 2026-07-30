"use client";

import { useState } from "react";

type BackgroundVideoPlaylistProps = {
  sources: string[];
  poster: string;
};

export default function BackgroundVideoPlaylist({
  sources,
  poster,
}: BackgroundVideoPlaylistProps) {
  const [active, setActive] = useState(0);
  const next = (active + 1) % sources.length;

  return (
    <>
      <video
        autoPlay
        className="mountains-main-video"
        key={sources[active]}
        muted
        onEnded={() => setActive(next)}
        playsInline
        poster={poster}
        preload="auto"
        src={sources[active]}
      />
      <video
        aria-hidden="true"
        className="mountains-video-preload"
        muted
        playsInline
        preload="auto"
        src={sources[next]}
        tabIndex={-1}
      />
    </>
  );
}
