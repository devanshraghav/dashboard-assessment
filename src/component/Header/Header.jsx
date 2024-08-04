import React, { useState } from "react";
import { IoLogoBuffer } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";
import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between p-2 bg-gray-400 items-center">
      <div className="flex gap-5 items-center">
        <div className="">
          <IoLogoBuffer className="text-2xl" />
        </div>
        <div className="flex items-center gap-2 bg-gray-300 p-1 rounded-md">
          <CiSearch className="text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-300 outline-none border-none"
          />
        </div>
      </div>

      {showMenu ? (
        <div className="lg:hidden bg-blue-300 absolute right-0 w-1/2 top-0 h-full">
          <div className="px-1 py-3">
            <RxCross2
              className="text-2xl"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="text-2xl p-1">
              <MdOutlineEmail />
            </div>
            <div className="text-2xl p-1">
              <IoSettingsOutline />
            </div>
            <div className="text-2xl p-1">
              <IoNotificationsOutline />
            </div>
            <div className="text-2xl p-1">
              <FaRegUser />
            </div>
            <div className="text-2xl p-1">
              <AiOutlineLogout />
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden lg:block">
          <div className="flex gap-2">
            <div className="bg-gray-200 rounded-full p-1">
              <MdOutlineEmail />
            </div>
            <div className="bg-gray-200 rounded-full p-1">
              <IoSettingsOutline />
            </div>
            <div className="bg-gray-200 rounded-full p-1">
              <IoNotificationsOutline />
            </div>
            <div className="bg-gray-200 rounded-full p-1">
              <FaRegUser />
            </div>
          </div>
        </div>
      )}

      <div className="lg:hidden">
        {showMenu ? (
          <RxCross2
            className="text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          />
        ) : (
          <GiHamburgerMenu
            className="text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
