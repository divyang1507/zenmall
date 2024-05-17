import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaShoppingCart, FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const ProductsCard = () => {
  return (
    <div className="flex flex-col items-center m-4 rounded-md hover:bg-gray-50 p-4 w-full ">
      <div className="w-48 h-48 relative rounded">
        <Image src="/laptop.jpg" fill={true} alt="image" />
        <div className="absolute py-1 px-2 bg-red-500 text-white rounded text-xs">
          {" "}
          50%
        </div>

        <div className="absolute right-0 p-2 bg-gray-100  text-gray-600 rounded-full text-base">
          {" "}
          <FaRegHeart />
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="text-lg font-semibold">Product Name</div>
        <div>
          <span className=" text-lg font-medium">₹</span>
          <span className=" text-lg font-medium">230</span>
          <span className="text-gray-500 line-through ml-2">₹</span>
          <span className="text-gray-500 line-through">250</span>
        </div>
        <div className="flex justify-between item-center gap-4">
          <div className="flex items-center ">
            <div className="text-orange-400 text-lg">
              <FaRegStar />
            </div>
            <div className="text-gray-500 text-sm">(8.5)</div>
          </div>
        </div>
        <button className="bg-amber-400 py-1 mt-3  px-1 rounded-md">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
