export interface Property {
  id: string;
  title: string;
  description: string;
  type: 'apartment' | 'house' | 'land' | 'commercial';
  operation: 'rent' | 'sale';
  price: number;
  location: {
    city: string;
    neighborhood: string;
    address: string;
    lat?: number;
    lng?: number;
  };
  details: {
    bedrooms: number;
    bathrooms: number;
    garages: number;
    area: number; // in m²
    features: string[];
  };
  images: string[];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SearchFilters {
  type?: 'apartment' | 'house' | 'land' | 'commercial';
  operation?: 'rent' | 'sale';
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  minBedrooms?: number;
  minArea?: number;
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  category: string;
  publishedAt: string;
  slug: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  phone: string;
  email: string;
  creci?: string;
}
