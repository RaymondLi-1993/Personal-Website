import React from "react";

import Header from "./header";
import Hero from "./hero";
import Project from "./projects";
import Skills from "./skills";
import AboutMe from "./aboutMe";
import ContactMe from "./contactMe";

function App() {
  return (
    <div className="w-screen h-screen m-0 p-0">
      <Header />
      <Hero />
      <Project />
      <Skills />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
