/** @format */

import React from "react";
import { whatWeDoWave, laptop1 } from "../../assets/index.js";

const WhatWeDo = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${whatWeDoWave})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: " 100% auto",
    backgroundPosition: "center",
  };

  // const laptopImageStyle = {
  //   width: "100%", // Adjust the width as needed (e.g., 80%)
  //   height: "100%",
  // };

  return (
    <div
      className=" min-w-full max-h-[70vh] flex items-center justify-center text-white mt-20"
      style={backgroundImageStyle}
    >
      <div className="w-full h-full md:w-1/2 md:h-1/2 lg:w-1/2 lg:h-1/2 xl:w-1/3 xl:h-1/3 p-4 mx-5">
        <img
          className=" mt-10 min-w-[60vw] min-h-[60vh] drop-shadow-[0px_30px_0px_rgba(0,0,0,.06)]"
          src={laptop1}
          alt="Laptop"
        />
      </div>
      {/* End big image div */}
      <div className="w-full max-h-[50%] p-4 mx-5 relative">
        <h1 className="font-adventPro text-2xl md:text-3xl lg:text-2xl xl:text-sm">
          What We Do
        </h1>
        <p className="text-[#FFFFFF] font-adventPro text-base md:text-lg xl:text-sm mt-2 md:mt-4">
          We build software development teams that grow with our clients, from
          the early stages to whatever they aspire to be. Our expertise includes
          front-end, backend, database, and server solutions for mobile, web,
          and desktop applications. Our purpose is to provide our clients with
          expert guidance and to build software vital to their organizations.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
