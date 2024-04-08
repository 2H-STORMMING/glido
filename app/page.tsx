import { Input } from "@/components/ui/input";
import Image from "next/image";
import left from "../public/hero-left.png";
import right from "../public/hero-right.png";

export default function Home() {
  return (
    <main className="flex  items-center justify-between mt-40">
      <Image
        className="hidden md:block"
        width={300}
        height={400}
        src={left}
        alt="left"
      ></Image>
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Search</h1>
        <h3 className="text-md mt-4">
          Search high-resolution images from Unspalsh
        </h3>

        <div className="flex  w-full max-w-[480px] md:max-w-[520px]  lg:max-w-[540ppx]">
          <Input
            type="search"
            placeholder="Enter your Keywords"
            className=" h-14 p-2 mt-6 border-2 border-gray-200 rounded-lg"
          />
        </div>
      </div>

      <Image
        className="hidden md:block"
        width={300}
        height={400}
        src={right}
        alt="left"
      ></Image>
    </main>
  );
}
