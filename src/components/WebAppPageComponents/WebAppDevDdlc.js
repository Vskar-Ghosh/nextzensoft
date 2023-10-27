/** @format */

import React from "react";
import { webDevProcess, sdlc } from "../../assets/index";

const WebAppDevDdlc = () => {
  return (
    <div className=" w-full h-[90vh] p-5">
      <div className="w-full h-full bg-sdlcBg bg-cover bg-center ">
        <div className=" w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-around ">
          <div className=" w-[40%]">
            <h1 className=" capitalize font-abelPro text-4xl font-bold text-coralred">
              Intelligent software development production cycle
            </h1>
          </div>
          <div className=" w-[70%] h-[65%]  flex items-center justify-center relative mb-5 ">
            <div className=" w-[80vw] scale-90 hover:scale-100 transition-all duration-300 mb-5">
              <img src={webDevProcess} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebAppDevDdlc;
