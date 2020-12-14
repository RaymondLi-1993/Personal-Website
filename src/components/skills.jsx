import React from "react";

import Javascript, {
  ReactIcon,
  Html,
  Css,
  TailWindCss,
  MongoDb,
} from "./iconComponents/technologies";

const skills = () => {
  const newArr = [
    <Javascript />,
    <Html />,
    <Css />,
    <ReactIcon />,
    <TailWindCss />,
    <MongoDb />,
  ];

  return (
    <div className="w-full h-1/2 bg-gray-800 transform -skew-y-3">
      <div className="container items-center m-auto w-full h-full transform skew-y-3">
        <div className="text-center font-mono p-4 text-5xl text-white">
          Skills
        </div>

        <div className="m-auto container flex flex-row w-9/12 items-center justify-center h-2/3 flex-wrap">
          {newArr.map((elem, index) => {
            return (
              <div key={index} className="w-20 h-20 content-center">
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
