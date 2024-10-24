import React, { useState } from "react";
import menuIcon from "../assests/menu.png";
import menuItem from "../constants";
const SideBar = ({ isOpen, toggleSidebar }) => {
  const sidebarClass = isOpen ? "w-[280px]" : "w-[80px]";
  const [selected, setSelected] = useState("");
  return (
    <div
      className={`sidebar bg-black  h-full transition-all fixed z-50 duration-300 ${sidebarClass} px-4`}
    >
      <div id="logo" className="w-60 h-14 flex justify-between py-4">
        <button onClick={toggleSidebar}>
          <img src={menuIcon} alt="" />
        </button>
      </div>

      <ul className="mt-5">
        {menuItem.map((item, i) => (
          <li
            key={i}
            onClick={() => setSelected(item.label)}
            className={`relative group ${
              selected === item.label
                ? "bg-white/10 text-white"
                : "text-white/60"
            } ${
              isOpen
                ? " w-[248px] transition-width duration-300 ease-in-out"
                : "w-10"
            } h-10 rounded-rounded-10 p-2 flex gap-2 cursor-pointer overflow-hidden mb-2`}
          >
            <img
              src={item.icon}
              alt=""
              className={`${
                selected === item.label ? "filter invert brightness-0" : ""
              }`}
            />
            {isOpen ? item.label : null}

            {/* Tooltip */}
            {!isOpen && (
              <span className="absolute left-12 top-1/2 -translate-y-1/2 hidden group-hover:block bg-gray-800 text-white text-xs rounded-md py-1 px-2 z-10 whitespace-nowrap">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
