import React from "react";

import Email from "./iconComponents/email";
import { Projects, AboutMe, Skills } from "./iconComponents/technologies";

const Header = () => {
  const handleClick = data => {
    document.getElementById(`${data}`).scrollIntoView({ behavior: `smooth` });
  };

  return (
    <>
      <nav className="bg-gray-800 w-screen h-16">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex w-full justify-evenly items-center">
            <div
              onClick={() => handleClick(`projects`)}
              className="bg-white rounded-full h-10 w-10 cursor-pointer transform transition ease-in hover:scale-125"
            >
              <Projects />
            </div>
            <div
              onClick={() => handleClick(`AboutMe`)}
              className="bg-white rounded-full h-10 w-10 cursor-pointer transform transition ease-in hover:scale-125"
            >
              <AboutMe />
            </div>
            <div
              onClick={() => handleClick(`Skills`)}
              className="bg-white rounded-full h-10 w-10 cursor-pointer transform transition ease-in hover:scale-125"
            >
              <Skills />
            </div>
            <div
              onClick={() => handleClick(`contactMe`)}
              className="bg-white rounded-full h-10 w-10 cursor-pointer transform transition ease-in hover:scale-125"
            >
              <Email />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
