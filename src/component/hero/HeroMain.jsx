import React from "react";
import HeroText from "./HeroText.jsx";
import HeroPic from "./HeroPic.jsx";
import HeroGrediant from "./HeroGrediant.jsx";
import SubHeroSection from "./SubHeroSection.jsx"

export default function HeroMain() {
  return (
    <section className="overflow-hidden pt-16 relative">
   
      <div className="hero-main h-[200px] container w-full mx-auto flex lg:flex-row justify-around items-center sm:mt-40 px-4 overflow-hidden">
        <HeroText/>
        <HeroPic />
      </div>

      <div className="sm:w-full overflow-hidden relative">
      
        <HeroGrediant className="absolute" />
        <SubHeroSection />
      </div>
    </section>
  );
}
