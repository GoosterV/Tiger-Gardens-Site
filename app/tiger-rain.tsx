"use client";

import { useEffect, useRef } from "react";

type TigerBody = {
  element: HTMLImageElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  spin: number;
  size: number;
};

export default function TigerRain({ active, onComplete }: { active: boolean; onComplete: () => void }) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active || !layerRef.current) return;
    const layer = layerRef.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = window.setTimeout(onComplete, 450);
      return () => window.clearTimeout(timer);
    }

    const trigger = document.querySelector<HTMLElement>(".landing-enter")?.getBoundingClientRect();
    const originX = trigger ? trigger.left + trigger.width / 2 : window.innerWidth / 2;
    const originY = trigger ? trigger.top + trigger.height / 2 : window.innerHeight * 0.72;
    const count = window.innerWidth < 700 ? 55 : 90;
    const bodies: TigerBody[] = Array.from({ length: count }, () => {
      const element = document.createElement("img");
      const size = 14 + Math.random() * 14;
      const angle = Math.PI + Math.random() * Math.PI;
      const speed = 7 + Math.random() * 10;
      element.src = "/tiger-head.png";
      element.alt = "";
      element.className = "tiger-rain-head";
      element.style.width = `${size}px`;
      layer.appendChild(element);
      return {
        element,
        x: originX - size / 2 + (Math.random() - 0.5) * 28,
        y: originY - size / 2 + (Math.random() - 0.5) * 14,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 8,
        size,
      };
    });

    let frame = 0;
    let previous = performance.now();
    const started = previous;
    const animate = (now: number) => {
      const step = Math.min(2, (now - previous) / 16.67);
      previous = now;
      const collisionPhase = now - started < 1450;
      const obstacles = collisionPhase
        ? Array.from(document.querySelectorAll<HTMLElement>("[data-tiger-collider]:not(.landing-enter)"))
          .map((element) => element.getBoundingClientRect())
        : [];

      bodies.forEach((body) => {
        body.vy += 0.44 * step;
        if (now - started > 1800) body.vy += 0.72 * step;
        body.x += body.vx * step;
        body.y += body.vy * step;
        body.rotation += body.spin * step;

        if (body.x < 0) {
          body.x = 0;
          body.vx = Math.abs(body.vx) * 0.72;
        } else if (body.x + body.size > window.innerWidth) {
          body.x = window.innerWidth - body.size;
          body.vx = -Math.abs(body.vx) * 0.72;
        }

        const centerX = body.x + body.size / 2;
        const centerY = body.y + body.size / 2;
        const radius = body.size * 0.38;
        obstacles.forEach((rect) => {
          const nearestX = Math.max(rect.left, Math.min(centerX, rect.right));
          const nearestY = Math.max(rect.top, Math.min(centerY, rect.bottom));
          const dx = centerX - nearestX;
          const dy = centerY - nearestY;
          const distanceSquared = dx * dx + dy * dy;
          if (distanceSquared >= radius * radius) return;
          const distance = Math.max(0.01, Math.sqrt(distanceSquared));
          const normalX = distance > 0.02 ? dx / distance : 0;
          const normalY = distance > 0.02 ? dy / distance : -1;
          const overlap = radius - distance;
          body.x += normalX * overlap;
          body.y += normalY * overlap;
          const speed = body.vx * normalX + body.vy * normalY;
          if (speed < 0) {
            body.vx -= 1.68 * speed * normalX;
            body.vy -= 1.68 * speed * normalY;
            body.spin += (Math.random() - 0.5) * 2;
            if (Math.abs(normalY) > 0.7 && Math.abs(body.vx) < 1.2) {
              body.vx += centerX < window.innerWidth / 2 ? -1.35 : 1.35;
            }
          }
        });
        body.element.style.transform =
          `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.rotation}deg)`;
      });

      const allOffScreen = bodies.every((body) => body.y > window.innerHeight + body.size);
      if ((allOffScreen && now - started > 1200) || now - started > 4200) {
        bodies.forEach((body) => body.element.remove());
        onComplete();
        return;
      }
      frame = window.requestAnimationFrame(animate);
    };

    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      bodies.forEach((body) => body.element.remove());
    };
  }, [active, onComplete]);

  return <div className="tiger-rain-layer" ref={layerRef} aria-hidden="true" />;
}
