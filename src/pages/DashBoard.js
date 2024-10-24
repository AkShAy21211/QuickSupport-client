import React, { useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import SupportForm from "../components/form/SupportForm";

const DashBoard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-secondaryBlack h-[100vh] flex">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-[280px]" : "ml-[80px]"
        }`}
      >
        <Header />
        <div
          id="contact-container-outer "
          className=" w-auto  md:w-[726px] lg:w-[1228px] h-[578px] p-6 rounded-xl bg-black fixed top-[106px] left-32 sm:left-[196px] md:left-[196px] lg:left-[296px] flex justify-center items-center"
        >
          <div id="contact-container-inner">
            <SupportForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
// 106
// 296