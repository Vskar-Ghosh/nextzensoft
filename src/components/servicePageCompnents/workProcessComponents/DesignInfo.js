/** @format */

import React from "react";

const DesignInfo = () => {
  return (
    <div className="w-full flex flex-col md:flex-row xl:flex-row sm:flex-col gap-10 items-center p-3">
      <div className="w-full md:w-3/4 xl:w-3/4 p-3">
        <h2 className="text-black text-sm md:text-xl font-abelPro font-bold mt-3">
          Low-fidelity prototype
        </h2>
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          Based on gathered data and driven by the iterative development model,
          we identify the feature flow and prepare the wireframes along with a
          low-fidelity mobile app prototype.
        </p>
        <h2 className="text-black text-sm md:text-xl font-abelPro font-bold mt-3">
          Feature-based estimation
        </h2>
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          It’s crucial to evaluate the entire project and provide you with a
          clear vision of how much time and money the development process might
          take. That said, we use a feature decomposition to split the
          functionality into small parts, which can then be analyzed by our
          technical experts. Our clients have full access to all relevant data,
          so they can assess further steps, as well as present the budget to
          investors. Once it’s done, we adjust a toolset and a tech stack for
          the development stage.
        </p>
        <h2 className="text-black text-sm md:text-xl font-abelPro font-bold mt-3">
          Design
        </h2>
        <p className="text-[#848484] font-abelPro text-sm md:text-xl leading-normal">
          Our UI/UX designers have extensive experience in creating eye-catching
          and user-friendly mobile apps that proved to be remarkable solutions.
          We stick to Figma to design the UX/UI elements for our projects. If
          requested, we provide you with an interactive prototype, so that you
          can test the interface usability and leave your feedback.
        </p>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 sm:w-full sm:mx-5 flex flex-col p-3 bg-[#071e34] rounded-md opacity-90">
        <h1 className="text-2xl font-abelPro font-bold text-white mb-1">
          Timeframe
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          1 month
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-white mb-1">
          Deliverables
        </h1>
        <p className="font-abelPro  text-sm md:text-base xl:text-base text-white">
          Low-fidelity prototype in Figma
        </p>
        <p className="font-abelPro  text-sm md:text-base xl:text-base text-white">
          Feature-based estimation
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Feature decomposition
        </p>
        <p className="font-abelPro  text-sm md:text-base xl:text-base text-white">
          Graphic project in Figma
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Contract for development
        </p>
        <h1 className="text-2xl font-abelPro font-bold text-white mb-1">
          Who's Involved
        </h1>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Business analyst
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Project manager
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Designer
        </p>
        <p className="font-abelPro text-sm md:text-base xl:text-base text-white">
          Technical advisor
        </p>
      </div>
    </div>
  );
};

export default DesignInfo;
