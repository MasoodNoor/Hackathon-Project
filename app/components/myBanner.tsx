import { Image } from "@heroui/image";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function MyBanner() {
  return (
    <main className="w-full flex flex-col justify-center items-center gap-3 p-8">
      <div className="w-full sm:w-1/2 h-full">
        <Image
          alt="banner image"
          src="/pictures/banner.jpg"
          className="rounded-none m-0 w-full"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-plusJakarta text-2xl sm:text-4xl ">
          Innovation Is At Our Core
        </h1>
        <h2 className="font-plusJakarta text-base sm:text-lg  sm:w-2/3 text-center">
          We design products that enhance your every day with features you
          simply won&apos;t find anywhere else.
        </h2>
        <Link href="/products"><Button className="bg-black rounded-full px-14 text-sm font-semibold hover:bg-slate-950">
          Make It Yours
        </Button></Link>
      </div>
    </main>
  );
}
