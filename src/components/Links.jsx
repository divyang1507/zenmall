"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
const Links = () => {
  const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full  ">
      <div className="flex justify-center items-center gap-4">
        {links.map((e) => (
          <Link
            className={`${
              pathname === e.path ? "bg-red-400" : "bg-yellow-400"
            } hover:bg-slate-400 p-4`}
            href={e.path}
            key={e.title}
          >
            {" "}
            {e.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <FaShoppingCart />
      </div>
    </div>
  );
};

export default Links;
