/** @format */

import React from "react";

const WhatWeCanDo = () => {
  return (
    <div className="w-[75vw] py-3 p-10 flex flex-row max-xl:flex-row xl:flex-row lg:flex-row  max-sm:flex-col md:flex-col sm:flex-col justify-center mx-auto sm:justify-center items-center mb-7 shadow-2xl">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <h2 className="text-2xl xl:text-3xl lg:text-2xl md:text-1xl sm:xl max-sm:text-xl text-[#241468] font-abelPro font-bold ">
          What We Can Do
        </h2>
        <h1 className="text-2xl xl:text-3xl lg:text-2xl md:text-1xl sm:xl max-sm:text-xl text-coralred font-abelPro">
          Offered{" "}
          <span className="text-2xl xl:text-3xl lg:text-2xl md:text-1xl sm:xl max-sm:text-xltext-[#241468] font-abelPro">
            Services
          </span>{" "}
        </h1>
      </div>
      <div className="w-full flex flex-col xl:flex-col lg:flex-col md:flex-col  justify-center items-center p-5 space-y-3 sm:space-y-0 sm:flex-col sm:gap-3">
        <h3 className="whatWwcanParagrap">
          High-quality applications for a wide array of niches
        </h3>
        <h3 className="whatWwcanParagrap">
          Attracting a larger user base & increasing business impact
        </h3>
        <h3 className="whatWwcanParagrap">
          High standard functionality & features
        </h3>
        <h3 className="whatWwcanParagrap">
          Enhancing visual appeal & rich user interface
        </h3>
        <h3 className="whatWwcanParagrap">
          Cross-platform development for mobile apps
        </h3>
        <h3 className="whatWwcanParagrap">
          Variety of app choices from native, web & hybrid
        </h3>
        <h3 className="whatWwcanParagrap">Complete operating system support</h3>
      </div>
    </div>
  );
};

export default WhatWeCanDo;
