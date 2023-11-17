import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import LandingNav from "./LandingNav";
import axios from "../../api/axios";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Box } from "@mui/material";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import "./UserRegComp.css";

const validationSchema = yup.object({
  firstName: yup
    .string("Enter your first name")
    .required("This field is required")
    .min(3, "First name must be at least 3 characters"),
  lastName: yup
    .string("Enter your last name")
    .required("This field is required")
    .min(3, "Last name must be at least 3 characters"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("This field is required"),
  phoneNumber: yup
    .string("Enter your phone number")
    .required("This field is required")
    .matches(
      /^((\+[1-9]{1,4}[ -]*)|(\([0-9]{2,3}\)[ -]*)|([0-9]{2,4})[ -]*)*?[0-9]{3,4}?[ -]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    ),
  password: yup
    .string("Enter your password")
    .required("This field is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number, and one special character"
    ),
  confirmPassword: yup
    .string("Enter your password again")
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const UserRegComp = () => {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState("false");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true); // Set loading to true when submitting

        const response = await axios.post("/auth/users/register", {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          email: values.email,
          password: values.password,
        });

        setLoading(false); // Reset loading after successful submission

        if (response.data && response.data.data) {
          const userId = response.data.data;
          // Store the `userId` in localStorage
          localStorage.setItem("userId", userId);
        }

        // console.log(response.data);

        Swal.fire({
          toast: true,
          icon: "success",
          title:
            "Registration Successful! A verification link has been sent to your email.",
          position: "top",
          timer: 3000,
          showConfirmButton: false,
        });

        navigate("/otp-verification");
      } catch (error) {
        setLoading(false); // Reset loading after submission failure
        console.error(error);

        if (error.response) {
          setMessage(error.response.data.message);
        } else {
          setMessage("An error occurred while processing your request.");
        }
      }
    },
  });

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
      className="min-h-screen pb-10"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <LandingNav />
      <div className="h-[1000px] bg-white container mx-auto drop-shadow-2xl py-4 flex flex-col justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center items-center flex-col w-screen h-screen"
        >
          <div className="px-10 py-4 rounded-xl shadow-md max-w-md h-[900px]">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                User Registration!
              </h1>
              <div className="opacity-50 text-center text-black py-3 text-xl font-normal break-words">
                Welcome, Kindly provide your details
                <div>register your account.</div>
              </div>
              <div>
                {message ? (
                  <p className="text-danger text-red-600 text-sm">{message}</p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="First Name"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur}
                  placeholder="First Name"
                  id="firstName"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
              </div>
              <div>
                <label
                  htmlFor="First Name"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur}
                  placeholder="Last Name"
                  id="lastName"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
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
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur}
                  placeholder="Email"
                  id="email"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.email && formik.errors.email}
                </div>
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block mb-1 text-gray-600 font-semibold text-lg"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="text-black bg-indigo-50 px-4 py-2 mb-3 outline-none rounded-md w-full text-lg"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange("phoneNumber")}
                  onBlur={formik.handleBlur}
                  placeholder="Phone Number"
                  id="phoneNumber"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.phoneNumber && formik.errors.phoneNumber}{" "}
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
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.password && formik.errors.password}
                </div>
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  Confirm Password
                </label>
                <input
                  type={PasswordInputType}
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange("confirmPassword")}
                  onBlur={formik.handleBlur}
                  placeholder="Confirm Password"
                  id="confirmPassword"
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
                  {ToggleIcon}
                </Box>
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.confirmPassword &&
                    formik.errors.confirmPassword}
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading} // Disable the button while loading
              className="mt-4 w-full bg-fuchsia-950 text-white font-semibold py-2 rounded-md text-xl tracking-wide"
            >
              {loading && <div className="spinner"></div>}
              {loading ? "Loading . . ." : "Continue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegComp;
