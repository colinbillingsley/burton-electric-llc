export type ImageCardType = {
  featuredUrl: string;
  imagePosition?: string;
  name: string;
  desc: string;
  category: string;
  location: string;
  year: string;
  alt?: string;
  url: string;
  imgs: { id: number; url: string }[];
  videos?: { id: number; url: string }[];
};
