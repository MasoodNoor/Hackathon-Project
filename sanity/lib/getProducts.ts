import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "1",
  useCdn: false,
});

export async function getProducts() {
  return client.fetch(`*[_type == "product"]{
    _id,
    name,
    price,
    "imageSrc": image.asset->url,
    capacity,
    category,
    description,
    stock
  }`);
}

