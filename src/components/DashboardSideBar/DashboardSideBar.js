import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DashboardSideBar() {
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
    <Sidebar>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} active={tab === "profile"}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
