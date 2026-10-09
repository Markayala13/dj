"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import {
  NAV_LINKS,
  CTA_HREF,
  CTA_PRIMARY,
  BRAND,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "./data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6 md:px-10">
        {/* Logo badge (green logo on dark chip so it pops on white) */}
        <Link
          href="/"
          className="flex shrink-0 items-center rounded-lg bg-black px-3 py-2"
          aria-label={BRAND}
        >
          <Image
            src="/sites/dna/logo-chuy.png"
            alt={BRAND}
            width={1041}
            height={456}
            priority
            className="h-6 w-auto md:h-7"
          />
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
          <a
            href={PHONE_HREF}
            className="flex items-center gap-1.5 text-[15px] font-extrabold text-[#111] hover:text-[#111]/60"
          >
            <Phone className="size-4" />
            {PHONE_DISPLAY}
          </a>
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-[#111] px-6 py-3 text-[14px] font-bold text-white transition-colors hover:bg-black"
          >
            {CTA_PRIMARY}
          </a>
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
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 py-3 text-[15px] font-extrabold text-[#111]"
            >
              <Phone className="size-4" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={CTA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#111] px-6 py-3.5 text-[15px] font-bold text-white"
            >
              {CTA_PRIMARY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
