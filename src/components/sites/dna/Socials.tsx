import { Container, Eyebrow } from "./ui";
import { Reveal } from "./Reveal";
import { SOCIAL_LINKS, type SocialLink } from "./data";
import { cn } from "@/lib/utils";

function SocialGlyph({ platform, className }: { platform: SocialLink["platform"]; className?: string }) {
  switch (platform) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.67.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.34 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.89-4.49v-3.5a6.33 6.33 0 0 0-5.39 10.69 6.33 6.33 0 0 0 10.82-4.44V8.69a8.16 8.16 0 0 0 4.77 1.52V6.75a4.85 4.85 0 0 1-.67-.06Z" />
        </svg>
      );
  }
}

export function SocialIcons({
  variant = "dark",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-3", className)}>
      {SOCIAL_LINKS.map((s) => (
        <li key={s.platform}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${s.label} · ${s.handle}`}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-full transition-colors",
              variant === "light"
                ? "border border-white/25 text-white hover:bg-[#BFEC34] hover:text-[#111] hover:border-[#BFEC34]"
                : "border border-black/15 text-[#111] hover:bg-[#111] hover:text-white hover:border-[#111]",
            )}
          >
            <SocialGlyph platform={s.platform} className="size-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Socials() {
  return (
    <section id="redes" className="scroll-mt-20 bg-white pb-24 md:pb-32">
      <Container>
        <Reveal className="flex flex-col items-start gap-10 rounded-3xl bg-[#111] px-7 py-12 text-white md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
          <div className="max-w-xl">
            <Eyebrow className="text-white/70">Síguenos</Eyebrow>
            <h2 className="dna-display mt-4 text-white text-[clamp(1.9rem,4.5vw,3.25rem)]">
              Míranos en <span className="text-[#BFEC34]">redes.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#d6d6d9]">
              Mira nuestros últimos eventos, luces, chispas frías y el ambiente de cada
              fiesta. Síguenos y etiquétanos en tu evento.
            </p>
          </div>
          <SocialIcons variant="light" className="gap-4" />
        </Reveal>
      </Container>
    </section>
  );
}
