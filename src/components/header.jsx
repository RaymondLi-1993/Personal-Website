import React from "react";

import LinkedIn from "./iconComponents/linkedIn";
import GitHub from "./iconComponents/github";
import AngelList from "./iconComponents/angelList";
import Email from "./iconComponents/email";

const Header = () => {
  return (
    <>
      <nav className="bg-blue-900 fixed w-full h-16">
        <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
          <div className="flex w-full justify-evenly items-center">
            <div className="bg-white rounded-full h-10 w-10 transform transition ease-in hover:scale-125">
              <a href="https://www.linkedin.com/in/raymond-li-460073193">
                <LinkedIn />
              </a>
            </div>
            <div className="bg-white rounded-full h-10 w-10 transform transition ease-in hover:scale-125">
              <a href="https://github.com/RaymondLi-1993">
                <GitHub />
              </a>
            </div>
            <div className="bg-white rounded-full h-10 w-10 transform transition ease-in hover:scale-125">
              <a href="#">
                <AngelList />
              </a>
            </div>
            <div className="bg-white rounded-full h-10 w-10 transform transition ease-in hover:scale-125">
              <a href="email">
                <Email />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
