/** @format */

import React from "react";
import { motion } from "framer-motion";
import {
  healtCare1,
  healtCare2,
  healtCareDash,
  healtCareMob,
  healtCareWeb,
  healtCareWreable,
  healtTele,
  healtCareMobilit,
  healtcareCRM,
} from "../../assets/index";

const HealthCareSoftServices = () => {
  return (
    <section className="w-full py-3 flex flex-col sm:justify-center items-center  ">
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10 ">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Healthcare Software Development Services{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Healthcare Software Development Services
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We build custom healthcare solutions for health centers, hospitals,
            clinics, pharmacies, assisted living facilities, and other
            healthcare providers to improve patients’ experiences and balance
            costs.
          </p>
        </div>
        {/* end of text */}
        <div className="w-full sm:w-auto">
          <img
            src={healtCare1}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>

      {/* end of custom */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div>
          <img
            src={healtCare2}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Healthcare Performance and Reporting Apps{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Reporting Apps
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We help navigate the oceans of heterogeneous data collected during
            both patient diagnostics and treatment, as well as hospitals and
            pharmacy back office operations. We build BI software, data mining
            and management tools to enable informed decision-making and
            forecasting.
          </p>
        </div>
        {/* end of text */}

        {/* end of photo */}
      </motion.div>
      {/* end of web */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Custom Healthcare CRM Development
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              CRM Development
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            At Symfa, we develop custom-designed healthcare CRM software that
            integrates effortlessly with existing workflows and service models
            for healthcare providers with industry-standard security features.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={healtcareCRM}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of value */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div>
          <img
            src={healtCareWeb}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Web Apps for{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Healthcare Providers
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            From custom interactive web portals to HIPAA-compliant coverage
            management platforms, we develop diverse cost-effective and
            feature-rich web-based software solutions to support modern
            healthcare providers and their demanding clients.
          </p>
        </div>
        {/* end of text */}
      </motion.div>
      {/* end of blochain */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Telehealth{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Software Development
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Enrich your healthcare operations with comprehensive telehealth
            solutions for doctors, clinics and patients. Enjoy an easy patient
            track record, schedules and workflows management. We enable smooth
            face-to-face patient-doctor communication, and take care of booking
            appointments, audiovisual connection, monitoring clinical trials and
            surveys, statistics and finance control.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={healtTele}
            alt=""
            className="w-[450px] h-[300px] max-xl:skew-y-12 xl:skew-y-12 sm:skew-y-3   mx-auto sm:mx-5 md:mx-5"></img>
        </div>
        {/* end of photo */}
      </motion.div>
      {/* end of cloudfunding */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div>
          <img
            src={healtCareDash}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Software{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Dashboards
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We build Interactive medical dashboards that allow the monitoring of
            patient data and integration of healthcare APIs in a more efficient
            manner. We customize these to help make better decisions, lower
            costs, optimize workflow, and improve employee and patient
            satisfaction
          </p>
        </div>
        {/* end of text */}
      </motion.div>
      {/* end */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Healthcare Apps for{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Wearable Devices
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We also provide app-based solutions for medical wearable devices and
            sensors for data recording and reporting that will share information
            in real-time and provide records and analysis for devices such as
            blood pressure and cardio monitors, biosensors, fitness trackers,
            etc.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={healtCareWreable}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>
      </motion.div>
      {/* end */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div>
          <img
            src={healtCareMob}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>

        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Mobile Apps for{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Patients
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            Opt for a sleek and functional telehealth app for your patients. We
            develop mobile apps for convenient access to health records and
            reports along with the ability to schedule and track appointments,
            prescriptions, and communicate with their doctors. Our team is ready
            to deliver innovative healthcare solutions and data management and
            communication apps to boost patients’ mobile experience.
          </p>
        </div>
        {/* end of text */}
      </motion.div>
      {/* end */}

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 2,
        }}
        className="flex flex-col sm:flex-row justify-center p-5 sm:p-10">
        <div className="w-full sm:w-1/2 mx-5 sm:mx-10 p-5">
          <h1 className="text-3xl sm:text-5xl text-coralred font-abelPro font-bold leading-normal mb-2 p-2">
            Mobility for{" "}
            <span className="text-3xl sm:text-5xl sm:mx-4 text-[#193E65] font-abelPro font-bold leading-normal">
              Caregivers
            </span>
          </h1>
          <p className="tex-[#999999] font-abelPro leading-normal">
            We also provide app-based solutions for medical wearable devices and
            sensors for data recording and reporting that will share information
            in real-time and provide records and analysis for devices such as
            blood pressure and cardio monitors, biosensors, fitness trackers,
            etc.
          </p>
        </div>
        {/* end of text */}
        <div>
          <img
            src={healtCareMobilit}
            alt=""
            className="w-[450px] h-[300px]    mx-auto sm:mx-5 md:mx-5"></img>
        </div>
      </motion.div>
      {/* end */}
    </section>
  );
};

export default HealthCareSoftServices;
