import React from "react";
import NavebarButton from "./navebarButton";
import NavebarLink from "./navebarLink";
import NavebarLogo from "./navebarLogo";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react";


import "../../App.css";



function NavebarMain() {

  const [navBurger,setNavBurger]=useState(false);

  const handleNavBurger=(e)=>{
      e.preventDefault();
     setNavBurger(!navBurger);
  };

  return (
    <>
      <nav className="container text-white  mx-auto px-4 w-full fixed left-[50%] transform -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full  mx-auto bg-black items-center p-3 rounded-full border-3 border-orange ">
          <NavebarLogo />
          <div className="nav-link ">
           <div className={`${navBurger ? "block" : "hidden" } lg:block  `}> 
            <NavebarLink />
          </div>
          </div>
          <NavebarButton />
        </div>

        <button onClick={handleNavBurger}>
          <div className="lg:hidden flex []:block bg-black rounded-full place-content-center p-[15px] justify-center item-center border-[3px] border-orange">
            <GiHamburgerMenu className="text-2xl" />
          </div>
        </button>
      </nav>
    </>
  );
}
export default NavebarMain;
