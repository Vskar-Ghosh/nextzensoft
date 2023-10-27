/** @format */

import React from "react";

import { foodTech1, foodDistribution } from "../../assets/index";

const FtOurSolution = () => {
  return (
    <div className="flex flex-col justify-center items-center p-3  ">
      <h1 className="font-abelPro text-coralred text-4xl md:text-5xl max-sm:mt-4 sm:mt-4 font-bold mb-3">
        Software development{" "}
        <span className="font-abelPro text-[#241468] text-4xl md:text-5xl font-bold mb-3">
          services for FoodTech
        </span>
      </h1>
      <div className="w-full flex flex-row lg:flex-row xl:flex-row max-sm:flex-col sm:flex-col md:flex-col max-sm:mx-3 sm:mx-3 justify-center items-center gap-5 mt-5 p-3">
        <div className="   p-3 flex flex-col justify-center items-center gap-5 max-sm:mx-3 sm:mx-3 md:mx-3 ">
          <div className=" w-[400px] flex flex-row gap-3  justify-start items-center bg-white shadow-xl rounded-xl">
            <img
              src={foodDistribution}
              height={80}
              width={80}
              alt=""
              className="ml-2 mb-2 mt-2"
            />
            <h1 className="text-xl text-coralred font-abelPro p-3">
              Food Distribution Software
            </h1>
          </div>
          {/* end of 1st */}
          <div className=" w-[400px] flex flex-row gap-3  justify-start items-center bg-white shadow-xl rounded-xl">
            <img
              src={foodDistribution}
              height={80}
              width={80}
              alt=""
              className="ml-2 mb-2 mt-2"
            />
            <h1 className="text-xl text-coralred font-abelPro p-3">
              Food Service Management Software
            </h1>
          </div>
          {/* end of 2nd */}
          <div className=" w-[400px] flex flex-row gap-3  justify-start items-center bg-white shadow-xl rounded-xl">
            <img
              src={foodDistribution}
              height={80}
              width={80}
              alt=""
              className="ml-2 mb-2 mt-2"
            />
            <h1 className="text-[18px] text-coralred font-abelPro p-3">
              Food & Beverages Warehouse Inventory Software
            </h1>
          </div>
        </div>
        {/* end of left side */}
        <div className="w-[400px] h-[400px] flex flex-col justify-center items-center">
          <img src={foodTech1} alt="" className="p-3" />
        </div>
        {/* end of center */}
        <div className="   p-3 flex flex-col justify-center items-center gap-5 max-sm:mx-3 ms:mx-3">
          <div className=" w-[400px] flex flex-row gap-3  justify-end items-center bg-white shadow-xl rounded-xl">
            <h1 className="text-xl text-coralred font-abelPro p-3">
              Food Manufacturing Software
            </h1>
            <img
              src={foodDistribution}
              height={80}
              width={80}
              alt=""
              className="mr-2 mb-2 mt-2"
            />
          </div>
          {/* end of 1st */}
          <div className=" w-[400px] flex flex-row gap-3  justify-end items-center bg-white shadow-xl rounded-xl">
            <h1 className="text-xl text-coralred font-abelPro p-3">
              Food Traceability Software
            </h1>
            <img
              src={foodDistribution}
              height={80}
              width={80}
              alt=""
              className="mr-2 mb-2 mt-2"
            />
          </div>
          {/* end of 2nd */}
          <div className=" w-[400px] flex flex-row gap-3  justify-end items-center bg-white shadow-xl rounded-xl">
            <h1 className="text-[18px] text-coralred font-abelPro p-3">
              Food & Beverages Quality Management Software
            </h1>
            <img
              src={foodDistribution}
              height={80}
              width={80}
              alt=""
              className="mr-2 mb-2 mt-2"
            />
          </div>
        </div>
        {/* end right side */}
      </div>
    </div>
  );
};

export default FtOurSolution;
