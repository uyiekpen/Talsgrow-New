"use client";
import React, { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

import Link from "next/link";
import { Imgs } from "@/utils/image";
import { SidebarContext } from "@/context/sidebarContext";

const Header = () => {
  const { toggleSidebar, isSidebarOpen } = useContext(SidebarContext);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow">
      <div className="flex flex-grow items-center gap-2 justify-end py-4 px-4 shadow md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase "
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <MdOutlineCancel /> : <FiMenu />}
          </button>
        </div>
        <button className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase">
          login{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
