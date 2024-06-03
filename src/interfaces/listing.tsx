export interface Listing {
  id: number;
  title: string;
  slug: string;
  description: string;
  address: string;
  sqft: number;
  max_capacity: number;
  facilities?: string[];
  attachments?: string[];
  price_per_day: number;
  price_per_month: number;
  price_per_year: number;
  latitude: number;
  longitude: number;
}
