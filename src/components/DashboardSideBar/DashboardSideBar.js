import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { SignOutSuccess } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

export default function DashboardSideBar() {
  const { navigate } = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_SERVER_URL;
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

  const handelSignOut = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/api/user/signout`);
      console.log(response);
      dispatch(SignOutSuccess());
      navigate("/SignIn");
    } catch (error) {
      console.log(error);
    }
  };
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
          <Sidebar.Item href="#" icon={HiArrowSmRight} onClick={handelSignOut}>
            Sign Out
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
