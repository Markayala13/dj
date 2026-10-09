import { Star } from "lucide-react";
import { Container, PillButton } from "./ui";
import { BOOK_URL, PRICING_URL } from "./data";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* Background overlays (media removed) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <Container className="relative flex min-h-[640px] flex-col justify-center py-24 md:min-h-[760px] md:py-32">
        <div className="mb-6 flex items-center gap-2">
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-[#ffc10a] text-[#ffc10a]" />
            ))}
          </span>
          <span className="text-sm font-bold text-white">5.0 from 335 Google reviews</span>
        </div>

        <h1 className="dna-display max-w-4xl text-white text-[clamp(2.75rem,9vw,6.25rem)]">
          Two families.
          <br />
          Two cultures.
          <br />
          <span className="text-[#ffc10a]">One dance floor.</span>
        </h1>

        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#d6d6d9] md:text-lg">
          Bilingual wedding DJs and MCs in Dallas–Fort Worth. Every DJ on our team
          speaks English and Spanish, and MCs your night themselves.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <PillButton href={BOOK_URL} variant="white" withArrow external>
            Check my date
          </PillButton>
          <PillButton href={PRICING_URL} variant="outlineDark" external>
            See pricing
          </PillButton>
        </div>
      </Container>
    </section>
  );
}
