import { QuadraticBezierLine } from "@react-three/drei";
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      const isScrollingDown = scrollY > lastScrollY;

      setIsScrolled(isScrollingDown && scrollY > 10);
      lastScrollY = scrollY;
    };

    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavbar);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-5 px-8 flex justify-between items-center transition-all duration-300 ease-in-out ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      } ${location.pathname === "/" ? "bg-transparent" : "bg-white shadow-md"}`}
    >
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
            `transform transition-all duration-300 hover:scale-110 ${
              isActive
                ? "text-blue-500"
                : location.pathname === "/"
                ? "text-white hover:text-blue-400"
                : "text-black hover:text-blue-400"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `transform transition-all duration-300 hover:scale-110 ${
              isActive
                ? "text-blue-500"
                : location.pathname === "/"
                ? "text-white hover:text-blue-400"
                : "text-black hover:text-blue-400"
            }`
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
