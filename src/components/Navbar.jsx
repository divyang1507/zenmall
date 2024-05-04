import React from "react";
import Links from "./Links";
import { FaShoppingCart, FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";


const navbar = () => {
  return (
    <>
      <header className="">
        <nav className=" hidden md:flex justify-between items-center mx-8 md:mx-16 lg:mx-32  ">
          <div className="p-4">BringIt</div>
          <div className="hidden lg:block md:block">
            <Links />
          </div>
          <div className="flex gap-4 items-center justify-center  ">
        <div className="flex justify-center rounded p-2 pr-4  bg-gray-200 items-center gap-2 text-2xl ">
          <input type="text" placeholder="Search here..." className=" pl-4  rounded text-base outline-none bg-gray-200" />
          <FiSearch />
        </div>

        <div className="flex items-center text-2xl justify-between">
          <Link href={"/favourite"} className="p-2">
            <FaRegHeart />
          </Link>
          <Link href={"/cart"} className="p-2">
            <LuShoppingCart />
          </Link>
          <Link href={"/cart"} className="p-2">
            <FaRegUser />
          </Link>
        </div>
      </div>
        </nav>
      </header>
    </>
  );
};

export default navbar;
