import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Container } from "./ui";
import { SocialIcons } from "./Socials";
import { PaymentBadge } from "./Payments";
import { FOOTER_LINKS, BRAND, PHONE_DISPLAY, PHONE_HREF } from "./data";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <Image
            src="/sites/dna/logo-chuy.png"
            alt={BRAND}
            width={1041}
            height={456}
            className="h-12 w-auto"
          />
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 text-lg font-extrabold text-white hover:text-[#BFEC34]"
          >
            <Phone className="size-5" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <nav className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-bold text-white/85 transition-colors hover:text-[#BFEC34]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <SocialIcons variant="light" />
          <PaymentBadge variant="light" />
        </div>

        <p className="mt-10 max-w-5xl text-sm leading-relaxed text-white/45">
          Producción de eventos para quinceañeras, bodas, eventos privados y posadas
          navideñas. Pantallas LED, DJ booth LED, chispas frías y baile en las nubes,
          sonido profesional, más de 14 luces móviles, robot LED y maestro de ceremonia.
          Cubrimos West Texas y New México.
        </p>
      </Container>
    </footer>
  );
}
