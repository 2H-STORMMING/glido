import type { Metadata } from "next";
import gradient from "../../../public/gradiend-bg@2x.png";
import Image from "next/image";
import NavBarSearch from "@/components/NavBarSearch";
import { Provider } from "@/providers/Provider";

export const metadata: Metadata = {
  title: "Search",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Image src={gradient} alt="gradient" className="h-20 mb-10" />
      <NavBarSearch />
      <Provider>{children}</Provider>
    </>
  );
}
