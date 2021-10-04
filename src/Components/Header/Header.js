import React from "react";
import "./Header.css";
import "./HeaderFunc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center bg-gray-50 p-3 flex-wrap md:px-10 border border-b-3">
        <NavLink to="/home" className="p-2 mr-4 inline-flex items-center">
          <FontAwesomeIcon
            className="text-green-700"
            icon={faBook}
            size="2x"
          ></FontAwesomeIcon>
          <span className="text-xl text-green-700 italic tracking-wide">
            &nbsp;WorldLerner
          </span>
        </NavLink>
        <button
          className="text-green-700 inline-flex p-3 rounded lg:hidden ml-auto hover:text-gray-800 outline-none nav-toggler"
          data-target="#navigation"
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <div
          className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <NavLink
              to="/home"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-800 items-center justify-center hover:text-gray-800"
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-800 items-center justify-center hover:text-gray-800"
            >
              <span>About</span>
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-800 items-center justify-center hover:text-gray-800"
            >
              <span>Services</span>
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-green-800 items-center justify-center hover:text-gray-800"
            >
              <span>Contact Us</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
