/** @format */

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { c_call, c_email, c_clock, c_email1 } from "../../assets/index";
import { contactImg } from "../../assets/index";

const ContactUsLeftInfo = () => {
  return (
    <div className="w-full md:w-[35%] h-full p-4 md:p-8 rounded-lg bg-[#f4f4f4] gap-4 flex flex-col justify-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-abelPro font-bold text-coralred">
          Get in touch with us
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-[#848484] font-adventPro">
          Have a revolutionary business idea? Let’s hit the market together!
          Don’t Hesitate to contact with us for any kind of information.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className=" w-[40px] h-[40px]  flex flex-col justify-center items-center border-2 border-deepBlue rounded-full">
            <img
              src={c_email}
              alt=""
              height={30}
              width={30}
              className="rounded-full "
            />
          </div>

          <div>
            <h3 className="text-base md:text-lg font-abelPro font-bold text-[#848484]">
              Email
            </h3>
            <p className="text-base md:text-lg text-coralred font-abelPro">
              nextzensoft@nextzensoft.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className=" w-[40px] h-[40px] flex flex-col justify-center items-center border-2 border-deepBlue rounded-full">
            <img
              src={c_call}
              alt=""
              height={30}
              width={30}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-abelPro font-bold text-[#848484]">
              Call Us
            </h3>
            <p className="text-base md:text-lg text-coralred font-abelPro">
              +8801991-730274
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className=" w-[40px] h-[40px] flex flex-col justify-center items-center border-2 border-deepBlue rounded-full">
            <img
              src={c_clock}
              alt=""
              height={30}
              width={30}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-base md:text-lg font-abelPro font-bold text-[#848484]">
              Monday - Friday
              <span className="text-coralred font-adventPro">
                9.00am - 18.00pm
              </span>
            </h3>
            <p className="text-base md:text-lg text-coralred font-abelPro">
              Sunday Closed
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-sm md:text-base uppercase font-titleFont mb-2 md:mb-4">
          Find Us in
        </h2>
        <div className="flex gap-2">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLeftInfo;
