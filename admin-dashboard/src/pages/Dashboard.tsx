import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa";
import userImg from "./../assets/user.png";
import { IoIosTrendingUp } from "react-icons/io";
import { IoIosTrendingDown } from "react-icons/io";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import DashboardChart from "../components/DashboardChart";
import Inventory from "../components/Inventory";
import GenderRatio from "../components/GenderRatio";
import DataTable from "../components/DataTable";


interface RevenueDetail {
  heading: string;
  value: number;
  color: "primary" | "secondary" | "success" | "error" | "warning";
  percentage: number;
  dollar?: boolean;
}

const RevenueData: RevenueDetail[] = [
  {
    heading: "Revenue",
    value: 340000,
    color: "primary",
    percentage: 40,
    dollar: true,
  },
  {
    heading: "Users",
    value: 400,
    color: "warning",
    percentage: -14,
    dollar: false,
  },
  {
    heading: "Transactions",
    value: 23000,
    color: "error",
    percentage: 40,
    dollar: false,
  },
  {
    heading: "Products",
    value: 1000,
    color: "secondary",
    percentage: +30,
    dollar: false,
  },
];

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <div className="px-6 h-screen overflow-y-auto w-full py-2 flex flex-col gap-10">
        <div className="p-2  border-[#0009] border-b-[1px] flex justify-between items-center">
          <div className="flex items-center gap-3">
            <CiSearch size={20} color="#0008" />
            <input
              type="text"
              placeholder="Search for data, users, docs"
              className="border-none outline-none bg-transparent text-sm"
            />
          </div>
          <div className="flex items-center gap-3">
            <FaRegBell size={20} color="#0008" />
            <img
              src={userImg}
              className="rounded-full"
              width={30}
              height={30}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-between w-full items-center flex-col md:flex-row flex-wrap gap-6">
          {RevenueData.map((detail, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-10 py-4 md:p-4 bg-white  justify-between   w-full md:w-52  rounded-lg shadow-md "
            >
              <div>
                <h1 className="text-[#0009] text-sm">{detail.heading}</h1>
                <h1 className="text-2xl font-bold">
                  {detail.dollar ? "$" : ""}
                  {detail.value}
                </h1>
                <div>
                  {detail.percentage > 0 ? (
                    <div className="text-[#00C300] flex gap-2 items-center">
                      <IoIosTrendingUp size={20} />
                      <span>+{detail.percentage}%</span>{" "}
                    </div>
                  ) : (
                    <div className="text-[#ca413c] flex gap-2 items-center">
                      <IoIosTrendingDown size={20} />
                      <span>{detail.percentage}%</span>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <CircularProgressWithLabel
                  value={(detail.percentage)}
                  color={detail.color}
                />
              </div>
            </div>
          ))}
        </div>

        <div className=" flex flex-col md:flex-row justify-between gap-10">
          <div className="flex px-6 py-2 bg-white rounded-lg shadow flex-col justify-between items-center">
            <h1 className="text-2xl  uppercase font-light tracking-widest text-[#0009]">
              Revenue & Transaction
            </h1>
            <DashboardChart/>
          </div>
          <div className="px-1 py-2 bg-white rounded-lg shadow">
            <Inventory/>
          </div>
        </div>


        <div className="flex w-full flex-col md:flex-row  gap-4 justify-between">
          <GenderRatio/>
          <DataTable/>
        </div>
      </div>
    </React.Fragment>
  );
};

function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number;
    color: "primary" | "secondary" | "success" | "error" | "warning";
  }
) {

  const theme = useTheme();
  const { value, color } = props;

  // Map color prop to the correct theme color
  const textColor = {
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
  }[color];

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        size={80}
        color={color}
        variant="determinate"
        value={Math.abs(value)}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: textColor }}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
