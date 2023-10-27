/** @format */

import React from "react";
import { computerCrypto, sdlc } from "../../assets/index";

const Sdlc = () => {
  return (
    <div className=" w-full h-[95vh] p-10">
      <div className="w-full h-full bg-sdlcBg bg-cover bg-center ">
        <div className=" w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-around ">
          <div className=" w-[70%] justify-center items-center">
            <h1 className=" capitalize font-abelPro text-4xl font-bold text-coralred text-center mb-5">
              Intelligent software development{" "}
              <span className=" capitalize font-abelPro text-4xl font-bold text-white text-center mb-5">
                {" "}
                production cycle
              </span>
            </h1>
          </div>
          <div className=" w-[70%] h-[65%]  flex items-center justify-center relative  ">
            <div className=" w-[80vw] scale-90 hover:scale-100 transition-all duration-300 p-5 mb-10">
              <img src={sdlc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sdlc;
