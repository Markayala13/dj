"use client";

import { useEffect, useRef } from "react";
import { MARQUEE_ITEMS } from "./data";

export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Drive the scroll with requestAnimationFrame instead of a CSS keyframe.
  // rAF keeps running on the foreground tab even when the OS (e.g. iOS Low
  // Power Mode) pauses CSS animations, so the marquee never freezes.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const SPEED = 70; // px per second
    let x = 0;
    let last = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      x -= SPEED * dt;
      const half = el.scrollWidth / 2; // width of one full set of items
      if (half > 0 && -x >= half) x += half;
      el.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  // One set of items, rendered twice inside the track for a seamless loop.
  const set = MARQUEE_ITEMS.map((item, i) => (
    <span key={i} className="flex items-center">
      <span className="dna-display px-7 text-[#111] text-[clamp(1.1rem,2vw,1.6rem)]">
        {item}
      </span>
      <span className="text-[#111]/70">★</span>
    </span>
  ));

  return (
    <div className="overflow-hidden bg-[#BFEC34] py-4">
      <div
        ref={trackRef}
        className="flex w-max flex-nowrap items-center will-change-transform"
        aria-hidden="true"
      >
        {set}
        {set}
      </div>
    </div>
  );
}
