/** @format */

import React from "react";
import { whatWeDo } from "../../assets/index.js";

const WhatWeDo = () => {
  // const laptopImageStyle = {
  //   width: "100%", // Adjust the width as needed (e.g., 80%)
  //   height: "100%",
  // };

  return (
    <div className=" min-w-full md:max-h-[70vh] flex  items-center justify-between text-white mt-32">
      <img src={whatWeDo} alt="whatwedo" />

      {/* End big image div */}
    </div>
  );
};

export default WhatWeDo;
