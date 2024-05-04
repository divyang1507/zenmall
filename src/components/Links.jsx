"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
    <div className="flex gap-12 w-full items-center  ">
      <div className="flex justify-center items-center gap-4">
        {links.map((e) => (
          <Link
            className={`${
              pathname === e.path ? "font-semibold border-b-2 border-black" : ""
            } hover:font-semibold p-4`}
            href={e.path}
            key={e.title}
          >
            {" "}
            {e.title}
          </Link>
        ))}
      </div>
     
    </div>
  );
};

export default Links;
