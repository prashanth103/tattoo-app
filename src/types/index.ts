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

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

export interface Style {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Studio {
  id: number;
  name: string;
  city: string;
  country: string;
  image: string;
  artistCount: number;
  rating: number;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}
