/** @format */

import React from "react";
import {
  WCD_Busi,
  WCD_Qality,
  WCD_WebDev,
  WCD_MobDev,
} from "../../assets/index";
const ClientWeServe = () => {
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
            Clinics & Hospitals
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Legacy software modernization
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Patient management
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Case management
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              BI solutions for operational analytics
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
            Pharmacies & Drugstores
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Inventory management
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Prescription management
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Workflows and document management automation
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Software integration with healthcare systems
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Insurers, payment gateways etc.
            </p>
          </div>
        </div>
        {/* end 2nd */}
        <div className="w-[320px] h-[420px] flex flex-col justify-start p-3">
          <img
            src={WCD_WebDev}
            alt="Logo"
            width={120}
            height={120}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold mt-3 mb-2 ">
            Medical Equipment Manufacturers
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Smart device and IoT apps
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              CPQ, CRM, ERP solutions
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Logistics and transportation solutions
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Facility management.
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Including temperature-sensitive production
            </p>
          </div>
        </div>{" "}
        {/* end of 3rd */}
        <div className="w-[320px] h-[420px] flex flex-col justify-start ">
          <img
            src={WCD_MobDev}
            alt="Logo"
            width={110}
            height={110}
            className="p-2 "
          />

          <h1 className="text-2xl text-coralred font-abelPro font-bold  mb-2 ">
            HealthTech Startups
          </h1>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              PoC and MVP development for startups
            </p>
          </div>
          <div className="  flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Project rescue: code refactoring & architectural
            </p>
          </div>
          <div className="flex flex-row   items-center">
            <div className="w-2 h-2 bg-coralred rounded-full"></div>
            <p className="text-[14px] text-[#241468] font-abelPro font-semibold mx-2 ">
              Full-featured new digital product development
            </p>
          </div>
        </div>{" "}
        {/* end 4th */}
      </div>
      {/* experties */}
    </div>
  );
};

export default ClientWeServe;
