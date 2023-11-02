/** @format */

import React from "react";
import {
  car_Job_searce,
  car_call,
  car_interview,
  car_flowUp,
  car_Job_offer,
} from "../../assets/index";

const ReqProcess = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <h1 className="text-6xl text-coralred font-abelPro font-bold mt-5 mb-10">
        Recruitment{" "}
        <span className="text-6xl text-deepBlue font-abelPro font-bold">
          process
        </span>
      </h1>
      {/* end => */}

      <div className=" flex  2xl:flex-row xl:flex-row lg:flex-row md:flex-row max-sm:flex-col sm:flex-col gap-5">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[150px] h-[150px] bg-coralred flex flex-col rounded-full justify-center items-center">
            <img src={car_Job_searce} alt="" className="w-[75px] h-[75px]" />
          </div>
          <h1 className="text-2xl text-deepBlue font-abelPro mt-3">
            Job application review
          </h1>
        </div>
        {/* o--=>1 */}

        <div className="flex flex-col justify-center items-center">
          <div className="w-[150px] h-[150px] bg-coralred flex flex-col rounded-full justify-center items-center">
            <img src={car_call} alt="" className="w-[75px] h-[75px]" />
          </div>
          <h1 className="text-2xl text-deepBlue font-abelPro mt-3">
            Call with talent manager
          </h1>
        </div>
        {/* o--=>2 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[150px] h-[150px] bg-coralred flex flex-col rounded-full justify-center items-center">
            <img src={car_interview} alt="" className="w-[75px] h-[75px]" />
          </div>
          <h1 className="text-2xl text-deepBlue font-abelPro mt-3">
            Interview with technical expert
          </h1>
        </div>
        {/* o--=>3 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[150px] h-[150px] bg-coralred flex flex-col rounded-full justify-center items-center">
            <img src={car_flowUp} alt="" className="w-[75px] h-[75px]" />
          </div>
          <h1 className="text-2xl text-deepBlue font-abelPro mt-3">
            Follow-up
          </h1>
        </div>
        {/* o--=>4 */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-[150px] h-[150px] bg-coralred flex flex-col rounded-full justify-center items-center">
            <img src={car_Job_offer} alt="" className="w-[75px] h-[75px]" />
          </div>
          <h1 className="text-2xl text-deepBlue font-abelPro mt-3">
            Job offer
          </h1>
        </div>
        {/* o--=>5 */}
      </div>
      {/* hloder end */}

      {/* resume upload */}
      <div className="2xl:w-[50vw] xl:w-[50vw] lg:w-[50vw] md:w-full sm:w-full max-sm:w-full flex flex-col md:mx-[10px] sm:mx-[10px] max-sm:mx-[10px] justify-center items-center border-2 border-white shadow-2xl rounded-lg   mt-20 mb-20 p-5">
        <h2 className="text-3xl text-coralred font-abelPro font-semibold">
          To Apply{" "}
        </h2>
        <p>Send Us Your Resume and Cover Letter </p>
        <p className="text-[#1476f2] mt-5">
          <span className="text-2xl text-deepBlue font-abelPro font-bold">
            Email:
          </span>{" "}
          talent.nextzensoft@nextzensoft.com
        </p>
      </div>
    </div>
  );
};

export default ReqProcess;
