import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import LandingNav from "./LandingNav";
import axios from "../../api/axios";

const validationSchema = yup.object({
  otp: yup.string("Enter your otp code.").required("This field is required"),
});

const OtpVerificationComp = () => {
  const [message, setMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId") || "";

  const formik = useFormik({
    initialValues: {
      otp: "",
      userId,
    },
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {
      const res = await axios
        .post("/auth/users/verify", {
          otp: values.otp,
          userId: values.userId,
        })
        .catch((err) => {
          console.error(err.response);
          setMessage(err.response.data.message);
        });
      if (res) {
        resetForm();
        Swal.fire({
          toast: true,
          icon: "success",
          title: "Verification was successful!.",
          position: "top",
          timer: 3000,
          showConfirmButton: false,
        });
        setIsVerified(true);
      }

      navigate("/user-login");
    },
  });

  if (isVerified) {
    return (
      <div style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}>
        <LandingNav />
        <div className="bg-white container mx-auto drop-shadow-2xl py-4 flex flex-col justify-center items-center">
          <div className="font-bold text-center text-xl">
            Email Address Verification
          </div>
          <div className="opacity-50 text-center text-black mb-16 text-xl font-normal break-words">
            Enter the code that was sent to your email address
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <LandingNav />
      <div
        className="h-screen w-screen flex justify-center items-center"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="bg-white md:h-[400px] container mx-auto my-3 drop-shadow-2xl py-4 flex flex-col justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            className="flex justify-center items-center flex-col w-screen max-h-fit md:h-screen"
          >
            <div className="px-10 py-6 rounded-xl shadow-md max-w-sm">
              <div className="space-y-3">
                <h1 className="text-center text-2xl font-semibold text-gray-600">
                  Verify Email
                </h1>
                <div>
                  {message ? (
                    <p className="text-danger text-red-600 text-base">
                      {message}
                    </p>
                  ) : null}
                </div>

                {/* Verification code */}
                <div className="mt-4">
                  <label
                    htmlFor="verification_code"
                    className="block text-gray-600 font-semibold text-xl"
                  >
                    Verification Code
                  </label>
                  <input
                    type="text"
                    className="text-black bg-indigo-50 px-4 py-2 outline-none rounded-md w-full text-xl"
                    name="otp"
                    value={formik.values.otp}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Otp Code"
                    id="otp"
                    autoComplete="off"
                  />
                  <div className="text-danger text-red-600 text-sm">
                    {formik.touched.otp && formik.errors.otp}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <button
                  type="submit"
                  className="w-full bg-fuchsia-950 text-white hover-bg-fuchsia-500 hover-text-slate-700 font-semibold py-2 rounded-md text-base tracking-wide"
                >
                  Verify Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default OtpVerificationComp;
