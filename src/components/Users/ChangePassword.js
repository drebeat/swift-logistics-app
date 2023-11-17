import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import "../../styles/loginBG.css";
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import LandingNav from "./LandingNav";
import axios from "../../api/axios";
import { BsEye, BsEyeSlash } from "react-icons/bs";

import usePasswordToggle from "../../hooks/usePasswordToggle";
import "./UserRegComp.css";

const validationSchema = yup.object({
  password: yup
    .string("Enter your password")
    .required("This field is required")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string("Enter your password again")
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const ChangePassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState("false");
  const [loading, setLoading] = useState(false);

  const userId = localStorage.getItem("userId") || "";

  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_password: "",
      userId,
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true); // Set loading to true when submitting
        const res = await axios.post("/auth/users/reset-password/", {
          password: values.password,
          userId: values.userId,
        });
        setLoading(false); // Reset loading after successful submission

        if (res.status === 200) {
          resetForm();
          Swal.fire({
            toast: true,
            icon: "success",
            title: "Your password has been reset successfully.",
            position: "top",
            timer: 3000,
            showConfirmButton: false,
          });
          navigate("/user-login");
        }
      } catch (err) {
        setLoading(false); // Reset loading after submission failure
        console.error(err.response);
        setMessage(err.response.data.message);
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
      <Helmet>
        <title>Reset Password | Swift App</title>
      </Helmet>
      <LandingNav />
      <div className="bg-white container mx-auto drop-shadow-2xl py-4 flex flex-col justify-center items-center">
        <form
          className="flex justify-center items-center flex-col w-screen h-screen"
          onSubmit={formik.handleSubmit}
        >
          <div className="px-10 py-4 rounded-xl shadow-md max-w-sm">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Change Password
              </h1>
              <div className="opacity-50 text-center text-black py-3 text-xl font-normal break-words">
                Welcome, Kindly provide your details
                <div>reset your password.</div>
              </div>
              <div>
                {message ? (
                  <p className="text-danger text-red-600 text-sm">{message}</p>
                ) : null}
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

export default ChangePassword;
