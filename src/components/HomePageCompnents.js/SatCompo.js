/** @format */

import React from "react";
import {
  stategyIcon,
  technologyIcon,
  experienceIcon,
} from "../../assets/index.js";

const SatCompo = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 items-center justify-center p-4">
      {/* Whole div */}
      <div className="w-full md:w-auto mx-auto h-auto flex flex-col md:flex-row gap-5 justify-center p-4">
        {/* Card One */}
        <div className="w-full md:w-[350px] h-[300px] rounded-lg p-5">
          <h1 className="font-adventPro text-6xl text-[#193E65]">SAT</h1>
          <p className="text-[#848484] max-sm:text-[14px] max-sm:p-3 font-abelPro">
            We know digital transformation projects can be long and expensive
            but we aim to be different. Different means partnership,
            transparency, and impact. It means driving company-wide change and
            customer-centered design. Most importantly, it means delivery. We
            rigorously unlock value to bring you
          </p>
        </div>

        {/* Card Two */}
        <div className="w-full md:w-[350px] bg-white h-[250px] rounded-lg p-3 shadow-2xl">
          <div className="w-full flex flex-row justify-between p-4">
            <div>
              <h1 className="text-coralred font-adventPro text-4xl">
                <span className="text-7xl">S</span>trategy
              </h1>
            </div>
            <div>
              <img
                className="shadow-lg"
                src={stategyIcon}
                alt="Strategy Icon"
              />
            </div>
          </div>

          <p className="mt-10 max-sm:text-[14px] max-sm:p-3 font-abelPro ">
            Explore and verify what kinds of organizational change could deliver
            value most quickly.
          </p>
        </div>
      </div>

      {/* Card Three */}
      <div className="w-full md:w-auto mx-auto h-auto flex flex-col md:flex-row gap-10 justify-center p-5">
        {/* Card Two */}
        <div className="w-full md:w-[350px] bg-white h-[250px] rounded-lg p-3 shadow-2xl">
          <div className="w-full flex flex-row justify-between p-4">
            <div>
              <h1 className="text-coralred font-adventPro text-4xl">
                <span className="text-7xl">E</span>xperience
              </h1>
            </div>
            <div>
              <img
                className="shadow-lg"
                src={experienceIcon}
                alt="Experience Icon"
              />
            </div>
          </div>

          <p className="mt-10 max-sm:text-[14px] max-sm:p-3 font-abelPro">
            Explore and verify what kinds of organizational change could deliver
            value most quickly.
          </p>
        </div>

        {/* Card Three */}
        <div className="w-full md:w-[350px] bg-white h-[250px] rounded-lg p-3 shadow-2xl">
          <div className="w-full flex flex-row justify-between p-4">
            <div>
              <h1 className="text-coralred font-adventPro text-4xl">
                <span className="text-7xl">T</span>echnology
              </h1>
            </div>
            <div>
              <img
                className="shadow-lg"
                src={technologyIcon}
                alt="Technology Icon"
              />
            </div>
          </div>

          <p className="mt-10 max-sm:text-[14px] max-sm:p-3 font-abelPro">
            Explore and verify what kinds of organizational change could deliver
            value most quickly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SatCompo;
