"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { REVIEWS } from "./data";

export function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("article");
    const gap = 20;
    const amount = card ? (card as HTMLElement).offsetWidth + gap : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="mt-12 rounded-2xl bg-[#0d0d0d] p-5 md:p-8">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {REVIEWS.map((r, idx) => (
          <article
            key={idx}
            className="flex min-w-[300px] max-w-[340px] flex-1 shrink-0 snap-start flex-col rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#BFEC34]">{r.rating}</span>
                <span className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={
                        i < r.rating
                          ? "size-3.5 fill-[#BFEC34] text-[#BFEC34]"
                          : "size-3.5 text-white/25"
                      }
                    />
                  ))}
                </span>
              </div>
              <span className="text-xs text-white/50">{r.date}</span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">{r.body}</p>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                {r.initials}
              </span>
              <span className="text-sm font-semibold text-white">{r.author}</span>
            </div>
          </article>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Reseña anterior"
          className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Siguiente reseña"
          className="flex size-11 items-center justify-center rounded-full bg-[#BFEC34] text-[#111] transition-transform hover:scale-105"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
