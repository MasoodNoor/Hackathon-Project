import { Avatar, AvatarIcon } from "@heroui/avatar";

import Link from "next/link";

function NavbarTop() {
  return (
    <div className="fixed top-0 left-0 z-50 grid grid-cols-2 gap-3 items-center px-[24px] py-8 md:py-[40px] md:grid-cols-[1fr_2fr_1fr] gap-y-7 w-full bg-white">
      {/* Logo */}
      <div className="col-span-1">
        <div className=" h-[28px] sm:h-[44px] text-[24px] sm:text-[32px] leading-[36px]  sm:leading-[48px] tracking-[-0.03em] text-left text-[#3563E9] font-plusJakarta ">
          <Link href="/">ONE SIP</Link>
        </div>
      </div>
      {/* Search Bar */}
      <div className="col-span-2 order-3 md:col-span-1 md:order-2 md:justify-self-center gap-4 flex justify-center">
        <button className="h-[48px]  sm:h-[44px] rounded-xl sm:rounded-[70px] border border-[#C3D4E966] bg-white flex justify-between items-center px-5 overflow-hidden w-full md:w-[492px] lg:w-">
          <div className="flex gap-6 pr-8">
            <svg
              className="w-[24px] h-[24px] text-[#596780]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22 22L20 20"
                stroke="#596780"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              type="Search something here"
              placeholder="Search something here"
              className="font-plusJakarta font-medium text-[14px] leading-[21px] tracking-[-0.02em] text-justify text-[#596780] overflow-hidden focus:outline-none"
            />
          </div>

          <svg
            className="hidden sm:block"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.5H16"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6.5H2"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 17.5H18"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 17.5H2"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <div className="sm:hidden h-[48px] border inline-flex justify-center items-center border-[#C3D4E966] rounded-xl px-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 6.5H16"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6.5H2"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22 17.5H18"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 17.5H2"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
              stroke="#596780"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* User Avatar */}

      <div className="col-span-1 flex justify-end gap-2 order-2 md:order-3">
        <button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8] hidden justify-center items-center  lg:flex">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
              fill="#323232"
            />
          </svg>
        </button>

        <button className="w-[44px] h-[44px] gap-0 rounded-[90px] border border-[#C3D4E966] opacity-[0.8] hidden lg:flex justify-center items-center">
          <svg width="24"
            height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </button>

        <Avatar
          classNames={{
            base: "w-[44px] h-[44px] border border-[#C3D4E966] opacity-[0.8] bg-transparent",
            icon: "",
          }}
          icon={<AvatarIcon />}
        />
      </div>
    </div>
  );
}

export default NavbarTop;
