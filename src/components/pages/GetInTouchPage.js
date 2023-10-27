/** @format */

import React from "react";
import Wave from "react-wavify";
import ContactUs from "../contactus/ContactUs";
import { malaysia, bangladesh } from "../../assets/index";

const GetInTouchPage = () => {
  return (
    <section className="w-full justify-center py-0 ">
      <div className="w-full h-[100vh] flex flex-col justify-end items-end relative bg-getIntoutchBG ">
        <div className="w-full relative">
          <Wave
            fill="#255a78"
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

      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 p-9">
        <div className="mb-[50px]">
          <h1 className="text-6xl p-4 mt-5 mb-5 font-abelPro font-bold text-coralred">
            Our Global{" "}
            <span className="text-6xl p-4 mt-5 mb-5 font-abelPro font-bold text-[#241468]">
              Offices{" "}
            </span>
          </h1>{" "}
        </div>

        <div className="w-full p-3 lg:flex-row xl:flex-row flex flex-row flex-row-3 sm:flex-col max-sm:flex-col justify-center items-center gap-5 mt-10">
          <div className="w-[350px] h-[240px] flex flex-col justify-start items-start p-4 shadow-lg rounded-md transform -translate-x-30 -translate-y-12 bg-gray-200">
            <div className="flex flex-row justify-around items-center gap-[140px] p-2 mb-3">
              <h1 className="text-xl font-abelPro font-bold text-coralred mb-2">
                Bangladesh Office
              </h1>

              <img src={bangladesh} alt="" className=" w-[45px] h-[45px]" />
            </div>
            <h3 className="text-[#241468] font-abelPro font-bold">
              1/B Thamina Bhaban
            </h3>
            <p> Mazr Road Mirpur 1, Dhaka 1216,</p>
            <p>Bangladesh</p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Email:{" "}
              </span>
              infogarmanoffice@nextzensoft.com
            </p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Phone:
              </span>{" "}
              +4917684035253
            </p>
          </div>

          <div className="w-[350px] h-[280px] flex flex-col justify-start items-start p-4 bg-black shadow-lg rounded-md">
            <div className="flex flex-row justify-around items-center gap-[140px] p-2 mb-3">
              <h1 className="text-xl font-abelPro font-bold text-coralred mb-2">
                Malaysia Office
              </h1>

              <img src={malaysia} alt="" className=" w-[45px] h-[45px]" />
            </div>

            <h3 className="text-[#241468] font-abelPro font-bold">
              Würzburger Landstraße 28
            </h3>
            <p>Würzburger Landstraße 28, 91522 Ansbach</p>
            <p>Germany</p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Email:{" "}
              </span>
              infogarmanoffice@nextzensoft.com
            </p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Phone:
              </span>{" "}
              +4917684035253
            </p>
          </div>
          <div className="w-[350px] h-[280px] flex flex-col justify-start items-start p-4 shadow-lg rounded-md transform -translate-x-30 -translate-y-12 mt-[30px]">
            <h1 className="text-xl font-abelPro font-bold text-coralred mb-2">
              Garman Office
            </h1>
            <h3 className="text-[#241468] font-abelPro font-bold">
              Würzburger Landstraße 28
            </h3>
            <p>Würzburger Landstraße 28, 91522 Ansbach</p>
            <p>Germany</p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Email:{" "}
              </span>
              infogarmanoffice@nextzensoft.com
            </p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Phone:
              </span>{" "}
              +4917684035253
            </p>
          </div>
        </div>
        {/* firstrow */}
        <div className="w-full p-3 lg:flex-row xl:flex-row flex flex-row flex-row-3 sm:flex-col max-sm:flex-col justify-center items-center gap-3 mt-50">
          <div className="w-[350px] h-[250px] flex flex-col justify-start items-start p-4 shadow-lg rounded-md">
            <h1 className="text-xl font-abelPro font-bold text-coralred mb-2">
              New York Office
            </h1>
            <h3 className="text-[#241468] font-abelPro font-bold">
              Würzburger Landstraße 28
            </h3>
            <p>Würzburger Landstraße 28, 91522 Ansbach</p>
            <p>Germany</p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Email:{" "}
              </span>
              infogarmanoffice@nextzensoft.com
            </p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Phone:
              </span>{" "}
              +4917684035253
            </p>
          </div>
          <div className="w-[350px] h-[240px] flex flex-col justify-start items-start p-4 shadow-lg rounded-md">
            <h1 className="text-xl font-abelPro font-bold text-coralred mb-2">
              Michigan Office
            </h1>
            <h3 className="text-[#241468] font-abelPro font-bold">
              Würzburger Landstraße 28
            </h3>
            <p>Würzburger Landstraße 28, 91522 Ansbach</p>
            <p>Germany</p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Email:{" "}
              </span>
              infogarmanoffice@nextzensoft.com
            </p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Phone:
              </span>{" "}
              +4917684035253
            </p>
          </div>

          <div className="w-[350px] h-[240px] flex flex-col justify-start items-start p-4 shadow-lg rounded-md">
            <h1 className="text-xl font-abelPro font-bold text-coralred mb-2">
              Michigan Office
            </h1>
            <h3 className="text-[#241468] font-abelPro font-bold">
              Würzburger Landstraße 28
            </h3>
            <p>Würzburger Landstraße 28, 91522 Ansbach</p>
            <p>Germany</p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Email:{" "}
              </span>
              infogarmanoffice@nextzensoft.com
            </p>
            <p>
              {" "}
              <span className="font-abelPro font-bold text-[#241468]">
                Phone:
              </span>{" "}
              +4917684035253
            </p>
          </div>
        </div>
        {/* end of second row */}
      </div>
      {/* ofices */}

      <ContactUs />
    </section>
  );
};

export default GetInTouchPage;
