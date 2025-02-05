

import Link from "next/link";


function Footer() {
  return (
    <footer className="bg-[#E3E3E3] w-full">
      <div className="container mx-auto px-4 py-10 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 
              className= "text-2xl font-plusJakarta md:text-3xl text-[#3563E9]"
            >
              <Link href="/">ONE SIP</Link>
            </h2>
            <p 
              className="text-sm text-[#90A3BF] max-w-xs text-justify"
            >
              At OneSip, we believe that staying hydrated should be effortless, stylish, and sustainable.
              Our goal is to revolutionize the way people consume water
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:col-span-2">
            {/* About Column */}
            <div>
              <h3 
                className="text-xl font-semibold text-[#1A202C] mb-4"
              >
                About
              </h3>
              <ul className="space-y-2 text-[#90A3BF] font-plusJakarta">
                <li>How it works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Relation</li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 
                className= "font-plusJakarta text-xl font-semibold text-[#1A202C] mb-4"
              >
                Community
              </h3>
              <ul className="space-y-2 text-[#90A3BF] font-plusJakarta">
                <li>Events</li>
                <li>Blog</li>
                <li>Podcast</li>
                <li>Invite a friend</li>
              </ul>
            </div>

            {/* Socials Column */}
            <div>
              <h3 
                className=" font-plusJakarta text-xl font-semibold text-[#1A202C] mb-4"
              >
                Socials
              </h3>
              <ul className="space-y-2 text-[#90A3BF] font-plusJakarta">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-[#13131329] my-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col-reverse md:flex-row sm:justify-between sm:items-center space-y-4 md:space-y-0">
          <p 
            className="font-plusJakarta text-sm font-semibold text-[#1A202C]"
          >
            ©2024 ONE SIP . All rights reserved
          </p>
          
          <div className="font-plusJakarta flex space-x-32 text-sm text-[#1A202C] font-semibold pb-5">
            <span>Privacy & Policy</span>
            <span>Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;