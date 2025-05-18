/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        brown: "#53423e",
        lightBrown: "#645550",
        darkBrown: "#2c2523",
        black: "#1e1917",
        white: "#f1e1d9",
        cyan: "#15d1e9",
        lightCyan: "#88e5f0",
        darkCyan: "#009fb3",
        orange: "#fb9718",
        lightOrange: "#fac27b",
        darkOrange: "#d28422",
        grey: "#626965",
        lightGrey: "#978580",
        darkGrey: "#3f4441",
  
      },

      screens:{
        "sm776":'776px'

      },

      fontfamily:{
        body:["Josefin Sans"],
        special:["Roboto"]
      },

      boxShadow:{
        "custome-blue":"0px 4px 10px blue",
        cyanShadow:"0px 0px 20px 0px",
        cyanMediumShadow:"10px 10px 200px 150px rgba(94, 206,220,0.5)",
        orangeMediumShadow:"10px 10px 200px 150px rgba(240,169,79,0.5)",
      }
    },
  },
  plugins: [],
}



