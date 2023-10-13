/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { workArrowImg } from "../../assets/index";
import TechBackend from "./TechBackend";

const TechnoloweUsed = () => {
  const [backEnd, setBacend] = useState(true);
  const [frontEnd, setFrontend] = useState(false);
  const [desktop, setdesktop] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [database, setdatabase] = useState(false);
  const [cloud, setcloud] = useState(false);

  return (
    <section className="w-full  py-10 flex flex-row lg:flex-row xl:flex-row max-xl:flex-row md:flex-col sm:flex-col max-sm:flex-col   gap-5  justify-center items-center mt-10">
      <div className="w-full max-w-xl sm:w-full lg:w-full flex flex-col justify-center items-center gap-y-3 py-10 p-5">
        <button className="bg-[#241468] text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4">
          Backend Technologies
          <img
            src={workArrowImg}
            width={60}
            height={60}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button className="bg-[#241468] text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4">
          Backend Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button className="bg-[#241468] text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4">
          Backend Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button className="bg-[#241468] text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4">
          Backend Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button className="bg-[#241468] text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4">
          Backend Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button className="bg-[#241468] text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4">
          Backend Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
      </div>
      {/* end */}
      <div>
        {" "}
        <TechBackend />
      </div>
    </section>
  );
};

export default TechnoloweUsed;
