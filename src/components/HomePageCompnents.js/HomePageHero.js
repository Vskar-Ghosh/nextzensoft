/** @format */

import React from "react";
import "./HomePage.css";

const HomePageHero = () => {
  return (
    <div>
      <div className="landingpage">
        <div className="hero-section">
          <div className="hero-text">
            <h1>NextGen Soft - Your trusted Software Development Partner</h1>
            <p className="hero-text-p">
              We're here to accompany you all along the road from an MVP to
              asuccssfull product stage or wherever your business goals and
              ambtions will take you.
            </p>
          </div>
          <div className="wave">
            <svg viewBox="0 0 1440 320">
              <path
                fill="#EE7E24"
                fillOpacity=".9"
                d="M0,128L60,106.7C120,85,240,43,360,69.3C480,96,600,192,720,202.7C840,213,960,139,1080,101.3C1200,64,1320,64,1380,64L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageHero;
