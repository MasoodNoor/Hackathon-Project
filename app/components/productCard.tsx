import Image from "next/image";
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
}

const ProductCard = ({
  name,

  imageSrc,

  price,
  category,
  stock,
}: ProductCardProps) => {
  return (
    <div className="bg-[#F3F3F3] rounded-[10px] shadow-md overflow-hidden p-4 py-8 w-full h-full">
      {/* Product Image */}
      <div className="grid grid-cols-1 gap-y-2 place-items-center pb-6 sm:pt-6">
        <div className=" flex items-end hover:scale-125 transition-all duration-500 cursor-pointer">
          <Image src={imageSrc} alt={name} width={200} height={200} />
        </div>
        {/* Product Name */}
        <div className="flex justify-between items-center w-full">
          <h3 className="sm:text-xl font-plusJakarta">{name}</h3>
          <p className="sm:text-sm font-plusJakarta text-gray-500">
            {category}
          </p>
        </div>

        {/* Description */}
        {/* {description && (
        <p className="text-sm font-medium text-gray-500 font-plusJakarta">{description}</p>
      )} */}

        {/* Capacity & Price */}
        <div className="flex justify-between w-full ">
          <div className="text-sm font-plusJakarta">Rs.{price}</div>
          <div className="text-sm font-plusJakarta text-gray-500">
            <span className="font-bold">{stock}</span> available
          </div>

          {/* {capacity && (
            <div className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.53 2 12 2Z"
                  fill="#90A3BF"
                />
                <rect x="4" y="4" width="16" height="16" rx="8" fill="white" />
                <path
                  d="M12 6C8.688 6 6 8.688 6 12C6 15.312 8.688 18 12 18C15.312 18 18 15.312 18 12C18 8.688 15.318 6 12 6Z"
                  fill="#90A3BF"
                />
              </svg>
              <p className="text-[12px] sm:text-[14px] text-[#90A3BF] font-plusJakarta">
                {capacity}
              </p>
            </div>
          )} */}
        </div>
      </div>

      {/* Buy Now Button */}
      <div className="flex justify-center">
        <Button className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
