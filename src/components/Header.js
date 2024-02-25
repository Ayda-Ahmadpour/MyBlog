import "./Header.scss";
import {
  Button,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  Avatar,
} from "flowbite-react";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { toggleTheme } from "../redux/theme/theme";
import { useSelector, useDispatch } from "react-redux";
import { IoSunnySharp } from "react-icons/io5";

export default function Header() {
  const dispatch = useDispatch();
  const path = useLocation().pathname;
  const { user } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar className="border-b-2 border-slate pt-6 pb-4">
      <Link to="/" className="flex justify-center items-center profile">
        <span className="bg-gradient-to-r from-pink-500 to-rose-300 profile__blog">
          Blogs
        </span>
      </Link>
      <form className="hidden lg:inline">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <CiSearch className="profile__searchIcon" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            placeholder="search..."
            required
          />
          <button
            type="submit"
            className="profile__btn text-white absolute end-2.5 bottom-2.5 bg-pink-400 hover:bg-rose-400 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Search
          </button>
        </div>
      </form>
      <div className="relative w-12 h-10 items-center justify-center flex rounded-md border border-pink-400 lg:hidden">
        <div className="absolute">
          <CiSearch className="profile__searchIcon" />
        </div>
      </div>
      <div className="flex md:order-last">
        <Button
          className="header__mood hidden sm:inline mr-3"
          onClick={() => {
            dispatch(toggleTheme());
          }}
        >
          {theme === "light" ? (
            <FaMoon />
          ) : (
            <IoSunnySharp className="text-lg" />
          )}
        </Button>
        {user ? (
          <Dropdown
            arrowIcon={false}
            className=""
            inline
            label={
              <Avatar
                rounded
                bordered
                color="pink"
                size="md"
                status="online"
                alt="user-picture"
                img={user.profileIMG}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user.username}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item as={Link} to="/Dashboard?tab=profile">
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/Dashboard">
              Settings
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/Dashboard">
              Earnings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/SignIn">
            <Button color="pink">Sign In</Button>
          </Link>
        )}
        <NavbarToggle className="ml-2" />
      </div>
      <NavbarCollapse className="">
        <li className="header__item">
          <NavLink
            className={path === "/" ? "header__link--active" : "header__link"}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            className={
              path === "/Dashboard" ? "header__link--active" : "header__link"
            }
            to={"/dashboard?tab=profile"}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            className={
              path === "/SignUp" ? "header__link--active" : "header__link"
            }
            to={"/SignUp"}
          >
            Sign Up
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink
            className={
              path === "/SignIn" ? "header__link--active" : "header__link"
            }
            to={"/SignIn"}
          >
            Sign In
          </NavLink>
        </li>
      </NavbarCollapse>
    </Navbar>
  );
}
