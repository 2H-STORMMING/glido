/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../../utils/utils";
import { useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { setData } from "@/data/results/resultSlice";
import { setSearch } from "@/data/results/searchSlice";
import { useRouter } from "next/navigation";

function page({ params }: { params: { keyword: string } }) {
  //dispatch updates the store with the state from a component
  const dispatch = useDispatch();
  //useSelector gets the state from store
  const count = useSelector((state) => {
    return state.data.value;
  }); // Access the counter state
  //useRouter is used to navigate between pages
  const router = useRouter();
  //useSearchParams is used to get the search params from the url
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  if (!search) return null;
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetchData(search),
  });
  function handeleClick(id: string) {
    router.push(`/Search/${params.keyword}/details/${id}`);
  }

  //

  return (
    <div className="grid mx-2 ">
      {isPending && <div>Loading...</div>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5 ">
        {data?.data.results.map((item: any) => (
          <div key={item.id} className=" flex items-center justify-start ">
            {" "}
            <Image
              className=" shadow-lg rounded-lg object-scale-down hover:cursor-pointer hover:scale-110 transition duration-500 ease-in-out"
              onClick={() => {
                dispatch(setData(data));
                dispatch(setSearch(search));
                handeleClick(item.id);
              }}
              height={600}
              width={600}
              src={item.urls.small}
              alt={item.alt_description}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
