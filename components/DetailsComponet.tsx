import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Download, Plus } from "lucide-react";
import fileDownload from "js-file-download";
import CollectionList from "./CollectionList";

type DetailsComponetProps = {
  item: any;
};

function DetailsComponet({ item }: DetailsComponetProps) {
  const handleDownload = async (url: string, filename: string) => {
    if (!url) {
      return;
    }
    try {
      const res = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${process.env.UNSPLASH_ACESS_KEY}`,
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
      const blob = await res.blob();
      const image = await fileDownload(blob, filename);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="mt-10 px-4 ">
        <Avatar>
          <AvatarImage src={item.user.profile_image?.small} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <div className="text-sm text-gray-400 mt-4">
        Published on {new Date(item.created_at).toDateString()}
      </div>

      <div className="flex justify-between items-center gap-4 md:gap-10 lg:gap-20 mt-2 mx-auto">
        <Button className="bg-[#E5E7EB]">
          <Plus color="black" />
          <span className="text-black">Add to collection</span>
        </Button>
        <Button
          className="bg-[#E5E7EB] gap-4 hover:cursor-pointer"
          onClick={() => {
            handleDownload(item.links.download, item.slug + ".jpg");
          }}
        >
          <Download color="black" />
          <span className="text-black">Download</span>
        </Button>
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold ">Collections</h1>
        <CollectionList />
      </div>
    </div>
  );
}

export default DetailsComponet;
