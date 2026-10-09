"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 66;
const SCENE_VH = 320; // scroll length of the scene
const framePath = (i: number) =>
  `/sites/dna/seq/${String(i + 1).padStart(4, "0")}.jpg`;

export function ScrollSequence() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cap1Ref = useRef<HTMLDivElement>(null);
  const cap2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = sceneRef.current;
    if (!canvas || !scene) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const images: HTMLImageElement[] = [];
    let current = -1;
    let started = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const drawCover = (img?: HTMLImageElement) => {
      if (!img || !img.complete || !img.naturalWidth) return;
      const cw = canvas.width;
      const ch = canvas.height;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let dw: number, dh: number, dx: number, dy: number;
      if (ir > cr) {
        dh = ch;
        dw = ch * ir;
        dx = (cw - dw) / 2;
        dy = 0;
      } else {
        dw = cw;
        dh = cw / ir;
        dx = 0;
        dy = (ch - dh) / 2;
      }
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const draw = (idx: number, force = false) => {
      idx = Math.max(0, Math.min(FRAME_COUNT - 1, idx));
      if (idx === current && !force) return;
      current = idx;
      drawCover(images[idx]);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      draw(current < 0 ? 0 : current, true);
    };

    let ticking = false;
    const onScroll = () => {
      if (reduce || ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const total = scene.offsetHeight - window.innerHeight;
        const progress =
          total > 0 ? -scene.getBoundingClientRect().top / total : 0;
        const p = Math.max(0, Math.min(1, progress));
        draw(Math.round(p * (FRAME_COUNT - 1)));
        if (cap1Ref.current)
          cap1Ref.current.style.opacity = p > 0.06 && p < 0.42 ? "1" : "0";
        if (cap2Ref.current)
          cap2Ref.current.style.opacity = p > 0.52 && p < 0.96 ? "1" : "0";
        ticking = false;
      });
    };

    const start = () => {
      if (started) return;
      started = true;
      resize();
      if (reduce) {
        draw(0, true);
        if (cap2Ref.current) cap2Ref.current.style.opacity = "1";
      } else {
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
      }
      window.addEventListener("resize", resize);
    };

    // Preload frames once the scene is near the viewport (keeps initial load light)
    let loaded = 0;
    const preload = () => {
      for (let i = 0; i < FRAME_COUNT; i++) {
        const img = new Image();
        img.onload = img.onerror = () => {
          loaded++;
          if (current < 0 && img.complete) {
            resize(); // draw first available frame asap
          }
          if (loaded === FRAME_COUNT) start();
        };
        img.src = framePath(i);
        images.push(img);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          preload();
          // Safety: start even if a few frames fail to load
          setTimeout(start, 4000);
        }
      },
      { rootMargin: "150% 0px" },
    );
    io.observe(scene);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sceneRef}
      className="relative bg-black"
      style={{ height: `${SCENE_VH}vh` }}
      aria-label="DJ Chuy en acción"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="block h-full w-full" />
        {/* dark vignette for legible captions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

        <div className="pointer-events-none absolute left-0 right-0 top-[16%] px-6 text-center">
          <p className="dna-eyebrow text-white/70">La fiesta</p>
        </div>

        <div
          ref={cap1Ref}
          className="pointer-events-none absolute left-0 right-0 top-[40%] px-6 text-center opacity-0 transition-opacity duration-500"
        >
          <h2 className="dna-display text-white text-[clamp(2rem,6vw,4rem)]">
            Luces. Humo. <span className="text-[#BFEC34]">Chispas.</span>
          </h2>
        </div>

        <div
          ref={cap2Ref}
          className="pointer-events-none absolute left-0 right-0 bottom-[16%] px-6 text-center opacity-0 transition-opacity duration-500"
        >
          <h2 className="dna-display text-white text-[clamp(2.2rem,7vw,5rem)]">
            Nadie <span className="text-[#BFEC34]">se queda sentado.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
