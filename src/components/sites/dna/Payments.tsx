import { ShieldCheck } from "lucide-react";
import { PAYMENT_CARDS } from "./data";
import { cn } from "@/lib/utils";

export function PaymentBadge({
  variant = "dark",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  const isLight = variant === "light"; // light = for dark backgrounds
  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center gap-x-4 gap-y-3 rounded-2xl border px-5 py-4",
        isLight ? "border-white/15 bg-white/5" : "border-black/10 bg-[#fafafa]",
        className,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 text-[13px] font-bold",
          isLight ? "text-white" : "text-[#111]",
        )}
      >
        <ShieldCheck className="size-4 text-[#BFEC34]" />
        Pagos seguros con
        <span className="rounded-md bg-[#635BFF] px-2 py-0.5 text-[13px] font-extrabold text-white">
          Stripe
        </span>
      </span>
      <span className={cn("h-5 w-px", isLight ? "bg-white/15" : "bg-black/10")} aria-hidden />
      <ul className="flex flex-wrap items-center gap-2">
        {PAYMENT_CARDS.map((card) => (
          <li
            key={card}
            className={cn(
              "rounded-md border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
              isLight
                ? "border-white/20 text-white/80"
                : "border-black/15 text-[#555]",
            )}
          >
            {card}
          </li>
        ))}
      </ul>
    </div>
  );
}
