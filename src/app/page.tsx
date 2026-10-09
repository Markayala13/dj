import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/sites/dna/Header";
import { Hero } from "@/components/sites/dna/Hero";
import { Marquee } from "@/components/sites/dna/Marquee";
import { Faq } from "@/components/sites/dna/Faq";
import { VideoReels } from "@/components/sites/dna/VideoReels";
import { ScrollSequence } from "@/components/sites/dna/ScrollSequence";
import { ReviewsCarousel } from "@/components/sites/dna/ReviewsCarousel";
import { Footer } from "@/components/sites/dna/Footer";
import { Container, Eyebrow, PillButton } from "@/components/sites/dna/ui";
import {
  STATS,
  EVENT_TYPES,
  OFRECEMOS_A,
  OFRECEMOS_B,
  EXPLORA_CARDS,
  CTA_HREF,
  SERVICES_HREF,
  EVENTS_HREF,
  CTA_PRIMARY,
  PHONE_DISPLAY,
  PHONE_HREF,
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
              <span className="text-sm font-extrabold text-[#BFEC34]">{s.value}</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
                {s.label}
              </span>
            </div>
          ))}
        </Container>
      </section>

      {/* Eventos */}
      <section id="eventos" className="scroll-mt-20 bg-white py-24 md:py-32">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Para cada ocasión</Eyebrow>
            <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
              Eventos que se recuerdan.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#555]">
              Desde la entrada hasta la última canción, producimos cada momento de tu
              fiesta. Pantallas, luces, efectos y un maestro de ceremonia que mantiene
              todo en su lugar.
            </p>
            <p className="dna-display mt-8 text-[#111] text-[clamp(1.4rem,2.6vw,2rem)]">
              Tú disfrutas.
              <br />
              <span className="dna-mark">Nosotros nos encargamos.</span>
            </p>
            <div className="mt-9">
              <PillButton href={CTA_HREF} variant="dark" withArrow external>
                {CTA_PRIMARY}
              </PillButton>
            </div>
          </div>

          <ul className="lg:pt-10">
            {EVENT_TYPES.map((item, i) => (
              <li
                key={item.name}
                className="flex items-start gap-6 border-b border-black/10 py-6 first:border-t"
              >
                <span className="text-sm font-bold tabular-nums text-[#bdbdbd]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-lg font-bold text-[#111]">{item.name}</span>
                  <span className="mt-1 block text-[15px] text-[#777]">{item.note}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Conoce a DJ Chuy */}
      <section className="bg-white pb-24 md:pb-32">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 overflow-hidden rounded-2xl lg:order-1">
            <Image
              src="/sites/dna/djchuy-portrait.jpg"
              alt="DJ Chuy"
              width={896}
              height={1200}
              sizes="(max-width: 1024px) 100vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Tu DJ</Eyebrow>
            <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
              Conoce a <span className="dna-mark">DJ Chuy.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#555]">
              Años detrás de la cabina en quinceañeras, bodas y fiestas por todo West
              Texas y New México. DJ y maestro de ceremonia en la misma persona: lee la
              pista, mezcla los géneros y mantiene tu evento en tiempo.
            </p>
            <p className="dna-display mt-8 text-[#111] text-[clamp(1.4rem,2.6vw,2rem)]">
              Un solo equipo.
              <br />
              <span className="dna-mark">Producción completa.</span>
            </p>
            <div className="mt-9">
              <PillButton href={CTA_HREF} variant="dark" withArrow external>
                {CTA_PRIMARY}
              </PillButton>
            </div>
          </div>
        </Container>
      </section>

      <Marquee />

      {/* La fiesta — secuencia ligada al scroll */}
      <ScrollSequence />

      {/* Servicios / Ofrecemos */}
      <section id="servicios" className="scroll-mt-20 bg-black py-24 text-white md:py-32">
        <Container>
          <Eyebrow>Lo que incluimos</Eyebrow>
          <h2 className="dna-display mt-5 max-w-3xl text-white text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Todo para tu evento.
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
            <IncludeColumn label="Producción" items={OFRECEMOS_A} />
            <IncludeColumn label="Efectos y más" items={OFRECEMOS_B} />
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <PillButton href={CTA_HREF} variant="white" external>
              {CTA_PRIMARY}
            </PillButton>
            <PillButton href={EVENTS_HREF} variant="outlineDark">
              Ver eventos
            </PillButton>
          </div>
        </Container>
      </section>

      {/* Explora */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Eyebrow>Explora</Eyebrow>
          <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Arma tu fiesta.
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {EXPLORA_CARDS.map((card) => (
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

          {/* Reels en acción */}
          <div className="mt-16">
            <p className="dna-eyebrow">Míralo en acción</p>
            <h3 className="dna-display mt-3 text-[#111] text-[clamp(1.6rem,3.2vw,2.5rem)]">
              Así se ven nuestros <span className="dna-mark">eventos.</span>
            </h3>
            <VideoReels />
          </div>
        </Container>
      </section>

      {/* Reseñas (placeholder) */}
      <section id="resenas" className="scroll-mt-20 bg-white pb-24 md:pb-32">
        <Container>
          <Eyebrow>Lo que dicen · ejemplos</Eyebrow>
          <h2 className="dna-display mt-5 text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Nuestros clientes lo cuentan mejor.
          </h2>

          <ReviewsCarousel />
        </Container>
      </section>

      {/* Inversión (placeholder) */}
      <section className="bg-black py-24 text-white md:py-32">
        <Container className="max-w-[760px]">
          <Eyebrow>Una idea de inversión</Eyebrow>
          <h2 className="dna-display mt-5 text-white text-[clamp(2.5rem,6vw,4.5rem)]">
            Paquetes <span className="text-[#BFEC34]">a tu medida.</span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-[#d6d6d9]">
            Cada evento es diferente. Armamos un paquete según tu fecha, tus horas y los
            efectos que elijas — pantallas LED, DJ booth, chispas frías, baile en las
            nubes, luces móviles y maestro de ceremonia.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-[#d6d6d9]">
            Escríbenos con los detalles y te pasamos una cotización el mismo día, sin
            costos escondidos.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PillButton href={CTA_HREF} variant="white" withArrow external>
              {CTA_PRIMARY}
            </PillButton>
            <PillButton href={SERVICES_HREF} variant="outlineDark">
              Ver servicios
            </PillButton>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <Eyebrow>Antes de preguntar</Eyebrow>
          <h2 className="dna-display mt-5 max-w-3xl text-[#111] text-[clamp(2.25rem,5.5vw,4.25rem)]">
            Preguntas frecuentes.
          </h2>
          <Faq />
          <a
            href={CTA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block border-b-2 border-[#BFEC34] pb-1 text-sm font-bold text-[#111]"
          >
            ¿Otra pregunta? Escríbenos
          </a>
        </Container>
      </section>

      {/* Contacto / CTA final */}
      <section id="contacto" className="relative isolate scroll-mt-20 overflow-hidden bg-black">
        <Image
          src="/sites/dna/robot-led.jpg"
          alt="Robot LED en un evento"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <Container className="relative flex min-h-[500px] flex-col justify-center py-24 md:min-h-[600px]">
          <Eyebrow className="text-white/70">Aparta tu fecha</Eyebrow>
          <h2 className="dna-display mt-4 text-white text-[clamp(2.5rem,7vw,5rem)]">
            Hagamos de tu
            <br />
            evento algo
            <br />
            <span className="text-[#BFEC34]">inolvidable.</span>
          </h2>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <PillButton href={CTA_HREF} variant="white" withArrow external>
              {CTA_PRIMARY}
            </PillButton>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Llama al {PHONE_DISPLAY}
            </a>
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
            <Check className="mt-0.5 size-5 shrink-0 text-[#BFEC34]" />
            <span className="text-[15px] font-medium text-white/90">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
