import React from "react";

const Projects = () => {
  return (
    <div className="container flex flex-col items-center m-auto w-screen h-screen">
      <div
        id="projects"
        className="w-screen h-16 text-center text-5xl font-mono font-extrabold p-4 pt-2"
      >
        Projects
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4">
        <div className="w-full h-full p-10">
          <img
            src={`Images/flareClothing.png`}
            alt="flare clothing"
            className="w-full h-full shadow-2xl rounded-lg"
          ></img>
        </div>
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-6 font-bold text-2xl text-center">
            FlareClothing
          </h1>
          <p className="container justify-center p-4 w-full font-Nunito font-light text-xl">
            Flare-Clothing is a fully functional, full-stack clothing ecommerce
            application with abilities to login users via google-o-auth, create
            new users, add items to cart, persist user info, and accept
            payments. Technologies used for front-end includes, TailwindCss,
            React, localstorage, redux, and redux-thunk. Back-end Technologies
            consists of Node-js, google-o-auth, stripe API, MongoDB
            Atlas/Mongoose, Axios, and session-cookies.
          </p>
        </div>
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4">
        <div className="w-full h-full p-10">
          <img
            src={`Images/youtubeCopy.png`}
            alt="youtube copy"
            className="w-full h-full shadow-2xl rounded-lg"
          ></img>
        </div>
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-6 font-bold text-2xl text-center">
            Youtube Copy
          </h1>
          <p className="container justify-center p-4 w-full font-Nunito font-light text-xl">
            Flare-Clothing is a fully functional, full-stack clothing ecommerce
            application with abilities to login users via google-o-auth, create
            new users, add items to cart, persist user info, and accept
            payments. Technologies used for front-end includes, TailwindCss,
            React, localstorage, redux, and redux-thunk. Back-end Technologies
            consists of Node-js, google-o-auth, stripe API, MongoDB
            Atlas/Mongoose, Axios, and session-cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
