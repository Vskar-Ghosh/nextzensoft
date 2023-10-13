/** @format */

import React from "react";
import { java, aspNet, cSharpe, python } from "../../assets/index";

const TechDesktop = () => {
  return (
    <div className="w-[50vw]  bg-white grid grid-cols-4 ">
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={java} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-xl rounded-md ">
        <img src={cSharpe} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={aspNet} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={python} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechDesktop;
