import type {
  Artist,
  Tattoo,
  Category,
  Style,
  Studio,
  Testimonial,
  FAQItem,
} from "@/types";

// Deterministic grayscale placeholder photography — swap for real
// photography assets when connecting this frontend to a backend.
const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`;

export const categories: Category[] = [
  {
    id: 1,
    name: "Japanese",
    slug: "japanese",
    description: "Bold linework, mythic creatures, and flowing composition.",
    image: img("cat-japanese", 800, 1000),
    count: 34,
  },
  {
    id: 2,
    name: "Fine Line",
    slug: "fine-line",
    description: "Delicate single-needle detail with quiet restraint.",
    image: img("cat-fineline", 800, 1000),
    count: 51,
  },
  {
    id: 3,
    name: "Blackwork",
    slug: "blackwork",
    description: "Dense saturated ink built from pattern and contrast.",
    image: img("cat-blackwork", 800, 1000),
    count: 28,
  },
  {
    id: 4,
    name: "Realism",
    slug: "realism",
    description: "Photographic depth rendered in shadow and light.",
    image: img("cat-realism", 800, 1000),
    count: 22,
  },
  {
    id: 5,
    name: "Geometric",
    slug: "geometric",
    description: "Precision structure — sacred geometry meets skin.",
    image: img("cat-geometric", 800, 1000),
    count: 19,
  },
  {
    id: 6,
    name: "Minimal",
    slug: "minimal",
    description: "The fewest possible lines to say the most.",
    image: img("cat-minimal", 800, 1000),
    count: 40,
  },
];

export const styles: Style[] = [
  {
    id: 1,
    name: "Traditional",
    description: "Bold outlines, saturated color, timeless motifs.",
    image: img("style-traditional", 900, 700),
  },
  {
    id: 2,
    name: "Neo-Traditional",
    description: "Classic form, contemporary palette and detail.",
    image: img("style-neotrad", 900, 700),
  },
  {
    id: 3,
    name: "Watercolor",
    description: "Soft gradients that bleed like pigment on paper.",
    image: img("style-watercolor", 900, 700),
  },
  {
    id: 4,
    name: "Tribal",
    description: "Ancestral pattern language in solid black form.",
    image: img("style-tribal", 900, 700),
  },
  {
    id: 5,
    name: "Dotwork",
    description: "Texture and tone built stipple by stipple.",
    image: img("style-dotwork", 900, 700),
  },
  {
    id: 6,
    name: "Illustrative",
    description: "Sketch-like linework with a hand-drawn spirit.",
    image: img("style-illustrative", 900, 700),
  },
];

export const artists: Artist[] = [
  {
    id: 1,
    slug: "sai-sagar",
    name: "Sai Bhumandla",
    speciality: "Custom & reference-based tattoos",
    location: "Hyderabad, India",
    rating: 4.9,
    reviews: 214,
    experience: "Tattoo Artist · 3 Years Experience",
    bio: "Mira apprenticed under a third-generation irezumi master before opening her own studio, where she builds large-scale backpieces rooted in classical Japanese mythology.",
    avatar: img("artist-mira", 400, 400),
    cover: img("artist-mira-cover", 1200, 800),
    portfolio: [1, 7, 13, 19],
    studio: "Samava Tattoo Studio",
    featured: true,
  },
  {
    id: 2,
    slug: "monkey-d-luffy",
    name: "Monkey D Luffy",
    speciality: "Custom & reference-based tattoos",
    location: "Hyderabad, India",
    rating: 4.8,
    reviews: 189,
    experience: "Tattoo Artist · 2 Years Experience",
    bio: "Elias trained as an architectural draughtsman before turning to tattooing, bringing a precise, restrained hand to single-needle portraiture and botanical work.",
    avatar: img("artist-elias", 400, 400),
    cover: img("artist-elias-cover", 1200, 800),
    portfolio: [2, 8, 14, 20],
    studio: "Samava Tattoo Studio",
    featured: true,
  }
];

export const tattoos: Tattoo[] = [
  { id: 1, title: "Dragon Sleeve", category: "Japanese", artistId: 1, image: img("tattoo-1", 800, 1000), aspect: "portrait", trending: true },
  { id: 2, title: "Botanical Study", category: "Fine Line", artistId: 2, image: img("tattoo-2", 800, 900), aspect: "portrait" },
  { id: 3, title: "Portrait in Shadow", category: "Realism", artistId: 3, image: img("tattoo-3", 900, 900), aspect: "square", trending: true },
  { id: 4, title: "Sacred Symmetry", category: "Geometric", artistId: 4, image: img("tattoo-4", 900, 700), aspect: "landscape" },
  { id: 5, title: "Panther & Rose", category: "Traditional", artistId: 5, image: img("tattoo-5", 800, 1000), aspect: "portrait" },
  { id: 6, title: "Koi in Current", category: "Neo-Traditional", artistId: 6, image: img("tattoo-6", 800, 900), aspect: "portrait", trending: true },
  { id: 7, title: "Phoenix Backpiece", category: "Japanese", artistId: 1, image: img("tattoo-7", 900, 1100), aspect: "portrait" },
  { id: 8, title: "Single Line Face", category: "Fine Line", artistId: 2, image: img("tattoo-8", 800, 800), aspect: "square" },
  { id: 9, title: "Wolf Study", category: "Realism", artistId: 3, image: img("tattoo-9", 900, 900), aspect: "square" },
  { id: 10, title: "Mandala Array", category: "Geometric", artistId: 4, image: img("tattoo-10", 900, 900), aspect: "square", trending: true },
  { id: 11, title: "Swallow & Banner", category: "Traditional", artistId: 5, image: img("tattoo-11", 800, 1000), aspect: "portrait" },
  { id: 12, title: "Autumn Fox", category: "Neo-Traditional", artistId: 6, image: img("tattoo-12", 800, 900), aspect: "portrait" },
  { id: 13, title: "Wave Fragment", category: "Japanese", artistId: 1, image: img("tattoo-13", 900, 700), aspect: "landscape" },
  { id: 14, title: "Thin Orchid", category: "Fine Line", artistId: 2, image: img("tattoo-14", 800, 900), aspect: "portrait" },
  { id: 15, title: "Eye Study", category: "Realism", artistId: 3, image: img("tattoo-15", 900, 900), aspect: "square" },
  { id: 16, title: "Linework Lattice", category: "Geometric", artistId: 4, image: img("tattoo-16", 900, 700), aspect: "landscape" },
  { id: 17, title: "Anchor & Chain", category: "Traditional", artistId: 5, image: img("tattoo-17", 800, 1000), aspect: "portrait" },
  { id: 18, title: "Crane in Flight", category: "Neo-Traditional", artistId: 6, image: img("tattoo-18", 900, 900), aspect: "square" },
  { id: 19, title: "Hannya Mask", category: "Japanese", artistId: 1, image: img("tattoo-19", 800, 1000), aspect: "portrait", trending: true },
  { id: 20, title: "Fern Outline", category: "Fine Line", artistId: 2, image: img("tattoo-20", 800, 900), aspect: "portrait" },
  { id: 21, title: "Storm Study", category: "Realism", artistId: 3, image: img("tattoo-21", 900, 700), aspect: "landscape" },
  { id: 22, title: "Golden Ratio", category: "Geometric", artistId: 4, image: img("tattoo-22", 900, 900), aspect: "square" },
  { id: 23, title: "Ship & Compass", category: "Traditional", artistId: 5, image: img("tattoo-23", 800, 1000), aspect: "portrait" },
  { id: 24, title: "Stag in Frost", category: "Neo-Traditional", artistId: 6, image: img("tattoo-24", 900, 900), aspect: "square" },
];

export const studios: Studio[] = [
  { id: 1, name: "Kuro Ink Studio", city: "Kyoto", country: "Japan", image: img("studio-kuro", 900, 700), artistCount: 6, rating: 4.9 },
  { id: 2, name: "Studio Linear", city: "Berlin", country: "Germany", image: img("studio-linear", 900, 700), artistCount: 4, rating: 4.8 },
  { id: 3, name: "The Atelier", city: "Los Angeles", country: "USA", image: img("studio-atelier", 900, 700), artistCount: 9, rating: 4.9 },
  { id: 4, name: "Numero Tattoo Co.", city: "Florence", country: "Italy", image: img("studio-numero", 900, 700), artistCount: 5, rating: 4.7 },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Harper Lin",
    role: "Collector, 6 pieces",
    quote:
      "Every artist I've booked through here has treated the work like a real commission — not a transaction. The consultation process alone is worth it.",
    avatar: img("testimonial-1", 200, 200),
    rating: 5,
  },
  {
    id: 2,
    name: "Diego Fuentes",
    role: "First-time client",
    quote:
      "I was nervous about my first piece. Mira walked me through placement, healing, and sizing before we ever touched a needle to skin.",
    avatar: img("testimonial-2", 200, 200),
    rating: 5,
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Collector, 3 pieces",
    quote:
      "The portfolio filtering made it so easy to find someone whose linework actually matched what I had in my head.",
    avatar: img("testimonial-3", 200, 200),
    rating: 4,
  },
];

export const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a consultation with an artist?",
    answer:
      "Open any artist profile and use the consultation request button. Most studios respond within two to three business days with available dates.",
  },
  {
    id: 2,
    question: "Can I see healed photos of an artist's work?",
    answer:
      "Many artist galleries include a mix of fresh and healed pieces. Look for the healed label on individual gallery images where available.",
  },
  {
    id: 3,
    question: "What should I bring to a first session?",
    answer:
      "Reference imagery, a general sense of placement and size, and comfortable clothing that gives easy access to the area you're having worked on.",
  },
  {
    id: 4,
    question: "Do artists offer touch-up sessions?",
    answer:
      "Touch-up policies vary by studio and are usually outlined during your consultation — most studios offer a complimentary touch-up window.",
  },
  {
    id: 5,
    question: "How far in advance should I book?",
    answer:
      "Popular artists often have waitlists of several months for large-scale work. Smaller fine-line pieces can sometimes be booked within a few weeks.",
  },
];
