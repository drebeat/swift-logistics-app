import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LandingNav from "./LandingNav";

const GetStarted = () => {
  const navigate = useNavigate();
  return (
    <div
      className="overflow-hidden min-h-screen"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <LandingNav />
      <div className="bg-white container mx-auto drop-shadow-2xl py-4 flex flex-col justify-center items-center">
        <div className="font-bold text-center text-xl">Get Started</div>
        <div className="opacity-50 text-center text-black mb-16 text-xl font-normal break-words">
          Welcome Back, Kindly Select Your Option
          <div>To Get Started.</div>
        </div>

        <form
          action=""
          className="flex justify-center items-center flex-col w-screen space-y-2"
        >
          <div className="space-x-3">
            {" "}
            <input
              id="helper-checkbox"
              aria-describedby="helper-checkbox-text"
              type="radio"
              value=""
              checked
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <select
              name=""
              id=""
              class="bg-gray-200 border w-[270px] rounded p-2 m-2 text-gray-800 shadow-md"
            >
              <option
                value=""
                class="bg-white hover:bg-blue-200 hover:text-blue-700"
              >
                As a rider
              </option>
              <option
                value=""
                class="bg-white hover:bg-blue-200 hover:text-blue-700"
              >
                As an Individual
              </option>
            </select>
          </div>
          <div class="w-[300px] h-18 px-4 py-3 bg-fuchsia-950 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
            <div
              class="text-white text-lg font-normal capitalize"
              onClick={() => navigate("/user-registration")}
            >
              Continue
            </div>
          </div>

          <Link
            to="/user-login"
            className="text-black text-center text-sm font-semibold mt-2 cursor-pointer underline"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
