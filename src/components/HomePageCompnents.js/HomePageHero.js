/** @format */

import React from "react";
import "./HomePage.css";
import Wave from "react-wavify";

const HomePageHero = () => {
  return (
    <div>
      <div className="landingpage">
        <div className="hero-section">
          <div className="hero-main">
            <div className="hero-text">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                NextGen Soft - Your trusted Software Development Partner
              </h1>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl hero-text-p">
                We're here to accompany you all along the road from an MVP to
                asuccssfull product stage or wherever your business goals and
                ambtions will take you.
              </p>
            </div>
            <div className="wave">
              <Wave
                className="anim-wave"
                fill="#EE7E24"
                fillOpacity=".7"
                paused={false}
                style={{ display: "flex" }}
                options={{
                  height: 30,
                  amplitude: 50,
                  speed: 0.2,
                  points: 3,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
