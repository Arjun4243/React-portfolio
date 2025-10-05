import React from "react";
import AboutMe from "../../image/about-me.jpg";

export default function AboutMeImage(){
    return (
        <div className="h-[500px] w-[300px] relative group">
        <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-[200px] sm:w-[250px] lg:w-[300px] rounded-[100px] absolute overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <img src={AboutMe} alt="Arjun, the author of this portfolio" className="h-full w-full object-cover" />
        </div>
        <div className="h-[300px] sm:h-[400px] lg:h-[500px] w-[150px] sm:w-[200px] lg:w-[250px] bg-orange absolute bottom-[-3px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 transition-transform duration-500 group-hover:rotate-[-2deg]"></div>
        </div>
    )
}