import React from "react";
import { Link } from "react-router-dom";

const SettingsSidebar = ({ page, onNavigationChange }) => {
  const LinkReset = "p-0";
  const currentPage =
    "bg-fuchsia-800 text-black font-bold cursor-pointer py-2 px-4 flex items-center w-full border-none";
  const regularPage =
    "font-bold cursor-pointer py-2 px-4 flex items-center w-full hover:bg-slate-50  hover:bg-fuchsia-950 hover:text-white";

  return (
    <div
      className="w-1/5 transition duration-200 shadow-2xl ease-in-out bg:white text-sm font-light py-6"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <div className="">
        <div className="flex flex-col mt-8">
          <div className="border-b-2 border-white border-opacity-5 justify-start items-center px-4 text-black font-bold text-2xl mb-6">
            <div>Settings</div>
          </div>

          <div className="border-b-2 border-opacity-5 justify-start items-center gap-3 mb-6">
            <Link className={LinkReset}>
              <span
                className={page === "editProfile" ? currentPage : regularPage}
                onClick={() => onNavigationChange("editProfile")}
              >
                <span className="mr-4">Edit Profile</span>
              </span>
            </Link>
          </div>
          <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3 mb-6">
            <Link to="" className={LinkReset}>
              <span
                className={page === "editPromotion" ? currentPage : regularPage}
                onClick={() => onNavigationChange("editPromotion")}
              >
                <span className="mr-4">Promotion and Tips</span>
              </span>
            </Link>
          </div>
          <div className="border-b-2 border-white border-opacity-5 justify-start items-center gap-3 mb-6">
            <Link to="" className={LinkReset}>
              <span
                className={page === "editPassword" ? currentPage : regularPage}
                onClick={() => onNavigationChange("editPassword")}
              >
                <span className="mr-4">Change Password</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsSidebar;
