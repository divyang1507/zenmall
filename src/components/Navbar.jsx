import React from "react";
import Links from "./Links";

const navbar = () => {
  return (
    <>
      <header className="bg-red-200">
        <nav className="flex justify-between items-center mx-8 md:mx-16 lg:mx-32  ">
          <div className="p-4 hover:bg-slate-700">BringIt</div>
          <div className="hidden lg:block md:block">
            <Links />
          </div>

          <div className="block lg:hidden md:hidden">menu</div>
        </nav>
      </header>
    </>
  );
};

export default navbar;
