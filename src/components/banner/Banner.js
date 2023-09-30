/** @format */

import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import VideoBanner from "./VideoBanner";

import BannerCarousel from "./BannerCarousel.js";
import { countries } from "./Data.js";
import MainHeroSection from "./MainHeroSection";

const Banner = () => {
  return (
    <section className="w-full   items-center relative">
      {/* <video
        src={aboutPageVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          zIndex: -1,
        }}
      /> */}
      <div className="w-full">
        <MainHeroSection />
      </div>

      <div className="w-full pt-6 md:pt-10 pb-12 md:pb-20 lg:pb-32 flex flex-col md:flex-row gap-6 lg:gap-0 justify-center items-center font-titleFont">
        <div className="md:w-1/2 flex flex-col items-center">
          <LeftBanner />
        </div>
        <div className="md:w-1/2 flex flex-col items-center">
          <VideoBanner />
        </div>
      </div>
    </section>
  );
};

export default Banner;
