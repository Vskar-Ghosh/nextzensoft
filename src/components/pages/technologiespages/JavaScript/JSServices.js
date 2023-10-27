/** @format */

import React from "react";
import {
  jsLess,
  jsCompat,
  jsFeed,
  jsIncresd,
  jsInterface,
  jsTest,
} from "../../../../assets/index";

const JSServices = () => {
  return (
    <div className="flex flex-col justify-center items-center p-5 bg-white">
      <h1 className="text-6xl text-coralred font-abelPro font-bold mt-10 mb-10">
        Advantages of{" "}
        <span className="text-6xl text-deepBlue font-abelPro font-bold mt-10 mb-10">
          {" "}
          JavaScript
        </span>
      </h1>
      <div className="grid max-xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1   gap-10 mx-5">
        <div className=" w-[350px] h-[250px] flex flex-col bg-white rounded-lg shadow-xl p-2 hover:text-white  hover:bg-orange-500">
          <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-xl bg-coralred p-3 ">
            <img src={jsLess} alt="" className="" />
          </div>
          <h1 className="text-2xl text-black font-abelPro font-semibold mt-3 hover:text-white">
            Less server interaction
          </h1>
          <p className="text-lg text-black font-abelPro mt-3  hover:text-white ">
            You can validate user input before sending the page off to the
            server. This saves server traffic, which means less load on your
            server.
          </p>
        </div>
        {/* item1 */}
        <div className=" w-[350px] h-[250px] flex flex-col bg-white rounded-lg shadow-xl p-2 hover:text-white  hover:bg-orange-500">
          <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-xl bg-coralred p-3 ">
            <img src={jsFeed} alt="" className="" />
          </div>
          <h1 className="text-2xl text-black font-abelPro font-semibold mt-3 hover:text-white">
            Immediate feedback to the visitors
          </h1>
          <p className="text-lg text-black font-abelPro mt-3  hover:text-white ">
            They don't have to wait for a page reload to see if they have
            forgotten to enter something.
          </p>
        </div>
        {/* item2 */}
        <div className=" w-[350px] h-[250px] flex flex-col bg-white rounded-lg shadow-xl p-2 hover:text-white  hover:bg-orange-500">
          <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-xl bg-coralred p-3 ">
            <img src={jsIncresd} alt="" className="" />
          </div>
          <h1 className="text-2xl text-black font-abelPro font-semibold mt-3 hover:text-white">
            Increased interactivity
          </h1>
          <p className="text-lg text-black font-abelPro mt-3  hover:text-white ">
            You can create interfaces that react when the user hovers over them
            with a mouse or activates them via the keyboard.
          </p>
        </div>
        {/* item3 */}
        <div className=" w-[350px] h-[250px] flex flex-col bg-white rounded-lg shadow-xl p-2 hover:text-white  hover:bg-orange-500">
          <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-xl bg-coralred p-3 ">
            <img src={jsInterface} alt="" className="" />
          </div>
          <h1 className="text-2xl text-black font-abelPro font-semibold mt-3 hover:text-white">
            Richer interfaces
          </h1>
          <p className="text-lg text-black font-abelPro mt-3  hover:text-white ">
            You can use JavaScript to include such items as drag-and-drop
            components and sliders to give a Rich Interface to your site
            visitors.
          </p>
        </div>
        {/* item4 */}
        <div className=" w-[350px] h-[250px] flex flex-col bg-white rounded-lg shadow-xl p-2 hover:text-white  hover:bg-orange-500">
          <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-xl bg-coralred p-3 ">
            <img src={jsTest} alt="" className="" />
          </div>
          <h1 className="text-2xl text-black font-abelPro font-semibold mt-3 hover:text-white">
            Easy to Debug and Test
          </h1>
          <p className="text-lg text-black font-abelPro mt-3  hover:text-white ">
            JavaScript code is interpreted line by line. The errors are
            indicated along with line number. It is very easy to find error in
            the code, correct it and test it gain.
          </p>
        </div>
        {/* item5 */}
        <div className=" w-[350px] h-[250px] flex flex-col bg-white rounded-lg shadow-xl p-2 hover:text-white  hover:bg-orange-500">
          <div className="w-[50px] h-[50px] flex flex-col justify-center items-center rounded-xl bg-coralred p-3 ">
            <img src={jsCompat} alt="" className="" />
          </div>
          <h1 className="text-2xl text-black font-abelPro font-semibold mt-3 hover:text-white">
            Browser Compatible
          </h1>
          <p className="text-lg text-black font-abelPro mt-3  hover:text-white ">
            The biggest advantages to a JavaScript having a ability to support
            all modern browser and produce the same result. JavaScript is
            platform independent language.
          </p>
        </div>
        {/* item6 */}
      </div>
      {/* end of holder */}
    </div>
  );
};

export default JSServices;
