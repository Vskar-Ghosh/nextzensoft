/** @format */

import React from "react";

import {
  WCD_Busi,
  WCD_Qality,
  WCD_WebDev,
  WCD_MobDev,
} from "../../assets/index";

const OurExperties = () => {
  return (
    <div className="w-full flex flex-col gap-10 justify-center items-center max-sm:mx-3 sm:mx-3">
      <h1 className="text-6xl font-abelPro font-bold text-coralred">
        Our core{" "}
        <span className="text-6xl font-abelPro font-bold text-[#241468]">
          expertise
        </span>{" "}
      </h1>
      <div className="w-full flex flex-row ms:flex-col max-sm:flex-col sm:gap-2 max-sm:gap-0 gap-10 justify-center items-center">
        <div className="w-[300px] h-[400px] flex flex-col justify-start p-3">
          <img
            src={WCD_Busi}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Business analysis & Product design
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Scope defining
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Prototyping
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              UX review
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              UX/UI Product Design
            </p>
          </div>
        </div>{" "}
        {/* end 1sst */}
        <div className="w-[300px] h-[400px] flex flex-col justify-start p-3">
          <img
            src={WCD_Qality}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Quality Assurance and Control
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Manual testing
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Automated testing
            </p>
          </div>
        </div>{" "}
        {/* end 2nd */}
        <div className="w-[300px] h-[400px] flex flex-col justify-start p-3">
          <img
            src={WCD_WebDev}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Web Development
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Java JavaScript C#
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              NodeJs Laravel SpringBoot Django
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              MySql SqlLite MongoDB DynamoDB
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              ReactJs VueJs Angular
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Blockchain
            </p>
          </div>
        </div>{" "}
        {/* end of 3rd */}
        <div className="w-[300px] h-[400px] flex flex-col justify-start ">
          <img
            src={WCD_MobDev}
            alt="Logo"
            width={110}
            height={110}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold  mb-2 ">
            Mobile Development
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Android (Native )
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              iOS (Native)
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-base text-[#241468] font-abelPro font-semibold mx-2 ">
              Flutter (Hybrid)
            </p>
          </div>
        </div>{" "}
        {/* end 4th */}
      </div>
      {/* experties */}
    </div>
  );
};

export default OurExperties;
