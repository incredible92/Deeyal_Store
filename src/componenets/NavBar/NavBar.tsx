import React,{FC} from 'react'
import { NavLink } from "react-router-dom";
import logo from "../../assests/logo.jpeg"

import "./NavBar.scss"

const links = [
  
  {name: "Home", path: "/home" },
  { name: "Aboutus", path: "/about" },
  { name: "Order", path: "/order" },
  { name: "Login", path: "/login" },
  { name: "contact", path: "/contact" },

];
const NavBar:FC = () => {
  return (
  
    <nav className="navBar">
        <img className="logo" src={logo} />
        <span className="grow" />
        {links.map((link, linkIndex) => (
        <NavLink
          key={`dash-nav_link-${linkIndex}`}
          to={link.path}
          className="ml-12 cursor-pointer text-sm border-b-4 border-transparent hidden lg:inline py-1"
        >
          {link.name}
        </NavLink>
      ))}

      
    </nav>
    
  )
}

export default NavBar
