/** @format */

import React from "react";
import { fintech } from "../../assets/index.js";

const OurServices = () => {
  return (
    <section className="w-full  py-5 mt-20 mb-5 items-center ">
      <div className="w-full flex flex-col ">
        <div className="p-5 flex justify-center">
          <h1 className="text-5xl text-coralred font-abelPro font-bold leading-normal">
            Our{" "}
            <span className="text-5xl text-[#193E65] font-abelPro font-bold leading-normal">
              Services
            </span>
          </h1>
        </div>
        {/* end h1= div ==> */}
        <div className="w-full flex flex-wrap justify-center gap-5">
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-1 hover:bg-[#EE7E2499] ">
            <img
              src={fintech}
              alt="Icon"
              height={50}
              width={50}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 ">
              Software Development
            </h2>
            <p className="font-abelPro text-[#999999]">
              Nextzensoft is your trusted partner for cutting-edge software
              development solutions. With a passion for innovation and a team of
              highly skilled developers, we specialize in crafting custom
              software tailored to your unique needs.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-1 hover:bg-[#EE7E2499] ">
            <img
              src={fintech}
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 mt-3">
              Web App Development
            </h2>
            <p className="font-abelPro text-[#999999]">
              Powered with 8+ years of experience in web design and development,
              the Brocoders team treats our clients as partners, not just
              customers: we trust in your ideas and know how to translate your
              vision into leading-edge web applications and personalized
              websites.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-1 hover:bg-[#EE7E2499] ">
            <img
              src={fintech}
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 mt-3">
              Mobile App development
            </h2>
            <p className="font-abelPro text-[#999999]">
              Bring your products and services closer to their users by
              implementing a custom mobile application developed with your
              business objectives in mind. We know how to do this in a fast and
              cost-efficient way for both iOS and Android, without compromising
              quality and usability.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-1 hover:bg-[#EE7E2499] ">
            <img
              src={fintech}
              alt="Icon"
              height={60}
              width={60}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 mt-3">
              SaS Development
            </h2>
            <p className="font-abelPro text-[#999999]">
              Innowise Group has established well-managed processes to deliver
              software development services. They are based on the best examples
              of IT outsourcing and can be easily aligned to the specifics of
              customers and their projects.
            </p>
          </div>
          {/* end */}
          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-1 hover:bg-[#EE7E2499] ">
            <img
              src={fintech}
              alt="Icon"
              height={50}
              width={50}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 ">
              Digital Transformations
            </h2>
            <p className="font-abelPro text-[#999999]">
              Leverage the full power of top-notch digital technologies to boost
              your efficiency and workflow, reduce unnecessary costs and acquire
              robust security.
            </p>
          </div>
          {/* end */}

          <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 h-[280px] rounded-xl shadow-2xl p-3 hover:translate-y-1 hover:bg-[#EE7E2499] ">
            <img
              src={fintech}
              alt="Icon"
              height={50}
              width={50}
              className="rounded-full bg-coralred"
            />
            <h2 className="font-abelPro text-2xl text-[#193E65] font-bold p-2 hover:text-coralred ">
              DevOps and Cloud Services
            </h2>
            <p className="font-abelPro text-[#999999]">
              Reinforce cooperation between the development, engineering,
              security, and management teams to optimize your software
              development life cycle (SDLC) with smooth and well-structured
              DevOps by Brocoders.
            </p>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
