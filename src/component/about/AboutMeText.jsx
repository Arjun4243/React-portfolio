import React from "react";

export default function AboutMeText(){
    return(
        <>
            <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
                <h2 className="text-6xl text-cyan mb-10">About me</h2>
                <p className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, quasi. Praesentium commodi voluptates, mollitia enim facere odio, nobis harum libero reiciendis quae iste magni amet nulla, sed quia officia ut.</p>
                <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-st art sm:self-center text-white">My Project</button>
            </div>
        </>
    )
}