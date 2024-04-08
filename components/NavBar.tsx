import React from "react";
import Image from "next/image";
import logo from "../public/logo.svg";
import { Button } from "./ui/button";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-2 px-8 border-b-2">
      <div>
        <Image src={logo} alt="logo" height={160} width={160}></Image>
      </div>
      <div className="flex items-center justify-between p-2 space-x-4">
        <Button className=" bg-slate-100 text-black hover:bg-slate-300">
          Home
        </Button>
        <Button className="bg-slate-100 text-black hover:bg-slate-300">
          Collections
        </Button>
      </div>
    </div>
  );
}

export default NavBar;
