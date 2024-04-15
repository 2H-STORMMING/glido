import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import fileDownload from "js-file-download";

type Urls = {
  raw: string;
  regular?: string;
  thumb?: string;
  small_s3?: string;
  full: string;
  small: string;
};

type DownloadListProps = {
  urls: Urls;
};

export default function DownloadList({ urls }: DownloadListProps) {
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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="bg-[#E5E7EB] gap-4 hover:cursor-pointer">
          <Download color="black" />
          <span className="text-black">Download</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sizes</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => handleDownload(urls.raw, "photo.jpg")}
          >
            <span>Raw</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => handleDownload(urls.full, "photo.jpg")}
          >
            <span>full</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="hover:cursor-pointer"
            onClick={() => handleDownload(urls.small, "photo.jpg")}
          >
            <span>small</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
