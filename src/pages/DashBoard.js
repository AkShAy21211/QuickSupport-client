import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import SupportForm from "../components/form/SupportForm";
import { createTicket, getAllIssueCategory } from "../api/ticket";
import { Toaster } from "sonner";

const DashBoard = () => {
  // State for form inputs and errors
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  async function fetchIssues() {
    try {
      const response = await getAllIssueCategory();
      if (response) {
        setIssues(response);
      }
    } catch (error) {
      console.error("Error fetching issues", error);
    }
  }

  // Function to handle ticket form submission
  const onSubmit = async (e) => {
    e.preventDefault();

    if (!description.trim()) {
      setDescriptionError("Description is required");
      return;
    }
    if (description.length < 10) {
      setDescriptionError("Description should be at least 10 characters");
      return;
    }
    if (!category.trim()) {
      setCategoryError("Category is required");
      return;
    }

    setDescriptionError("");
    setCategoryError("");

    try {
      const response = await createTicket(description, category);
      setDescription("");
      setCategory("");
      setDescriptionError("");
      setCategoryError("");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="bg-secondaryBlack h-[1024px] flex">
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "ml-[280px]" : "ml-[80px]"
        }`}
      >
        <Header isOpen={isSidebarOpen} />
        <div
          id="contact-container-outer "
          className=" w-[270px]  md:w-[526px] lg:w-[726px] xl:w-[1200px] h-[578px] p-6 rounded-xl bg-black absolute top-[106px] left-[100px] sm:left-[196px] md:left-[196px] lg:left-[296px] flex justify-center items-center"
        >
          <SupportForm
          issues={issues}
            description={description}
            setDescription={setDescription}
            decError={descriptionError}
            category={category}
            setCategory={setCategory}
            catError={categoryError}
            onSubmit={onSubmit}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default DashBoard;
// 106
// 296
