import React from "react";
import AboutHome from "../components/About_Home";
import Language from "../components/Language_Carousel";
import SpecializedSkills from "../components/Specialized_Skills";
import SkillsLearned from "../components/Skills_Learned";
import Projects from "../components/projects";

const Home = () => {
  document.title = "Portfolio";
  return (
    <>
      <AboutHome />
      <Projects />
      <Language />
      <SpecializedSkills />
      <SkillsLearned />
    </>
  );
};

export default Home;
