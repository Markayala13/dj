import Link from "next/link";
import { Container } from "./ui";
import { FOOTER_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <Container>
        <p className="dna-display text-[clamp(1.6rem,4vw,2.2rem)] text-white">
          DNA Premium Event Services
        </p>

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
          Bilingual wedding DJs and MCs serving Dallas, Fort Worth, Plano, Frisco,
          McKinney, Arlington, Irving, Denton, Rockwall, Southlake, Grapevine and the
          wider DFW Metroplex. Grand Prairie, TX · serving the DFW Metroplex ·{" "}
          <span className="whitespace-nowrap">Privacy Policy</span> ·{" "}
          <span className="whitespace-nowrap">Terms of Use</span> · Accessibility
        </p>
      </Container>
    </footer>
  );
}
