import React from "react"

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


    return(
        <div className="grid md:grid-cols-4 sm:grid-cols-2 my-12">
{skills.map((e, index) => {
    return <div key={index} className="flex flex-col items-center">
        <e.icon className="text-7xl text-orange" />
        <p className="text-center mt-4 text-white ">{e.skill}</p>
    </div>
})}
        </div>
    )
}