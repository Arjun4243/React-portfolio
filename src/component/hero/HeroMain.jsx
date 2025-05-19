import React from "react";
import HeroText from "./HeroText.jsx";
import HeroPic from "./heroPic.jsx";
import HeroGrediant from "./HeroGrediant.jsx";


export default function HeroMain() {
  return (
    <>
      <div className="here-main container w-full mx-auto flex justify-around items-center  ">
        <HeroText></HeroText>
        <HeroPic></HeroPic>
     
       
      </div>
      <HeroGrediant className="absolute
        "></HeroGrediant>

    </>
  );
}
