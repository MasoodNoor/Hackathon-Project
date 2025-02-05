import { Button } from "@/app/components/ui/button";



function Hero() {
  return (
    <main className="m-4">
    
      <div className="w-full h-[90vh] bg-parallax bg-fixed bg-cover flex flex-col justify-end items-center gap-1 p-4">
        <h1 className="font-plusJakarta text-[40px] text-[white] bg-black/30  uppercase  p-2">Best Straw Water Bottles for Staying Hydrated</h1>
        <h2 className="font-plusJakarta text-[25px] text-white bg-black/30  px-2 ">Everyone who is anyone is carrying around a straw tumbler these days.</h2>
        <Button className="bg-black rounded-full px-14 text-sm hover:bg-slate-950">Shop Now</Button>
      
      </div>
      
    </main>
  );
}

export default Hero;
