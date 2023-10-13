/** @format */

import React from "react";
import {
  nodeJs,
  java,
  aspNet,
  cSharpe,
  django,
  expressJS,
  js,
  laravel,
  php,
  spring,
  springBoot,
} from "../../assets/index";

const TechBackend = () => {
  return (
    <div className="w-full max-sm:w-full bg-white  grid grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-xl:grid-cols-4 max-sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-3 p-3  ">
      <div className="customTechCard">
        <img src={java} alt="" width={150} height={150} className="p-1" />
      </div>

      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-xl rounded-md ">
        <img src={nodeJs} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={cSharpe} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={spring} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={springBoot} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={aspNet} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={django} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={expressJS} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={laravel} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={php} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={js} alt="" width={150} height={150} className="p-2" />
      </div>
    </div>
  );
};

export default TechBackend;
