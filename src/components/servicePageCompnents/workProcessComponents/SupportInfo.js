/** @format */

import React from "react";

const SupportInfo = () => {
  return (
    <div className="w-full flex flex-col md:flex-row xl:flex-row sm:flex-col gap-10 items-center p-3">
      <div className="w-full md:w-3/4 xl:w-3/4 p-3">
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          We believe it’s better to double-check everything from scratch, so we
          go through the pre-launch checklist to ensure the application is
          fully-functioning and ready for deployment.
          <br />
          <span>
            {" "}
            Then we submit and upload your product to the AppStore or Google
            Play. Then we submit and upload your product to the AppStore or
            Google Play.
          </span>
        </p>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 sm:w-full sm:mx-5 flex flex-col p-3 bg-[#C1250399] shadow-2xl shadow-orange-700 rounded-md opacity-100 skew-y-12 transform-gpu">
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Timeframe
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-[#5C5C5C]">
          24/7
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Deliverables
        </h1>
        <p className="font-abelPro font-bold text-sm md:text-base xl:text-base text-[#5C5C5C]">
          Fixes and improvements
        </p>

        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Who's Involved
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-[#5C5C5C]">
          Technical Manager
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-[#5C5C5C]">
          Tech Lead
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-[#5C5C5C]">
          Designer
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-[#5C5C5C]">
          DevOps
        </p>
      </div>
    </div>
  );
};

export default SupportInfo;
