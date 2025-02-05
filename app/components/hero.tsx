import { Button } from "@/app/components/ui/button";

function Hero() {
  return (
    <main className="m-4 py-8">
      <div className="w-full  sm:w-full sm:h-[90vh] bg-parallax bg-fixed min-h-[80vh] bg-cover bg-center flex flex-col justify-end items-center gap-1 p-2">
        <h1 className="font-plusJakarta text-lg sm:text-4xl text-[white] bg-black/30 uppercase text-center p-4 sm:px-12">
          Best Straw Water Bottles for Staying Hydrated
        </h1>
        <h2 className="font-plusJakarta sm:text-2xl text-white bg-black/30 text-center p-2 ">
          Everyone who is anyone is carrying around a straw tumbler these days.
        </h2>
        <Button className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">
          Shop Now
        </Button>
      </div>
    </main>
  );
}

export default Hero;
