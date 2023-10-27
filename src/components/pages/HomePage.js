/** @format */

import React from "react";
import ClientReview from "../clientreview/ClientReview.js";
import ContactUs from "../contactus/ContactUs.js";
import TeamMembers from "../team/TeamMembers.js";
import SatCompo from "../HomePageCompnents.js/SatCompo.js";
import WhatWeDo from "../HomePageCompnents.js/WhatWeDo.js";
import HomePageHero from "../HomePageCompnents.js/HomePageHero.js";
import CustomersWorldwide from "../HomePageCompnents.js/CustomersWorldwide.js";
import TechnologyWeUse from "../HomePageCompnents.js/TechnologyWeUse.js";
import OurServices from "../HomePageCompnents.js/OurServices.js";
import HomePageFaq from "../accordoin/HomePageFaq.js";

const HomePage = () => {
  return (
    <section className="w-full    items-center">
      {/* <Banner /> */}
      <HomePageHero />
      <SatCompo />
      <WhatWeDo />
      <OurServices />
      <ClientReview />
      <TechnologyWeUse />
      <TeamMembers />
      <CustomersWorldwide />
      <HomePageFaq />
      <ContactUs />
    </section>
  );
};

export default HomePage;
