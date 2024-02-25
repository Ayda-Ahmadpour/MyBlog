import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashboardSideBar from "../../components/DashboardSideBar/DashboardSideBar";
import DashboardMain from "../../components/DashboardMain/DashboardMain";

export default function Dashboard() {
  const dashvoardTab = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const ParamsURL = new URLSearchParams(dashvoardTab.search);
    const tab = ParamsURL.get("tab");
    console.log(tab);
    if (!tab) {
      setTab(tab);
    }
  }, [dashvoardTab.search]);
  return (
    <div className="flex  flex-col md:flex-row min-h-screen">
      <div>
        <DashboardSideBar />
      </div>
      <div className="items-center flex-col flex justify-center w-full">
        <DashboardMain />
        {tab === "profile" && <DashboardMain />}
        {tab === "signout" && <DashboardMain />}
        {tab === "profile" && <DashboardMain />}
      </div>
    </div>
  );
}
