
import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set to false to disable edge caching and show instant updates
});

const builder = createImageUrlBuilder(client);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, date desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  location,
  date,
  featured,
  "category": category->title,
  "categorySlug": category->slug.current,
  "imageCount": count(gallery)
}`;

export const FEATURED_PROJECTS_QUERY = `*[_type == "project" && featured == true] | order(order asc) {
  _id,
  title,
  "slug": slug.current,
  description,
  coverImage,
  location,
  "category": category->title,
  "imageCount": count(gallery)
}`;

export const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  title,
  tagline,
  description,
  heroImage,
  aboutText,
  email,
  phone,
  instagram,
  youtube,
  linkedin
}`;

export const CATEGORIES_QUERY = `*[_type == "category"] | order(title asc) {
  _id,
  title,
  "slug": slug.current,
  description
}`;
