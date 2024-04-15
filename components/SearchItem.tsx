"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchItem() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!keyword) return;
    router.push(`/Search/${keyword}?search=${keyword}`);
    setLoading(false);
  };

  return (
    <div className="flex  w-full max-w-[480px] md:max-w-[520px]  lg:max-w-[540ppx]">
      <form className="flex flex-1">
        <Input
          disabled={loading}
          type="search"
          onChange={(e) => setKeyword(e.target.value)}
          name="keyword"
          placeholder="Enter your Keywords"
          className=" h-14 p-2 mt-6 border-2 border-gray-200 rounded-lg"
        />
        <Button
          disabled={loading}
          onClick={(e) => handleSubmit(e)}
          type="submit"
          className=" bg-slate-200  text-white h-14 mt-6 rounded-lg -ml-14"
        >
          <Search className="" />
        </Button>
      </form>
    </div>
  );
}

export default SearchItem;
