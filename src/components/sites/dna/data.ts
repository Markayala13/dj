export const BRAND = "DJ Chuy";

// Contact
export const PHONE_DISPLAY = "432-741-2180";
export const PHONE_HREF = "tel:+14327412180";
export const WHATSAPP_HREF =
  "https://wa.me/14327412180?text=Hola%20DJ%20Chuy%2C%20quiero%20cotizar%20mi%20evento";

export const QUOTE_HREF = "#contacto"; // in-page anchor (nav "Contacto")
export const SERVICES_HREF = "#servicios";
export const EVENTS_HREF = "#eventos";
export const REVIEWS_HREF = "#resenas";

// Primary CTA sends to WhatsApp
export const CTA_PRIMARY = "Cotiza tu evento";
export const CTA_HREF = WHATSAPP_HREF;

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: SERVICES_HREF },
  { label: "Eventos", href: EVENTS_HREF },
  { label: "Reseñas", href: REVIEWS_HREF },
  { label: "Contacto", href: QUOTE_HREF },
];

export const FOOTER_LINKS: { label: string; href: string }[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: SERVICES_HREF },
  { label: "Eventos", href: EVENTS_HREF },
  { label: "Reseñas", href: REVIEWS_HREF },
  { label: "Contacto", href: QUOTE_HREF },
];

export const STATS: { value: string; label: string }[] = [
  { value: "+14", label: "Luces móviles" },
  { value: "LED", label: "Pantallas & DJ booth" },
  { value: "4", label: "Tipos de evento" },
  { value: "2", label: "Estados que cubrimos" },
  { value: "100%", label: "Sonido profesional" },
];

// Event types (numbered list in the "Eventos" section)
export const EVENT_TYPES: { name: string; note: string }[] = [
  { name: "Quinceañeras", note: "El vals, la sorpresa y la pista toda la noche." },
  { name: "Bodas", note: "De la ceremonia al último baile, sin que falte nada." },
  { name: "Eventos privados", note: "Cumpleaños, aniversarios y reuniones familiares." },
  { name: "Posadas navideñas", note: "La temporada decembrina con producción completa." },
];

export const MARQUEE_ITEMS: string[] = [
  "Quinceañeras",
  "Bodas",
  "Eventos privados",
  "Posadas navideñas",
  "West Texas",
  "New México",
];

// "Ofrecemos" — split across two columns
export const OFRECEMOS_A: string[] = [
  "Pantallas LED",
  "DJ booth LED para fotos y videos",
  "Sonido profesional",
];

export const OFRECEMOS_B: string[] = [
  "Chispas frías y baile en las nubes",
  "Más de 14 luces móviles",
  "Maestro de ceremonia",
];

export const EXPLORA_CARDS: {
  kicker: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  image: string;
  alt: string;
}[] = [
  {
    kicker: "Producción",
    title: "Pantallas LED & sonido",
    copy: "Pantallas LED para tu entrada, line array de sonido profesional y torres de luz que transforman el salón.",
    cta: "Cotiza tu evento",
    href: WHATSAPP_HREF,
    image: "/sites/dna/setup-led.jpg",
    alt: "Montaje de pantalla LED, sonido y luces en un salón",
  },
  {
    kicker: "El show",
    title: "Robot LED",
    copy: "El robot LED gigante para la entrada o la hora loca. Pura adrenalina para quinceañeras y bodas.",
    cta: "Cotiza tu evento",
    href: WHATSAPP_HREF,
    image: "/sites/dna/robot-led.jpg",
    alt: "Robot LED iluminado en un evento",
  },
  {
    kicker: "Tu DJ",
    title: "DJ Chuy en la cabina",
    copy: "DJ y maestro de ceremonia toda la noche. Leemos la pista y la mantenemos llena de principio a fin.",
    cta: "Cotiza tu evento",
    href: WHATSAPP_HREF,
    image: "/sites/dna/djchuy-booth.jpg",
    alt: "DJ Chuy con su controlador",
  },
];

export type Review = {
  rating: number;
  date: string;
  body: string;
  author: string;
  initials: string;
};

// Placeholder reviews (example content) — replace with real testimonials.
export const REVIEWS: Review[] = [
  {
    rating: 5,
    date: "Ejemplo",
    body: "Las pantallas LED y las chispas frías hicieron la entrada de mi quinceañera inolvidable. El equipo llegó temprano y todo salió perfecto.",
    author: "Clienta ejemplo",
    initials: "CE",
  },
  {
    rating: 5,
    date: "Ejemplo",
    body: "Contratamos para nuestra boda y el maestro de ceremonia mantuvo todo en tiempo. La pista no se vació en toda la noche.",
    author: "Pareja ejemplo",
    initials: "PE",
  },
  {
    rating: 5,
    date: "Ejemplo",
    body: "El baile en las nubes para el primer baile quedó de película. Sonido profesional y muchísimas luces. Totalmente recomendados.",
    author: "Cliente ejemplo",
    initials: "CE",
  },
  {
    rating: 5,
    date: "Ejemplo",
    body: "Hicieron nuestra posada navideña y fue un éxito. Las más de 14 luces móviles cambiaron por completo el salón.",
    author: "Familia ejemplo",
    initials: "FE",
  },
  {
    rating: 5,
    date: "Ejemplo",
    body: "Servicio puntual y profesional en New México. El DJ booth LED para fotos y videos fue el hit de la fiesta.",
    author: "Clienta ejemplo",
    initials: "CE",
  },
];

export type Faq = { q: string; a: string };

export const FAQS: Faq[] = [
  {
    q: "¿Qué tipo de eventos cubren?",
    a: "Quinceañeras, bodas, eventos privados y posadas navideñas. Armamos la producción completa para cada ocasión.",
  },
  {
    q: "¿Qué incluye el servicio?",
    a: "Pantallas LED, DJ booth LED para fotos y videos, chispas frías y baile en las nubes, sonido profesional, más de 14 luces móviles y maestro de ceremonia.",
  },
  {
    q: "¿En qué zonas trabajan?",
    a: "Cubrimos West Texas y New México. Escríbenos con la ubicación de tu evento y lo confirmamos.",
  },
  {
    q: "¿Tienen maestro de ceremonia?",
    a: "Sí. Dirigimos tu evento de principio a fin para que tú solo disfrutes.",
  },
  {
    q: "¿Hacen chispas frías y baile en las nubes?",
    a: "Sí, son de nuestros efectos más pedidos para la entrada y el primer baile.",
  },
  {
    q: "¿Cómo aparto mi fecha?",
    a: "Escríbenos con tu fecha y tipo de evento y te pasamos la cotización el mismo día para apartar tu lugar.",
  },
];
