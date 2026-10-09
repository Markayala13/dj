"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, QUOTE_HREF, CTA_PRIMARY, BRAND } from "./data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        {/* Wordmark */}
        <Link href="/" className="flex shrink-0 items-center" aria-label={BRAND}>
          <span className="dna-display text-xl text-[#111] md:text-2xl">{BRAND}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[14.5px] font-extrabold text-[#111] transition-colors hover:text-[#111]/60"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-6 lg:flex">
          <span className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#8a8a8f] xl:inline">
            West Texas · New México
          </span>
          <Link
            href={QUOTE_HREF}
            className="inline-flex items-center rounded-full bg-[#111] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-black"
          >
            {CTA_PRIMARY}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-[#111] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1280px] flex-col px-6 py-4">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[15px] font-extrabold text-[#111]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={QUOTE_HREF}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#111] px-6 py-3.5 text-[15px] font-bold text-white"
            >
              {CTA_PRIMARY}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
