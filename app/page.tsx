import Hero from "./components/hero";
import MyProductCarousel from "./components/myProductCarousel";

import SmallGallery from "./components/smallGallery";
import MyBanner from "./components/myBanner";

export default function Home() {
  return (
    <main className="bg-[#F6F7F9] flex flex-col">
      <div>
        <Hero />
      </div>
      <div className="bg-[#ffffff] grid gap-y-8 w-full p-6">
        <MyProductCarousel />
      </div>
      <div>
        <MyBanner />
      </div>
      <div className="">
        <SmallGallery/>
      </div>
    </main>
  );
}
