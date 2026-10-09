import Link from "next/link";
import { Container } from "./ui";
import { FOOTER_LINKS, BRAND } from "./data";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <Container>
        <p className="dna-display text-[clamp(1.6rem,4vw,2.2rem)] text-white">{BRAND}</p>

        <nav className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-bold text-white/85 transition-colors hover:text-[#ffc10a]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 max-w-5xl text-sm leading-relaxed text-white/45">
          Producción de eventos para quinceañeras, bodas, eventos privados y posadas
          navideñas. Pantallas LED, DJ booth LED, chispas frías y baile en las nubes,
          sonido profesional, más de 14 luces móviles y maestro de ceremonia. Cubrimos
          West Texas y New México.
        </p>
      </Container>
    </footer>
  );
}
