import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { Button } from "./ui/button";
import { ModeToggle } from "./Dark-Mode-Switch";
import Link from "next/link";
import DialogCollection from "./DialogCollection";

function NavBar() {
  return (
    <div className="flex  items-center justify-between p-2 px-8 border-b-2">
      <div>
        <Link href="/" className="hover:cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            height={160}
            width={160}
            className="fill-current text-black"
          ></Image>
        </Link>
      </div>
      <div className="flex items-center justify-between p-2 space-x-4">
        <Button className=" bg-slate-100 text-black p-3 hover:bg-slate-300">
          Home
        </Button>

        <DialogCollection />

        <ModeToggle />
      </div>
    </div>
  );
}

export default NavBar;
