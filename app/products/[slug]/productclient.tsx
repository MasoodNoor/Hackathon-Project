"use client";

import { useState, useEffect } from "react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  description?: string;
  capacity?: string;
  price: number;
  imageSrc: string;
  category: string;
  stock: number;
  slug: string;
}

export default function ProductClient({ product }: { product: ProductCardProps }) {
  const [cart, setCart] = useState<ProductCardProps[]>([]);

  // ✅ Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // ✅ Save cart to localStorage when cart updates
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // ✅ Add to Cart Function (FIXED)
  const addToCart = () => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Ensure localStorage updates immediately
      return updatedCart;
    });
  };

  return (
    <div className="pt-4 p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Product Image */}
      <div className="flex flex-col items-center bg-[#F3F3F3]">
        <Image
          src={product.imageSrc}
          alt={product.name}
          width={200}
          height={200}
          className="w-full h-auto object-cover rounded-lg shadow-md"
          loading="lazy"
        />
      </div>

      {/* Product Details */}
      <div>
        <h1 className="text-3xl font-plusJakarta leading-10">{product.name}</h1>
        <p className="text-sm sm:text-xl sm:font-medium font-plusJakarta text-gray-500 leading-tight">
          {product.category}
        </p>

        <div className="flex flex-row-reverse justify-between w-full py-2">
          <div className="text-sm sm:text-xl font-plusJakarta font-semibold">Rs.{product.price}</div>
          <div className="text-sm sm:text-xl font-plusJakarta text-gray-500">
            <span className="font-bold">{product.stock}</span> available
          </div>
        </div>

        <p className="text-sm sm:text-md font-medium text-gray-500 font-plusJakarta leading-relaxed">
          {product.description}
        </p>

        {/* Add to Cart & Checkout */}
        <div className="mt-6 flex gap-4 justify-between">
          <Button onClick={addToCart} className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">
            Add to Cart
          </Button>
          <Button className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">Checkout</Button>
        </div>
      </div>
    </div>
  );
}
