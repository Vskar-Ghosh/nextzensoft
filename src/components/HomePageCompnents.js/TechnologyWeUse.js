/** @format */

import React from "react";
import { nodeJs } from "../../assets/index";

const TechnologyWeUse = () => {
  return (
    <section className="w-full py-10 items-center">
      <div className="w-full flex flex-col ">
        <div className="p-5 flex justify-center">
          <h1 className="text-6xl text-coralred font-abelPro font-bold leading-normal">
            Technology{" "}
            <span className="text-6xl text-[#193E65] font-abelPro font-bold leading-normal">
              We Use
            </span>
          </h1>
        </div>
        {/* end of heading */}

        <div className=" flex flex-col  justify-center items-center">
          <div className="flex flex-row gap-3 items-center mb-10 p-3 mx-5">
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
          </div>
          {/* end fond */}
          <div className="flex flex-row gap-3 items-center mt-10 p-3 mx-5">
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
            <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
              <img
                src={nodeJs}
                alt=""
                width={150}
                height={150}
                className="p-3"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyWeUse;
