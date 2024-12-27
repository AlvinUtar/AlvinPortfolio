import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();  // Get the current location

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transform transition-all duration-300 hover:scale-110"
      >
        <p className="blue-gradient_text">AT</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 transform transition-all duration-300 hover:scale-110"
              : location.pathname === "/" // Check if the current page is the home page
              ? "text-white transform transition-all duration-300 hover:scale-110 hover:text-blue-400" // White with hover effect on home
              : "text-black transform transition-all duration-300 hover:scale-110 hover:text-blue-400" // Black with hover effect on other pages
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 transform transition-all duration-300 hover:scale-110"
              : location.pathname === "/" // Check if the current page is the home page
              ? "text-white transform transition-all duration-300 hover:scale-110 hover:text-blue-400" // White with hover effect on home
              : "text-black transform transition-all duration-300 hover:scale-110 hover:text-blue-400" // Black with hover effect on other pages
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
