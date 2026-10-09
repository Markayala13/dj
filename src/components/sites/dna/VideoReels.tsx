"use client";

import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const REELS: { src: string; poster: string }[] = [
  { src: "/sites/dna/reels/reel-1.mp4", poster: "/sites/dna/reels/reel-1.jpg" },
  { src: "/sites/dna/reels/reel-2.mp4", poster: "/sites/dna/reels/reel-2.jpg" },
  { src: "/sites/dna/reels/reel-3.mp4", poster: "/sites/dna/reels/reel-3.jpg" },
  { src: "/sites/dna/reels/reel-4.mp4", poster: "/sites/dna/reels/reel-4.jpg" },
  { src: "/sites/dna/reels/reel-5.mp4", poster: "/sites/dna/reels/reel-5.jpg" },
  { src: "/sites/dna/reels/reel-6.mp4", poster: "/sites/dna/reels/reel-6.jpg" },
];

export function VideoReels() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Play videos only while they are on screen (keeps it light).
  useEffect(() => {
    const vids = Array.from(
      trackRef.current?.querySelectorAll("video") ?? [],
    ) as HTMLVideoElement[];

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target as HTMLVideoElement;
          if (e.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.4 },
    );

    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, []);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(":scope > div");
    const gap = 16;
    const amount = card ? (card as HTMLElement).offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative mt-8">
      {/* Prev / next controls */}
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Video anterior"
        className="absolute -left-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white text-[#111] shadow-lg transition-colors hover:bg-neutral-100 sm:flex"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Siguiente video"
        className="absolute -right-3 top-1/2 z-10 hidden size-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#BFEC34] text-[#111] shadow-lg transition-transform hover:scale-105 sm:flex"
      >
        <ChevronRight className="size-6" />
      </button>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REELS.map((reel, i) => (
          <div
            key={i}
            className="group relative aspect-[9/16] h-[380px] shrink-0 snap-start overflow-hidden rounded-2xl bg-black ring-1 ring-black/10 sm:h-[440px] lg:h-[480px]"
          >
            <video
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              src={reel.src}
              poster={reel.poster}
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Mobile controls (below the row) */}
      <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Video anterior"
          className="flex size-11 items-center justify-center rounded-full border border-black/15 text-[#111]"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Siguiente video"
          className="flex size-11 items-center justify-center rounded-full bg-[#BFEC34] text-[#111]"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
