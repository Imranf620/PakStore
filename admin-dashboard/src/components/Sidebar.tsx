import React from "react";
import { MdDashboard } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { AiOutlineTransaction } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { FaChartColumn } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import { CiStopwatch } from "react-icons/ci";
import { RiCoupon2Line } from "react-icons/ri";
import { FaGamepad } from "react-icons/fa";

interface SidebarItem {
  text: string;
  icon: React.ElementType;
  link: string;
}

interface SidebarGroup {
  title: string;
  arrData: SidebarItem[];
}



const Sidebar: React.FC = () => {
  const location = useLocation();

  const SideBarData: SidebarGroup[] = [
    {
      title: "dashboard",
      arrData: [
        {
          text: "Dashboard",
          icon: MdDashboard,
          link: "/admin/dashboard",
        },
        {
          text: "Products",
          icon: FiShoppingBag,
          link: "/admin/products",
        },
        {
          text: "Customers",
          icon: PiUsersThree,
          link: "/admin/customers",
        },
        {
          text: "Transaction",
          icon: AiOutlineTransaction,
          link: "/admin/transactions",
        },
      ],
    },
    {
      title: "charts",
      arrData: [
        {
          text: "Bar",
          icon: FaChartColumn,
          link: "/admin/chart/bar",
        },
        {
          text: "Pie",
          icon: FaChartPie,
          link: "/admin/chart/pie",
        },
        {
          text: "Line",
          icon: FaChartLine,
          link: "/admin/chart/line",
        },
        
      ],
    },

    {
      title: "Apps",
      arrData: [
        {
          text: "Stopwatch",
          icon: CiStopwatch,
          link: "/admin/app/stopwatch",
        },
        {
          text: "Coupon",
          icon: RiCoupon2Line,
          link: "/admin/app/coupon",
        },
        {
          text: "Toss",
          icon: FaGamepad,
          link: "/admin/app/toss",
        },
        
      ],
    },
  ];

  return (
    <aside className="w-full bg-white h-screen sidebar-scrollbar overflow-y-auto p-3">
      <h1 className="text-2xl font-bold">Logo.</h1>
      <div className="p-6 flex gap-2 flex-col">

      {SideBarData.map((sideBar, i) => (
        <div className="flex flex-col gap-3" key={i}>
          <h1 className=" text-sm tracking-wider text-[#0000006c] font-thin uppercase">{sideBar.title}</h1>
          {sideBar.arrData.map((sideLinks, index) => (
            <Link to={sideLinks.link} className={`flex items-center px-4 py-[6px] rounded-md gap-3 ${location.pathname==sideLinks.link?"bg-blue-200  text-blue-500":""}`} key={index}>
              {<sideLinks.icon />}
              <button  className="font-normal">{sideLinks.text}</button>
            </Link>
          ))}
        </div>
      ))}
      </div>
    </aside>
  );
};

export default Sidebar;
