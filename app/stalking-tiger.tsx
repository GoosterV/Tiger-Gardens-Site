"use client";

import { useEffect, useRef, useState } from "react";

const positions = ["left", "right", "bottom-left", "bottom-right"] as const;
type StalkerPosition = (typeof positions)[number];

export default function StalkingTiger() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<StalkerPosition>("right");
  const lastMilestone = useRef(0);
  const hideTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const reveal = () => {
      const milestone = Math.floor(window.scrollY / 520);
      if (milestone < 1 || milestone === lastMilestone.current) return;

      lastMilestone.current = milestone;
      setPosition(positions[(milestone - 1) % positions.length]);
      setVisible(true);
      window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setVisible(false), 2600);
    };

    window.addEventListener("scroll", reveal, { passive: true });
    return () => {
      window.removeEventListener("scroll", reveal);
      window.clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div
      className={`stalking-tiger is-${position} ${visible ? "is-visible" : ""}`}
      aria-hidden="true"
    >
      <img src="/tiger-stalker.png" alt="" />
    </div>
  );
}
