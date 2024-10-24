import React from "react";

const SocialButton = ({ image, label }) => {
  return (
    <div className="flex items-center border gap-4 rounded-[10px] p-2">
      <img src={image} className="w-6" alt={label} />
      <span className="flex-grow text-center">{label}</span>
    </div>
  );
};

export default SocialButton;
