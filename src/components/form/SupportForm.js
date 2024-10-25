import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import backArrow from "../../assests/back.png";
const SupportForm = ({
  description,
  setDescription,
  decError,
  category,
  setCategory,
  catError,
  issues,
  onSubmit,
}) => {
  return (
    <div
      id="support-container"
      className="  p-10 rounded-3xl w-auto sm:w-[380px]  md:w-[423px] h-[530px]  gap-8"
    >
      <Link className="float-start w-full flex items-center gap-1 text-white/60 mb-5">
        <img className="w-[7px] h-[14px] " src={backArrow} alt="" />
        Back
      </Link>
      <h2 className="md:text-2xl font-bold text-white float-start w-full mb-5">
        Contact Support
      </h2>
      <div id="form-container" className="w-full">
        <form
          action=""
          className="flex flex-col w-full gap-5"
          onSubmit={onSubmit}
        >
          <div className="  lg:w-[343px] min-h-[170px] flex flex-col gap-1">
            <label htmlFor="description" className="text-white text-sm md:text-lg ">
              Issue/Query Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              name="description"
              className="rounded-md border w-[240px] md:w-auto  border-gray-300 p-2 mb-4 bg-transparent  h-36 "
              placeholder="Describe your issue in detail..."
            />
            {decError && <p className="text-red-500 ">{decError}</p>}
          </div>
          {/* {error && <p className="text-red-500 mb-3">{error}</p>} */}
          <div className=" min-h-[74px] flex flex-col gap-1">
            <label htmlFor="description" className="text-white  text-sm md:text-lg ">
              Issue Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
              className="h-14 border w-[240px] md:w-auto  rounded-rounded-10 bg-transparent text-sm text-white py-4 px-[10px] flex justify-between  "
            >
              <option className="bg-black text-white " value="">
                Select
              </option>
             {
              issues.map((issue,i) => (
                <option  key={issue.issue} value={issue._id}>
                  {issue.issue}
                </option>
              ))
 
             }
            </select>
            {catError && <p className="text-red-500">{catError}</p>}
          </div>
          <Button label={"Open a Ticket"} />
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
