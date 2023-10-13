/** @format */

import React from "react";
import {
  java,
  android,
  kotlin,
  dart,
  flutter,
  swift,
} from "../../assets/index";

const TechMobile = () => {
  return (
    <div className="w-[50vw]  bg-white grid grid-cols-4 ">
      <div className="w-[150px] h-[ 150px] p-2 mx-2 shadow-xl rounded-md ">
        <img src={android} alt="" width={150} height={150} className="p-2" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-xl rounded-md ">
        <img src={java} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-xl rounded-md ">
        <img src={kotlin} alt="" width={150} height={150} className="p-3" />
      </div>

      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-xl rounded-md ">
        <img src={flutter} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={dart} alt="" width={150} height={150} className="p-3" />
      </div>
      <div className="w-[150px] h-[ 150px] p-4 mx-3 shadow-2xl rounded-md ">
        <img src={swift} alt="" width={150} height={150} className="p-3" />
      </div>
    </div>
  );
};

export default TechMobile;
