/** @format */

import React from "react";
import {
  eduFlexibilit,
  eduPherpha,
  eduWonr,
  edutrans,
} from "../../assets/index";

const EduTopPirity = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3 mb-20">
      <div className="flex flex-col justify-start items-center mx-5">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-abelPro font-bold text-coralred leading-normal text-center">
          Our Top{" "}
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-abelPro font-bold text-deepBlue leading-normal">
            Priorities
          </span>
        </h1>
        <p className="w-full md:w-1/2 text-[#999999] text-xl text-center font-abelPro leading-normal mt-4">
          While working on our educational software development services, we
          offer you a number of guarantees that allow you to feel safe about the
          outcome of your project.
          <br />
          <span className="text-xl md:text-2xl lg:text-2xl xl:text-3xl text-deepBlue font-bold text-center font-abelPro leading-normal">
            Our top four priorities are:
          </span>
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row sm:flex-col lg:flex-row max-sm:flex-col gap-5 mt-10 justify-center items-center p-4">
        <div className="w-full md:w-[40%] sm:w-full lg:w-[40%] flex flex-col gap-5">
          <div className="w-full md:w-full flex flex-col md:flex-row sm:flex-col lg:flex-row max-sm:flex-col gap-5 p-3 ">
            <div className="w-full md:w-[25%] sm:w-full flex flex-col justify-center items-center">
              <img
                src={edutrans}
                alt=""
                height={70}
                width={90}
                className=" sm:h-36 sm:w-36 "
              />
            </div>
            <div className="w-full md:w-[75%] sm:w-full max-sm:w-full max-sm:mx-3 p-2">
              <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-abelPro font-bold mt-3">
                Transparency
              </h1>
              <p className="text-xl text-deepBlue font-abelPro">
                As we apply the same project management system as our customers.
              </p>
            </div>
          </div>

          <div className="w-full md:w-full flex flex-col md:flex-row sm:flex-col lg:flex-row max-sm:flex-col gap-5 p-3">
            <div className="w-full md:w-[25%] sm:w-full flex flex-col justify-center items-center">
              <img
                src={eduWonr}
                alt=""
                height={90}
                width={90}
                className=" sm:h-36 sm:w-36 "
              />
            </div>
            <div className="w-full md:w-[75%] sm:w-full max-sm:w-full max-sm:mx-3 p-2">
              <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-abelPro font-bold mt-3">
                Ownership
              </h1>
              <p className="text-xl text-deepBlue font-abelPro">
                Which makes us take full responsibility for the end result.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[40%] sm:w-full lg:w-[40%] flex flex-col gap-5">
          <div className="w-full md:w-full flex flex-col md:flex-row sm:flex-col lg:flex-row max-sm:flex-col gap-5 p-3">
            <div className="w-full md:w-[25%] sm:w-full flex flex-col justify-center items-center">
              <img
                src={eduPherpha}
                alt=""
                height={100}
                width={110}
                className=" sm:h-36 sm:w-36 "
              />
            </div>
            <div className="w-full md:w-[75%] sm:w-full max-sm:w-full max-sm:mx-3 p-2">
              <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-abelPro font-bold mt-3">
                High performance
              </h1>
              <p className="text-xl text-deepBlue font-abelPro">
                Which drives us to over-deliver and exceeds your expectations.
              </p>
            </div>
          </div>

          <div className="w-full md:w-full flex flex-col md:flex-row sm:flex-col lg:flex-row max-sm:flex-col gap-5 p-3">
            <div className="w-full md:w-[25%] sm:w-full flex flex-col justify-center items-center">
              <img
                src={eduFlexibilit}
                alt=""
                height={90}
                width={90}
                className=" sm:h-36 sm:w-36 "
              />
            </div>
            <div className="w-full md:w-[75%] sm:w-full max-sm:w-full max-sm:mx-3 p-2">
              <h1 className="text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-abelPro font-bold mt-3">
                Flexibility
              </h1>
              <p className="text-xl text-deepBlue font-abelPro">
                As we are prepared for any requirements changes in the middle of
                the project and are always ready to adapt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EduTopPirity;
