/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { sidebarItems } from "./constants.js";
import LogoImg from "../../assets/logo.png";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
interface ISidebarProps {
  isCollapse?: boolean;
  setIsCollapse: (value: any) => void;
}
const Sidebar: React.FC<ISidebarProps> = ({ isCollapse, setIsCollapse }) => {
  const handleSidebarCollapse = () => {
    setIsCollapse((isCollapse: any) => !isCollapse);
  };
  return (
    <div
      className={`h-full bg-zinc-0 flex flex-col justify-between  fixed px-5`}
    >
      <div
        className={`${
          isCollapse ? "hidden" : "block"
        } h-full flex flex-col justify-between relative 
          
          `}
      >
        <ul>
          <li className=" mt-8 mb-16 m-auto">
            <img src={LogoImg} className=" " alt="" />
          </li>
          {sidebarItems.map((item, index) => (
            <Link to={item.to} key={index}>
              <div className="p-2 flex  items-center">
                <img src={item.icon} className="h-6 w-6 max-md:w-4 mr-2" />
                <li className=" max-md:text-sm">{item.label}</li>
              </div>
            </Link>
          ))}
        </ul>

        <div className="w-20 mt-5 p-2">
          <img src="./src/assets/profile.jpg" className="rounded-full" />
        </div>

        <div
          className={`arrow-animate absolute left-40 top-10 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-100 hover:cursor-pointer 
          ${isCollapse ? "" : "rotate-arrow"}`}
          onClick={handleSidebarCollapse}
        >
          {isCollapse ? (
            <ArrowRightIcon className="h-4 w-4 " />
          ) : (
            <ArrowLeftIcon className="h-4 w-4 " />
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
