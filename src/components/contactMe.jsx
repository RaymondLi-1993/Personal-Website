import React, { useState } from "react";
import emailjs from "emailjs-com";

import LinkedIn from "./iconComponents/linkedIn";
import GitHub from "./iconComponents/github";
import AngelList from "./iconComponents/angelList";

const ContactMe = () => {
  const [sending, setSending] = useState(false);
  const year = new Date();

  const sendEmail = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_cfkrjqg",
        "template_s02mffe",
        e.target,
        "user_kRZop11cNbFajMXLQfPDC"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    setSending(!sending);
  };
  return (
    <div id="contactMe" className="w-full h-screen bg-gray-800">
      <div className="w-full h-full container m-auto flex flex-col items-center justify-center ">
        <div className="text-white text-5xl font-Nunito mt-16">Contact Me</div>
        {sending ? (
          <div className="w-full h-9/12 container m-auto text-center text-white text-5xl font-Nunito">
            Message successfully sent!
          </div>
        ) : (
          <form
            className="w-full h-9/12 container m-auto flex flex-col items-center justify-center"
            onSubmit={sendEmail}
          >
            <div className="m-2 w-2/4 h-12">
              <input
                placeholder="subject"
                className="w-full h-full mx-2 rounded-lg border-blue-900 border-4 p-4 focus:border-blue-500 text-lg font-Nunito font-bold"
                type="text"
                name="subject"
                required
              />
            </div>
            <div className="m-2 w-2/4 h-12 flex flex-row">
              <input
                placeholder="Email"
                className="w-1/2 h-full mx-2 rounded-lg border-blue-900 border-4 p-4 focus:border-blue-500 text-lg font-Nunito"
                type="email"
                name="Email"
                required
              />
              <span className="w-1/2 h-12">
                <input
                  placeholder="Name"
                  className="w-full h-full mx-2 rounded-lg border-blue-900 border-4 p-4 focus:border-blue-500 text-lg font-Nunito"
                  type="text"
                  name="Name"
                  required
                />
              </span>
            </div>
            <div className="m-2 w-2/4 h-44">
              <textarea
                placeholder="Message"
                className="w-full h-full mx-2 rounded-lg border-blue-900 border-4 p-4 focus:border-blue-500 text-lg font-Nunito"
                name="Message"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send"
                className="w-64 p-2 m-2 cursor-pointer rounded-lg hover:bg-gray-500 font-Nunito text-lg"
              />
            </div>
          </form>
        )}
        <div className="mb-16 w-1/2 flex flex-row h-12 items-center justify-center">
          <div className="bg-white rounded-full h-10 w-10 cursor-pointer m-2 transform transition ease-in hover:scale-125">
            <a href="https://www.linkedin.com/in/raymond-li-460073193">
              <LinkedIn />
            </a>
          </div>
          <div className="bg-white rounded-full h-10 w-10 cursor-pointer m-2 transform transition ease-in hover:scale-125">
            <a href="https://github.com/RaymondLi-1993">
              <GitHub />
            </a>
          </div>
          <div className="bg-white rounded-full h-10 w-10 cursor-pointer m-2 transform transition ease-in hover:scale-125">
            <a href="#">
              <AngelList />
            </a>
          </div>
        </div>
      </div>
      <h1 className="text-white font-Nunito text-center pt-2  bg-gray-800">
        Designed and created By Raymond Li © {`${year.getFullYear()}`}.
      </h1>
    </div>
  );
};

export default ContactMe;
