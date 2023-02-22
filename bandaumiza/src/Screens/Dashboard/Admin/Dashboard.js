import React from "react";
import SideBar from "../SideBar";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import Table from "../../../Components/Table";
import { Movies } from "../../../Data/Movies";

function Dashboard() {
  const DashboardData = [
    {
      bg: "bg-orange-600",
      icon: FaRegCalendarAlt,
      title: "Total Movies",
      total: 90,
    },
    {
      bg: "bg-blue-700",
      icon: HiViewGridAdd,
      title: "Total Categories",
      total: 90,
    },
    {
      bg: "bg-green-600",
      icon: HiViewGridAdd,
      title: "Total Users",
      total: 1334,
    },
  ];

  return (
    <SideBar>
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {DashboardData.map((data, i) => (
          <div
            key={i}
            className="p-4 rounded bg-main border-border grid grid-cols-4 gap-2"
          >
            <div
              className={`col-span-1 rounded-full h-12 w-12 flex-colo ${data.bg}`}
            >
              <data.icon />
            </div>
            <div className="col-span-3">
              <h2>{data.title}</h2>
              <p className=" mt-2 font-bold">{data.total}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-md font-medium mt-8 mb-3 text-dryGray">
        Recent Movies
      </h3>
      <Table data={Movies.slice(0, 5)} admin={true} />
    </SideBar>
  );
}

export default Dashboard;
