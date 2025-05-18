import React from 'react';
import download from "../../image/download.gif"; // Import the image


function NavebarButton(){
    return(
        <>
            <button className='resume-button flex items-center border border-cyan gap-1 rounded-full pl-3 bg-gradient-to-r from-cyan to-orange font-bold text-black hover:scale-110 transition-all duration-100 shadow-custom-blue'>Download Resume
                <span><img src={download}></img></span>
            </button>
        </>
    );
}   
export default NavebarButton;