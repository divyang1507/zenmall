import React from "react";
import { FaRegStar } from "react-icons/fa";

const ProductsCard = () => {
  return (
    <>
      <div>
        <div>
            Imagemage
        </div>
        <div>
            Product Name
        </div>
        <div><span>rs</span><span>230</span><span>ssrs</span><span>dd230</span></div>
        <div className="flex">
            <div className="bg-orange-400"><FaRegStar /></div>
            <div>(8.5)</div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
