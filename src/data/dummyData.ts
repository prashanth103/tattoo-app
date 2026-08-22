import type { Artist, HowItWorks, Review, FAQItem } from "@/types";

// Deterministic grayscale placeholder photography — swap for real
// photography assets when connecting this frontend to a backend.
const img = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`;

export const GOOGLE_REVIEWS = {
  rating: 4.9,
  total: 243,
  writeReviewUrl: "https://g.page/r/CaNXJek_6FxXEAI/review",
  businessUrl: "https://share.google/NoFvaNDVvWfOu6ZYD",
};

export const howItWorks: HowItWorks[] = [
  {
    id: 1,
    name: "Share Your Idea",
    description:
      "Tell us what you have in mind. Bring a reference, photo, sketch or describe the concept.",
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
    avatar: '/src/assets/images/sai-artist.jpeg',
    cover: img("artist-mira-cover", 1200, 800),
    portfolio: [1, 7, 13, 19],
    studio: "Samava Tattoo Studio",
    featured: true,
  },
  {
    id: 2,
    slug: "vinay-kumar",
    name: "Vinay Kumar",
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
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: "Harper Lin",
    role: "Collector, 6 pieces",
    quote:
      "Amazing experience from start to finish! Every artist I've booked through here has treated the work like a real commission — not a transaction. The consultation process alone is worth it. They really take the time to make sure you're comfortable and the design is exactly what you want.",
    avatar: img("testimonial-1", 200, 200),
    rating: 5,
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Diego Fuentes",
    role: "First-time client",
    quote:
      "I was nervous about my first piece but this studio is incredible. Mira walked me through placement, healing, and sizing before we ever touched a needle to skin. The place is super clean and everyone is extremely friendly and professional.",
    avatar: img("testimonial-2", 200, 200),
    rating: 5,
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Collector, 3 pieces",
    quote:
      "Absolutely love this place! The portfolio filtering made it so easy to find someone whose linework actually matched what I had in my head. I'll definitely be coming back for more pieces in the future.",
    avatar: img("testimonial-3", 200, 200),
    rating: 5,
    date: "2 months ago",
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
