import React from "react";
import SubSkill from "../../image/subSkills.jpg"

export default function SubSkills(){
    return(
        <div className="border-y-2 border-lightGrey relative ">
            <div className="absolute bg-gradient-to-r from-orange to-cyan opacity-50 wofull h-full"></div>
            <img src={SubSkill} alt="subskill" />
        </div>
    )
}