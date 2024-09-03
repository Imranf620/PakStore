import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminLayout:React.FC = () => {
  return (
    <div className="flex bg-[#F7F7F7]">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
