/** @format */

import React from "react";
import {
  academicSoft,
  eduLms,
  eduOnDemand,
  eduBoost,
  eduDisable,
  eduE2c,
} from "../../assets/index";

const EduSoftwares = () => {
  return (
    <section className="w-full flex flex-col pt-10 md:pt-20 py-5 md:py-10 pb-20 md:pb-40 justify-center items-center   bg-[#f5f4f9] ">
      <div className="flex flex-row lg:flex-row xl:flex-row max-sm:flex-col sm:flex-col gap-10 justify-between items-center p-3">
        <div className="w-full max-xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[300px] max-sm:w-full flex flex-col p-3 overflow-x-auto">
          <img
            src={academicSoft}
            alt=""
            className="p-3 w-full max-xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] max-sm:w-full h-[200px] justify-center items-start"
          />

          <h1 className="text-3xl max-xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-coralred font-abelPro font-bold mx-2 text-center">
            Academic Software
          </h1>
          <p className="text-xl max-xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg max-sm:text-base font-abelPro text-deepBlue mx-1 text-center">
            One of education software development services we offer is academic
            software. It helps automate and manage all educational processes,
            administration, and learning needs efficiently.
          </p>
        </div>

        {/* 1st */}
        <div className="w-full max-xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[300px] max-sm:w-full flex flex-col p-3 overflow-x-auto">
          <img
            src={eduLms}
            alt=""
            className="p-3 w-full max-xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] max-sm:w-full h-[200px] justify-center items-start"
          />

          <h1 className="text-3xl max-xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-coralred font-abelPro font-bold mx-2 text-center">
            Learning Management Systems (LMS)
          </h1>
          <p className="text-xl max-xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg max-sm:text-base font-abelPro text-deepBlue mx-1 text-center">
            SoftFormance is an education software development company, and we
            develop learning management systems (LMS). LMS are web-based
            technologies used for planning, management, implementation, and
            assessment of the learning process.
          </p>
        </div>
        {/* 2nd */}

        <div className="w-full max-xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[300px] max-sm:w-full flex flex-col p-3 overflow-x-auto">
          <img
            src={eduOnDemand}
            alt=""
            className="p-3 w-full max-xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] max-sm:w-full h-[200px] justify-center items-start"
          />

          <h1 className="text-3xl max-xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-coralred font-abelPro font-bold mx-2 text-center">
            On-demand eLearning Apps
          </h1>
          <p className="text-xl max-xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg max-sm:text-base font-abelPro text-deepBlue mx-1 text-center">
            Our on-demand education app development services fulfill business
            requirements of audio and video learning, lecture scheduling,
            appointment management and more with intuitive UI and fast
            performance.
          </p>
        </div>
      </div>
      {/* 2nd row */}
      <div className="flex flex-row lg:flex-row xl:flex-row max-sm:flex-col sm:flex-col gap-10 justify-between items-center p-3 bg-[#f5f4f9] ">
        <div className="w-full max-xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[300px] max-sm:w-full flex flex-col p-3 overflow-x-auto">
          <img
            src={eduBoost}
            alt=""
            className="p-3 w-full max-xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] max-sm:w-full h-[200px] justify-center items-start"
          />

          <h1 className="text-3xl max-xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-coralred font-abelPro font-bold mx-2 text-center">
            Skill Boosting Apps
          </h1>
          <p className="text-xl max-xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg max-sm:text-base font-abelPro text-deepBlue mx-1 text-center">
            Backed by AR/VR and IoT, our skill enhancing apps are concentrated
            on elevating the employee's skills through the medium of
            gamification. As part of our eLearning app development services, our
            skill boosting apps are available on all required platforms.
          </p>
        </div>

        {/* 1st */}
        <div className="w-full max-xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[300px] max-sm:w-full flex flex-col p-3 overflow-x-auto">
          <img
            src={eduE2c}
            alt=""
            className="p-3 w-full max-xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] max-sm:w-full h-[200px] justify-center items-start"
          />

          <h1 className="text-3xl max-xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-coralred font-abelPro font-bold mx-2 text-center">
            E2c eLearning App Development
          </h1>
          <p className="text-xl max-xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg max-sm:text-base font-abelPro text-deepBlue mx-1 text-center">
            Our education app development services also include crafting apps
            for large scale education ventures. Our educational app developers
            understand the details of a large-scale eLearning app, so you don't
            have to worry about deploying your educational app on a broad scale.
          </p>
        </div>
        {/* 2nd */}

        <div className="w-full max-xl:w-[400px] xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[300px] max-sm:w-full flex flex-col p-3 overflow-x-auto bg-[#f5f4f9]">
          <img
            src={eduDisable}
            alt=""
            className="p-3 w-full max-xl:w-[300px] xl:w-[300px] lg:w-[300px] md:w-[200px] sm:w-[200px] max-sm:w-full h-[200px] justify-center items-start"
          />

          <h1 className="text-3xl max-xl:text-2xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-2xl max-sm:text-xl text-coralred font-abelPro font-bold mx-2 text-center">
            eLearning Apps for Disabled
          </h1>
          <p className="text-xl max-xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-lg max-sm:text-base font-abelPro text-deepBlue mx-1 text-center">
            As a renowned education app development company, we also focus on
            education application development for our differently abled
            audience. Make knowledge accessible to all through our advanced
            adaptive learning educational apps development services based on 3D
            and Haptic technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EduSoftwares;
