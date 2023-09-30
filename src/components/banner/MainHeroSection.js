/** @format */

import React from "react";
import { banner1, sabbirSir } from "../../assets/index.js";
import "./Hero.css";

const MainHeroSection = () => {
  return (
    <div className="hero-section">
      <div className="content-p">
        <div className="left-hero">
          <div className="left-hero-content">
            <h1>The Leading Software Company In Bangladesh</h1>
            <p>Think Software, Think NextZenSoft.</p>

            <button className="w-[150px] md:w-[170px] h-12 mt-4 bg-[#6556be] hover:bg-purple-500 text-white font-bold py-2 px-4 rounded">
              Explore More
            </button>
          </div>
        </div>

        <div className="right-hero">
          <img src={sabbirSir} alt="banner" />
        </div>
      </div>

      <div className="bottom-p"></div>
      <div className="relative bg-[#9e33f4]"></div>
    </div>
  );
};

export default MainHeroSection;
