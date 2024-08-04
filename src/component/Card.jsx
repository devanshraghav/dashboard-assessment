import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoMdArrowDropup } from "react-icons/io";

const Card = () => {
  return (
    <div className="w-32 lg:w-40 lg:h-40 h-32 p-2 bg-gray-400 text-white rounded-md m-2">
      <div className="h-full flex flex-col justify-around">
        <div>
          <div>
            <FiShoppingCart />
          </div>
          <h6>Total Orders</h6>
        </div>
        <div className="flex justify-between">
          <h3>75</h3>
          <div className="flex items-center">
            <IoMdArrowDropup /> <span>3%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
