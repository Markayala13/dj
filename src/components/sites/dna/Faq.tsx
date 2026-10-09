"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "./data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="mt-14 border-t border-black/10">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-black/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="text-lg font-bold text-[#111] md:text-xl">{item.q}</span>
              <span className="shrink-0 text-[#111]">
                {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-7 text-[17px] leading-relaxed text-[#555]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
