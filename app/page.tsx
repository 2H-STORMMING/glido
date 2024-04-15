import SearchItem from "@/components/SearchItem";
import Image from "next/image";
import left from "../public/hero-left.png";
import right from "../public/hero-right.png";
import { save } from "../mongodb/connect";

export default async function Home() {
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

        <SearchItem />
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
