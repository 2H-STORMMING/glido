/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useSelector } from "react-redux";
import Image from "next/image";
import DetailsComponet from "@/components/DetailsComponet";

function page({ params }: { params: { id: string } }) {
  //useSelector gets the state from store
  const count = useSelector((state) => {
    return state.data.value;
  }); // Access the counter state

  return (
    <div className="flex flex-col  items-center justify-center mt-20 h-screen">
      <div className="flex  justify-center h-full w-full mx-auto p-2">
        {count?.data?.results
          .filter((item: any) => item.id === params.id)
          .map((item: any) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row gap-5 md:items-start md:justify-between"
            >
              <Image
                priority={true}
                quality={60}
                className="  rounded-lg shadow-lg object-cover  hover:scale-110 transition duration-500 ease-in-out"
                height={item.height / 8}
                width={item.width / 8}
                src={item.urls.raw}
                alt={item.alt_description}
              />
              <DetailsComponet item={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default page;
