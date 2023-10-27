/** @format */

import React from "react";
import { motion } from "framer-motion";

import {
  comAppJava,
  otherUseJava,
  industriesJava,
  innovationJava,
} from "../../assets/index";

const JavaTechTwo = () => {
  return (
    <section className="w-full  py-0 p-5">
      <div className="flex flex-col p-3">
        <div className="flex max-xl:flex-row xl:flex-row md:flex-col lg:flex-row max-sm:flex-col sm:flex-col max-sm:ml-2 max-sm:mr-2 gap-8">
          <div className="w-[40vw] max-sm:w-[100vw] sm:w-[100vw] md:w-[100vw] p-2">
            <img src={comAppJava} alt="" className="" />
          </div>
          {/* end of image */}

          <div className=" w-[50vw] max-sm:w-[100vw] sm:w-[100vw] md:w-[100vw] flex flex-col p-3 justify-center items-center">
            <h1 className="text-4xl text-coralred font-abelPro font-bold mt-2 mb-2">
              Common Java-based applications
            </h1>

            <div className="mx-10 p-8 flex lg:flex-row max-xl:flex-row xl:flex-row max-sm:flex-col sm:flex-col justify-between items-center  gap-20">
              <div className="w-[300px] flex flex-col ">
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Web applications
                  </h3>
                </div>
                {/* end 1 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Cloud-based applications
                  </h3>
                </div>
                {/* end 2 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Mobile applications
                  </h3>
                </div>
                {/* end 3 */}

                {/*end of 5  */}
              </div>
              {/* end left */}
              <div className="w-[300px] flex flex-col ">
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Gaming Solutions
                  </h3>
                </div>
                {/* end 1 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    XaaS applications
                  </h3>
                </div>
                {/* end of 4 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Desktop GUI applications
                  </h3>
                </div>
              </div>
              {/* end right */}
            </div>
          </div>
        </div>
        {/* end */}
        {/* --------- */}

        <div className="flex max-xl:flex-row xl:flex-row md:flex-col lg:flex-row max-sm:flex-col sm:flex-col max-sm:ml-2 max-sm:mr-2 gap-8">
          <div className=" w-[50vw] max-sm:w-[100vw] sm:w-[100vw] md:w-[100vw] flex flex-col p-3 justify-center items-center">
            <h1 className="text-4xl text-coralred font-abelPro font-bold mt-2 mb-2">
              Enterprise-grade solutions in Java
            </h1>
            <p>
              Utilizing our broad experience in bringing Java development
              services, we deliver an array of top-notch solutions developed in
              Java. B2B or B2C, small or big — we got your Java project covered.
            </p>
            <div className="mx-10 p-8 flex lg:flex-row max-xl:flex-row xl:flex-row max-sm:flex-col sm:flex-col justify-between items-center  gap-20">
              <div className="w-full flex flex-col justify-start ">
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center ">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Enterprise resource planning systems (ERP)
                  </h3>
                </div>
                {/* end 1 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Customer relationship management systems (CRM)
                  </h3>
                </div>
                {/* end 2 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Human resource management system (HRM)
                  </h3>
                </div>
                {/* end 3 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Supply chain management systems (SCM)
                  </h3>
                </div>
                {/* end 4 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Content management system (CMS)
                  </h3>
                </div>
                {/* end 5 */}
                <div className=" flex flex-row p-2 gap-2 mx-2 justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="text-lg font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Data management systems / data warehouse (DW)
                  </h3>
                </div>
                {/* end of 5 */}
              </div>
              {/* end left */}
            </div>
          </div>
          {/* end => text */}

          <div className="w-[40vw] max-sm:w-[100vw] sm:w-[100vw] md:w-[100vw] p-2">
            <img src={otherUseJava} alt="" className="" />
          </div>
          {/* end of image */}
        </div>
        {/* end */}

        {/* ====== */}

        {/* industri based solutions */}

        <div className="flex flex-col justify-center items-center mx-5">
          <div className=" w-[90vw] flex max-xl:flex-row xl:flex-row lg:flex-row md:flex-col max-sm:flex-col sm:flex-col lg:gap-15 max-xl:gap-20 xl:gap-20 md:gap-10 sm:gap-5 max-sm:gap-5 mx-3">
            <div className="max-xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full max-sm:w-full sm:w-full  flex flex-col justify-center items-center ">
              <div className="w-full  flex flex-col justify-center items-center">
                <img
                  src={industriesJava}
                  height={300}
                  alt=""
                  className="h-[400px] w-full"
                />
              </div>

              <div className="flex flex-col justify-start items-start mt-2  ">
                <h1 className="text-4xl text-coralred font-abelPro font-bold mt-2 mb-2 p-2">
                  Online banking and insurance software
                </h1>
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Electronic health records systems (EHR)
                  </h3>
                </div>
                {/* item 1 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    eCommerce web platforms
                  </h3>
                </div>
                {/* end of item 2 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Learning management systems (LMS)
                  </h3>
                </div>
                {/* end 3 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Scientific applications
                  </h3>
                </div>
                {/* end 4 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Fleet management systems
                  </h3>
                </div>
                {/* end 5 */}
              </div>
            </div>
            {/* end left side = >*/}

            <div className="max-xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full max-sm:w-full sm:w-full  flex flex-col justify-center items-center ">
              <div className="w-full flex flex-col justify-center items-center">
                <img src={innovationJava} alt="" className="h-[400px] w-full" />
              </div>
              <div className="flex flex-col justify-start items-start mt-2 ">
                <h1 className="text-4xl text-coralred font-abelPro font-bold mt-2 mb-2 p-2">
                  Innovation-driven products based on Java
                </h1>
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Video streaming platforms
                  </h3>
                </div>
                {/* item 1 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Web conferencing software
                  </h3>
                </div>
                {/* end of item 2 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Smart contracts
                  </h3>
                </div>
                {/* end 3 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    Big data analysis tools
                  </h3>
                </div>
                {/* end 4 */}
                <div className=" flex flex-row p-2 gap-2  justify-start items-center">
                  <div className=" w-3 h-3 rounded-full bg-coralred"></div>
                  <h3 className="max-xl:text-xl xl:text-xl lg:text-lg md:text-lg max-sm:text-[16px] sm:text-[16px] font-abelPro hover:-translate-y-2 hover:text-deepBlue">
                    IoT applications for connected devices
                  </h3>
                </div>
                {/* end 5 */}
              </div>
            </div>
          </div>
        </div>
        {/* end=> */}
      </div>
    </section>
  );
};

export default JavaTechTwo;
