import React from "react";

import DownArrow from "./iconComponents/arrow";

const Hero = () => {
  const handleClick = () => {
    document.getElementById(`projects`).scrollIntoView({ behavior: `smooth` });
  };

  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-screen h-xxl flex items-center">
        <div className="container flex flex-col m-auto">
          <div className="sm:text-5xl md:text-5xl md:h-20 md:px-6 lg:text-left lg:w-6/12 xl:h-20 h-16 text-center font-openSans font-bold text-4xl p-2 text-black container w-9/12 m-auto my-6 ">
            Raymond Li
          </div>
          <p className="sm:text-xl md:w-6/12 md:my-0 lg:text-2xl lg:w-6/12 lg:leading-loose xl:text-2xl text-black text-lg leading-loose container m-auto my-6 w-9/12">
            Hello, I am a Software Developer based in San Francisco. I have
            experience with React, Redux, Redux-Thunk, TailwindCSS, Node.js,
            Express.js, HTML5, CSS3, Git, and MongoDB.
          </p>
          <div className="md:w-5/12 md:mt-8 container m-auto text-right w-9/12 p-4">
            <a
              href="#"
              className="h-full border-red-700 border-4 text-base md:text-lg p-2 rounded-lg font-bold text-black transition ease-in hover:border-red-400 hover:text-gray-600"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
      <div className="container m-auto w-16 outline-none duration-1000 animate-bounce">
        <button
          onClick={() => handleClick()}
          className="w-full h-full"
          style={{ outline: `none` }}
        >
          <DownArrow />
        </button>
      </div>
    </div>
  );
};
export default Hero;
