import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
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

const RightDashboard = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    //     navigate("/user-login");
    //   }
    // },
  });
  return (
    <div className="w-full lg:w-[510px] lg:ml-20 xl:ml-6 xl:w-3/4 bg-white rounded-[10px] px-10 drop-shadow-2xl">
      <div className="text-3xl font-bold pt-5">Send Package</div>

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
              flexDirection: { xs: "column", xl: "row" }, // Column on small screens, row on larger screens
              justifyContent: { xs: "center", xl: "flex-between" }, // Centered on small screens, start on larger screens
              alignItems: { xs: "center", xl: "flex-start" }, // Centered on small screens, start on larger screens
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "100%", xl: "40ch" },
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
                {formik.touched.senderLocation && formik.errors.senderLocation}
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
  );
};

export default RightDashboard;
