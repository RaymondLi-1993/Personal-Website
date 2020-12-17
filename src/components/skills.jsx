import React from "react";

import Javascript, {
  ReactIcon,
  Html,
  Css,
  MongoDb,
  Redux,
  NodeJs,
  Git,
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
  ];

  return (
    <div
      id="Skills"
      className="w-full h-1/3 bg-gray-800 transform -skew-y-2 mt-4"
    >
      <div className="container items-center m-auto w-full h-full transform skew-y-2 p-4">
        <div className="text-center font-mono p-4 text-5xl text-white">
          Skills
        </div>
        <div className="m-auto container flex flex-row w-9/12 items-center justify-center h-2/3 flex-wrap">
          {newArr.map((elem, index) => {
            return (
              <div
                key={index}
                className="lg:w-20 lg:h-20 w-16 h-16 content-center"
              >
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
