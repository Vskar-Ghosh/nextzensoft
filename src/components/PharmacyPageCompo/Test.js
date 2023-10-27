/** @format */

import React from "react";

const Test = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-[500px] h-[600px] relative">
        <div className="w-full h-full bg-orange-300"></div>

        <div className="w-[50vw] h-[50vh] bg-green-300 opacity-50 absolute bottom-20 left-10 shadow-2xl rounded-2xl"></div>
      </div>
    </div>
  );
};

export default Test;
