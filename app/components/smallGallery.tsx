"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/app/components/productCard";
import { getProducts } from "@/sanity/lib/getProducts";
import Link from "next/link";
import { Button } from "./ui/button";

interface Product {
  id: string;
  name: string;
  description?: string;
  capacity?: string;
  price: number;
  imageSrc: string;
  category: string;
  stock: number;
}

const SmallGallery = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data.slice(0, 8)); // ✅ Show only 8 products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    <section className="w-full max-w-8xl mx-auto p-6 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">
        Explore Our Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            capacity={product.capacity}
            price={product.price}
            imageSrc={product.imageSrc}
            category={product.category}
            stock={product.stock}
          />
        ))}
      </div>
      <div className="flex justify-center items-center p-10">
      <Link href="/productpage"><Button className="bg-black rounded-full px-14 text-sm font-bold hover:bg-slate-950">
          See More
        </Button></Link>
    </div>
    </section>
  );
};

export default SmallGallery;
