import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcSettings } from "react-icons/fc";
import {
  MdDashboard,
  MdAdsClick,
  MdAssignment,
  MdLogout,
} from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BsSendCheck, BsClockHistory } from "react-icons/bs";
import { BiSolidMessageDots } from "react-icons/bi";
import { SiPivotaltracker, SiRider } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import brand from "../../assets/logo.png";
import { SidebarContext } from "../../contexts/SidebarContext";

const AdminSidebar = ({ page }) => {
  const LinkReset = "p-0";
  const currentPage =
    "bg-fuchsia-700 text-white font-bold cursor-pointer py-2 px-4 flex items-center w-full border-none justify-start items-center gap-3 mb-6";
  const regularPage =
    "text-white font-bold cursor-pointer py-2 px-4 flex items-center w-full hover:bg-slate-50 hover:text-slate-700 border-b-2 border-white border-opacity-5";
  const currentSubMenu = `text-white font-bold cursor-pointer py-2 pl-10 pr-4 flex items-center w-full border-none`;
  const regularSubMenu = `text-white font-bold cursor-pointer py-2 pl-10 pr-4 flex items-center w-full hover:bg-slate-50 hover:text-slate-700`;

  // states, hooks, context
  const [showSubMenuTracker, setShowSubMenuTracker] = useState(false);
  const [showSubMenuTrackers, setShowSubMenuTrackers] = useState(false);
  const { showSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();

  return (
    <div
      className={`lg:w-1/5 lg:translate-x-0 w-64 fixed inset-y-0 left-0 transform transition duration-200 shadow-2xl ease-in-out flex flex-col bg-fuchsia-950  text-white text-sm font-light py-6 z-50  ${
        showSidebar
          ? "translate-x-0 shadow-lg"
          : "-translate-x-full shadow-none"
      }`}
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <div className="relative h-full flex flex-col justify-between">
        <div className="py-6">
          <Link to="/" className={LinkReset}>
            <div className="flex items-center px-2">
              <img src={brand} alt="" className="w-28" />
            </div>
          </Link>

          <div className="flex flex-col mt-20 space-y-3">
            <div className="overflow-y-auto">
              <Link to="/admin-dashboard" className="">
                <span
                  className={page === "dashboard" ? currentPage : regularPage}
                >
                  <MdDashboard size={24} className="mr-4" /> Dashboard
                </span>
              </Link>
            </div>

            <div>
              <span
                className={page.includes("tracker") ? currentPage : regularPage}
                onClick={() => {
                  setShowSubMenuTracker(!showSubMenuTracker);
                  setShowSubMenuTrackers(false);
                }}
              >
                <SiPivotaltracker size={24} className="mr-4" /> Track Rider
                <IoIosArrowDown
                  size={20}
                  className={`ml-auto ${
                    showSubMenuTracker ? "transform rotate-180" : ""
                  }`}
                  style={{
                    transform: showSubMenuTracker ? "rotate(180deg)" : "none",
                  }}
                />
              </span>
              <div
                className={`${
                  showSubMenuTracker ? "flex flex-col" : "hidden"
                } text-center bg-fuchsia-900`}
              >
                <span
                  className={`${
                    page === "tracker" ? currentSubMenu : regularSubMenu
                  }`}
                  onClick={() => navigate("/admtrack-rider")}
                >
                  Track Riders History
                </span>
                <span
                  className={`${
                    page === "tracker" ? currentSubMenu : regularSubMenu
                  }`}
                  onClick={() => navigate("/admtrack-rider/livetracker")}
                >
                  Live Tracking
                </span>
              </div>
            </div>
            <div className="">
              <Link to="/assign-order" className={LinkReset}>
                <span className={page === "assign" ? currentPage : regularPage}>
                  <MdAssignment size={24} className="mr-4" /> Assign Orders
                </span>
              </Link>
            </div>
            <div className="">
              <Link to="/order-history" className={LinkReset}>
                <span
                  className={
                    page === "order-history" ? currentPage : regularPage
                  }
                >
                  <BsClockHistory size={24} className="mr-4" />
                  Order History
                </span>
              </Link>
            </div>

            <div className="">
              <Link to="/promotion" className={LinkReset}>
                <span
                  className={page === "promotion" ? currentPage : regularPage}
                >
                  <BsSendCheck size={24} className="mr-4" /> Promotions
                </span>
              </Link>
            </div>

            <div className="">
              <Link to="" className={LinkReset}>
                <span className={page === "quiz" ? currentPage : regularPage}>
                  <BiSolidMessageDots size={24} className="mr-4" /> Messages
                </span>
              </Link>
            </div>
            <div className="">
              <Link to="/admin-wallet" className={LinkReset}>
                <span
                  className={
                    page === "admin-wallet" ? currentPage : regularPage
                  }
                >
                  <FaWallet size={24} className="mr-4" /> Wallet
                </span>
              </Link>
            </div>
            <div className="">
              <Link to="/admin-rider" className={LinkReset}>
                <span
                  className={page === "admin-rider" ? currentPage : regularPage}
                >
                  <SiRider size={24} className="mr-4" />
                  Riders
                </span>
              </Link>
            </div>

            <div className="">
              <Link to="/admin-logout" className={LinkReset}>
                <span
                  className={page === "logout" ? currentPage : regularPage}
                  // onClick={() => navigate("/admin-dashboard")}
                >
                  <MdLogout size={24} className="mr-4" /> Logout
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
