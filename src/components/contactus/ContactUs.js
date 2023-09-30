/** @format */

import React, { useState } from "react";
import ContactUsTitle from "../layouts/ContactUsTitle.js";
import ContactUsLeftInfo from "./ContactUsLeftInfo.js";
import axios from "axios";
// import { contactImg } from "../../assets/index.js";
// import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  const [userName, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMessage, setErroMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  // Send Button Handeling =>

  const handleSend = (e) => {
    e.preventDefault();
    if (userName === "") {
      setErroMessage("User Name Is Required");
    } else if (phoneNumber === "") {
      setErroMessage("Phone Number Is Required");
    } else if (email === "") {
      setErroMessage("Email  Is Required");
    } else if (!emailValidation(email)) {
      setErroMessage("Please Give a Vaild Email");
    } else if (subject === "") {
      setErroMessage("Please Provide a Subject");
    } else if (message === "") {
      setErroMessage("Please Type A Message");
    } else {
      setSuccessMessage(
        `Thank You {userName} ,  Your Messages has been sent Successfully`
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

    // else {
    //   setUsername(" ");
    // }
  };
  // End of Button Handeling =>

  return (
    <section className="w-full  py-20  items-center border-b-[1px]">
      <ContactUsTitle
        className="mb-5"
        title="Features"
        description="What We Do ...."
      />

      <div className=" w-full ">
        <div className=" w-full h-auto flex bg-yellow-300 justify-between">
          <ContactUsLeftInfo />
          <div className="w-[60%] h-full flex flex-col justify-between bg-green-400 p-4  gap-8">
            <form
              id="form"
              action="https://getform.io/f/8a7fabd3-feab-4654-93dc-aaf0848a1f49"
              method="POST"
              className="w-full flex flex-col gap-6 py-2">
              {/* taking Error message to the from==> */}
              {errMessage && (
                <p className="py-3 bg-white shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMessage}
                </p>
              )}

              {successMessage && (
                <p className="py-3 bg-white shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMessage}
                </p>
              )}

              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                    // below here we are handelin css funtionalliy
                    className={`${
                      errMessage === "User Name Is Required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"></input>
                </div>
                {/* nend of name div=> */}
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMessage === "Phone Number Is Required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"></input>
                </div>
                {/* end of phone number div =>  */}
              </div>
              {/* end of name and phone holder div div=> */}
              <div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Email
                  </p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={`${
                      errMessage === "Email  Is Required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="email"></input>
                </div>
              </div>
              {/* end of email div=> */}

              <div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Subject
                  </p>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    className={`${
                      errMessage === "Please Provide a Subject" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"></input>
                </div>
              </div>
              {/* end of subject div=> */}

              <div>
                <div className="w-full flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Message
                  </p>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    className={`${
                      errMessage === "Please Type A Message" &&
                      "outline-designColor"
                    } contactTextArea`}
                    cols="30"
                    rows="8"></textarea>
                </div>
              </div>
              {/* end of message textArea div=> */}
              <div className="w-full">
                <button onClick={handleSend} className="sendMessageButton">
                  Send Message
                </button>
              </div>
              {errMessage && (
                <p className="py-3 bg-white shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMessage}
                </p>
              )}

              {successMessage && (
                <p className="py-3 bg-white shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
