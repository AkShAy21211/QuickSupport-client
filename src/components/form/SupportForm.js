import React from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import backArrow from "../../assests/back.png";
const SupportForm = () => {
  return (
    <div
      id="login-container"
      className="  p-10 rounded-3xl  md:w-[423px] h-[530px]  gap-8"
    >
      <Link className="float-start w-full flex items-center gap-1 text-white/60 mb-5">
        <img className="w-[7px] h-[14px] " src={backArrow} alt="" />
        Back
      </Link>
      <h2 className="text-2xl font-bold text-white float-start w-full mb-5">
        Contact Support
      </h2>
      <div id="form-container" className="w-full">
        <form
          action=""
          className="flex flex-col w-full gap-8"
          onSubmit={() => {}}
        >
          <div className="w-[343px] h-[170px] flex flex-col gap-1">
            <label htmlFor="description" className="text-white mb-1">
              Issue/Query Description
            </label>
            <textarea
              id="description"
              value={""}
              onChange={(e) => {}}
              name="description"
              className="rounded-md border w-[343px] border-gray-300 p-2 mb-4 bg-transparent  h-36 "
              placeholder="Describe your issue in detail..."
            />
          </div>
          {/* {error && <p className="text-red-500 mb-3">{error}</p>} */}
          <div className="w-[343px] h-[74px] flex flex-col gap-1">
            <label htmlFor="description" className="text-white mb-1 ">
              Issue Category
            </label>{" "}
            <select
              name="category"
              className="h-14 border  rounded-rounded-10 bg-transparent text-sm text-white py-4 px-[10px] flex justify-between  "
            >
              <option className="bg-black text-white " value="">
                Select
              </option>
              <option className="bg-black text-white" value="1">
                Category 1
              </option>
              <option className="bg-black text-white" value="2">
                Category 2
              </option>
              <option className="bg-black text-white" value="3">
                Category 3
              </option>
            </select>
          </div>
          <Button label={"Open a Ticket"} />
        </form>
      </div>
    </div>
  );
};

export default SupportForm;
