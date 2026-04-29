import React from "react";
import SkillsText from "./SkillsText";
import AllSkill from "./AllSkills";
import AllSkillsSM from "./AllSkillsSM";
// import SkillsSpinner from "./SkillsSpinner";

export default function SkillsMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillsText />
        {/* This is the circular layout for large screens. Hide it on medium and smaller screens. */}
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:w-full hidden lg:block">
          <AllSkill />
        </div>
      
        <div className=" mt-10 md:hidden lg:hidden">
          <AllSkillsSM />
        </div>

        {/* Add the spinner for all screen sizes
        <div className="mt-10">
          <SkillsSpinner />
        </div> */}
      </div>
    </div>
  );
}
