import React from 'react';

export default function HeroGrediant() {
    return(
        <>
        <div>
            <div className='shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>

            <div className='shadow-orangeMediumShadow absolute top-0 right-[0px] -z-10 animate-pulse'></div>

            <div className='shadow-orangeMediumShadow absolute top-[300px] left-[0px] -z-10 animate-pulse'></div>

            <div className='shadow-cyanMediumShadow absolute top-[500px] left-[0px] -z-10 animate-pulse'></div>
        </div>
        </>
    )
}