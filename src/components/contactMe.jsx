import React from "react";

import LinkedIn from "./iconComponents/linkedIn";
import GitHub from "./iconComponents/github";
import Gmail from "./iconComponents/gmail";

const ContactMe = () => {

  const contacts = [
    <LinkedIn />,
    <GitHub />
  ]
  const linkName= [
    "LinkedIn",
    "GitHub"
  ]
  const linkUrl = [
    "https://linkedin.com/in/raymondli1993",
    "https://github.com/RaymondLi-1993"
  ]
  
  return (
    <div id="contactMe" className="w-full h-2/3 bg-dracula-backGround">
      <h1 className="text-white text-5xl text-center font-openSans font-semibold py-6">Contact Me</h1>
      <div className="container w-full h-96 m-auto flex items-center justify-evenly">
        {contacts.map((elem, index) => {
          return (
            <div 
            key={index}
                className="relative md:w-52 w-32 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="absolute -right-5 -bottom-5 bg-dracula-draculaCyan w-full h-full rounded-xl "></div>
          <div className="relative bg-dracula-currentLine rounded-xl p-8 space-y-5">
          <div className="h-2 w-20 bg-dracula-draculaCyan"></div> 
          {elem}
          <div>
          <a
          className="text-lg text-white font-openSans font-semibold underline cursor-pointer" 
          href={`${linkUrl[index]}`} target="_blank"
          >{`${linkName[index]}`}</a>
          </div>
          </div>
        </div>
          )
        })}
          <div className="relative md:w-52 w-32 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <div className="absolute -right-5 -bottom-5 bg-dracula-draculaCyan w-full h-full rounded-xl"></div>
          <div className="relative bg-dracula-currentLine rounded-xl p-8 space-y-5">
          <div className="h-2 w-20 bg-dracula-draculaCyan"></div> 
          <Gmail />
          <div>
          <a
          href="mailto:rlii0303@gmail.com"
          className="text-xl text-white font-openSans font-semibold underline cursor-pointer" 
          >Gmail</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
