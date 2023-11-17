import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const RiderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute top-8 right-8 z-50">
        <div className="w-6 h-6 cursor-pointer" onClick={toggleMenu}>
          <div
            className={`w-full h-1 mb-1 rounded-full ${
              menuOpen ? "bg-white" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-full h-1 mb-1 rounded-full ${
              menuOpen ? "bg-white" : "bg-white"
            }`}
          ></div>
          <div
            className={`w-full h-1 rounded-full ${
              menuOpen ? "bg-white" : "bg-white"
            }`}
          ></div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31716.495577812322!2d3.4504165823433595!3d6.45024078103445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf452da3bd44b%3A0x47331fb41adc9d28!2sLekki%20Phase%201%20106104%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1698747113335!5m2!1sen!2sng"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Hamburger menu items */}
      {menuOpen && (
        <div className="absolute top-16 right-8 z-50 bg-fuchsia-900 p-4 text-white shadow-lg rounded-3xl opacity-80">
          <ul className="space-y-5 py-3">
            <li className="mb-2 border-b-2 border-gray-40">Report</li>
            <li className="mb-2 border-b-2 border-gray-40">Manage</li>
            <li className="mb-2 border-b-2 border-gray-40">Play back</li>
            <li className="mb-2 border-b-2 border-gray-40">Riders Tracker</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RiderComponent;
