/** @format */

import React, { useState } from "react";
import { motion } from "framer-motion";
import { workArrowImg } from "../../assets/index";
import TechBackend from "./TechBackend";
import TechFontEnd from "./TechFontEnd";
import TechDesktop from "./TechDesktop";
import TechMobile from "./TechMobile";
import TechDatabase from "./TechDatabase";
import TechCloud from "./TechCloud";

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
        <button
          onClick={() => {
            setBacend(true);
            setFrontend(false);
            setdesktop(false);
            setmobile(false);
            setdatabase(false);
            setcloud(false);
          }}
          className={`${
            backEnd ? "bg-coralred" : "bg-[#241468]"
          } text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4`}>
          Backend Technologies
          <img
            src={workArrowImg}
            width={60}
            height={60}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button
          onClick={() => {
            setBacend(false);
            setFrontend(true);
            setdesktop(false);
            setmobile(false);
            setdatabase(false);
            setcloud(false);
          }}
          className={`${
            frontEnd ? "bg-coralred" : "bg-[#241468]"
          } text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4`}>
          Frontend Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button
          onClick={() => {
            setBacend(false);
            setFrontend(false);
            setdesktop(true);
            setmobile(false);
            setdatabase(false);
            setcloud(false);
          }}
          className={`${
            desktop ? "bg-coralred" : "bg-[#241468]"
          } text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4`}>
          Desktop Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button
          onClick={() => {
            setBacend(false);
            setFrontend(false);
            setdesktop(false);
            setmobile(true);
            setdatabase(false);
            setcloud(false);
          }}
          className={`${
            mobile ? "bg-coralred" : "bg-[#241468]"
          } text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4`}>
          Mobile Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button
          onClick={() => {
            setBacend(false);
            setFrontend(false);
            setdesktop(false);
            setmobile(false);
            setdatabase(true);
            setcloud(false);
          }}
          className={`${
            database ? "bg-coralred" : "bg-[#241468]"
          } text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4`}>
          Database Technologies
          <img
            src={workArrowImg}
            width={40}
            height={40}
            alt="Arrow"
            className="ml-2 w-4 h-4"
          />
        </button>
        <button
          onClick={() => {
            setBacend(false);
            setFrontend(false);
            setdesktop(false);
            setmobile(false);
            setdatabase(false);
            setcloud(true);
          }}
          className={`${
            cloud ? "bg-coralred" : "bg-[#241468]"
          } text-white py-3 px-5 rounded w-full flex justify-between items-center mx-4`}>
          Cloud Technologies
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
        {backEnd && <TechBackend />}
        {frontEnd && <TechFontEnd />}
        {desktop && <TechDesktop />}
        {mobile && <TechMobile />}
        {database && <TechDatabase />}
        {cloud && <TechCloud />}
      </div>
    </section>
  );
};

export default TechnoloweUsed;
