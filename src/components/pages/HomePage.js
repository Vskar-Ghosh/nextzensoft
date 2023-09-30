/** @format */

import React from "react";
import BannerCarousel from "../banner/BannerCarousel.js";
import { countries } from "../banner/Data.js";
import Banner from "../banner/Banner.js";
import Features from "../features/Features.js";
import Projects from "../Projects/projects.js";
import Solutions from "../solutions/Solutions.js";
import ClientReview from "../clientreview/ClientReview.js";
import ContactUs from "../contactus/ContactUs.js";
import TeamMembers from "../team/TeamMembers.js";
import AboutUsCompo from "../about/AboutUsCompo.js";
import SatCompo from "../HomePageCompnents.js/SatCompo.js";
import WhatWeDo from "../HomePageCompnents.js/WhatWeDo.js";
import HomePageHero from "../HomePageCompnents.js/HomePageHero.js";

const HomePage = () => {
  return (
    <section className="w-full    items-center">
      {/* <Banner /> */}
      <HomePageHero />
      <SatCompo />
      <WhatWeDo />
      <ClientReview />
      <TeamMembers />
    </section>
  );
};

export default HomePage;
