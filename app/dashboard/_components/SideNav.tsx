"use client"

import { FileClock, Home, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

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
      name: "Bill",
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
    <div className="h-screen p-3 shadow-sm border">
      <div className="flex justify-center border-b p-5">
        <Image src={"/Logo.svg"} alt="logo" width={100} height={100} />
      </div>
      <div className="mt-10">
        {MenuList.map((menu, idx) => (
          <div className={`flex gap-2 mb-2 p-3 items-center hover:bg-primary hover:text-white rounded-lg cursor-pointer ${path == menu.path ? "bg-primary text-white" : ""}`}>
            <menu.icon className="h-7 w-7"/>
            <h2 className="text-lg">{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
