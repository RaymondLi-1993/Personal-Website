import React from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView, entry } = useInView({});

  return (
    <div
      ref={ref}
      id="AboutMe"
      className="m-auto w-full h-full container flex lg:flex-row lg:h-2/3  flex-col p-4 bg-white"
    >
      <div
        className={`lg:w-1/2 lg:h-full lg:items-center lg:justify-center w-full h-1/3 transform flex justify-center ${
          inView
            ? "lg:opacity-100 lg:translate-x-8 lg:duration-1000"
            : "lg:opacity-0 lg:-translate-x-16"
        }`}
      >
        <img
          src={`Images/aboutMe.jpg`}
          className="lg:w-96 lg:h-96 w-72 h-72 rounded-full object-cover"
        ></img>
      </div>
      <div className="lg:w-1/2 lg:h-full w-full h-1/2 container m-auto">
        <h1
          className={`w-9/12 h-16 m-auto my-6 text-center font-mono font-semibold text-5xl transform text-blue-900 ${
            inView
              ? "lg:opacity-100 lg:-translate-x-8 lg:duration-1000"
              : "lg:opacity-0 translate-x-16"
          }`}
        >
          About Me
        </h1>
        <p
          className={`my-4 w-9/12 m-auto container font-Nunito leading-relaxed transform ${
            inView
              ? "lg:opacity-100 lg:translate-x-8 lg:duration-1000"
              : "lg:opacity-0 lg:-translate-x-16"
          }`}
        >
          I am a web developer with a passion for techonolgy and the non-stop
          learning opportunities it provides.
        </p>
        <p
          className={`w-9/12 m-auto container font-Nunito leading-relaxed transform ${
            inView
              ? "lg:opacity-100 lg:translate-x-8 lg:duration-1000"
              : "lg:opacity-0 lg:-translate-x-16"
          }`}
        >
          Originally pursuing a career in the health field, I decided that it
          was not the path for me. After graduating college and deciding not to
          pursue graduate school anymore, I dove into the world of web
          development. The satisfaction of finally understanding and solving
          problems motivates my pursuit in the career of software engineering.
        </p>
        {/* <div className="w-24 h-12 border-red-500 border-4 text-center">
          Resume
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
