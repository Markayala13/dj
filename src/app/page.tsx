import Image from "next/image";
import { Check, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Header } from "@/components/sites/dna/Header";
import { Hero } from "@/components/sites/dna/Hero";
import { Marquee } from "@/components/sites/dna/Marquee";
import { Faq } from "@/components/sites/dna/Faq";
import { Footer } from "@/components/sites/dna/Footer";
import { Container, Eyebrow, PillButton } from "@/components/sites/dna/ui";
import {
  STATS,
  CROWD_LIST,
  PACKAGE_INCLUDES,
  NO_SURPRISES,
  START_HERE,
  REVIEWS,
  BOOK_URL,
  PRICING_URL,
  SOURCE,
} from "@/components/sites/dna/data";

export default function Home() {
  return (
    <main className="dna flex flex-col bg-white">
      <Header />
      <Hero />

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-black">
        <Container className="flex flex-wrap gap-x-10 gap-y-4 py-5">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="text-sm font-extrabold text-[#ffc10a]">{s.value}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
                {s.label}
              </span>
            </div>
          ))}
        </Container>
      </section>

      {/* The hard part */}
      <section className="bg-white py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>The hard part</Eyebrow>
            <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
              Anybody can play music.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#555]">
              The reception is the only part of the day you cannot fix while it is
              happening. If the floor empties at 9:30, nobody tells you. You find out in
              the photos.
            </p>
            <p className="dna-display mt-8 text-[#111] text-[clamp(1.4rem,2.6vw,2rem)]">
              We don&apos;t just play genres.
              <br />
              <span className="dna-mark">We read people.</span>
            </p>
            <div className="mt-9">
              <PillButton href={BOOK_URL} variant="dark" withArrow external>
                Talk to us about your wedding
              </PillButton>
            </div>
          </div>

          <ul className="lg:pt-10">
            {CROWD_LIST.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-6 border-b border-black/10 py-6 first:border-t"
              >
                <span className="text-sm font-bold tabular-nums text-[#bdbdbd]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-bold text-[#111]">{item}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Marquee />

      {/* Midnight */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/55 to-black/40" />
        <Container className="relative flex min-h-[560px] flex-col justify-end py-20 md:min-h-[680px]">
          <Eyebrow className="text-white/70">Midnight</Eyebrow>
          <h2 className="dna-display mt-4 text-white text-[clamp(2.5rem,7vw,5rem)]">
            Nobody
            <br />
            <span className="text-[#ffc10a]">has sat down.</span>
          </h2>
        </Container>
      </section>

      {/* What is included */}
      <section className="bg-black py-24 text-white md:py-32">
        <Container>
          <Eyebrow>What is included</Eyebrow>
          <h2 className="dna-display mt-5 max-w-3xl text-white text-[clamp(2.25rem,5.5vw,4.25rem)]">
            More than just a wedding DJ.
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <IncludeColumn label="Every package" items={PACKAGE_INCLUDES} />
            <IncludeColumn label="And no surprises" items={NO_SURPRISES} />
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <PillButton href={`${SOURCE}/the-djs`} variant="white" external>
              Meet the DJs
            </PillButton>
            <PillButton href={BOOK_URL} variant="outlineDark" external>
              Check my date
            </PillButton>
          </div>
        </Container>
      </section>

      {/* The roster */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Eyebrow>The roster</Eyebrow>
          <h2 className="dna-display mt-5 max-w-4xl text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Eight bilingual DJs. One of them <span className="dna-mark">is yours.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#555]">
            Read their stories, hear a mix, and pick the one who fits your night.
            Whoever you choose MCs the whole reception themselves.
          </p>

          <div className="mt-12 overflow-hidden rounded-xl">
            <Image
              src="/sites/dna/team.jpg"
              alt="The eight DJs of DNA Premium Event Services"
              width={2438}
              height={1274}
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="h-auto w-full object-cover"
            />
          </div>

          <p className="mt-6 text-[#555]">
            One of these eight will be your DJ, and they will MC your night themselves.
          </p>
          <div className="mt-8">
            <PillButton href={`${SOURCE}/the-djs`} variant="dark" withArrow external>
              Meet the DJs
            </PillButton>
          </div>
        </Container>
      </section>

      {/* Start here */}
      <section className="bg-white pb-24 md:pb-32">
        <Container>
          <Eyebrow>Where to next</Eyebrow>
          <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Start here.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {START_HERE.map((card) => (
              <a
                key={card.title}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-xl md:aspect-[3/4]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={900}
                    height={1200}
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="dna-eyebrow mt-5">{card.kicker}</p>
                <h3 className="dna-display mt-2 text-[#111] text-[clamp(1.4rem,2.4vw,1.9rem)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#555]">{card.copy}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-[#111]">
                  {card.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Reviews */}
      <section className="bg-white pb-24 md:pb-32">
        <Container>
          <Eyebrow>335 reviews, five stars</Eyebrow>
          <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Don&apos;t take our word for it.
          </h2>

          <div className="mt-12 rounded-2xl bg-[#0d0d0d] p-5 md:p-8">
            <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {REVIEWS.map((r) => (
                <article
                  key={r.author}
                  className="flex min-w-[300px] max-w-[340px] flex-1 flex-col rounded-xl bg-white/[0.03] p-6 ring-1 ring-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[#ffc10a]">{r.rating}</span>
                      <span className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={
                              i < r.rating
                                ? "size-3.5 fill-[#ffc10a] text-[#ffc10a]"
                                : "size-3.5 text-white/25"
                            }
                          />
                        ))}
                      </span>
                    </div>
                    <span className="text-xs text-white/50">{r.date}</span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/80">
                    {r.body}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                      {r.initials}
                    </span>
                    <span className="text-sm font-semibold text-white">{r.author}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (visual, matches source widget) */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
              <ChevronLeft className="size-4" />
              <span className="px-1">1</span>
              <span className="px-1">…</span>
              <span className="px-1">13</span>
              <span className="px-1">14</span>
              <span className="rounded bg-[#ffc10a] px-2 py-0.5 font-bold text-[#111]">15</span>
              <span className="px-1">16</span>
              <span className="px-1">17</span>
              <span className="px-1">…</span>
              <span className="px-1">117</span>
              <ChevronRight className="size-4" />
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section className="bg-black py-24 text-white md:py-32">
        <Container className="max-w-[760px]">
          <Eyebrow>An idea of how much we charge</Eyebrow>
          <h2 className="dna-display mt-5 text-white text-[clamp(2.5rem,6vw,4.5rem)]">
            Weddings run <span className="text-[#ffc10a]">$2,799 to $9,999.</span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-[#d6d6d9]">
            Most couples land between $2,799 and $4,499, which covers seven of our eight
            DJs. Booking Nate himself runs $4,999 to $9,999, the top of that being full
            LED wall production.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#d6d6d9]">
            Where you land depends on your date, your hours and what you add. What does
            not change is the DJ, the MC, the gear or the planning. There is no stripped
            down version.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PillButton href={PRICING_URL} variant="white" withArrow external>
              See every DJ and their exact pricing
            </PillButton>
            <PillButton href={PRICING_URL} variant="outlineDark" external>
              How the tiers work
            </PillButton>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Eyebrow>Before you ask</Eyebrow>
          <h2 className="dna-display mt-5 max-w-3xl text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Questions couples actually ask.
          </h2>
          <Faq />
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border-b-2 border-[#ffc10a] pb-1 text-sm font-bold text-[#111]"
          >
            Still have a question? Talk to us
          </a>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative isolate overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />
        <Container className="relative flex min-h-[520px] flex-col justify-center py-24 md:min-h-[600px]">
          <Eyebrow className="text-white/70">First come, first served</Eyebrow>
          <h2 className="dna-display mt-4 text-white text-[clamp(2.5rem,7vw,5rem)]">
            Let&apos;s find out
            <br />
            if your date
            <br />
            <span className="text-[#ffc10a]">is still open.</span>
          </h2>
          <div className="mt-9 flex flex-wrap gap-4">
            <PillButton href={BOOK_URL} variant="white" withArrow external>
              Check my date
            </PillButton>
            <PillButton href={PRICING_URL} variant="outlineDark" external>
              See pricing first
            </PillButton>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

function IncludeColumn({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <Eyebrow>{label}</Eyebrow>
      <ul className="mt-6">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-b border-white/10 py-4 first:border-t"
          >
            <Check className="mt-0.5 size-5 shrink-0 text-[#ffc10a]" />
            <span className="text-[15px] font-medium text-white/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
