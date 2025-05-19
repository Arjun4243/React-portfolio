import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

export default function AboutMeMain() {
  return (
    <>
      <div className="container flex md:flex-row sm:flex-col gap-12 px-4  mx-auto mt-[100px] justify-between items-center">
        <div>
          <AboutMeText />
        </div>
        <div>
          <AboutMeImage />
        </div>
      </div>
    </>
  );
}
