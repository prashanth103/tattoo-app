import type {
  Artist,
  Tattoo,
  Style,
  HowItWorks,
  Review,
  FAQItem,
} from "@/types";

// Deterministic grayscale placeholder photography — swap for real
// photography assets when connecting this frontend to a backend.
const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`;

export const styles: Style[] = [
  {
    id: 1,
    name: "Portrait",
    slug: "portrait",
    description: "Bold linework, mythic creatures, and flowing composition.",
    image: img("cat-japanese", 800, 1000),
    count: 34,
  },
  {
    id: 2,
    name: "Realism",
    slug: "realism",
    description: "Photographic depth rendered in shadow and light.",
    image: img("cat-realism", 800, 1000),
    count: 22,
  },
  {
    id: 3,
    name: "Colour",
    slug: "fcolour",
    description: "Delicate single-needle detail with quiet restraint.",
    image: img("cat-fineline", 800, 1000),
    count: 51,
  },
  {
    id: 4,
    name: "Big Scale",
    slug: "big-scale",
    description: "Dense saturated ink built from pattern and contrast.",
    image: img("cat-blackwork", 800, 1000),
    count: 28,
  },
  {
    id: 5,
    name: "Cover Up",
    slug: "cover-up",
    description: "Precision structure — sacred geometry meets skin.",
    image: img("cat-geometric", 800, 1000),
    count: 19,
  },
  {
    id: 6,
    name: "Minimal",
    slug: "Minimal",
    description: "The fewest possible lines to say the most.",
    image: img("cat-minimal", 800, 1000),
    count: 40,
  },
  {
    id: 7,
    name: "Medium Scale",
    slug: "medium-scale",
    description: "Precision structure — sacred geometry meets skin.",
    image: img("cat-geometric", 800, 1000),
    count: 19,
  },
  {
    id: 8,
    name: "Band",
    slug: "band",
    description: "Precision structure — sacred geometry meets skin.",
    image: img("cat-geometric", 800, 1000),
    count: 19,
  },
];

export const howItWorks: HowItWorks[] = [
  {
    id: 1,
    name: "Share Your Idea",
    description: "Tell us what you have in mind. Bring a reference, photo, sketch or describe the concept.",
    image: img("style-traditional", 900, 700),
  },
  {
    id: 2,
    name: "Discuss the Design",
    description: "We'll discuss the design, size, placement and details before moving forward.",
    image: img("style-neotrad", 900, 700),
  },
  {
    id: 3,
    name: "Get Tattooed",
    description: "Your artist brings the agreed design to life with care and attention to detail.",
    image: img("style-watercolor", 900, 700),
  },
  {
    id: 4,
    name: "Aftercare",
    description: "We'll guide you on caring for your tattoo while it heals.",
    image: img("style-tribal", 900, 700),
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
    availability: "Available this week",
    bio: "Sai specializes in custom tattoos inspired by personal ideas and references. He works closely with every client to create designs that fit naturally with the body and remain timeless.",
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
    availability: "Appointments only",
    bio: "Monkey D Luffy focuses on creating clean, custom tattoos shaped around each client's story and vision. From the first consultation to the final design, he works closely with every client to craft artwork that feels personal, balanced, and made to last.",
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

export const reviews: Review[] = [
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
    question: "How do I book a tattoo at Samava?",
    answer:
      "You can contact us on WhatsApp or call us to discuss your tattoo idea, preferred date, size and placement. We'll guide you through the next steps.",
  },
  {
    id: 2,
    question: "Can I bring my own design or reference?",
    answer:
      "Yes. You can bring a photo, sketch, reference image or simply explain your idea. We'll discuss it with you and work on a design that suits the tattoo and placement.",
  },
  {
    id: 3,
    question: "Do you create custom tattoos?",
    answer:
      "Yes. We work on custom designs as well as tattoos based on client ideas and references. Share what you have in mind and we'll discuss the possibilities with you.",
  },
  {
    id: 4,
    question: "How should I prepare for my tattoo session?",
    answer:
      "Get a good night's sleep, eat beforehand, stay hydrated and wear comfortable clothing that gives easy access to the tattoo area. Avoid arriving under the influence of alcohol or other intoxicants.",
  },
  {
    id: 5,
    question: "How much does a tattoo cost?",
    answer:
      "Pricing depends on the design, size, placement and level of detail. Share your idea with us on WhatsApp for a discussion and estimate.",
  },
];
