// import { Outlet } from "react-router-dom";
import Sidebar from '../SideBar';
import Header from '../Header';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="w-full h-full bg-zinc-200">
      <Header />
      <div className="flex h-full w-full">
        <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        <div className=" w-full h-full mt-36 ml-52">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
