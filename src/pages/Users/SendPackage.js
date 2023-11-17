import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import UsersLayout from "../../components/Users/UsersLayout";
import { Helmet } from "react-helmet";
import UsersHeader from "../../components/Users/UsersHeader";
import axios from "../../api/axios";

const validationSchema = yup.object({
  senderLocation: yup
    .string("Enter Sender's Location")
    .required("This field is required")
    .min(3, "First name must be at least 3 characters"),
  receiverLocation: yup
    .string("Enter Receiver's Location")
    .required("This field is required")
    .min(3, "Last name must be at least 3 characters"),
});

const SendPackage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      senderLocation: "",
      receiverLocation: "",
    },
    validationSchema,
    // onSubmit: async (values, { resetForm }) => {
    //   const res = await axios
    //     .post("users/", {
    //       senderLocation: values.senderLocation,
    //       receiverLocation: values.receiverLocation,
    //     })
    //     .catch((err) => {
    //       setMessage(err.response.data.message);
    //     });
    //   if (res.status === 201) {
    //     resetForm();
    //     Swal.fire({
    //       toast: true,
    //       icon: "success",
    //       title:
    //         "Registration Successful! A verification link has been sent to your email.",
    //       position: "top",
    //       timer: 3000,
    //       showConfirmButton: false,
    //     });

    //     navigate("/payment-processing");
    //   }
    // },
  });

  return (
    <UsersLayout page="sendpackage">
      <Helmet>
        <title>Send Package | Swift App</title>
      </Helmet>

      <UsersHeader />
      <div
        className="w-full min-h-screen overflow-hidden"
        style={{ fontFamily: "Schibsted Grotesk, sans-serif" }}
      >
        <div className="bg-fuchsia-50">
          <div className="text-fuchsia-700 text-[32px] font-bold py-8 px-10">
            Send Package
          </div>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="py-4 mt-8">
            <div>
              {message ? (
                <p className="text-danger text-red-600 text-sm">{message}</p>
              ) : null}
            </div>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Column on small screens, row on larger screens
                justifyContent: { xs: "center", sm: "flex-between" }, // Centered on small screens, start on larger screens
                alignItems: { xs: "center", sm: "flex-start" }, // Centered on small screens, start on larger screens
                "& .MuiTextField-root": {
                  m: 1,
                  width: { xs: "100%", sm: "30ch", md: "40ch" },
                }, // Adjust width on different screen sizes
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  label="Sender's Location"
                  defaultValue="Lagos"
                  name="senderLocation"
                  value={formik.values.senderLocation}
                  onChange={formik.handleChange("senderLocation")}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.senderLocation &&
                    formik.errors.senderLocation}
                </div>
              </div>
              <div>
                {" "}
                <TextField
                  label="Receiver's Location"
                  defaultValue="Abuja"
                  name="receiverLocation"
                  value={formik.values.receiverLocation}
                  onChange={formik.handleChange("receiverLocation")}
                  onBlur={formik.handleBlur}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="text-danger text-red-600 text-base">
                  {formik.touched.receiverLocation &&
                    formik.errors.receiverLocation}
                </div>
              </div>
            </Box>
          </div>

          <div className="flex justify-center mb-6">
            <Stack
              direction="row"
              spacing={2}
              sx={{ display: "flex", justifyContent: "space-center" }}
            >
              <Button
                variant="contained"
                sx={{ background: "#460042", paddingX: 6 }}
                // onClick={(e) => {
                //   formik.handleSubmit(e);
                // }}

                onClick={() => navigate("/payment-processing")}
              >
                NEXT
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </UsersLayout>
  );
};

export default SendPackage;
