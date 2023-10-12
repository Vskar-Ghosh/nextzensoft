/** @format */

import React from "react";

const DiscoveryInfo = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row md:flex-row gap-10 items-center p-3 ">
      <div className="w-full sm:w-[75vw] md:w-[75vw] h-full p-3 items-center">
        <p className="text-[#848484] font-abelPro text-base sm:text-xl leading-normal">
          Besides professional mobile consulting, we study your company’s
          business processes, match them to mobile app requirements or features
          you’d like to add, analyze competitors along with potential risks to
          end up with a robust development strategy. Either you are a startup
          that requires a mobile product, or a business that needs a new feature
          to be integrated into an existing solution, we are ready to evaluate
          your idea and provide expert advice.
        </p>
      </div>
      <div className="w-full sm:w-[15vw] md:w-[15vw] flex flex-col p-3 bg-yellow-200 rounded-md opacity-50">
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Timeframe
        </h1>
        <p className="font-abelPro text-base sm:text-base text-[#5C5C5C]">
          Up to 3 days
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Deliverables
        </h1>
        <p className="font-abelPro text-base sm:text-base text-[#5C5C5C]">
          Project proposal
        </p>
        <p className="font-abelPro text-base sm:text-base text-[#5C5C5C]">
          Contract for prototype deliver
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Who's Involved
        </h1>
        <p className="font-abelPro text-base sm:text-base text-[#5C5C5C]">
          Account manager
        </p>
        <p className="font-abelPro text-base sm:text-base text-[#5C5C5C]">
          Business analyst
        </p>
        <p className="font-abelPro text-base sm:text-base text-[#5C5C5C]">
          Marketing Manager
        </p>
      </div>
    </div>
  );
};

export default DiscoveryInfo;
