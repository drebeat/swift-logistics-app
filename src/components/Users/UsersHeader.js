import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";

import {
  BsCaretDownFill,
  // BsFillBellFill,
  // BsFillChatSquareDotsFill,
} from "react-icons/bs";
import { SidebarContext } from "../../contexts/SidebarContext";
import UserMenu from "./UserMenu";

const UsersHeader = () => {
  const [profile, setProfile] = useState({});
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav
      className="sticky top-0 w-full flex items-center justify-around h-16 px-8 py-3 bg-fuchsia-950 shadow z-40"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      {/* <div className="">
        <GiHamburgerMenu size={24} className="text-white" />
      </div> */}

      <form className="relative sm:w-1/2 w-2/5 flex items-center">
        <input
          type="search"
          name="search"
          placeholder="Enter Address"
          className="w-full bg-blue-50 pl-8 pr-4 py-2 rounded-full border-none text-black text-sm outline-none focus-within:ring-2 focus-within:ring-blue4500 placeholder:text-gray-400"
        />
        <IoIosSearch className="w-5 h-5 absolute left-2.5 text-black cursor-pointer" />
      </form>

      <div className="flex items-start text-gray-500 sm:space-x-5 space-x-2">
        <span
          className="flex flex-col items-center hover:text-gray-800 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FaUser size={24} className="text-white" />

          <span className="sm:flex hidden items-start sm:space-x-1 space-x-0 mt-0.5">
            <p className="text-white text-xs sm:block hidden">Profile</p>
            <BsCaretDownFill size={12} className="text-white mt-0.5" />
          </span>
          {isOpen && <UserMenu />}
        </span>
        <span
          className="sm:pl-2 pl-0 lg:hidden flex"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          {showSidebar ? (
            <FiX size={28} />
          ) : (
            <FiMenu size={28} className="text-white" />
          )}
        </span>

        <span onClick={() => navigate("/notification")}>
          <MdNotificationsActive size={28} className="text-white" />
        </span>
      </div>
    </nav>
  );
};

export default UsersHeader;
