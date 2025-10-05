import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

function NavebarLink() {
  return (
    <>
<div className=" nav-link ">
      <div className=" nav-link-chiled ">       
         <Router >
          <Link to="/Home" className="nav-triger-btn" >Home</Link>
          <Link to="/About" className="nav-triger-btn">About</Link>
          <Link to="/Contact" className="nav-triger-btn">Contact</Link>
    

        <Routes>


          <Route path="/Home" element={"#"}></Route>
        </Routes>

        </Router>
    </div>
        
      </div>
    </>
  );
}
export default NavebarLink;
