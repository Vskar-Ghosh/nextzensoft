/** @format */

import React from "react";
import { whatWeDoWave, laptop1 } from "../../assets/index.js";

const WhatWeDo = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${whatWeDoWave})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
    backgroundPosition: "center",
  };

  const laptopImageStyle = {
    width: "100%", // Adjust the width as needed (e.g., 80%)
    height: "100%",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white"
      style={backgroundImageStyle}>
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-4 mx-5">
        <img
          className="w-full h-full"
          src={laptop1}
          alt="Laptop"
          style={laptopImageStyle}
        />
      </div>
      {/* End big image div */}
      <div className="w-full md:w-1/2 lg:w-2/3 xl:w-2/3 p-4 mx-5">
        <h1 className="font-adventPro text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
          What We Do
        </h1>
        <p className="text-[#FFFFFF] font-adventPro text-base md:text-xl mt-5 md:mt-10">
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
