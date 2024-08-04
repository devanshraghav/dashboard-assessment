import React from "react";
import { IoMdHome } from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { RiBarChartBoxLine, RiWallet3Line } from "react-icons/ri";

const Sidebar = () => {
  const MobileSideBar = () => {
    return (
      <div className="lg:hidden bg-gray-400 bottom-0 fixed z-10 w-full">
        <div className="flex gap-2 justify-around p-2">
          <IoMdHome className="text-2xl" />
          <RiBarChartBoxLine className="text-2xl" />
          <LuClipboardCheck className="text-2xl" />
          <RiWallet3Line className="text-2xl" />
          <IoBagCheckOutline className="text-2xl" />
        </div>
      </div>
    );
  };

  const PcSideBar = () => {
    return (
      <div className="hidden lg:block min-h-screen bg-gray-400 w-12">
        <div className="flex flex-col gap-2 justify-around p-2">
          <IoMdHome className="text-2xl" />
          <RiBarChartBoxLine className="text-2xl" />
          <LuClipboardCheck className="text-2xl" />
          <RiWallet3Line className="text-2xl" />
          <IoBagCheckOutline className="text-2xl" />
        </div>
      </div>
    );
  };
  return (
    <>
      <MobileSideBar />
      <PcSideBar />
    </>
  );
};

export default Sidebar;
