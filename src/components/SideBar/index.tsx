/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { sidebarItems } from './constants.js';
import primaryLogoImg from '../../assets/logo.png';
import secondaryLogoImg from '../../assets/logo1.png';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
interface ISidebarProps {
  isCollapse?: boolean;
  setIsCollapse: (value: any) => void;
}
const Sidebar: React.FC<ISidebarProps> = ({ isCollapse, setIsCollapse }) => {
  const navigate = useNavigate();
  const handleSidebarCollapse = () => {
    console.log('asdasd');
    setIsCollapse((isCollapse: any) => !isCollapse);
  };
  return (
    <div
      className={`z-10 bg-white sidebar-transition fixed flex h-full flex-col justify-between border-r-2 border-slate-100 px-4 ${
        isCollapse ? 'w-[100px]' : 'w-fit'
      }`}
    >
      <ul className="flex flex-col items-center">
        <li className="flex justify-center mt-8 mb-16">
          <img src={isCollapse ? secondaryLogoImg : primaryLogoImg} alt="" />
        </li>
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={'flex justify-start p-2 mb-5 max-md:text-sm'}
            onClick={() => navigate(item.to)}
          >
            <img src={item.icon} className="h-6 w-6 max-md:w-4 mr-2" alt="" />
            <label className={isCollapse ? 'hidden' : 'text-animate'}>
              {item.label}
            </label>
          </li>
        ))}
      </ul>

      <div className="w-20 mt-5 p-2">
        <img src="./src/assets/profile.jpg" className="rounded-full" alt="" />
      </div>

      <div
        className={` arrow-animate absolute  ${isCollapse ? 'left-20' : 'left-36'}  top-10 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-100 hover:cursor-pointer 
          ${isCollapse ? '' : 'rotate-arrow'}`}
        onClick={handleSidebarCollapse}
      >
        {isCollapse ? (
          <ArrowRightIcon className="h-4 w-4 " />
        ) : (
          <ArrowLeftIcon className="h-4 w-4 " />
        )}
      </div>
    </div>
  );
};
export default Sidebar;
