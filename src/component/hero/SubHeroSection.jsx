import React from "react";
export default function SubHeroSection(){
    return(
        <>
        <div className="container 
        my-14 mx-auto border-y border-lightGrey text-lightGrey flex justify-around uppercase 
        
        xl:text-3xl md:text-2xl sm:text-4xl py-6 items-center gap-4 bg-brown">
            <p className="md:block sm:hidden">Fast Learner</p>
            <p className="md:block sm:hidden">Team Work</p>
            <p>Detail Master</p>
        </div>
        </>
    )
}