// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { Avatar, AvatarIcon } from "@heroui/avatar";

// function NavbarTop() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       style={
//         {
//           "--navbar-height": "calc(96px + 2rem)", // Adjust this value based on your navbar's actual height
//         } as React.CSSProperties
//       }
//       className={`fixed top-0 left-0 z-50 grid grid-cols-2 gap-3 items-center px-[24px] py-8 md:py-[40px] md:grid-cols-[1fr_2fr_1fr] gap-y-7 w-full transition-all duration-300 ${
//         isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
//       }`}
//     >
//       {/* Logo */}
//       <div className="w-[95vw] flex justify-between px-auto">
//         <div className="h-[28px] sm:h-[44px] text-[24px] sm:text-[32px] leading-[36px] sm:leading-[48px] tracking-[-0.03em] text-left text-[#3563E9] font-plusJakarta">
//           <Link href="/">ONE SIP</Link>
//         </div>
//         {/* Search Bar */}
//       {/* User Avatar */}
//       <div className="flex justify-end  gap-2">
//         <Button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8]  lflex justify-center items-center bg-transparent hover:bg-slate-200">
//           <svg
//             className="w-[24px] h-[24px] text-[#596780] hover:text-gray-600"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
//               stroke="#000000"
//               strokeWidth="3.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M22 22L20 20"
//               stroke="#000000"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </Button>
//         <Button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8]  lflex justify-center items-center bg-transparent hover:bg-slate-200">
//           <svg
//             width="24"
//             height="24"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 576 512"
//           >
//             <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
//           </svg>
//         </Button>
//         <Link href="/auth-form">
//           <Button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8] flex justify-center items-center bg-transparent hover:bg-slate-200">
//             <Avatar className="opacity-[0.8] bg-transparent">
//               <AvatarIcon />
//             </Avatar>
//           </Button>
//         </Link>
//       </div>
//       </div>

//     </div>
//   );
// }

// export default NavbarTop;

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Avatar, AvatarIcon } from "@heroui/avatar";

import CartDrawer from "./addtocart";

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

function NavbarTop() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const [cart, setCart] = useState<ProductCardProps[]>([]);


  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{ "--navbar-height": "calc(96px + 2rem)" } as React.CSSProperties}
      className={`fixed top-0 left-0 z-50 grid grid-cols-2 gap-3 items-center px-[24px] py-8 md:py-[40px] md:grid-cols-[1fr_2fr_1fr] gap-y-7 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="w-[95vw] flex justify-between px-auto">
        <div className="h-[28px] sm:h-[44px] text-[24px] sm:text-[32px] leading-[36px] sm:leading-[48px] tracking-[-0.03em] text-left text-[#3563E9] font-plusJakarta">
          <Link href="/">ONE SIP</Link>
        </div>

        {/* User Actions */}
        <div className="flex justify-end gap-2">
          {/* Search Drawer */}
         
          {/* Cart Button */}
          <CartDrawer cart={cart} setCart={setCart} />
          {/* User Avatar */}
          <Link href="/auth-form">
            <Button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8] flex justify-center items-center bg-transparent hover:bg-slate-200">
              <Avatar className="opacity-[0.8] bg-transparent">
                <AvatarIcon />
              </Avatar>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
