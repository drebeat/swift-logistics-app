import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { MdDashboard, MdAdsClick } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import { BsSendCheck } from "react-icons/bs";
import { BiSolidMessageDots } from "react-icons/bi";
import { SiPivotaltracker } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import brand from "../../assets/logo.png";
import { SidebarContext } from "../../contexts/SidebarContext";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const UsersSidebar = ({ page }) => {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const { setAuth, auth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const LinkReset = "p-0";
  const currentPage =
    "bg-fuchsia-800 text-white font-bold cursor-pointer py-2 px-4 flex items-center w-full border-none";
  const regularPage =
    "text-white font-bold cursor-pointer py-2 px-4 flex items-center w-full hover:bg-slate-50 hover:text-slate-700";

  const currentSubMenu = `text-white font-bold cursor-pointer py-2 pl-10 pr-4 flex items-center w-full border-none`;
  const regularSubMenu = `text-white font-bold cursor-pointer py-2 pl-10 pr-4 flex items-center w-full hover:bg-slate-50 hover:text-slate-700`;

  const [showSubMenuSetting, setShowSubMenuSetting] = useState(false);
  const [showSubMenuSettings, setShowSubMenuSettings] = useState(false);
  const { showSidebar } = useContext(SidebarContext);

  // const signOut = () => {
  //   axios.post(`/auth/users/logout`).catch((err) => {
  //     console.error(err?.response);
  //   });
  //   setAuth({});
  //   localStorage.removeItem("refresh");
  //   navigate("/user-login", {
  //     state: {
  //       prevURL: location.pathname,
  //     },
  //   });
  // };

  const openLogoutDialog = () => {
    setShowLogoutDialog(true);
  };

  const closeLogoutDialog = () => {
    setShowLogoutDialog(false);
  };

  const confirmLogout = () => {
    // Perform logout actions here
    axios.post(`/auth/users/logout`).catch((err) => {
      console.error(err?.response);
    });
    setAuth({});
    localStorage.removeItem("refresh");
    navigate("/user-login", {
      state: {
        prevURL: location.pathname,
      },
    });
    closeLogoutDialog();
  };

  return (
    <div
      className={`lg:w-1/5 lg:translate-x-0 w-64 fixed inset-y-0 left-0 transform transition duration-200 shadow-2xl ease-in-out flex flex-col bg-fuchsia-950  text-white text-sm font-light z-50  overflow-y-auto  ${
        showSidebar
          ? "translate-x-0 shadow-lg"
          : "-translate-x-full shadow-none"
      }`}
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <Link to="/users-dashboard" className={LinkReset}>
        <div className="flex items-center px-2">
          <img src={brand} alt="" className="w-28 h-auto" />
        </div>
      </Link>
      <div className="relative h-full">
        <div className="py-6">
          <div className="flex flex-col mt-8 space-y-2">
            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <Link to="/users-dashboard" className="">
                <span
                  className={page === "dashboard" ? currentPage : regularPage}
                >
                  <MdDashboard size={24} className="mr-4" /> Home
                </span>
              </Link>
            </div>

            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <Link to="/track-rider" className={LinkReset}>
                <span
                  className={page === "tracker" ? currentPage : regularPage}
                >
                  <SiPivotaltracker size={24} className="mr-4" /> Track Rider
                </span>
              </Link>
            </div>

            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <Link to="/send-package" className={LinkReset}>
                <span
                  className={page === "sendpackage" ? currentPage : regularPage}
                >
                  <BsSendCheck size={24} className="mr-4" /> Send Package
                </span>
              </Link>
            </div>
            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <Link to="/wallet" className={LinkReset}>
                <span className={page === "wallet" ? currentPage : regularPage}>
                  <FaWallet size={24} className="mr-4" /> Wallet
                </span>
              </Link>
            </div>
            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <a
                href="https://wa.me/+2348095575423"
                target="_blank"
                className={LinkReset}
              >
                <span className={page === "chat" ? currentPage : regularPage}>
                  {" "}
                  <BiSolidMessageDots size={24} className="mr-4" /> Chat With Us
                </span>
              </a>
            </div>
            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <Link to="/promotional-ads" className={LinkReset}>
                <span
                  className={page === "promotional" ? currentPage : regularPage}
                >
                  <MdAdsClick size={24} className="mr-4" /> Promotional Ads
                </span>
              </Link>
            </div>
            <div>
              <span
                className={
                  page.includes("settings") ? currentPage : regularPage
                }
                onClick={() => {
                  setShowSubMenuSetting(!showSubMenuSetting);
                  setShowSubMenuSettings(false);
                }}
              >
                <SiPivotaltracker size={24} className="mr-4" /> Settings
                <IoIosArrowDown
                  size={20}
                  className={`ml-auto ${
                    showSubMenuSetting ? "transform rotate-180" : ""
                  }`}
                  style={{
                    transform: showSubMenuSetting ? "rotate(180deg)" : "none",
                  }}
                />
              </span>
              <div
                className={`${
                  showSubMenuSetting ? "flex flex-col" : "hidden"
                } text-center bg-fuchsia-900`}
              >
                <span
                  className={`${
                    page === "settings" ? currentSubMenu : regularSubMenu
                  }`}
                  onClick={() => navigate("/settings/edit-profile")}
                >
                  Edit Profile
                </span>
                <span
                  className={`${
                    page === "settings" ? currentSubMenu : regularSubMenu
                  }`}
                  onClick={() => navigate("/settings/promotional-tips")}
                >
                  Promotional Tips
                </span>

                <span
                  className={`${
                    page === "settings" ? currentSubMenu : regularSubMenu
                  }`}
                  onClick={() => navigate("/settings/change-password")}
                >
                  Change Password
                </span>
              </div>
            </div>

            <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3">
              <span
                className={page === "" ? currentPage : regularPage}
                onClick={openLogoutDialog}
              >
                <FiLogOut size={24} className="mr-4" /> Logout
              </span>
            </div>
            {/* Logout confirmation dialog */}
            {showLogoutDialog && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-gray-800 mb-4">
                    Are you sure you want to logout?
                  </p>
                  <div className="flex justify-end">
                    <button
                      className="px-4 py-2 mr-2 bg-gray-500 text-white rounded"
                      onClick={closeLogoutDialog}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-red-700 text-white rounded"
                      onClick={confirmLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersSidebar;
