"use client"

import { FileClock, Home, Key, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";

const SideNav = () => {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();
  useEffect(()=>{
    console.log(path)
  },[])

  return (
    <div className="h-screen relative p-3 shadow-sm border bg-white">
      <div className="flex justify-center border-b p-5">
        <Image src={"/Logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <div className="mt-10">
        {MenuList.map((menu, idx) => (
          <Link href={menu.path}>
          <div className={`flex gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path == menu.path ? "bg-primary text-white" : ""}`} key={idx}>
            <menu.icon className="h-7 w-7"/>
            <h2 className="text-lg">{menu.name}</h2>
          </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full ">
        <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;
