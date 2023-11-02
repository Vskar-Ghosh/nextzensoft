/** @format */

import React from "react";
import Wave from "react-wavify";
import ContactUs from "../contactus/ContactUs";
import { malaysia, bangladesh } from "../../assets/index";

const GetInTouchPage = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center py-0 ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end relative bg-getIntoutchBG ">
        <div className="w-full relative">
          <Wave
            fill="#7eb1ef"
            fillOpacity=".4"
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
          <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full flex flex-col items-start justify-center lg:ml-20 text-[#FFFFFF]">
            <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl max-xl:text-4xl font-abelPro font-bold">
              Get In Touch
            </h1>
            <p className="font-abelPro text-[#FFFFFF] text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg max-xl:text-lg">
              Welcome to Nextzensoft, your trusted partner for cutting-edge
              software development solutions. With a passion for innovation and
              a team of highly skilled developers, we specialize in crafting
              custom software tailored to your unique needs. Whether you're
              looking to streamline your business processes, enhance user
              experiences, or drive digital transformation, we have the
              expertise to bring your vision to life. Our commitment to quality,
              efficiency, and excellence ensures that we deliver solutions that
              empower your business for success in today's digital landscape.
              Discover the possibilities with [Your Company Name] and embark on
              a journey of software innovation.
            </p>
          </div>
        </div>
      </div>

      {/* end of hero section component */}

      <div className="flex flex-col items-center justify-center  p-3">
        <div className="mb-[50px]">
          <h1 className="text-6xl p-4 mt-5 mb-5 font-abelPro font-bold text-coralred">
            Our Global{" "}
            <span className="text-6xl p-4 mt-5 mb-5 font-abelPro font-bold text-[#241468]">
              Offices{" "}
            </span>
          </h1>{" "}
        </div>

        <div className="w-full grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 max-sm:grid-cols-1 justify-center items-center gap-5 mt-5">
          <div className=" w-[300px] h-[300px] relative bg-cover bg-center   bg-dhakaOfcehBG rounded-xl hover:scale-105">
            <div className="absolute inset-0 bg-opacity-50 bg-[#1476f2] rounded-xl "></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-semibold">
              <div className="flex flex-row p-2">
                <h1 className="text-4xl text-white font-semibold mt-3">
                  Dhaka Office
                </h1>
                <img src="" alt="" className="" />
              </div>

              <p className="text-xs">
                1/B Thamina Bhaban, Mirpur 1, Dhaka 1216,
              </p>
              <p className="text-xs mb-1">Bangladesh</p>
              <p className="text-xs mb-1">Cell: 008801991-730274</p>
              <p className="text-xs">Email: info.zextzensoft@nextzensoft.com</p>
            </div>
          </div>
          {/* end 1 */}

          <div className=" w-[300px] h-[300px] relative bg-cover bg-center   bg-nyBG rounded-xl hover:scale-105">
            <div className="absolute inset-0 bg-opacity-50 bg-[#1476f2] rounded-xl "></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-semibold">
              <div className="flex flex-row p-2">
                <h1 className="text-4xl text-white font-semibold mt-3">
                  New York
                </h1>
                <img src="" alt="" className="" />
              </div>

              <p className="text-xs">
                1/B Thamina Bhaban, Mirpur 1, Dhaka 1216,
              </p>
              <p className="text-xs mb-1">Bangladesh</p>
              <p className="text-xs mb-1">Cell: 008801991-730274</p>
              <p className="text-xs">Email: info.zextzensoft@nextzensoft.com</p>
            </div>
          </div>

          {/* end of 2 */}

          <div className=" w-[300px] h-[300px] relative bg-cover bg-center   bg-ohioBG rounded-xl hover:scale-105">
            <div className="absolute inset-0 bg-opacity-50 bg-[#1476f2] rounded-xl "></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-semibold">
              <div className="flex flex-row p-2">
                <h1 className="text-4xl text-white font-semibold mt-3">Ohio</h1>
                <img src="" alt="" className="" />
              </div>

              <p className="text-xs">
                1/B Thamina Bhaban, Mirpur 1, Dhaka 1216,
              </p>
              <p className="text-xs mb-1">Bangladesh</p>
              <p className="text-xs mb-1">Cell: 008801991-730274</p>
              <p className="text-xs">Email: info.zextzensoft@nextzensoft.com</p>
            </div>
          </div>
          {/* end 3 */}
          <div className=" w-[300px] h-[300px] relative bg-cover bg-center   bg-klBG rounded-xl hover:scale-105">
            <div className="absolute inset-0 bg-opacity-50 bg-[#1476f2] rounded-xl "></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-semibold">
              <div className="flex flex-row p-2">
                <h1 className="text-4xl text-white font-semibold mt-3">
                  Kualalumpur
                </h1>
                <img src="" alt="" className="" />
              </div>

              <p className="text-xs">
                1/B Thamina Bhaban, Mirpur 1, Dhaka 1216,
              </p>
              <p className="text-xs mb-1">Bangladesh</p>
              <p className="text-xs mb-1">Cell: 008801991-730274</p>
              <p className="text-xs">Email: info.zextzensoft@nextzensoft.com</p>
            </div>
          </div>

          {/* end 4 */}
          <div className=" w-[300px] h-[300px] relative bg-cover bg-center   bg-ansburgBG rounded-xl hover:scale-105">
            <div className="absolute inset-0 bg-opacity-50 bg-[#1476f2] rounded-xl "></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-semibold">
              <div className="flex flex-row p-2">
                <h1 className="text-4xl text-white font-semibold mt-3">
                  Ansbach
                </h1>
                <img src="" alt="" className="" />
              </div>

              <p className="text-xs">
                1/B Thamina Bhaban, Mirpur 1, Dhaka 1216,
              </p>
              <p className="text-xs mb-1">Bangladesh</p>
              <p className="text-xs mb-1">Cell: 008801991-730274</p>
              <p className="text-xs">Email: info.zextzensoft@nextzensoft.com</p>
            </div>
          </div>

          {/* end 5 */}
        </div>
        {/* ---- */}
      </div>
      {/* ofices */}

      <ContactUs />
    </section>
  );
};

export default GetInTouchPage;
