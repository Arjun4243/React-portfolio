import React from "react";
import { FiHexagon } from "react-icons/fi";
import me from "../../image/me.png";

export default function HeroPic() {
  return (
    <>
      <div className=" pic ">
        <img src={me} alt="hero" className=" w-60 h-auto  " />

        <div className="">
          <FiHexagon className=" hexagon h-auto w-72 absolute text-cyan animate-spin duration-1000 blur-sm" />
        </div>
      </div>
    </>
  );
}
