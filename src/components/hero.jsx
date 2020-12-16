import React, { useState, useEffect } from "react";

import DownArrow from "./iconComponents/arrow";

const Hero = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleClick = () => {
    document.getElementById(`projects`).scrollIntoView({ behavior: `smooth` });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="container w-full m-auto p-6 lg:text-left text-center leading-relaxed">
        <h1
          className={`text-gray-800 w-full font-mono text-5xl p-2 font-light transform ${
            loading
              ? "lg:opacity-100 lg:translate-x-8 lg:duration-1000"
              : "lg:opacity-0"
          }`}
        >
          Hello there, I am{" "}
          <span className="sm:leading-loose lg:leading-none font-extrabold font-Nunito text-6xl text-blue-900">
            Raymond Li
          </span>
        </h1>
        <h1
          className={`text-gray-800 font-light font-mono text-4xl p-2 transform ${
            loading
              ? "lg:duration-1000 lg:opacity-100 lg:translate-x-8"
              : "lg:opacity-0"
          }`}
        >
          I'm a fullstack web developer.
        </h1>
      </div>
      <div className="container w-24 my-24 duration-1000 animate-bounce">
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
