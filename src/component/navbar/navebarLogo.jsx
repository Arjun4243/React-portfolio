import React from "react";
import logo from '../../image/logo.png'; // adjust path as needed

function NavebarLogo() {
  return (
    <>
      <div>
        <img src={logo} alt="Logo" className='logo h-8 mx-4' />
      </div>
    </>
  );
}

export default NavebarLogo;
