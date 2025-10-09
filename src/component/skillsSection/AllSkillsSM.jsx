import React from "react";
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiCss3, SiHtml5 } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript size={48} className="text-yellow-400" /> },
  { name: "React", icon: <SiReact size={48} className="text-blue-400" /> },
  { name: "Node.js", icon: <SiNodedotjs size={48} className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress size={48} className="text-gray-600" /> },
  { name: "CSS", icon: <SiCss3 size={48} className="text-blue-600" /> },
  { name: "HTML", icon: <SiHtml5 size={48} className="text-orange-500" /> },
  // Add more skills as needed
];

export default function AllSkillsSM() {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex space-x-4 px-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 h-32 bg-black rounded-lg flex flex-col items-center justify-center text-white"
          >
            <div className="mb-2">{skill.icon}</div>
            <div className="text-center text-sm">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
