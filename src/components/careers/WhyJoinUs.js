/** @format */

import React from "react";

import {
  car_stEmp,
  car_salry,
  car_workH,
  car_remoteWrk,
  car_englishC,
  car_mentoring,
  car_ltSoftware,
  car_trip,
  car_int_traing,
  car_int_resource,
  car_healtcare,
  car_G_work,
} from "../../assets/index";

const WhyJoinUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-3 bg-[#000412] ">
      <h1 className="text-6xl text-coralred font-abelPro font-bold mt-5 mb-3">
        Why Should You{" "}
        <span className="text-6xl text-deepBlue font-abelPro font-bold">
          Join Us?
        </span>
      </h1>
      {/* end => */}

      <div className="2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-full sm:w-full max-sm:w-full grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-2 p-3 ">
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_stEmp} alt="" className="" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Stable employmen
          </h1>
        </div>
        {/* item 1 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_salry} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Standard Salary
          </h1>
        </div>
        {/* item 2 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_workH} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Flexible working hours
          </h1>
        </div>
        {/* item 3 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_remoteWrk} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Remote work on demand
          </h1>
        </div>
        {/* item 4 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_englishC} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            English lessons
          </h1>
        </div>
        {/* item 5 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_mentoring} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Mentoring programme
          </h1>
        </div>
        {/* item 6 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_ltSoftware} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Latest software
          </h1>
        </div>
        {/* item 7 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_trip} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Trips to conferences
          </h1>
        </div>
        {/* item 8 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_int_traing} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Internal training
          </h1>
        </div>
        {/* item 9 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img
              src={car_int_resource}
              alt=""
              className="w-[120px] h-[120px]"
            />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Internal Resource
          </h1>
        </div>
        {/* item 10 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_healtcare} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Private medical care
          </h1>
        </div>
        {/* item 11 */}
        <div className="flex flex-col gap-2 mx-3 p-3 shadow-2xl">
          <div className="w-[120px] h-[120px]">
            <img src={car_G_work} alt="" className="w-[120px] h-[120px]" />
          </div>
          <h1 className="text-2xl font-abelPro font-bold mt-2 ">
            Great workplace
          </h1>
        </div>
        {/* item 12 */}
      </div>
    </div>
  );
};

export default WhyJoinUs;
