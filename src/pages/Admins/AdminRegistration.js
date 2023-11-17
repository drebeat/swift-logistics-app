import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import axios from "../../api/axios";
import LandingAdminNav from "../../components/Admins/LandingAdminNav";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Box } from "@mui/material";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import "../../components/Admins/AdminRegComp.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("This field is required"),
  name: yup.string("Enter your first name").required("This field is required"),
  // .min(3, "First name must be at least 3 characters")
  role: yup.string("Enter your first name"),
  // .required("This field is required")
  // .min(3, "First name must be at least 3 characters")
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

const AdminRegistration = () => {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState("false");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      role: "superAdmin",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/auth/admin/register", {
          email: values.email,
          name: values.name,
          role: values.role,
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

        navigate("/admin-login");
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
      className="min-h-screen"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <LandingAdminNav />
      <div className="h-[800px] bg-white container mx-auto drop-shadow-2xl py-4 flex flex-col justify-center items-center">
        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center items-center flex-col w-screen h-screen"
        >
          <div className="px-10 pt-6 rounded-xl shadow-md max-w-md h-[900px]">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-600">
                Admin Registration!
              </h1>
              <div className="opacity-50 text-center text-black py-3 text-xl font-normal break-words">
                Welcome, Kindly provide your details to
                <div>register your account.</div>
              </div>
              <div>
                {message ? (
                  <p className="text-danger text-red-600 text-sm">{message}</p>
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
                  htmlFor="name"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur}
                  placeholder="Name"
                  id="name"
                  autoComplete="off"
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.name && formik.errors.name}
                </div>
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block mb-1 text-gray-600 font-semibold text-xl"
                >
                  Role
                </label>
                <input
                  type="text"
                  className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange("role")}
                  onBlur={formik.handleBlur}
                  placeholder="superAdmin"
                  id="role"
                  autoComplete="off"
                  disabled
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.role && formik.errors.role}
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
              className="mt-4 w-full bg-fuchsia-950 text-white font-semibold py-2 mb-6 rounded-md text-xl tracking-wide"
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

export default AdminRegistration;
