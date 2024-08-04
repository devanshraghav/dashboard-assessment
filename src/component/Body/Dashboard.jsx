import React from "react";
import SideBar from "../Sidebar";
import Card from "../Card";
import Profit from "../Profit";
import Orders from "../Orders";

const Dashboard = () => {
  const MobileView = () => {
    return (
      <div className="lg:hidden">
        <div className="flex flex-wrap gap-2 justify-evenly">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        {/* Profit Section */}
        <Profit />

        {/* Orders Section */}
        <Orders />
      </div>
    );
  };

  const PcView = () => {
    return (
      <div className="hidden lg:flex">
        <div>
          <div className="flex flex-wrap gap-2 justify-around m-2 p-1">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

          <Orders />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="lg:flex">
        <SideBar />

        {/*  */}
        <div className="bg-black w-full">
          <h2 className="text-xl text-white font-bold">Dashboard</h2>
          <MobileView />
          <PcView />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
