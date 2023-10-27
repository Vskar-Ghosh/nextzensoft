/** @format */

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { industries } from "../../constants";

import IndustryWeServeTitle from "../layouts/IndustryWeServeTitle.js";

const IndustryWeServe = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3, // Default: Show three items in each row
    speed: 800,
    rows: 1, // Display one row
    slidesPerRow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,

    responsive: [
      {
        breakpoint: 1280, // xl and max-xl
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm and max-sm
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full pt-20 py-10 pb-40 items-center  bg-gradient-to-r from-[#131f81] to-[#2546A7] ">
      <div className="mb-5 pb-10">
        <IndustryWeServeTitle Title="" description="" />
      </div>

      {/* cards from below */}
      <Slider {...settings} className="flex flex-row gap-4 mx-5">
        {industries.map((industry, index) => (
          <div key={index} className=" gap-5">
            <div className="space-y-2">
              <div className="mx-4">
                {/* Add margin to create a gap between columns */}
                <div className="flex flex-col items-center justify-center w-[150px] h-[150px] bg-gradient-to-tr hover:rotate-3 transition-transform from-blue-800 to-transparent rounded-lg mt-5 mb-2">
                  <img
                    src={industry.image}
                    height={60}
                    width={60}
                    alt="Icon"
                    className="w-[60px] h-[60px] text-white"
                  />

                  <h3 className="text-xl text-white font-abelPro font-semibold text-w mt-2 text-center">
                    {industry.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default IndustryWeServe;
