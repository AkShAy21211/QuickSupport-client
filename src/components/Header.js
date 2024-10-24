import React from "react";
import searchIcon from "../assests/search.png";
import userWithSheildIcon from "../assests/shield-user.png";
import notification from "../assests/notification.png";
import profile from "../assests/profile.png";

const Header = () => {
  return (
    <header
      id="header-container"
      className="bg-black h-20  flex justify-between p-4 border-l border-l-white/40"
    >
      <div
        id="header-left-section"
        className="w-[343px] h-12 rounded-rounded-10  gap-2 relative hidden md:flex"
      >
        <img
          src={searchIcon}
          alt="Search"
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
        <input
          type="text"
          className="w-full h-full pl-10 pr-2 rounded-rounded-10 bg-white/10"
          placeholder="Search..."
        />
      </div>

      <div
        id="header-right-section"
        className="flex items-center gap-4 h-10 w-[239px]"
      >
        <div className="text-green flex w-[143px] h-10 border border-green gap-1 p-2 rounded-lg cursor-pointer">
          <img src={userWithSheildIcon} alt="" />
          <p className="text-center text-sm text-nowrap">Trusted Member</p>
        </div>

        <img src={notification} className="w-6 h-6 cursor-pointer" alt="" />

        <div id="profile">
          <img src={profile} className="w-10 h-10 cursor-pointer" alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
