"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import ProductGalleryCard from "./productGalleryCard";
import { getProducts } from "@/sanity/lib/getProducts";

interface Product {
  id: string;
  name: string;
  description?: string;
  capacity?: string;
  price: number;
  category: string;
  imageSrc: string;
  stock: number;
}

interface ProductGalleryProps {
  displayCount: number; // ✅ Controls how many products to display initially
}

const ProductGallery = ({ displayCount }: ProductGalleryProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data); // ✅ Store all products
        setVisibleProducts(data.slice(0, displayCount)); // ✅ Load first batch
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [displayCount]);

  // Load More Products on Scroll
  const lastProductRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !node) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    if (page > 1) {
      setVisibleProducts(products.slice(0, page * displayCount));
    }
  }, [page, displayCount, products]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  return (
    
    <section className="w-full max-w-6xl mx-auto my-32 p-6">
      
      <h2 className="text-2xl font-bold text-center mb-6">Explore Our Collection</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
        {visibleProducts.map((product, index) => (
          <div key={product.id} ref={index === visibleProducts.length - 1 ? lastProductRef : null}>
            <ProductGalleryCard
              name={product.name}
              description={product.description}
              capacity={product.capacity}
              price={product.price}
              imageSrc={product.imageSrc}
              category={product.category}
              stock={product.stock}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGallery;
