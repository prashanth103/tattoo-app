export interface Artist {
  id: number;
  slug: string;
  name: string;
  speciality: string;
  location: string;
  rating: number;
  reviews: number;
  experience: string;
  availability: string;
  bio: string;
  avatar: string;
  cover: string;
  portfolio: number[];
  studio: string;
  featured?: boolean;
}

export interface Tattoo {
  id: number;
  title: string;
  category: string;
  artistId: number;
  image: string;
  aspect: "portrait" | "square" | "landscape";
  trending?: boolean;
}

export interface Style {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export interface HowItWorks {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
