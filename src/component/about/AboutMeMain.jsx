import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";

export default function AboutMeMain() {
  return (
    <>
      <div className="flex container mx-auto mt-[30px] justify-center items-center">
      
          <AboutMeText className="w-[322px]" />
       
          <AboutMeImage className="w-[300px]" />
       
      </div>
    </>
  );
}
