/** @format */

import React from "react";

const DevelopmentInfo = () => {
  return (
    <div className="w-full flex flex-col md:flex-row xl:flex-row sm:flex-col gap-10 items-center p-3">
      <div className="w-full md:w-3/4 xl:w-3/4 p-3">
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          Here at Brocoders, we work shoulder-to-shoulder with you in an open
          manner throughout the entire application development life-cycle. To
          cover all details and ensure the completeness of the requirements
          elicitation, we start from a first call and meetings with you.
        </p>
        <h2 className="text-black text-xl font-abelPro font-bold mt-3">
          Project management
        </h2>
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          We involve experienced project managers to take care of every step and
          the entire technological process, so you can pay maximum attention to
          your strategic and business goals. Based on years of practice, we’ve
          come up with a robust and well-established workflow, which proved to
          be highly effective and client-oriented.
        </p>
        <h2 className="text-black text-xl font-abelPro font-bold mt-3">
          Transparent work process
        </h2>
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          To ensure a project’s safety, we apply the latest security and
          agile-driven practices, as well as provide transparent reports upon
          your request. Besides, you can come to our office any time to work
          with our team and look at the whole work process yourself. Moreover,
          we can strengthen a project by applying extra resources once you
          request to do so.
        </p>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 sm:w-full sm:mx-5 flex flex-col p-3 bg-[#eb3a3e] shadow-2xl shadow-orange-700 rounded-md opacity-100 skew-y-12 transform-gpu ">
        <h1 className="text-2xl font-abelPro font-bold text-[#193E65] mb-1">
          Timeframe
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-deepBlue">
          Depends on a project
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-deepBlue mb-1">
          Deliverables
        </h1>
        <p className="font-abelPro font-bold text-sm md:text-base xl:text-base text-deepBlue">
          Environment setup
        </p>
        <p className="font-abelPro font-bold text-sm md:text-base xl:text-base text-deepBlue">
          Staging and production servers
        </p>
        <p className="font-abelPro font-bold text-sm md:text-base xl:text-base text-deepBlue">
          Intermediate releases
        </p>
        <p className="font-abelPro font-bold text-sm md:text-base xl:text-base text-deepBlue">
          Weekly reports
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-deepBlue  mb-1">
          Who's Involved
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-deepBlue">
          Business analyst
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-deepBlue">
          Project manager
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-deepBlue">
          Development team
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-deepBlue">
          QA team
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-deepBlue">
          DevOps
        </p>
      </div>
    </div>
  );
};

export default DevelopmentInfo;
