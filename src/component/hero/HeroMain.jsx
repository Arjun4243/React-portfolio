import React from "react";
import HeroText from "./HeroText.jsx";
import HeroPic from "./heroPic.jsx";
import HeroGrediant from "./HeroGrediant.jsx";

export default function HeroMain() {
  return (
    <>
      <div className="here-main container w-full mx-auto flex justify-around items-center sm:flex-col ">
        <HeroText></HeroText>
        <HeroPic></HeroPic>
        <HeroGrediant></HeroGrediant>
      </div>
    </>
  );
}
