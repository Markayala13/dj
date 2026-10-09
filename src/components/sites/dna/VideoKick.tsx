"use client";

import { useEffect } from "react";

/**
 * Mobile browsers (and iOS Low Power / data-saver modes) often block video
 * autoplay. A single user gesture, however, is always allowed to start muted
 * inline playback. This mounts once and, on the first interaction, makes every
 * video muted + inline and tries to play the ones currently on screen.
 * IntersectionObserver in VideoReels then keeps managing play/pause.
 */
export function VideoKick() {
  useEffect(() => {
    const inView = (v: HTMLVideoElement) => {
      const r = v.getBoundingClientRect();
      return r.bottom > 0 && r.top < window.innerHeight;
    };

    const kick = () => {
      document.querySelectorAll("video").forEach((node) => {
        const v = node as HTMLVideoElement;
        v.muted = true;
        v.setAttribute("muted", "");
        v.playsInline = true;
        if (inView(v)) {
          const p = v.play();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      });
    };

    // First attempt as soon as possible.
    kick();

    const events = ["touchstart", "pointerdown", "click", "scroll", "keydown"];
    const onFirst = () => {
      kick();
      events.forEach((e) => window.removeEventListener(e, onFirst));
    };
    events.forEach((e) =>
      window.addEventListener(e, onFirst, { passive: true }),
    );

    return () => events.forEach((e) => window.removeEventListener(e, onFirst));
  }, []);

  return null;
}
