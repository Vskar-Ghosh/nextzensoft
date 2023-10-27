/** @format */

import React from "react";
import Wave from "react-wavify";

const ReactPage = () => {
  return (
    <section className="w-full  py-0 ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-servicesBg mb-10">
        <div className="w-full relative">
          <Wave
            fill="#039FC199"
            fillOpacity=".9"
            paused={false}
            style={{ display: "flex" }}
            options={{
              height: 30,
              amplitude: 40,
              speed: 0.3,
              points: 3,
            }}
            className="h-[50vh]"
          />
          <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full flex flex-col items-center sm:items-start justify-center sm:ml-20 text-[#FFFFFF]">
            <h1 className="text-4xl sm:text-5xl font-abelPro font-bold text-center sm:text-left">
              Our Services
            </h1>
            <p className="font-abelPro text-[#FFFFFF] leading-normal text-center sm:text-left">
              "At Nextzensoft, we specialize in crafting custom software
              solutions, mobile apps, and web applications. Our services
              encompass everything from UI/UX design to cybersecurity and
              ongoing support. With a commitment to innovation and quality, we
              help businesses streamline processes and engage customers
              effectively. Partner with us to unlock the potential of digital
              technology for your success."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReactPage;
