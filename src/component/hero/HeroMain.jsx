import React from "react";
import HeroText from "./HeroText.jsx";
import HeroPic from "./heroPic.jsx";

export default function HeroMain() {
  return (
    <>
      <div className="here-main container w-full mx-auto flex justify-around items-center  ">
        <HeroText></HeroText>
        <HeroPic></HeroPic>
      </div>
    </>
  );
}
