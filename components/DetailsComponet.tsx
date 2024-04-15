import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Download, Plus } from "lucide-react";
import fileDownload from "js-file-download";
import CollectionList from "./CollectionList";
import DownloadList from "./DownloadList";

type DetailsComponetProps = {
  item: any;
};

function DetailsComponet({ item }: DetailsComponetProps) {
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
        <DownloadList urls={item.urls} />
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold ">Collections</h1>
        <CollectionList />
      </div>
    </div>
  );
}

export default DetailsComponet;
