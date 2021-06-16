import React from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      id="AboutMe"
      className="m-auto w-full h-full container flex lg:flex-row lg:h-2/3 flex-col p-4"
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
          alt="profile"
          className="lg:w-96 lg:h-96 w-72 h-72 rounded-full object-cover"
        ></img>
      </div>
      <div className="lg:w-1/2 lg:h-full w-full h-1/2 container m-auto">
        <h1
          className={`w-9/12 h-16 m-auto my-6 text-center font-openSans font-semibold text-5xl transform text-dracula-currentLine ${
            inView
              ? "lg:opacity-100 lg:-translate-x-8 lg:duration-1000"
              : "lg:opacity-0 translate-x-16"
          }`}
        >
          About Me
        </h1>
        <p
          className={`my-4 w-9/12 m-auto container font-openSans transform ${
            inView
              ? "lg:opacity-100 lg:translate-x-8 lg:duration-1000"
              : "lg:opacity-0 lg:-translate-x-16"
          }`}
        >
          I am a web developer with a passion for techonolgy and the non-stop
          learning opportunities it provides.
        </p>
        <p
          className={`w-9/12 m-auto container font-openSans transform ${
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
      </div>
    </div>
  );
};

export default AboutMe;
