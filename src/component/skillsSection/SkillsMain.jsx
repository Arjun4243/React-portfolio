import React from "react";
import SkillsText from "./SkillsText";
import AllSkill from "./AllSkills";

export default function SkillsMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillsText />
        {/* This is the circular layout for large screens. Hide it on medium and smaller screens. */}
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:block lg:block">
          <AllSkill />
        </div>
      
        {/* <div className="block md:hidden lg:hidden">
          <AllSkillSM/>
        </div> */}
      </div>
    </div>
  );
}
