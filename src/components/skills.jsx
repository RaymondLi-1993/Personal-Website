import React from "react";

import Javascript, {
  ReactIcon,
  Html,
  Css,
  MongoDb,
  Redux,
  NodeJs,
  Git,
  TailWind,
  RubyOnRails,
  PostgreSQL,
} from "./iconComponents/technologies";

const skills = () => {
  const newArr = [
    <Javascript />,
    <Html />,
    <Css />,
    <ReactIcon />,
    <MongoDb />,
    <Redux />,
    <NodeJs />,
    <Git />,
    <TailWind />,
    <RubyOnRails />,
    <PostgreSQL />
  ];

  const names = [
    "Javascript",
    "Html",
    "CSS", 
    "React", 
    "MongoDb",
    "Redux", 
    "NodeJs", 
    "Git", 
    "TailWind", 
    "Rails",
    "PostgreSQL"
  ]

  return (
    <div
      id="Skills"
      className="w-full h-80 bg-dracula-currentLine transform -skew-y-2 mt-4"
    >
      <div className="container items-center m-auto w-full h-full transform skew-y-2 p-4">
        <div className="text-center font-openSans p-4 text-5xl font-bold text-dracula-foreGround">
          Skills
        </div>
        <div className="m-auto container flex flex-row w-full items-center justify-center h-2/3 flex-wrap">
          {newArr.map((elem, index) => {
            return (
              <div
                key={index}
                className="lg:w-24 lg:h-24 lg:p-2 w-16 h-16 p-2 content-center"
              >
                <h1 className="text-dracula-foreGround w-18 text-center text-xs py-1 font-openSans md:text-base md:font-bold">{names[index]}</h1>
                {elem}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default skills;
