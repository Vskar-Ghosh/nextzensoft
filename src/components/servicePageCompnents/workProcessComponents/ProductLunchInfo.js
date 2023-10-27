/** @format */

import React from "react";

const ProductLunchInfo = () => {
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
      <div className="w-full md:w-1/4 xl:w-1/4 sm:w-full sm:mx-5 flex flex-col p-3 bg-[#C1250399] rounded-md shadow-2xl shadow-orange-700  opacity-100 skew-y-12 transform-gpu">
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Timeframe
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          About a week
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Deliverables
        </h1>
        <p className="font-abelPro font-bold text-sm md:text-base xl:text-base text-white">
          Final release
        </p>

        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Who's Involved
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Technical Manager
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Tech Lead
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Business analyst
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Designer
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          DevOps
        </p>
      </div>
    </div>
  );
};

export default ProductLunchInfo;
