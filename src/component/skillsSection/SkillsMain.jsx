import React from "react";
import SkillsText from "./SkillsText";
import AllSkill from "./AllSkills";
import AllSkillSM from "./AllSkillSM"

export default function SkillsMain() {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <SkillsText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden">
          <AllSkill />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillSM/>
        </div>
      </div>
    </div>
  );
}
