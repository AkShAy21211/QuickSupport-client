/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*"],
  theme: {
    extend: {
      colors: {
        gray: "#101010",
        green:"#4CAF50"
      },
      backgroundColor: {
        secondaryBlack: "#101010",
      },
      borderRadius: {
        "rounded-10": "10px",
      },
    
    },
    
  },
  plugins: [],
};
