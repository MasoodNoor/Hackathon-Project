import { createClient } from "next-sanity";

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || !process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error("Missing Sanity environment variables");
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2023-03-31",
  useCdn: false,
});

export async function getProducts() {
  return client.fetch(`*[_type == "product"]{
    _id,
    name,
    description,
    category,
    price,
    capacity,
    stock,
    "imageSrc": image.asset->url,
    "slug": slug.current // ✅ Added slug for navigation
  }`);
}

export async function getProductBySlug(slug: string) {
  return client.fetch(`*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    description,
    category,
    price,
    capacity,
    stock,
    "imageSrc": image.asset->url,
    "slug": slug.current
  }`, { slug });
}
