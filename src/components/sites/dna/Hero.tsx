import { Star } from "lucide-react";
import { Container, PillButton } from "./ui";
import { QUOTE_HREF, SERVICES_HREF, CTA_PRIMARY } from "./data";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 -z-20 size-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/sites/dna/hero-poster.jpg"
      >
        <source src="/sites/dna/hero.mp4" type="video/mp4" />
      </video>
      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-black/25" />

      <Container className="relative flex min-h-[640px] flex-col justify-center py-24 md:min-h-[760px] md:py-32">
        <div className="mb-6 flex items-center gap-2">
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-[#ffc10a] text-[#ffc10a]" />
            ))}
          </span>
          <span className="text-sm font-bold text-white">
            Eventos inolvidables en West Texas y New México
          </span>
        </div>

        <h1 className="dna-display max-w-4xl text-white text-[clamp(2.75rem,9vw,6.25rem)]">
          Quinceañeras.
          <br />
          Bodas.
          <br />
          <span className="text-[#ffc10a]">Eventos inolvidables.</span>
        </h1>

        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#d6d6d9] md:text-lg">
          Pantallas LED, chispas frías, sonido profesional y más de 14 luces móviles.
          Producción completa para quinceañeras, bodas, eventos privados y posadas
          navideñas.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <PillButton href={QUOTE_HREF} variant="white" withArrow>
            {CTA_PRIMARY}
          </PillButton>
          <PillButton href={SERVICES_HREF} variant="outlineDark">
            Ver servicios
          </PillButton>
        </div>
      </Container>
    </section>
  );
}
