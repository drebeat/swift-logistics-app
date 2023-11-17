import React, { useState } from "react";
import { Link } from "react-router-dom";

const LandingNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className="px-3 md:px-8 bg-fuchsia-950 mb-6"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <div className="flex justify-between items-center">
        <Link to="/">
          <img
            src={require("../../assets/logo.png")}
            alt="Swift App"
            className="w-24 md:w-36 h-auto shadow-xl"
          />
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl">
            <span className="w-4 h-4 text-sm md:text-md">☰</span>{" "}
            {/* Show Hamburger menu icon */}
            {menuOpen ? (
              <span className="ml-2 text-sm md:text-md">Close</span> // Show "Close" when open
            ) : (
              <span className="ml-2 text-sm md:text-md">Menu</span> // Show "Menu" when closed
            )}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`md:flex space-x-6 py-4 md:py-0 text-md md:text-xl ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            to="/"
            className="hover:bg-purpleBg px-4 hover:text-slate-200 text-white mb-4 block lg:inline transition-transform transform hover:scale-105 text-center hover:rounded-md"
          >
            Home
          </Link>
          <Link
            to="/user-registration"
            className="hover:bg-purpleBg px-4 hover:text-slate-200 text-white mb-4 block lg:inline transition-transform transform hover:scale-105 text-center hover:rounded-md"
          >
            Get Started
          </Link>
          <Link
            to="/user-login"
            className="hover:bg-purpleBg px-4 hover:text-slate-200 text-white mb-4 block lg:inline transition-transform transform hover:scale-105 text-center hover:rounded-md"
          >
            Sign-in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
