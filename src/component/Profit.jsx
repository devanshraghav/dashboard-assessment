import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

const Profit = () => {
  return (
    <div className="bg-gray-400 rounded-md m-2 p-2 text-white lg:w-96 lg:h-32">
      <h6 className="text-center text-xl">Net Profit</h6>

      <div>
        <h2 className="text-xl font-bold flex gap-2">
          <span>$</span> 6759.25
        </h2>
      </div>

      <div className="flex items-center gap-1">
        <IoMdArrowDropup /> <span>3%</span>
      </div>
    </div>
  );
};

export default Profit;
