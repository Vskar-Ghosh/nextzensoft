import React from "react";
import { computerCrypto, sdlc } from "../../assets/index";

const Sdlc = () => {
  return (
    <div className=" w-full h-[90vh]">
      <div className="w-full h-full bg-sdlcBg bg-cover bg-center ">
        <div className=" w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-around ">
          <div className=" w-[40%]">
            <h1 className=" capitalize font-abelPro text-4xl font-bold text-white">
              Intelligent coustom software development production cycle
            </h1>
          </div>
          <div className=" w-[70%] h-[65%]  flex items-center justify-center relative ">
            <div className=" w-[80vw] scale-90 hover:scale-100 transition-all duration-300">
              <img src={sdlc} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sdlc;
