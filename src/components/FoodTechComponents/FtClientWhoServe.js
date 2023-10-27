/** @format */

import React from "react";
import {
  WCD_Busi,
  WCD_Qality,
  WCD_WebDev,
  WCD_MobDev,
} from "../../assets/index";

const FtClientWhoServe = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center max-sm:mx-3 sm:mx-3">
      <h1 className="text-6xl font-abelPro font-bold text-coralred">
        Clients We{" "}
        <span className="text-6xl font-abelPro font-bold text-[#241468]">
          Serve
        </span>{" "}
      </h1>
      <div className="w-full flex flex-row ms:flex-col max-sm:flex-col sm:gap-2 max-sm:gap-0 gap-10 justify-center items-center">
        <div className="w-[320px] h-[420px] flex flex-col justify-start p-3">
          <img
            src={WCD_Busi}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Foodtech Startup
          </h1>
          <div className="flex flex-row justify-start  items-center">
            <p className="text-[16px] text-[#241468] font-abelPro  ">
              Have a revolutionary idea? We are eager to create a from scratch
              or perfect your existing software.
            </p>
          </div>
        </div>{" "}
        {/* end 1sst */}
        <div className="w-[320px] h-[420px] flex flex-col justify-start p-3">
          <img
            src={WCD_Qality}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Foodtech B2B Company
          </h1>
          <div className="flex flex-row justify-start  items-center">
            <p className="text-[16px] text-[#241468] font-abelPro  ">
              We gather a dedicate team to take care of every development stepp
              and while saving bugdet.
            </p>
            <div />
          </div>
        </div>
        {/* end 2nd */}
        <div className="w-[320px] h-[420px] flex flex-col justify-start p-3">
          <img
            src={WCD_MobDev}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Restaurant
          </h1>
          <div className="flex flex-row justify-start  items-center">
            <p className="text-[16px] text-[#241468] font-abelPro  ">
              We can build an application that allows your customers to read the
              menu and specials as well as book tables. This way they can also
              send feedback and recommendations—all while on the go!
            </p>
            <div />
          </div>
        </div>
        {/* end of 3rd */}
        <div className="w-[320px] h-[420px] flex flex-col justify-start p-3">
          <img
            src={WCD_WebDev}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Food Retail
          </h1>
          <div className="flex flex-row justify-start  items-center">
            <p className="text-[16px] text-[#241468] font-abelPro  ">
              We can build an application that allows your customers to read the
              menu and specials as well as book tables. This way they can also
              send feedback and recommendations—all while on the go!
            </p>
            <div />
          </div>
        </div>
        {/* end 4th */}
      </div>
      {/* experties */}
    </div>
  );
};

export default FtClientWhoServe;
