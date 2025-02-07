// import MyProductCarousel from "@/app/components/myProductCarousel";
// import { Button } from "@/app/components/ui/button";
// import { getProductBySlug } from "@/sanity/lib/getProducts";

// export default async function ProductDetails({ params }: { params: { slug?: string } }) {
//   if (!params?.slug) return <p className="text-center text-red-600">Invalid product slug</p>;

//   const product = await getProductBySlug(params.slug);

//   if (!product) {
//     return <p className="text-center text-gray-600">Product not found</p>;
//   }

//   function setCart(arg0: any[]): void {
//     throw new Error("Function not implemented.");
//   }

//   return (
//     <div>
//         <div className="bg-productparallax bg-cover h-[25vh]">
       
//        </div>
      
//       <div className="pt-4 p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
//       {/* Product Image */}
//       <div className="flex flex-col items-center bg-[#F3F3F3]">
//         <img
//           src={product.imageSrc}
//           alt={product.name}
//           className="w-full h-auto object-cover rounded-lg shadow-md"
//           loading="lazy"
//         />
//       </div>

//       {/* Product Details */}
//       <div>
//           <h1 className="text-3xl font-plusJakarta leading-10">{product.name}</h1>
//           <p className="text-sm sm:text-xl sm:font-medium font-plusJakarta text-gray-500 leading-tight">
//             {product.category}
//           </p>
       
//         <div className="flex flex-row-reverse justify-between w-full py-2">
//           <div className="text-sm sm:text-xl font-plusJakarta font-semibold">Rs.{product.price}</div>
//           <div className="text-sm sm:text-xl font-plusJakarta text-gray-500">
//             <span className="font-bold">{product.stock}</span> available
//           </div>

          
//           </div>
//           <div>
//           <p className="text-sm sm:text-md font-medium text-gray-500 font-plusJakarta leading-relaxed">{product.description}</p>
//           </div>
//         {/* Add to Cart & Checkout */}
//         <div className="mt-6 flex gap-4 justify-between">
//           <Button onClick={addToCart} className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">
//             Add to Cart
//           </Button>
//           <Button  className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">
//             Checkout
//           </Button>
//         </div>
//       </div>
//       </div>
//       <div className="font-plusJakarta text-3xl sm:text-5xl p-8 flex justify-center items-center">
//         <h1>- You Might Also Like-</h1>
//       </div>
//       <div className="bg-[#ffffff] grid gap-y-8 w-full p-8">
//         <MyProductCarousel />
//       </div>
//   </div>
//   );
// }


import MyProductCarousel from "@/app/components/myProductCarousel";
import { getProductBySlug } from "@/sanity/lib/getProducts";
import ProductClient from "./productclient";

export default async function ProductDetails({ params }: { params: { slug?: string } }) {
  if (!params?.slug) return <p className="text-center text-red-600">Invalid product slug</p>;

  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <p className="text-center text-gray-600">Product not found</p>;
  }

  return (
    <div>
      <div className="bg-productparallax bg-cover h-[25vh]"></div>

      <ProductClient product={product} />

      <div className="font-plusJakarta text-3xl sm:text-5xl p-8 flex justify-center items-center">
        <h1>- You Might Also Like -</h1>
      </div>

      <div className="bg-[#ffffff] grid gap-y-8 w-full p-8">
        <MyProductCarousel />
      </div>
    </div>
  );
}
