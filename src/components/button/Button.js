import React from "react";

const Button = ({ label }) => {
  return (
    <input
      type="submit"
      className="flex-grow text-center border  rounded-[10px] p-2 bg-white text-black font-semibold"
      value={label}

    />
  );
};

export default Button;
