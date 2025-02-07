"use client";

import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "@/app/components/ui/drawer";
import { Button } from "@/app/components/ui/button";

interface ProductCardProps {
    name: string;
    description?: string;
    capacity?: string;
    price: number;
    imageSrc: string;
    imageWidth?: number;
    category: string;
    stock: number;
    slug: string;
  }

const CartDrawer = ({ cart, setCart }: { cart: ProductCardProps[]; setCart: (cart: ProductCardProps[]) => void }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="w-[44px] h-[44px] rounded-full border border-gray-300 flex justify-center items-center bg-transparent hover:bg-gray-200 relative">
        <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="fixed right-0 top-0 h-full w-80 p-4 bg-white shadow-lg">
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
        </DrawerHeader>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mt-2 flex justify-between">
                <span>{item.name} - {item.price} PKR</span>
                <Button size="sm" onClick={() => setCart(cart.filter((_, i) => i !== index))}>
                  ❌
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">Your cart is empty.</p>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
