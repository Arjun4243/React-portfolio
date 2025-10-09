import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "CSS",
  "HTML",
  "TypeScript",
  "Redux",
  "GraphQL",
  "MongoDB",
];

const colors = [
  "text-red-500",
  "text-blue-500",
  "text-green-500",
  "text-yellow-500",
  "text-purple-500",
  "text-pink-500",
  "text-indigo-500",
  "text-teal-500",
  "text-orange-500",
  "text-cyan-500",
];

export default function SkillsSpinner() {
  return (
    <div className="relative w-64 h-64 mx-auto my-8">
      <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-spin-slow"></div>
      <div className="absolute inset-0 rounded-full border-4 border-gray-300 animate-spin-slow-reverse"></div>
      <div className="absolute inset-0 flex justify-center items-center rounded-full">
        {skills.map((skill, index) => {
          const angle = (360 / skills.length) * index;
          const colorClass = colors[index % colors.length];
          return (
            <span
              key={index}
              className={`absolute ${colorClass} font-bold`}
              style={{
                transform: `rotate(${angle}deg) translate(100px) rotate(-${angle}deg)`,
                transformOrigin: "center center",
                whiteSpace: "nowrap",
              }}
            >
              {skill}
            </span>
          );
        })}
      </div>
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-reverse 20s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
