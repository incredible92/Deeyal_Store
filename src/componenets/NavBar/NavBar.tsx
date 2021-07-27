import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assests/logo.jpeg";

import "./NavBar.scss";

const links = [
  { name: "Home", path: "/home" },
  { name: "About us", path: "/about" },
  { name: "Catalog", path: "/catalog" },
  { name: "Login", path: "/login" },
  { name: "Contact", path: "/contact" },
];
const NavBar: FC = () => {
  return (
    <>
    <nav className="navBar">
      <img className="logo" src={logo} />
      <div className="general-search relative m-28 top-4">
        <form className=" search general-search shadow bg-white rounded mb-8 px-1 py-1 flex items-center border-2 transition-colors duration-500 ease-in-out relative">
          <input
            type="text"
            className="flex-grow px-2 focus:outline-none border-none"
            placeholder="Search for items"
          />
          <button className="py-2 rounded px-10 font-medium hover:bg-teal-800 hover:text-teal-100 transition-colors duration-500 ease-in-out">
            Search
          </button>
        </form>
      </div>
  
      {links.map((link, linkIndex) => (
        <NavLink
          key={`dash-nav_link-${linkIndex}`}
          to={link.path}
          className="cursor-pointer text-base border-b-4 font-bold border-transparent hidden lg:inline  text-gray-300"
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
    </>
  );
};

export default NavBar;
