/** @format */

import React, { useState } from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { RiStarFill } from "react-icons/ri";
import ClientReviewTitle from "../layouts/ClientReviewTitle.js";
import {
  salimTest,
  ibnuTest,
  sabbirTest,
  testimonialOne,
  testimonialTwo,
  quote,
} from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#1c1b1a] hover:bg-blue-600 duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-inner cursor-pointer z-10 mr-4 mt-2"
      onClick={onClick}>
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#1c1b1a] hover:bg-blue-600 duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-inner cursor-pointer z-10 mr-4 mt-2"
      onClick={onClick}>
      <HiArrowLeft />
    </div>
  );
}

const ClientReview = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}>
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }></div>
    ),
  };

  return (
    <section className="w-full py-10 md:py-20 border-b-[1px] shadow-inner border-[#ffff]">
      <div>
        <ClientReviewTitle Title="" description="" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Slide 1 */}
          <div className="w-full">
            <div className="w-full md:flex justify-between">
              <div className="w-full md:w-[35%] bg-[#dcdfea] hover:bg-slate-400 p-4 md:p-8 rounded-lg shadow-yellow-200 flex flex-col justify-center gap-4">
                <img
                  className="h-72 md:h-96 rounded-lg object-cover"
                  src={salimTest}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Md Salim Hossain</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[65%] flex flex-col justify-between ml-5">
                <img className="w-16 md:w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-5 md:py-10 bg-orange-100 rounded-lg shadow-inner p-4 md:p-8 gap-4">
                  <div className="flex justify-between items-center py-3 md:py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        Travel Mobile App Design
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="w-full">
            <div className="w-full md:flex justify-between">
              <div className="w-full md:w-[35%] bg-[#dcdfea] hover:bg-slate-400 p-4 md:p-8 rounded-lg shadow-yellow-200 flex flex-col justify-center gap-4">
                <img
                  className="h-72 md:h-96 rounded-lg object-cover"
                  src={sabbirTest}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Sabbir Rahman</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[65%] flex flex-col justify-between ml-5">
                <img className="w-16 md:w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-5 md:py-10 bg-orange-100 rounded-lg shadow-inner p-4 md:p-8 gap-4">
                  <div className="flex justify-between items-center py-3 md:py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        Travel Mobile App Design
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="w-full">
            <div className="w-full md:flex justify-between">
              <div className="w-full md:w-[35%] bg-[#dcdfea] hover:bg-slate-400 p-4 md:p-8 rounded-lg shadow-yellow-200 flex flex-col justify-center gap-4">
                <img
                  className="h-72 md:h-96 rounded-lg object-cover"
                  src={ibnuTest}
                  alt="testimonialThree"
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Bound - Trolola
                  </p>
                  <h3 className="text-2xl font-bold">Ibnul Hossain</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[65%] flex flex-col justify-between ml-5">
                <img className="w-16 md:w-[20%]" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-5 md:py-10 bg-orange-100 rounded-lg shadow-inner p-4 md:p-8 gap-4">
                  <div className="flex justify-between items-center py-3 md:py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-2xl font-medium tracking-wide">
                        Travel Mobile App Design
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    dolorum, eos natus ipsum numquam veniam officia
                    necessitatibus ratione quos debitis exercitationem
                    repudiandae facilis id neque nihil accusantium perspiciatis
                    repellat? Iste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ClientReview;
