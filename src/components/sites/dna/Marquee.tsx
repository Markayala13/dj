import { MARQUEE_ITEMS } from "./data";

export function Marquee() {
  // Two identical tracks sit side by side; translating -50% loops seamlessly.
  const group = (
    <span className="dna-marquee-track" aria-hidden="true">
      {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="dna-display px-7 text-[#111] text-[clamp(1.1rem,2vw,1.6rem)]">
            {item}
          </span>
          <span className="text-[#111]/70">★</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="flex overflow-hidden bg-[#ffc10a] py-4">
      {group}
      {group}
    </div>
  );
}
