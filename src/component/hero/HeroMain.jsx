import React from "react";
import HeroText from "./HeroText.jsx";
import HeroPic from "./HeroPic.jsx";
import HeroGrediant from "./HeroGrediant.jsx";
import SubHeroSection from "./SubHeroSection.jsx"


export default function HeroMain() {
  return (
    <section className="relative overflow-hidden pt-16">
      <div className="hero-main container w-full mx-auto flex flex-col lg:flex-row justify-around items-center">
        <HeroText />
        <HeroPic />
      </div>
      <HeroGrediant className="absolute" />
      <SubHeroSection />
    </section>
  );
}
