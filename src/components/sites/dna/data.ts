export const PHONE_DISPLAY = "(469) 259-7239";
export const PHONE_HREF = "tel:+14692597239";
export const BOOK_URL = "https://dnaeventservices.com/book";
export const PRICING_URL = "https://dnaeventservices.com/pricing";
export const SOURCE = "https://dnaeventservices.com";

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: PRICING_URL },
  { label: "The DJs", href: `${SOURCE}/the-djs` },
  { label: "Extras", href: `${SOURCE}/extras` },
  { label: "Other Events", href: `${SOURCE}/other-events` },
  { label: "Make a Payment", href: `${SOURCE}/make-a-payment` },
];

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: PRICING_URL },
  { label: "The DJs", href: `${SOURCE}/the-djs` },
  { label: "Extras", href: `${SOURCE}/extras` },
  { label: "Other Events", href: `${SOURCE}/other-events` },
  { label: "Venues", href: `${SOURCE}/venues` },
  { label: "Vendor Family", href: `${SOURCE}/vendor-family` },
  { label: "Make a Payment", href: `${SOURCE}/make-a-payment` },
  { label: "Check My Date", href: BOOK_URL },
  { label: PHONE_DISPLAY, href: PHONE_HREF },
  { label: "Client Login", href: `${SOURCE}/client-login` },
];

export const STATS: { value: string; label: string }[] = [
  { value: "5.0", label: "Google rating" },
  { value: "335", label: "Reviews" },
  { value: "8", label: "Bilingual DJs" },
  { value: "2019", label: "Est. in Dallas" },
  { value: "1", label: "Wedding per date" },
];

export const CROWD_LIST: string[] = [
  "Your parents want cumbias.",
  "Your friends want reggaetón.",
  "His family wants country.",
  "And somebody's tío has requested norteñas four times already.",
];

export const MARQUEE_ITEMS: string[] = [
  "Bilingual DJs & MCs",
  "One wedding per date",
  "Dallas–Fort Worth",
  "335 five-star reviews",
  "English & Spanish",
  "Since 2019",
];

export const PACKAGE_INCLUDES: string[] = [
  "Bilingual DJ and professional MC, all night",
  "Full reception sound and dance floor lighting",
  "Wireless mics for toasts and ceremony",
  "Planning app, song lists and timeline building",
];

export const NO_SURPRISES: string[] = [
  "You know your DJ's name before you sign anything",
  "One wedding a day. Nobody is leaving yours early",
  "Everything quoted up front. No day-of upsells",
  "Insured, with backup gear for every part of the night",
];

export const START_HERE: {
  kicker: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
}[] = [
  {
    kicker: "The rooms",
    title: "Venues we know",
    copy: "We have played most of them. Load-in, power, curfews and what actually fills the floor in each room.",
    cta: "See the venues",
    href: `${SOURCE}/venues`,
    image: "/sites/dna/venues.jpg",
    alt: "A packed dance floor at a DFW wedding venue",
  },
  {
    kicker: "Add-ons",
    title: "Extras & upgrades",
    copy: "Cold sparks, dancing on clouds, LED floors, photo booths, uplighting and LED wall production.",
    cta: "See the extras",
    href: `${SOURCE}/extras`,
    image: "/sites/dna/extras.jpg",
    alt: "Cold spark fountains at a grand entrance",
  },
  {
    kicker: "Not a wedding?",
    title: "Quinces & events",
    copy: "Quinceañeras, corporate parties, school dances, anniversaries and grand openings.",
    cta: "See other events",
    href: `${SOURCE}/other-events`,
    image: "/sites/dna/quinces.jpg",
    alt: "A full room with hands in the air",
  },
];

export type Review = {
  rating: number;
  date: string;
  body: string;
  author: string;
  initials: string;
};

export const REVIEWS: Review[] = [
  {
    rating: 5,
    date: "Jan 20, 2026",
    body: "DJ Nate with DNA was incredible from start to finish. The presentation was polished and the floor never emptied once all night.",
    author: "Marisol G.",
    initials: "MG",
  },
  {
    rating: 5,
    date: "Jan 15, 2026",
    body: "DJ Nate was a huge blessing to our wedding. We whole heartedly recommend Nate because he brought peace to this stressful event planning. We enjoyed us...",
    author: "Cynthia",
    initials: "C",
  },
  {
    rating: 5,
    date: "Jan 12, 2026",
    body: "Bilingual the whole night and read the room perfectly. Our families danced from the first song to the last. Worth every dollar.",
    author: "Nancy Dixon",
    initials: "ND",
  },
  {
    rating: 5,
    date: "Jan 08, 2026",
    body: "We love working with Nate and his entire team at DNA Event Services! Our team works with different DJs on a regular basis and the DJs at DNA ar...",
    author: "Mathew DeBlanc",
    initials: "MD",
  },
  {
    rating: 5,
    date: "Dec 29, 2025",
    body: "The MC kept everything on schedule without it feeling stiff. Transitions between cumbias, country and reggaetón were seamless.",
    author: "Alex R.",
    initials: "AR",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "How much does a wedding DJ cost in Dallas–Fort Worth?",
    a: "DNA wedding packages start at $2,799 for up to four hours of bilingual DJ and MC service. The tier you land in depends on which DJ is open on your date, not on what happens that night.",
  },
  {
    q: "Do you have bilingual DJs who speak Spanish?",
    a: "All eight DNA DJs are fully bilingual in English and Spanish, and each one MCs their own room. You are not getting a translated script read off a card.",
  },
  {
    q: "How far in advance should we book?",
    a: "Nine to eighteen months for popular dates. One wedding per DJ per day, so spring and fall Saturdays go first.",
  },
  {
    q: "Can you play country and regional Mexican at the same wedding?",
    a: "That is the wedding we are built for. The job is not knowing both catalogues, it is knowing when to move between them before the floor empties.",
  },
  {
    q: "Do you provide an MC as well as a DJ?",
    a: "Yes, and it is the same person. Your DJ MCs the whole night, so the person reading the room is the person on the mic.",
  },
  {
    q: "How do we reserve our date?",
    a: "A signed agreement plus the deposit holds it. $500 with most of our DJs, or 30% of the total with Nate. The balance is not due until 30 days out.",
  },
];
