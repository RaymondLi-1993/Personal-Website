import React from "react";
import TypeWriter from "typewriter-effect";

import DownArrow from "./iconComponents/arrow";

const Hero = () => {
  



  const handleClick = () => {
    document.getElementById(`projects`).scrollIntoView({ behavior: `smooth` });
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-dracula-currentLine">
      <div className="container w-full m-auto p-6 lg:text-left text-center leading-relaxed">
        <h1
          className={` text-dracula-draculaCyan w-full font-Lato text-6xl font-semibold p-2 lg:mx-8`}
        >
          Hello there, I am{" "}
          <span className="sm:leading-loose lg:leading-none font-NunitoSans font-extrabold text-dracula-currentLine text-6xl" style={{WebkitTextStroke:"2px silver"}}>
            RAYMOND LI
          </span>
        </h1>
        
        <h1
          className={` text-dracula-draculaCyan font-thin font-RobotoMono text-5xl p-2 lg:mx-8`}
        >
          <TypeWriter
          onInit={((typewriter) =>{
            typewriter
            .typeString("I am a Fullstack Engineer.")
            .start();
          })}
          />
        </h1>
        <div className="container h-16 flex items-end justify-center lg:justify-start lg:mx-11">
          <button className="linkButton w-24 h-8 text-white" style={{ outline: `none` }} onClick={() => {
            window.open("https://drive.google.com/file/d/1XYBa7DF3Gaa1G9Cu2gR-PDp51OsMyZEY/view?usp=sharing", "_blank")
            
          }} >Resume</button>
        </div>
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
