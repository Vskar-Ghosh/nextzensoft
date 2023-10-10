/** @format */

import React, { useState } from "react";
import ContactUsTitle from "../layouts/ContactUsTitle.js";
import ContactUsLeftInfo from "./ContactUsLeftInfo.js";
import axios from "axios";

const ContactUs = () => {
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErroMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErroMessage("User Name Is Required");
    } else if (phoneNumber === "") {
      setErroMessage("Phone Number Is Required");
    } else if (email === "") {
      setErroMessage("Email  Is Required");
    } else if (!emailValidation(email)) {
      setErroMessage("Please Give a Valid Email");
    } else if (subject === "") {
      setErroMessage("Please Provide a Subject");
    } else if (message === "") {
      setErroMessage("Please Type A Message");
    } else {
      setSuccessMessage(
        `Thank You ${userName}, Your Messages has been sent Successfully`
      );

      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
      console.log(userName, phoneNumber, email, subject, message);
      axios.post("https://getform.io/f/8a7fabd3-feab-4654-93dc-aaf0848a1f49", {
        name: userName,
        phone: phoneNumber,
        email: email,
        subject: subject,
        messages: message,
      });
    }
  };

  return (
    <section className="w-full py-10 items-center ">
      <ContactUsTitle />

      <div className="w-full">
        <div className="flex flex-col lg:flex-row gap-4 justify-center items-center">
          <ContactUsLeftInfo />
          <div className="w-full lg:w-[50%] h-full flex flex-col justify-between bg-[#f4f4f4] p-4 lg:p-2 gap-4">
            <form
              id="form"
              action="https://getform.io/f/8a7fabd3-feab-4654-93dc-aaf0848a1f49"
              method="POST"
              className="w-full flex flex-col gap-4 py-2">
              {errMessage && (
                <p className="py-3 bg-white shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMessage}
                </p>
              )}

              {successMessage && (
                <p className="py-1 bg-white shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMessage}
                </p>
              )}

              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                  <p className="text-base lg:text-lg font-abelPro font-bold text-coralred uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                    className={`${
                      errMessage === "User Name Is Required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                  <p className="text-base lg:text-lg font-abelPro font-bold text-coralred uppercase tracking-wide">
                    Phone
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMessage === "Phone Number Is Required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-base lg:text-lg font-abelPro font-bold text-coralred uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMessage === "Email  Is Required" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-base lg:text-lg font-abelPro font-bold text-coralred uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMessage === "Please Provide a Subject" &&
                    "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-2">
                <p className="text-base lg:text-lg font-abelPro font-bold text-[#EE7E24] uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMessage === "Please Type A Message" &&
                    "outline-designColor"
                  } contactTextArea`}
                  cols="20"
                  rows="5"></textarea>
              </div>

              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="sendMessageButton bg-coralred text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:border-blue-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
