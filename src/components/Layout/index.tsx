// import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import Header from "../Header";
import { useState } from "react";

function Layout() {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <div className="relative m-0 flex h-full w-full flex-col p-0">
      <Header />
      <div className="m-0 flex h-full w-full p-0">
        <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />
        <div className="border-box w-full">{/* <Outlet /> */}</div>
      </div>
    </div>
  );
}

export default Layout;
