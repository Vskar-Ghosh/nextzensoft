/** @format */

import React from "react";
import {
  ndjBusi,
  ndjComunity,
  ndjMicro,
  ndjMost,
  ndjReal,
  ndjTimeto,
} from "../../../../assets/index";

const NodeJsFeatures = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black ">
      <h1 className="text-6xl text-coralred font-abelPro font-bold mt-10 mb-10">
        NodeJS{" "}
        <span className="text-6xl text-deepBlue font-abelPro font-bold mt-10 mb-10">
          {" "}
          Features
        </span>
      </h1>
      <div className="flex max-xl:flex-row xl:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center xl:gap-10 max-xl:gap-10 md:gap-5 sm:gap-5 max-sm:gap-5 mx-10 p-10">
        <div className="w-[350px] h-[300px] flex flex-col justify-start items-start p-3">
          <div className=" w-[80px] h-[80px] bg-white p-5 rounded-xl ">
            <img src={ndjMicro} alt="" />
          </div>
          <h2 className="text-2xl text-white font-abelPro font-bold p-2 mt-1">
            Microservices approach
          </h2>
          <p className="text-lg text-white font-abelPro text-start  mt-1 max-w-1/3">
            Scale development with the power of microservices with teams
            building multiple components at the same time.
          </p>
        </div>
        {/* end of Item 1 */}
        <div className="w-[350px] h-[300px] flex flex-col justify-start items-start p-3">
          <div className=" w-[80px] h-[80px] bg-white p-5 rounded-xl ">
            <img src={ndjBusi} alt="" />
          </div>
          <h2 className="text-2xl text-white font-abelPro font-bold p-2 mt-1">
            Business Friendly
          </h2>
          <p className="text-lg text-white font-abelPro text-start mt-1 max-w-1/3">
            Node.js applications are built to save infrastructure costs when the
            business scales up.
          </p>
        </div>
        {/* end of 2 */}
        <div className="w-[350px] h-[300px] flex flex-col justify-start items-start  p-3">
          <div className=" w-[80px] h-[80px] bg-white p-5 rounded-xl ">
            <img src={ndjTimeto} alt="" />
          </div>
          <h2 className="text-2xl text-white font-abelPro font-bold p-2 mt-1">
            Time-to-Market
          </h2>
          <p className="text-lg text-white font-abelPro text-start mt-1 max-w-1/3">
            Stackoverflow confirms that Node.js reduces development time by 40%
            and helps businesses to launch apps faster.
          </p>
        </div>
      </div>
      {/* end of  1st =.holder */}
      <div className="flex max-xl:flex-row xl:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-center items-center xl:gap-10 max-xl:gap-10 md:gap-5 sm:gap-5 max-sm:gap-5 mx-10 p-10">
        <div className="w-[350px] h-[300px] flex flex-col justify-start items-start p-3">
          <div className=" w-[80px] h-[80px] bg-white p-5 rounded-xl ">
            <img src={ndjReal} alt="" />
          </div>
          <h2 className="text-2xl text-white font-abelPro font-bold p-2 mt-1">
            Real time data flow
          </h2>
          <p className="text-lg text-white font-abelPro text-start  mt-1 max-w-1/3">
            It is the best choice for building chat solutions and apps which
            require real-time data flow between users.
          </p>
        </div>
        {/* end of Item 1 */}
        <div className="w-[350px] h-[300px] flex flex-col justify-start items-start p-3">
          <div className=" w-[80px] h-[80px] bg-white p-5 rounded-xl ">
            <img src={ndjComunity} alt="" />
          </div>
          <h2 className="text-2xl text-white font-abelPro font-bold p-2 mt-1">
            Community Support to Simplify Development
          </h2>
          <p className="text-lg text-white font-abelPro text-start mt-1 max-w-1/3">
            Node.js community is one of the strongest open source community
            which provides ready to integrate components.
          </p>
        </div>
        {/* end of 2 */}
        <div className="w-[350px] h-[300px] flex flex-col justify-start items-start  p-3">
          <div className=" w-[70px] h-[70px] bg-white p-5 rounded-xl ">
            <img src={ndjMost} alt="" />
          </div>
          <h2 className="text-2xl text-white font-abelPro font-bold p-2 mt-1">
            Most Efficient Framework
          </h2>
          <p className="text-lg text-white font-abelPro text-start mt-1 max-w-1/3">
            One of the most efficient and popular framework in the market for
            eliminating the pain out of development.
          </p>
        </div>
      </div>

      {/* end of 2nd holder */}
    </div>
  );
};

export default NodeJsFeatures;
