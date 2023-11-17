import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiGift } from "react-icons/fi";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";

const Notification = () => {
  const navigate = useNavigate();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <UsersLayout page="dashboard">
      <Helmet>
        <title>Notification | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen bg-fuchsia-100 overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="">
          <div className="text-fuchsia-700 text-[32px] font-bold py-8 px-10">
            Notification
          </div>
        </div>
        <div className="px-10 mt-1">
          <div className="bg-white shadow-md p-4 rounded-md">
            <div className="flex justify-between">
              <button
                className={`py-2 px-4 focus:outline-none ${
                  tabValue === 0
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={(e) => handleTabChange(e, 0)}
              >
                Messages
              </button>
              <button
                className={`py-2 px-4 focus:outline-none ${
                  tabValue === 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
                onClick={(e) => handleTabChange(e, 1)}
              >
                Orders
              </button>
            </div>

            {tabValue === 0 && (
              <div className="flex items-center justify-between mt-4 bg-fuchsia-600 px-3 rounded-lg">
                <img
                  src={require("../../assets/profile.jpg")}
                  alt=""
                  srcset=""
                  className="w-16 h-16 p-2 rounded-full"
                />

                <div className="ml-4">
                  <p className="text-base text-white">
                    User 2345 sent you a message, awaits your reply
                  </p>
                </div>

                <label className="flex items-center">
                  <input
                    type="checkbox"
                    // checked={received}
                    // onChange={handleReceivedChange}
                    className="form-checkbox h-5 w-5 text-blue-500"
                  />
                </label>
              </div>
            )}

            {tabValue === 1 && (
              <div className="flex items-center justify-between mt-4 bg-fuchsia-600 px-3 rounded-lg">
                <span className="flex items-center justify-center w-10 h-10 p-2 my-3 rounded-full bg-white">
                  <FiGift size={24} />
                </span>

                <div className="ml-4">
                  <p className="text-base text-white">
                    User 2345 sent you a message, awaits your reply
                  </p>
                </div>
                <button className="px-2 py-2 bg-fuchsia-400 text-white rounded-sm">
                  Received
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </UsersLayout>
  );
};

export default Notification;
