import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout: React.FC = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="flex w-screen bg-[#F7F7F7]">
      <div className={`w-[250px] absolute lg:static z-10 duration-300 ${menu===false?"left-[-100vw]":" left-0"} `}>
        <div
          onClick={() => setMenu(!menu)}
          className={`fixed md:hidden  top-6 flex flex-col gap-1 ${menu?"left-48":"left-2"}`}
        >
          <div
            className={`w-6 bg-[#00000068] h-1 rounded duration-300 origin-center ${
              menu ? "rotate-[45deg] translate-x-1 translate-y-1" : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-6 bg-[#00000068] h-1 rounded ${
              menu ? "hidden" : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-6 bg-[#00000068] h-1 rounded duration-300 origin-center ${
              menu
                ? "rotate-[-45deg] translate-x-1 -translate-y-1 "
                : "rotate-0"
            }`}
          ></div>
        </div>
        <Sidebar />
      </div>
      <div className="w-[100%] lg:w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
