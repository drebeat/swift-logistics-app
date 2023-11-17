import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { PasswordResetContext } from "../../contexts/PasswordResetContext";
import { useFormik } from "formik";
import * as yup from "yup";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Box } from "@mui/material";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import "./UserRegComp.css";
import LandingNav from "./LandingNav";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

const validationSchema = yup.object({
  email: yup.string().email().required("This field is required"),
  password: yup.string().required("This field is required"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.prevURL
    ? location.state?.prevURL
    : "/users-dashboard";
  const [message, setMessage] = useState("");
  const labelStyles = "block text-gray-600 font-semibold text-sm";
  const context = useAuth();
  const passwordContext = useContext(PasswordResetContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true); // Set loading to true when submitting
        const res = await axios.post("/auth/users/login", {
          email: values.email,
          password: values.password,
        });
        setLoading(false); // Reset loading after successful submission

        if (res) {
          localStorage.setItem("refresh", res?.data?.refreshToken);
          context?.setAuth({
            accessToken: res?.data?.accessToken,
            role: "user",
          });
          console.log(context);
          navigate(from);
          resetForm();
        }
      } catch (err) {
        setLoading(false); // Reset loading after submission failure
        console.error(err.response);
        setMessage(err.response.data.message);
      }
    },
  });

  const togglePersist = () => {
    context?.setPersist((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("persist", context?.persist);
  }, [context]);

  const show = showPassword ? (
    <BsEyeSlash
      color=" #1E3A8A"
      size={18}
      icon={showPassword ? "eye-slash" : "eye"}
      onClick={() => setShowPassword((visibility) => !visibility)}
    />
  ) : (
    <BsEye
      color=" #1E3A8A"
      size={18}
      icon={showPassword ? "eye-slash" : "eye"}
      onClick={() => setShowPassword((visibility) => !visibility)}
    />
  );

  const [PasswordInputType, ToggleIcon] = usePasswordToggle();

  return (
    <div
      className="min-h-screen pb-6"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <LandingNav />
      <div className="bg-white h-[600px] container mx-auto mt-4 drop-shadow-2xl py-4 flex flex-col justify-center items-center cursor-pointer">
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the default form submission
            formik.handleSubmit(); // Trigger formik handleSubmit manually
          }}
          className="flex justify-center items-center flex-col w-screen h-screen"
        >
          <div className="px-10 py-4 rounded-xl shadow-md max-w-md">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                User Sign In
              </h1>
              <div className="opacity-50 text-center text-black py-3 text-xl font-normal break-words">
                Welcome back, Kindly provide your login details and
                <div>Sign-in to your account.</div>
              </div>
              <div>
                {message ? (
                  <p className="text-danger text-red-600 text-base">
                    {message}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur}
                  placeholder="Email"
                  id="email"
                  autoComplete="off"
                />

                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  Password
                </label>

                <input
                  type={showPassword ? "password" : "text"}
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur}
                  placeholder="Password"
                  id="password"
                  autoComplete="off"
                />
                <Box
                  sx={{
                    position: "relative",
                    left: "19rem",
                    bottom: "2rem",
                    cursor: "pointer",
                  }}
                >
                  {show}
                </Box>
                <div className="text-danger text-red-600 text-sm">
                  {formik.touched.password && formik.errors.password}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div></div>{" "}
              <div
                className="text-black text-center text-sm font-semibold mt-2 cursor-pointer"
                onClick={() => {
                  passwordContext?.setRole("user");
                  navigate("/forgot-password");
                }}
              >
                Forgot Password?
              </div>
              <div></div>
            </div>
            <button
              type="submit"
              disabled={loading} // Disable the button while loading
              className="mt-4 w-full bg-fuchsia-950 text-white font-semibold py-2 rounded-md text-xl tracking-wide"
              // onClick={formik.handleSubmit}
            >
              {loading && <div className="spinner"></div>}
              {loading ? "Loading . . ." : "Continue"}
            </button>

            <div className="flex justify-start items-end mt-4">
              <input
                className="h-5 w-5 mr-1.5 mb-0.5 ml-0.5"
                type="checkbox"
                id="persist"
                onChange={() => togglePersist()}
                checked={context?.persist}
              />
              <label htmlFor="persist" className={labelStyles}>
                Remember this device
              </label>
            </div>
            <div
              className="text-black text-center text-sm font-semibold mt-2 cursor-pointer"
              onClick={() => navigate("/user-registration")}
            >
              Don't have account? Create account
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
