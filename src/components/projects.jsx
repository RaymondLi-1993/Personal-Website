import React from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView, entry } = useInView({});

  return (
    <div
      ref={ref}
      id="projects"
      className="container flex flex-col items-center m-auto w-screen py-6"
    >
      <div className="w-screen h-16 text-center text-5xl font-mono font-extrabold p-4 pt-2 text-blue-900">
        Projects
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4">
        <div className="w-full h-full p-8">
          <img
            src={`Images/flareClothing.png`}
            alt="flare clothing"
            className={`w-full h-full shadow-2xl rounded-lg  ${
              inView ? "animate-fadeIn" : null
            }`}
          ></img>
        </div>
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-2 font-bold text-2xl text-center">
            FlareClothing
          </h1>
          <p className="container justify-center p-4 w-full font-Nunito font-light text-xl">
            Flare-Clothing is a fully functional, full-stack clothing ecommerce
            application deployed on Heroku. The application is capable of login
            users via google-o-auth, create and save new users, add items to
            cart, persist user info, and accept payments. Technologies used for
            front-end includes, TailwindCss, React, localstorage, redux, and
            redux-thunk. Back-end Technologies consists of Node-js,
            google-o-auth, stripe API, MongoDB Atlas/Mongoose, Axios, and
            session-cookies.
          </p>
          <div className="w-full flex container px-2">
            <div className="border-red-500 h-full border-2 w-16 text-center mx-2 font-bold font-mono cursor-pointer">
              <a href="https://flare-clothing.herokuapp.com/">Live</a>
            </div>
            <div className="border-red-500 h-full border-2 w-32 text-center mx-2 font-bold font-mono cursor-pointer">
              <a href="https://github.com/RaymondLi-1993/flare-clothing">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4">
        <div className="w-full h-5/6 p-4">
          <img
            src={`Images/youtubeCopy.png`}
            alt="youtube copy"
            className={`w-full h-full shadow-2xl rounded-lg ${
              inView ? "animate-fadeInSlow" : null
            }`}
          ></img>
        </div>
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-2 font-bold text-2xl text-center">
            Youtube Copy
          </h1>
          <p className="container justify-center p-4 w-full font-Nunito font-light text-xl">
            Youtube copy was a fun project mimicing the popular website youtube.
            This project consisted of using data from the youtube API and allows
            the user to search for videos like the real youtube website. The
            website was built with react/react Hooks and fetches data via Axios.
          </p>
          <div className="w-full flex container px-2">
            <div className="border-red-500 h-full border-2 w-16 text-center mx-2 font-bold font-mono cursor-pointer">
              <a href="https://epic-colden-4b825c.netlify.app/">Live</a>
            </div>
            <div className="border-red-500 h-full border-2 w-32 text-center mx-2 font-bold font-mono cursor-pointer">
              <a href="https://github.com/RaymondLi-1993/video-search">
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4">
        <div className="w-full h-5/6 p-4">
          <img
            src={`Images/youtubeCopy.png`}
            alt="youtube copy"
            className={`w-full h-full shadow-2xl rounded-lg ${
              inView ? "animate-fadeInSlow" : null
            }`}
          ></img>
        </div>
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-2 font-bold text-2xl text-center">
            Youtube Copy
          </h1>
          <p className="container justify-center p-4 w-full font-Nunito font-light text-xl">
            Youtube copy was a fun project mimicing the popular website youtube.
            This project consisted of using data from the youtube API and allows
            the user to search for videos like the real youtube website. The
            website was built with react/react Hooks and fetches data via Axios.
          </p>
          <div className="w-full flex container px-2">
            <div className="border-red-500 h-full border-2 w-16 text-center mx-2 font-bold font-mono cursor-pointer">
              <a href="https://epic-colden-4b825c.netlify.app/">Live</a>
            </div>
            <div className="border-red-500 h-full border-2 w-16 text-center mx-2 font-bold font-mono cursor-pointer">
              <a href="https://github.com/RaymondLi-1993/video-search">Code</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
