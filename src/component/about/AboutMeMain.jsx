import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

export default function AboutMeMain() {
  return (
    <div className="flex container mx-auto mt-[30px] justify-evenly items-center w-screen ">
      <AboutMeText />
      <AboutMeImage />
    </div>
  );
}
