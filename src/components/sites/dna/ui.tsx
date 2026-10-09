import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("dna-eyebrow", className)}>{children}</p>;
}

type PillVariant = "white" | "dark" | "outlineDark" | "outlineLight";

const pillStyles: Record<PillVariant, string> = {
  white: "bg-white text-[#111] hover:bg-white/90",
  dark: "bg-[#111] text-white hover:bg-black",
  // outline on a dark background (white border/text)
  outlineDark: "border border-white/35 text-white hover:bg-white/10",
  // outline on a light background (dark border/text)
  outlineLight: "border border-[#111]/25 text-[#111] hover:bg-[#111]/5",
};

export function PillButton({
  href,
  children,
  variant = "white",
  withArrow = false,
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: PillVariant;
  withArrow?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-[15px] font-bold leading-none transition-colors",
        pillStyles[variant],
        className,
      )}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
