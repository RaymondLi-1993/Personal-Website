import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-full bg-gray-300">
      <h1>PROJECTS</h1>
      <div className="w-9/12 h-full m-auto grid grid-cols-2 gap-x-12 gap-y-2">
        <div className="h-l w-full m-4 p-6 bg-red-700"></div>
        <div className="h-l w-full m-4 p-6 bg-red-600"></div>
        <div className="h-l w-full m-4 p-6 bg-red-500"></div>
        <div className="h-l w-full m-4 p-6 bg-red-400"></div>
      </div>
    </div>
  );
};

export default Projects;
