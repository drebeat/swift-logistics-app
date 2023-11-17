import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "../../styles/loginBG.css";
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import LandingNav from "./LandingNav";
import axios from "../../api/axios";

const validationSchema = yup.object({
  email: yup
    .string("Enter your company email")
    .email("Enter a valid email")
    .required("This field is required"),
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const res = await axios
        .post("/auth/users/forgot-password", {
          email: values.email,
        })
        .catch((err) => {
          console.error(err.response);
          setMessage(err.response.data.message);
        });

      if (res.data && res.data.data) {
        const userId = res.data.data;
        // Store the `userId` in localStorage
        localStorage.setItem("userId", userId);
      }

      console.log(res.data);

      if (res?.status === 200) {
        Swal.fire({
          toast: true,
          icon: "success",
          title:
            "An email has been sent with a link to change your password to this email.",
          position: "top",
          timer: 3000,
          showConfirmButton: false,
        });
        resetForm();

        navigate(`/email-verification`);
      }
    },
  });

  return (
    <div
      className="min-h-screen pb-10"
      style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
    >
      <Helmet>
        <title>Forgot Password | Swift App</title>
      </Helmet>

      <LandingNav />
      <div className="bg-white container mx-auto drop-shadow-2xl py-4 flex flex-col justify-center items-center">
        <form className="flex justify-center items-center flex-col w-screen h-screen">
          <div className="px-10 py-4 rounded-xl shadow-md max-w-sm">
            <div className="space-y-3">
              <h1 className="text-center text-2xl font-semibold text-gray-900">
                Forgot Password
              </h1>
              <div className="opacity-80 text-center text-black py-3 text-xl font-normal break-words">
                Welcome, Kindly provide your email
                <div>to reset your password.</div>
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
                  name="email"
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
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-fuchsia-950 text-white font-semibold py-2 rounded-md text-xl tracking-wide"
              onClick={(e) => {
                formik.handleSubmit(e);
              }}
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
