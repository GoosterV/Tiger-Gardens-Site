"use client";

import { useState } from "react";

const sources = ["/in-the-field-01.mp4", "/in-the-field-02.mp4"];

export default function StoryVideoPlaylist() {
  const [active, setActive] = useState(0);
  const next = (active + 1) % sources.length;

  return (
    <>
      <video
        autoPlay
        className="story-bg-video"
        key={sources[active]}
        muted
        onEnded={() => setActive(next)}
        playsInline
        poster="/garden-09.webp"
        preload="auto"
        src={sources[active]}
      />
      <video
        aria-hidden="true"
        className="story-video-preload"
        muted
        playsInline
        preload="auto"
        src={sources[next]}
        tabIndex={-1}
      />
    </>
  );
}
