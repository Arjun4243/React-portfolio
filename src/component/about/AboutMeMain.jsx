import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

export default function AboutMeMain() {
  return (
    <div className=" flex px-4 mt-8 justify-between items-center">
      <AboutMeText />
      <AboutMeImage />
    </div>
  );
}
