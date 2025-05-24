import React from "react";
import SingleSkill from "./SingleSkill.jsx";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGit } from "react-icons/fa";


export default function AllSkills(){

    const skills=[
        {
        skill:"HTML",
        icon:TiHtml5,
        },

        {
            skill:"Css",
            icon:FaCss3Alt,
        },

        {
            skill:"javascript",
            icon:RiJavascriptFill,
        },
        {
            skill:"React",
            icon:FaReact,
        },
        {
            skill:"node.js",
            icon:IoLogoNodejs,
        },
        {
            skill:"express.js",
            icon:SiExpress,
        },
        {
            skill:"MY SQL",
            icon:SiMysql
        },

        {
            skill:"Git",
            icon:FaGit,
        }


    ]

    return (
        <div className="container flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto ">
            {skills.map((e, index) => {
                return <SingleSkill key={index} text={e.skill} imgSvg={<e.icon />} />;
            })}

            <div>
            <img src={skills.icon} alt="" />
            </div>
        </div>

        
        );
    }