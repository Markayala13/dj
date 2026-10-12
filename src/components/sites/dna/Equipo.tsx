"use client";

import { useEffect, useRef, useState } from "react";
import { MicVocal, Lightbulb, Monitor, Sparkles, type LucideIcon } from "lucide-react";
import { Container, Eyebrow, PillButton } from "./ui";
import { EQUIPMENT, CTA_HREF, CTA_PRIMARY, type EquipmentCategory } from "./data";

const ICONS: Record<EquipmentCategory["icon"], LucideIcon> = {
  audio: MicVocal,
  luces: Lightbulb,
  video: Monitor,
  efectos: Sparkles,
};

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

export function Equipo() {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const visible = shown ? "is-visible" : "";

  return (
    <section id="equipo" className="scroll-mt-20 bg-white py-24 md:py-32">
      <Container>
        <div ref={ref}>
          <div className={`dna-reveal max-w-2xl ${visible}`}>
            <Eyebrow>Con qué trabajamos</Eyebrow>
            <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
              Equipo <span className="dna-mark">profesional.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#555]">
              Marcas de confianza y equipo de verdad para que todo suene y se vea
              impecable: micrófonos Shure, bocinas RCF, luces móviles Beam 14R mini y más.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EQUIPMENT.map((cat, i) => {
              const Icon = ICONS[cat.icon];
              return (
                <div
                  key={cat.title}
                  className={`dna-reveal group relative flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white p-7 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-black/25 hover:shadow-[0_22px_48px_-24px_rgba(0,0,0,0.38)] ${visible}`}
                  style={{ transitionDelay: shown ? `${i * 90}ms` : "0ms" }}
                >
                  {/* Top accent bar — grows on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#BFEC34] transition-transform duration-300 ease-out group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <span className="inline-flex size-12 items-center justify-center rounded-xl bg-[#111] text-[#BFEC34] transition-transform duration-300 ease-out group-hover:scale-105">
                      <Icon className="size-5" />
                    </span>
                    <span className="dna-display select-none text-[2.75rem] leading-none text-black/[0.07] tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-extrabold tracking-tight text-[#111]">
                    {cat.title}
                  </h3>

                  <ul className="mt-5 flex flex-1 flex-col">
                    {cat.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex gap-3 border-t border-black/10 py-3.5 first:border-t-0 first:pt-0"
                      >
                        <span className="mt-[7px] size-1.5 shrink-0 rounded-[2px] bg-[#BFEC34]" />
                        <span>
                          <span className="block text-[15px] font-bold leading-snug text-[#111]">
                            {item.name}
                          </span>
                          <span className="mt-1 block text-[13px] leading-relaxed text-[#777]">
                            {item.note}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className={`dna-reveal mt-12 ${visible}`} style={{ transitionDelay: shown ? "420ms" : "0ms" }}>
            <PillButton href={CTA_HREF} variant="dark" withArrow external>
              {CTA_PRIMARY}
            </PillButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
