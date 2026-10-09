"use client";

import { useEffect, useRef } from "react";

const REELS: { src: string; poster: string }[] = [
  { src: "/sites/dna/reels/reel-1.mp4", poster: "/sites/dna/reels/reel-1.jpg" },
  { src: "/sites/dna/reels/reel-2.mp4", poster: "/sites/dna/reels/reel-2.jpg" },
  { src: "/sites/dna/reels/reel-3.mp4", poster: "/sites/dna/reels/reel-3.jpg" },
  { src: "/sites/dna/reels/reel-4.mp4", poster: "/sites/dna/reels/reel-4.jpg" },
  { src: "/sites/dna/reels/reel-5.mp4", poster: "/sites/dna/reels/reel-5.jpg" },
  { src: "/sites/dna/reels/reel-6.mp4", poster: "/sites/dna/reels/reel-6.jpg" },
];

export function VideoReels() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Play videos only while they are on screen (keeps it light).
  useEffect(() => {
    const vids = Array.from(
      rootRef.current?.querySelectorAll("video") ?? [],
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

  return (
    <div
      ref={rootRef}
      className="mt-8 flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
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
          {/* subtle gradient for depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </div>
      ))}
    </div>
  );
}
