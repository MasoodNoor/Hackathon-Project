"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "./productCard";
import { getProducts } from "@/sanity/lib/getProducts";
import Link from "next/link";

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

const MyProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data.slice(0, 5)); // ✅ Show only first 5 products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading carousel...</p>;
  }

  return (
    <section className="w-full max-w-7xl mx-auto p-4 static">
      <div className="flex justify-between text-[#90A3BF] text-center mb-6 font-plusJakarta">
        <h2>Latest Products</h2>
        <Link href="/productpage">
          <h2 className="hover:underline">View All</h2>
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full  relative z-30"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="flex justify-center">
            <ProductCard
              name={product.name}
              description={product.description}
              capacity={product.capacity}
              price={product.price}
              category={product.category}
              imageSrc={product.imageSrc}
              stock={product.stock}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MyProductCarousel;
