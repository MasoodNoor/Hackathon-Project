import Image from "next/image";
import { Button } from "@/app/components/ui/button";

interface ProductGalleryCardProps {
  name: string;
  description?: string;
  capacity?: string;
  price: number;
  imageSrc: string;
  imageWidth?: number;
  category: string;
  stock: number;
}

const ProductGalleryCard = ({
  name,
  description,
  imageSrc,
  
  capacity,
  price,
  category,
  stock,
}: ProductGalleryCardProps) => {
  return (
    <div className="bg-[#F3F3F3] rounded-[10px] shadow-md overflow-hidden p-4 py-8 w-full h-full">
      {/* Product Image */}
      <div className="grid grid-cols-1 gap-y-2 place-items-center pb-6 sm:pt-6">
        <div className="flex items-end hover:scale-125 transition-all duration-500 cursor-pointer">
          <Image src={imageSrc} alt={name} width={400} height={200} />
        </div>
        {/* Product Name */}
        <div className="flex justify-between items-center w-full">
          <h3 className="sm:text-xl font-plusJakarta">{name}</h3>
          <p className="sm:text-sm font-plusJakarta text-gray-500">{category}</p>
        </div>

        {/* Description */}
        {description && (
        <p className="text-justify text-sm font-medium text-gray-500 font-plusJakarta">{description}</p>
      )}

        {/* Capacity & Price */}
        <div className="flex justify-between w-full ">
          <div className="text-sm font-plusJakarta">Rs.{price}</div>
          <div className="text-sm font-plusJakarta text-gray-500">
          <span className="font-bold">{stock}</span>   available
          </div>

           {capacity && (
            <div className="flex items-center gap-1">
            
              <p className="text-[12px] sm:text-[14px] text-gray-500 font-plusJakarta">
               capacity: {capacity}
              </p>
            </div>
          )} 
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

export default ProductGalleryCard;
