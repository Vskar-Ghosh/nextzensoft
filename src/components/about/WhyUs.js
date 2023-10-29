/** @format */

import React from "react";
import { fintech } from "../../assets/index.js";

const WhyUs = () => {
  return (
    <section className="w-full  py-5 mb-5 mt-5 items-center">
      <div className="w-full flex flex-col ">
        <div className="p-5 flex justify-center">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Why{" "}
            <span className="text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Us ?
            </span>
          </h1>
        </div>
        {/* end h1= div ==> */}
        <div className="w-full flex flex-wrap justify-center gap-5">
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-2 hover:bg-[#EE7E2499] transition-all duration-200 delay-100 ">
            <img
              src={fintech}
              alt="Icon"
              height={50}
              width={50}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 ">
              Result-oriented
            </h2>
            <p className="font-abelPro text-[#999999]">
              For our company, the only indicator of the project’s success is
              the achievement of the goals and objectives set by the client. Due
              to high-quality project management and a team of IT talents, we
              carry out our work as quickly and efficiently as possible.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-2 hover:bg-[#EE7E2499] transition-all duration-200 delay-100 ">
            <img
              src={fintech}
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 mt-3">
              Flexible
            </h2>
            <p className="font-abelPro text-[#999999]">
              Our team already numbers 1500+ highly qualified IT professionals.
              It allows us to quickly adapt to the needs of our clients. We
              provide rapid team ramp-up and easily scale it up and down
              depending on the changing conditions of the project.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-2 hover:bg-[#EE7E2499] transition-all duration-200 delay-100 ">
            <img
              src={fintech}
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 mt-3">
              Transparent
            </h2>
            <p className="font-abelPro text-[#999999]">
              Our cooperation with clients is always open and honest. We ensure
              regular communication, an established daily reporting system, and
              tracking tools according to the client’s preferences. Thus, our
              clients can control all possible aspects of projects.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-2 hover:bg-[#EE7E2499] transition-all duration-200 delay-100 ">
            <img
              src={fintech}
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 mt-3">
              Experienced
            </h2>
            <p className="font-abelPro text-[#999999]">
              Innowise Group has established well-managed processes to deliver
              software development services. They are based on the best examples
              of IT outsourcing and can be easily aligned to the specifics of
              customers and their projects.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-2 hover:bg-[#EE7E2499] transition-all duration-200 delay-100 ">
            <img
              src={fintech}
              alt="Icon"
              height={50}
              width={50}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 ">
              Top Quality Engineers
            </h2>
            <p className="font-abelPro text-[#999999]">
              A decade of experience in custom software development. We are
              focused on bringing value to our customers and on helping them
              succeed in the marketplace.
            </p>
          </div>
          {/* end */}

          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-2 hover:bg-[#EE7E2499] transition-all duration-200 delay-100 ">
            <img
              src={fintech}
              alt="Icon"
              height={50}
              width={50}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 hover:text-coralred ">
              End to End Management
            </h2>
            <p className="font-abelPro text-[#999999]">
              A decade of experience in custom software development. We are
              focused on bringing value to our customers and on helping them
              succeed in the marketplace.
            </p>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
