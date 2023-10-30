/** @format */

import React from "react";
import "./HomePage.css";
import Wave from "react-wavify";

const HomePageHero = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-end items-end bg-homePageBg mb-10">
      <div className="w-full relative">
        <Wave
          fill="#EE7E24"
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
            NextGen Soft - Your trusted Software Development Partner
          </h1>
          <p className="font-abelPro text-[#FFFFFF] leading-normal text-center sm:text-left">
            We're here to accompany you all along the road from an MVP to
            asuccssfull product stage or wherever your business goals and
            ambtions will take you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
