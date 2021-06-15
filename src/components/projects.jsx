import React from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView} = useInView({});

  return (
    <div
      ref={ref}
      id="projects"
      className="container flex flex-col items-center m-auto w-screen py-6"
    >
      <div className="w-screen h-16 text-center text-5xl font-openSans font-extrabold p-4 pt-2 text-dracula-backGround">
        Projects
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4 py-12">
        <div className="relative py-3 w-full h-full sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-dracula-backGround shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div 
      class="relative bg-dracula-currentLine border-2 border-white rounded-3xl p-10">
         <img
            src={`Images/flareClothing.png`}
            alt="youtube copy"
            className={`w-full h-full shadow-2xl rounded-lg object-contain ${
              inView ? "animate-fadeInSlow" : null
            }`}
          ></img>
    </div>
          
        </div>
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-2 font-extrabold text-3xl text-center text-dracula-currentLine">
            FlareClothing
          </h1>
          <p className="container justify-center p-4 px-12 w-full font-openSans font-light text-l">
            Flare-Clothing is a fully functional, full-stack clothing ecommerce
            application deployed on Heroku. The application is capable of login
            users via google-o-auth, create and save new users, add items to
            cart, persist user info, and accept payments. Technologies used for
            front-end includes, TailwindCss, React, localstorage, redux, and
            redux-thunk. Back-end Technologies consists of Node-js,
            Passport.js, stripe API, MongoDB Atlas/Mongoose, Axios, and
            session-cookies.
          </p>
          <div className="w-full h-8 flex container items-center px-10">
            <div className="h-full w-32 text-center mx-2">
              <button className="linkButton text-white w-full h-full" style = {{outline:"none"}} onClick = {() =>{
                window.open("https://flare-clothing.herokuapp.com/","_blank");
              }}>Live</button>
            </div>
            <div className="h-full w-32 text-center mx-2">
            <button className="linkButton text-white w-full h-full" style = {{outline:"none"}} onClick = {() =>{
                window.open("https://github.com/RaymondLi-1993/flare-clothing","_blank");
              }}>Source Code</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex-row lg:h-1/2  flex flex-col h-full w-full m-4">
        <div class="relative py-3 w-full h-full sm:max-w-xl sm:mx-auto">
      <div class="absolute inset-0 bg-dracula-backGround shadow-lg transform -skew-y-3 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div 
      class="relative bg-dracula-currentLine border-2 border-white rounded-3xl p-10">
    
         <img
            src={`Images/youtubeCopy.png`}
            alt="youtube copy"
            className={`w-full h-full shadow-2xl rounded-lg object-contain ${
              inView ? "animate-fadeInSlow" : null
            }`}
          ></img>
    </div>
  </div> 
        <div className="h-full w-full p-6">
          <h1 className="p-2 font-openSans mb-2 font-extrabold text-3xl text-center text-dracula-currentLine">
            YouTV
          </h1>
          <p className="container justify-center p-4 px-12 w-full font-openSans font-light text-l">
          Youtube copy was a fun project mimicing the popular website youtube. 
          This project consisted of using data from the youtube API and allows the user to sign up, post comments, and search for videos. The front end is built on react with redux to manage application state. The backend consists of postgresql to store user accounts and comments combined with passport to persist and authorize returning/new users. The application also makes use of Bcrypt to help further secure users accounts.
          </p>
          <div className="w-full h-8 flex container px-10">
            <div className="h-full w-32 text-center mx-2">
            <button className="linkButton text-white w-full h-full" style = {{outline:"none"}} onClick = {() =>{
                window.open("https://you-tv-app.herokuapp.com/signin","_blank");
              }}>Live</button>
            </div>
            <div className="h-full w-32 text-center mx-2">
            <button className="linkButton text-white w-full h-full" style = {{outline:"none"}} onClick = {() =>{
                window.open("https://github.com/RaymondLi-1993/youtubeClone","_blank");
              }}>Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;




